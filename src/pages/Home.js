import { useAuth0 } from '@auth0/auth0-react';
import React, { Fragment } from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react';
import Plant_List from '../components/Plant_List';
import './homeStyle.css';

const Home = () => {
  const { user } = useAuth0();
  const [planets, setPlanets] = useState([]);

  const key = process.env.REACT_APP_KEY;
  const headers = {
    'X-Api-Key': key
  }
  const nombre = 'Neptune';
  const url = process.env.REACT_APP_URL_APP + 'name=15';
  useEffect(() => {

    Axios.get(url, { headers })
      .then(resp => {
        console.log(resp.data)
        setPlanets(resp.data)
        console.log(planets)
      })
      .catch(error => { console.log(error) })
  }, [])

  /*if(isLoading){
      return (<div> Cargando ...</div>)
  }
  */
  return (
    /*isAuthenticated && (*/
    <div className='fondo-home'>
      <h2> {user.name}</h2>

      <Plant_List plant={planets}/>
    </div>


  )
}
export default Home