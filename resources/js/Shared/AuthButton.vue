<script setup>

defineProps({
    text: String,
})
</script>


<template>
    <Link
    class="flex items-center justify-center border-2 border-main-blue px-4 py-2 text-sm font-poppins rounded whitespace-nowrap hover:scale-105 transition duration-100"
    :class="{ 'border border-main-blue text-main-blue': text === 'Login',
    'bg-main-blue text-main-off-white': text === 'Sign up' }"
    >
        <slot />
    </Link>
</template>
