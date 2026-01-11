'use client'
import { Link } from '@/src/i18n/navigation'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
  const { id } = useParams()
  const [data, setData] = useState<any>({})

  async function getById() {
    try {
      const res = await fetch(`https://69622847d9d64c761907166b.mockapi.io/product/${id}`)
      const data = await res.json()
      setData(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getById()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-10">
        <div className="flex flex-col gap-6">
          <span className="text-sm text-gray-400 uppercase tracking-wide">
            Product details
          </span>

          <h1 className="text-4xl font-bold text-gray-900">
            {data.productName}
          </h1>

          <div className="h-[2px] w-20 bg-yellow-500" />

          <p className="text-gray-600 text-lg leading-relaxed">
            {data.description || 'No description available'}
          </p>

          <div className="flex items-center justify-between mt-6">
            <div className="text-3xl font-semibold text-yellow-500">
              {data.price ? `$${data.price}` : ''}
            </div>

            <span className="px-4 py-1 rounded-full bg-gray-900 text-white text-sm">
              ID: {id}
            </span>
          </div>

          <Link href="/vakansii">
            <button className="mt-8 w-full h-14 rounded-full bg-yellow-500 text-black font-medium text-lg hover:bg-yellow-400 transition">
              Go back →
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page
