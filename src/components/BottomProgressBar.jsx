import React from 'react'

function BottomProgressBar() {
  return (
    <div className="absolute inset-x-0 bottom-6">
          <div className="w-full bg-gray-300 h-4">
            {/* Checkpoint circles */}
            <div className="flex justify-between mx-4">
              <div className="h-4 w-4 bg-blue-500 rounded-full" />
              <div className="h-4 w-4 bg-blue-500 rounded-full" />
              <div className="h-4 w-4 bg-blue-500 rounded-full" />
              <div className="h-4 w-4 bg-blue-500 rounded-full" />
              <div className="h-4 w-4 bg-blue-500 rounded-full" />
            </div>
          </div>
        </div>
  )
}

export default BottomProgressBar