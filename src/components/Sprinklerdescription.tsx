import React from 'react'
import { serviceContent } from '../lib/data'

const LongDescription = () => {
  const sprinklerService = serviceContent.find(service => service.id === 'sprinkler-system-repair')

  if (!sprinklerService || !sprinklerService.longDescription) {
    return null
  }

  return (
    <div className="w-full my-20 py-12 bg-pink-theme relative text-gray-900">
      {/* Diagonal Grid with Electric Orange */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 20px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="container">
        <div className="relative z-20 bg-white max-w-7xl h-[450px] mx-auto overflow-hidden overflow-y-auto py-12 rounded-xl px-8">
          {sprinklerService.longDescription.map((content, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <h3 className="text-base md:text-2xl text-text-black my-3 font-semibold">
                {content.title}
              </h3>
              <p className="text-xs md:text-base text-gray-700 leading-relaxed">
                {content.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LongDescription