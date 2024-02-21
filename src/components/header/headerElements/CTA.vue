<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide,  Navigation } from 'vue3-carousel';
export default{
    name: 'CTA',

    props:['ctaImages'],

    components:{
        Carousel,
        Slide,
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 25 25"><g id="Right-2" data-name="Right"><polygon points="17.5 5.999 16.793 6.706 22.086 11.999 1 11.999 1 12.999 22.086 12.999 16.792 18.294 17.499 19.001 24 12.499 17.5 5.999" style="fill:black"/></g></svg>
                        </span>
                    </template>
                    <!-- left arrows -->
                    <template #prev>
                        <span>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 25 25"><g id="Left-2" data-name="Left"><polygon points="24 12.001 2.914 12.001 8.208 6.706 7.501 5.999 1 12.501 7.5 19.001 8.207 18.294 2.914 13.001 24 13.001 24 12.001" style="fill:black"/></g></svg>
                        </span>
                    </template>
                </navigation>

                <!-- our team element -->
                <div id="our-team" class="d-flex flex-column align-items-start z-3">
                    <h1>Our Team<span>.</span></h1>
                    <p class="py-3 text-start text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat amet, cum iusto eius nam eaque voluptatum</p>
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

    @media screen and (max-width: 1240px) {
        .custom-heigth{
            height: 500px;
        }


        #our-team{
            top: 30%;
            left: 10%
        }
    }
    @media screen and (max-width: 890px) {
        
        figure{
            height: 100%;
            img{
                height: 100%;
            }
        }

        #our-team{
            top: 30%;
            left: 10%;

            h1{
                font-size: 3rem;
            }
            p{
                max-width: 400px;
            }

            a{
                span{
                    padding-right: 10px;
                    font-weight: 500;
                }
                i{
                    border-left: 2px solid black;
                    padding: 3px;
                }
                &:hover i{
                    border-left: 2px solid white;
                }
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