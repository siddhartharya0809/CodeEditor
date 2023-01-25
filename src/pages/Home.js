import React from 'react'

const Home = () => {
    return (
        // home page
        <div className='homePageWrapper'>

            {/* Form div for login */}
            <div className="formWrapper">
                <img src='/code-sync.png' className='homePageLogo' alt='code-sync-logo' />
                <h4 className="mainLabel">Paste invitation Room ID</h4>

                {/* inputs and buttons */}
                <div className="inputGroup">
                    <input type="text" className='inputBox' placeholder='ROOM ID' />
                    <input type="text" className='inputBox' placeholder='USERNAME' />
                    <button className='btn joinBtn'>Join</button>
                    <span className="createInfo">
                        If you don't have an invite then create &nbsp;
                        <a href='/create' className='createNewBtn'>new room</a>
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