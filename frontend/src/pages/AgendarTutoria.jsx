import React  from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import './AgendarTutorias.css';
import imgProf from '../assets/profesor.png'


const AgendarTutoria = () => {
    return (
        <div className='contenedor-calendario'>
            <div className='header-profesor'>
                <img src={imgProf} alt=''></img>
                <h2>Ing. Pedro Mendoza</h2>
            </div>
                <FullCalendar id="calendario"
            plugins={[ dayGridPlugin ]}
            initialView="dayGridWeek"
                events={[
                    { title: 'comer', date: '2024-11-26' },
                    { title: 'comer', date: '2024-11-26' }
                ]}
                aspectRatio={3}
            />
    </div>
    )
}

export default AgendarTutoria
