<script setup>

defineProps({
    text: String,
})
</script>


<template>
    <Link
    class="flex items-center justify-center border border-main-orange px-4 py-2 max-h-8 text-xs font-poppins rounded"
    :class="{ 'border border-main-orange text-main-orange': text === 'Login',
    'bg-main-orange text-main-off-white': text === 'Sign up' }"
    >
        <slot />
    </Link>
</template>
