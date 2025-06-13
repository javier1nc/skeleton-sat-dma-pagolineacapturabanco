<script>
    import Calendar from '@event-calendar/core';
    import TimeGrid from '@event-calendar/time-grid';
    import dayGridPlugin from '@event-calendar/day-grid';


    let plugins = [TimeGrid, dayGridPlugin];
    let options = {
        view: 'dayGridMonth',
        locale:  'es',
        buttonText: {
            today: 'Hoy'
        },
        slotDuration: '00:30:00',
        events: [
            // your list of events
        ]
    };

    export let view = 'mes';



    let events = [
        {
          id: 1,
          title: 'All-Day Event',
          start: '2025-02-17',
          allDay: true
        }
      ];

    function updateOptionsViewWeek() {
        //options.slotDuration = '01:00';
        options.view = 'timeGridWeek';
    }

    function updateOptionsViewMonth() {
        //options.slotDuration = '01:00';
        options.view = 'dayGridMonth';
    }

    $: if (view === 'semana') {
        console.log("::Semana::");
        updateOptionsViewWeek();
    } else if (view === 'mes'){
        console.log("::Mes::");
        updateOptionsViewMonth();
    }



</script>


<Calendar plugins={[dayGridPlugin]} {options} events={events}/>

