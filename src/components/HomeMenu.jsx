import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {useState} from 'react';
import SideBar from './SideBar';
import './../styles/HomeMenu.css';
import { Link } from 'react-router-dom';

export default function HomeMenu(){
  const [menuOpen, setMenuOpen] = useState(false)

  const manageMenu = () => {
    console.log('Hello')
    setMenuOpen(!menuOpen)
  }
  return(
    <div className="upperHeader">
      
      <div className = "Header">
        
        <div className="left-side">
          <div className="logo">
            <MenuOutlinedIcon onClick = {manageMenu}/>
          </div>
        </div>
        <div className ="right-side">
          <Link to ='/login'>Login</Link>
          <Link to = '/logout'>Logout</Link>
          
              
            
        </div>
        
      </div>
      {menuOpen && <SideBar setSideBarOpen={setMenuOpen}/>}
    </div>
    
  )
}