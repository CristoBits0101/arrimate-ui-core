'use client'

import { Button } from '@/modules/ui/button'

interface SignInButtonProps {
  icon: React.ElementType
  onClick: () => void
}

export default function SignInButton({
  icon: Icon,
  onClick
}: SignInButtonProps) {
  return (
    <Button
      size='lg'
      className='bg-transparent w-full rounded-none border-[0.094rem] border-solid dark:border-[#5E5E66] dark:hover:bg-[#5E5E66] border-[#EBEAEB] hover:bg-[#EBEAEB] outline-0'
      variant='outline'
      onClick={onClick}
    >
      <Icon className='h-5 w-5' />
    </Button>
  )
}