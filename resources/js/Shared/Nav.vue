<script setup>
import NavLink from '../Shared/NavLink.vue'

</script>

<template>
    <nav class="hidden lg:block">
        <ul class="flex space-x-10 justify-center items-center">
            <li>
                <NavLink href="/" :active="$page.component ==='Home'">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink href="/library" :active="$page.component === 'Library'">
                    Library
                </NavLink>
            </li>
            <li>
                <NavLink href="/stories" :active="$page.component ==='Stories/Index'">
                    Stories
                </NavLink>
            </li>
        </ul>
    </nav>
</template>
