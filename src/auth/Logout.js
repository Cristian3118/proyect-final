import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import './Style.css';


const Logout = () => {
    const {logout} = useAuth0();
  return (
    <div className='cerrar-sesion'>
      <button  class="btn btn-primary" onClick={()=>logout({returnTo: window.location.origin})}  >
        Cerrar sesión
    </button>
   
  
    </div>
  )
}

export default Logout