import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const VerCalendario = () => {
    const [events, setEvents] = useState([]);

  useEffect(() => {
    // Función para obtener los datos del archivo JSON (puedes ajustarla según tu método preferido)
    const fetchEvents = async () => {
      try {
        const response = await fetch('/agenda.json');
        console.log(response)
        const data = await response.json();
        // Mapear los datos para convertirlos en el formato requerido por React Big Calendar
        const formattedEvents = data.map(event => ({
          id: event.id,
          title: `${event.paciente_nombre_completo} - ${event.especialidad_descripcion}`,
          start: new Date(`${event.fecha}T${event.desde}`),
          end: new Date(`${event.fecha}T${event.hasta}`),
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: '50px' }}
      />
    </div>
  );
}

export default VerCalendario;
