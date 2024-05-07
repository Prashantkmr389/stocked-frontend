import "./../styles/SearchBar.css";

import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <div className="search-container existing-css-class">
      <input type="text" placeholder="Search" />
      <span>
        <SearchIcon />
      </span>
    </div>
  );
}
