import { memesTextSize, memesTitleSize } from "@/components/domain/styles";
import Icon from "@/components/icon";
import { Button, Divider, Input, Select, Modal, Alert } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useTranslation } from "react-i18next";

const { Option } = Select;

// 登录
const Login = ({
  open,
  setState,
  onSuccess,
}: {
  open: boolean;
  setState: (state: "login" | "register") => void;
  onSuccess: () => void;
}) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [sendCode, setSendCode] = useState(false);
  const [code, setCode] = useState("");

  const handleSendCode = () => {
    setError(false);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 邮箱正则表达式
    if (!email || !emailPattern.test(email)) {
      setError(true);
      return;
    }

    setSendCode(true);
  };

  const handleConfirm = () => {
    if (!code) {
      // setError(true);
      return;
    }

    setEmail("");
    setCode("");
    setError(false);
    setSendCode(false);
    onSuccess && onSuccess();
  };

  useEffect(() => {
    if (!open) {
      setEmail("");
      setCode("");
      setError(false);
      setSendCode(false);
    }
  }, [open]);

  return (
    <div className="flex flex-col items-center py-5 gap-5 sm:gap-7 mt-4">
      <div className="flex flex-col items-center gap-1">
        <span className={`${memesTitleSize} !text-3xl !font-bold`}>
          {t("login.title")}
        </span>
        <span
          className={`${memesTextSize} !text-xs !font-medium text-[#B8B8B8]`}
        >
          {t("login.text")}
        </span>
      </div>
      {error && (
        <Alert
          message={
            <>
              <Icon name="a-error" className="!text-xl -mt-1" />
              &nbsp;&nbsp;
              <span className="text-[#FF0303]">
                {t("login.pleaseEnterAValidEmailAddress")}
              </span>
              &nbsp;
              <span className="text-white/50">
                {t("login.donTHaveAnAccount")}
              </span>&nbsp;
              <a
                className="!text-current !underline  underline-offset-4"
                onClick={() => setState("register")}
              >
                {t("login.clickToRegister")}
              </a>
            </>
          }
          className={`${memesTextSize} !text-sm !font-medium  w-full p-5 text-center`}
          type="error"
        />
      )}
      {sendCode && (
        <Alert
          message={
            <>
              <Icon name="a-success" className="!text-xl -mt-1" />
              &nbsp;&nbsp;
              <span className="text-[#14C893]">
                {t("login.verificationCodeHasBeenSentToYourEmail")}
              </span>
              &nbsp;123456789@gmail.com
            </>
          }
          className={`${memesTextSize} !text-sm !font-medium  w-full p-5 text-center`}
          type="success"
        />
      )}
      {sendCode ? (
        <Input
          placeholder={t("login.verificationCode")}
          size="large"
          defaultValue={code}
          onChange={(e) => setCode(e.target.value)}
        />
      ) : (
        <Input
          placeholder={t("login.pleaseEnterAValidEmailAddress")}
          size="large"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      )}
      {sendCode ? (
        <Button
          type="primary"
          size="large"
          className="w-full"
          onClick={handleConfirm}
        >
          {t("login.confirm")}
        </Button>
      ) : (
        <Button
          type="primary"
          size="large"
          className="w-full"
          onClick={handleSendCode}
        >
          {t("login.sendVerificationCode")}
        </Button>
      )}

      <Divider
        className={`${memesTextSize} !text-xs !font-medium !text-[#B8B8B8] !m-0`}
      >
        {t("login.orUseTheFollowingMethod")}
      </Divider>
      <Button type="default" size="large" className="w-full !text-current">
        <Icon name="google" />
        {t("login.signInWithGoogle")}
      </Button>
      <span className={`${memesTextSize} !text-xs !font-medium text-[#B8B8B8]`}>
        {t("login.donTHaveAnAccount")}&nbsp;
        <a
          className="text-primary !underline !text-[#FFAC03] underline-offset-4"
          onClick={() => setState("register")}
        >
          {t("login.register")}
        </a>
      </span>
    </div>
  );
};

// 注册
const Register = ({
  open,
  onSuccess,
}: {
  open: boolean;
  onSuccess: () => void;
}) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const handleRegister = () => {
    if (!email) {
      messageApi.error(t("login.pleaseEnterAValidEmailAddress"));
      return;
    }

    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 邮箱正则表达式
    // if (!email || !emailPattern.test(email)) {
    //   messageApi.error("请输入正确的邮箱地址");
    //   return;
    // }

    setEmail("");
    onSuccess && onSuccess();
  };

  useEffect(() => {
    if (!open) {
      setEmail("");
    }
  }, [open]);
  return (
    <>
      {contextHolder}
      <div className="flex flex-col items-center py-5 gap-5 sm:gap-7">
        <div className="flex flex-col items-center gap-1">
          <span className={`${memesTitleSize} !text-3xl !font-bold`}>
            {t("login.registerYourAccount")}
          </span>
          <span
            className={`${memesTextSize} !text-xs !font-medium text-[#B8B8B8]`}
          >
            {t("login.automaticallyLogInAfterSuccessfulRegistration")}
          </span>
        </div>
        <div className="flex  gap-2 w-full">
          <Input
            placeholder={t("login.emailAddress")}
            size="large"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Select
            defaultValue="Gmail.com"
            className="!rounded-none"
            size="large"
          >
            <Option value="Gmail.com">Gmail.com</Option>
          </Select>
        </div>

        <Button
          type="primary"
          size="large"
          className="w-full"
          onClick={handleRegister}
        >
          {t("login.register")}
        </Button>
      </div>
    </>
  );
};

// 登录弹窗
export const LoginModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [state, setState] = useState<"login" | "register">("login");
  const router = useNavigate(); // 确保 router 被定义

  useEffect(() => {
    if (!open) {
      setState("login");
    }
  }, [open]);
  return (
    <Modal open={open} centered footer={null} onCancel={onClose}>
      {state === "login" ? (
        <Login
          open
          setState={setState}
          onSuccess={() => {
            onClose();
            // 跳转路由
            router("/memes/123456");
          }}
        />
      ) : (
        <Register
          open
          onSuccess={() => {
            onClose();
            // 跳转路由
            router("/memes/123456");
          }}
        />
      )}
    </Modal>
  );
};
