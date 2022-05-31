<template>
    <div class="app-container">
        <Header/>
        <SideNav/>
        <div class="app-content">
            <nuxt />
        </div>
        <Footer/>
    </div>
</template>

<script>
    import Header from '~/components/Header'
    import Footer from '~/components/Footer'
    import SideNav from '~/components/SideNav'

    export default {
        components: {
            Header,
            SideNav,
            Footer
        },
        computed: {
            isSidebar() {
                return this.$store.getters['nav/toggleSidebar']
            }
        },
        watch: {
            '$route': function() {
                if (process.client && this.isSidebar && window.innerWidth < 768) {
                    this.$store.dispatch('nav/toggleSidebar')
                }
            },
        }
    }
</script>

<style>
</style>
