import lottie from "lottie-web";
import { memo, useEffect, useRef, useState } from "react";

import GetTgs from "@/components/tgs/getTgs";
import { TgsProps } from "@/components/tgs/typings";
import type { GetTgsType } from "@/components/tgs/typings/getTgs";

export default memo(function Tgs({
  name = "",
  className = "",
  onChange,
  ...props
}: TgsProps) {
  const tgsRef = useRef<any>(null);

  const [data, setData] = useState<GetTgsType[]>([]);

  const GetData = async () => {
    const data = await GetTgs();
    setData(data);
  };

  useEffect(() => {
    GetData();
  }, []);

  useEffect(() => {
    onChange && onChange(false);
    if (data.length <= 0) return;
    
    const find = data.find((item) => item.name === name);
    if (!find) return;
    if (!tgsRef.current) return;
    if (tgsRef && tgsRef.current) {
      
      tgsRef.current = lottie.loadAnimation({
        container: tgsRef.current!,
        renderer: "canvas",
        loop: false,
        autoplay: true,
        animationData: JSON.parse(find.data),
      });
      tgsRef.current.addEventListener("complete", () => {
        onChange && onChange(true);
        setTimeout(() => {
          tgsRef.current?.goToAndPlay(0, true);
        },100)
       
      })
    }
  }, [data]);
  return (
    <div ref={tgsRef} className={`w-[1em] h-[1em] ${className}`} {...props} />
  );
});
