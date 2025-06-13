<script lang="ts">
import { onMount, onDestroy } from 'svelte';
import dayjs from 'dayjs';
import 'dayjs/locale/es'; // Importar idioma español si es necesario

let time = dayjs();
let interval: number;

onMount(() => {
  dayjs.locale('es'); // Configurar idioma global
  interval = setInterval(() => {
    time = dayjs();
  }, 1000);
});

onDestroy(() => {
  if (interval) clearInterval(interval);
});
</script>

<div class="block card card-hover p-4 space-y-2 flex flex-col items-center justify-center ">
  <div class="text-4xl font-bold mb-2">
    {time.format('HH:mm:ss')}
  </div>
  <div class="text-lg">
    {time.format('D MMMM YYYY')}
  </div>
</div>
