import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/userActions';
import './Style.css'

const Login = () => {

    const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0();

    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            await loginWithRedirect();
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (isAuthenticated && user) {
            dispatch(login(user))
        };
    }, [isAuthenticated, user, dispatch]);

    if (isLoading) {
        return <div> Cargando... </div>
    }


    return (

        <section className='fondo-login' >
            <div className='acceder'>
                <button type="button" class="btn btn-success" onClick={handleLogin} style={{ fontSize: '24px', padding: '6px 40px' }}>Login</button>
            </div>

        </section>
        
        /*<div>
            <button class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
                Acceder={handleLogin} <svg width="1em" height="1em" viewBox="0 0 16 16" class="position-absolute top-100 start-50 translate-middle mt-1" fill="var(--bs-secondary)" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" /></svg>
            </button>

        </div>*/

    )
}

export default Login