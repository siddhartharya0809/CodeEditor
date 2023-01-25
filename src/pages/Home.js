import React, { useState } from 'react'
import { v4 as uuidV4 } from 'uuid';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate()
    const [roomId, setRoomId] = useState("")
    const [userName, setUserName] = useState("")
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4()
        setRoomId(id)

        // make toast when new room is creates
        toast.success("Created a new room")
    }

    const joinRoom = () => {
        if (!roomId || !userName) {
            toast.error("Room Id & Username is Required")
            return;
        }

        // Navigate
        navigate(`/editor/${roomId}`, {
            state: {
                userName,
            }
        })
    }

    const handleInputEnter = (e) => {
        // console.log("event", e.code);
        if (e.code === "Enter") {
            joinRoom();
        }
    }


    return (
        // home page
        <div className='homePageWrapper'>

            {/* Form div for login */}
            <div className="formWrapper">
                <img
                    src='/code-sync.png'
                    className='homePageLogo'
                    alt='code-sync-logo' />
                <h4
                    className="mainLabel">
                    Paste invitation Room ID
                </h4>

                {/* inputs and buttons */}
                <div className="inputGroup">
                    <input
                        type="text"
                        className='inputBox'
                        placeholder='ROOM ID'
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />
                    <input
                        type="text"
                        className='inputBox'
                        placeholder='USERNAME'
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                        onKeyUp={handleInputEnter}

                    />

                    <button
                        className="btn joinBtn"
                        onClick={joinRoom}
                    >
                        Join
                    </button>

                    <span className="createInfo">
                        If you don't have an invite then create &nbsp;
                        <a onClick={createNewRoom} href='/create' className='createNewBtn'>new room</a>
                    </span>
                </div>
            </div>

            {/* footer */}
            <footer>
                <h4>
                    Built With ❤️ by - &nbsp; <a href='https://github.com/siddhartharya0809'>Siddharth</a>
                </h4>
            </footer>
        </div>
    )
}

export default Home