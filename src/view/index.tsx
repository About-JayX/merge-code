import Domain from '@/components/domain'

interface HomeProps {
  data: any;
}

export default function Home({ data }: HomeProps) {
  return <Domain {...data} />;
}
