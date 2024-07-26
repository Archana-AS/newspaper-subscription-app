import React from 'react'
import NavBar from './NavBar'

const View = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table table-striped-columns">
                            <thead>
                                <tr>
                                    <th scope="col">Number</th>
                                    <th scope="col">Subscripter Name</th>
                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Anagha</td>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jain</td>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td >Lorem </td>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Mark</td>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Augustin</td>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td >Leone </td>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Marcus</td>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Mary</td>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td >Noel </td>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td >Sophie </td>
                                    
                                </tr>
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default View