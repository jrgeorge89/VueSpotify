<template>
    <ul class="list-group">
        <li v-for="track in tracks" :key="track.id"
            class="list-group-item d-flex justify-content-between align-items-center">
            <div class="track-info w-50">
                <p class="track-name">{{ track.name }}</p>
                <p class="track-artist">{{ track.artists[0].name }}</p>
            </div>
            <audio ref="audioPlayer" controls :src="track.preview_url" class="audio-player w-50"
                @play="onPlay(track.id)"></audio>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        tracks: Array
    },
    data() {
        return {
            currentTrackId: null
        };
    },
    methods: {
        onPlay(trackId) {
            if (this.currentTrackId && this.currentTrackId !== trackId) {
                const previousAudio = this.$refs.audioPlayer.find(audio => audio.src.includes(this.tracks.find(track => track.id === this.currentTrackId).preview_url));
                if (previousAudio) {
                    previousAudio.pause();
                    previousAudio.currentTime = 0;
                }
            }
            this.currentTrackId = trackId;
        }
    }
};
</script>

<style scoped>
.section {
    background-color: #1e1e1e;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
}

.section h2 {
    color: #1db954;
}

.list-group-item {
    background-color: #282828;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
}

.track-info {
    display: flex;
    flex-direction: column;
}

.track-name {
    font-size: 1.1em;
    font-weight: bold;
    color: #ffffff;
}

.track-artist {
    font-size: 0.9em;
    color: #b3b3b3;
}

.audio-player {
    width: 50%;
}
</style>
