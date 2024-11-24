<template>
    <div class="section">
        <h2>Favoritos</h2>
        <ul class="list-group">
            <li v-for="track in tracks" :key="track.id"
                class="list-group-item d-flex justify-content-between align-items-center">
                <p>{{ track.name }} - {{ track.artists[0].name }}</p>
                <audio ref="audioPlayer" controls :src="track.preview_url" class="w-50 mt-3"></audio>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        tracks: Array
    }
};
</script>
