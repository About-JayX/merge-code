import { useState } from "react";

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
    <div className="flex gap-2 sm:max-w-40 items-center px-1 py-1 w-full rounded-full bg-gradient-to-b from-[#FFC30C] to-[#FFAD04] text-black text-base">
      {options.map((option) => (
        <div
          key={option.value}
          className={`px-4 w-full text-center py-1 rounded-full cursor-pointer ${
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
