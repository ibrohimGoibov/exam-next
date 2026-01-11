'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import img from '../../../public/image copy.png'
import img1 from '../../../public/image copy 2.png'
import img2 from '../../../public/image copy 3.png'
import img3 from '../../../public/image copy 4.png'
import img4 from '../../../public/image copy 5.png'
import img5 from '../../../public/image copy 6.png'
import img6 from '../../../public/image copy 13.png'
import img7 from '../../../public/image copy 14.png'
import img8 from '../../../public/image copy 15.png'
import img9 from '../../../public/image copy 16.png'
import img10 from '../../../public/image copy 17.png'
import img11 from '../../../public/image copy 18.png'
import img12 from '../../../public/image copy 19.png'
import img13 from '../../../public/image copy 9.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from '@radix-ui/react-icons'
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'

const Page = () => {
  const t = useTranslations('HomePage')

  const features = [
    {
      Icon: FileTextIcon,
      name: t('features.saveTitle'),
      description: t('features.saveDesc'),
      href: '/',
      cta: t('learnMore'),
      background: <Image src={img4} alt='' className="absolute -top-20 -right-20 opacity-60" />,
      className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
    },
    {
      Icon: InputIcon,
      name: t('features.searchTitle'),
      description: t('features.searchDesc'),
      href: '/',
      cta: t('learnMore'),
      background: <Image src={img4} alt='' className="absolute -top-20 -right-20 opacity-60" />,
      className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
    },
    {
      Icon: GlobeIcon,
      name: t('features.langTitle'),
      description: t('features.langDesc'),
      href: '/',
      cta: t('learnMore'),
      background: <Image src={img4} alt='' className="absolute -top-20 -right-20 opacity-60" />,
      className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
    },
    {
      Icon: CalendarIcon,
      name: t('features.calendarTitle'),
      description: t('features.calendarDesc'),
      href: '/',
      cta: t('learnMore'),
      background: <Image src={img4} alt='' className="absolute -top-20 -right-20 opacity-60" />,
      className: 'lg:col-start-3 lg:row-start-1 lg:row-end-2',
    },
    {
      Icon: BellIcon,
      name: t('features.notifyTitle'),
      description: t('features.notifyDesc'),
      href: '/',
      cta: t('learnMore'),
      background: <Image src={img4} alt='' className="absolute -top-20 -right-20 opacity-60" />,
      className: 'lg:col-start-3 lg:row-start-2 lg:row-end-4',
    },
  ]

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Swiper modules={[Pagination, Autoplay]} autoplay={{ delay: 3000 }} pagination={{ clickable: true }} slidesPerView={1} loop className="w-screen">
        {[img6, img7, img8, img9, img10].map((item, i) => (
          <SwiperSlide key={i}>
            <Image src={item} alt="" className="w-[90%] m-auto rounded-[20px] h-auto object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-[200px] px-4">
        <h1 className="text-4xl font-bold">{t('aboutTitle')}</h1>
        <div className="w-10 h-0.5 bg-yellow-400 mx-auto mt-3" />
        <p className="mx-auto mt-4 max-w-5xl text-xl">{t('aboutDesc')}</p>
      </div>

      <div className="flex items-center justify-evenly mt-[100px]">
        <div>
          <h1 className="text-[22px] text-yellow-500">{t('valuesTitle')}</h1>
          <p className="w-[582px] text-[18px]">{t('valuesDesc')}</p>
        </div>
        <Image src={img} alt='' />
      </div>

      <div className="flex items-center justify-evenly mt-[100px]">
        <div>
          <h1 className="text-[22px] text-yellow-500">{t('goalsTitle')}</h1>
          <div className="border border-gray-400 p-5 rounded-[20px] mt-5">
            {[1,2,3].map(i => (
              <div key={i} className="flex items-center gap-5 mt-3">
                <Image src={img1} alt='' />
                <p className="text-[20px] font-bold">{t(`goals.item${i}`)}</p>
              </div>
            ))}
          </div>
          <p className="text-[18px] w-[630px] mt-4">{t('goalsDesc')}</p>
        </div>
        <div className="flex gap-5">
          <Image src={img2} alt='' />
          <Image src={img3} alt='' />
        </div>
      </div>

      <div className="mt-16 w-[90%] m-auto">
        <BentoGrid className="lg:grid-rows-3">
          {features.map(item => (
            <BentoCard key={item.name} {...item} />
          ))}
        </BentoGrid>
      </div>


      <div className="text-center mt-[100px]">
      <h1 className="text-center text-[48px] mt-24">{t('mapTitle')}</h1>
        <div className="w-20 h-1 bg-yellow-500 mb-6c m-auto mt-[20px]" />
      </div>

      <div className="flex items-center justify-evenly">
        <div className="num">
        <div className="num1 mt-[20px]">
          <Image src={img11} alt='' />
          <div className="flex items-center gap-[30px]">
          <div className='text-[40px] flex items-center gap-[10px]'><h1>2170</h1>
          <span className='text-[15px]'>АКБ</span>
          </div>
          <div className='flex items-center gap-[10px]'>
          <h1 className='text-[40px]'>2110</h1>
          <span className='text-[15px]'>АКБ</span>
          </div>
          </div>
        </div>
        <div className="num1 mt-[20px]">
          <Image src={img11} alt='' />
          <div className="flex items-center gap-[30px]">
          <div className='text-[40px] flex items-center gap-[10px]'><h1>2170</h1>
          <span className='text-[15px]'>АКБ</span>
          </div>
          <div className='flex items-center gap-[10px]'>
          <h1 className='text-[40px]'>2110</h1>
          <span className='text-[15px]'>АКБ</span>
          </div>
          </div>
        </div>
        <div className="num1 mt-[20px]">
          <Image src={img11} alt='' />
          <div className="flex items-center gap-[30px]">
          <div className='text-[40px] flex items-center gap-[10px]'><h1>2170</h1>
          <span className='text-[15px]'>АКБ</span>
          </div>
          <div className='flex items-center gap-[10px]'>
          <h1 className='text-[40px]'>2110</h1>
          <span className='text-[15px]'>АКБ</span>
          </div>
          </div>
        </div>
        </div>
        <Image src={img12} alt='' />
      </div>


      <div className="text-center mt-[100px]">
      <h1 className="text-center text-[48px] mt-24">{t('newsTitle')}</h1>
        <div className="w-20 h-1 bg-yellow-500 mb-6c m-auto mt-[20px]" />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">

        <div className="lg:col-span-3 bg-white rounded-[32px] p-10 flex flex-col items-center text-center shadow-sm">
          <div className="w-10 h-10 bg-yellow-400 rounded-[10px] mb-6 relative">
            <div className="absolute inset-2 bg-white rounded" />
          </div>
          <h3 className="text-[36px] font-bold">15 000 кв.м</h3>
          <p className="text-gray-500 mt-2">площадь складов</p>
        </div>

        <div className="lg:col-span-3 bg-white rounded-[32px] p-10 flex flex-col items-center text-center shadow-sm">
          <div className="w-14 h-8 border-2 border-yellow-400 rounded mb-6 relative">
            <div className="absolute -bottom-2 left-2 w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="absolute -bottom-2 right-2 w-3 h-3 bg-yellow-400 rounded-full" />
          </div>
          <h3 className="text-[36px] font-bold">70 авто</h3>
          <p className="text-gray-500 mt-2">в нашем автопарке</p>
        </div>

        <div className="lg:col-span-2 bg-white rounded-[28px] p-8 flex items-center justify-between shadow-sm">
          <div>
            <h3 className="text-[32px] font-bold">8 000+</h3>
            <p className="text-gray-500 mt-1">постоянных клиентов</p>
          </div>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-[28px] p-8 flex items-center justify-between shadow-sm">
          <div>
            <h3 className="text-[32px] font-bold">5+</h3>
            <p className="text-gray-500 mt-1">эксклюзивных контрактов</p>
          </div>
          <div className="w-10 h-10 relative">
            <div className="absolute inset-0 bg-yellow-400 rounded-lg rotate-12" />
            <div className="absolute inset-2 bg-white rounded" />
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-[28px] p-8 flex items-center justify-between shadow-sm">
          <div>
            <h3 className="text-[32px] font-bold">47+</h3>
            <p className="text-gray-500 mt-1">охваченных городов</p>
          </div>
          <div className="w-8 h-10 bg-yellow-400 clip-map" />
        </div>

      </div>
      <style tsx>{`
        .clip-map {
          clip-path: polygon(
            20% 0%,
            80% 0%,
            100% 20%,
            100% 80%,
            80% 100%,
            20% 100%,
            0% 80%,
            0% 20%
          );
        }
      `}</style>
    </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-gradient-to-br from-[#0c1424] to-[#060b16] rounded-[28px] px-6 py-14 text-white">
      <h1 className="text-center text-[48px] mt-24">{t('jobsTitle')}</h1>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4" />

        <p className="text-center max-w-3xl mx-auto mt-6 text-gray-300 text-sm sm:text-base leading-relaxed">
          В нашем портфеле всемирно известные бренды, продукция которых успешно
          продвигаются на нашем рынке. Основные категории товаров:
          <span className="font-semibold text-white">
            {" "}продукты питания и гигиенические средства.
          </span>
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          <Image src={img5} alt=''/>
          <Image src={img5} alt=''/>
          <Image src={img5} alt=''/>
          <Image src={img5} alt=''/>
          <Image src={img5} alt=''/>
          </div>
      </div>
    </section>


      <h1 className="text-center text-[48px] mt-24">{t('partnerTitle')}</h1>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4" />

        <div className="max-w-7xl mx-auto px-4">
    <div className="mt-14 lg:grid block grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="rounded-[28px] overflow-hidden shadow-md border">
        <div className="h-56 bg-neutral-300 bg-cover bg-center rounded-t-[28px]"><Image src={img13} alt='' className='h-56' /></div>
        <div className="p-6">
          <h3 className="text-lg font-bold mb-2">Title</h3>
          <p className="text-gray-500 text-sm mb-5">
            Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
          </p>
          <button className="flex items-center gap-2 text-yellow-500 font-medium">
            Подробнее <span className="text-xl">→</span>
          </button>
        </div>
      </div>

      <div className="rounded-[28px] overflow-hidden shadow-md border">
        <div className="h-56 bg-neutral-300 bg-cover bg-center rounded-t-[28px]"><Image src={img13} alt='' className='h-56' /></div>
        <div className="p-6">
          <h3 className="text-lg font-bold mb-2">Title</h3>
          <p className="text-gray-500 text-sm mb-5">
            Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
          </p>
          <button className="flex items-center gap-2 text-yellow-500 font-medium">
            Подробнее <span className="text-xl">→</span>
          </button>
        </div>
      </div>

      <div className="rounded-[28px] overflow-hidden shadow-md border">
        <div className="h-56 bg-neutral-300 bg-cover bg-center rounded-t-[28px]"><Image src={img13} alt='' className='h-56' /></div>
        <div className="p-6">
          <h3 className="text-lg font-bold mb-2">Title</h3>
          <p className="text-gray-500 text-sm mb-5">
            Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
          </p>
          <button className="flex items-center gap-2 text-yellow-500 font-medium">
            Подробнее <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
    </div>
    <section className="py-20">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-semibold text-gray-800">
      {t('jobs.title')}
    </h2>
    <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4 mb-14" />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      <div className="bg-white rounded-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="bg-gray-900 text-white text-sm px-4 py-1 rounded-full">
            {t('jobs.items.0.exp')}
          </span>
          <span className="text-gray-400 text-sm">
            {t('jobs.items.0.city')}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">
          {t('jobs.items.0.title')}
        </h3>
        <p className="text-gray-500 text-sm mb-6">
          {t('jobs.items.0.desc')}
        </p>
        <a className="text-yellow-500 font-medium inline-flex items-center gap-2">
          {t('more')} →
        </a>
      </div>

      <div className="bg-white rounded-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="bg-gray-900 text-white text-sm px-4 py-1 rounded-full">
            {t('jobs.items.1.exp')}
          </span>
          <span className="text-gray-400 text-sm">
            {t('jobs.items.1.city')}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">
          {t('jobs.items.1.title')}
        </h3>
        <p className="text-gray-500 text-sm mb-6">
          {t('jobs.items.1.desc')}
        </p>
        <a className="text-yellow-500 font-medium inline-flex items-center gap-2">
          {t('more')} →
        </a>
      </div>

      <div className="bg-white rounded-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="bg-gray-900 text-white text-sm px-4 py-1 rounded-full">
            {t('jobs.items.2.exp')}
          </span>
          <span className="text-gray-400 text-sm">
            {t('jobs.items.2.city')}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">
          {t('jobs.items.2.title')}
        </h3>
        <p className="text-gray-500 text-sm mb-6">
          {t('jobs.items.2.desc')}
        </p>
        <a className="text-yellow-500 font-medium inline-flex items-center gap-2">
          {t('more')} →
        </a>
      </div>
    </div>

    <div className="mt-14">
      <button className="bg-yellow-500 text-white px-8 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-yellow-600 transition">
        {t('jobs.all')} →
      </button>
    </div>
  </div>
</section>

<section className="py-20">
  <div className="max-w-7xl mx-auto px-4">
    <div className="bg-gray-200 rounded-3xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <h2 className="text-4xl font-semibold mb-8 text-gray-900">
          {t('partner.title')}
        </h2>

        <div className="space-y-5">
          <input
            type="text"
            placeholder={t('partner.name')}
            className="w-full h-14 rounded-full px-6 outline-none border border-gray-600"
          />

          <input
            type="text"
            placeholder={t('partner.company')}
            className="w-full h-14 rounded-full px-6 outline-none border border-gray-600"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              type="email"
              placeholder={t('partner.email')}
              className="h-14 rounded-full px-6 outline-none border border-gray-600"
            />
            <input
              type="tel"
              placeholder={t('partner.phone')}
              className="h-14 rounded-full px-6 outline-none border border-gray-600"
            />
          </div>

          <label className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xl">
              ↑
            </div>
            <div>
              <p className="font-medium">
                {t('partner.upload')}
              </p>
              <p className="text-sm text-gray-500">
                {t('partner.limit')}
              </p>
            </div>
            <input type="file" className="hidden" />
          </label>

          <button className="w-full h-14 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition">
            {t('partner.send')}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="rounded-2xl overflow-hidden h-[320px]">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html"
            className="w-full h-full border-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl px-6 py-4 flex items-center gap-3">
            <span className="text-xl">✉</span>
            <span className="font-medium">
              {t('partner.emailValue')}
            </span>
          </div>

          <div className="bg-white rounded-2xl px-6 py-4 flex items-center gap-3">
            <span className="text-xl">📞</span>
            <span className="font-medium">
              {t('partner.phoneValue')}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Page
