import pako from "pako";

import type { GetTgsType } from "@/components/tgs/typings/getTgs";
import { isDev } from "@/config";

const cache: Record<string, string> = {};
const ongoingRequests: Set<string> = new Set();

export default async function GetTgs() {
  const glob = import.meta.glob("@/assets/tgs/**/*.{tgs,json}",{eager:true});
  const data = Object.entries(glob).map(async ([key]) => {
    if (ongoingRequests.has(key)) {
      while (ongoingRequests.has(key)) {
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
      return {
        name: key.match(/tgs\/(.*)\.(tgs|json)$/)?.[1],
        data: cache[key],
      };
    }

    if (cache[key]) {
      return {
        name: key.match(/tgs\/(.*)\.(tgs|json)$/)?.[1],
        data: cache[key],
      };
    }

    ongoingRequests.add(key);

    const type = key.match(/tgs\/(.*)\.(tgs|json)$/);

    const response = await fetch(
      isDev ? key : `/assets/${type?.[1]}.${type?.[2]}`
    );
    const arrayBuffer = await response.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    let unzipped;
    if (type?.[2] === "json") {
      unzipped = new TextDecoder("utf-8").decode(uint8Array);
    } else {
      const decompressed = pako.inflate(uint8Array);
      unzipped = new TextDecoder("utf-8").decode(decompressed);
    }

    cache[key] = unzipped;
    ongoingRequests.delete(key);

    return {
      name: type?.[1],
      data: unzipped,
    };
  });

  return (await Promise.all(data)) as GetTgsType[];
}
