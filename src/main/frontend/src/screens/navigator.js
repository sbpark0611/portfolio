import React from 'react'
import Profile from '../components/profile'
import { FaPhoneAlt, FaGithub } from "react-icons/fa"
import { GrMail } from "react-icons/gr"


const Navigator = ({ page, setPage }) => {
	return (
        <div style={styles.container}>
            <div onClick={()=>setPage('Home')} style={{marginTop:50, cursor:'pointer', alignItems:'center', display: 'flex', flexDirection:'column' }}>
                <Profile size={200}/>
                <div style={{fontSize:30, fontWeight:'bold'}}>박상빈</div>
            </div>
            <Links style={{ marginTop:10}} />
            
            <Buttons style={{ marginTop:10}} page={page} setPage={setPage} />
            
        </div>
	)
}

const Links = () => {
    return (
        <div>
            <div style={{ marginTop:5, display: 'flex', flexDirection:'row' }}>
                <GrMail style={{marginRight:10}} />
                <div>psb00611@gmail.com</div>
            </div>
            <div style={{ marginTop:5, display: 'flex', flexDirection:'row' }}>
                <FaPhoneAlt style={{marginRight:10}} />
                <div>010-6395-8375</div>
            </div>
            <div style={{ marginTop:5, display: 'flex', flexDirection:'row' }}>
                <FaGithub style={{marginRight:10}}/>
                <div style={{cursor: 'pointer'}} onClick={()=>{window.open("https://github.com/sbpark0611")}}>https://github.com/sbpark0611</div>
            </div>
        </div>
    )
}

const Buttons = ({ page, setPage }) => {
    return (
        <div style={{marginTop: 20, width: '90%', display: 'flex', flexDirection:'column'}}>
            {pageList.map((pageName, index) => {
                return <CustomButton pageName={pageName} page={page} setPage={setPage} key={index}/>
            })}
        </div>
    )
}

const CustomButton = ({pageName, page, setPage}) => {
    return (
        <button style={Object.assign({},styles.button, page===pageName ? styles.buttonClicked : null)} onClick={() => setPage(pageName)}>
            <div style={{fontSize:30, fontWeight:'bold'}}>
                {pageName}
            </div>
        </button>
    )
}

const styles = {
    container: {
        height:'100%', 
        width:300, 
        alignItems:'center', 
        display: 'flex', 
        flexDirection:'column', 
        backgroundColor:'#F9F7F7'
    },
    button: {
        height: 50,
        cursor: 'pointer',
        border:'none',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        margin: 10,
        backgroundColor: '#DBE2EF'
    },
    buttonClicked: {
        backgroundColor: '#3F72AF'
    }
}

const pageList = [ 'Projects', 'Education', 'Experience', 'Skills' ]

export default Navigator