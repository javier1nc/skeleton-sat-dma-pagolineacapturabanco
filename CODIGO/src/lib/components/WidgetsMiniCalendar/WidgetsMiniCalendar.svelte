<script>
  import dayjs from 'dayjs';

  let currentDate = dayjs();
  $: month = currentDate.format('MMMM');
  $: year = currentDate.format('YYYY');
  $: daysInMonth = currentDate.daysInMonth();
  $: firstDayOfMonth = currentDate.startOf('month').day();

  $: calendarDays = [...Array(daysInMonth).keys()].map(i => i + 1);
  $: paddingDays = [...Array(firstDayOfMonth).keys()];

  const weekdays = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

  function isToday(day) {
    return day === dayjs().date() && currentDate.month() === dayjs().month() && currentDate.year() === dayjs().year();
  }
</script>

<div class="block card card-hover p-4 space-y-2 w-64">
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-lg font-semibold text-gray-800">{month} {year}</h2>
  </div>
  <div class="grid grid-cols-7 gap-1 text-center">
    {#each weekdays as day}
      <div class="text-xs font-medium text-gray-500">{day}</div>
    {/each}
    {#each paddingDays as _}
      <div></div>
    {/each}
    {#each calendarDays as day}
      <div class={`
        p-1 text-sm rounded-full
        ${isToday(day) ? 'bg-blue-500 text-white' : 'text-gray-700'}
      `}>
        {day}
      </div>
    {/each}
  </div>
</div>
