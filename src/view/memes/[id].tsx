import { Button, Section } from "@/components/domain";
import { memesTextSize, memesTitleSize } from "@/components/domain/styles";
import Icon from "@/components/icon";
import MiniDogeCard from "@/components/minidoge/miniDogeCard";
import Segmented from "@/components/Segmented";
import {
  Alert,
  Avatar,
  Divider,
  Empty,
  Pagination,
  Select,
  Typography,
} from "antd";
import { Ellipsis } from "antd-mobile";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
const { Paragraph } = Typography;

/**
 * 访问自己需要登录不可直接访问
 * 1.登录后判断是否绑定SOL钱包地址包括编辑用户所有信息
 * 3.绑定后显示发布按钮
 */
/**
 * 别人访问
 * 1.不显示发布按钮
 * 2.不显示编辑
 */

// 用户信息
export const UserInfo = () => {
  return (
    <Section className="grid grid-cols-[1fr_auto] flex-wrap items-center justify-between gap-4">
      <div className="grid grid-cols-[56px_1fr] sm:grid-cols-[96px_1fr] items-center gap-2 sm:gap-4 w-auto">
        <Avatar
          src="/logo.png"
          className="w-14 h-14 sm:w-24 sm:h-24 bg-white aspect-square"
        />
        <div className="flex flex-col gap-1">
          <span
            className={`${memesTitleSize} !text-xl sm:!text-2xl !font-bold uppercase flex items-center w-full`}
          >
            <Ellipsis content="Owned by" />
            &nbsp;
            <Icon name="authenticate" className="text-xl sm:text-2xl" />
            &nbsp;
            <Icon name="edit" className="text-lg sm:text-xl" />
          </span>
          <span className={`${memesTextSize} !text-sm sm:!text-lg opacity-50`}>
            {false ? (
              <Paragraph
                copyable={{
                  text: "3M6uE2dMFzLTPgKZ1bpVgQTfgmYTQ6hMWojk4KMHMWtq",
                }}
                className="grid grid-cols-[1fr_auto] items-center"
              >
                <Ellipsis
                  content="3M6uE2dMFzLTPgKZ1bpVgQTfgmYTQ6hMWojk4KMHMWtq"
                  direction="middle"
                  className="w-full h-[24px] flex-1"
                />
              </Paragraph>
            ) : (
              "Bind SOL wallet"
            )}
          </span>
        </div>
      </div>
      {/* 发布按钮 */}
      {false ? (
        <Button
          type="default"
          size="small"
        className="rounded-full items-center flex justify-center xl:!max-w-36 sm:!w-auto !h-auto sm:!min-h-11  sm:!text-base"
      >
        <Icon name="publish" className="text-2xl sm:text-3xl" />
          &nbsp;Publish
        </Button>
      ) : (
        ""
      )}
    </Section>
  );
};

// 访问浏览点赞量
export const ViewInfo = () => {
  const InfoItem = ({
    iconName,
    label,
    value,
  }: {
    iconName: string;
    label: string;
    value: string;
  }) => {
    return (
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 sm:mt-0">
        {iconName === "view" ? (
          <img src="/logo.png" className="w-8 h-8 sm:w-12 sm:h-12 aspect-square" />
        ) : (
          <Icon name={iconName} className={`${iconName === "praise"?"text-2xl sm:text-3xl opacity-50":"text-3xl sm:text-4xl"}`} />
        )}
        <div className="flex flex-col">
          <span
            className={`${memesTitleSize} text-xs sm:!text-sm !font-normal opacity-50`}
          >
            {label}
          </span>
          <span className={`${memesTitleSize} !text-base sm:!text-3xl -mt-[2px] sm:-mt-1`}>{value}</span>
        </div>
      </div>
    );
  };

  return (
    <Section className="flex flex-wrap gap-x-8 gap-y-4 sm:gap-16 -mt-4 sm:-mt-0">
      <InfoItem iconName="view" label="Income" value={true ? "5.22 K" : "--"} />
      <InfoItem
        iconName="praise"
        label="Like"
        value={false ? "5.22 K" : "--"}
      />
      <InfoItem
        iconName="views"
        label="Check"
        value={false ? "5.22 K" : "--"}
      />
    </Section>
  );
};

// 列表
export const List = () => {
  const { t } = useTranslation();
  const memes: any = t("memes", { returnObjects: true });
  return (
    <div className="flex flex-col gap-4 sm:gap-4 md:gap-8 xl:gap-8 items-center -mt-0">
      {/* 操作区域 */}
      <Section
        type="top"
        className="flex gap-2 sm:gap-4 sm:flex-row justify-between w-full items-center"
      >
        <Segmented
          options={[
            { value: "Hot", label: memes.hot },
            { value: "New", label: memes.new },
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
          className="w-auto"
        />
      </Section>
      {/* 列表 */}

      {true ? (
        <>
          <Section
            type="top"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full"
          >
            <MiniDogeCard
              type="mp3"
              audioSrc="/SoundHelix-Song-1.mp3"
              address="3M6uE2dMFzLTPgKZ1bpVgQTfgmYTQ6hMWojk4KMHMWtq"
            />
            <MiniDogeCard
              type="mp4"
              address="3M6uE2dMFzLTPgKZ1bpVgQTfgmYTQ6hMWojk4KMHMWtq"
            />
            <MiniDogeCard
              type="image"
              address="3M6uE2dMFzLTPgKZ1bpVgQTfgmYTQ6hMWojk4KMHMWtq"
            />
            <MiniDogeCard
              type="mp3"
              audioSrc=""
              address="3M6uE2dMFzLTPgKZ1bpVgQTfgmYTQ6hMWojk4KMHMWtq"
            />
          </Section>
          <Section type="top">
            <Pagination
              defaultCurrent={1}
              pageSize={20}
              total={100}
              showSizeChanger={false}
            />
          </Section>
        </>
      ) : (
        <Section type="top">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="" />
        </Section>
      )}
    </div>
  );
};

export default function MemesPage() {
  const { id } = useParams();

  console.log(id);

  return (
    <div className="flex flex-col gap-8 sm:gap-12 sm:mt-4">
      {false ? (
        <Alert
          message={
            <div className="text-center text-base sm:text-lg p-2">
              <span className="">
                Bind your SOL wallet address to publish your work
              </span>
              &nbsp;
              <a className="text-current !text-[#FFAC03] !underline underline-offset-4">
                Bind now
              </a>
            </div>
          }
          type="warning"
        />
      ) : (
        ""
      )}

      <UserInfo />
      <ViewInfo />
      <Section type="top" >
        <Divider className="!my-0" />
      </Section>
      <List />
    </div>
  );
}
