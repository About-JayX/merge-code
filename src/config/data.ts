import banner from '@/assets/image/banner/banner.png'
import logo from '@/assets/image/logo/logo.png'
import s1Left from '@/assets/image/section1/left.png'
import s1Right from '@/assets/image/section1/right.png'
import s2Image from '@/assets/image/section2/index.png'

const l3 = await Promise.all(
  Object.entries(import.meta.glob('@/assets/image/section3/*')).map(
    async ([_, value]) => ((await value()) as any).default
  )
)

export default {
  background: {
    color: '#000',
  },
  card: {
    background: '#0F0F0F',
  },
  banner_url: banner,
  logo_url: logo,
  name: '$MINIDOGE (CTO) - Minidoge',
  description:
    'Carrying forward the inheritance of $DOGE, blessed by Elon Musk, $MINIDOGE continues the revolution.',
  twitter_url: 'https://x.com/MINIDOGE_X',
  telegram_url: 'https://t.me/MINIDOGE_PORTAL',
  contract_address: '8J6CexwfJ8CSzn2DgWhzQe1NHd2hK9DKX59FCNNMo2hu',
  button: {
    background: '#FFC10B',
    text: '#242904',
  },
  section1: {
    title: 'The Revolution Begins',
    text: "oin the $MINIDOGE CTO movement - where every holder is an owner, every voice matters. Together, we're building the first truly community-driven inheritance of $DOGE.",
    box: {
      left: { image: s1Left },
      right: {
        bntText: 'Place a Bid',
        bntUrl: '',
        image: s1Right,
        title: 'Hot Trending on this week',
        text: '$MINIDOGE emerges as the true inheritor of $DOGE. As a CTO (Community-Taken-Over) token, we represent the first shot against centralized power in the crypto space.',
      },
    },
  },
  section2: {
    title: 'Power to Community',
    text: "In an era dominated by VCs and whales, $MINIDOGE CTO stands as a symbol of community resistance. We're taking back control, one token at a time.",
    bntText: 'Connect Wallet',
    bntUtl: '',
    image: s2Image,
  },
  section3: l3,
  roadmap: [
    {
      title: 'Step 1',
      text: 'Download the Phantom app for mobile users, and download the Phantom Chrome extension for desktop users.',
    },
    {
      title: 'Step 2',
      text: 'Fund your wallet with Solana, you can buy Solana from an exchange or cross chain swap and send it to your wallet.',
    },
    {
      title: 'Step 3',
      text: 'Go to Jupiter and swap your Solana for $BITCAT. (We recommend using Jupiter to avoid MEV bots.)',
    },
  ],
  about: {
    title: 'MINIDOGE COIN',
    text: 'Subscription get interesting offers from us and gtet the best technology for your various activites',
    bntText: 'Get Started',
    bntUrl: '',
  },
}
