import logoImage from './logo.png';

// Banner
import bannerImage from './banner/banner.png';

// Section1
import section1LeftImage from './section1/left.png';
import section1RightImage from './section1/right.png';

// Section2
import section2Image from './section2/index.png';

// Section3
import section3Image0 from './section3/0.png';
import section3Image1 from './section3/1.png';
import section3Image2 from './section3/2.png';
import section3Image3 from './section3/3.png';
import section3Image4 from './section3/4.png';
import section3Image5 from './section3/5.png';
import section3Image6 from './section3/6.png';

// 统一导出所有图片资源
export const images = {
  // 基础图片
  logo: logoImage,
  banner: bannerImage,

  // 各个部分的图片
  section1: {
    left: section1LeftImage,
    right: section1RightImage,
  },
  section2: section2Image,
  section3: [
    section3Image0,
    section3Image1,
    section3Image2,
    section3Image3,
    section3Image4,
    section3Image5,
    section3Image6,
  ],
} as const;

export type ImageType = typeof images;
export default images;
