import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"
import BackgroundVideo from './BackgroundVideo'
import Button from "./Button"
import Navbar from "./Navbar";
import AboutSection from './AboutSection'

const AuthWeb3 = (props) => {
  
  const navigate = useNavigate();

  var web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:5173');

  // const [account, setAccount] = useState({ name: '0x1027D59D8e754df7f8269a76EFdC5824da86037A' });
  // props.setAccount({name:'0x1027D59D8e754df7f8269a76EFdC5824da86037A'})
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    if(props.account){
      console.log(props.account);
    }
  }, [props]);


  const login = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      window.web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
        console.log(accounts[0]);

        props.setAccount({ ...props.account, name: accounts[0] });
     
        console.log(props.account.name)
        console.log(props.account.name);
        
          if(props.account.name!=null){
         const accessToken = await authenticate();
         console.log("temporary authenticated")
         const opts = {
           method: 'GET',
           headers: {
             'Content-Type': 'application/json',
             Authorization: `Bearer ${accessToken}`,
           },
         };
   
         const res = await axios.get(`http://localhost:3000/secret`, opts);
   
         props.setAccount({ name: res.data })
         alert(props.account.name);
         navigate('/dashboard');
      
        }


    }
    else {
      alert('Please install MetaMask extension');
    }
  };

  const authenticate = async () => {

    
    const response = await axios.get(`http://localhost:3000/nounce?address=${props.account.name}`);

    console.log("got response from backend", response);
    console.log(response.data.message);
    console.log(response.data.tempToken);



    const signature = await web3.eth.personal.sign(response.data.message, props.account.name);


    const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${response.data.tempToken}`,
      },
    };

    // const res = await axios.post(`/verify?signature=${signature}`, {},opts);
    const res = await axios.post(`http://localhost:3000/verify?signature=${signature}`, {}, opts)
    console.log(res);
    return res.data.token;
  };

  return (
    <div>
     

        {/* anurag code */}
      <section className="about relative">
        <BackgroundVideo />
        
        <div className="row z-10 relative">
        <Navbar/>
          <div className="col-lg-12 col-md-12">
            <div className="w-3/4 ms-32 mt-28 p-4">
              <h1 className="text-6xl text-white font-extrabold">
                The Ultimate Learning Gamification Platform with NFT Rewards!
              </h1>
              <div className="mt-8">
              <Button handleClick ={login} message={"Connect Metamask Wallet"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutSection login={login}/>
    </div>
  );
};

export default AuthWeb3;
