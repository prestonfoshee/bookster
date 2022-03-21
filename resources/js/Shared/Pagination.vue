<script setup>
defineProps({ links: Array })

</script>


<template>
    <div>
        <Component
        :is="link.url ? 'Link' : 'span'"
        v-for="link in links"
        :key="link.id"
        :href="link.url"
        v-html="link.label"
        class="px-1"
        :class="{ 'text-gray-500 hover:cursor-not-allowed': ! link.url, 'font-bold': link.active }"
        />
        <Link />
    </div>
</template>
