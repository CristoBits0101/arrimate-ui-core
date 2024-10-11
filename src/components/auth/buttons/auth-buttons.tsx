// import Image from 'next/image'
import Link from 'next/link'
// import chevronRight from '@/assets/icons/arrow/chevron_right.svg'
import { useLocale, useTranslations } from 'next-intl'

export default function AuthButtons() {
  const locale = useLocale()
  const t = useTranslations('AuthButtons')
  return (
    <div className='flex w-full h-[2.5rem] flex-row items-center justify-between'>
      <button className='flex flex-row justify-center gap-1 bg-[#F4F4F4] pr-2 pl-2 pt-2 pb-2 border-[0.094rem] border-[#bfbdc050] text-sm hover:bg-[#bfbdc050]'>
        <Link href={`/${locale}/sign-in`}>{t('signIn')}</Link>
        {/* <Image
          className='h-5 w-5'
          src={chevronRight}
          alt='Google'
        /> */}
      </button>
      <button className='flex flex-row justify-center gap-1 bg-[#F4F4F4] pr-2 pl-2 pt-2 pb-2 border-[0.094rem] border-[#bfbdc050] text-sm hover:bg-[#bfbdc050]'>
        <Link href={`/${locale}/sign-up`}>{t('signUp')}</Link>
        {/* <Image
          className='h-5 w-5 flex items-start justify-center'
          src={chevronRight}
          alt='Google'
        /> */}
      </button>
    </div>
  )
}
