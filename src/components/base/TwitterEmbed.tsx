import React, { useEffect } from 'react';

interface TwitterEmbedProps {
  username: string;
}

declare global {
  interface Window {
    twttr: any;
  }
}

const TwitterEmbed: React.FC<TwitterEmbedProps> = ({ username }) => {
  useEffect(() => {
    if (window.twttr) {
      window.twttr.widgets.load();
    }
  }, [username]);

  return (
    <div className="twitter-embed flex justify-center items-center w-full">
      <a 
        href={`https://twitter.com/${username}`}
        className="twitter-follow-button hover:opacity-80 transition-opacity duration-200"
        data-show-screen-name="true"
        data-show-count="false"
        data-size="large"
        data-dnt="true"
      >
        @{username}
      </a>
    </div>
  );
};

export default TwitterEmbed; 