import "./../styles/SideBar.css";
import CloseIcon from '@mui/icons-material/Close';


const menuItems = ['Home', 'Profile', 'About', 'Contact Us', 'Support']

export default function SideBar({setSideBarOpen}) {
  return (
    <div className="sidebar">
      <span onClick={() => setSideBarOpen(false)}><CloseIcon/></span>
      <ul>
        {menuItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
