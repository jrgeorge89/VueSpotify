<template>
    <div class="text-center text-white">
        <h1>Bienvenido a Nuestra Plataforma de Música</h1>
        <p>Inicia sesión para disfrutar de tu música favorita</p>
        <button class="btn btn-info btn-lg" @click="$emit('login')">Iniciar Sesión</button>
    </div>
</template>

<script>
export default {
    name: 'LoginCard'
};
</script>
