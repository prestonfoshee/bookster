<script setup>

defineProps({
    type: String,
})
</script>


<template>
    <Link
    class="flex items-center justify-center border border-main-orange px-6 py-3 text-sm font-poppins rounded-lg hover:scale-110 transition duration-100"
    :class="{ 'border border-main-orange text-main-orange': type === 'story',
    'bg-main-orange text-main-off-white': type === 'books' }"
    >
        <slot />
    </Link>
</template>
