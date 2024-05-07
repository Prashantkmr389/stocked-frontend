import { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import './../styles/TopProfile.css'
import PerformerCardItem from './PerformerCardItem';


const drops =['Daily', 'Weekly', 'Monthly', 'Yearly']

const data = [
    {
        name : 'Prashant',
        timeframe : 'Daily'
    },
    {
        name : 'Rajnsih',
        timeframe : 'Weekly'
    },
    {
        name : 'Anku',
        timeframe : 'Monthly'
    },
    {
        name: 'John',
        timeframe: 'Yearly'
    },
    {
        name: 'Jane',
        timeframe: 'Daily'
    },
    {
        name: 'Mike',
        timeframe: 'Weekly'
    },
    {
        name: 'Sarah',
        timeframe: 'Monthly'
    },
    {
        name: 'Alice',
        timeframe: 'Daily'
    },
    {
        name: 'Bob',
        timeframe: 'Weekly'
    },
    {
        name: 'Charlie',
        timeframe: 'Monthly'
    },
    {
        name: 'David',
        timeframe: 'Yearly'
    },
    {
        name: 'Eve',
        timeframe: 'Daily'
    },
    {
        name: 'Frank',
        timeframe: 'Weekly'
    },
    {
        name: 'Grace',
        timeframe: 'Monthly'
    },
    {
        name: 'Henry',
        timeframe: 'Yearly'
    },
    {
        name: 'Isabella',
        timeframe: 'Daily'
    },
    {
        name: 'Jack',
        timeframe: 'Weekly'
    },
    {
        name: 'Kate',
        timeframe: 'Monthly'
    },
    {
        name: 'Liam',
        timeframe: 'Yearly'
    },
    {
        name: 'Mia',
        timeframe: 'Daily'
    },
    {
        name: 'Noah',
        timeframe: 'Weekly'
    },
    {
        name: 'Olivia',
        timeframe: 'Monthly'
    },
    {
        name: 'Peter',
        timeframe: 'Yearly'
    },
    {
        name: 'Quinn',
        timeframe: 'Daily'
    },
    {
        name: 'Ryan',
        timeframe: 'Weekly'
    },
    {
        name: 'Sophia',
        timeframe: 'Monthly'
    },
    {
        name: 'Thomas',
        timeframe: 'Yearly'
    },
    {
        name: 'Uma',
        timeframe: 'Daily'
    },
    {
        name: 'Victor',
        timeframe: 'Weekly'
    },
    {
        name: 'Wendy',
        timeframe: 'Monthly'
    },
    {
        name: 'Xavier',
        timeframe: 'Yearly'
    },
    {
        name: 'Yara',
        timeframe: 'Daily'
    },
    {
        name: 'Zoe',
        timeframe: 'Weekly'
    },
    {
        name: 'Alex',
        timeframe: 'Monthly'
    },
    {
        name: 'Ben',
        timeframe: 'Yearly'
    },
    {
        name: 'Catherine',
        timeframe: 'Daily'
    },
    {
        name: 'Daniel',
        timeframe: 'Weekly'
    },
    {
        name: 'Emily',
        timeframe: 'Monthly'
    },
    {
        name: 'Finn',
        timeframe: 'Yearly'
    }

]

function TopProfile() {
    const [selectedOption, setSelectedOption] = useState("");
    const [dropDownOpened, setDropDownOpened] = useState(false);

    const handleClick = () => {
        setDropDownOpened(!dropDownOpened);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        // console.log(option)
        setDropDownOpened(false);
        // console.log(selectedOption)
    };
    

    return (
        <div className="flex flex-col m-2">
            <div className="relative flex">
                <span className="mr-2">Top Performer</span>
                <div
                    className="cursor-pointer transform rounded-full bg-gray-300 p-2"
                    onClick={handleClick}
                >
                    {dropDownOpened ? (
                        <ArrowDropUpIcon />
                    ) : (
                        <ArrowDropDownIcon />
                    )}
                </div>
                <span>{selectedOption || 'Select an option'}</span>
                {dropDownOpened && (
                    <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md py-2 z-10">
                        {drops.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className="cursor-pointer hover:bg-gray-100 px-4 py-2"
                            >
                               {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className='flex flex-row space-x-1'>
                {
                    
                   

                    
                    data.filter(item => {
                        console.log(selectedOption, item.timeframe)
                        return item.timeframe === selectedOption
                    }).slice(0, 5).map((item, index)=>(
                        
                        <PerformerCardItem item = {item} key = {index}/>
                    ))
                
                }
                
            </div>

            

        </div>
    );
}

export default TopProfile;
