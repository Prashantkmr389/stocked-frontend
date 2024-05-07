import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import { StarHalfRounded } from '@mui/icons-material';
function PerformerCardItem({item}) {
  return (
    <div className='border-2 rounded-md w-auto h-52 grid grid-cols-10 gap-1'>
      <div className='col-span-7 mt-6 flex flex-col'>
        <span className='text-xl font-semibold ml-5'>19.89%</span>
        <span className='text-xs text-end mr-2 inline'>Cummulative Return</span>
        <span>Exp 07 Years</span>
        <span><StarRateIcon/><StarRateIcon/><StarHalfRounded/></span>
      </div>
      <div className='col-span-3 mt-6 mr-3'>
        <img src="/dummy/images.jpg" alt="Profile photo" className='rounded-full w-12 h-12' />
        {item.name}
      </div>
      
    </div>
  )
}

export default PerformerCardItem