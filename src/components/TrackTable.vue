<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Artista</th>
                <th>Álbum</th>
                <th>Duración</th>
                <th>Detalles</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="track in tracks" :key="track.id">
                <td>{{ track.name }}</td>
                <td>{{ track.artists[0].name }}</td>
                <td>{{ track.album.name }}</td>
                <td>{{ track.duration_ms }}</td>
                <td><a href="#" @click.prevent="$emit('showDetails', 'track', track)">Ver detalles</a></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        tracks: Array
    }
};
</script>
