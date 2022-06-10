import React from 'react'

const FavouriteItemsWrapper = ({children}) => {
  return (
      <div className='max-w-7xl m-auto'>
          <div className={"text-2xl pt-16 pb-5"}>Favorited Items</div>
          <div className={"grid grid-cols-2 grid-rows-5 sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-5 lg:grid-rows-2 gap-3 justify-items-center py-5"}>
              {children}
          </div>
      </div>
  )
}

export default FavouriteItemsWrapper