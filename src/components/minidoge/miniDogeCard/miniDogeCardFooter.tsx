import Icon from "@/components/icon";
import { LikeIcon } from "../likeIcon";
import { useState } from "react";

export const MiniDogeCardFooter = ({type="download", likeCount = 0}:{type:"download"|"delete", likeCount?: number}) => {
  const [liked, setLiked] = useState(false);
    return (
      <div className="w-full flex items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Icon name="views" className="text-2xl" />
            <span className="text-base">31 K</span>
          </div>
          <div className="flex items-center gap-1">
            <LikeIcon liked={liked} onClick={() => setLiked(!liked)} className="text-lg"/>
            <span className="text-base">{likeCount}</span>
          </div>
        </div>
  
        <Icon name={type} className="text-lg" />
      </div>
    );
  };