<script>
import NavBar from './headerElements/NavBar.vue'
import CTA from './headerElements/CTA.vue'

export default {
    name: 'AppHeader',

    components:{
        NavBar,
        CTA,
    },

    data() {
        return {
            navLinks: [
                {
                    name: 'homes',
                    url: '#',
                    active: true,
                },
                {
                    name: 'pages',
                    url: '#',
                    active: false,
                },
                {
                    name: 'blog',
                    url: '#',
                    active: false,
                },
                {
                    name: 'shop',
                    url: '#',
                    active: false,
                },
                {
                    name: 'events',
                    url: '#events',
                    active: false,
                },
                {
                    name: 'elements',
                    url: '#',
                    active: false,
                },
            ],
            ctaElements: ['h1-rev-img-01.jpg','rev-slider-main-home-img-02.png','rev-slider-main-home-img-03.jpg']
        }
    },
    
}
</script>

<template>

    <header class="position-relative">
        <NavBar
            :links="navLinks"
        />
        <CTA
            :cta-images="ctaElements"
        />

    </header>

</template>


<style lang="scss" scoped>
    header{
        z-index: 1;
    }
</style>