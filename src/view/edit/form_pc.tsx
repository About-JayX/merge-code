import Icon from "@/components/icon";
import { Collapse, ColorPicker, Divider, Input, Button } from "antd";
import { useNavigate } from "react-router";
import { CloseOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import Upload from "@/components/memes/upload";
import Mbutton from "@/components/memes/button";

export const Text = "text-sm font-bold";

export const ItemBox = ({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <div className={`flex flex-wrap gap-2 ${className}`}>{children}</div>;
};

export const Base = ({
  onChange,
  ...props
}: {
  [key: string]: any;
  onChange?: (data?: any) => void;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <ItemBox>
        <span className={Text}>Background Color</span>
        <ColorPicker
          defaultValue={props.background.color}
          allowClear
          size="small"
          onChange={(value) =>
            onChange &&
            onChange({
              ...props,
              background: { ...props.background, color: `#${value.toHex()}` },
            })
          }
        />
      </ItemBox>
      <ItemBox className="flex-col">
        <span className={Text}>Background Pattern</span>
        <ItemBox>
          <a
            className={`w-10 h-10 flex items-center justify-center bg-white text-black rounded-md border-2 ${
              props.background.pattern === ""
                ? "border-[#0DC8EC]"
                : "border-[--border-color]"
            }`}
            onClick={() =>
              onChange &&
              onChange({
                ...props,
                background: { ...props.background, pattern: "" },
              })
            }
          >
            <CloseOutlined />
          </a>
          {["pattern-1", "pattern-2", "pattern-3", "pattern-4"].map(
            (item, index) => (
              <a
                key={index}
                className={`w-10 h-10 ${item} rounded-md border-2 ${
                  props.background.pattern === item
                    ? "border-[#0DC8EC]"
                    : "border-[--border-color]"
                }`}
                onClick={() =>
                  onChange &&
                  onChange({
                    ...props,
                    background: { ...props.background, pattern: item },
                  })
                }
              />
            )
          )}
        </ItemBox>
      </ItemBox>
      <ItemBox className="flex-col">
        <span className={Text}>Background Image</span>
        <Upload
          onChange={(value) =>
            onChange &&
            onChange({
              ...props,
              background: { ...props.background, custom: value },
            })
          }
          image={props.background.custom}
        />
      </ItemBox>
      <ItemBox>
        <span className={Text}>Text Color</span>
        <ColorPicker
          defaultValue={props.text.color}
          allowClear
          size="small"
          onChange={(value) =>
            onChange &&
            onChange({
              ...props,
              text: { ...props.text, color: `#${value.toHex()}` },
            })
          }
        />
      </ItemBox>
      <ItemBox className="flex-col">
        <span className={Text}>Text Font</span>
        <ItemBox>
          {["font-poppinsSemiBold"].map((item, index) => (
            <a
              key={index}
              className={`${item} border-2 !text-current rounded-md py-1 px-3 ${
                props.text.font === item
                  ? "border-[#0DC8EC]"
                  : "border-[--border-color]"
              }`}
              onClick={() =>
                onChange &&
                onChange({ ...props, text: { ...props.text, font: item } })
              }
            >
              {item}
            </a>
          ))}
        </ItemBox>
      </ItemBox>
      <ItemBox>
        <span className={Text}>Button Background Color</span>
        <ColorPicker
          defaultValue={props.button.background}
          allowClear
          size="small"
          onChange={(value) =>
            onChange &&
            onChange({
              ...props,
              button: { ...props.button, background: `#${value.toHex()}` },
            })
          }
        />
      </ItemBox>
      <ItemBox>
        <span className={Text}>Button Text Color</span>
        <ColorPicker
          defaultValue={props.button.text}
          allowClear
          size="small"
          onChange={(value) =>
            onChange &&
            onChange({
              ...props,
              button: { ...props.button, text: `#${value.toHex()}` },
            })
          }
        />
      </ItemBox>
      <ItemBox>
        <span className={Text}>Card Background Color</span>
        <ColorPicker
          defaultValue={props.card.background}
          allowClear
          size="small"
          onChange={(value) =>
            onChange &&
            onChange({
              ...props,
              card: { ...props.card, background: `#${value.toHex()}` },
            })
          }
        />
      </ItemBox>
    </div>
  );
};

export const Section1 = ({
  onChange,
  ...props
}: {
  [key: string]: any;
  onChange?: (data: any) => void;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <ItemBox className="flex-col">
        <span className={Text}>Title</span>
        <Input
          defaultValue={props?.section1?.title}
          onChange={(value) =>
            onChange &&
            onChange({
              ...props,
              section1: { ...props.section1, title: value.target.value },
            })
          }
        />
        <span className={Text}>Text</span>
        <Input
          defaultValue={props?.section1?.text}
          onChange={(value) =>
            onChange &&
            onChange({
              ...props,
              section1: { ...props.section1, text: value.target.value },
            })
          }
        />
        <div />
        <Divider style={{ margin: 0 }} className={Text}>
          Left Box
        </Divider>
        <div />
        <span className={Text}>Image</span>
        <Upload
          onChange={(value) => {
            onChange &&
              onChange({
                ...props,
                section1: {
                  ...props.section1,
                  box: {
                    ...props.section1.box,
                    left: {
                      ...props.section1.box.left,
                      image: value,
                    },
                  },
                },
              });
          }}
          image={props.section1.box.left.image}
        />
        <div />
        <Divider style={{ margin: 0 }} className={Text}>
          Right Box
        </Divider>
        <div />
        <span className={Text}>Title</span>
        <Input
          defaultValue={props?.section1?.box.right.title}
          onChange={(value) =>
            onChange &&
            onChange({
              ...props,
              section1: {
                ...props.section1,
                box: {
                  ...props.section1.box,
                  right: {
                    ...props.section1.box.right,
                    title: value.target.value,
                  },
                },
              },
            })
          }
        />
        <span className={Text}>Text</span>
        <Input.TextArea
          defaultValue={props?.section1?.box.right.text}
          onChange={(value) =>
            onChange &&
            onChange({
              ...props,
              section1: {
                ...props.section1,
                box: {
                  ...props.section1.box,
                  right: {
                    ...props.section1.box.right,
                    text: value.target.value,
                  },
                },
              },
            })
          }
        />
        <span className={Text}>Image</span>
        <Upload
          onChange={(value) => {
            onChange &&
              onChange({
                ...props,
                section1: {
                  ...props.section1,
                  box: {
                    ...props.section1.box,
                    right: {
                      ...props.section1.box.right,
                      image: value,
                    },
                  },
                },
              });
          }}
          image={props.section1.box.right.image}
        />
        <span className={Text}>Bnt Text</span>
        <Input
          defaultValue={props?.section1?.box.right.bntText}
          onChange={(value) =>
            onChange &&
            onChange({
              ...props,
              section1: {
                ...props.section1,
                box: {
                  ...props.section1.box,
                  right: {
                    ...props.section1.box.right,
                    bntText: value.target.value,
                  },
                },
              },
            })
          }
        />
        <span className={Text}>Bnt Url</span>
        <Input
          defaultValue={props?.section1?.box.right.bntUrl}
          onChange={(value) =>
            onChange &&
            onChange({
              ...props,
              section1: {
                ...props.section1,
                box: {
                  ...props.section1.box,
                  right: {
                    ...props.section1.box.right,
                    bntUrl: value.target.value,
                  },
                },
              },
            })
          }
        />
        <div />
      </ItemBox>
    </div>
  );
};

export const Section2 = ({
  onChange,
  ...props
}: {
  [key: string]: any;
  onChange?: (data: any) => void;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <ItemBox className="flex-col">
        <span className={Text}>Title</span>
        <Input
          defaultValue={props?.section2?.title}
          onChange={(value) =>
            onChange &&
            onChange({
              ...props,
              section2: { ...props.section2, title: value.target.value },
            })
          }
        />
        <span className={Text}>Text</span>
        <Input
          defaultValue={props?.section2?.text}
          onChange={(value) =>
            onChange &&
            onChange({
              ...props,
              section2: { ...props.section2, text: value.target.value },
            })
          }
        />
        <span className={Text}>Bnt Text</span>
        <Input
          defaultValue={props?.section2?.bntText}
          onChange={(value) =>
            onChange &&
            onChange({
              ...props,
              section2: { ...props.section2, bntText: value.target.value },
            })
          }
        />
        <span className={Text}>Bnt Url</span>
        <Input
          defaultValue={props?.section2?.bntUtl}
          onChange={(value) =>
            onChange &&
            onChange({
              ...props,
              section2: { ...props.section2, bntUtl: value.target.value },
            })
          }
        />
        <span className={Text}>Image</span>
        <Upload
          onChange={(value) => {
            onChange &&
              onChange({
                ...props,
                section2: {
                  ...props.section2,
                  image: value,
                },
              });
          }}
          image={props.section2.image}
        />
      </ItemBox>
    </div>
  );
};

export const Section3 = ({
  onChange,
  ...props
}: {
  [key: string]: any;
  onChange?: (data: any) => void;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <ItemBox>
        <ItemBox className="flex-auto w-full items-center justify-between">
          <span className={`${Text}`}>Image</span>
          {props.section3.length + 1 <= 7 && (
            <Button
              icon={<PlusOutlined />}
              onClick={() =>
                onChange &&
                onChange({ ...props, section3: [...props.section3, ""] })
              }
            />
          )}
        </ItemBox>

        <ItemBox>
          {props.section3.map((item: any, index: number) => (
            <Upload
              key={index}
              onChange={(value) => {
                let data = props.section3;
                data[index] = value;
                onChange &&
                  onChange({
                    ...props,
                    section3: [...data],
                  });
              }}
              image={item}
            />
          ))}
        </ItemBox>
      </ItemBox>
    </div>
  );
};

export const Roadmap = ({
  onChange,
  ...props
}: {
  [key: string]: any;
  onChange?: (data: any) => void;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {props?.roadmap?.map((_: any, index: number) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="flex gap-3 items-center justify-between">
            <span className="text-sm">Roadmap {index + 1}</span>
            <div className="flex gap-2 items-center">
              {index + 1 >= props?.roadmap.length && (
                <Button
                  onClick={() =>
                    onChange &&
                    onChange({
                      ...props,
                      roadmap: [...props.roadmap, { title: "", text: "" }],
                    })
                  }
                  icon={<PlusOutlined />}
                  type="primary"
                />
              )}
              {props?.roadmap?.length > 1 && (
                <Button
                  onClick={() =>
                    onChange &&
                    onChange({
                      ...props,
                      roadmap: [
                        ...props.roadmap.filter(
                          (_: any, idx: number) => idx !== index
                        ),
                      ],
                    })
                  }
                  icon={<DeleteOutlined />}
                  type="primary"
                  danger
                />
              )}
            </div>
          </div>
          <div className="flex gap-3 items-center">
            Title&nbsp;
            <Input
              defaultValue={props?.roadmap?.[index]?.["title"]}
              onChange={(e) => {
                const array = [...props?.roadmap];
                array[index]["title"] = e.target.value;

                onChange && onChange({ ...props, roadmap: [...array] });
              }}
            />
          </div>
          <div className="flex gap-3 items-center">
            Text&nbsp;
            <Input.TextArea
              defaultValue={props.roadmap[index]["text"]}
              onChange={(e) => {
                const array = [...props.roadmap];
                array[index]["text"] = e.target.value;
                onChange && onChange({ ...props, roadmap: [...array] });
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export const About = ({
  onChange,
  ...props
}: {
  [key: string]: any;
  onChange?: (data: any) => void;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <ItemBox>
        <span className={Text}>Title</span>
        <Input
          defaultValue={props?.about?.title}
          onChange={(value) =>
            onChange &&
            onChange({
              ...props,
              about: { ...props.about, title: value.target.value },
            })
          }
        />
        <span className={Text}>Text</span>
        <Input
          defaultValue={props?.about?.text}
          onChange={(value) =>
            onChange &&
            onChange({
              ...props,
              about: { ...props.about, text: value.target.value },
            })
          }
        />
        <span className={Text}>Bnt Text</span>
        <Input
          defaultValue={props?.about?.bntText}
          onChange={(value) =>
            onChange &&
            onChange({
              ...props,
              about: { ...props.about, bntText: value.target.value },
            })
          }
        />
        <span className={Text}>Bnt Url</span>
        <Input
          defaultValue={props?.about?.bntUrl}
          onChange={(value) =>
            onChange &&
            onChange({
              ...props,
              about: { ...props.about, bntUrl: value.target.value },
            })
          }
        />
      </ItemBox>
    </div>
  );
};

export default function FormPc({
  onChange,
  save,
  ...props
}: {
  onChange?: (data?: any) => void;
  save?:()=>void
}) {
  const navigate = useNavigate();
  return (
    <div className="w-72 sticky top-4 flex-col gap-4 hidden xl:flex">
      <a className="!text-current text-sm" onClick={() => navigate(-1)}>
        <Icon name="back" className="mt-[-3px]" />
        &nbsp;Return
      </a>
      <Collapse
        className="max-h-[calc(100vh-260px)] overflow-hidden overflow-y-auto"
        defaultActiveKey={["base"]}
        accordion
        items={[
          {
            key: "base",
            label: "Base",
            children: <Base {...props} onChange={onChange} />,
          },
          {
            key: "section1",
            label: "Section 1",
            children: <Section1 {...props} onChange={onChange} />,
          },
          {
            key: "section2",
            label: "Section 2",
            children: <Section2 {...props} onChange={onChange} />,
          },
          {
            key: "section3",
            label: "Section 3",
            children: <Section3 {...props} onChange={onChange} />,
          },
          {
            key: "roadmap",
            label: "Roadmap",
            children: <Roadmap {...props} onChange={onChange} />,
          },
          {
            key: "about",
            label: "About",
            children: <About {...props} onChange={onChange} />,
          },
        ]}
      />
      <Mbutton type="primary" onClick={()=>save && save()}>
        save
      </Mbutton>
    </div>
  );
}
