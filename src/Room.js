import React, { useState, useEffect } from "react";
import Login from "./Login";


const Room = () => {
    const [roomName, setRoomName] = useState("");
    const [socket, setSocket] = useState(null);

    // Khi component được tạo, thiết lập kết nối WebSocket
    useEffect(() => {
        const newSocket = new WebSocket("ws://140.238.54.136:8080/chat/chat");

        newSocket.addEventListener("open", (event) => {
            console.log("Kết nối WebSocket đã được thiết lập", event);
            setSocket(newSocket);
        });


    }, []);


    const handleCreateRoom = () => {
        if (socket) {
            const data = {
                action: "onchat",
                data: {
                    event: "CREATE_ROOM",
                    data: {
                        name: roomName,
                    },
                },
            };
            socket.send(JSON.stringify(data));
        }
    };
    //
   const handleJoinRoom = () => {
        if (socket) {
            const data = {
                action: "onchat",
                data: {
                    event: "JOIN_ROOM",
                    data: {
                        name: roomName,
                    },
                },
            };
            socket.send(JSON.stringify(data));
        }
    };
    // Sau khi đăng nhập thành công, set socket và lưu trữ thông tin đăng nhập

    const handleLogout = () => {
        // Xóa giá trị "isLoginSuccess" trong localStorage

        alert("Thanh cong")
    };
    return (
        <div>
            <h1>Tạo phòng chat</h1>

                <div>
                    <input
                        type="text"
                        value={roomName}

                        onChange={(e) => setRoomName(e.target.value)}
                        placeholder="Nhập tên phòng"/>
                    <button onClick={handleCreateRoom}>Tạo phòng chat</button>
                    <button onClick={handleJoinRoom}>Tham gia phòng chat</button>
                    <button onClick={handleLogout}>Đăng xuất</button>
                </div>

        </div>
    );
};

export default Room;
