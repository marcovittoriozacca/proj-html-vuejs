<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
export default{
    name: 'LatestNews',
    props:['latestNews'],

    components: {
      Carousel,
      Slide,
      Navigation,
    },

    data() {
        return {
            currentSlide: 0,
        }
    },
    methods: {
      next() {
        this.$refs.carousel.next()
      },
      prev() {
        this.$refs.carousel.prev()
      },
    },
}
</script>

<template>

    <div class="py-5 position-relative mb-5">
        <!-- circle img on the left -->
        <img src="/img/svg-4.svg" alt="" class="position-absolute bg-circle">
        <!-- section header with title and description -->
        <div class="text-center py-4 mb-4 section-header">
            <h2>Latest news<span>.</span></h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="container container-lg">
            <!-- carousel with the latest news -->
            <Carousel ref="carousel" v-model="currentSlide" snapAlign="start" :itemsToShow="3" :wrapAround="true" :itemsToScroll="3">
                <Slide v-for="news in latestNews" :key="news" class="px-3 d-flex flex-column align-items-start position-relative">
                    <!-- image -->
                    <figure class="m-0">
                        <img :src="`/img/${news.image}`" alt="" class="img-fluid">
                    </figure>

                    <!-- news info -->
                    <div class="d-flex flex-column align-items-start row-gap-2">
                        <!-- orange label -->
                        <div class="d-flex align-items-center label text-white py-2 px-3 z-3 ">
                            <i class="fas fa-tag me-1"></i>
                            <span>Business, Leading</span>
                        </div>
                        <div class="d-flex align-items-center column-gap-3 text-secondary icons mt-5">
                            <div>
                                <i class="fa-regular fa-clock me-2"></i>{{ news.date }}
                            </div>
                            <div>
                                <i class="fa-regular fa-user me-2"></i>{{ news.author }}
                            </div>
                        </div>
    
                        <h3>{{ news.title }}</h3>
                        <p class="text-start">{{ news.description }}</p>
                        <a :href="news.url" class="text-uppercase">
                        read more</a>
                    </div>
                </Slide>
    
                <template #addons>
                    <!-- left  carousel arrow -->
                    <svg @click="prev" class="arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 25 25"><title>Artboard-35</title><g id="Left-2" data-name="Left"><polygon points="24 12.001 2.914 12.001 8.208 6.706 7.501 5.999 1 12.501 7.5 19.001 8.207 18.294 2.914 13.001 24 13.001 24 12.001" style="fill:black"/></g></svg>

                    <!-- right carousel arrow -->
                    
                    <svg @click="next" class="arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 25 25"><title>Artboard-34</title><g id="Right-2" data-name="Right"><polygon points="17.5 5.999 16.793 6.706 22.086 11.999 1 11.999 1 12.999 22.086 12.999 16.792 18.294 17.499 19.001 24 12.499 17.5 5.999" style="fill:black"/></g></svg>
                </template>
    
            </Carousel>
        </div>
        
    </div>

</template>

<style lang="scss" scoped>
    @use '../../../assets/sass/partials/variables' as *;
    @use '../../../assets/sass/partials/mixins' as *;

    .bg-circle{
        top: -100px;
        left: 0px;
    }

    .section-header{
        width: fit-content;
        margin: 0 auto;
        @include orange-border;  
        &:before{
            transform: translateX(-50%);
        } 
        h2{
            span{
                color:$orange
            }
        }
    }

    .icons{
        font-size: 1rem;
        i{
            color: $orange;
        }
    }
    .label{
        position: absolute;
        background-color: $orange;
        bottom: 39%;
        right: 35px;
        font-weight: 300;
    }
    
    .arrow{
        position: absolute;
        top: 50%;
        transform: translateY(-100%);
        cursor: pointer;
        &:first-of-type{
            left: -50px;
        }
        &:last-of-type{
            right: -50px;
        }
    }

    figure{
        height: 300px;
        overflow: hidden;
        img{
            height: 100%;
            object-fit: cover;
            transition: .2s all ease-in-out;
            &:hover{
                transform: scale(110%);
                cursor: pointer;
            }
        }
    }

    .my-max-w{
        max-width: 1200px;
        margin: 0 auto;
    }

    h3{
        @include orange-hover;
    }
</style>
