import { CSSTransition } from 'react-transition-group'

const Tokenomics = ({...props}) => {
  const { show } = props
  return (
    <div
      className="w-full h-auto  py-24 z-10 relative"
      id="tokenomics"
    >
      <div
        className="max-w-screen-xl mx-auto p-4 "
        style={{ opacity: show ? 1 : 0 }}
      >
        <CSSTransition in={show} timeout={1000} classNames="hideToshow">
          <div className="bg-gradient-to-t from-yllw/50 to-lyllw/50  backdrop-blur-lg  gap-y-8 items-center justify-center w-full p-12 rounded-2xl border"  style={{ border: `1px solid ${props.text.color}` }}>
            <div className="flex flex-col md:flex-row">
              <div className="">
                <div className="flex flex-col items-center justify-center ">
                  <img
                    src="https://imagedelivery.net/cwNlIhFkSHgM59lNYMgaeA/c49d64b0-1a07-4057-a7c7-1810e94bb600/public"
                    alt="allocation"
                  />
                </div>
              </div>
              <CSSTransition in={show} timeout={1000} classNames="about">
                <div className="items-center gap-y-4 w-full lg:w-1/2 text-center">
                  <h1 className="text-stroke-sm text-6xl md:text-8xl text-center">
                    TOKENOMICS
                  </h1>
                  <div className="text-center">
                    <p className="mt-5 text-5xl md:text-7xl">85% LP</p>
                    <p className="mt-5 text-5xl md:text-7xl">10% TREASURY</p>
                    <p className="mt-5 text-5xl md:text-7xl">5% CEX WALLET</p>
                  </div>
                </div>
              </CSSTransition>
            </div>
            <div className="flex flex-col sm:flex-row gap-y-5 gap-x-5 text-center text-5xl mt-5">
              <div className="w-full bg-lyllw/70 rounded-3xl drop-shadow-lg duration-300 transition-all ease-in-out hover:scale-110 hover:bg-lyllw/100">
                <a
                  href="https://basescan.org/tx/0x748e6b909db8798aab851294c416e058f5b9fccc2367a7ec608bfda50c39432b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-current'
                >
                  <h1>CONTRACT RENOUNCED</h1>
                </a>
              </div>
              <div className="w-full bg-lyllw/70 rounded-3xl drop-shadow-lg duration-300 transition-all ease-in-out hover:scale-110 hover:bg-lyllw/100">
                <a
                  href="https://basescan.org/tx/0x7b59c9fc5476bfc5d5cdd467926a928ad6b18cb0092b9fa096332d9f441337c3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-current'
                >
                  <h1>LP LOCKED 365 DAYS</h1>
                </a>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  )
}
export default Tokenomics
