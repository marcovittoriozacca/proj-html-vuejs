<script>
import {store} from '../../store'

import OurSpecialties from './mainElements/OurSpecialties.vue'

export default{
    name: 'AppMain',

    components:{
        OurSpecialties,
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
        <OurSpecialties
            :elements="store.specialties"
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