'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import img from '../../../../public/image copy 9.png'
import img1 from '../../../../public/image copy 10.png'

const Novosti = () => {
  const t = useTranslations('HomePage')

  return (
    <div>
      <div className="text-center mt-[20px]">
        <h1 className="font-[700] text-[45px] dark:text-white">
          {t('title')}
        </h1>
        <div className="w-[40px] h-[2px] bg-amber-400 m-auto" />
      </div>

      <div className="lg:flex items-center justify-center gap-[20px] mt-[20px]">
        <div>
          <h1 className="text-[24px] font-[700]">
            {t('intro.title')}
          </h1>
          <p className="text-[18px] w-[611px] mt-[20px]">
            {t('intro.p1')}
          </p>
          <p className="text-[18px] w-[611px] mt-[20px]">
            {t('intro.p2')}
          </p>
          <p className="text-[18px] w-[611px] mt-[20px]">
            {t('intro.p3')}
          </p>
        </div>

        <div>
          <Link href="/about">
            <Image src={img} alt="" width={651} height={404} />
          </Link>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {[0, 1].map(row => (
            <div
              key={row}
              className="mt-14 lg:grid block grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[0, 1, 2].map(col => (
                <div key={col} className="rounded-[28px] overflow-hidden shadow-md border">
                  <div className="h-56 bg-neutral-300 bg-cover bg-center rounded-t-[28px]">
                    <Image src={img1} alt="" className="h-56" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">
                      {t(`cards.${row * 3 + col}.title`)}
                    </h3>
                    <p className="text-gray-500 text-sm mb-5">
                      {t(`cards.${row * 3 + col}.desc`)}
                    </p>
                    <button className="flex items-center gap-2 text-yellow-500 font-medium">
                      {t('more')} <span className="text-xl">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}

          <div className="flex justify-center mt-14">
            <button className="px-8 py-3 rounded-full bg-yellow-500 text-black font-medium hover:bg-yellow-400 transition flex items-center gap-2">
              {t('all')} <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Novosti
