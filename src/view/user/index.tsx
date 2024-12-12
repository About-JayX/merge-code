import { domain } from "@/api";
import Button from "@/components/memes/button";
import Card from "@/components/memes/card";
import { useAppDispatch, useAppSelector } from "@/store";
import { updateToken } from "@/store/user";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { message, Modal, Typography } from "antd";
import { Ellipsis, Image } from "antd-mobile";
import { Fragment, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
const { Paragraph } = Typography;

export default function User() {
  const { publicKey, signMessage } = useWallet();
  const navigate = useNavigate();
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { setVisible } = useWalletModal();
  const [authorizeStatus, setAuthorizeStatus] = useState<boolean>(false);
  const [tokens, setTokens] = useState({ data: [], total: 1 });

  const [messageApi, contextHolder] = message.useMessage();
  const authorize = async () => {
    setAuthorizeStatus(true);
    try {
      if (!publicKey) {
        setVisible(true);
        return;
      }

      const address = publicKey.toString();
      const message = `BanDing wallet Address for memes, User Wallet Address is ${address.toLowerCase()}, Please confirm the sign`;
      const encodedMessage = new TextEncoder().encode(message);
      let signature: any = signMessage && (await signMessage(encodedMessage));
      signature = Array.from(signature);

      const result: any = await domain.loginAPI({
        address,
        signature,
        message: Array.from(encodedMessage),
      });
      if (!result.success) messageApi.error("Authorize Fail");
      dispatch(updateToken(result.data));
      setAuthorizeStatus(false);
      messageApi.success("Authorize Success");
    } catch (error) {
      console.log(error, "login fail");
      setAuthorizeStatus(false);
      messageApi.error("Authorize Fail");
    }
  };

  const loadEditTokens = useMemo(async () => {
    const result: any = await domain.ownerListAPI(
      {
        current: 1,
        pageSize: 10,
      },
      token
    );
    return result.data;
  }, [token]);

  useEffect(() => {
    loadEditTokens.then((data) => setTokens(data));
  }, [loadEditTokens]);
  return (
    <Fragment>
      {contextHolder}
      <Modal title="" centered open={!token} footer closable={false}>
        <div className="flex flex-col gap-2 pt-4  text-center">
          <span className="text-4xl font-bold">Authorize</span>
          <span className="text-base font-normal text-[--text-color]">
            Authorize Text
          </span>
          <Button
            type="primary"
            className="mt-4"
            onClick={() => !authorizeStatus && authorize()}
            loading={authorizeStatus}
            disabled={authorizeStatus}
          >
            Authorize
          </Button>
        </div>
      </Modal>
      <div className="flex flex-col gap-20 pt-20">
        <main className="flex justify-center p-4 mt-12">
          <div className="w-full max-w-6xl flex justify-center flex-col gap-7 sm:gap-10">
            <div className="grid gap-5 justify-items-center">
              <div className="w-32 h-32 rounded-full border-2 p-5 border-[--border-color] flex justify-center items-center bg-[--card-color] overflow-hidden">
                <img
                  src="/memes-001.png"
                  className="!w-full !h-full dark:opacity-80 !bg-transparent"
                />
              </div>

              {publicKey && (
                <Paragraph
                  className="flex"
                  copyable={{
                    text: publicKey?.toBase58(),
                  }}
                >
                  <Ellipsis
                    className="text-lg font-bold opacity-80"
                    direction="middle"
                    content={publicKey?.toBase58() || ""}
                  />
                </Paragraph>
              )}
            </div>
            <div className="border border-[--border-color]" />
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {token &&
                tokens.data.map((item: any, index) => (
                  <Card
                    key={index}
                    rel="noopener noreferrer"
                    onClick={() => navigate(`/edit/${item.domain}`)}
                  >
                    <div className=" relative p-3 sm:p-4 text-current flex flex-col gap-2 sm:gap-3">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="relative flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10">
                          <div className="w-full h-full rounded-full overflow-hidden bg-black dark:bg-gray-700">
                            <Image
                              loading="lazy"
                              className="w-full h-full object-cover"
                              src={item.logo_url || "/default-logo.png"}
                              alt={item.name || "Project Logo"}
                              fallback="/default-logo.png"
                            />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate text-base sm:text-lg tracking-wide">
                            {item.name || "Unknown"}
                          </h3>
                          <span className="inline-block text-xs sm:text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 truncate transition-colors cursor-pointer">
                            memes.ac/{item.domain}
                          </span>
                        </div>
                      </div>
                      <Button className="!w-full" type="primary">
                        Edit
                      </Button>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}
