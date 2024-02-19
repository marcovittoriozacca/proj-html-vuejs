<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default{
    name: 'CTA',

    props:['ctaImages'],

    components:{
        Carousel,
        Slide,
        Pagination,
        Navigation,
    }

}
</script>

<template>
    <section id="cta">
        
        <carousel :items-to-show="1" :itemsToScroll="1" :autoplay="8000" :wrap-around="true" class="carousel">
            
            <slide v-for="slide in ctaImages" :key="slide" class="custom-heigth">
                <figure class="m-0">
                    <img :src="`/img/${slide}`" alt="cta-banner-slide" class="img-fluid">
                </figure>
            </slide>

            <template #addons class="position-relative z-2">

                <!-- arrows -->
                <navigation>
                    <!-- right arrows -->
                    <template #next>
                        <span>
                            <i class="fas fa-arrow-right-long"></i>
                        </span>
                    </template>
                    <!-- left arrows -->
                    <template #prev>
                        <span>
                            <i class="fas fa-arrow-left-long"></i>
                        </span>
                    </template>
                </navigation>

                <!-- our team element -->
                <div id="our-team" class="d-flex flex-column align-items-start z-3">
                    <h1>Our Team<span>.</span></h1>
                    <p class="py-3 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat amet, cum iusto eius nam eaque voluptatum</p>
                    <div>
                        <a href="#" class="px-4 py-3 me-4 text-decoration-none text-uppercase bg-white">
                            <span>Read More</span>
                            <i class="fas fa-arrow-right-long"></i>
    
                        </a>
                        <a href="#" class="px-4 py-3 text-decoration-none text-uppercase btn-orange text-white">
                            <span>purchase</span>
                            <i class="fas fa-arrow-right-long"></i>
                        </a>
                    </div>
                    
                </div>

            </template>
        </carousel>

    </section>

</template>

<style lang="scss" scoped>
@use '../../../assets/sass/partials/variables' as *;

.custom-heigth{
    height: 700px;

    
}
    #our-team{
        position: absolute;
        top: 40%;
        left: 15%;
        h1{
            font-size: 3.5rem;
            span{
                color:$orange;
            }
        }
        p{
            max-width: 500px;
            color:#1E1E1E4D;
        }

        a{
            span{
                padding-right: 20px;
                font-weight: 500;
            }
            i{
                border-left: 2px solid black;
                padding: 8px;
            }
            &:hover i{
                border-left: 2px solid white;
            }
        }

        .btn-orange{
            background-color: $orange;            
            i{
                border-left: 2px solid white;

            }
            &:hover i{
                border-left: 2px solid $orange;
            }

        }


    }
</style>