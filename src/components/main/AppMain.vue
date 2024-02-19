<script>
import {store} from '../../store'

import OurSpecialties from './mainElements/OurSpecialties.vue'
import OurStaff from './mainElements/OurStaff.vue'
import UpcomingEvents from './mainElements/UpcomingEvents.vue'
import StatsComp from './mainElements/StatsComp.vue'

export default{
    name: 'AppMain',

    components:{
        OurSpecialties,
        OurStaff,
        UpcomingEvents,
        StatsComp,
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
        
    </main>

</template>

<style lang="scss" scoped>
    main{
        position: relative;
        z-index: 999;
        margin-top: -80px;
    }
</style>