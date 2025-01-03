import { Button, Section } from "@/components/domain";
import { memesTextSize, memesTitleSize } from "@/components/domain/styles";
import Icon from "@/components/icon";
import MiniDogeCard from "@/components/minidoge/miniDogeCard";
import UserEdit from "@/components/minidoge/user/edit";
import { Publish } from "@/components/minidoge/user/publish";
import Segmented from "@/components/Segmented";
import { useSelector } from "react-redux";
import { getUserProfileAPI, LoginResponse } from "@/api";
import { UserProfile, EmojiItem } from "@/api/user/interface";

import {
  Alert,
  Avatar,
  Divider,
  Empty,
  message,
  Select,
  Typography,
} from "antd";
const { Paragraph } = Typography;
import { Ellipsis } from "antd-mobile";
import { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

interface UserContextProps {
  user: LoginResponse | null;
  isCurrentUser: boolean;
  hasWallet: boolean;
}

// 用户信息
export const UserInfo = ({
  editOpens,
  onEdit,
  userContext,
  userProfile,
}: {
  editOpens: boolean;
  onEdit: (value: boolean) => void;
  userContext: UserContextProps;
  userProfile: UserProfile | null;
}) => {
  const { t } = useTranslation();
  const [editOpen, setEditOpen] = useState(false);
  const [publishOpen, setPublishOpen] = useState(false);
  const { user, isCurrentUser, hasWallet } = userContext;
  const handleEdit = (value: boolean) => {
    setEditOpen(value);
    onEdit && onEdit(value);
  };

  // 如果数据还未加载完成，显示加载状态
  if (!userProfile?.user) {
    return (
      <Section className="grid grid-cols-[1fr_auto] flex-wrap items-center justify-between gap-4">
        <div className="grid grid-cols-[56px_1fr] sm:grid-cols-[96px_1fr] items-center gap-2 sm:gap-4 w-auto">
          {userProfile?.user.avatar ? (
            <Avatar
              src={userProfile.user.avatar || "/logo.png"}
              className="w-14 h-14 sm:w-24 sm:h-24 bg-white aspect-square"
            />
          ) : (
            <Icon
              name="avatar"
              className="text-[56px] sm:text-[96px] !border-2 rounded-full !border-white aspect-square"
            />
          )}
          <div className="flex flex-col gap-1">
            <span
              className={`${memesTitleSize} !text-xl sm:!text-2xl !font-bold uppercase flex items-center w-full`}
            >
              <Ellipsis content={t("memes.ownedBy")} />
            </span>
            <span
              className={`${memesTextSize} !text-sm sm:!text-lg opacity-50`}
            >
              --
            </span>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <>
      <UserEdit open={editOpens || editOpen} onClose={handleEdit} />
      <Publish open={publishOpen} onClose={setPublishOpen} />
      <Section className="grid grid-cols-[1fr_auto] flex-wrap items-center justify-between gap-4">
        <div className="grid grid-cols-[56px_1fr] sm:grid-cols-[96px_1fr] items-center gap-2 sm:gap-4 w-auto">
          {userProfile?.user.avatar ? (
            <Avatar
              src={userProfile.user.avatar || "/logo.png"}
              className="w-14 h-14 sm:w-24 sm:h-24 border-2 border-white aspect-square"
            />
          ) : (
            <div className="w-14 h-14 sm:w-24 sm:h-24 !border-1 !border-white">
              <Icon
                name="avatar"
                className="text-[56px] sm:text-[96px]  aspect-square"
              />
            </div>
          )}
          <div className="flex flex-col gap-1">
            <span
              className={`${memesTitleSize}  !text-xl sm:!text-2xl !font-bold uppercase flex items-center w-full`}
            >
              <Ellipsis
                content={
                  userProfile.user.username ||
                  userProfile.user.id ||
                  t("memes.ownedBy")
                }
                className="h-8"
              />
              &nbsp;
              <Icon name="authenticate" className="text-xl sm:text-2xl" />
              {userProfile.user.x && (
                <>
                  &nbsp;
                  <a
                    href={userProfile.user.x}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      name="twitter"
                      className="text-white text-sm sm:text-base"
                    />
                  </a>
                </>
              )}
              {userProfile.user.telegram && (
                <>
                  &nbsp;
                  <a
                    href={userProfile.user.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      name="telegram"
                      className="text-white text-sm sm:text-base"
                    />
                  </a>
                </>
              )}
              {user && isCurrentUser && (
                <>
                  &nbsp;
                  <Icon
                    name="edit"
                    className="text-lg sm:text-xl ml-2"
                    onClick={() => setEditOpen(true)}
                  />
                </>
              )}
            </span>
            <span
              className={`${memesTextSize} !text-sm sm:!text-lg opacity-50`}
            >
              {userProfile.user.sol_wallet_address ? (
                <Paragraph
                  copyable={{
                    text: userProfile.user.sol_wallet_address,
                  }}
                  className="flex items-center"
                >
                  <Ellipsis
                    content={userProfile.user.sol_wallet_address}
                    direction="middle"
                    className="h-[24px] -mb-1"
                  />
                </Paragraph>
              ) : user && isCurrentUser ? (
                t("memes.bindSOLWallet")
              ) : (
                "--"
              )}
            </span>
          </div>
        </div>
        {/* 发布按钮 - 仅当前用户且已绑定钱包时显示 */}
        {isCurrentUser && hasWallet && (
          <Button
            onClick={() => setPublishOpen(true)}
            type="default"
            disabled={!hasWallet}
            size="small"
            className="rounded-full items-center flex justify-center xl:!max-w-36 sm:!w-auto !h-auto sm:!min-h-11  sm:!text-base"
          >
            <Icon name="publish" className="text-2xl sm:text-3xl" />
            &nbsp;{t("memes.publish")}
          </Button>
        )}
      </Section>
    </>
  );
};

// 访问浏览点赞量
export const ViewInfo = ({
  userProfile,
}: {
  userProfile: UserProfile | null;
}) => {
  const { t } = useTranslation();

  // 计算总点赞数
  const getTotalLikes = (emojis: EmojiItem[]): string => {
    if (!emojis?.length) return "--";
    const total = emojis.reduce((sum, item) => sum + item.like_count, 0);
    return total > 1000 ? `${(total / 1000).toFixed(2)}K` : total.toString();
  };

  // 计算总收入
  const getTotalIncome = (emojis: EmojiItem[]): string => {
    if (!emojis?.length) return "--";
    const total = emojis.reduce(
      (sum, item) => sum + (item.total_donation_amount || 0),
      0
    );
    return total > 1000 ? `${(total / 1000).toFixed(2)}K` : total.toString();
  };

  // 计算总浏览量（这里假设每个 emoji 的浏览量为点赞数的 5 倍，实际应该从 API 获取）
  const getTotalViews = (emojis: EmojiItem[]): string => {
    if (!emojis?.length) return "--";
    const total = emojis.reduce((sum, item) => sum + item.like_count * 5, 0);
    return total > 1000 ? `${(total / 1000).toFixed(2)}K` : total.toString();
  };

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
          <img
            src="/logo.png"
            className="w-8 h-8 sm:w-12 sm:h-12 aspect-square"
          />
        ) : (
          <Icon
            name={iconName}
            className={`${
              iconName === "praise"
                ? "text-3xl sm:text-3xl md:text-4xl opacity-50"
                : "text-4xl sm:text-4xl md:text-5xl"
            }`}
          />
        )}
        <div className="flex flex-col">
          <span
            className={`${memesTextSize} text-xs sm:!text-sm !font-normal opacity-50`}
          >
            {label}
          </span>
          <span
            className={`${memesTitleSize} !text-base sm:!text-2xl -mt-[2px] sm:-mt-1`}
          >
            {value}
          </span>
        </div>
      </div>
    );
  };

  if (!userProfile?.emojis) {
    return (
      <Section className="flex flex-wrap gap-x-8 gap-y-4 sm:gap-16 -mt-4 sm:-mt-0">
        <InfoItem iconName="view" label={t("memes.income")} value="--" />
        <InfoItem iconName="praise" label={t("memes.like")} value="--" />
        <InfoItem iconName="views" label={t("memes.check")} value="--" />
      </Section>
    );
  }

  return (
    <Section className="flex flex-wrap gap-x-8 gap-y-4 sm:gap-16 -mt-4 sm:-mt-0">
      <InfoItem
        iconName="view"
        label={t("memes.income")}
        value={getTotalIncome(userProfile.emojis)}
      />
      <InfoItem
        iconName="praise"
        label={t("memes.like")}
        value={getTotalLikes(userProfile.emojis)}
      />
      <InfoItem
        iconName="views"
        label={t("memes.check")}
        value={getTotalViews(userProfile.emojis)}
      />
    </Section>
  );
};

// 列表
export const List = ({ userProfile }: { userProfile: UserProfile | null }) => {
  const { t } = useTranslation();
  const memes: any = t("memes", { returnObjects: true });
  const [sortBy, setSortBy] = useState("Hot");

  // 排序函数
  const getSortedEmojis = (emojis: EmojiItem[], sortType: string) => {
    return [...emojis].sort((a, b) => {
      if (sortType === "Hot") {
        return b.like_count - a.like_count;
      }
      // 按时间排序，新的在前
      return (
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    });
  };

  if (!userProfile?.emojis) {
    return (
      <Section type="top">
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="" />
      </Section>
    );
  }

  const sortedEmojis = getSortedEmojis(userProfile.emojis, sortBy);

  return (
    <div className="flex flex-col gap-4 sm:gap-4 md:gap-8 xl:gap-8 items-center -mt-0 w-full">
      {/* 操作区域 */}
      <Section
        type="top"
        className="flex gap-2 sm:gap-4 sm:flex-row justify-between w-full items-center"
      >
        <Segmented
          value={sortBy}
          onChange={(value) => setSortBy(value as string)}
          options={[
            { value: "Hot", label: memes.hot },
            { value: "New", label: memes.new },
          ]}
        />
        <div className="antd-rounded">
          <Select
            value={sortBy}
            onChange={(value) => setSortBy(value)}
            options={[
              {
                value: "Hot",
                label: memes.hot,
              },
              {
                value: "New",
                label: memes.new,
              },
            ]}
            placeholder="Default sort"
            size="large"
            className="w-auto"
          />
        </div>
      </Section>
      {/* 列表 */}
      <Section type="top" className="w-full">
        {sortedEmojis.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {sortedEmojis.map((item) => (
              <MiniDogeCard
                avatar={item.avatar || "/logo.png"}
                createdAt={item.created_at}
                likeCount={item.like_count}
                key={item.id}
                type={
                  item.file_type.includes("image")
                    ? "image"
                    : item.file_type.includes("video")
                    ? "mp4"
                    : "mp3"
                }
                audioSrc={item.file_path}
                address={item.author_account}
                id={item.id}
                ownerBy={item.author_id}
              />
            ))}
          </div>
        ) : (
          <Section type="top">
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="" />
          </Section>
        )}
      </Section>
    </div>
  );
};

export default function MemesPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [editOpen, setEditOpen] = useState(false);
  const user = useSelector((state: any) => state.user.user);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  // 用户上下文数据
  const userContext = useMemo<UserContextProps>(() => {
    const isCurrentUser = id ? id === user?.userId : false;
    const hasWallet = Boolean(user?.profile.sol_wallet_address);

    return {
      user,
      isCurrentUser,
      hasWallet,
    };
  }, [user, id]);

  // 判断是否需要显示绑定钱包提醒
  const showBindWalletAlert = useMemo(() => {
    return userContext.isCurrentUser && !userContext.hasWallet;
  }, [userContext]);

  // 获取用户资料
  const init = async () => {
    if (id) {
      try {
        const { result, success } = await getUserProfileAPI(id);
        if (success) {
          setUserProfile(result);
        }
      } catch (error) {
        message.error(t("message.getProfileFailed"));
      }
    }
  };

  useEffect(() => {
    init();
  }, [id]);

  return (
    <>
      <div className="flex flex-col gap-8 sm:gap-12 sm:mt-4">
        {showBindWalletAlert && (
          <Alert
            message={
              <div className="text-center text-base sm:text-lg p-2">
                <span className="">{t("memes.bindingWarningText")}</span>
                &nbsp;
                <a
                  className="text-current !text-[#FFAC03] !underline underline-offset-4"
                  onClick={() => setEditOpen(true)}
                >
                  {t("memes.bindingWarningText2")}
                </a>
              </div>
            }
            type="warning"
          />
        )}

        <UserInfo
          editOpens={editOpen}
          onEdit={setEditOpen}
          userContext={userContext}
          userProfile={userProfile}
        />
        <ViewInfo userProfile={userProfile} />
        <Section type="top">
          <Divider className="!my-0" />
        </Section>
        <List userProfile={userProfile} />
      </div>
    </>
  );
}
