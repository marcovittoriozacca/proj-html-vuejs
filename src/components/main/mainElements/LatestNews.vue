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
        <img src="/img/svg-4.svg" alt="" class="position-absolute bg-circle">
        
        <div class="text-center py-4 mb-4 section-header">
            <h2>Latest news<span>.</span></h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="container container-lg">
            <Carousel ref="carousel" v-model="currentSlide" snapAlign="start" :itemsToShow="3" :wrapAround="true" :itemsToScroll="3">
                <Slide v-for="news in latestNews" :key="news" class="px-3 d-flex flex-column align-items-start">
                    <figure class="m-0 position-relative">
                        <img :src="`/img/${news.image}`" alt="" class="img-fluid">
                        <div class="d-flex align-items-center label text-white py-2 px-3">
                            <i class="fas fa-tag me-1"></i>
                            <span>Business, Leading</span>
                        </div>
                    </figure>
                    <div class="d-flex flex-column align-items-start row-gap-2">
    
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
    
                <template #addons class="position-relative">
                    
                    
                        <i @click="prev" class="fa fa-arrow-left-long arrow"></i>
                    
            
                    
                        <i @click="next" class="fa fa-arrow-right-long arrow"></i>
                    
    
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
        bottom: -15px;
        right: 15px;
        font-weight: 300;
    }
    
    .arrow{
        position: absolute;
        top: 50%;
        transform: translateY(-100%);
        cursor: pointer;
        font-size: 2rem;
        &:first-of-type{
            left: -50px;
        }
        &:last-of-type{
            right: -50px;
        }
    }
    figure{
        height: 100%;
        img{
            height: 100%;
            object-fit: cover;
        }
    }

    .my-max-w{
        max-width: 1200px;
        margin: 0 auto;
    }
</style>
