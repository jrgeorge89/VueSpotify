<template>
    <div>
        <p v-if="error" class="text-danger">Error: {{ error }}</p>
        <p v-else-if="code">Autenticando...</p>
        <p v-else>Redirigiendo...</p>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { getToken } from '../services/AuthService';

export default {
    data() {
        return {
            code: null,
            error: null
        };
    },
    created() {
        const urlParams = new URLSearchParams(window.location.search);
        this.code = urlParams.get('code');
        this.error = urlParams.get('error');

        if (this.code) {
            this.getToken(this.code);
        }
    },
    methods: {
        ...mapActions(['setToken']),
        async getToken(code) {
            try {
                const data = await getToken(code);
                this.setToken(data.access_token);
                this.$router.push('/search');
            } catch (error) {
                this.error = 'Error al obtener el token: ' + (error.response ? error.response.data.error : error.message);
            }
        }
    }
};
</script>
