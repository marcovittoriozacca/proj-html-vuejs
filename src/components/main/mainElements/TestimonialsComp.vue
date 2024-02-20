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

    <div class="testimonials">

        <Carousel ref="carousel" v-model="currentSlide" snapAlign="start" :wrapAround="true">
            <Slide v-for="testimonial in testimonials" :key="testimonial" class="text-white">
                <div class="d-flex flex-column testimonial-info row-gap-4">
                    <figure class="m-0">
                        <img :src="`/img/${testimonial.image}`" :alt="testimonial.name" class="img-fluid rounded-circle ">
                    </figure>
                    <h4 class="text-capitalize">{{ testimonial.name }}</h4>
                    <q class="opacity-75">
                        {{ testimonial.description }}
                    </q>
                    <div class="my-pagination d-flex align-items-center column-gap-2">
                        <span>{{ currentSlide + 1}}</span>
                        <div class="progress-bar rounded-pill">
                            <div class="inner-progress-bar rounded-pill" :style="{ 'width': ((currentSlide + 1) / testimonials.length) * 100 + '%'  }" ></div>
                        </div>
                        <span>{{ testimonials.length }}</span>
                    </div>
                </div>   
            </Slide>
  
            <template #addons>
                
                <Navigation>

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
    .testimonials{
        background-color: #1f1c1cff;
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
            .my-pagination{
                margin: 0 auto;
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
    }
</style>

