import './../styles/Home.css'

import HomeMenu from '../components/HomeMenu'
import SearchBar from '../components/SearchBar'
import CategorySlider from '../components/CategorySlider'
import TopProfile from '../components/TopProfile'
import RecentTradeItem from '../components/RecentTradeItem'
import { Link } from 'react-router-dom'

const dummyData = [{
  contract: "NIFTY 22000 CE 29 AUG",
  entry_price : 400,
  target_price : 450,
  current_price : 420,
  name : "Prashant Kumar",
  profile : "/dummy/images.jpg",
  type : "Long"
}
]



// Additional hard-coded data
const additionalData = [
    {
        contract: "BankNifty 50000 CE 30 SEP",
        entry_price: 450,
        target_price: 400, // Below entry price for Short
        current_price: 480, // Up from entry price for Short
        name: "John Doe",
        profile: "/dummy/images.jpg",
        type: "Short"
    },
    {
        contract: "BankNifty 45000 PE 12 SEP",
        entry_price: 300,
        target_price: 350, // Above entry price for Long
        current_price: 320, // Below entry price for Long
        name: "Jane Smith",
        profile: "/dummy/images.jpg",
        type: "Long"
    },
    {
        contract: "Nifty 2200 PE 30 AUG",
        entry_price: 600,
        target_price: 550, // Above entry price for Long
        current_price: 580, // Above entry price for Long
        name: "Alice Johnson",
        profile: "/dummy/images.jpg",
        type: "Long"
    },
    {
        contract: "BankNifty 48000 CE 30 SEP",
        entry_price: 500,
        target_price: 450, // Below entry price for Short
        current_price: 520, // Up from entry price for Short
        name: "Bob Williams",
        profile: "/dummy/images.jpg",
        type: "Short"
    },
    {
        contract: "BankNifty 46000 PE 12 SEP",
        entry_price: 350,
        target_price: 400, // Above entry price for Long
        current_price: 370, // Above entry price for Long
        name: "Emily Brown",
        profile: "/dummy/images.jpg",
        type: "Long"
    },
    {
        contract: "Nifty 2400 PE 30 AUG",
        entry_price: 550,
        target_price: 500, // Below entry price for Short
        current_price: 530, // Below entry price for Short
        name: "David Lee",
        profile: "/dummy/images.jpg",
        type: "Short"
    },
    {
        contract: "BankNifty 52000 CE 30 SEP",
        entry_price: 480,
        target_price: 430, // Above entry price for Long
        current_price: 500, // Up from entry price for Long
        name: "Sophia Martinez",
        profile: "/dummy/images.jpg",
        type: "Long"
    },
    {
        contract: "BankNifty 44000 PE 12 SEP",
        entry_price: 400,
        target_price: 350, // Below entry price for Short
        current_price: 420, // Above entry price for Short
        name: "Ethan Taylor",
        profile: "/dummy/images.jpg",
        type: "Short"
    },
    {
        contract: "Nifty 2600 PE 30 AUG",
        entry_price: 650,
        target_price: 600, // Below entry price for Short
        current_price: 620, // Above entry price for Short
        name: "Olivia Anderson",
        profile: "/dummy/images.jpg",
        type: "Short"
    },
    {
        contract: "BankNifty 54000 CE 30 SEP",
        entry_price: 520,
        target_price: 470, // Below entry price for Short
        current_price: 540, // Up from entry price for Short
        name: "Liam Wilson",
        profile: "/dummy/images.jpg",
        type: "Short"
    },
    // Add more hard-coded data as needed
];
// Concatenate the additional data to the original dummyData array
dummyData.push(...additionalData);

export default function Home(){
  return (
    <div className = "Home">
      <HomeMenu/>
      <SearchBar/>
      <CategorySlider />
      <TopProfile/>

      <Link to = '/recenttrades'>
        {dummyData.map((value, index)=>(
          <RecentTradeItem key={index} item = {value} />
        ))}
      </Link>
    </div>
  )
}
