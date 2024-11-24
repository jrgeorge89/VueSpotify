<template>
  <div class="d-flex justify-content-center align-items-center vh-100" :style="backgroundStyle">
    <LoginCard @login="loginWithSpotify" />
  </div>
</template>

<script>
import LoginCard from '../components/LoginCard.vue';
import { loginWithSpotify } from '../services/AuthService';
import fondoImage from '../assets/fondo.jpg';

export default {
  components: {
    LoginCard
  },
  data() {
    return {
      backgroundStyle: {
        backgroundImage: `url(${fondoImage})`,
        backgroundSize: 'cover'
      }
    };
  },
  methods: {
    loginWithSpotify
  }
};
</script>
