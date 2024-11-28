import Domain from '@/components/domain'
import {
  Card,
  Collapse,
  ColorPicker,
  Dropdown,
  Input,
  Button as AntdButton,
} from 'antd'
import { Fragment, useState } from 'react'
import {
  CloseOutlined,
  DeleteOutlined,
  DownOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import Button from '@/components/domain/button'
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
} from '@solana/web3.js'
import Upload from '@/components/memes/upload'

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
  const [pumpfun, setPumpfun] = useState<string>('')
  const [dexscreener, setDexscreener] = useState<string>('')
  const [backgroundColor, setBackgroundColor] = useState<string>('#fff')
  const [backgroundPattern, setBackgroundPattern] = useState<string>('')
  const [backgroundImage, setBackgroundImageUrl] = useState<string>()
  const [textColor, setTextColor] = useState<string>('#000')
  const [buttonBackground, setButtonBackground] = useState('#000')
  const [buttonText, setButtonText] = useState('#fff')
  const [buttonRounded, setButtonRounded] = useState('!rounded-none')
  const { setVisible } = useWalletModal()
  const { publicKey, sendTransaction } = useWallet()
  const [about, setAbout] = useState<{
    image?: string
    title?: string
    text?: string
  }>({})

  const [buy, setBuy] = useState<{
    advertiseImage1?: string
    advertiseImage2?: string
    buyLink1?: string
    buyLink2?: string
  }>({})

  const [roadmap, setRoadmap] = useState<{ title?: string; text?: string }[]>([
    { title: '', text: '' },
  ])

  const fontFamily = [
    { key: 'font-londrinaSolid', name: 'Londrina Solid' },
    { key: 'font-poppinsSemiBold', name: 'Poppins SemiBold' },
  ]
  const [textFont, setTextFont] = useState<string>(fontFamily?.[0].key)

  const data = {
    domain: state?.domain,
    image: avatarImageUrl,
    name,
    ticker,
    description,
    contractAddress,
    twitter,
    telegram,
    pumpfun,
    dexscreener,
    background: {
      color: backgroundColor,
      pattern: backgroundPattern,
      custom: backgroundImage,
    },
    text: {
      color: textColor,
      font: textFont,
    },
    button: {
      background: buttonBackground,
      text: buttonText,
      rounded: buttonRounded,
    },
    about,
    buy,
    roadmap,
  }

  // 交易前拿到全部参数:如果完成交易将数据转JSON数据上传到服务器或写入到合约等等...
  const sendSolana = async () => {
    console.log('获取全部参数', data)
    if (!publicKey) {
      console.error('Wallet not connected')
      return
    }

    try {
      // 使用自定义 RPC 提供商
      const connection = new Connection(
        'https://api.zan.top/node/v1/solana/mainnet/0fe3a89037da49a49acd410c53bbd1dd'
      )

      const recipientPubKey = new PublicKey(
        '9Mv7BPofspMKsSkxGFf9dnfQKM6RzbgCu4vFfYmRG8zh'
      )
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: recipientPubKey,
          lamports: 0.05 * LAMPORTS_PER_SOL,
        })
      )
      // 获取最近的 blockhash
      const latestBlockhash = await connection.getLatestBlockhash()
      transaction.recentBlockhash = latestBlockhash.blockhash
      transaction.feePayer = publicKey
      // 发送交易
      const signature = await sendTransaction(transaction, connection)
      console.log(`Transaction signature: ${signature}`)
      // 完成交易区域
      console.log('交易完成上传参数', JSON.stringify(data))
    } catch (error) {
      console.error('Transaction failed', error)
    }
  }
  publicKey && console.log('获取域名名称', state?.domain)
  publicKey && console.log('获取solana地址', publicKey?.toBase58())

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
              <div className="grid gap-2">
                <span className="text-sm font-bold">Pumpfun</span>
                <Input
                  size="middle"
                  defaultValue={pumpfun}
                  onChange={e => setPumpfun(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <span className="text-sm font-bold">Dexscreener</span>
                <Input
                  size="middle"
                  defaultValue={dexscreener}
                  onChange={e => setDexscreener(e.target.value)}
                />
              </div>
              <Mbutton
                disabled={!avatarImageUrl || !name || !ticker}
                type="primary"
                onClick={() => {
                  if (!avatarImageUrl || !name || !ticker) return
                  setStep(1)
                }}
              >
                Next step
              </Mbutton>
            </div>
          </Card>
        </div>
      ) : (
        <Fragment>
          <div className="max-w-4xl overflow-hidden relative pb-48 sm:pb-0">
            <Domain {...data} />
            <div className="fixed flex-col gap-4 bottom-0 left-0 flex xl:hidden bg-[--bg-color] p-4 pb-8 w-full justify-center items-center z-50">
              <div className="max-w-4xl flex items-center justify-between flex-wrap gap-4 gap-x-5">
                <a className="!text-current text-sm" onClick={() => setStep(0)}>
                  <Icon name="back" className="mt-[-3px]" />
                  &nbsp;Previous step
                </a>
                <Dropdown
                  placement="top"
                  trigger={['click']}
                  menu={{
                    onClick: (e: any) => {
                      e.preventDefault()
                    },
                    items: [
                      {
                        key: 'background-color',
                        label: (
                          <div className="flex gap-3 items-center">
                            <span className="text-sm">Color</span>
                            <ColorPicker
                              defaultValue={backgroundColor}
                              allowClear
                              size="small"
                              onChange={value =>
                                setBackgroundColor('#' + value.toHex())
                              }
                            />
                          </div>
                        ),
                      },
                      {
                        key: 'background-pattern',
                        label: (
                          <div className="flex flex-col gap-2">
                            <span className="text-sm">Pattern</span>
                            <div className="flex flex-wrap gap-2">
                              <a
                                className="w-9 h-9 flex items-center justify-center bg-white text-black rounded-lg"
                                onClick={() => setBackgroundPattern('')}
                              >
                                <CloseOutlined />
                              </a>
                              <a
                                className="w-9 h-9 pattern-1 rounded-lg"
                                onClick={() =>
                                  setBackgroundPattern('pattern-1')
                                }
                              />
                              <a
                                className="w-9 h-9 pattern-2 rounded-lg"
                                onClick={() =>
                                  setBackgroundPattern('pattern-2')
                                }
                              />
                              <a
                                className="w-9 h-9 pattern-3 rounded-lg"
                                onClick={() =>
                                  setBackgroundPattern('pattern-3')
                                }
                              />
                              <a
                                className="w-9 h-9 pattern-4 rounded-lg"
                                onClick={() =>
                                  setBackgroundPattern('pattern-4')
                                }
                              />
                              <a
                                className="w-9 h-9 pattern-5 rounded-lg"
                                onClick={() =>
                                  setBackgroundPattern('pattern-5')
                                }
                              />
                            </div>
                          </div>
                        ),
                      },
                      {
                        key: 'background-custom',
                        label: (
                          <div className="flex flex-col gap-2">
                            <span className="text-sm">Custom</span>
                            <Upload
                              onChange={setBackgroundImageUrl}
                              image={backgroundImage}
                            />
                          </div>
                        ),
                      },
                    ],
                  }}
                >
                  <a
                    className="text-current text-sm flex items-center gap-2"
                    onClick={e => e.preventDefault()}
                  >
                    Background
                    <DownOutlined />
                  </a>
                </Dropdown>
                <Dropdown
                  placement="top"
                  trigger={['click']}
                  menu={{
                    onClick: (e: any) => {
                      e.preventDefault()
                    },
                    items: [
                      {
                        key: 'text-color',
                        label: (
                          <div className="flex gap-3 items-center">
                            <span className="text-sm">Color</span>
                            <ColorPicker
                              defaultValue={textColor}
                              allowClear
                              size="small"
                              onChange={value =>
                                setTextColor('#' + value.toHex())
                              }
                            />
                          </div>
                        ),
                      },
                      {
                        key: 'text-font',
                        label: (
                          <div className="flex flex-col gap-2">
                            <span className="text-sm">Font</span>
                            <div className="flex gap-1 flex-wrap">
                              {fontFamily.map((item, index) => (
                                <Button
                                  className="font-poppinsSemiBold text-sm"
                                  key={index}
                                  onClick={() => setTextFont(item.key)}
                                >
                                  {item.name}
                                </Button>
                              ))}
                            </div>
                          </div>
                        ),
                      },
                    ],
                  }}
                >
                  <a
                    className="text-current text-sm flex items-center gap-2"
                    onClick={e => e.preventDefault()}
                  >
                    Text
                    <DownOutlined />
                  </a>
                </Dropdown>
                <Dropdown
                  placement="top"
                  trigger={['click']}
                  menu={{
                    onClick: (e: any) => {
                      e.preventDefault()
                    },
                    items: [
                      {
                        key: 'button-background',
                        label: (
                          <div className="flex gap-3 items-center">
                            <span className="text-sm">Background</span>
                            <ColorPicker
                              defaultValue={buttonBackground}
                              allowClear
                              size="small"
                              onChange={value =>
                                setButtonBackground('#' + value.toHex())
                              }
                            />
                          </div>
                        ),
                      },
                      {
                        key: 'button-text',
                        label: (
                          <div className="flex gap-3 items-center">
                            <span className="text-sm">Text</span>
                            <ColorPicker
                              defaultValue={buttonText}
                              allowClear
                              size="small"
                              onChange={value =>
                                setButtonText('#' + value.toHex())
                              }
                            />
                          </div>
                        ),
                      },
                      {
                        key: 'button-rounded',
                        label: (
                          <div className="flex flex-col gap-2">
                            <span className="text-sm">Rounded</span>
                            <div className="grid grid-cols-2 gap-1">
                              <Button
                                style={{
                                  background: buttonBackground,
                                  color: buttonText,
                                }}
                                className="!rounded-none"
                                onClick={() =>
                                  setButtonRounded('!rounded-none')
                                }
                              >
                                buy
                              </Button>
                              <Button
                                style={{
                                  background: buttonBackground,
                                  color: buttonText,
                                }}
                                className="!rounded-md"
                                onClick={() => setButtonRounded('!rounded-md')}
                              >
                                buy
                              </Button>
                              <Button
                                style={{
                                  background: buttonBackground,
                                  color: buttonText,
                                }}
                                className="!rounded-lg"
                                onClick={() => setButtonRounded('!rounded-lg')}
                              >
                                buy
                              </Button>
                              <Button
                                style={{
                                  background: buttonBackground,
                                  color: buttonText,
                                }}
                                className="!rounded-full"
                                onClick={() =>
                                  setButtonRounded('!rounded-full')
                                }
                              >
                                buy
                              </Button>
                            </div>
                          </div>
                        ),
                      },
                    ],
                  }}
                >
                  <a
                    className="text-current text-sm"
                    onClick={e => e.preventDefault()}
                  >
                    Button&nbsp;
                    <DownOutlined />
                  </a>
                </Dropdown>
                <Dropdown
                  placement="top"
                  trigger={['click']}
                  menu={{
                    onClick: (e: any) => {
                      e.preventDefault()
                    },
                    items: [
                      {
                        key: 'about-image',
                        label: (
                          <div className="flex flex-col gap-2">
                            <span className="text-sm">Image</span>
                            <Upload
                              image={about.image}
                              onChange={image =>
                                setAbout(item =>
                                  Object.assign({}, item, { image })
                                )
                              }
                            />
                          </div>
                        ),
                      },
                      {
                        key: 'about-title',
                        label: (
                          <div className="flex flex-col gap-2">
                            <span className="text-sm">Title</span>
                            <Input
                              defaultValue={about.title}
                              onChange={e =>
                                setAbout(item =>
                                  Object.assign({}, item, {
                                    title: e.target.value,
                                  })
                                )
                              }
                            />
                          </div>
                        ),
                      },
                      {
                        key: 'about-text',
                        label: (
                          <div className="flex flex-col gap-2">
                            <span className="text-sm">Text</span>
                            <Input
                              defaultValue={about.text}
                              onChange={e =>
                                setAbout(item =>
                                  Object.assign({}, item, {
                                    text: e.target.value,
                                  })
                                )
                              }
                            />
                          </div>
                        ),
                      },
                    ],
                  }}
                >
                  <a
                    className="text-current text-sm"
                    onClick={e => e.preventDefault()}
                  >
                    About Text&nbsp;
                    <DownOutlined />
                  </a>
                </Dropdown>
                <Dropdown
                  placement="top"
                  trigger={['click']}
                  menu={{
                    onClick: (e: any) => {
                      e.preventDefault()
                    },
                    items: [
                      {
                        key: 'buy-advertise',
                        label: (
                          <div className="flex flex-wrap items-center gap-4">
                            <div className="flex flex-col gap-2">
                              <span className="text-sm">Advertise1</span>
                              <Upload
                                image={buy.advertiseImage1}
                                onChange={image =>
                                  setBuy(item =>
                                    Object.assign({}, item, {
                                      advertiseImage1: image,
                                    })
                                  )
                                }
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <span className="text-sm">Advertise2</span>
                              <Upload
                                image={buy.advertiseImage2}
                                onChange={image =>
                                  setBuy(item =>
                                    Object.assign({}, item, {
                                      advertiseImage2: image,
                                    })
                                  )
                                }
                              />
                            </div>
                          </div>
                        ),
                      },
                      {
                        key: 'buy-link1',
                        label: (
                          <div className="flex flex-col gap-2">
                            <span className="text-sm">Buy Link1</span>
                            <Input
                              defaultValue={buy.buyLink1}
                              onChange={e =>
                                setBuy(item =>
                                  Object.assign({}, item, {
                                    buyLink1: e.target.value,
                                  })
                                )
                              }
                            />
                          </div>
                        ),
                      },
                      {
                        key: 'buy-link2',
                        label: (
                          <div className="flex flex-col gap-2">
                            <span className="text-sm">Buy Link2</span>
                            <Input
                              defaultValue={buy.buyLink2}
                              onChange={e =>
                                setBuy(item =>
                                  Object.assign({}, item, {
                                    buyLink2: e.target.value,
                                  })
                                )
                              }
                            />
                          </div>
                        ),
                      },
                    ],
                  }}
                >
                  <a
                    className="text-current text-sm"
                    onClick={e => e.preventDefault()}
                  >
                    Buy Text&nbsp;
                    <DownOutlined />
                  </a>
                </Dropdown>
                <Dropdown
                  placement="top"
                  trigger={['click']}
                  menu={{
                    items: [
                      {
                        key: 'roadmap-text',
                        onClick: (e: any) => {
                          e.preventDefault()
                        },
                        label: (
                          <div className="grid gap-4">
                            {roadmap.map((_, index) => (
                              <div key={index} className="flex flex-col gap-2">
                                <div className="flex gap-3 items-center justify-between">
                                  <span className="text-sm">
                                    Roadmap {index + 1}
                                  </span>
                                  <div className="flex gap-2 items-center">
                                    {index + 1 >= roadmap.length ? (
                                      <AntdButton
                                        onClick={() =>
                                          setRoadmap([
                                            ...roadmap,
                                            { title: '', text: '' },
                                          ])
                                        }
                                        icon={<PlusOutlined />}
                                        type="primary"
                                      />
                                    ) : (
                                      <AntdButton
                                        onClick={() =>
                                          setRoadmap(
                                            roadmap.filter(
                                              (_, idx) => idx !== index
                                            )
                                          )
                                        }
                                        icon={<DeleteOutlined />}
                                        type="primary"
                                        danger
                                      />
                                    )}
                                  </div>
                                </div>
                                <div className="flex gap-3 items-center">
                                  Title&nbsp;
                                  <Input
                                    defaultValue={roadmap[index]['title']}
                                    onChange={e => {
                                      const array = [...roadmap]
                                      array[index]['title'] = e.target.value
                                      setRoadmap(array)
                                    }}
                                  />
                                </div>
                                <div className="flex gap-3 items-center">
                                  Text&nbsp;
                                  <Input.TextArea
                                    defaultValue={roadmap[index]['text']}
                                    onChange={e => {
                                      const array = [...roadmap]
                                      array[index]['text'] = e.target.value
                                      setRoadmap(array)
                                    }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        ),
                      },
                    ],
                  }}
                >
                  <a
                    className="text-current text-sm"
                    onClick={e => e.preventDefault()}
                  >
                    Roadmap Text&nbsp;
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <Mbutton
                className="!min-w-48"
                type="primary"
                onClick={() => {
                  if (publicKey) {
                    sendSolana()
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
            <Collapse
              className="max-h-[calc(100vh-260px)] overflow-hidden overflow-y-auto"
              defaultActiveKey={['background']}
              accordion
              items={[
                {
                  key: 'background',
                  label: 'Background',
                  children: (
                    <div className="grid gap-4">
                      <div className="flex gap-3 items-center">
                        <span className="text-sm">Color</span>
                        <ColorPicker
                          defaultValue={backgroundColor}
                          allowClear
                          size="small"
                          onChange={value =>
                            setBackgroundColor('#' + value.toHex())
                          }
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-sm">Pattern</span>
                        <div className="flex flex-wrap gap-2">
                          <a
                            className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-lg"
                            onClick={() => setBackgroundPattern('')}
                          >
                            <CloseOutlined />
                          </a>
                          <a
                            className="w-10 h-10 pattern-1 rounded-lg"
                            onClick={() => setBackgroundPattern('pattern-1')}
                          />
                          <a
                            className="w-10 h-10 pattern-2 rounded-lg"
                            onClick={() => setBackgroundPattern('pattern-2')}
                          />
                          <a
                            className="w-10 h-10 pattern-3 rounded-lg"
                            onClick={() => setBackgroundPattern('pattern-3')}
                          />
                          <a
                            className="w-10 h-10 pattern-4 rounded-lg"
                            onClick={() => setBackgroundPattern('pattern-4')}
                          />
                          <a
                            className="w-10 h-10 pattern-5 rounded-lg"
                            onClick={() => setBackgroundPattern('pattern-5')}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-sm">Custom</span>
                        <Upload
                          onChange={setBackgroundImageUrl}
                          image={backgroundImage}
                        />
                      </div>
                    </div>
                  ),
                },
                {
                  key: 'text',
                  label: 'Text',
                  children: (
                    <div className="grid gap-4">
                      <div className="flex gap-3 items-center">
                        <span className="text-sm">Color</span>
                        <ColorPicker
                          defaultValue={textColor}
                          allowClear
                          size="small"
                          onChange={value => setTextColor('#' + value.toHex())}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-sm">Font</span>
                        <div className="flex gap-1 flex-wrap">
                          {fontFamily.map((item, index) => (
                            <Button
                              className="font-poppinsSemiBold text-sm"
                              key={index}
                              onClick={() => setTextFont(item.key)}
                            >
                              {item.name}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  key: 'button',
                  label: 'Button',
                  children: (
                    <div className="grid gap-4">
                      <div className="flex gap-3 items-center">
                        <span className="text-sm">Background</span>
                        <ColorPicker
                          defaultValue={buttonBackground}
                          allowClear
                          size="small"
                          onChange={value =>
                            setButtonBackground('#' + value.toHex())
                          }
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm">Text</span>
                        <ColorPicker
                          defaultValue={buttonText}
                          allowClear
                          size="small"
                          onChange={value => setButtonText('#' + value.toHex())}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-sm">Rounded</span>
                        <div className="grid grid-cols-2 gap-1">
                          <Button
                            style={{
                              background: buttonBackground,
                              color: buttonText,
                            }}
                            className="!rounded-none"
                            onClick={() => setButtonRounded('!rounded-none')}
                          >
                            buy
                          </Button>
                          <Button
                            style={{
                              background: buttonBackground,
                              color: buttonText,
                            }}
                            className="!rounded-md"
                            onClick={() => setButtonRounded('!rounded-md')}
                          >
                            buy
                          </Button>
                          <Button
                            style={{
                              background: buttonBackground,
                              color: buttonText,
                            }}
                            className="!rounded-lg"
                            onClick={() => setButtonRounded('!rounded-lg')}
                          >
                            buy
                          </Button>
                          <Button
                            style={{
                              background: buttonBackground,
                              color: buttonText,
                            }}
                            className="!rounded-full"
                            onClick={() => setButtonRounded('!rounded-full')}
                          >
                            buy
                          </Button>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  key: 'about',
                  label: 'About Text',
                  children: (
                    <div className="grid gap-4">
                      <div className="flex flex-col gap-2">
                        <span className="text-sm">Image</span>
                        <Upload
                          image={about.image}
                          onChange={image =>
                            setAbout(item => Object.assign({}, item, { image }))
                          }
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-sm">Title</span>
                        <Input
                          defaultValue={about.title}
                          onChange={e =>
                            setAbout(item =>
                              Object.assign({}, item, { title: e.target.value })
                            )
                          }
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-sm">Text</span>
                        <Input
                          defaultValue={about.text}
                          onChange={e =>
                            setAbout(item =>
                              Object.assign({}, item, { text: e.target.value })
                            )
                          }
                        />
                      </div>
                    </div>
                  ),
                },
                {
                  key: 'buy',
                  label: 'Buy Text',
                  children: (
                    <div className="grid gap-4">
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex flex-col gap-2">
                          <span className="text-sm">Advertise1</span>
                          <Upload
                            image={buy.advertiseImage1}
                            onChange={image =>
                              setBuy(item =>
                                Object.assign({}, item, {
                                  advertiseImage1: image,
                                })
                              )
                            }
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="text-sm">Advertise2</span>
                          <Upload
                            image={buy.advertiseImage2}
                            onChange={image =>
                              setBuy(item =>
                                Object.assign({}, item, {
                                  advertiseImage2: image,
                                })
                              )
                            }
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <span className="text-sm">Buy Link1</span>
                        <Input
                          defaultValue={buy.buyLink1}
                          onChange={e =>
                            setBuy(item =>
                              Object.assign({}, item, {
                                buyLink1: e.target.value,
                              })
                            )
                          }
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-sm">Buy Link2</span>
                        <Input
                          defaultValue={buy.buyLink2}
                          onChange={e =>
                            setBuy(item =>
                              Object.assign({}, item, {
                                buyLink2: e.target.value,
                              })
                            )
                          }
                        />
                      </div>
                    </div>
                  ),
                },
                {
                  key: 'roadmap',
                  label: 'Roadmap Text',
                  children: (
                    <div className="grid gap-4">
                      {roadmap.map((_, index) => (
                        <div key={index} className="flex flex-col gap-2">
                          <div className="flex gap-3 items-center justify-between">
                            <span className="text-sm">Roadmap {index + 1}</span>
                            <div className="flex gap-2 items-center">
                              {index + 1 >= roadmap.length && (
                                <AntdButton
                                  onClick={() =>
                                    setRoadmap([
                                      ...roadmap,
                                      { title: '', text: '' },
                                    ])
                                  }
                                  icon={<PlusOutlined />}
                                  type="primary"
                                />
                              )}
                              {roadmap.length > 1 && (
                                <AntdButton
                                  onClick={() =>
                                    setRoadmap(
                                      roadmap.filter((_, idx) => idx !== index)
                                    )
                                  }
                                  icon={<DeleteOutlined />}
                                  type="primary"
                                  danger
                                />
                              )}
                            </div>
                          </div>
                          <div className="flex gap-3 items-center">
                            Title&nbsp;
                            <Input
                              defaultValue={roadmap[index]['title']}
                              onChange={e => {
                                const array = [...roadmap]
                                array[index]['title'] = e.target.value
                                setRoadmap(array)
                              }}
                            />
                          </div>
                          <div className="flex gap-3 items-center">
                            Text&nbsp;
                            <Input.TextArea
                              defaultValue={roadmap[index]['text']}
                              onChange={e => {
                                const array = [...roadmap]
                                array[index]['text'] = e.target.value
                                setRoadmap(array)
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ),
                },
              ]}
            />
            <Mbutton
              type="primary"
              onClick={() => {
                if (publicKey) {
                  sendSolana()
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
