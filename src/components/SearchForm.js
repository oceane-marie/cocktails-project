import React, {useRef, useEffect} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchCocktail() {
    setSearchTerm(searchValue.current.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <section className='section search'>
      <form className='search-form' onClick={handleSubmit}>
        <div className='search-control'>
          <label htmlFor='name'>Search Your Favorite Cocktail</label>
          <input
              type='text'
              name='name'
              id='name'
              ref={searchValue}
              onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
