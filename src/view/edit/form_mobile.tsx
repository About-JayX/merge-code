import Icon from "@/components/icon";
import { Dropdown } from "antd";
import { useNavigate } from "react-router";
import Mbutton from "@/components/memes/button";
import { About, Base, Roadmap, Section1, Section2, Section3 } from "./form_pc";
export default function FormMobile({
  onChange,
  save,
  ...props
}: {
  onChange?: (data?: any) => void;
  save?: () => void;
}) {
  const navigate = useNavigate();
  return (
    <div className="fixed flex-col gap-4 bottom-[-1px] left-0 flex xl:hidden bg-[--bg-color] p-4 pb-8 w-full justify-center items-center z-50">
      <div className="max-w-4xl flex items-center justify-between flex-wrap gap-4 gap-x-5">
        <a className="!text-current text-sm" onClick={() => navigate(-1)}>
          <Icon name="back" className="mt-[-3px]" />
          &nbsp;Return
        </a>
        <Dropdown
          placement="top"
          trigger={["click"]}
          menu={{
            onClick: (e: any) => {
              e.preventDefault();
            },

            items: [
              { key: "base", label: <Base {...props} onChange={onChange} /> },
            ],
          }}
        >
          <a>Base</a>
        </Dropdown>
        <Dropdown
          placement="top"
          trigger={["click"]}
          menu={{
            onClick: (e: any) => {
              e.preventDefault();
            },

            items: [
              {
                key: "section1",
                label: <Section1 {...props} onChange={onChange} />,
              },
            ],
          }}
        >
          <a>Section 1</a>
        </Dropdown>
        <Dropdown
          placement="top"
          trigger={["click"]}
          menu={{
            onClick: (e: any) => {
              e.preventDefault();
            },

            items: [
              {
                key: "section2",
                label: <Section2 {...props} onChange={onChange} />,
              },
            ],
          }}
        >
          <a>Section 2</a>
        </Dropdown>
        <Dropdown
          placement="top"
          trigger={["click"]}
          menu={{
            onClick: (e: any) => {
              e.preventDefault();
            },

            items: [
              {
                key: "section3",
                label: <Section3 {...props} onChange={onChange} />,
              },
            ],
          }}
        >
          <a>Section 3</a>
        </Dropdown>
        <Dropdown
          placement="top"
          trigger={["click"]}
          menu={{
            onClick: (e: any) => {
              e.preventDefault();
            },

            items: [
              {
                key: "roadmap",
                label: <Roadmap {...props} onChange={onChange} />,
              },
            ],
          }}
        >
          <a>Roadmap</a>
        </Dropdown>
        <Dropdown
          placement="top"
          trigger={["click"]}
          menu={{
            onClick: (e: any) => {
              e.preventDefault();
            },

            items: [
              { key: "about", label: <About {...props} onChange={onChange} /> },
            ],
          }}
        >
          <a>About</a>
        </Dropdown>
      </div>
      <Mbutton
        className="!min-w-48"
        type="primary"
        onClick={() => save && save()}
      >
        save
      </Mbutton>
    </div>
  );
}
