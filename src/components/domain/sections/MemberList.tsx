import React from "react";
import { Table, Tooltip } from "antd";
import useFoundationMembers from "@/hooks/useFoundationMembers";
import { useTranslation } from "react-i18next";
import {
  SolanaCircleColorful,
  UsdcCircleColorful,
  UsdtCircleColorful,
} from "@ant-design/web3-icons";
import Icon from "@/components/icon";

interface DonationAmount {
  USDT: number;
  USDC: number;
  SOL: number;
  MINIDOGE: number;
}

interface MemberData {
  address: string;
  totalDonation: DonationAmount;
  lastDonation: string;
  donationCount: number;
  totalNftRights: number;
  votingRights: number;
}

const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const getTokenColor = (type: string) => {
  switch (type) {
    case "MINIDOGE":
      return "#FFAC03";
    case "USDT":
      return "#26A17B";
    case "USDC":
      return "#2775CA";
    case "SOL":
      return "#9945FF";
    default:
      return "#FFAC03";
  }
};

// 添加统计组件
const StatsDisplay: React.FC<{ members: MemberData[] }> = ({ members }) => {
  const { t } = useTranslation();

  // 计算统计数据
  const stats = members.reduce(
    (acc, member) => {
      return {
        totalNftRights: acc.totalNftRights + member.totalNftRights,
        totalVotingRights: acc.totalVotingRights + member.votingRights,
      };
    },
    { totalNftRights: 0, totalVotingRights: 0 }
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-0 sm:mb-6">
      <div className="bg-white/10 rounded-xl p-3 px-2 sm:p-4 text-center">
        <div className="text-[#FFAC03] text-2xl font-bold mb-1">
          {members.length}
        </div>
        <div className="text-white/80 text-sm">{t("dao.totalMembers")}</div>
      </div>
      <div className="bg-white/10 rounded-xl p-3 px-2 sm:p-4 text-center">
        <div className="text-[#FFAC03] text-2xl font-bold mb-1">
          {stats.totalNftRights}
        </div>
        <div className="text-white/80 text-sm">{t("dao.totalNftAirdrops")}</div>
      </div>
      <div className="bg-white/10 rounded-xl p-3 px-2 sm:p-4 text-center col-span-2 sm:col-span-1">
        <div className="text-[#FFAC03] text-2xl font-bold mb-1">
          {stats.totalVotingRights}
        </div>
        <div className="text-white/80 text-sm">{t("dao.totalVotes")}</div>
      </div>
    </div>
  );
};

export const MemberList: React.FC = () => {
  const { t } = useTranslation();
  const { members, loading, error } = useFoundationMembers();

  // 添加分页状态
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 50;

  // 计算当前页的数据
  const startIndex = (currentPage - 1) * pageSize;
  const currentPageData = members.slice(startIndex, startIndex + pageSize);

  const memberColumns = [
    {
      title: t("dao.numberHeader"),
      key: "index",
      width: 60,
      align: "center" as const,
      render: (_: any, __: any, index: number) => (
        <span className="text-[#FFAC03] text-lg font-bold">{index + 1}</span>
      ),
    },
    {
      title: t("dao.nftRightsHeader"),
      dataIndex: "totalNftRights",
      key: "totalNftRights",
      width: 120,
      align: "center" as const,
      render: (rights: number) => (
        <span className="text-white font-medium">{rights}</span>
      ),
    },
    {
      title: t("dao.votingRightsHeader"),
      dataIndex: "votingRights",
      key: "votingRights",
      width: 160,
      align: "center" as const,
      render: (rights: number) => (
        <span className="text-white font-medium">{rights}</span>
      ),
    },
    {
      title: t("dao.walletAddressHeader"),
      dataIndex: "address",
      key: "address",
      align: "center" as const,
      width: 360,
      render: (address: string) => (
        <a
          href={`https://solscan.io/account/${address}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-white/80 font-medium"
        >
          {address}
        </a>
      ),
    },
    {
      title: t("dao.lastDonationHeader"),
      dataIndex: "lastDonation",
      key: "lastDonation",
      width: 160,
      align: "center" as const,
      render: (dateStr: string) => {
        if (!dateStr) return <span className="text-white/80">-</span>;

        // 解析 ISO 格式的时间字符串
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) {
          return <span className="text-white/80">Invalid Date</span>;
        }

        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, "0");
        const day = String(date.getUTCDate()).padStart(2, "0");
        const hours = String(date.getUTCHours()).padStart(2, "0");
        const minutes = String(date.getUTCMinutes()).padStart(2, "0");

        return (
          <span className="text-white/80">
            {`${year}-${month}-${day} ${hours}:${minutes}`}
          </span>
        );
      },
    },
    {
      title: t("dao.totalDonationHeader"),
      dataIndex: "totalDonation",
      key: "totalDonation",
      width: 180,
      align: "center" as const,
      render: (donations: DonationAmount) => {
        // 计算显示的捐赠项
        const donationItems: any[] = [];
        if (donations?.USDT > 0)
          donationItems.push({ type: "USDT", amount: donations.USDT });
        if (donations?.USDC > 0)
          donationItems.push({ type: "USDC", amount: donations.USDC });
        if (donations?.SOL > 0)
          donationItems.push({ type: "SOL", amount: donations.SOL });
        if (donations?.MINIDOGE > 0)
          donationItems.push({ type: "MINIDOGE", amount: donations.MINIDOGE });

        const TokemBox = () => (
          <div className="flex flex-col gap-2">
            {donationItems.map((item) => (
              <div
                key={item.type}
                className="grid grid-cols-[auto,1fr] items-center justify-start gap-1 text-left"
              >
                <span
                  className="text-sm"
                  style={{ color: getTokenColor(item.type) }}
                >
                  {item.type === "USDT" && <Icon name="usdt" />}
                  {item.type === "USDC" && <Icon name="usdc" />}
                  {item.type === "SOL" && <SolanaCircleColorful />}
                  {item.type === "MINIDOGE" && (
                    <span className="anticon ant-web3-icon-solana-circle-colorful">
                      <img src="/logo.png" className="w-[1em] h-[1em]" />
                    </span>
                  )}
                </span>
                <span className="text-white font-medium break-all">
                  {item.type === "SOL"
                    ? item.amount.toFixed(3)
                    : item.type === "MINIDOGE"
                    ? formatNumber(item.amount)
                    : item.amount.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        );

        return (
          <Tooltip
            title={
              <TokemBox />
            }
          >
            <TokemBox />
          </Tooltip>
        );
      },
    },
  ];

  const totalWidth = memberColumns.reduce(
    (acc, column) => acc + column.width,
    0
  );

  const paginationConfig = {
    current: currentPage,
    pageSize: pageSize,
    total: members.length,
    showSizeChanger: false,
    className: "!text-white",
    size: "small" as "default" | "small",
    onChange: (page: number) => setCurrentPage(page),
  };

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        {t('dao.loadError')}: {error.includes('Invalid public key input') ? t('dao.invalidPublicKey') : error}
      </div>
    );
  }

  return (
    <div className="relative">
      <StatsDisplay members={members} />
      {/* 上方分页器 */}
      <div className="flex justify-center mb-0">
        <Table
          columns={[]}
          dataSource={[]}
          pagination={paginationConfig}
          className="pagination-only"
        />
      </div>
      {/* 表格内容 - 添加固定高度容器 */}
      <div className="h-auto max-h-[400px]  overflow-hidden mt-3 sm:mt-0 rounded-xl">
        <div className="h-full overflow-x-auto overflow-y-auto">
          <Table
            columns={memberColumns}
            dataSource={currentPageData}
            loading={loading}
            rowKey="address"
            pagination={false}
            className="custom-table no-hover-effect"
            rowClassName={() => "bg-transparent"}
            style={{
              background: "transparent",
              minWidth: totalWidth,
            }}
            scroll={{ x: "auto" }}
            tableLayout="fixed"
          />
        </div>
      </div>
      {/* 下方分页器 */}
      <div className="flex justify-center mt-0">
        <Table
          columns={[]}
          dataSource={[]}
          pagination={paginationConfig}
          className="pagination-only"
        />
      </div>
    </div>
  );
};
