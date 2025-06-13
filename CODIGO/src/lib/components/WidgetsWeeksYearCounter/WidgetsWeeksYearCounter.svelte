<script>
import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import isLeapYear from 'dayjs/plugin/isLeapYear'

dayjs.extend(weekOfYear)
dayjs.extend(isLeapYear)

$: now = dayjs()
$: currentWeekOfYear = now.week()
$: totalWeeksInYear = 52
$: weeksRemaining = totalWeeksInYear - currentWeekOfYear

</script>

<div>
  <p>Semana <span class="font-bold">{currentWeekOfYear}</span> de <span class="font-medium">{totalWeeksInYear}</span></p>
  <p>Semana restantes: <span class="font-medium">{weeksRemaining}</span></p>
</div>
