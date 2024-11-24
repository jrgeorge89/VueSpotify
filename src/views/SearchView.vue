<template>
  <div class="container mt-4">
    <h1 class="mb-4">Vue Spotify</h1>
    
    <SearchForm @search="search" v-model="query" />
    
    <div class="section">
      <h2>Pistas</h2>
      <TrackTable :tracks="paginatedTracks" @showDetails="showDetails" />
      <Paginator :currentPage="currentPageTracks" :totalPages="totalPagesTracks" @changePage="changePageTracks" />
    </div>

    <div class="section">
      <h2>Artistas</h2>
      <ArtistTable :artists="paginatedArtists" @showDetails="showDetails" />
      <Paginator :currentPage="currentPageArtists" :totalPages="totalPagesArtists" @changePage="changePageArtists" />
    </div>

    <div class="section">
      <h2>Álbumes</h2>
      <AlbumTable :albums="paginatedAlbums" @showDetails="showDetails" />
      <Paginator :currentPage="currentPageAlbums" :totalPages="totalPagesAlbums" @changePage="changePageAlbums" />
    </div>

    <Favorites :tracks="favoriteTracks" />

    <DetailsModal :modalType="modalType" :modalData="modalData" :modalTitle="modalTitle" :favoriteTracks="favoriteTracks" @toggleFavorite="toggleFavorite" />
  
  </div>
</template>

<script>
import SearchForm from '../components/SearchForm.vue';
import TrackTable from '../components/TrackTable.vue';
import ArtistTable from '../components/ArtistTable.vue';
import AlbumTable from '../components/AlbumTable.vue';
import Paginator from '../components/Paginator.vue';
import Favorites from '../components/Favorites.vue';
import DetailsModal from '../components/DetailsModal.vue';
import { searchItems } from '../services/AuthService';
import * as bootstrap from 'bootstrap';

export default {
  components: {
    SearchForm,
    TrackTable,
    ArtistTable,
    AlbumTable,
    Paginator,
    Favorites,
    DetailsModal
  },
  data() {
    return {
      query: '',
      tracks: [],
      artists: [],
      albums: [],
      favoriteTracks: [],
      currentPageTracks: 1,
      currentPageArtists: 1,
      currentPageAlbums: 1,
      itemsPerPage: 4,
      modalType: '',
      modalData: {},
      modalTitle: ''
    };
  },
  computed: {
    paginatedTracks() {
      return this.paginate(this.tracks, this.currentPageTracks);
    },
    paginatedArtists() {
      return this.paginate(this.artists, this.currentPageArtists);
    },
    paginatedAlbums() {
      return this.paginate(this.albums, this.currentPageAlbums);
    },
    totalPagesTracks() {
      return Math.ceil(this.tracks.length / this.itemsPerPage);
    },
    totalPagesArtists() {
      return Math.ceil(this.artists.length / this.itemsPerPage);
    },
    totalPagesAlbums() {
      return Math.ceil(this.albums.length / this.itemsPerPage);
    }
  },
  methods: {
    async search() {
      // const token = this.$store.state.accessToken;
      const token = localStorage.getItem('access_token')
      const response = await searchItems(this.query, token);

      this.tracks = response.data.tracks.items;
      this.artists = response.data.artists.items;
      this.albums = response.data.albums.items;
    },
    paginate(items, currentPage) {
      const start = (currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return items.slice(start, end);
    },
    showDetails(type, item) {
      this.modalType = type;
      this.modalData = item;
      this.modalTitle = ' Detalle del ' + type.charAt(0).toUpperCase() + type.slice(1);
      const modal = new bootstrap.Modal(document.getElementById('detailsModal'));
      modal.show();
    },
    toggleFavorite(track) {
      const index = this.favoriteTracks.findIndex(fav => fav.id === track.id);
      if (index === -1) {
        this.favoriteTracks.push(track);
      } else {
        this.favoriteTracks.splice(index, 1);
      }
    },
    changePageTracks(page) {
      this.currentPageTracks = page;
    },
    changePageArtists(page) {
      this.currentPageArtists = page;
    },
    changePageAlbums(page) {
      this.currentPageAlbums = page;
    },
  },
  mounted() {
  }
};
</script>

<style>
.container {
  background-color: #caf5a8;
}
.section {
  margin-bottom: 2rem;
}
.table {
  background-color: #1e1e1e;
}
a {
  color: #1db954;
}
</style>
