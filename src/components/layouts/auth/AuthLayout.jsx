import React from 'react'
import "./AuthLayout.css"
import LineWithText from '../../miscellaneous/lineWithText/LineWithText'
import LinkButton from '../../miscellaneous/LinkButton'
import { BsFillFileEarmarkMusicFill } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'
const AuthLayout = ({ children, isLogin = true }) => {
    const location = useLocation()
    return (
        <div className='auth-layout'>
            <p
                className=''
                style={{
                    fontSize: "1.45rem",
                    margin: 0,
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    textAlign: !(location.pathname.includes('register') || location.pathname.includes('login')) && 'left',
                    width: '100%',
                    color: '#333'

                }}
            >
                {!(location.pathname.includes('register') || location.pathname.includes('login')) ? <>
                    <BsFillFileEarmarkMusicFill /> Musicart
                </> :
                    <>
                        Welcome
                    </>
                }
            </p>
            {children}
            {
                isLogin ?
                    <>
                        <LineWithText text="New to musicart??" />
                        <LinkButton needBorder={true} title={"Create your Musicart account?"} to={"/register"} />
                    </> :
                    <>
                        <LinkButton needBorder={false} to={"/login"} title="Already have an account? Sign in" />
                    </>
            }
        </div >
    )
}

export default AuthLayout