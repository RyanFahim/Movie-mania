import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {
  const {query, setQuery, isError} = useGlobalContext();
  
  return (
    <>
    <div className="section search-section">
      <h2 className="search-h2">Search your favourite movies here</h2>
      <form action="#" onSubmit={(e) => e.preventDefault()} className="search-form">
        <div>
        <input className= "form-input"
        type="text" 
        placeholder="Search here..."
        onChange={(e)=>setQuery(e.target.value)}
        />
        </div>
      </form>
      <div className="card-error">
        <p>
          {isError.show && isError.msg}
        </p>
      </div>
    </div>
    </>
  )
}

export default Search