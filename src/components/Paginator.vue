<template>
    <nav>
        <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link" href="#" @click.prevent="$emit('changePage', currentPage - 1)">Previa</a>
            </li>
            <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
                <a class="page-link" href="#" @click.prevent="$emit('changePage', page)">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <a class="page-link" href="#" @click.prevent="$emit('changePage', currentPage + 1)">Próximo</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        currentPage: Number,
        totalPages: Number
    }
};
</script>

<style scoped>
.pagination {
    background-color: #1e1e1e;
    border-radius: 10px;
    padding: 10px;
}

.page-item {
    margin: 0 5px;
}

.page-link {
    color: #ffffff;
    background-color: #282828;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
}

.page-link:hover {
    background-color: #333333;
}

.page-item.active .page-link {
    background-color: #1db954;
    border-color: #1db954;
}

.page-item.disabled .page-link {
    background-color: #555555;
    cursor: not-allowed;
}
</style>
