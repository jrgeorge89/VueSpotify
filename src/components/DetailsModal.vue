<template>
    <div class="modal fade" id="detailsModal" tabindex="-1" aria-labelledby="detailsModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="detailsModalLabel">{{ modalTitle }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div v-if="modalType === 'track'" class="d-flex">
                        <img :src="modalData.album.images[0].url" alt="Track Image" class="img-fluid me-3"
                            style="max-height: 200px; max-width: 200px;">
                        <div>
                            <h5>{{ modalData.name }}</h5>
                            <p>Artista: {{ modalData.artists[0].name }}</p>
                            <p>Álbum: {{ modalData.album.name }}</p>
                            <p>Duración: {{ formatDuration(modalData.duration_ms) }}</p>
                        </div>
                    </div>
                    <div v-if="modalType === 'track'">
                        <audio ref="audioPlayer" controls :src="modalData.preview_url" class="w-100 mt-3"></audio>
                        <button class="btn btn-primary mt-3" @click="$emit('toggleFavorite', modalData)">Añadir a
                            favoritos</button>
                    </div>
                    <div v-if="modalType === 'artist'" class="d-flex">
                        <img :src="modalData.images[0].url" alt="Artist Image" class="img-fluid me-3"
                            style="max-height: 200px; max-width: 200px;">
                        <div>
                            <h5>{{ modalData.name }}</h5>
                            <p>Géneros: {{ modalData.genres.join(', ') }}</p>
                            <p>Seguidores: {{ modalData.followers.total.toLocaleString() }}</p>
                            <p>Popularidad: {{ modalData.popularity }}</p>
                        </div>
                    </div>
                    <div v-if="modalType === 'album'" class="d-flex">
                        <img :src="modalData.images[0].url" alt="Album Image" class="img-fluid me-3"
                            style="max-height: 200px; max-width: 200px;">
                        <div>
                            <h5>{{ modalData.name }}</h5>
                            <p>Artista: {{ modalData.artists[0].name }}</p>
                            <p>Fecha de lanzamiento: {{ modalData.release_date }}</p>
                            <p>Total de pistas: {{ modalData.total_tracks }}</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        modalType: String,
        modalData: Object,
        modalTitle: String,
        favoriteTracks: Array
    },
    mounted() {
        const modalElement = document.getElementById('detailsModal');
        modalElement.addEventListener('hidden.bs.modal', this.pauseAudio);
    },
    beforeUnmount() {
        const modalElement = document.getElementById('detailsModal');
        modalElement.removeEventListener('hidden.bs.modal', this.pauseAudio);
    },
    methods: {
        formatDuration(ms) {
            const minutes = Math.floor(ms / 60000);
            const seconds = ((ms % 60000) / 1000).toFixed(0);
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        },
        pauseAudio() {
            const audio = this.$refs.audioPlayer;
            if (audio) {
                audio.pause();
            }
        }
    }
};
</script>
