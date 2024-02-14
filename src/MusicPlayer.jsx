import { useState, useEffect, useRef } from "react"
import loveSong from "./assets/love.mp3"
import sound from "./assets/sound.png"
import mute from "./assets/mute.png"

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(new Audio(loveSong))

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }

    return () => {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }, [isPlaying])

  return (
    <div className="absolute top-4 right-4 flex gap-4 justify-center items-center">
      <p className="font-Ghibli font-bold">{!isPlaying && "Tap to play music."}</p>
      <img
        className="w-12 h-12"
        onClick={() => setIsPlaying(!isPlaying)}
        src={isPlaying ? sound : mute}
      ></img>
    </div>
  )
}

export default MusicPlayer
