<script>
import {store} from '../../store'

import OurSpecialties from './mainElements/OurSpecialties.vue'
import OurStaff from './mainElements/OurStaff.vue'
import UpcomingEvents from './mainElements/UpcomingEvents.vue'
import StatsComp from './mainElements/StatsComp.vue'
import LatestNews from './mainElements/LatestNews.vue'
import TestimonialsComp from './mainElements/TestimonialsComp.vue'
import ContactUs from './mainElements/ContactUs.vue'

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
        <div class="container-fluid px-5">
            <OurSpecialties
                :elements="store.specialties"
            />
        </div>
        
            <OurStaff
                :staff="store.ourStaff"
            />

            <UpcomingEvents
                :events="store.events"
            />

            <StatsComp
                :stats="store.stats"
            />

            <LatestNews
                :latest-news="store.latestNews"
            />

            <TestimonialsComp
                :testimonials="store.testimonials"
            />

            <section id="video" class="d-flex align-items-center justify-content-center">
                <i class="fas fa-play"></i>
            </section>

            <ContactUs
                :logos="store.contactUsLogos"
            />
        
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
        }
    }


</style>

