<script>
import dayjs from 'dayjs'

$: now = dayjs()
</script>

<div>
  <p><span class="font-bold">{now.format('YYYY-MM-DD')}</span></p>
</div>
