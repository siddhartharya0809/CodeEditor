import React, { useState } from 'react'
import { v4 as uuidV4 } from 'uuid';

const Home = () => {
    const [roomId, setRoomId] = useState("")
    const [userName, setUserName] = useState("")
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4()
        setRoomId(id)
    }
    return (
        // home page
        <div className='homePageWrapper'>

            {/* Form div for login */}
            <div className="formWrapper">
                <img src='/code-sync.png' className='homePageLogo' alt='code-sync-logo' />
                <h4 className="mainLabel">Paste invitation Room ID</h4>

                {/* inputs and buttons */}
                <div className="inputGroup">
                    <input type="text" className='inputBox' placeholder='ROOM ID' onChange={(e) => setRoomId(e.target.value)} value={roomId} />
                    <input type="text" className='inputBox' placeholder='USERNAME' onChange={(e) => setUserName(e.target.value)} value={userName} />
                    <button className='btn joinBtn'>Join</button>
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