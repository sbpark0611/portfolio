import React from 'react'
import { contentStyles } from '../screens/content'
import Profile from '../components/profile'
import { FaPhoneAlt, FaGithub } from "react-icons/fa"
import { GrMail } from "react-icons/gr"


const HomeContent = () => {
	return (
        <div style={contentStyles.container}>
            <div style={{margin:30}}>
                <Profile size={300} />
            </div>
            <div style={{ marginLeft:30, fontSize:40, fontWeight:'bold'}}>박상빈의 포트폴리오 페이지 입니다.</div>
            <div style={{ marginLeft:30, marginTop:30, display: 'flex', flexDirection:'row' }}>
                <GrMail size="30" style={{marginRight:10}} />
                <div style={{fontSize:30}}>psb00611@gmail.com</div>
            </div>
            <div style={{ marginLeft:30, marginTop:30, display: 'flex', flexDirection:'row' }}>
                <FaPhoneAlt size="30" style={{marginRight:10}} />
                <div style={{fontSize:30}}>010-6395-8375</div>
            </div>
            <div style={{ marginLeft:30, marginTop:30, display: 'flex', flexDirection:'row' }}>
                <FaGithub size="30" style={{marginRight:10}}/>
                <div style={{fontSize:30, cursor: 'pointer'}} onClick={()=>{window.open("https://github.com/sbpark0611")}}>https://github.com/sbpark0611</div>
            </div>
        </div>
	)
}

export default HomeContent
