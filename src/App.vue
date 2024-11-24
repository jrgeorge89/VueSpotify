<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">VUE Spotify</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">Inicio</router-link>
          </li>
        </ul>
        <!-- <ul class="navbar-nav ms-auto mb-2 mb-lg-0" v-if="user">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <img v-if="user.images && user.images[0]" :src="user.images[0].url" alt="Avatar" class="rounded-circle"
                width="30" height="30">
              {{ user.display_name }}
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#" @click="logout">Cerrar sesión</a></li>
            </ul>
          </li>
        </ul> -->
      </div>
    </div>
  </nav>
  <div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['logout'])
  },
  created() {
    this.$store.dispatch('fetchUser');
  }
};
</script>
