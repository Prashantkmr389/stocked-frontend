import './../styles/Home.css'

import HomeMenu from '../components/HomeMenu'
import SearchBar from '../components/SearchBar'
import CategorySlider from '../components/CategorySlider'


export default function Home(){
  return (
    <div className = "Home">
      <HomeMenu/>
      <SearchBar/>
      <CategorySlider />
    </div>
  )
}
