<script>
  import dayjs from 'dayjs'
  import dayOfYear from 'dayjs/plugin/dayOfYear'
  import isLeapYear from 'dayjs/plugin/isLeapYear'

  dayjs.extend(dayOfYear)
  dayjs.extend(isLeapYear)

  $: now = dayjs()
  $: currentDayOfYear = now.dayOfYear()
  $: totalDaysInYear = now.isLeapYear() ? 366 : 365  // Changed from isLeap() to isLeapYear()
  $: daysRemaining = totalDaysInYear - currentDayOfYear
</script>

<div>
<p>Dia <span class="font-bold">{currentDayOfYear}</span> de <span class="font-medium">{totalDaysInYear}</span></p>
<p>Días restantes: <span class="font-medium">{daysRemaining}</span></p>
</div>