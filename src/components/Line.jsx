import React from 'react'
import Category from './Service_component/Category'
import Card from './Service_component/Card'
import content1_right_img from '../asset/image/content1_right.png'
import content2_left_img from '../asset/image/content2_left.png'
import more from '../asset/image/more.svg'
import apple from '../asset/image/apple.svg'
import google from '../asset/image/google.svg'
import line_music from '../asset/image/line_music.png'
import content1 from '../asset/image/content2.png'
import content2 from '../asset/image/content1.png'
import content3 from '../asset/image/content3.png'
import content4 from '../asset/image/content4.png'
import content5 from '../asset/image/content5.png'
import content6 from '../asset/image/content6.png'
import banner_img from '.././asset/image/banner.png'

const Line = () => {
  return (
    <div id="Line_wrap">
        <div className="section1">
          <h1>Life on LINE</h1>
          <div className="text">메신저 앱 그 이상의 경험을 제공합니다.
            <br /> 라인은 새로운 인프라 경험, 새로운 커뮤니케이션 경험을 모두에게 전달하고자 합니다.
          </div>
        </div>
        <div className="section2">
          <div className="content1">

            <div className="content1_left">
              <div className="logo">
                NEWS
                <div className="logo_bar"></div>
              </div>
              <h1>LINE NEWS</h1>
              <div className="text">
                  <p className='color'>지금 화제가 되고 있는
                  <br />글로벌 뉴스
                </p>
                <p>바쁜 일과 중에도 글로벌 이슈를 알고 싶다면 라인 뉴스를
                  <br />추천합니다. 정치, 경제부터 연예계 소식까지 모든 장르의 뉴스를
                  <br />전하는 라인 뉴스에는 '알고 싶은 정보가' 가득합니다.
                </p>
              </div>
              <div className="more">
                <div className="more_img">
                  <img src={more} alt="" />
                </div>
                자세히 보기
              </div>
            </div>

            <div className="content1_right">
              <img className='content_img' src={content1_right_img} alt="" />
            </div>

          </div>

          <div className="content2">
            <div className="content2_left">
              <img src={content2_left_img} alt="" />
            </div>

            <div className="content2_right">
              <div className="logo">
                <img src={line_music} alt="" />
              </div>
              <h1>LINE MUSIC</h1>
              <div className="text">
                  <p className='color'>듣다, 보다, 노래하다.</p>
                <p>1억 곡 이상의 음악을 언제 어디서나 편리하게
                  <br /> 감상할 수 있습니다. 최신곡은 물론 뮤직비디오
                  <br /> 감상, 노래방 기능까지 갖추고 있어 음악을 마음껏
                  <br /> 즐길 수 있습니다.
                </p>
              </div>
              <div className="icon">
                <div id='icon_frame' className="apple">
                  <img src={apple} alt="" />
                </div>
                <div id='icon_frame' className="google">
                  <img src={google} alt="" />
                </div>
                <div className="more">
                  <div className="more_img">
                    <img src={more} alt="" />
                  </div>
                  자세히 보기
              </div>
              </div>
            </div>
          </div>  
        </div>
          <div className="section3">
            <h1>커뮤니케이션 앱</h1>
            <div className="text">언제 어디서나 무료로 메세지를 보내고,깨끗한 음질로 24시간 자유롭게 무료 통화가
              <br /> 가능한 새로운 커뮤니케이션 앱입니다.
            </div>
            <div className="content">
              <div className="content_top">
                <div className="content1">
                  <img className='content_img' src={content1} alt="" />
                  <h1>대화, 음성통화, 영상통화</h1>
                  <p>라인 유저라면 1:1은 물론 그룹을 만들어서 대화,
                    <br />음성통화, 영상통화를 이용할 수 있습니다.
                  </p>
                </div>
                <div className="content2">
                  <img className='content_img' src={content2} alt="" />
                  <h1>스티커, 이모티콘, 테마</h1>
                  <p>대화방에서 마음을 전할 수 있는 다양한 스티커와
                    <br />이모티콘, 나만의 개성을 표현할 수 있는 테마로 나만의 맞춤형
                    <br />서비스를 이용할 수 있습니다.
                  </p>
                </div>
                <div className="content3">
                  <img className='content_img' src={content3} alt="" />
                  <h1>오픈챗</h1>
                  <p>일상이나 관심사를 공유하고 정보를 나눌 수 있습니다.</p>
                </div>
              </div>
               <div className="content_bottom">
                <div className="content4">
                  <img className='content_img' src={content4} alt="" />
                  <h1>홈 탭</h1>
                  <p>라인의 각종 서비스 및 스티커와 같은 다양한 정보와
                    <br />콘텐츠를 확인할 수 있습니다.
                  </p>
                </div>
                <div className="content5">
                  <img className='content_img' src={content5} alt="" />
                  <h1>LINE VROOM</h1>
                  <p>LIVE VROOM에서 취향에 맞는 계정을 팔로우하고, 멋진
                    <br />동영상,사진,게시글을 만나보세요.
                  </p>
                </div>
                <div className="content6">
                  <img className='content_img' src={content6} alt="" />
                  <h1>윌렛 탭</h1>
                  <p>송금이나 결제 등 '라인 페이' 서비스 외에도 다양한 금융
                    <br />서비스를 이용할 수 있습니다.
                  </p>
                </div>
              </div>
            </div> 
            <div className="banner">
              <div className="banner_text">
                <h1>기업 지원</h1>
              </div>
              <img src={banner_img} alt="" />
            </div>
        </div>
        <div className="section4">
            <div className="content1">
              <h1>서비스</h1>
              <div className="text">일부 서비스는 특정 국가에서만 사용 가능합니다.</div>
            </div>
            <div className="content2">
              <Category/>
              <div className="card_box">
                <div className="box">
                  <Card/>
                  <Card/>
                  <Card/>
                </div>
                <div className="box">
                  <Card/>
                  <Card/>
                  <Card/>
                </div>
              </div>
            </div>
        </div>
    </div> 
  )
}

export default Line