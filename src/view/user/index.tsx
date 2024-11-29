import { domain } from '@/api'
import Button from '@/components/memes/button'
import Card from '@/components/memes/card'
import { useAppDispatch, useAppSelector } from '@/store'
import { updateToken } from '@/store/user'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { Typography } from 'antd'
import { Ellipsis, Image } from 'antd-mobile'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
const { Paragraph } = Typography

export default function User() {
  const { publicKey, signMessage } = useWallet()
  const navigate = useNavigate()
  const { token } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  const { setVisible } = useWalletModal()
  const [tokens, setTokens] = useState({ data: [], total: 1 })
  const authorize = async () => {
    try {
      if (!publicKey) {
        setVisible(true)
        return
      }

      const address = publicKey.toString()
      const message = `BanDing wallet Address for memes, User Wallet Address is ${address.toLowerCase()}, Please confirm the sign`
      const encodedMessage = new TextEncoder().encode(message)
      let signature: any = signMessage && (await signMessage(encodedMessage))
      signature = Array.from(signature)

      const result: any = await domain.loginAPI({
        address,
        signature,
        message: Array.from(encodedMessage),
      })
      if (!result.success) throw new Error('request api fail')
      dispatch(updateToken(result.data))
    } catch (error) {
      console.log(error, 'login fail')
    }
  }
  const loadEditTokens = async () => {
    const result: any = await domain.ownerListAPI(
      { current: 1, pageSize: 10 },
      token
    )
    setTokens(result.data)
  }
  useEffect(() => {
    token && loadEditTokens()
  }, [token])
  return (
    <div className="flex flex-col gap-20 mt-20">
      <main className="flex justify-center p-4 mt-12">
        <div className="w-full max-w-6xl flex justify-center flex-col gap-7 sm:gap-10">
          <div className="grid gap-5 justify-items-center">
            <div className="w-32 h-32 rounded-full border-2 p-5 border-[--border-color] flex justify-center items-center bg-[--card-color] overflow-hidden">
              <Image
                src="/memes-001.png"
                className="!w-full !h-full dark:opacity-80"
              />
            </div>

            {publicKey && (
              <Paragraph
                className="flex"
                copyable={{
                  text: publicKey?.toBase58(),
                }}
              >
                <Ellipsis
                  className="text-lg font-bold opacity-80"
                  direction="middle"
                  content={publicKey?.toBase58() || ''}
                />
              </Paragraph>
            )}
          </div>
          <div className="border border-[--border-color]" />
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {token ? (
              tokens.data.map((item: any, index) => (
                <Card
                  key={index}
                  rel="noopener noreferrer"
                  onClick={() => navigate(`/edit/${item.domain}`)}
                >
                  <div className="flex flex-col gap-2 sm:gap-3 items-center">
                    <Image
                      loading="lazy"
                      lazy
                      className="!w-32 !h-32 sm:!w-52 sm:!h-52 object-cover rounded-2xl sm:rounded-3xl"
                      src={item.logo_url || ''}
                    />
                    <span className="text-xl font-medium break-all">
                      <Ellipsis direction="middle" content={item.name} />
                    </span>
                    <Paragraph
                      className="flex"
                      copyable={{
                        text: item.contract_address,
                      }}
                    >
                      <Ellipsis
                        className="text-sm opacity-80"
                        direction="middle"
                        content={item.contract_address}
                      />
                    </Paragraph>
                    <Button className="!w-full" type="primary">
                      Edit
                    </Button>
                  </div>
                </Card>
              ))
            ) : (
              <Button onClick={authorize}>授权</Button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
