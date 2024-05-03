import Banner from '@/components/shop/Banner'
import FilterViewProducts from '@/components/shop/FilterViewProducts'
import Promotions from '@/components/shop/Promotions'
import ShopCollectionInShop from '@/components/shop/ShopCollectionInShop'
import React from 'react'

const page = () => {
  return (
    <div className='font-tec min-w-screen'>
    <Banner />
    <FilterViewProducts />
    <Promotions />
    <ShopCollectionInShop />
    </div>
  )
}

export default page