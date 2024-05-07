import './../styles/CategorySlider.css';
const categories = ["All", "Equity", "Mutual Funds", "Crypto", "Forex", "Derivatives"]

export default function CategorySlider() {
  return (
    <div className="flex flex-row gap-2 m-2 p-2 rounded-md border-2 border-dashed border-purple-600">
      {categories.map((item, index) => (
        <button key={index} className="px-2 py-1 rounded-md cursor-pointer">
          {item}
        </button>
      ))}
    </div>
  );
}
