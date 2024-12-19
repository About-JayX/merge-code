import { useTranslation } from 'react-i18next';
import { memesTextSize } from './domain/styles';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6 w-full py-4 px-3 sm:px-8 md:px-16">
      <div className="max-w-4xl mx-auto w-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
        <p
          className={`${memesTextSize} text-center leading-normal opacity-80`}
          dangerouslySetInnerHTML={{ __html: t("footer") }}
        />
      </div>
    </div>
  );
}; 