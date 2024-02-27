import React from 'react';
import './Login.css';

const Login = () => {
    return (
            <div className='loginAllContainer'>
                <div className='loginContainer'>
                    <div>
                        <img className='loginLogo' src="https://i.imgur.com/zqpwkLQ.png" alt="" />
                    </div>
                    <form className='loginForm'>
                        <input className='usernameInput mb-1' type='text' id='username' name='username' value={""} placeholder='전화번호, 사용자 이름 또는 이메일'/>
                        <input className='passwordInput mb-3' type='text' id='password' name='password' value={""} placeholder='비밀번호'/>
                        <button className='join-button mb-2' disabled><span>로그인</span></button>
                    </form>
                    <div className='orContainer flex justify-center items-center'>
                        <div className='w-[30%] line'><hr/></div>
                        <div className='m-2 font-bold text-xs opacity-70'>또는</div>
                        <div className='w-[30%] line'><hr/></div>
                    </div>
                    <div>
                        <span>비밀번호를 잊으셨나요?</span>
                    </div>

                </div>
                <div className='loginContainer-2 flex justify-center items-center'>
                    <span>계정이 없으신가요?</span> <span className='font-bold text-sky-500'>가입하기</span>
                </div>
            </div>

    );
};

export default Login;