<script setup>
import StoriesAndLibrariesLogo from "../../Shared/StoriesAndLibrariesLogo.vue";
import StoriesAndLibrariesCard from "../../Shared/StoriesAndLibrariesCard.vue";

</script>

<template>
    <main class="flex flex-col items-center gap-y-16 lg:flex-row lg:justify-around lg:gap-y-0 lg:gap-x-14">
        <div class="flex flex-col items-center gap-y-5">
            <h1 class="text-main-off-white text-6xl text-center font-bold font-poppins">Stories + Libraries</h1>
            <stories-and-libraries-logo />
        </div>
        <div class="flex flex-col gap-y-10 md:gap-x-10 md:flex-row xl:gap-x-16">
            <stories-and-libraries-card :type="'stories'" />
            <stories-and-libraries-card :type="'libraries'" />
        </div>
    </main>
</template>
