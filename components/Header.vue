<template>
    <header>

        <div class="brand-name logo">
            <nuxt-link to="/">로고이미지</nuxt-link>
        </div>

        <div
            class="drawer-toggle"
            role="button"
            @click="$store.dispatch('nav/toggleSidebar')">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>

        <div class="app-links">
            <app-links></app-links>
        </div>

    </header>
</template>

<script>
    import AppLinks from '~/components/AppLinks'

    export default {components: {
            AppLinks
        }}
</script>

<style scoped="scoped">
</style>