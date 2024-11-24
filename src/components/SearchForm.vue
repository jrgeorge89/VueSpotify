<template>
    <form @submit.prevent="$emit('search')">
        <div class="input-group mb-3 search-form">
            <input v-model="query" type="text" class="form-control search-input"
                placeholder="Buscar canción, artista o álbum" />
            <button type="submit" class="btn btn-primary search-button">Buscar</button>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        modelValue: String
    },
    computed: {
        query: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        }
    }
};
</script>

<style scoped>
.search-form {
    background-color: #1e1e1e;
    border-radius: 10px;
    padding: 10px;
}

.search-input {
    background-color: #282828;
    border: none;
    color: #ffffff;
    border-radius: 5px 0 0 5px;
}

.search-input::placeholder {
    color: #b3b3b3;
}

.search-button {
    background-color: #1db954;
    border: none;
    color: #ffffff;
    border-radius: 0 5px 5px 0;
}

.search-button:hover {
    background-color: #1ed760;
}
</style>
