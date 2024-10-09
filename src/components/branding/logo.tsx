// import Image from "next/image";
import { ds } from '@/lib/fonts'

export default function Logo() {
  return (
    <div className='text-4xl flex justify-center items-center'>
      <h1 className={ds.className}>Arrimate</h1>
    </div>
  )
}
