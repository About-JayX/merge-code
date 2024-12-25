import React from "react";
import { useTranslation } from "react-i18next";
import { MULTISIG_ADMINS } from "@/config/multisigAdmins";
import TwitterEmbed from "@/components/base/TwitterEmbed";
import { TeamOutlined } from "@ant-design/icons";
import Icon from "@/components/icon";

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 sm:gap-x-16 sm:gap-y-6 sm:px-2 sm:px-8 w-full">
          {MULTISIG_ADMINS.map((admin, index) => (
              <div 
                key={index} 
                className="flex items-center justify-start sm:justify-center gap-1"
              >
                <TwitterEmbed username={admin.twitter.slice(1)} />
                <div 
                  className="w-4 h-4 cursor-help opacity-60 hover:opacity-100 transition-opacity flex items-center"
                  title={admin.walletAddress}
                >
                  <Icon name="sol" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultisigAdmins;
