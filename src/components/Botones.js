import React from 'react'

import {Button} from 'react-bootstrap'
import '../css/botones.css';

 class Botones extends React.Component{
     render(){
         return (
             <div className="botones">
                  <Button variant="outline-primary">Login</Button>
                  <Button variant="outline-secondary">Sign Up</Button>
             </div>


         )
     }
 }
 export default Botones;