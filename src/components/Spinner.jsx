import React from 'react'

export default function Spinner() {
  return (
    <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
        <span className="sr-only">Loading...</span>
        <div className="h-8 w-8 rounded-full bg-blue-300 animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 rounded-full bg-blue-300 animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 rounded-full bg-blue-300 animate-bounce"></div>
    </div>
  )
}
