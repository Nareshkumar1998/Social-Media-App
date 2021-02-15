import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import ImageIcon from "@material-ui/icons/Image";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);
    const[image, setImage] = useState(null);
    const [progress] = useState(0);

   const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);

    var selectedImageSrc = URL.createObjectURL(e.target.files[0]);
    var imagePreview = document.getElementById("image-preview");

    imagePreview.src = selectedImageSrc;
    imagePreview.style.display = "block";
    }
};



          
  useEffect(() => {
       db.collection("posts")
       .orderBy("timestamp", "desc")
       .onSnapshot((snapshot) => 
           setPosts(snapshot.docs.map((doc) => 
              ({
                    id: doc.id,
                    data: doc.data(),
               }))
            )
       );
   }, []);

   const sendPost = (e) => {
       e.preventDefault();

      db.collection("posts").add({
          name: user.displayName,
          description: user.email,
          message: input,
          photoUrl: user.photoUrl || "",
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setInput("");
      
   };

    return (
        <div className="feed">
           
             <div className="feed__inputContainer">
                 <div className="feed__input">
                 < CreateIcon /> 
                     <form>
                     <input value={input} placeholder="Write something here.." onChange={(e) => setInput(e.target.value)} type="text"/>
                       <button onClick={sendPost} type='submit'>Send</button>
                       
                       <div className="createPost__imageUpload">
                          <label htmlFor="fileInput">
                          <AddAPhotoIcon style= {{  cursor: "pointer", fontSize:"30px"}}/>
                      </label>
                          <input 
                          id="fileInput" 
                          type= "file" 
                          accept="image/*" 
                          onChange= {handleChange}
                          />
                      </div>
                 </form>  
                 <div className="createPost__imagePreview">
                           <img id="image-preview" alt="" />
                       </div>
                       <button
                        className="createPost__uploadBtn"
                        onClick={handleChange}
                        style= {{ color: input ? "#000": "lightgray" }}
                       >
                      {`Upload ${progress != 0 ? progress :""}`}
                       </button>
             
             </div>        
                 <div className="feed__inputOptions">
                 <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                 <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                 <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                 <InputOption Icon={CalendarViewIcon} title="Write article" color="#7FC15E" />
                 </div>
             </div>
             {/*posts*/}
             <FlipMove>
             {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                 <Post
                  key={id}
                  name={name}
                  description={description}
                  message={message}
                  photoUrl={photoUrl}
                 />
                 ))}
             </FlipMove>
          
           
        </div>

    );
}

export default Feed;
