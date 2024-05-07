import './../styles/Home.css'

import HomeMenu from '../components/HomeMenu'
import SearchBar from '../components/SearchBar'
import CategorySlider from '../components/CategorySlider'
import TopProfile from '../components/TopProfile'


export default function Home(){
  return (
    <div className = "Home">
      <HomeMenu/>
      <SearchBar/>
      <CategorySlider />
      <TopProfile/>
    </div>
  )
}
