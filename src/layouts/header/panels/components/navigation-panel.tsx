'use-client'

// Components
import Navbar from '@/modules/navigation/menu/components/navbar-menu/navbar-menu'
import ReturnSearchContent from '@/layouts/header/panels/components/search-panel'
import Searcher from '@/modules/navigation/searcher/components/x'

// Custom
import { useSearch } from '@/layouts/header/panels/hooks/useSearch'

export default function NavigationPanel() {
  const {
    searchTerm,
    isFocused,
    resetSearchInput,
    setResetSearchInput,
    handleSearch,
    handleFocus,
    searchContainerRef,
    locale,
    setIsFocused
  } = useSearch()
  return (
    <div className='flex flex-col h-fit w-full' ref={searchContainerRef}>
      <Searcher
        resetSearchInput={resetSearchInput}
        setResetSearchInput={setResetSearchInput}
        onSearch={handleSearch}
        onFocus={handleFocus}
      />
      {isFocused && searchTerm ? (
        // Bring the search content
        <ReturnSearchContent
          setIsFocused={setIsFocused}
          setResetSearchInput={setResetSearchInput}
          searchTerm={searchTerm}
          locale={locale}
        />
      ) : isFocused ? (
        // Bring recent content
        <ReturnSearchContent
          setIsFocused={setIsFocused}
          setResetSearchInput={setResetSearchInput}
          searchTerm={''}
          locale={locale}
        />
      ) : (
        <Navbar />
      )}
    </div>
  )
}