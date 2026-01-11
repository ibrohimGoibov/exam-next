import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const {id} = useParams()
    const [data, setData] = React.useState<any>(null)
    async function getById(id: string) {
        try {
            const res = await fetch(`https://69622847d9d64c761907166b.mockapi.io/product/${id}`)
            const data = await res.json()
            setData(data)
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  )
}

export default page
