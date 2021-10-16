import React from 'react'

import {Button,InputGroup,FormControl} from 'react-bootstrap'
import '../css/botones.css';

 class Input extends React.Component{
     render(){
         return (
             <div className="Input">
                    <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                    <FormControl
                        placeholder="Buscar"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    </InputGroup>
             </div>
            
           
         )
     }
 }
 export default Input;