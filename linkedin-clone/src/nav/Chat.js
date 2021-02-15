import { ChatEngine } from 'react-chat-engine';
import  "./Chat.css";
import ChatFeed from './ChatFeed';
import LoginForm from './LoginForm';


 

const Chat = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;

    return ( 
        <ChatEngine
        height="100vh"
        projectID="37e4a9ae-d50e-4ab1-ac81-7d5a8c77a174"
        userName= {localStorage.getItem('username')}
        userSecret= {localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        
        />
    );
};

export default Chat;

