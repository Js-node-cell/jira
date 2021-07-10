import { Card, Divider } from "antd"
import { useState } from "react"
import { LoginScreen } from "./login"
import { RegisterScreen } from "./register"
import styled from '@emotion/styled'

export const UnanthenticatedApp = () => {
    const [isRegister,setisRegister] = useState(false)
    return <div style={{display:'flex',justifyContent:'center'}}>
        <ShadowCard>
            {
                isRegister ? <RegisterScreen/> : <LoginScreen/>
            }
            <Divider/>
            <a onClick={()=>{
                setisRegister(!isRegister)
            }}>切换到{isRegister?'登录':'注册'}</a>
        </ShadowCard>
    </div>
}
const ShadowCard = styled(Card)`
width:25rem;
min-height:29rem;
padding:3.2rem 4rem;
border-radius:0.3rem;
box-sizing:border-box;
box-shadow:rgba(0,0,0,0.1) 0 0 10px;
text-align:center;`
const  Containter =styled.div`
display:flex;
flex-direction:column;
align-items:center;
min-height:100vh;`