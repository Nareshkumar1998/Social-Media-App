import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from  "@material-ui/icons/SupervisorAccount";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import ChatIcon from  "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";
import Link from "@material-ui/core/Link";



function Header() {


    const  dispatch = useDispatch();

    const logoutOfApp = () => {
          dispatch(logout());
          auth.signOut();

    };
  
    return (
        <div className="header">
            
            <div className="header__left">
                <img src="https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/3f/24/11/3f241147-c282-da20-3f83-1cd76d92796a/AppIcon-1x_U007emarketing-0-6-0-0-85-220.png/1200x630wa.png" alt=""/>

                <div className="header__search">
                    <SearchIcon/>
                    <input placeholder="Search" type= "text"/>
                   
                </div>
            </div>
       
            <div className="header__right">
            <Link href ="/">
            <HeaderOption Icon={HomeIcon}  title="Home" />
           </Link>
           <Link  href="/contact" > 
           <HeaderOption  Icon={SupervisorAccountIcon} title="Contact"  />
         
            </Link>
            <Link  href="/chat" > 
            <HeaderOption Icon={ChatIcon} title="Chat" />
            </Link>
            <Link href ="/blog">
            <HeaderOption Icon={ ImportContactsIcon } title="Blog" />
            </Link>
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption avatar={true} title="Logout" onClick={logoutOfApp} />
               
      </div>     
        </div>
    );
}

export default Header;
