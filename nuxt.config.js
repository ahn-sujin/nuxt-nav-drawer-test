const pkg = require('./package')

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
        base: '/navigation-drawer/'
    }
} : {}

export default {
    ...routerBase
}


module.exports = {
    mode: 'spa',

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },

    /*
    ** Global CSS
    */
    css: [
        './assets/scss/style.scss'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
    ],

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {

        }
    }

}
