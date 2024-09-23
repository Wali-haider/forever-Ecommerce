import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../forever-assets/assets/frontend_assets/assets';
import { useLocation } from 'react-router';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const loction = useLocation();
    const [visible , setVisible] = useState(false);

    useEffect(()=>{
     if(loction.pathname.includes('collectionProduct')){
        setVisible(true);

     }
     else{
        setVisible(false)
     }
    },[loction])
    return showSearch && visible  ? (

        <div className='border-t border-b bg-gray-50 text-center'>
            <div className='inline-flex items-center justify-center border border-gray-300 px-5 py-2 my-5 mx-3 rounded-2xl w-3/4 sm:1/2'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
                <img className='w-4' src={assets.search_icon} alt="" />
            </div>
            <img onClick={() => setShowSearch(false)} className="inline w-3 cursor-pointer" src={assets.cross_icon} alt="" />

        </div>
    ) : null
}

export default SearchBar