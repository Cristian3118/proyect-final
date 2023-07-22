import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Favorites = () => {

    const dispatch = useDispatch();
    const { plant_List } = useSelector(state => state.planet);
    return (
        <>
            <div>Lista de favoritos</div>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
            
                        <th scope='col' >Planet name</th>
                        <th scope='col' >Mass</th>
                        <th scope='col' >Radius</th>
                        <th scope='col' >Temperature</th>
                        <th scope='col' >Distance light year</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {plant_List.map(p => {
                        return (
                            <>
                                <tr>
                                    <td scope='row'>{p.name}</td>
                                    <td scope='row'>{p.mass}</td>
                                    <td scope='row'>{p.radius}</td>
                                    <td scope='row'>{p.temperature}</td>
                                    <td scope='row'>{p.distance_light_year}</td>
                                </tr>

                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Favorites