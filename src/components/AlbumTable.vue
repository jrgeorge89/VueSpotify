<template>
    <div class="table-responsive">
        <table class="table table-dark table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Album</th>
                    <th>Artist</th>
                    <th>Release Date</th>
                    <th>Total Tracks</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(album, index) in albums" :key="album.id" @click="$emit('showDetails', 'album', album)">
                    <td>{{ index + 1 }}</td>
                    <td>{{ album.name }}</td>
                    <td>{{ album.artists[0].name }}</td>
                    <td>{{ album.release_date }}</td>
                    <td>{{ album.total_tracks }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        albums: Array
    }
};
</script>
