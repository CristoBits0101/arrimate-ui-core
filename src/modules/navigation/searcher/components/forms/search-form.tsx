'use client'

// Components
import InputContainer from '@/modules/navigation/searcher/components/boxes/search-box'
import SearchButton from '@/modules/navigation/searcher/components/buttons/search-button'
import SearchInput from '@/modules/navigation/searcher/components/inputs/search-input'

// Hooks
import useSearch from '@/modules/navigation/searcher/hooks/useSearch'

// Styles
import styles from '@/modules/navigation/searcher/styles/searcher-form.module.css'

export default function SearchForm() {
  // Decomposition
  const { handleSubmit } = useSearch()

  return (
    <form
      className={`${styles.form} flex items-center justify-center text-[#1d0f0f] text-[0.875rem] w-full h-11 px-8`}
      onSubmit={handleSubmit}
    >
      <InputContainer>
        <SearchInput />
        <SearchButton />
      </InputContainer>
    </form>
  )
}
