import React, {useState} from 'react';
import { Row, Col, Image, Navbar, Nav, Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/javascript.svg'
import './body.css'
import CodeBlock from './CodeBlock';
const Bodys = () => {
    const [selectedOption, setSelectedOption] = useState('Clase 1');
    const options = [
      {
        name: 'Clase 1',
        code: `
        // 1. Declarar una variable de nombre ?auto?, asignarle el valor ?Corolla? y mostrarla por
        // consola*.
        var auto= "Corolla";
        console.log(typeof(auto))
        console.log(auto)
        // 2. Asignarle el valor ?308? a la variable declarada en el ejercicio anterior y mostrarla por
        // consola.
        auto=308;
        console.log(typeof(auto))
        console.log(auto)
        // 3. A la misma variable de los ejercicios anteriores, asignarle el valor ?C4?. Volver a
        // mostrarla por consola.
        auto="C4";
        console.log(typeof(auto))
        console.log(auto)
        // 4. Declarar dos variables ?nombre? y ?apellido?, asignarles tu nombre y apellido. Luego
        // mostrar por consola ambos valores. Usar un solo console.log( )
        var nombre="Frank";
        var apellido="Urdaneta";
        console.log(nombre , apellido)
        // 5. Dada una variable llamada ?fruta? con el valor ?naranja?. Declarar una variable
        // ?tipoDeLaVariableFruta? y asignarle como valor el tipo de la variable ?fruta?. **
        var fruta="naranja";
        var tipoDeLaVariableFruta=fruta
        console.log(tipoDeLaVariableFruta)
        // 6. Para los ejercicios 1, 2 y 3, mostrar por consola el tipo de la variable en cada nueva
        // asignación.
        `,
      },
      {
        name: 'Clase 3',
        code: `
          console.log('Ejemplo de c�digo para la opci�n 3');
        `,
      },
      {
        name: 'Clase 4',
        code: `
          
        `,
      },
      {
        name: 'Clase 5',
        code: `
          console.log('Ejemplo de c�digo para la opci�n 3');
        `,
      },
      {
        name: 'Clase 6',
        code: `
          console.log('Ejemplo de c�digo para la opci�n 3');
        `,
      },
    ];
    const handleOptionClick = (option) => {
      setSelectedOption(option);
    };
    return (
        <Container >
            <Container className="mt-3">
                <Row className="justify-content-center">
                <Col md={8} className="text-center">
                    <Image src={logo} fluid />
                    <h1 className='mt-3'>
                    "Explorando el mundo de JavaScript, CSS y HTML: Todo lo que necesitas saber"
                    </h1>
                </Col>
                </Row>
            </Container>
            <div className="container">
                |<div className="row">
                    <div className="col-md-4">
                    <ul className="list-group">
                        {options.map((option, index) => (
                        <li
                            key={option.name}
                            className={`list-group-item ${
                            selectedOption === option.name ? 'active' : ''
                            }`}
                            onClick={() => handleOptionClick(option.name)}
                        >
                            {option.name}
                        </li>
                        ))}
                    </ul>
                    </div>
                    <div className="col-md-8" style={{textAlign: "left", padding:"0px"}}>
                    <CodeBlock value={options.find((option) => option.name === selectedOption)?.code} code={options.find((option) => option.name === selectedOption)?.code} />
                    </div>
                </div>
            </div>
        
      </Container>
    );
}

export default Bodys;
