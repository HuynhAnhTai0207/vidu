import React, { useState, useEffect } from "react";
import Room from "./Room";
import {useNavigate} from "react-router-dom";

const Login =() => {

    const [socket, setSocket] = useState(null);
    const [isLoginSuccess, setIsLoginSuccess] = useState(false);
    const [token, setToken] = useState("");
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();
    // Khi component được tạo, thiết lập kết nối WebSocket
    useEffect(() => {

        const newSocket = new WebSocket("ws://140.238.54.136:8080/chat/chat");

        newSocket.addEventListener("open", (event) => {
            console.log("Kết nối WebSocket đã được thiết lập", event);
            setSocket(newSocket);
        });

       
    }, []);

    const handleLogin = () => {
        // Gửi yêu cầu đăng nhập đến server WebSocket
        const requestData = {
            action: "onchat",
            data: {
                event: "LOGIN",
                data: {
                    user: user,
                    pass: pass,
                },
            },
        };
        socket.send(JSON.stringify(requestData));
    };


    // Sau khi đăng nhập thành công, set socket và lưu trữ thông tin đăng nhập
    useEffect(() => {
        if (socket) {
            socket.onmessage = (event) => {
                const responseData = JSON.parse(event.data);
                if (responseData && responseData.status === "success") {
                    // Đăng nhập thành công
                    setIsLoginSuccess(true);
                    // Lưu trữ thông tin đăng nhập, ví dụ: lưu trữ token

                    // Tiếp tục thực hiện tạo phòng chat
                } else {

                }
            };
        }
    }, [socket]);

    return (
        <div>



            {isLoginSuccess ? (

              <Room />
            ) : (
                <>
                    <input
                        type="text"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        placeholder="Nhập tên người dùng"/>
                    <input
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="Nhập mật khẩu"/>
                    <button onClick={handleLogin}>Đăng nhập</button>
                </>
            )}




        </div>
    );
};

export default  Login;