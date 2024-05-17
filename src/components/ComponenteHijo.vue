<template>
    <div class="card mt-3">
        <div class="card-body">
            <h5 class="card-title">Componente Hijo</h5>
            <p class="card-text">{{ mensaje }}</p>
            <button class="btn btn-success" v-on:click="emitirEvento">Cambiar
                Mensaje</button>
            <p v-show="mensajeCambiado">El mensaje ha sido cambiado</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['actualizarMensaje']);
const props = defineProps(['mensaje']);

let mensajeCambiado = ref(false);

const emitirEvento = () => {
    mensajeCambiado.value = true;
    emit('actualizarMensaje', 'Nuevo mensaje desde el hijo');
}
</script>