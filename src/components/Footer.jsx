import React from 'react'
import line_icon from '../asset/image/line_icon.png'
import apple from '../asset/image/apple.svg'
import google from '../asset/image/google.svg'
import youtube from '../asset/image/youtube.svg'

const Footer = () => {
  return (
    <div id="Footer_wrap">
        <div className="content_top">
            <img className='line' src={line_icon} alt="" />
            <div id='line' className="app_store">
                <img src={apple} alt="" />
                App Store
            </div>
            <div id='line' className="google_play">
                <img src={google} alt="" />
                Google Play
            </div>
            <div id='line' className="desktop">
                {/* <img src="" alt="" /> */}
                Desktop
            </div>
            <div id='line' className="windows_store">
                {/* <img src="" alt="" /> */}
                Windows Store
            </div>
            <div id='line' className="chrome">
                Chrome
            </div>
            <div id='line' className="apk">
                APK
            </div>
            <div className="screen_saver">
                Screen Saver
            </div>
        </div>
        <div className="content_bottom">
            <div className="text">
                <div className="text1">
                ©️ LY Coperation
                </div>
                <div id='line' className="text2">
                    도움말
                </div>
                <div id='line' className="text3">
                    이용약관
                </div>
                <div id='line' className="text4">
                    개인정보 처리방침
                </div>
                <div className="text5">
                    청소년 보호 정책
                </div>
            </div>
            <div className="icon">
                <img src={youtube} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer