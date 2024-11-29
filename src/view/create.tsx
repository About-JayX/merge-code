import { Card, Input } from 'antd'
import { Fragment, useState } from 'react'
import Mbutton from '@/components/memes/button'
import { useLocation } from 'react-router'
import Icon from '@/components/icon'
import { useNavigate } from 'react-router'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from '@solana/web3.js'
import Upload from '@/components/memes/upload'
import { domain } from '@/api'
import BigNumber from 'bignumber.js'

export default function Create() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [step, setStep] = useState<number>(0)
  const [avatarImageUrl, setAvatarImageUrl] = useState<string>()
  const [name, setName] = useState<string>('')
  const [ticker, setTicker] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [contractAddress, setContractAddress] = useState<string>('')
  const [twitter, setTwitter] = useState<string>('')
  const [telegram, setTelegram] = useState<string>('')
  const { setVisible } = useWalletModal()
  const { publicKey, sendTransaction } = useWallet()

  const register = async () => {
    if (!publicKey) return
    const data = {
      domain: state?.domain,
      image: avatarImageUrl || '',
      name,
      ticker,
      description,
      contractAddress,
      twitter,
      telegram,
    }
    try {
      const result: any = await domain.registerAPI(data)
      if (!result.success) throw Promise.reject('create error')
      if (!(result.data && result.data.iv))
        throw Promise.reject('Already registered')

      const connection = new Connection(
        'https://go.getblock.io/79260d59d6f84a648a0e75909aebc3f2',
        {
          wsEndpoint: 'https://go.getblock.io/0f0b2baad7c54856ab656600d50e0c32',
          commitment: 'confirmed',
        }
      )

      const recipientPubKey = new PublicKey(
        '74A2G5b6oPK3PS3yX5rAtFwnYvxtbAuhckoWG125KMcP'
      )
      const fixedAmount = 0.00001
      const lamports = new BigNumber(fixedAmount)
        .multipliedBy(LAMPORTS_PER_SOL)
        .integerValue(BigNumber.ROUND_DOWN)
        .toNumber()

      const transaction = new Transaction()

      transaction
        .add(
          SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: recipientPubKey,
            lamports: lamports,
          })
        )
        .add(
          new TransactionInstruction({
            keys: [],
            programId: new PublicKey(
              'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'
            ),
            data: Buffer.from(new TextEncoder().encode(result.data.iv)), // Encode memo
          })
        )
      const latestBlockhash = await connection.getLatestBlockhash()

      transaction.recentBlockhash = latestBlockhash.blockhash
      transaction.feePayer = publicKey
      const signature = await sendTransaction(transaction, connection)

      console.log(`Transaction signature: ${signature}`)
      // 完成交易区域
      navigate('/user')
    } catch (error) {
      console.log(error, 'error_')
    }
  }

  return (
    <div
      className={`flex justify-center px-4 gap-4  min-h-screen ${
        step === 0 ? 'items-center' : 'items-start'
      }`}
    >
      {step === 0 ? (
        <div className="flex flex-col gap-4 py-4">
          <a className="text-current text-sm" onClick={() => navigate('/')}>
            <Icon name="back" className="mt-[-3px]" />
            &nbsp; Back
          </a>
          <Card className="w-full">
            <div className="grid gap-4">
              <div className="grid gap-4 grid-cols-[auto,1fr]">
                <div className="grid gap-2">
                  <span className="text-sm font-bold">
                    Image <span className="text-red-500">*</span>
                  </span>
                  <Upload image={avatarImageUrl} onChange={setAvatarImageUrl} />
                </div>
                <div className="flex flex-col gap-4 h-fit">
                  <div className="grid gap-1">
                    <span className="text-sm font-bold">
                      Name <span className="text-red-500">*</span>
                    </span>
                    <Input
                      size="middle"
                      defaultValue={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-1">
                    <span className="text-sm font-bold">
                      Ticker <span className="text-red-500">*</span>
                    </span>
                    <Input
                      size="middle"
                      defaultValue={ticker}
                      onChange={e => setTicker(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <span className="text-sm font-bold">Description</span>
                <Input.TextArea
                  size="middle"
                  defaultValue={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <span className="text-sm font-bold">Contract Address</span>
                <Input
                  size="middle"
                  defaultValue={contractAddress}
                  onChange={e => setContractAddress(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <span className="text-sm font-bold">Twitter</span>
                <Input
                  size="middle"
                  defaultValue={twitter}
                  onChange={e => setTwitter(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <span className="text-sm font-bold">Telegram</span>
                <Input
                  size="middle"
                  defaultValue={telegram}
                  onChange={e => setTelegram(e.target.value)}
                />
              </div>
              <Mbutton
                disabled={!avatarImageUrl || !name || !ticker}
                type="primary"
                onClick={() => {
                  if (!avatarImageUrl || !name || !ticker) return
                  publicKey ? register() : setVisible(true)
                }}
              >
                {publicKey ? 'Register' : 'Connect wallet'}
              </Mbutton>
            </div>
          </Card>
        </div>
      ) : (
        <Fragment>
          <div className="max-w-4xl overflow-hidden relative pb-48 sm:pb-0">
            <div className="fixed flex-col gap-4 bottom-0 left-0 flex xl:hidden bg-[--bg-color] p-4 pb-8 w-full justify-center items-center z-50">
              <div className="max-w-4xl flex items-center justify-between flex-wrap gap-4 gap-x-5">
                <a className="!text-current text-sm" onClick={() => setStep(0)}>
                  <Icon name="back" className="mt-[-3px]" />
                  &nbsp;Previous step
                </a>
              </div>
              <Mbutton
                className="!min-w-48"
                type="primary"
                onClick={() => {
                  if (publicKey) {
                    // sendSolana()
                    // 完成把所有数据保存数据库
                  } else {
                    setVisible(true)
                  }
                }}
              >
                {publicKey ? 'Launch' : 'Connect wallet'}
              </Mbutton>
              <span className="text-center text-sm font-bold opacity-80">
                {publicKey
                  ? 'Cost to create - 0.05 SOL'
                  : ' Connect your wallet to finish creating website.'}
              </span>
            </div>
          </div>
          <div className="w-72 sticky top-4 flex-col gap-4 hidden xl:flex">
            <a className="text-current text-sm" onClick={() => setStep(0)}>
              <Icon name="back" className="mt-[-3px]" />
              &nbsp; Previous step
            </a>
            <Mbutton
              type="primary"
              onClick={() => {
                if (publicKey) {
                  // sendSolana()
                  // 完成把所有数据保存数据库
                } else {
                  setVisible(true)
                }
              }}
            >
              {publicKey ? 'Launch' : 'Connect wallet'}
            </Mbutton>
            <span className="text-center text-sm font-bold opacity-80">
              {publicKey
                ? 'Cost to create - 0.05 SOL'
                : ' Connect your wallet to finish creating website.'}
            </span>
          </div>
        </Fragment>
      )}
    </div>
  )
}
