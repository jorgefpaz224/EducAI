import React, { Component } from 'react'
import Contenedor from '../components/Contenedor'
import imgProfesor from '../assets/profesor.png';
import './Tutorias.css';

export default class Tutorias extends Component {
  render() {
    return (
      <div>
        <div className='tutorias-banner'>
            <h1>Tutorías</h1>
            <p>¿Tienes una clase en mente? </p>
            <input type='search' className='searchbar' placeholder='Buscar...'></input>
        </div>
        <h2>Sugerencias para ti</h2>
        <div className='contenido-tutorias'>
            
            <div className='docentes-contenedor'>
                <Contenedor
                tipo="personaContenedor"
                image={imgProfesor}
                nombreProf='Ing. Pedro Mendoza'
                carrera='Ingeniero en Sistemas'
                profClases={['Lenguajes de Programación', 'Estructura de Datos II']}
                horarios='Lu - Vi 9:00 A.M. - 11:00 A.M.'
                />
                <Contenedor
                tipo="personaContenedor"
                image={imgProfesor}
                nombreProf='Ing. Pedro Mendoza'
                carrera='Ingeniero en Sistemas'
                profClases={['Lenguajes de Programación', 'Estructura de Datos II']}
                horarios='Lu - Vi 9:00 A.M. - 11:00 A.M.'
                />
                <Contenedor
                tipo="personaContenedor"
                image={imgProfesor}
                nombreProf='Ing. Pedro Mendoza'
                carrera='Ingeniero en Sistemas'
                profClases={['Lenguajes de Programación', 'Estructura de Datos II']}
                horarios='Lu - Vi 9:00 A.M. - 11:00 A.M.'
                />
                <Contenedor
                tipo="personaContenedor"
                image={imgProfesor}
                nombreProf='Ing. Pedro Mendoza'
                carrera='Ingeniero en Sistemas'
                profClases={['Lenguajes de Programación', 'Estructura de Datos II']}
                horarios='Lu - Vi 9:00 A.M. - 11:00 A.M.'
                />
            </div>
        </div>
        <h2>Tutores</h2>
        <div className='contenido-tutorias'>
            
            <div className='filtros-tutorias'>
                <div className='filtros-header'>
                    <h3>Filtros</h3>
                    <button className='btn-transparente'>
                        Limpiar
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3.99992H2.33333M2.33333 3.99992H13M2.33333 3.99992L2.33333 13.3333C2.33333 13.6869 2.47381 14.026 2.72386 14.2761C2.97391 14.5261 3.31304 14.6666 3.66667 14.6666H10.3333C10.687 14.6666 11.0261 14.5261 11.2761 14.2761C11.5262 14.026 11.6667 13.6869 11.6667 13.3333V3.99992M4.33333 3.99992V2.66659C4.33333 2.31296 4.47381 1.97382 4.72386 1.72378C4.97391 1.47373 5.31304 1.33325 5.66667 1.33325H8.33333C8.68696 1.33325 9.02609 1.47373 9.27614 1.72378C9.52619 1.97382 9.66667 2.31296 9.66667 2.66659V3.99992" stroke="#0C1940" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </button>
                </div>

                <br></br>
                <br></br>

                <form id='filtros-form'>
                <h3>Horarios Disponibles</h3>
                <label>Selecciona la hora que necesites:
                <input type='time'></input>
                </label>

                <br></br>

                <h3>Facultades</h3>
                <label>
                    <input type='checkbox' value='Matemáticas'></input>
                    Matemáticas
                </label>
                <label>
                    <input type='checkbox' value='Ingeniería'></input>
                    Ingeniería
                </label>
                <label>
                    <input type='checkbox' value='Ciencias Administrativas y Sociales'></input>
                    Ciencias Administrativas y Sociales
                </label>
                <label>
                    <input type='checkbox' value='Ciencias de la Salud'></input>
                    Ciencias de la Salud
                </label>
                <label>
                    <input type='checkbox' value='Escuela de Arte y Diseño'></input>
                    Escuela de Arte y Diseño
                </label>
                <label>
                    <input type='checkbox' value='Área General'></input>
                    Área General
                </label>

                <br></br>

                <h3>Modalidad</h3>
                <label>
                    <input type='checkbox' value='Presencial'></input>
                    Presencial
                </label>
                <label>
                    <input type='checkbox' value='Teledocencia'></input>
                    Teledocencia
                </label>
                </form>
            </div>

            <div className='docentes-contenedor'>
                <Contenedor
                tipo="personaContenedor"
                image={imgProfesor}
                nombreProf='Ing. Pedro Mendoza'
                carrera='Ingeniero en Sistemas'
                profClases={['Lenguajes de Programación', 'Estructura de Datos II']}
                horarios='Lu - Vi 9:00 A.M. - 11:00 A.M.'
                />
                <Contenedor
                tipo="personaContenedor"
                image={imgProfesor}
                nombreProf='Ing. Pedro Mendoza'
                carrera='Ingeniero en Sistemas'
                profClases={['Lenguajes de Programación', 'Estructura de Datos II']}
                horarios='Lu - Vi 9:00 A.M. - 11:00 A.M.'
                />
                <Contenedor
                tipo="personaContenedor"
                image={imgProfesor}
                nombreProf='Ing. Pedro Mendoza'
                carrera='Ingeniero en Sistemas'
                profClases={['Lenguajes de Programación', 'Estructura de Datos II']}
                horarios='Lu - Vi 9:00 A.M. - 11:00 A.M.'
                />
                <Contenedor
                tipo="personaContenedor"
                image={imgProfesor}
                nombreProf='Ing. Pedro Mendoza'
                carrera='Ingeniero en Sistemas'
                profClases={['Lenguajes de Programación', 'Estructura de Datos II']}
                horarios='Lu - Vi 9:00 A.M. - 11:00 A.M.'
                />
                <Contenedor
                tipo="personaContenedor"
                image={imgProfesor}
                nombreProf='Ing. Pedro Mendoza'
                carrera='Ingeniero en Sistemas'
                profClases={['Lenguajes de Programación', 'Estructura de Datos II']}
                horarios='Lu - Vi 9:00 A.M. - 11:00 A.M.'
                />
            </div>
        </div>
      </div>
    )
  }
}
