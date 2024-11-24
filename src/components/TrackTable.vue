<template>
    <div class="table-responsive">
        <table class="table table-dark table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Track</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(track, index) in tracks" :key="track.id" @click="$emit('showDetails', 'track', track)">
                    <td>{{ index + 1 }}</td>
                    <td>{{ track.name }}</td>
                    <td>{{ track.artists[0].name }}</td>
                    <td>{{ track.album.name }}</td>
                    <td>{{ formatDuration(track.duration_ms) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        tracks: Array
    },
    methods: {
        formatDuration(ms) {
            const minutes = Math.floor(ms / 60000);
            const seconds = ((ms % 60000) / 1000).toFixed(0);
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    }
};
</script>
