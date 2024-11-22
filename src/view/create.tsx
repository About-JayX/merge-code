import Domain from "@/components/domain";
import {
  Card,
  Collapse,
  ColorPicker,
  Dropdown,
  Input,
  message,
  Upload,
} from "antd";
import { Fragment, useState } from "react";
import { DownOutlined, LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import Button from "@/components/domain/button";
import Mbutton from "@/components/memes/button";
import { useLocation } from "react-router";
import Icon from "@/components/icon";
import { useNavigate } from "react-router";

export default function Create() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(0);
  const [avatarImage, setAvatarImageUrl] = useState<string>();
  const [avatarLoading, setAvatarLoading] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState<string>("#fff");
  const [backgroundPattern, setBackgroundPattern] = useState<string>("");
  const [backgroundImage, setBackgroundImageUrl] = useState<string>();
  const [backgroundLoading, setBackgroundLoading] = useState(false);
  const [textColor, setTextColor] = useState<string>("#000");
  const [textFont, setTextFont] = useState<string>("font-primary");
  const [buttonBackground, setButtonBackground] = useState("#000");
  const [buttonText, setButtonText] = useState("#fff");
  const [buttonRounded, setButtonRounded] = useState("!rounded-none");
  console.log(state?.domain);

  const avatarHandleLocalRead = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Url = event.target?.result as string;
      setAvatarImageUrl(base64Url); // 将 Base64 图片 URL 保存到状态中
      setAvatarLoading(false); // 读取完成，停止加载状态
    };
    reader.readAsDataURL(file); // 将文件读取为 Base64 格式
  };

  const avatarBeforeUpload = (file: File) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
      return false; // 阻止上传
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
      return false; // 阻止上传
    }
    setAvatarLoading(true); // 开始加载
    avatarHandleLocalRead(file); // 本地读取文件
    return false; // 阻止上传到服务器
  };

  const avatarUploadButton = (
    <div style={{ textAlign: "center" }}>
      {avatarLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const backgroundHandleLocalRead = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Url = event.target?.result as string;
      setBackgroundImageUrl(base64Url); // 将 Base64 图片 URL 保存到状态中
      setBackgroundLoading(false); // 读取完成，停止加载状态
    };
    reader.readAsDataURL(file); // 将文件读取为 Base64 格式
  };

  const backgroundBeforeUpload = (file: File) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
      return false; // 阻止上传
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
      return false; // 阻止上传
    }
    setBackgroundLoading(true); // 开始加载
    backgroundHandleLocalRead(file); // 本地读取文件
    return false; // 阻止上传到服务器
  };

  const backgroundUploadButton = (
    <div style={{ textAlign: "center" }}>
      {backgroundLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div className="flex justify-center px-4 gap-4">
      {step === 0 ? (
        <div className="mt-12 flex flex-col gap-4">
          <a className="text-current text-base" onClick={() => navigate("/")}>
            <Icon name="back" className="mt-[-3px]" />
            &nbsp; Back
          </a>
          <Card className="w-full">
            <div className="grid gap-4">
              <div className="grid gap-4 grid-cols-[auto,1fr]">
                <div className="grid gap-2">
                  <span className="text-base font-bold">
                    Image <span className="text-red-500">*</span>
                  </span>
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader overflow-hidden"
                    showUploadList={false}
                    beforeUpload={avatarBeforeUpload}
                  >
                    {avatarImage ? (
                      <div style={{ textAlign: "center" }}>
                        <img src={avatarImage} style={{ width: "100%" }} />
                      </div>
                    ) : (
                      avatarUploadButton
                    )}
                  </Upload>
                </div>
                <div className="flex flex-col gap-2 h-fit">
                  <div className="grid gap-1">
                    <span className="text-base font-bold">
                      Name <span className="text-red-500">*</span>
                    </span>
                    <Input size="large" />
                  </div>
                  <div className="grid gap-1">
                    <span className="text-base font-bold">
                      Name <span className="text-red-500">*</span>
                    </span>
                    <Input size="large" />
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <span className="text-base font-bold">Description</span>
                <Input size="large" />
              </div>
              <div className="grid gap-2">
                <span className="text-base font-bold">Contract Address</span>
                <Input size="large" />
              </div>
              <div className="grid gap-2">
                <span className="text-base font-bold">Twitter</span>
                <Input size="large" />
              </div>
              <div className="grid gap-2">
                <span className="text-base font-bold">Telegram</span>
                <Input size="large" />
              </div>
              <div className="grid gap-2">
                <span className="text-base font-bold">Pumpfun</span>
                <Input size="large" />
              </div>
              <div className="grid gap-2">
                <span className="text-base font-bold">Dexscreener</span>
                <Input size="large" />
              </div>
              <Mbutton
                type="primary"
                onClick={() => {
                  // 提交前保存数据
                  setStep(1);
                }}
              >
                Next step
              </Mbutton>
            </div>
          </Card>
        </div>
      ) : (
        <Fragment>
          <div className="max-w-4xl overflow-hidden relative">
            <Domain
              {...{
                domain: "RiffRaff",
                image:
                  "https://firebasestorage.googleapis.com/v0/b/test-35761.appspot.com/o/images%2Fjody-high-roller-braces.gif?alt=media&token=6657043b-1aae-41a3-b208-9da8deb3f864",
                name: "RIFF RAFF",
                ticker: "d",
                description: "dsfdsgsdfgsdfsdg",
                contractAddress: "0x532f27101965dd16442E59d40670FaF5eBB142E4",
                twitter: "https://x.com/RIFFRAFFMEME",
                telegram: "https://t.me/basedbrett",
                pumpfun:
                  "https://pump.fun/coin/7FTFVeHkkx8R1W2j6W61RAXaPbC3fRpsd5paLNGypump",
                dexscreener: "",
                background: {
                  color: backgroundColor,
                  pattern: backgroundPattern,
                  custom: backgroundImage,
                },
                text: {
                  color: textColor,
                  font: textFont,
                },
                button: {
                  background: buttonBackground,
                  text: buttonText,
                  rounded: buttonRounded,
                },
              }}
            />
            <div className="fixed bottom-0 left-0 flex xl:hidden bg-[--bg-color] p-4 w-full justify-center items-center z-50">
              <div className="max-w-4xl flex items-center justify-center flex-wrap gap-4">
                <a
                  className="text-current text-base"
                  onClick={() => setStep(0)}
                >
                  <Icon name="back" className="mt-[-3px]" />
                  &nbsp; Previous step
                </a>
                <Dropdown
                  placement="top"
                  menu={{
                    items: [
                      {
                        key: "background-color",
                        label: (
                          <div className="flex gap-2">
                            <span>Color</span>
                            <ColorPicker
                              defaultValue={backgroundColor}
                              allowClear
                              size="small"
                              onChange={(value) =>
                                setBackgroundColor("#" + value.toHex())
                              }
                            />
                          </div>
                        ),
                      },
                      {
                        key: "background-pattern",
                        label: (
                          <div className="flex flex-col gap-2">
                            <span>Pattern</span>
                            <div className="flex flex-wrap gap-2">
                              <a
                                className="w-9 h-9 flex items-center justify-center bg-white text-black rounded-lg"
                                onClick={() => setBackgroundPattern("")}
                              >
                                x
                              </a>
                              <a
                                className="w-9 h-9 pattern-1 rounded-lg"
                                onClick={() =>
                                  setBackgroundPattern("pattern-1")
                                }
                              />
                              <a
                                className="w-9 h-9 pattern-2 rounded-lg"
                                onClick={() =>
                                  setBackgroundPattern("pattern-2")
                                }
                              />
                              <a
                                className="w-9 h-9 pattern-3 rounded-lg"
                                onClick={() =>
                                  setBackgroundPattern("pattern-3")
                                }
                              />
                              <a
                                className="w-9 h-9 pattern-4 rounded-lg"
                                onClick={() =>
                                  setBackgroundPattern("pattern-4")
                                }
                              />
                              <a
                                className="w-9 h-9 pattern-5 rounded-lg"
                                onClick={() =>
                                  setBackgroundPattern("pattern-5")
                                }
                              />
                            </div>
                          </div>
                        ),
                      },
                      {
                        key: "background-custom",
                        label: (
                          <div className="flex flex-col gap-2">
                            <span>Custom</span>
                            <Upload
                              name="avatar"
                              listType="picture-card"
                              className="avatar-uploader overflow-hidden"
                              showUploadList={false}
                              beforeUpload={backgroundBeforeUpload}
                            >
                              {backgroundImage ? (
                                <div style={{ textAlign: "center" }}>
                                  <img
                                    src={backgroundImage}
                                    style={{ width: "100%" }}
                                  />
                                </div>
                              ) : (
                                backgroundUploadButton
                              )}
                            </Upload>
                          </div>
                        ),
                      },
                    ],
                  }}
                >
                  <a
                    className="text-current text-base"
                    onClick={(e) => e.preventDefault()}
                  >
                    Background&nbsp;
                    <DownOutlined />
                  </a>
                </Dropdown>
                <Dropdown
                  placement="top"
                  menu={{
                    items: [
                      {
                        key: "text-color",
                        label: (
                          <div className="flex gap-2">
                            <span>Color</span>
                            <ColorPicker
                              defaultValue={textColor}
                              allowClear
                              size="small"
                              onChange={(value) =>
                                setTextColor("#" + value.toHex())
                              }
                            />
                          </div>
                        ),
                      },
                      {
                        key: "text-font",
                        label: (
                          <div className="flex flex-col gap-2">
                            <span>Font</span>
                            <div className="grid grid-cols-2 gap-2 flex-wrap">
                              <a
                                className="font-primary"
                                onClick={() => setTextFont("font-primary")}
                              >
                                primary
                              </a>
                            </div>
                          </div>
                        ),
                      },
                    ],
                  }}
                >
                  <a
                    className="text-current text-base"
                    onClick={(e) => e.preventDefault()}
                  >
                    Text&nbsp;
                    <DownOutlined />
                  </a>
                </Dropdown>
                <Dropdown
                  placement="top"
                  menu={{
                    items: [
                      {
                        key: "button-background",
                        label: (
                          <div className="flex gap-2">
                            <span>Background</span>
                            <ColorPicker
                              defaultValue={buttonBackground}
                              allowClear
                              size="small"
                              onChange={(value) =>
                                setButtonBackground("#" + value.toHex())
                              }
                            />
                          </div>
                        ),
                      },
                      {
                        key: "button-text",
                        label: (
                          <div className="flex gap-2">
                            <span>Text</span>
                            <ColorPicker
                              defaultValue={buttonText}
                              allowClear
                              size="small"
                              onChange={(value) =>
                                setButtonText("#" + value.toHex())
                              }
                            />
                          </div>
                        ),
                      },
                      {
                        key: "button-rounded",
                        label: (
                          <div className="flex flex-col gap-2">
                            <span>Rounded</span>
                            <div className="grid grid-cols-2 gap-2">
                              <Button
                                style={{
                                  background: buttonBackground,
                                  color: buttonText,
                                }}
                                className="!rounded-none"
                                onClick={() =>
                                  setButtonRounded("!rounded-none")
                                }
                              >
                                buy
                              </Button>
                              <Button
                                style={{
                                  background: buttonBackground,
                                  color: buttonText,
                                }}
                                className="!rounded-md"
                                onClick={() => setButtonRounded("!rounded-md")}
                              >
                                buy
                              </Button>
                              <Button
                                style={{
                                  background: buttonBackground,
                                  color: buttonText,
                                }}
                                className="!rounded-lg"
                                onClick={() => setButtonRounded("!rounded-lg")}
                              >
                                buy
                              </Button>
                              <Button
                                style={{
                                  background: buttonBackground,
                                  color: buttonText,
                                }}
                                className="!rounded-full"
                                onClick={() =>
                                  setButtonRounded("!rounded-full")
                                }
                              >
                                buy
                              </Button>
                            </div>
                          </div>
                        ),
                      },
                    ],
                  }}
                >
                  <a
                    className="text-current text-base"
                    onClick={(e) => e.preventDefault()}
                  >
                    Button&nbsp;
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="h-fit w-56 sticky top-4 flex-col gap-4 hidden xl:flex">
            <a className="text-current text-base" onClick={() => setStep(0)}>
              <Icon name="back" className="mt-[-3px]" />
              &nbsp; Previous step
            </a>
            <Collapse
              defaultActiveKey={["background"]}
              accordion
              items={[
                {
                  key: "background",
                  label: "Background",
                  children: (
                    <div className="grid gap-4">
                      <div className="flex gap-2">
                        <span>Color</span>
                        <ColorPicker
                          defaultValue={backgroundColor}
                          allowClear
                          size="small"
                          onChange={(value) =>
                            setBackgroundColor("#" + value.toHex())
                          }
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <span>Pattern</span>
                        <div className="flex flex-wrap gap-2">
                          <a
                            className="w-9 h-9 flex items-center justify-center bg-white text-black rounded-lg"
                            onClick={() => setBackgroundPattern("")}
                          >
                            x
                          </a>
                          <a
                            className="w-9 h-9 pattern-1 rounded-lg"
                            onClick={() => setBackgroundPattern("pattern-1")}
                          />
                          <a
                            className="w-9 h-9 pattern-2 rounded-lg"
                            onClick={() => setBackgroundPattern("pattern-2")}
                          />
                          <a
                            className="w-9 h-9 pattern-3 rounded-lg"
                            onClick={() => setBackgroundPattern("pattern-3")}
                          />
                          <a
                            className="w-9 h-9 pattern-4 rounded-lg"
                            onClick={() => setBackgroundPattern("pattern-4")}
                          />
                          <a
                            className="w-9 h-9 pattern-5 rounded-lg"
                            onClick={() => setBackgroundPattern("pattern-5")}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span>Custom</span>
                        <Upload
                          name="avatar"
                          listType="picture-card"
                          className="avatar-uploader overflow-hidden"
                          showUploadList={false}
                          beforeUpload={backgroundBeforeUpload}
                        >
                          {backgroundImage ? (
                            <div style={{ textAlign: "center" }}>
                              <img
                                src={backgroundImage}
                                style={{ width: "100%" }}
                              />
                            </div>
                          ) : (
                            backgroundUploadButton
                          )}
                        </Upload>
                      </div>
                    </div>
                  ),
                },
                {
                  key: "text",
                  label: "Text",
                  children: (
                    <div className="grid gap-4">
                      <div className="flex gap-2">
                        <span>Color</span>
                        <ColorPicker
                          defaultValue={textColor}
                          allowClear
                          size="small"
                          onChange={(value) =>
                            setTextColor("#" + value.toHex())
                          }
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <span>Font</span>
                        <div className="grid grid-cols-2 gap-2 flex-wrap">
                          <a
                            className="font-primary"
                            onClick={() => setTextFont("font-primary")}
                          >
                            primary
                          </a>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  key: "button",
                  label: "Button",
                  children: (
                    <div className="grid gap-4">
                      <div className="flex gap-2">
                        <span>Background</span>
                        <ColorPicker
                          defaultValue={buttonBackground}
                          allowClear
                          size="small"
                          onChange={(value) =>
                            setButtonBackground("#" + value.toHex())
                          }
                        />
                      </div>
                      <div className="flex gap-2">
                        <span>Text</span>
                        <ColorPicker
                          defaultValue={buttonText}
                          allowClear
                          size="small"
                          onChange={(value) =>
                            setButtonText("#" + value.toHex())
                          }
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <span>Rounded</span>
                        <div className="grid grid-cols-2 gap-2">
                          <Button
                            style={{
                              background: buttonBackground,
                              color: buttonText,
                            }}
                            className="!rounded-none"
                            onClick={() => setButtonRounded("!rounded-none")}
                          >
                            buy
                          </Button>
                          <Button
                            style={{
                              background: buttonBackground,
                              color: buttonText,
                            }}
                            className="!rounded-md"
                            onClick={() => setButtonRounded("!rounded-md")}
                          >
                            buy
                          </Button>
                          <Button
                            style={{
                              background: buttonBackground,
                              color: buttonText,
                            }}
                            className="!rounded-lg"
                            onClick={() => setButtonRounded("!rounded-lg")}
                          >
                            buy
                          </Button>
                          <Button
                            style={{
                              background: buttonBackground,
                              color: buttonText,
                            }}
                            className="!rounded-full"
                            onClick={() => setButtonRounded("!rounded-full")}
                          >
                            buy
                          </Button>
                        </div>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
}
