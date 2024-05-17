<template>
    <div class="container">
        <div class="row row-cols-2 ">
            <div class="col align-self-center ">
                <h1 class="text-center my-4">Componente Padre</h1>
                <ComponenteHijo :mensaje="mensajePadre" @actualizarMensaje="mensajePadre = $event" />
                <button class="btn btn-primary mt-3" @click="resetearMensaje()">Resetear Mensaje</button>
                <p v-if="mensajePadre === 'Hola desde el padre'" class="mt-3">El
                    mensaje está en su estado original</p>
                <p v-else class="mt-3 text-warning">El mensaje ha sido cambiado por
                    el hijo</p>
            </div>

            <div class="col align-self-center ">
                <h2>Lista de tareas</h2>
                <div v-for="(tarea, index) in tareas" :key="index"
                    class="d-flex flex-column bd-highlight btn-group form-check "
                    aria-label="Basic checkbox toggle button group">

                    <div class="d-flex flex-row  p-2 bd-highlight">
                        <input type="checkbox" v-model="tarea.completada" :id="'tarea' +
                            index" class="btn-check">
                        <label :for="'tarea' + index" class="btn btn-outline-primary">{{
                            tarea.nombre }}</label>
                        <p v-if="tarea.completada" class="ms-3 mt-1  text-success">¡Tarea
                            completada!</p>
                    </div>

                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import ComponenteHijo from './ComponenteHijo.vue';

const mensajePadre = ref('Hola desde el padre');
const tareas = ref([
    { nombre: 'Tarea 1', completada: false },
    { nombre: 'Tarea 2', completada: false },
    { nombre: 'Tarea 3', completada: false }
]);

const resetearMensaje = () => {
    mensajePadre.value = 'Hola desde el padre';
}
</script>
