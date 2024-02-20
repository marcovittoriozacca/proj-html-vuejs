<script>
import { Carousel, Slide, Navigation } from 'vue3-carousel'
export default{
    name: 'TestimonialsComp',
    props:['testimonials'],

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
      }
    },

}
</script>

<template>

    <div class="testimonials position-relative">
        <div class="my-pagination d-flex align-items-center column-gap-2 text-secondary">
            <span>0{{ currentSlide + 1}}</span>
            <div class="progress-bar rounded-pill">
                <div class="inner-progress-bar rounded-pill" :style="{ 'width': ((currentSlide + 1) / testimonials.length) * 100 + '%'  }" ></div>
            </div>
            <span v-if="testimonials.length < 10">0{{ testimonials.length }}</span>
            <span v-else>{{ testimonials.length }}</span>
        </div>

        <Carousel ref="carousel" v-model="currentSlide" snapAlign="start" :wrapAround="true" :autoplay="5000" :transition="500" :pauseAutoplayOnHover="true" class="position-relative z-2 my-max-w">
            <Slide v-for="testimonial in testimonials" :key="testimonial" class="text-white">
                <div class="d-flex flex-column testimonial-info row-gap-4">
                    <figure class="m-0">
                        <img :src="`/img/${testimonial.image}`" :alt="testimonial.name" class="img-fluid rounded-circle ">
                    </figure>
                    <h4 class="text-capitalize">{{ testimonial.name }}</h4>
                    <q class="opacity-75">
                        {{ testimonial.description }}
                    </q>

                </div>   
            </Slide>
  
            <template #addons>
                
                <Navigation>

                    <!-- right arrow -->
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

                </Navigation>
            </template>
        </Carousel>
    </div>

</template>

<style lang="scss" scoped>
@use '../../../assets/sass/partials/variables' as *;
    .testimonials{
        background-color: #1f1c1cff;
        &:after { 
            content: 'Testimonials.';
            font-size: 10rem;
            font-family: $custom-font;
            line-height: 1;
            position: absolute; 
            color: #171515ff; 
            top: 0;
            left: 50%;
            transform: translateX(-50%); 
            z-index: 1; 
        }
        i{
            color: white;
        }
        .testimonial-info{
            padding-block: 120px;
            max-width: 50%;
            margin: 0 auto;
            figure{
                img{
                    border: 3px solid white;
                    background-color: white;
                }
            }
            h4{
                font-size: 1.1rem;
            }
            

        }
        .my-pagination{
                margin: 0 auto;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translateX(-50%);
                .progress-bar{
                    width: 120px;
                    height: 1.5px;
                    background-color: #4a4848ff;
                    .inner-progress-bar{
                        background-color: #fafafaff;
                        height: 1.5px;
                    }
                }
            }
    }

.my-max-w{
    max-width: 1400px;
    margin: 0 auto;
}
</style>

