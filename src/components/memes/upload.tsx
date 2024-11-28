import { message, Upload as AntdUpload, Image, Button } from 'antd'

import { CloseOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { domain } from '@/api'

export default function Upload({
  image,
  onChange,
}: {
  image?: string
  onChange?: (image: string) => void
}) {
  const [messageApi, contextHolder] = message.useMessage()
  const [url, setUrl] = useState<string>()
  const [loading, setLoading] = useState(false)
  // const handleLocalRead = (file: File) => {
  //   const reader = new FileReader()
  //   reader.onload = event => {
  //     const base64Url = event.target?.result as string
  //     setUrl(base64Url) // 将 Base64 图片 URL 保存到状态中
  //     onChange && onChange(base64Url)
  //     setLoading(false) // 读取完成，停止加载状态
  //   }
  //   reader.readAsDataURL(file) // 将文件读取为 Base64 格式
  // }

  const beforeUpload = async (file: File) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      messageApi.error('You can only upload JPG/PNG file!')
      return false // 阻止上传
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      messageApi.error('Image must smaller than 2MB!')
      return false // 阻止上传
    }
    const fd = new FormData()
    fd.append('photo', file)
    setLoading(true)
    try {
      const result: any = await domain.uploadImageAPI(fd)
      if (!result.success) return Promise.reject('upload fail')
      setUrl(result.data) // 将 Base64 图片 URL 保存到状态中
      onChange && onChange(result.data)
    } catch (error) {
      console.log(error, 'upload error_')
    }

    setLoading(false)
    // handleLocalRead(file) // 本地读取文件
  }

  const uploadButton = (
    <div style={{ textAlign: 'center' }}>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )
  return (
    <>
      {contextHolder}
      <div className="relative w-fit">
        <AntdUpload
          name="avatar"
          listType="picture-card"
          className={`avatar-uploader overflow-hidden`}
          showUploadList={false}
          beforeUpload={beforeUpload}
        >
          {url ? (
            <div className="text-center ">
              <Image
                src={image || url}
                width="100%"
                height="100%"
                preview={false}
                className="!object-cover"
              />
            </div>
          ) : (
            uploadButton
          )}
        </AntdUpload>
        {url && (
          <div className="absolute top-2 right-[7px] opacity-80">
            <Button
              type="primary"
              shape="circle"
              danger
              icon={<CloseOutlined />}
              className="!min-w-6 !w-6 !h-6"
              onClick={() => {
                setUrl('')
                onChange && onChange('')
              }}
            />
          </div>
        )}
      </div>
    </>
  )
}
