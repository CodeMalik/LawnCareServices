import React, { useState, useEffect } from 'react'
import { db } from '../lib/firebase'
import { doc, getDoc } from 'firebase/firestore'

interface LongDescriptionContent {
  title: string
  description: string
}

interface ServiceContent {
  longDescription: LongDescriptionContent[]
}

const LongDescription = () => {
  const [sprinklerService, setSprinklerService] = useState<ServiceContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchServiceContent = async () => {
      try {
        setLoading(true)
        const docRef = doc(db, 'mainservicescontent', 'sprinkler-system-repair')
        const docSnap = await getDoc(docRef)
        
        if (docSnap.exists()) {
          const data = docSnap.data() as ServiceContent
          setSprinklerService(data)
        } else {
          setError('Document not found')
        }
      } catch (err) {
        setError('Failed to fetch service content')
        console.error('Error fetching document:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchServiceContent()
  }, [])

  if (loading) {
    return (
      <div className="w-full my-10 md:ml-48 py-12 bg-pink-theme relative text-gray-900">
        <div className="container">
          <div className="relative z-20 bg-white max-w-7xl h-[450px] mx-auto overflow-hidden overflow-y-auto py-12 rounded-xl px-8">
            <div className="animate-pulse space-y-6">
              {/* Multiple content blocks loader */}
              {[...Array(4)].map((_, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  {/* Title loader */}
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
                  {/* Description loader */}
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !sprinklerService || !sprinklerService.longDescription) {
    return null
  }

  return (
    <div className="w-full my-10 md:ml-48 py-12 bg-pink-theme relative text-gray-900">
      {/* Diagonal Grid with Electric Orange */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
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