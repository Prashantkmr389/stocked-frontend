import './../styles/CategorySlider.css';
const categories = ["All", "Equity", "Mutual Funds", "Crypto", "Forex", "Derivatives"]

export default function CategorySlider(){
  return(
    <div className = "categorySlider">
      {categories.map((item)=>(
        <button>{item}</button>
      ))}
    </div>
  )
}