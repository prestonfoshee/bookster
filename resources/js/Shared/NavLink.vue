<script setup>

defineProps({
    active: Boolean,
})
</script>

<template>
    <Link
    class="flex justify-center items-center px-4 py-2 hover:text-main-off-white text-base font-poppins transition duration-75 tracking-wider rounded-3xl text-main-blue hover:bg-main-blue hover:scale-110 border border-main-blue"
    :class="{ 'text-main-off-white scale-110 bg-main-blue': active }"
    >
        <slot />
    </Link>
</template>
