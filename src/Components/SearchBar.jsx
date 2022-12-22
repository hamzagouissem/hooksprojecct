import React from 'react'
import StarRating from './StarRating'

const SearchBar = ({text, rating, handleChange, handleRating}) => {
    return (
        <div>
            <form>
                <input type="text" value={text} onChange={(e)=>handleChange(e.target.value)} />
                <StarRating rating={rating} handleRating={handleRating}/>
            </form>
        </div>
    )
}

export default SearchBar