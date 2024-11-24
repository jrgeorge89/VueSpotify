<template>
    <nav>
        <ul class="pagination">
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
