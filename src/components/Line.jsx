import React from 'react'
import Category from './Service_component/Category'
import Card from './Service_component/Card'
import content1_right_img from '../asset/image/content1_right.png'
import content2_left_img from '../asset/image/content2_left.png'
import more from '../asset/image/more.svg'
import apple from '../asset/image/apple.svg'
import google from '../asset/image/google.svg'
import content1 from '../asset/image/content2.png'
import content2 from '../asset/image/content1.png'
import content3 from '../asset/image/content3.png'
import content4 from '../asset/image/content4.png'
import content5 from '../asset/image/content5.png'
import content6 from '../asset/image/content6.png'
import banner_img from '../asset/image/banner.png'
import line_icon from '../asset/image/line_icon.png'

import openchat_icon from '../asset/image/Card_image/openchat_icon.svg'
import linewebtoon_icon from '../asset/image/Card_image/linewebtoon_icon.png'
import line_music_icon from '../asset/image/Card_image/linemusic_icon.svg'
import linefate_icon from '../asset/image/Card_image/linefate_icon.png'
import linerecords_icon from '../asset/image/Card_image/linerecords_icon.svg'
import charmmy_icon from '../asset/image/Card_image/charmmy_icon.svg'
import pointclub_icon from '../asset/image/Card_image/pointclub_icon.svg'
import linework_icon from '../asset/image/Card_image/linework_icon.svg'

import line_friends_icon from '../asset/image/Card_image/linefriends.jpg'
import line_flyer_icon from '../asset/image/Card_image/lineflyer.png'
import line_gift_icon from '../asset/image/Card_image/linegift.png'
import line_stock_icon from '../asset/image//Card_image/linestock.png'
import line_pocket_money_icon from '../asset/image/Card_image/line_pocket_money.png'
import line_FX_icon from '../asset/image/Card_image/lineFX.png'
import line_bitmax_icon from '../asset/image/Card_image/line_bitmax.png'
import line_add_icon from '../asset/image/Card_image/line_ad.png'
import line_network_icon from '../asset/image/Card_image/line_network.png'
import talk_head_view_icon from '../asset/image/Card_image/talk_head_view.png'
import sales_promotion_icon from '../asset/image/Card_image/sales_promotion.png'
import line_official_icon from '../asset/image/Card_image/line_official.png'
import line_point_ad_icon from '../asset/image/Card_image/line_point_ad.png'
import line_promotion_sticker_icon from '../asset/image/Card_image/promotrion_sticker.png'
import line_mini_app_icon from '../asset/image/Card_image/line_mini_app.png'



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
                <img src={line_music_icon} alt="" />
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
                  <Card icon_img={line_icon} title="LINE" description="사람, 정보, 서비스를 연결하는 커뮤니케이션 앱"/>
                  <Card icon_img={openchat_icon} title="오픈챗" description="같은 관심사를 가진 친구들과 즐겁게 대화해요!" />
                  <Card icon_img={linewebtoon_icon} title="라인 망가" description="인기 있는 최신 만화를 마음껏 감상해요!"/>
                </div>
                <div className="box">
                  <Card icon_img={line_music_icon} title="라인 뮤직" description="최신 음악 트렌드를 만나보세요!"/>
                  <Card icon_img={linefate_icon} title="라인 운세" description="매일 유명한 역술인들과 만날 수 있는 운세 앱"/>
                  <Card icon_img={linerecords_icon} title="라인 레코즈" description="스트리밍 시대의 디지털 레이블"/>
                </div>
                <div className="box">
                  <Card icon_img={charmmy_icon} title="Charmmy" description="여성의 고민에 답하는 미디어"/>
                  <Card icon_img={pointclub_icon} title="라인 포인트클럽" description="실속 있는 혜택을 받을 수 있는 라인 멤버십 프르그램"/>
                  <Card icon_img={linework_icon} title="라인 아르바이트" description="라인으로 원하는 아르바이트를 찾아보세요!"/>
                </div>
                <div className="box">
                  <Card icon_img={line_friends_icon} title="라인프렌즈 스토어" description="라인프렌즈 공식 브랜드 스토어"/>
                  <Card icon_img={line_flyer_icon} title="라인 플라이어" description="쇼핑이 더욱 편리해지는 디지털 광고 전단지"/>
                  <Card icon_img={line_gift_icon} title="라인 기프트" description="소액부터 심플하게 즐기는 전문적인 증권 거래 서비스"/>
                </div>
                <div className="box">
                  <Card icon_img={line_stock_icon} title="라인 증권" description="소액부터 심플하게 즐기는 전문적인 증권 거래 서비스"/>
                  <Card icon_img={line_pocket_money_icon} title="라인 포켓 머니" description="지금 바로 소액의 자금이 필요할 때"/>
                  <Card icon_img={line_FX_icon} title="라인 FX" description="라인으로 시작하는 FX 마진 거래 (외환차익거래)"/>
                </div>
                <div className="box">
                  <Card icon_img={line_bitmax_icon} title="LINE BITMAX" description="라인에서 암호화폐 거래를 시작해보세요."/>
                  <Card icon_img={line_add_icon} title="라인 광고" description="라인 플랫폼에 간편하게 게시할 수 있는 온라인 광고 서비스"/>
                  <Card icon_img={line_network_icon} title="라인 광고 네트워크" description="라인의 다양한 사용자를 타겟하는 대규모 광고 서비스"/>
                </div>
                <div className="box">
                  <Card icon_img={talk_head_view_icon} title="Talk Head View" description="눈에 띄는 동영상 광고를 라인 대화 목록 최상단에 게시하는 광고 서비스"/>
                  <Card icon_img={sales_promotion_icon} title="라인 세일즈 프로모션" description="라인을 활용한 매장 판촉 특화형 솔루션"/>
                  <Card icon_img={line_official_icon} title="라인 공식 계정" description="라인 사용자에게 다이렉트로 정보를 전달할 수 있는 공식 계정"/>
                </div>
                <div className="box">
                  <Card icon_img={line_point_ad_icon} title="라인 포인트 AD" description="인센티브를 통해 사용자를 확보할 수 있는 광고 서비스"/>
                  <Card icon_img={line_promotion_sticker_icon} title="라인 프로모션 스티커" description="라인 스티커를 활용하여 브랜드 인지도를 상승시키고 고객을 확보할 수 있는 광고 서비스"/>
                  <Card icon_img={line_mini_app_icon} title="라인 미니 앱" description="일상에 도움이 되는 다양한 서비스를 라인으로 제공"/>
                </div>
                {/* <div className="box">
                  <Card icon_img={} title="라인 리서치" description="일본 최대 규모의 리서치 플랫폼"/>
                  <Card icon_img={} title="라인 뉴스" description="뉴스부터 연예계 소식까지 라인으로 지금 화제가 되고 있는 뉴스를 확인해보세요."/>
                  <Card icon_img={} title="라인 셰프" description="세상에서 가장 귀엽고, 맛있는 쿠킹 타이쿤 게임"/>
                </div>
                <div className="box">
                  <Card icon_img={} title="라인프렌즈 스토어" description="라인프렌즈 공식 브랜드 스토어"/>
                  <Card icon_img={} title="라인 플라이어" description="쇼핑이 더욱 편리해지는 디지털 광고 전단지"/>
                  <Card icon_img={} title="라인 기프트" description="소액부터 심플하게 즐기는 전문적인 증권 거래 서비스"/>
                </div>
                <div className="box">
                  <Card icon_img={} title="라인 퍼즐탄탄" description="귀여운 펜더가 등장하는 사천성 게임!"/>
                  <Card icon_img={} title="라인 버블" description="라인 캐릭터와 함께 즐기는 신나는 버블 슈팅 게임!"/>
                  <Card icon_img={} title="라인 브라운팜" description="브라운과 함께 유기농 농장을 만들어나가는 모바일 SNG게임"/>
                </div> */}
              </div>
            </div>
        </div>
    </div> 
  )
}

export default Line