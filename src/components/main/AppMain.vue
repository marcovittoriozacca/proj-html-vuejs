<script>
import {store} from '../../store'

import OurSpecialties from './mainElements/OurSpecialties.vue'
import OurStaff from './mainElements/OurStaff.vue'

export default{
    name: 'AppMain',

    components:{
        OurSpecialties,
        OurStaff,
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
        
    </main>

</template>

<style lang="scss" scoped>
    main{
        position: relative;
        z-index: 999;
        margin-top: -80px;
    }
</style>