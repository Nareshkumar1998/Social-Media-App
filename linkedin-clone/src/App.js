import React, { useEffect } from "react";
import { useDispatch,  useSelector } from "react-redux";
import "./App.css";
import Contact from "./nav/Contact";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./Feed";
import { auth } from "./firebase";
import Header from "./Header";
import HeaderOption from "./HeaderOption";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import Home from "./nav/Home";
import Blog from "./nav/Blog";
import Chat from "./nav/Chat";
import {BrowserRouter as Router, Route} from "react-router-dom";



function App() {
  const user =  useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
      auth.onAuthStateChanged((userAuth) => {
        if ( userAuth ){
         //login
          dispatch(login({
           email: userAuth.email,
           uid: userAuth.uid,
           displayName: userAuth.displayName,
           photoUrl: userAuth.photoURL,         

          })
          );
        }else {
          //logout
          dispatch(logout());
        }
      }) 
  }, []);

  return (
    
    
    <Router>
   <HeaderOption/>
    <Header/> 
  
      
    <Route exact path="/"  component={Home} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/chat" component={Chat} />
    <Route exact path="/blog" component={Blog} /> 
    
    
   
    
    
    <div className="App">


 
       {!user ? (
        
       <Login /> 
      ) :(
          < div className="app__body">
            
            <Sidebar/>
           <Feed/>

           <Widgets /> 
          
          </div>
 
       )}
  </div>
  </Router>
  );
}

export default App;
