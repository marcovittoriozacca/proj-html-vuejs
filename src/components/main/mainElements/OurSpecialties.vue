<script>
export default {
    name: 'OurSpecialties',
    props:['elements'],
}
</script>

<template>
    
    <section id="specialties">
        <div class="text-center bg-white py-5 mb-2">
            <div class="specialties-header pt-5 pb-2 mb-5">
                <h2>
                    Our specialties<span>.</span>
                </h2>
                <p class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
    
            <div class="d-flex justify-content-center container container-lg">
                <div v-for="(element, index) in elements" :key="index" class="px-3">
                    <figure class="m-0">
                        <img :src="element.icon" :alt="element.title" class="img-fluid">
                    </figure>
                    <h4 class="text-capitalize py-3">{{ element.title }}</h4>
                    <p class="text-secondary">{{ element.description }}</p>
                </div>
            </div>
        </div>

    </section>

</template>

<style lang="scss" scoped>
@use '../../../assets/sass/partials/variables' as *;



h2{
    span{
        color: $orange;
    }
}
.specialties-header{
    position: relative;
    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 3px;
        width: 8%;
        background-color: $orange;
    }
    h2{
        font-size: 2.5rem;
    }
}


</style>