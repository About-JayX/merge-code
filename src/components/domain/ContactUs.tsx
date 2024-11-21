import { CSSTransition } from 'react-transition-group'

const ContactUs = ({...props}) => {
  const { show } = props
  return (
    <div className="w-full h-auto py-24 z-10 relative " id="contact">
      <div
        className="max-w-screen-xl mx-auto p-4"
        style={{ opacity: show ? 1 : 0 }}
      >
        <div className="flex justify-between items-center gap-x-4 flex-col lg:flex-row py-4">
          <p className="text-primary text-4xl lg:text-6xl leading-[2rem] lg:leading-[5rem]  w-max  pointer-events-none whitespace-nowrap text-stroke-sm">
            contact us
          </p>
          <CSSTransition in={show} timeout={1000} classNames="lines">
            <div className="w-full h-[2px] hidden lg:block"  style={{
              background:props.text.color
            }}/>
          </CSSTransition>
          <CSSTransition in={show} timeout={1000} classNames="about">
            <p className="tracking-[0.5rem] font-bold w-max whitespace-nowrap opacity-60">
              CONNECT WITH BRETT
            </p>
          </CSSTransition>
        </div>
        <div className="flex justify-between items-center gap-x-4 gap-y-16 p-4 lg:px-24 lg:py-12 flex-col">
          <CSSTransition in={show} timeout={1000} classNames="hideToshow">
            <div className="flex gap-x-4 gap-y-4 flex-col lg:flex-row items-center justify-center">
              <a
                href="mailto: contact@basedbrett.com"
                target="_blank"
                rel="noopener noreferrer"
                className='text-current'
              >
                <p className="font-semibold underline hover:text-gry transition-all ease-in-out duration-300 text-3xl md:text-5xl text-stroke-sm">
                  contact@basedbrett.com
                </p>
              </a>
            </div>
          </CSSTransition>
          <div className="max-w-none lg:max-w-lg text-center lg:text-left">
            <CSSTransition in={show} timeout={1000} classNames="hideToshow">
              <div className="flex gap-x-4 text-6xl">
                <a
                  href="https://twitter.com/BasedBrett"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-current'
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    className=" hover:text-gry cursor-pointer transition-all ease-in-out duration-300"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                  </svg>
                </a>
                <a
                  href="https://t.me/basedbrett"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-current'
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="hover:text-gry cursor-pointer transition-all ease-in-out duration-300"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
                  </svg>
                </a>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
