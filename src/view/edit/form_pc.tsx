import { ColorPicker, Input, Button as AntdButton, Collapse } from 'antd'
import { CloseOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import Button from '@/components/domain/button'
import Mbutton from '@/components/memes/button'
import Upload from '@/components/memes/upload'
export default function FormPc({
  ...props
}: {
  backgroundColor?: string
  setBackgroundColor?: (e: string) => void
  setBackgroundPattern?: (e: string) => void
  backgroundImage?: string
  setBackgroundImageUrl?: (e: string) => void
  textColor?: string
  setTextColor?: (e: string) => void
  fontFamily?: any[]
  setTextFont?: (e: string) => void
  buttonBackground?: string
  setButtonBackground?: (e: string) => void
  buttonText?: string
  setButtonText?: (e: string) => void
  setButtonRounded?: (e: string) => void
  about?: any
  setAbout?: (e: any) => void
  buy?: any
  setBuy?: (e: any) => void
  roadmap?: any
  setRoadmap?: (e: any) => void
  save: () => void
}) {
  return (
    <div className="w-72 sticky top-4 flex-col gap-4 hidden xl:flex">
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
                    defaultValue={props.backgroundColor}
                    allowClear
                    size="small"
                    onChange={value =>
                      props.setBackgroundColor &&
                      props.setBackgroundColor('#' + value.toHex())
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm">Pattern</span>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-lg"
                      onClick={() =>
                        props.setBackgroundPattern &&
                        props.setBackgroundPattern('')
                      }
                    >
                      <CloseOutlined />
                    </a>
                    <a
                      className="w-10 h-10 pattern-1 rounded-lg"
                      onClick={() =>
                        props.setBackgroundPattern &&
                        props.setBackgroundPattern('pattern-1')
                      }
                    />
                    <a
                      className="w-10 h-10 pattern-2 rounded-lg"
                      onClick={() =>
                        props.setBackgroundPattern &&
                        props.setBackgroundPattern('pattern-2')
                      }
                    />
                    <a
                      className="w-10 h-10 pattern-3 rounded-lg"
                      onClick={() =>
                        props.setBackgroundPattern &&
                        props.setBackgroundPattern('pattern-3')
                      }
                    />
                    <a
                      className="w-10 h-10 pattern-4 rounded-lg"
                      onClick={() =>
                        props.setBackgroundPattern &&
                        props.setBackgroundPattern('pattern-4')
                      }
                    />
                    <a
                      className="w-10 h-10 pattern-5 rounded-lg"
                      onClick={() =>
                        props.setBackgroundPattern &&
                        props.setBackgroundPattern('pattern-5')
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm">Custom</span>
                  <Upload
                    onChange={props.setBackgroundImageUrl}
                    image={props.backgroundImage}
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
                    defaultValue={props.textColor}
                    allowClear
                    size="small"
                    onChange={value =>
                      props.setTextColor &&
                      props.setTextColor('#' + value.toHex())
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm">Font</span>
                  <div className="flex gap-1 flex-wrap">
                    {props.fontFamily &&
                      props.fontFamily.map((item, index) => (
                        <Button
                          className="font-poppinsSemiBold text-sm"
                          key={index}
                          onClick={() =>
                            props.setTextFont && props.setTextFont(item.key)
                          }
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
                    defaultValue={props.buttonBackground}
                    allowClear
                    size="small"
                    onChange={value =>
                      props.setButtonBackground &&
                      props.setButtonBackground('#' + value.toHex())
                    }
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm">Text</span>
                  <ColorPicker
                    defaultValue={props.buttonText}
                    allowClear
                    size="small"
                    onChange={value =>
                      props.setButtonText &&
                      props.setButtonText('#' + value.toHex())
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm">Rounded</span>
                  <div className="grid grid-cols-2 gap-1">
                    <Button
                      style={{
                        background: props.buttonBackground,
                        color: props.buttonText,
                      }}
                      className="!rounded-none"
                      onClick={() =>
                        props.setButtonRounded &&
                        props.setButtonRounded('!rounded-none')
                      }
                    >
                      buy
                    </Button>
                    <Button
                      style={{
                        background: props.buttonBackground,
                        color: props.buttonText,
                      }}
                      className="!rounded-md"
                      onClick={() =>
                        props.setButtonRounded &&
                        props.setButtonRounded('!rounded-md')
                      }
                    >
                      buy
                    </Button>
                    <Button
                      style={{
                        background: props.buttonBackground,
                        color: props.buttonText,
                      }}
                      className="!rounded-lg"
                      onClick={() =>
                        props.setButtonRounded &&
                        props.setButtonRounded('!rounded-lg')
                      }
                    >
                      buy
                    </Button>
                    <Button
                      style={{
                        background: props.buttonBackground,
                        color: props.buttonText,
                      }}
                      className="!rounded-full"
                      onClick={() =>
                        props.setButtonRounded &&
                        props.setButtonRounded('!rounded-full')
                      }
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
                    image={props?.about?.image}
                    onChange={image =>
                      props.setAbout &&
                      props.setAbout((item: any) =>
                        Object.assign({}, item, { image })
                      )
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm">Title</span>
                  <Input
                    defaultValue={props?.about?.title}
                    onChange={e =>
                      props.setAbout &&
                      props.setAbout((item: any) =>
                        Object.assign({}, item, { title: e.target.value })
                      )
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm">Text</span>
                  <Input
                    defaultValue={props?.about?.text}
                    onChange={e =>
                      props?.setAbout &&
                      props?.setAbout((item: any) =>
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
                      image={props?.buy?.advertiseImage1}
                      onChange={image =>
                        props?.setBuy &&
                        props?.setBuy((item: any) =>
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
                      image={props?.buy?.advertiseImage2}
                      onChange={image =>
                        props?.setBuy &&
                        props?.setBuy((item: any) =>
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
                    defaultValue={props?.buy?.buyLink1}
                    onChange={e =>
                      props?.setBuy &&
                      props?.setBuy((item: any) =>
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
                    defaultValue={props?.buy?.buyLink2}
                    onChange={e =>
                      props?.setBuy &&
                      props?.setBuy((item: any) =>
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
                {props?.roadmap?.map((_: any, index: number) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex gap-3 items-center justify-between">
                      <span className="text-sm">Roadmap {index + 1}</span>
                      <div className="flex gap-2 items-center">
                        {index + 1 >= props?.roadmap.length && (
                          <AntdButton
                            onClick={() =>
                              props?.setRoadmap &&
                              props?.setRoadmap([
                                ...props.roadmap,
                                { title: '', text: '' },
                              ])
                            }
                            icon={<PlusOutlined />}
                            type="primary"
                          />
                        )}
                        {props?.roadmap?.length > 1 && (
                          <AntdButton
                            onClick={() =>
                              props?.setRoadmap &&
                              props?.setRoadmap(
                                props?.roadmap.filter(
                                  (_: any, idx: number) => idx !== index
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
                        defaultValue={props?.roadmap?.[index]?.['title']}
                        onChange={e => {
                          const array = [...props?.roadmap]
                          array[index]['title'] = e.target.value
                          props.setRoadmap && props.setRoadmap(array)
                        }}
                      />
                    </div>
                    <div className="flex gap-3 items-center">
                      Text&nbsp;
                      <Input.TextArea
                        defaultValue={props.roadmap[index]['text']}
                        onChange={e => {
                          const array = [...props.roadmap]
                          array[index]['text'] = e.target.value
                          props.setRoadmap && props.setRoadmap(array)
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
      <Mbutton type="primary" onClick={props.save}>
        save
      </Mbutton>
    </div>
  )
}
