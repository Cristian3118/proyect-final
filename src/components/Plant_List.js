import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removePlanets, setPlanets } from '../reducers/slices/planetSlices';
import './liststyle.css'

const Plant_List = ({ plant }) => {
  const dispatch = useDispatch();
  const { plant_List } = useSelector(state => state.planet);

  function handleAdd(plaid) {
    const planeta = plant.find(pla => pla.mass === plaid);
    if (plant_List.find(pla => pla.mass === plaid)) {

      dispatch(removePlanets(plaid));
    } else {
      dispatch(setPlanets(planeta));

    }
    console.log(planeta);
  }
  return (
    <Fragment>
      <div>Plant_List</div>

      <div>
        {plant.map(pla => {
          return (
            <Fragment>
              <section className='listado' >
                <div  className='list'>
                  <div class="card">
                    <h4 class="card-title" >Nombre del planeta: {pla.name} </h4>
                    <h4 class="card-title">masa: {pla.mass}</h4>
                    <h4>Radio: {pla.radius}</h4>
                    <h4>Temperatura: {pla.temperature}</h4>
                    <h4>Distancia año luz: {pla.distance_light_year}</h4>
                    <div>
                      <button class="btn btn-outline-primary" onClick={() => handleAdd(pla.mass)} > Agregar planetas favoritos</button>
                    </div>
                  </div>
                </div>
              </section>

            </Fragment>
          )
        })}
      </div>
    </Fragment>
  )
}

export default Plant_List