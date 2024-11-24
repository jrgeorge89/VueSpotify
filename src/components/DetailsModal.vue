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
                        <img :src="modalData.album.images[0].url" alt="Track Image" class="img-fluid me-3 track-image">
                        <div>
                            <h5>{{ modalData.name }}</h5>
                            <p>Artista: {{ modalData.artists[0].name }}</p>
                            <p>Álbum: {{ modalData.album.name }}</p>
                            <p>Duración: {{ formatDuration(modalData.duration_ms) }}</p>
                        </div>
                    </div>
                    <div v-if="modalType === 'track'">
                        <audio ref="audioPlayer" controls :src="modalData.preview_url"
                            class="w-100 mt-3 audio-player"></audio>
                        <button class="btn btn-primary mt-3" @click="$emit('toggleFavorite', modalData)">Añadir a
                            favoritos</button>
                    </div>
                    <div v-if="modalType === 'artist'" class="d-flex">
                        <img :src="modalData.images[0].url" alt="Artist Image" class="img-fluid me-3 artist-image">
                        <div>
                            <h5>{{ modalData.name }}</h5>
                            <p>Géneros: {{ modalData.genres.join(', ') }}</p>
                            <p>Seguidores: {{ modalData.followers.total.toLocaleString() }}</p>
                            <p>Popularidad: {{ modalData.popularity }}</p>
                        </div>
                    </div>
                    <div v-if="modalType === 'album'" class="d-flex">
                        <img :src="modalData.images[0].url" alt="Album Image" class="img-fluid me-3 album-image">
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

<style scoped>
.modal-content {
    background-color: #1e1e1e;
    color: #ffffff;
    border-radius: 10px;
}

.modal-header {
    border-bottom: 1px solid #333333;
}

.modal-title {
    color: #1db954;
}

.track-image,
.artist-image,
.album-image {
    max-height: 200px;
    max-width: 200px;
    border-radius: 10px;
}

.audio-player {
    background-color: #282828;
    border-radius: 5px;
}

.btn-primary {
    background-color: #1db954;
    border-color: #1db954;
}

.btn-primary:hover {
    background-color: #1ed760;
    border-color: #1ed760;
}

.btn-secondary {
    background-color: #555555;
    border-color: #555555;
}

.btn-secondary:hover {
    background-color: #666666;
    border-color: #666666;
}
</style>
