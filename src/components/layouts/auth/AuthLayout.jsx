import React from 'react'
import "./AuthLayout.css"
import LineWithText from '../../miscellaneous/lineWithText/LineWithText'
import LinkButton from '../../miscellaneous/LinkButton'
import { BsFillFileEarmarkMusicFill } from 'react-icons/bs'
const AuthLayout = ({ children, isLogin = true }) => {
    return (
        <div className='auth-layout'>
            <p
                style={{
                    fontSize: "1.45rem",
                    margin: 0,
                    fontWeight: 700,
                    marginBottom: "0.5rem"
                }}
            >
                <BsFillFileEarmarkMusicFill /> Musicart
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
        </div>
    )
}

export default AuthLayout