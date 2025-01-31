import { useState, useEffect } from "react"
import { CheckCircle, XCircle } from "lucide-react"

type AlertProps = {
  message: string
  type: "success" | "error"
  onClose: () => void
}

export function Alert({ message, type, onClose }: AlertProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  if (!isVisible) return null

  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded-md shadow-md flex items-center space-x-2 ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {type === "success" ? (
        <CheckCircle className="text-white" size={20} />
      ) : (
        <XCircle className="text-white" size={20} />
      )}
      <span className="text-white">{message}</span>
    </div>
  )
}

