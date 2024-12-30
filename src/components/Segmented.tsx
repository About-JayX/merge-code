import { useState } from "react";
import { memesHover } from "./domain/styles";

export default function Segmented({
  options,
  defaultValue,
  onChange,
}: {
  options: { value: string; label: string }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}) {
  const [selectedValue, setSelectedValue] = useState<string | null>(
    defaultValue || options[0].value || null
  );

  return (
    <div
      className={`${memesHover}  flex gap-1 max-w-36 sm:max-w-40 items-center px-1 py-[4px] w-full rounded-full bg-gradient-to-b from-[#FFC30C] to-[#FFAD04] text-black text-xs sm:text-base`}
    >
      {options.map((option) => (
        <div
          key={option.value}
          className={`${memesHover} hover:!shadow-none px-4 w-full text-center py-[6px] rounded-full cursor-pointer ${
            selectedValue === option.value
              ? "bg-black text-[#FFAC03]"
              : "bg-transparent"
          }`}
          onClick={() => {
            setSelectedValue(option.value);
            onChange?.(option.value);
          }}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
}
