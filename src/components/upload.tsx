import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { message } from 'antd'

interface UploadProps {
  children?: React.ReactNode
  onSuccess?: (urls: string[]) => void
  onError?: (error: string) => void
  maxSizes?: {
    image?: number
    gif?: number
    video?: number
    audio?: number
  }
  maxVideoDuration?: number
  multiple?: boolean
  maxCount?: number
  disabled?: boolean
  setFiles?: (files: File[]) => void
  files?: File[]
}

export const Upload = ({
  children,
  onSuccess,
  setFiles,
  files,
  onError,
  maxSizes = {
    image: 5,
    gif: 10,
    video: 50,
    audio: 50,
  },
  maxVideoDuration = 30,
  multiple = false,
  maxCount = 10,
  disabled = false,
}: UploadProps) => {
  const { t } = useTranslation()
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()

  const validateFile = async (
    file: File
  ): Promise<{ valid: boolean; error?: string }> => {
    const fileType = file.type
    const fileSizeInMB = file.size / (1024 * 1024)

    // 验证文件类型和大小
    if (
      ((fileType === 'image/jpeg' || fileType === 'image/png') &&
        fileSizeInMB <= maxSizes.image!) ||
      (fileType === 'image/gif' && fileSizeInMB <= maxSizes.gif!) ||
      (fileType === 'video/mp4' && fileSizeInMB <= maxSizes.video!) ||
      (fileType === 'audio/mpeg' && fileSizeInMB <= maxSizes.audio!)
    ) {
      // 对于视频文件，检查时长
      if (fileType === 'video/mp4') {
        const videoDuration = await getVideoDuration(file)
        if (videoDuration > maxVideoDuration) {
          messageApi.error(t('memes.limitText.video'))
          return {
            valid: false,
            error: t('memes.limitText.video'),
          }
        }
      }
      return { valid: true }
    } else {
      const errorMessages = {
        'image/jpeg': t('memes.limitText.image'),
        'image/png': t('memes.limitText.image'),
        'image/gif': t('memes.limitText.gif'),
        'video/mp4': t('memes.limitText.video'),
      }
      messageApi.error(errorMessages[fileType as keyof typeof errorMessages])
      return {
        valid: false,
        error:
          errorMessages[fileType as keyof typeof errorMessages] ||
          '文件类型或大小不符合要求。',
      }
    }
  }

  const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = () => reject('文件读取失败。')
      reader.readAsDataURL(file)
    })
  }

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFiles = Array.from(event.target.files || [])

    if (selectedFiles.length === 0) return

    if (selectedFiles.length > maxCount) {
      onError?.(t('memes.limitText.batchUpload', { maxCount }))
      return
    }
    try {
      const validationResults = await Promise.all(
        selectedFiles.map(file => validateFile(file))
      )

      // 检查是否所有文件都有效
      const invalidFile = validationResults.find(result => !result.valid)

      if (invalidFile) {
        onError?.(invalidFile.error!)
        return
      }
      // 读取所有文件内容
      const urls = await Promise.all(
        selectedFiles.map(file => readFileAsDataURL(file))
      )
      console.log(selectedFiles, 'selectedFiles')

      setFiles?.(selectedFiles)
      onSuccess?.(urls)
    } catch (error) {
      onError?.(error instanceof Error ? error.message : '文件处理失败')
    }

    // 清空 input 的值，允许重复选择相同文件
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const getVideoDuration = (file: File): Promise<number> => {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video')
      video.preload = 'metadata'
      video.onloadedmetadata = () => {
        resolve(video.duration)
        URL.revokeObjectURL(video.src) // 清理创建的 URL
      }
      video.onerror = () => {
        URL.revokeObjectURL(video.src) // 清理创建的 URL
        reject('视频加载失败。')
      }
      video.src = URL.createObjectURL(file)
    })
  }

  const handleChildrenClick = () => {
    fileInputRef.current?.click()
  }

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!disabled && !isDragging) {
      setIsDragging(true)
    }
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    // 检查是否真的离开了容器
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX
    const y = e.clientY

    if (
      x <= rect.left ||
      x >= rect.right ||
      y <= rect.top ||
      y >= rect.bottom
    ) {
      setIsDragging(false)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    if (disabled) return

    const droppedFiles = Array.from(e.dataTransfer.files)

    if (droppedFiles.length === 0) return

    if (droppedFiles.length > maxCount) {
      messageApi.error(t('memes.limitText.batchUpload', { maxCount }))
      onError?.(t('memes.limitText.batchUpload', { maxCount }))
      return
    }

    try {
      const validationResults = await Promise.all(
        droppedFiles.map(file => validateFile(file))
      )

      const invalidFile = validationResults.find(result => !result.valid)
      if (invalidFile) {
        onError?.(invalidFile.error!)
        return
      }

      const urls = await Promise.all(
        droppedFiles.map(file => readFileAsDataURL(file))
      )

      onSuccess?.(urls)
    } catch (error) {
      onError?.(error instanceof Error ? error.message : '文件处理失败')
    }
  }

  return (
    <>
      {contextHolder}
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          position: 'relative',
          cursor: disabled ? '' : 'pointer',
        }}
      >
        <input
          type="file"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          ref={fileInputRef}
          multiple={multiple}
          accept="image/jpeg,image/png,image/gif,video/mp4,audio/mpeg"
          disabled={disabled}
        />
        <div
          onClick={disabled ? undefined : handleChildrenClick}
          style={{
            position: 'relative',
            opacity: isDragging ? 0.6 : 1,
            transition: 'all 0.3s ease',
          }}
          className="relative"
        >
          {children}
        </div>
        {isDragging && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              border: '2px dashed #FFAC03',
              borderRadius: '4px',
              backgroundColor: 'rgba(43, 33, 17, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            {children}
          </div>
        )}
      </div>
    </>
  )
}
