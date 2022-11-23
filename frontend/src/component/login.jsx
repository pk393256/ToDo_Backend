import { Input, Button, Box, Divider, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useDispatch, getState, subscribe } from 'react-redux';
import { useState, useEffect } from 'react';
import { toggleAuth,toggleToken } from '../reduxSrore/action';
import store from '../reduxSrore/store';
import { useNavigate } from 'react-router-dom';
export function Login() {
    const [storeChanged, setStoreChanged] = useState(0)
    const [auth, setAuth] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    async function submit() {
        let data = await fetch(`https://my-note39.herokuapp.com/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        let res = await data;
        let dataCameFromBackend = await res.json();
        let { token } = dataCameFromBackend;
        if (token) {
            dispatch(toggleAuth())
            dispatch(toggleToken(token))
            setStoreChanged(storeChanged + 1)
            navigate('/note')
        } else {
            dispatch(toggleToken(''))
            dispatch(toggleAuth())
            alert(dataCameFromBackend.status)
        }



        // console.log(dataCameFromBackend)
        // console.log('data',data)
    }
    function register(){
        navigate('/register')
    }
    useEffect(() => {
        let authenticationStatus = store.getState().authReducer.status;
        // console.log('authStatus', authenticationStatus)
        let tokenStatus = store.getState().tokenReducer
        console.log('token',tokenStatus)
    }, [storeChanged])


    return (
        <>
            {/* <Grid container  direction='column' border='2px skyblue solid' 
        width='35%'
        marginLeft={'25%'}
        height={'70%'}
        > */}
        <Box>
            
        </Box>
        <br/>
        <Button variant='contained' style={{marginLeft:"80%"}} onClick={register}>Register</Button>
            <h1 style={{ marginLeft: '4%' }}>LOGIN</h1>
            {/* <TextField label='Outlined' variant="required"/> */}
            <Grid container
                direction={'column'}
                xs={3}
                marginLeft={'40%'}
                rowGap={1}

            >
                <TextField required label="Email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <TextField required label="Password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                {/* <Input type='submit' /> */}
                <Button variant='contained' onClick={submit}>Login</Button>
            </Grid >
            {/* </Grid> */}
            {/* </Box> */}
        </>
    )
}
