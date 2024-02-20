<script>
import {store} from '../../store'

import OurSpecialties from './mainElements/OurSpecialties.vue'
import OurStaff from './mainElements/OurStaff.vue'
import UpcomingEvents from './mainElements/UpcomingEvents.vue'
import StatsComp from './mainElements/StatsComp.vue'
import LatestNews from './mainElements/LatestNews.vue'
import TestimonialsComp from './mainElements/TestimonialsComp.vue'
import ContactUs from './mainElements/ContactUs.vue'
import ArrowUpBtn from '../generalComponents/ArrowUpBtn.vue'

export default{
    name: 'AppMain',

    components:{
        OurSpecialties,
        OurStaff,
        UpcomingEvents,
        StatsComp,
        LatestNews,
        TestimonialsComp,
        ContactUs,
        ArrowUpBtn,
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <main>
        <!-- specialties section -->
        <section id="specialties" class="position-relative">
            <div class="container-fluid px-5">
                <OurSpecialties
                    :elements="store.specialties"
                />
            </div>
            <div class="position-absolute arrow rounded-circle shadow-lg ">
                    <ArrowUpBtn/>
            </div>
        </section>
            <!-- our staff section -->
            <section id="our-staff" class="position-relative">
                <OurStaff
                    :staff="store.ourStaff"
                />
                <div class="position-absolute arrow rounded-circle shadow-lg ">
                    <ArrowUpBtn/>
                </div>
            </section>

            <!-- upcoming events -->
            <section id="upcoming-events" class="position-relative">
                <UpcomingEvents
                    :events="store.events"
                />
                <div class="position-absolute arrow rounded-circle shadow-lg ">
                    <ArrowUpBtn/>
                </div>
            </section>
            <!-- stats section -->
            <section id="stats" class="position-relative">
                <StatsComp
                    :stats="store.stats"
                />
                <div class="position-absolute arrow rounded-circle shadow-lg ">
                    <ArrowUpBtn/>
                </div>
            </section>
            
            <!-- latest news section -->
            <section id="latest-news" class="position-relative">
                <LatestNews
                    :latest-news="store.latestNews"
                />
                <div class="position-absolute arrow rounded-circle shadow-lg ">
                    <ArrowUpBtn/>
                </div>
            </section>

            <!-- testimonials section -->
            <section id="testimonials" class="position-relative">
                <TestimonialsComp
                    :testimonials="store.testimonials"
                />
                <div class="position-absolute arrow rounded-circle shadow-lg ">
                    <ArrowUpBtn/>
                </div>
            </section>

            <!-- video section -->
            <section id="video" class="position-relative">
                <div class="h-100 d-flex align-items-center justify-content-center">
                    <i class="fas fa-play"></i>
                </div>
                <div class="position-absolute arrow-1 rounded-circle shadow-lg ">
                    <ArrowUpBtn/>
                </div>
                <div class="position-absolute arrow-2 rounded-circle shadow-lg ">
                    <ArrowUpBtn/>
                </div>
                <div class="circle-icon p-2 position-absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87 87" style="height:30px" fill="white"><path d="M55.4 81.5c6.1-11.1 5.2-16.1-4.3-24.3 6.1-3.5 9.5-8.5 9.1-15.7-.5-8.2-7.7-14.7-16.3-14.6-8.5.1-15.6 6.7-15.9 15-.3 8.5 5.9 15.8 14.3 16.6 1.4.1 2.8.2 4.2.5 5.9 1.2 10.2 6.7 9.8 12.6-.4 6.4-5.5 11.4-11.8 11.7-19.6.9-38.6-14.8-41.3-34C-.1 26.9 14.4 6.8 36.4 2.8c22.3-4 43.4 10 48.1 32 4.3 20-8.6 41.2-28.4 46.7h-.7z"/></svg>
                </div>
                <div class="shopping-icon p-2 position-absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height:30px" fill="#ee2852"><circle cx="9" cy="21" r="2"/><circle cx="20" cy="21" r="2"/><path d="M23.8 5.4c-.2-.3-.5-.4-.8-.4H6.8L6 .8C5.9.3 5.5 0 5 0H1C.4 0 0 .4 0 1s.4 1 1 1h3.2L5 6.2v.1l1.7 8.3C7 16 8.2 17 9.6 17H19.4c1.5 0 2.7-1 3-2.4L24 6.2c0-.3 0-.6-.2-.8z"/></svg>
                </div>
            </section>

            <!-- contact us section -->
            <section id="contact-us" class="position-relative">
                <ContactUs
                    :logos="store.contactUsLogos"
                />
                <div class="position-absolute arrow rounded-circle shadow-lg ">
                    <ArrowUpBtn/>
                </div>
            </section>
        
    </main>

</template>

<style lang="scss" scoped>
@use '../../assets/sass/partials/mixins' as *;
    main{
        position: relative;
        z-index: 999;
        margin-top: -80px;

        #video{
            height: 80lvh;
            background-image: url('/img/h1-img-04.jpg');
            @include background-reset;
            i{
                color: white;
                font-size: 5rem;
                transition: .1s all linear;
                &:hover{
                    font-size: 5.3em;
                    cursor: pointer;
                    // box-shadow: 0 0 10px 5px black;
                    filter: drop-shadow(0 0 10px black);
                }
            }
            .arrow-1{
                top: 23%;
                right: 20px;
            }
            .arrow-2{
                bottom: -14px;
                right: 20px;
            }
            .circle-icon{
                background-color: #ee2852;
                top: -25px;
                right: 0;
            }
            .shopping-icon{
                background-color: white;
                top: 40px;
                right: 0;
            }
        }

        #contact-us{
            .arrow{
                bottom: 0;
                right: 20px;
            }
        }
        #testimonials{
            .arrow{
                top: 18%;
                right: 20px;
            }
        }
        #latest-news{
            .arrow{
                top: 35%;
                right: 20px;
            }
        }
        #stats{
            .arrow{
                top: 32%;
                right: 20px;
            }
        }
        #upcoming-events{
            .arrow{
                top: 50%;
                right: 20px;
            }
        }
        #our-staff{
            .arrow{
                bottom: 0;
                right: 20px;
            }
        }
        #specialties{
            .arrow{
                bottom: -20px;
                right: 20px;
            }
        }

    }


</style>

