<template>
    <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/services">Services</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/contact">Contact</nuxt-link></li>
    </ul>
</template>

<style scoped>
    .nav-list {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
    }

    .nav-item {
        margin: 0 10px;
    }

    .nav-item a {
        text-decoration: none;
        color: #fff;
    }

    .nav-item a:hover,
    .nav-item a:active{
        color: #b4b4b4;
    }

    @media (max-width: 767px) {
        .nav-list {
            display: block;
        }
        .nav-item{
            margin: 10px 0 10px 0;
            background: #fff;
            padding: 16px 10px;
            box-shadow: 0px 2px 8px rgb(0 0 0 / 5%);
        }
        .nav-item a {
            color: rgb(106, 76, 212);
            display: flex;
        }
    }

    @media (min-width: 768px) {
        .nav-list {
            display: flex;
        }
    }
</style>