import { Player } from '@lottiefiles/react-lottie-player'

const DefaultLottieUI: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Player
        autoplay
        loop
        src="/loading.json" // public 폴더 내 JSON 파일 경로
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

export default DefaultLottieUI
