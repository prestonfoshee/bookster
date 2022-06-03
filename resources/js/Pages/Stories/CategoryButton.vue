<template>
    <button
    class="flex justify-center items-center text-base font-poppins font-light border rounded-xl py-2 px-3"
    :class="{'border-purple-500 text-purple-500' : category === 'Sci-Fi' , 'border-emerald-600 text-emerald-600' : category === 'Fantasy' }"
    v-text="category">
    </button>
</template>

<script setup>
const props = defineProps({
    category: String,
})
</script>
