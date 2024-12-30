import { Section } from "@/components/domain";
import { memesTextSize, memesTitleSize } from "@/components/domain/styles";
import MiniDogeCard from "@/components/minidoge/miniDogeCard";
import Segmented from "@/components/Segmented";
import { Select } from "antd";

export default function Memes() {
  return (
    <div className="flex flex-col gap-4 sm:gap-4 md:gap-8 xl:gap-8 items-center">
      <Section type="top">
        <div className="flex flex-col items-center">
          <span className={`${memesTitleSize} text-center mb-4`}>
            Expression pack <span className="text-[#FFAC03]">creation</span>
          </span>
          <span className={`${memesTextSize} text-center max-w-96`}>
            Web3 emoticon creation supports creators to receive $MINIDOGE
            rewards through their works.
          </span>
        </div>
      </Section>
      {/* 操作区域 */}
      <Section
        type="top"
        className="flex flex-col gap-4 sm:flex-row justify-between w-full items-center"
      >
        <Segmented
          options={[
            { value: "Hot", label: "Hot" },
            { value: "New", label: "New" },
          ]}
        />
        <Select
          options={[
            {
              value: "Hot",
              label: "Hot",
            },
          ]}
          placeholder="Default sort"
          size="large"
          className="w-full sm:w-auto"
        />
      </Section>
      {/* 列表 */}
      <Section
        type="top"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full"
      >
        <MiniDogeCard type="mp3" audioSrc="/SoundHelix-Song-1.mp3" address="3M6uE2dMFzLTPgKZ1bpVgQTfgmYTQ6hMWojk4KMHMWtq"/>
        <MiniDogeCard type="mp4" address="3M6uE2dMFzLTPgKZ1bpVgQTfgmYTQ6hMWojk4KMHMWtq" />
        <MiniDogeCard type="image" address="3M6uE2dMFzLTPgKZ1bpVgQTfgmYTQ6hMWojk4KMHMWtq" />
        <MiniDogeCard type="mp3" audioSrc="" address="3M6uE2dMFzLTPgKZ1bpVgQTfgmYTQ6hMWojk4KMHMWtq" />
        <MiniDogeCard type="mp3" audioSrc="/SoundHelix-Song-2.mp3" address="3M6uE2dMFzLTPgKZ1bpVgQTfgmYTQ6hMWojk4KMHMWtq" />
        <MiniDogeCard type="mp4" />
      </Section>
    </div>
  );
}
