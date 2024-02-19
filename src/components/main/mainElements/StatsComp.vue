<script>
export default{
    name: 'StatsComp',
    props:['stats']
}
</script>

<template>
    
    <section id="stats" class="container container-lg custom-padding">

        <div class="row">
            <div class="col-6">
                <h2 class="py-2">Creative Leader</h2>
                <p class="text-secondary py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, id deleniti unde, alias totam explicabo repellendus velit quidem odit veritatis, cumque ratione. Quasi nisi sed itaque ipsum libero, voluptatibus ullam?</p>
                <a class="text-uppercase text-decoration-none fw-bold" href="#">read more</a>
            </div>
            <div class="col-6">
                <div v-for="(stat, index) in stats" :key="index" class="py-2">
                    <div class="d-flex justify-content-between pb-1">
                        {{ stat.name }}
                        <span>{{ stat.number }}%</span>
                    </div>
                        <div class="outer-bar">
                            <div :style="{ 'width' : stat.number + '%' }" class="inner-bar"></div>
                        </div>
                </div>

            </div>
        </div>

    </section>

</template>

<style lang="scss" scoped>
    @use '../../../assets/sass/partials/variables' as *;
    @use '../../../assets/sass/partials/mixins' as *;

    h2{
        @include orange-border;
    }

    .outer-bar{
        
        border-bottom: .5px solid lightgray;
        .inner-bar{
            background-color: $orange;
            height: 5px;
        }
    }
    .custom-padding{
        padding-block: 80px;
    }

</style>