<script lang="ts">
    // Section Components
    import Icon from '@iconify/svelte';

    // Local:
    let currentVariant = 'variant-filled';

</script>

<div class="container mt-8 h-full mx-auto flex justify-center items-start">
    <article class="w-[100rem] mb-6">
        <header class="space-y-4">
            <h1 class="h1">Registro</h1>
            <!-- prettier-ignore -->
            <p>
                Recomendamos llenar todos los campos requeridos.
            </p>
            <aside class="alert variant-ghost">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <p>Tenga en cuenta que el llenado correcto de los campos permitira una mejor atencion.</p>
            </aside>
        </header>

        <main class="mt-4">

            <div class="card p-4  text-token space-y-4">
                <label class="label">
                    <span>Nombre</span>
                    <input class="input" type="text" placeholder="Nombre"/>
                </label>

                <label class="label">
                    <span>Género</span>
                    <div class="space-y-2">
                    	<label class="flex items-center space-x-2">
                    		<input class="radio" type="radio" checked name="radio-direct" value="1" />
                    		<p>Masculino</p>
                    	</label>
                    	<label class="flex items-center space-x-2">
                    		<input class="radio" type="radio" name="radio-direct" value="2" />
                    		<p>Femenino</p>
                    	</label>
                    </div>
                </label>

                <label class="label">
                    <span>Edad</span>
                    <input class="input" title="Input (number)" type="number" />
                </label>

                <label class="label">
                    <span>Grupo sanguíneo</span>
                    <select class="select">
                        <option value="1">A</option>
                        <option value="2">B</option>
                        <option value="3">AB</option>
                        <option value="4">0</option>

                    </select>
                </label>

                <label class="label">
                    <span>Número de empleado</span>
                    <input class="input" type="number" placeholder="Número de empleado"/>
                </label>

                <label class="label">
                    <span>RFC</span>
                    <input class="input" type="text" placeholder="RFC"/>
                </label>

                <label class="label">
                    <span>Correo</span>
                    <input class="input" title="Input (email)" type="email" placeholder="john@example.com" autocomplete="email" />
                </label>

                <label class="label">
                    <span>Extensión</span>
                    <input class="input" title="Input (number)" type="number" />
                </label>

                <label class="label">
                    <span>Teléfono personal</span>
                    <input class="input" title="Input (tel)" type="tel" multiple="true" placeholder="55 12345678" />
                </label>

                <label class="label">
                    <span>Lugar de trabajo</span>
                    <input class="input" type="text" placeholder="Lugar de trabajo"/>
                </label>

                <label class="label">
                    <span>Tipo de derechohabiencia</span>
                    <select class="select">
                        <option value="1">Sin derechohabiencia </option>
                        <option value="2">IMSS</option>
                        <option value="3">ISSSTE</option>
                    </select>
                </label>


                <label class="label">
                    <span>Contacto en caso de emergencia (mínimo uno, máximo dos)</span>
                    <div class="border p-4 border-[#245e50] rounded-lg">
                        <label class="label">
                            <span>Nombre</span>
                            <input class="input" type="text" placeholder="Nombre"/>
                        </label>

                        <label class="label">
                            <span>Relación personal con el contacto de emergencia</span>
                            <input class="input" type="text" placeholder="Nombre"/>
                        </label>

                        <label class="label">
                            <span>Teléfono personal</span>
                            <input class="input" title="Input (tel)" type="tel" multiple="true" placeholder="55 12345678" />
                        </label>
                    </div>

                      <div class="p-4 mt-2 border border-[#245e50] rounded-lg">
                        <label class="label">
                            <span>Nombre</span>
                            <input class="input" type="text" placeholder="Nombre"/>
                        </label>

                        <label class="label">
                            <span>Relación personal con el contacto de emergencia</span>
                            <input class="input" type="text" placeholder="Nombre"/>
                        </label>

                        <label class="label">
                            <span>Teléfono personal</span>
                            <input class="input" title="Input (tel)" type="tel" multiple="true" placeholder="55 12345678" />
                        </label>
                    </div>

                    <div>

                    </div>
                </label>





                <div class="flex justify-center items-center gap-4">
                    <button type="button" class="btn variant-filled">Guardar</button>
                </div>
            </div>
        </main>
    </article>

</div>


