<script>
import dayjs from 'dayjs'

$: now = dayjs()
</script>

<div>
  <p><span class="font-bold">{now.format('HH:mm:ss')}</span></p>
</div>
