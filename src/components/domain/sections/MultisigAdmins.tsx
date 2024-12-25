import React from 'react';
import { useTranslation } from 'react-i18next';
import { MULTISIG_ADMINS } from '@/config/multisigAdmins';
import TwitterEmbed from '@/components/base/TwitterEmbed';
import { TeamOutlined } from '@ant-design/icons';

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
              __html: t('public.multisigAdminTitle'),
            }}
          />
          <div 
            className="text-white/80 text-sm sm:text-base mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: t('public.multisigAdminDesc'),
            }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-x-16 sm:gap-y-6 w-full px-2 sm:px-8">
            {MULTISIG_ADMINS.map((admin, index) => (
              <div 
                key={index} 
                className="flex items-center justify-start sm:justify-center gap-2 h-[20px]"
              >
                <div className="flex items-center">
                  <TwitterEmbed username={admin.twitter.slice(1)} />
                </div>
                <div 
                  className="w-4 h-4 cursor-help opacity-60 hover:opacity-100 transition-opacity flex items-center"
                  title={admin.walletAddress}
                >
                  <svg 
                    viewBox="0 0 397 311" 
                    className="w-full h-full"
                    fill="none"
                  >
                    <path
                      d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7zM64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8zM333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z"
                      fill="url(#solana-gradient)"
                    />
                    <defs>
                      <linearGradient id="solana-gradient" x1="0" y1="0" x2="397" y2="311" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9945FF" />
                        <stop offset="0.5" stopColor="#14F195" />
                        <stop offset="1" stopColor="#00FFA3" />
                      </linearGradient>
                    </defs>
                  </svg>
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