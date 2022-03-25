<script setup>

defineProps({
    active: Boolean,
})
</script>

<template>
    <Link
    class="text-main-blue font-poppins uppercase hover:underline"
    :class="{ 'font-bold underline': active }"
    >
        <slot />
    </Link>
</template>
