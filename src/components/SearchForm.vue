<template>
    <form @submit.prevent="$emit('search')">
        <div class="input-group mb-3">
            <input v-model="query" type="text" class="form-control" placeholder="Buscar canción, artista o álbum" />
            <button type="submit" class="btn btn-secondary">Buscar</button>
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
