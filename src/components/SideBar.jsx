import "./../styles/SideBar.css";
import CloseIcon from '@mui/icons-material/Close';


const menuItems = ['Home', 'Profile', 'About', 'Contact Us', 'Support']

export default function SideBar({ setSideBarOpen }) {
  return (
    <div className="fixed top-0 left-0 bg-white shadow-md p-4 w-60 h-full z-50 rounded-md">
      <span
        className="absolute top-4 right-4 rounded-full w-4 h-4 flex items-center justify-center cursor-pointer transition duration-300 hover:scale-110 hover:shadow-lg"
        onClick={() => setSideBarOpen(false)}
      >
        <CloseIcon />
      </span>
      <ul>
        {menuItems.map((item, key) => (
          <li
            key={key}
            className="font-bold text-lg py-2 px-3 cursor-pointer rounded-md transition duration-200 w-3/4 hover:bg-gray-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
