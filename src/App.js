import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './Components/ChatFeed.jsx'
import LoginForm from './Components/LoginForm.jsx'
const App = () => {

    if(!localStorage.getItem('username'))return <LoginForm/>
    return (

            <ChatEngine
                height='100vh'
                projectID='3ac8537f-4601-4bcb-97be-05ab95e0ac1b'
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
            />

    )
}

export default App
