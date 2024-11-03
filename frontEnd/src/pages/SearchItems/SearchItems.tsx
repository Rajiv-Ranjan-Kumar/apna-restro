import React, { lazy, Suspense, useState } from 'react'
import './SearchItems.scss'
const FoodDisplay = lazy(()=>import('../../components/FoodDisplay/FoodDisplay'))
const SearchedItems = lazy(()=>import('../../components/SearchedItems/SearchedItems'));
import SearchBoxAndAddButton from '../../components/SearchBoxAndAddButton/SearchBoxAndAddButton';
import FoodFoodDisplayLoading from '../../components/LoadingAnimation/FoodDisplay/FoodDisplayLoading';

const SearchItems = () => {

  const [searchableItem, setSearchableItem] = useState('');

  const handelSearchBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchableItem(event.target.value);
  }
  
  return (
    <div className='search-items'>
      <div className="search-box">
        <SearchBoxAndAddButton placeholder={'Search here...'} value={searchableItem} onChange={handelSearchBox}/>
      </div>
      
      <div className="searched-items">
        {searchableItem?(
          <Suspense fallback={<FoodFoodDisplayLoading/>}><SearchedItems searchebleItem={searchableItem} /></Suspense>
        ):(
          <Suspense fallback={<FoodFoodDisplayLoading/>}><FoodDisplay category='All' dashboard={false}/></Suspense>
        )}
      </div>
    </div>
  )
}

export default SearchItems
