// Styles
import styles from '@/modules/navigation/searcher/styles/searcher-form.module.css'

export default function SearchButton() {
  return (
    <button
      className={`${styles.search} bg-transparent flex h-full justify-center items-center border-transparent outline-none w-[4.5rem] rounded-tr-[5rem] rounded-br-[5rem] dark:hover:[#26272C]`}
      type='submit'
    >
      <svg
        className='aspect-square fill-current h-5 m-0 object-contain p-0 w-5 text-[#1d0f0f] dark:text-[#ececed]'
        xmlns='http://www.w3.org/2000/svg'
        height='24px'
        viewBox='0 -960 960 960'
        width='24px'
        fill='currentColor'
      >
        <path d='M781.69-136.92 530.46-388.16q-30 24.77-69 38.77-39 14-80.69 14-102.55 0-173.58-71.01-71.03-71.01-71.03-173.54 0-102.52 71.01-173.6 71.01-71.07 173.54-71.07 102.52 0 173.6 71.03 71.07 71.03 71.07 173.58 0 42.85-14.38 81.85-14.39 39-38.39 67.84l251.23 251.23-42.15 42.16ZM380.77-395.38q77.31 0 130.96-53.66 53.66-53.65 53.66-130.96t-53.66-130.96q-53.65-53.66-130.96-53.66t-130.96 53.66Q196.15-657.31 196.15-580t53.66 130.96q53.65 53.66 130.96 53.66Z' />
      </svg>
    </button>
  )
}
