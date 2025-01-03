import ReactPlayer from 'react-player'

export const Mp4 = ({ id, src }: { id: string; src: string }) => {
  return (
    <div className="flex items-center justify-center w-full h-full aspect-square">
      <ReactPlayer
        url={src}
        width="100%"
        height="100%"
        playing={false}
        controls={true}
        light={false}
        pip={false}
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload',
              disablePictureInPicture: true,
            },
          },
        }}
      />
    </div>
  )
}
