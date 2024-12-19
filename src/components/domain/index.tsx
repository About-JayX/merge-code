import { Section } from './Section';
import { Button } from './Button.tsx';
import { Card as LayoutCard } from './Card.tsx';
import { Link } from './Link.tsx';
import { Home } from './Home.tsx';
import { Tweet } from './Tweet.tsx';
import { Intro } from './Intro.tsx';
import { Gallery } from './Gallery.tsx';
import { BuyGuide } from './BuyGuide.tsx';
import { About } from './About';
import { StarrySky } from './StarrySky';
import { pageSwitch } from "@/config/pageSwitch";
import Listings from "./Listings.tsx";
import Funds from "./Funds.tsx";

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
export { StarrySky };

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
