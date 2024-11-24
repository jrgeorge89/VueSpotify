<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Género</th>
                <th>Seguidores</th>
                <th>Popularidad</th>
                <th>Detalles</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="artist in artists" :key="artist.id">
                <td>{{ artist.name }}</td>
                <td>{{ artist.genres[0] }}</td>
                <td>{{ artist.followers.total }}</td>
                <td>{{ artist.popularity }}</td>
                <td><a href="#" @click.prevent="$emit('showDetails', 'artist', artist)">Ver detalles</a></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        artists: Array
    }
};
</script>
