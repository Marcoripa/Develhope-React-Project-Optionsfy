import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { LoginForm, SignUpForm } from '../Modal/Forms';

export const ModaleLogin = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [login, setLogin] = useState(true)

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };
  
  //closes the modal
  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
     <button className="button-style btn-price" onClick={showModal}>
        Subscribe
      </button>
      <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        footer={[
          <Button key="back" onClick={handleCancel} className="modal-btn-close">
            Close
          </Button>
          ]
        }
      >
        <header className='header-modal'>
          <div className='modal-login' id="modal-pricing-change-login-btn" style={{backgroundColor: 'transparent', color: '#fffff', width:'30%', margin:'auto', padding:'0.5rem 0', borderBottom: 'solid 2px #c5feaa'}}>
            <a className='link-modal' onClick={() => {
                setLogin(true);
                const loginBtn = document.getElementById('modal-pricing-change-login-btn');
                loginBtn.style.borderBottom = 'solid 2px #c5feaa';
                const signupBtn = document.getElementById('modal-pricing-change-setup-btn');
                signupBtn.style.borderBottom = 'solid 2px transparent';
            }}>Login</a>
          </div>
          <div className='modal-signup' id="modal-pricing-change-setup-btn" style={{backgroundColor: 'transparent', color: '#fffff', width:'30%', margin:'auto', padding:'0.5rem 0', borderBottom: 'solid 2px transparent'}}>
            <a className='link-modal' onClick={() => {
              setLogin(false)
              const signupBtn = document.getElementById('modal-pricing-change-setup-btn');
              signupBtn.style.borderBottom = 'solid 2px #c5feaa';
              const loginBtn = document.getElementById('modal-pricing-change-login-btn');
              loginBtn.style.borderBottom = 'solid 2px transparent';
            }}>Sign Up</a>
          </div>
        </header>
        {login ? <LoginForm handleCancel={handleCancel}/> : <SignUpForm />}   
      </Modal>
    </>
  );
};


export const ModaleSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [signUp, setSignUp] = useState(true)

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };


  return (
    <>
      <button className="button-style" onClick={showModal}>
        Sign Up
      </button>
      <Modal
        visible={visible}
        closable={false}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel} className="modal-btn-close">
            Close
          </Button>
        ]}
      >
         <header className='header-modal'>
          <div className='modal-login' id="modal-pricing-login-signup" style={{backgroundColor: 'transparent', color: '#fffff', width:'30%', margin:'auto', padding:'0.5rem 0', borderBottom: 'solid 2px transparent'}}>
            <a className='link-modal' onClick={() => {
               setSignUp(false);
              const loginBtn = document.getElementById('modal-pricing-login-signup');
              loginBtn.style.borderBottom = 'solid 2px #c5feaa';
              const signupBtn = document.getElementById('modal-pricing-signup-login');
              signupBtn.style.borderBottom = 'solid 2px transparent';
              
            }}>Login</a>
          </div>
          <div className='modal-signup' id="modal-pricing-signup-login" style={{backgroundColor: 'transparent', color: '#fffff', width:'30%', margin:'auto', padding:'0.5rem 0', borderBottom: 'solid 2px #c5feaa'}}>
            <a className='link-modal' onClick={() => {
              setSignUp(true)
              const signupBtn = document.getElementById('modal-pricing-signup-login');
              signupBtn.style.borderBottom = 'solid 2px #c5feaa'
              const loginBtn = document.getElementById('modal-pricing-login-signup');
              loginBtn.style.borderBottom = 'solid 2px transparent'
            }}>Sign Up</a>
          </div>
        </header>
        {signUp ? <SignUpForm handleCancel={handleCancel}/> : <LoginForm />}
      </Modal>
    </>
  );
};



