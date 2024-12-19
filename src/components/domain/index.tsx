import { Section } from './common/Section.tsx';
import { Button } from './common/Button.tsx';
import { Card as LayoutCard } from './common/Card.tsx';
import { Link } from './common/Link.tsx';
import { Home } from './sections/Home.tsx';
import { Tweet } from './sections/Tweet.tsx';
import { Intro } from './sections/Intro.tsx';
import { Gallery } from './sections/Gallery.tsx';
import { BuyGuide } from './sections/BuyGuide.tsx';
import { About } from './sections/About.tsx';
import { Space } from './common/Space.tsx';
import { pageSwitch } from "@/config/pageSwitch";
import Listings from "./sections/Listings.tsx";
import Funds from "./sections/Funds.tsx";

export { Section };
export { Button };
export { LayoutCard as Card };
export { Link };
export { Home };
export { Tweet };
export { Intro };
export { Gallery };
export { BuyGuide };
export { About };
export { Space };

export default function Domain({ ...props }) {
  if (Object.keys(props).length === 0) return null;

  return (
    <div className="flex flex-col gap-12 sm:gap-24 md:gap-28 xl:gap-28">
      <Home {...props} />
      <Section type="bottom">
        <Listings {...props} />
      </Section>
      <Tweet {...props} />
      <Intro {...props} />
      <Gallery {...props} />
      <BuyGuide {...props} />
      <Section type="top">
        <About {...props} />
      </Section>
      {pageSwitch.home.foundationAddr && (
        <Section type="top">
          <Funds {...props} />
        </Section>
      )}
    </div>
  );
}
