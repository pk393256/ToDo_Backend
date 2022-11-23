import { Input, Button, Box,Divider,Grid } from '@mui/material';
import {useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import { Navigate, useNavigate } from 'react-router-dom';

export function Register() {

        const [name,setName] = useState('');
        const [email,setEmail] = useState('');
        const [password,setPassword] = useState('');
        const navigate = useNavigate();
        async function submit(){
            // console.log('name',name)
            if(name=='' || email=='' || password==''){
                alert('Some field is missing')

            }else{
                let register = await fetch(`https://my-note39.herokuapp.com/user`,{
                    method:"POST",
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({name,email,password})
                })
                
                let res = await register.json();
                let data = await res
                // setEmail('')
                // setPassword('')
                alert(data.status)
                navigate('/login')
                console.log('register data',data)
            }
            
        }
        // useEffect(()=>{},[email])
        function login(){
            navigate('/')
        }

    return (
        <>
        {/* <Grid container  direction='column' border='2px skyblue solid' 
        width='35%'
        marginLeft={'25%'}
        height={'70%'}
        > */}
        <br/>
        <Button variant='contained' style={{marginLeft:"80%"}} onClick={login}>Login</Button>

            <h1 style={{marginLeft:'4%'}}>REGISTER</h1>
            {/* <TextField label='Outlined' variant="required"/> */}
            <Grid container 
            direction={'column'} 
            xs={3} 
            marginLeft={'40%'} 
            rowGap={1}
            
            >
                <TextField required label='Name' placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
                <TextField required label="Email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                <TextField required label="Password" placeholder='Password'  onChange={(e)=>setPassword(e.target.value)}/>
                {/* <Input type='submit' /> */}
                <Button variant='contained' onClick={submit}>Register</Button>
            </Grid >
        {/* </Grid> */}
        {/* </Box> */}
        </>
    )
}