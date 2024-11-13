'use client'

import Image from 'next/image'
import backIcon from '@/modules/configuration/assets/icons/buttons/navigation/back.svg'
import { useTranslations } from 'next-intl'

interface BackButtonProps {
  onClick: () => void
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  const t = useTranslations('SettingsPanel')

  return (
    <button
      className='w-7 absolute left-8 top-1/2 transform -translate-y-1/2 flex items-center bg-[#F4F4F4] aspect-square rounded-full border-[0.05rem] border-[#EBEAEB] border-solid'
      onClick={onClick}
    >
      <Image
        width={28}
        height={28}
        src={backIcon}
        alt={t('backIconAlt', { defaultMessage: 'Back' })}
        className='aspect-square object-contain'
      />
    </button>
  )
}

export default BackButton
