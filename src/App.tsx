import Router from '@/router'
import GoogleAnalytics from './util/GoogleAnalytics'
import Layout from '@/layout'
import { Footer } from '@/layout/Footer.tsx'
import { useEffect, useState } from 'react'
import dataHook from '@/config/data'

export default function App() {
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const d = await dataHook();
        setData(d);
      } finally {
        setIsLoading(false);
        setTimeout(() => {
          setIsVisible(true);
        }, 50);
      }
    };
    init();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div 
      className={`min-h-screen w-full flex flex-col relative text-content text-white transition-opacity duration-300 ${data.background?.pattern} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="w-full h-screen fixed top-0 left-0 -z-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${data.background?.custom})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={{
          background: data.background?.color,
        }}
      />
      <GoogleAnalytics />
      <div className="flex flex-col flex-grow">
        <Layout data={data}>
          <Router data={data} />
        </Layout>
      </div>
      <footer className="relative z-10">
        <div className="w-full max-w-screen-xl mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  )
}
