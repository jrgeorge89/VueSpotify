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
        backgroundSize: 'cover',
        position: 'relative',
        zIndex: 1
      }
    };
  },
  methods: {
    loginWithSpotify
  }
};
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 0;
}

.d-flex {
  display: flex;
}

.justify-content-center {
  justify-content: center;
}

.align-items-center {
  align-items: center;
}

.vh-100 {
  height: 100vh;
}
</style>