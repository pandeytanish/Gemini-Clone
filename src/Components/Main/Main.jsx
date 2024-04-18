import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

function Main() {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Tanish</span></p>
                <p>How Can I Help You Today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Hello how are you isa the find is the</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>my name is are you isa the find is the</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>your is the  how are you isa the find is the</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>i am  is the  are you isa the find is the</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter A prompt Here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className='bottom-info'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
            </div>
        </div>

    </div>
  )
}

export default Main