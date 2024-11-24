<template>
    <div class="login-card text-center text-white">
        <h1>Bienvenido a Nuestra Plataforma de Música</h1>
        <p>Inicia sesión para disfrutar de tu música favorita</p>
        <button class="btn btn-primary btn-lg" @click="$emit('login')">Iniciar Sesión</button>
    </div>
</template>

<script>
export default {
    name: 'LoginCard'
};
</script>

<style scoped>
.login-card {
    background-color: rgba(30, 30, 30, 0.5); /* Color negro con 50% de transparencia */
    padding: 50px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.login-card h1 {
    color: #1db954;
    font-size: 2.5em;
    margin-bottom: 20px;
}

.login-card p {
    color: #e4e4e4;
    font-size: 1.2em;
    margin-bottom: 30px;
}

.btn-primary {
    background-color: #1db954;
    border-color: #1db954;
}

.btn-primary:hover {
    background-color: #1ed760;
    border-color: #1ed760;
}
</style>
