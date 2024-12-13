import { ChangeEventHandler, useState } from "react";
import "./index.scss";
import Button from "../button";
export default function Input({
  addonBefore,
  enterButton,
  placeholder,
  loading = false,
  onSearch,
  onChange,
  className = "",
}: {
  addonBefore?: React.ReactNode;
  enterButton?: string;
  placeholder?: string;
  loading?: boolean;
  onSearch?: (value: string) => void;
  onChange?: (event: ChangeEventHandler & any) => void;
  className?: string;
}) {
  const [input, setInput] = useState<string>("");
  return (
    <div className={`memes-input ${className}`}>
      <div id="poda">
        <div className="glow hidden dark:block" />
        <div className="darkBorderBg hidden dark:block" />
        <div className="darkBorderBg hidden dark:block" />
        <div className="darkBorderBg hidden dark:block" />
        <div className="white hidden dark:block" />
        <div className="borders hidden dark:block" />
        <div id="main">
          <div className="input relative card-animation overflow-hidden border">
            <div className="z-10 flex items-center bg-[--card-color] w-full h-full px-4 py-2 rounded-xl">
              <div id="search-icon">{addonBefore}</div>
              <div className="flex-1 relative ">
                <input
                  placeholder={placeholder}
                  type="text"
                  name="text"
                  className="w-full bg-transparent outline-none"
                  onChange={(event) => {
                    setInput(event.target.value);
                    onChange && onChange(event);
                  }}
                />
              </div>

              <div id="dark:pink-mask"></div>
              <Button
                onClick={() => onSearch && onSearch(input)}
                loading={loading}
              >
                {enterButton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
