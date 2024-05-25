import React from 'react'
import StraightIcon from '@mui/icons-material/Straight';
import { FlexBox } from './reusables/AllContainers';
import { Text } from './reusables/AllTexts';

function RecentTradeItem({item}) {
    console.log(item)
    var percentage =(item.current_price - item.entry_price)/item.entry_price*100
    percentage = percentage.toFixed(2)
    var profit = false;
    if(item.current_price > item.entry_price && item.type == "Long"){
        profit = true;
    }
    if(item.current_price < item.entry_price && item.type == "Short"){
        profit = true;
    }


  return (
    <div className='h-20 shadow-md rounded-md m-2 grid-cols-10 grid hover:shadow-lg cursor-pointer'>
        <div className='col-span-7 flex flex-col ml-3'>
            {profit ? <span className='text-lg text-green-600'>{percentage}%<StraightIcon/></span> : <span className='text-lg text-red-600'>{percentage}%<StraightIcon/></span> }
            
            <span>{item.contract} {item.type == "Long" ? <span className='border-red-600 border-2 p-1 text-red-600'>Long</span> : <span className='border-blue-600 border-2 p-1 text-blue-600'>Short</span>}       </span>
            <span>Entry Price : {item.entry_price} </span>
        </div>
        <div className='col-span-3 flex flex-row'>
            <div className='flex flex-col'>
                <span>{item.name}</span>
                <span>Forex</span>
            </div>
            <img className='h-10 w-10' src="/dummy/images.jpg" alt="photo" />
        </div>
    </div>
  )
}

export default RecentTradeItem