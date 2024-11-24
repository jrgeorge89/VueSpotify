<template>
    <div class="table-responsive">
        <table class="table table-dark table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Artist</th>
                    <th>Genres</th>
                    <th>Followers</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(artist, index) in artists" :key="artist.id" @click="$emit('showDetails', 'artist', artist)">
                    <td>{{ index + 1 }}</td>
                    <td>{{ artist.name }}</td>
                    <td>{{ artist.genres.join(', ') }}</td>
                    <td>{{ artist.followers.total.toLocaleString() }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        artists: Array
    }
};
</script>
