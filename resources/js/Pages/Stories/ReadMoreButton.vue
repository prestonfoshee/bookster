<template>
    <Link :href="'/stories/' + slug" class="flex justify-center items-center bg-main-orange text-main-off-white text-base font-poppins rounded-3xl px-4 py-2">Read more</Link>
</template>

<script setup>
defineProps({
    slug: String
})

</script>
