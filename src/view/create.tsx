import { Card, Input, message } from "antd";
import { Fragment, useState } from "react";
import Mbutton from "@/components/memes/button";
import { useLocation } from "react-router";
import Icon from "@/components/icon";
import { useNavigate } from "react-router";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import Upload from "@/components/memes/upload";
import { domain } from "@/api";
import BigNumber from "bignumber.js";
import { useTranslation } from "react-i18next";

/**
 * 创建页面组件
 * 用于创建新的域名和相关项目信息
 * 包含两个主要步骤：
 * 1. 填写项目基本信息（图片、名称、描述等）
 * 2. 连接钱包并支付 SOL 完成注册
 */
export default function Create() {
  const { t } = useTranslation();
  // 获取路由状态（包含域名信息）和导航函数
  const { state } = useLocation();
  const navigate = useNavigate();

  /**
   * 组件状态管理
   * loadStatus: 加载状态标识
   * step: 当前步骤（0: 填写信息, 1: 确认支付）
   * avatarImageUrl: 项目图片URL
   * name: 项目名称
   * ticker: 代币符号
   * description: 项目描述
   * contractAddress: 合约地址
   * twitter: Twitter链接
   * telegram: Telegram链接
   */
  const [loadStatus, setLoadStatus] = useState<boolean>(false); // 加载状态
  const [step, setStep] = useState<number>(0); // 当前步骤
  const [avatarImageUrl, setAvatarImageUrl] = useState<string>(); // 项目图片
  const [name, setName] = useState<string>(""); // 项目名称
  const [ticker, setTicker] = useState<string>(""); // 代币符号
  const [description, setDescription] = useState<string>(""); // 项目描述
  const [contractAddress, setContractAddress] = useState<string>(""); // 合约地址
  const [twitter, setTwitter] = useState<string>(""); // Twitter 链接
  const [telegram, setTelegram] = useState<string>(""); // Telegram 链接

  // Solana 钱包相关 hooks
  const { setVisible } = useWalletModal();
  const { publicKey, sendTransaction } = useWallet();

  // antd 消息提示
  const [messageApi, contextHolder] = message.useMessage();

  /**
   * 注册域名
   * 完整流程：
   * 1. 检查钱包连接
   * 2. 构建并提交项目数据到后端
   * 3. 创建 Solana 交易（转账 + 备注）
   * 4. 发送交易并等待确认
   * 5. 完成后跳转到用户页面
   */
  const register = async () => {
    if (!publicKey) return; // 检查钱包连接

    // 构建项目数据
    const data = {
      domain: state?.domain,
      image: avatarImageUrl || "",
      name,
      ticker,
      description,
      contractAddress,
      twitter,
      telegram,
    };

    try {
      setLoadStatus(true); // 设置加载状态

      // 调用注册 API
      const result: any = await domain.registerAPI(data);
      if (!result.success) throw Promise.reject("create error");
      if (!(result.data && result.data.iv))
        throw Promise.reject("Already registered");

      // 创建 Solana 连接
      // 使用 QuickNode RPC 节点
      const connection = new Connection(
        "https://restless-polished-panorama.solana-mainnet.quiknode.pro/7dd704d7c27ed6266708c264ddd11d33754358d5",
        {
          wsEndpoint:
            "wss://restless-polished-panorama.solana-mainnet.quiknode.pro/7dd704d7c27ed6266708c264ddd11d33754358d5",
          commitment: "confirmed",
        }
      );

      // 设置接收地址和转账金额
      const recipientPubKey = new PublicKey(
        "74A2G5b6oPK3PS3yX5rAtFwnYvxtbAuhckoWG125KMcP"
      );
      // 设置固定转账金额（0.00001 SOL）
      const fixedAmount = 0.00001;
      const lamports = new BigNumber(fixedAmount)
        .multipliedBy(LAMPORTS_PER_SOL)
        .integerValue(BigNumber.ROUND_DOWN)
        .toNumber();

      // 创建交易对象
      const transaction = new Transaction();

      // 添加转账指令
      transaction
        .add(
          SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: recipientPubKey,
            lamports: lamports,
          })
        )
        // 添加备注指令（记录注册信息）
        .add(
          new TransactionInstruction({
            keys: [],
            programId: new PublicKey(
              "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"
            ),
            data: Buffer.from(new TextEncoder().encode(result.data.iv)),
          })
        );

      // 获取最新区块哈希并设置交易参数
      const latestBlockhash = await connection.getLatestBlockhash();
      transaction.recentBlockhash = latestBlockhash.blockhash;
      transaction.feePayer = publicKey;

      // 发送交易并等待确认
      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, "confirmed");

      console.log(`Transaction signature: ${signature}`);
      messageApi.success("Transaction Success");

      // 交易成功后延迟1秒跳转到用户页面
      setTimeout(() => {
        setLoadStatus(false);
        navigate("/user");
      }, 1000);
    } catch (error) {
      console.log(error, "error_");
      setLoadStatus(false);
      messageApi.error("Transaction Fail");
    }
  };

  return (
    <Fragment>
      {contextHolder}
      <div
        className={`flex justify-center px-4 gap-4  min-h-screen ${
          step === 0 ? "items-center" : "items-start"
        }`}
      >
        {step === 0 ? (
          // 第一步：填写项目信息表单
          <div className="flex flex-col gap-4 py-4">
            {/* 返回按钮 */}
            <a className="text-current text-sm" onClick={() => navigate("/")}>
              <Icon name="back" className="mt-[-3px]" />
              &nbsp;{t("public.back")}
            </a>
            {/* 项目信息表单卡片 */}
            <Card className="w-full">
              <div className="grid gap-4">
                {/* 项目图片和基本信息区域 */}
                <div className="grid gap-4 grid-cols-[auto,1fr]">
                  {/* 图片上传组件 */}
                  <div className="grid gap-2">
                    <span className="text-sm font-bold">
                      {t("public.image")}&nbsp;
                      <span className="text-red-500">*</span>
                    </span>
                    <Upload
                      image={avatarImageUrl}
                      onChange={setAvatarImageUrl}
                    />
                  </div>
                  {/* 名称和代币符号输入区 */}
                  <div className="flex flex-col gap-4 h-fit">
                    <div className="grid gap-1">
                      <span className="text-sm font-bold">
                        {t("public.name")}&nbsp;
                        <span className="text-red-500">*</span>
                      </span>
                      <Input
                        size="middle"
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-1">
                      <span className="text-sm font-bold">
                        {t("public.ticker")}&nbsp;
                        <span className="text-red-500">*</span>
                      </span>
                      <Input
                        size="middle"
                        defaultValue={ticker}
                        onChange={(e) => setTicker(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* 项目描述输入区 */}
                <div className="grid gap-2">
                  <span className="text-sm font-bold">
                    {t("public.description")}&nbsp;
                    <span className="text-red-500">*</span>
                  </span>
                  <Input.TextArea
                    size="middle"
                    defaultValue={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                {/* 合约地址输入区 */}
                <div className="grid gap-2">
                  <span className="text-sm font-bold">
                    {t("public.contractAddress")}&nbsp;
                    <span className="text-red-500">*</span>
                  </span>
                  <Input
                    size="middle"
                    defaultValue={contractAddress}
                    onChange={(e) => setContractAddress(e.target.value)}
                  />
                </div>
                {/* 社交媒体链接输入区 */}
                <div className="grid gap-2">
                  <span className="text-sm font-bold">
                    {t("public.twitter")}
                  </span>
                  <Input
                    size="middle"
                    defaultValue={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <span className="text-sm font-bold">
                    {t("public.telegram")}
                  </span>
                  <Input
                    size="middle"
                    defaultValue={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                  />
                </div>
                {/* 注册按钮 */}
                <Mbutton
                  disabled={
                    !avatarImageUrl ||
                    !name ||
                    !ticker ||
                    loadStatus ||
                    !description ||
                    !contractAddress
                  }
                  type="primary"
                  loading={loadStatus}
                  onClick={() => {
                    if (
                      !avatarImageUrl ||
                      !name ||
                      !ticker ||
                      loadStatus ||
                      !description ||
                      !contractAddress
                    )
                      return;
                    publicKey ? register() : setVisible(true);
                  }}
                >
                  {publicKey ? t("public.register") : t("public.connect")}
                </Mbutton>
              </div>
            </Card>
          </div>
        ) : (
          // 第二步：确认和支付界面
          <Fragment>
            {/* 移动端底部操作栏 */}
            <div className="max-w-4xl overflow-hidden relative pb-48 sm:pb-0">
              <div className="fixed flex-col gap-4 bottom-0 left-0 flex xl:hidden bg-[--bg-color] p-4 pb-8 w-full justify-center items-center z-50">
                <div className="max-w-4xl flex items-center justify-between flex-wrap gap-4 gap-x-5">
                  <a
                    className="!text-current text-sm"
                    onClick={() => setStep(0)}
                  >
                    <Icon name="back" className="mt-[-3px]" />
                    &nbsp;Previous step
                  </a>
                </div>
                <Mbutton
                  className="!min-w-48"
                  type="primary"
                  onClick={() => {
                    if (publicKey) {
                      // sendSolana()
                      // 完成把所有数据保存数据库
                    } else {
                      setVisible(true);
                    }
                  }}
                >
                  {publicKey ? "Launch" : "Connect wallet"}
                </Mbutton>
                <span className="text-center text-sm font-bold opacity-80">
                  {publicKey
                    ? "Cost to create - 0.05 SOL"
                    : " Connect your wallet to finish creating website."}
                </span>
              </div>
            </div>
            {/* 桌面端侧边操作栏 */}
            <div className="w-72 sticky top-4 flex-col gap-4 hidden xl:flex">
              <a className="text-current text-sm" onClick={() => setStep(0)}>
                <Icon name="back" className="mt-[-3px]" />
                &nbsp; Previous step
              </a>
              <Mbutton
                type="primary"
                onClick={() => {
                  if (publicKey) {
                    // sendSolana()
                    // 完成把所有数据保存数据库
                  } else {
                    setVisible(true);
                  }
                }}
              >
                {publicKey ? "Launch" : "Connect wallet"}
              </Mbutton>
              <span className="text-center text-sm font-bold opacity-80">
                {publicKey
                  ? "Cost to create - 0.05 SOL"
                  : " Connect your wallet to finish creating website."}
              </span>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}
