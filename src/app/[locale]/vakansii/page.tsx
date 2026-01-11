"use client"
import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import axios from "axios"
import { Link } from "@/src/i18n/navigation"
const Page = () => {
  const [data, setData] = useState<any[]>([])
  const [search, setSearch] = useState("")
  const [region, setRegion] = useState("")
  const [category, setCategory] = useState("")

  async function getProduct() {
    const res = await axios.get("https://69622847d9d64c761907166b.mockapi.io/product")
    setData(res.data)
  }

  useEffect(() => {
    getProduct()
  }, [])

  const regions = useMemo(
    () => Array.from(new Set(data.map(e => e.region))),
    [data]
  )

  const categories = useMemo(
    () => Array.from(new Set(data.map(e => e.category))),
    [data]
  )

  const filteredData = useMemo(() => {
    return data.filter(e => {
      const s = e.productName?.toLowerCase().includes(search.toLowerCase())
      const r = region ? e.region === region : true
      const c = category ? e.category === category : true
      return s && r && c
    })
  }, [data, search, region, category])

  return (
    <div>
      <div className="flex items-start justify-start w-[90%] gap-[30px] p-[30px]">
        <div className="w-[340px] space-y-6 sticky top-0">
          <div className="rounded-2xl p-4 shadow">
            <h3 className="mb-4 text-sm font-semibold text-gray-800">Регионы</h3>
            {regions.map(r => (
              <p
                key={r}
                className="mt-[20px] cursor-pointer"
                onClick={() => setRegion(r === region ? "" : r)}
              >
                {r}
              </p>
            ))}
          </div>

          <div className="rounded-2xl p-4 shadow">
            <h3 className="mb-4 text-sm font-semibold text-gray-800">Категории</h3>
            {categories.map(c => (
              <p
                key={c}
                className="mt-[20px] cursor-pointer"
                onClick={() => setCategory(c === category ? "" : c)}
              >
                {c}
              </p>
            ))}
          </div>
        </div>

        <div className="num1 ml-[40px] w-full">
          <h1 className="text-[48px] font-[700]">Вакансии</h1>

          <div className="flex items-center gap-[20px]">
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-[760px] px-[20px] h-[56px] border rounded-[50px] bg-gray-200"
              type="text"
              placeholder="Введите вакансию"
            />
            <button className="bg-[#FFA900] rounded-[10px] px-[20px] py-[15px]"></button>
          </div>

          {filteredData.map(e => (
            <div key={e.id} className="w-full rounded-2xl mt-[40px] p-6 shadow-sm dark:shadow-white dark:shadow-2xl">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-white">
                  Опыт от 1 года
                </span>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <span>📍</span>
                  <span>{e.country}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                {e.avatar && (
                  <Image src={e.avatar} alt="" width={40} height={40} unoptimized />
                )}
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {e.productName}
                </h2>
              </div>

              <div className="flex gap-4">
                <button className="rounded-full bg-orange-500 px-6 py-2 text-sm font-medium text-white">
                  {String(e.status) === "true" ? "Active" : "Inactive"}
                </button>
                <Link href={`/vakansii/${e.id}`}>
                <button className="rounded-full border border-orange-500 px-6 py-2 text-sm font-medium text-orange-500">
                  Info
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
