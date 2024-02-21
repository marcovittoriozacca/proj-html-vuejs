<script>
  import { Carousel, Slide } from 'vue3-carousel'
  
    export default{

        name: 'OurStaff',
        props:['staff'],

        components: {
        Carousel,
        Slide,
        },
        data() {
            return {
                currentSlide: 0,
                socials:[
                    {
                        name:'linkedin',
                        url: '#',
                        icon: 'fab fa-linkedin-in'
                    },
                    {
                        name:'facebook',
                        url: '#',
                        icon: 'fab fa-facebook-f'
                    },
                    {
                        name:'twitter',
                        url: '#',
                        icon: 'fab fa-twitter'
                    },
                ]
            }
        },
        methods: {
            next() {
                this.$refs.carousel.next()
            },
            prev() {
                this.$refs.carousel.prev()
            },

        }
    }
</script>

<template>
    <div class="container-fluid mb-5 staff">
        <div class="d-flex align-items-center container container-lg">
            <div class="position-relative">

                <Carousel ref="carousel" v-model="currentSlide" snapAlign="start" :wrapAround="true" :pauseAutoplayOnHover="true" :autoplay="7000" :transition="500" class="carousel-size">
                  <Slide v-for="slide in staff" :key="slide">
                    <div class="carousel__item">
                        <figure class="m-0">
                            <img :src="`./img/${slide.image}`" :alt="slide.name" class="img-fluid">
                        </figure>
                    </div>
                  </Slide>
                </Carousel>
                
              
                <div class="buttons position-absolute">
                    <button id="prev" @click="prev" class="pt-3 ps-4 pb-3 pe-3">
                        <i class="fas fa-arrow-left-long"></i>
                    </button>
                    <button id="next" @click="next" class="pt-3 pe-4 pb-3 ps-3">
                        <i class="fas fa-arrow-right-long"></i>
                    </button>
                </div>
            </div>

            <div class="d-flex">
                <div class="p-5 bg-white staff-info">
                    <div class="pb-2 custom-border">
                        <h3>{{ staff[currentSlide].name }}</h3>
                        <h5 class="text-secondary">{{ staff[currentSlide].role }}</h5>
                    </div>
                    <p class="text-secondary pt-3">{{ staff[currentSlide].description }}</p>
                    <ul class="list-unstyled socials d-flex column-gap-3">
                        <li v-for="(social, index) in socials" :key="index">
                            <a :href="social.url" class="text-white rounded-circle p-1 px-3 d-flex justify-content-center align-items-center text-decoration-none ">
                                <i :class="social.icon"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <img v-if="staff[currentSlide].signature" :src="`/img/${staff[currentSlide].signature}`" :alt="staff[currentSlide].name">
            </div>
        </div>

    </div>

  </template>


<style lang="scss" scoped>
@use '../../../assets/sass/partials/variables' as *;
@use '../../../assets/sass/partials/mixins' as *;
  .staff{
    margin-top: 30px;
    padding-top: 100px;
    background-image: url('/img/svg-4.svg');
    background-repeat: no-repeat;
    background-position: top right;
  }
    button{
        background-color: $orange;
        color: white;
    }
    .buttons{
        bottom: 0;
    }
    .carousel-size{
        width: 550px;
    }
    h3{
        font-size: 2.5rem;
    }
    h5{
        font-weight: 300;
        font-size: .9rem;
    }
    .socials{
        li{
            a{
                width: 15px;
                aspect-ratio: 1;
                background-color: $orange;
                transition: .2s all ease-out;
                &:hover{
                    transform: scale(120%);
                }
            }
        }
    }
    .staff-info{
        position: relative;
        margin-left: -100px;
    }
    .custom-border{
        @include orange-border;
    }
</style>
  
  