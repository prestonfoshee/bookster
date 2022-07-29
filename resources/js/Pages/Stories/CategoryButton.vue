<template>
    <Link
        class="flex justify-center items-center text-base font-poppins font-light border rounded-xl py-2 px-3"
        v-text="category.name"
        :href="'/categories/' + category.slug"
    >
    </Link>

    <!-- :class="{'border-purple-500 text-purple-500' : category === 'Sci-Fi' , 'border-emerald-600 text-emerald-600' : category === 'Fantasy' }" -->
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
    category: Object,
})

// onMounted(() => {
//     console.log(props.category)
// })

</script>
