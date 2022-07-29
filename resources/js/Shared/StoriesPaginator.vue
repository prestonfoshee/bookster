<template>
    <main>
        <Component
            :is="link.url ? 'Link' : 'span'"
            v-for="link in stories.links"
            :key="link.id"
            :href="link.url"
            v-html="link.label"
            class="px-1"
            :class="link.url ? '' : 'text-gray-500'"
        />
    </main>
</template>

<script setup>
import ref from 'vue'

defineProps({
    stories: Object
})

</script>
