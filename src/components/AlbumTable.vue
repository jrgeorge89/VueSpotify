<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Artista</th>
                <th>Fecha de lanzamiento</th>
                <th>Total de pistas</th>
                <th>Detalles</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="album in albums" :key="album.id">
                <td>{{ album.name }}</td>
                <td>{{ album.artists[0].name }}</td>
                <td>{{ album.release_date }}</td>
                <td>{{ album.total_tracks }}</td>
                <td><a href="#" @click.prevent="$emit('showDetails', 'album', album)">Ver detalles</a></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        albums: Array
    }
};
</script>
