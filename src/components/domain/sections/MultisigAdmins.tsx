import React from "react";
import { useTranslation } from "react-i18next";
import { MULTISIG_ADMINS } from "@/config/multisigAdmins";
import TwitterEmbed from "@/components/base/TwitterEmbed";
import { TeamOutlined } from "@ant-design/icons";
import Icon from "@/components/icon";
import { Tooltip } from "antd";

const MultisigAdmins: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white/5 rounded-xl p-4 sm:p-6">
      <div className="flex items-start gap-3">
        <TeamOutlined className="text-[#FFAC03] text-xl mt-1" />
        <div className="w-full">
          <div
            className="text-[#FFAC03] font-medium text-base sm:text-lg mb-2"
            dangerouslySetInnerHTML={{
              __html: t("public.multisigAdminTitle"),
            }}
          />
          <div
            className="text-white/80 text-sm sm:text-base mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: t("public.multisigAdminDesc"),
            }}
          />

          <div className="grid sm:flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-8 xl:gap-12 break-after-all">
            {MULTISIG_ADMINS.map((admin, index) => (
              <div
                key={index}
                className="flex items-center justify-start sm:justify-center gap-1"
              >
                <TwitterEmbed username={admin.twitter.slice(1)} />
                {admin.walletAddress && (
                  <Tooltip title={`${admin.walletAddress.slice(0, 11)}...${admin.walletAddress.slice(-11)}`}>
                    <a
                      href={`https://solscan.io/account/${admin.walletAddress}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-4 h-4 opacity-60 hover:opacity-100 transition-opacity flex items-center"
                    >
                      <Icon name="sol" />
                    </a>
                  </Tooltip>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultisigAdmins;
