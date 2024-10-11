'use client'

import clear from '@/assets/icons/searcher/clear.svg'
import close from '@/assets/icons/searcher/close.svg'
import history from '@/assets/icons/searcher/history.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

type SetIsFocused = React.Dispatch<React.SetStateAction<boolean>>
type SetSearchTerm = React.Dispatch<React.SetStateAction<string>>

interface RecentContentProps {
  locale: string
  setIsFocused: SetIsFocused
  setSearchTerm: SetSearchTerm
}

const recentContent = [
  { id: '1', title: 'Artículo 1' },
  { id: '2', title: 'Artículo 2' },
  { id: '3', title: 'Artículo 3' },
  { id: '4', title: 'Artículo 4' },
  { id: '5', title: 'Artículo 5' },
  { id: '6', title: 'Artículo 6' },
  { id: '7', title: 'Artículo 7' },
  { id: '8', title: 'Artículo 8' },
  { id: '9', title: 'Artículo 9' }
]

export default function RecentContent({
  setSearchTerm,
  setIsFocused,
  locale
}: RecentContentProps) {
  const t = useTranslations('Searcher')
  const handleFocus = () => {
    setIsFocused(false)
  }
  const handleTerm = () => {
    setSearchTerm('')
  }
  return (
    <nav className='rounded-3xl mt-2 p-4 text-sm border-[0.094rem] border-solid border-[#bfbdc050] shadow-sm shadow-[#F4F4F4] w-full h-fit flex flex-col gap-2'>
      <div className='font-medium mb-2 w-full h-fit flex justify-between items-center'>
        <h2>{t('recent')}</h2>
        <div className='w-fit h-full flex gap-2 items-center justify-center'>
          <button onClick={handleTerm}>
            <Image className='w-4' src={clear} alt='Close' />
          </button>
          <button onClick={handleFocus}>
            <Image className='w-4' src={close} alt='Close' />
          </button>
        </div>
      </div>
      <ul className='flex flex-col gap-2 w-full h-fit'>
        {recentContent.map((item) => (
          <li className='truncate' key={item.id}>
            <Link
              href={`/${locale}/item/${item.id}`}
              className='truncate flex gap-2 items-center'
            >
              <Image className='w-5' src={history} alt='History' /> {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
