import { useState } from "react"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom" // Import useLocation
import { fadeIn } from "./utils/motion"
import MusicPlayer from "./MusicPlayer"

function App() {
  const [buttonStyle, setButtonStyle] = useState({})
  const [showCallButton, setShowCallButton] = useState(false)

  // Use useLocation to access query parameters
  const location = useLocation()

  // Function to parse query parameters
  const queryParams = new URLSearchParams(location.search)
  const telNumber = queryParams.get("tel") // 'tel' is the query parameter name

  const handleResponse = (response) => {
    if (response === "No") {
      const newPosition = {
        position: "absolute",
        top: `${Math.random() * (window.innerHeight - 50)}px`,
        left: `${Math.random() * (window.innerWidth - 100)}px`,
      }
      setButtonStyle(newPosition)
      setShowCallButton(false)
    } else {
      alert(
        `Here's my number: ${
          telNumber || "your number here"
        }. Call me maybe? 📞🥰`
      )
      setShowCallButton(true)
    }
  }

  return (
      <div className="bg-[url('./assets/valentine-bg.jpeg')] bg-cover bg-center lg:bg-bottom min-h-screen w-screen flex flex-col items-center justify-center">
        <MusicPlayer />
        <motion.div variants={fadeIn()}>
          <h1 className="text-3xl font-GhibliBold text-rose-700 mb-8 flex justify-center font-extrabold">
            Can you be my Valentine?
          </h1>
          <div className="flex flex-col gap-8">
            <button
              className="text-lg bg-pink-500 text-white font-bold py-2 px-4 rounded-full mx-2 hover:bg-pink-700 transition duration-300"
              onClick={() => handleResponse("Yes")}
            >
              Yes, of course! 😍
            </button>
            <button
              style={buttonStyle}
              className="text-lg bg-gray-500 text-white font-bold py-2 px-4 rounded-full mx-2 hover:bg-gray-700 transition duration-300"
              onClick={() => handleResponse("No")}
            >
              No, I&apos;ll pass 😅
            </button>
            {showCallButton && telNumber && (
              <a
                href={`tel:${telNumber}`}
                className="text-lg bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 mx-2 text-center"
              >
                Call Me 📞
              </a>
            )}
          </div>
        </motion.div>
      </div>
  )
}

export default App
