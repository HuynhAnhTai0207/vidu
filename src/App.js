import logo from './logo.svg';
import './App.css';
import Room from "./Room";
import MyMessageComponent from "./MyMessageComponent";
import ChatComponent from "./ChatComponent";
import Chat from "./chat";
import Videocall from "./Videocall";
import ChatInput from "./ChatComponent";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';



function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/createroom" element={<Room/>} />
                {/* Các Route khác nếu có */}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
