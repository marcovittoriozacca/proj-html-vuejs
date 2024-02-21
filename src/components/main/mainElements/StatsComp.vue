<script>
export default{
    name: 'StatsComp',
    props:['stats'],
}
</script>

<template>
    
    <div class="bg-white custom-padding">
        <div class="container container-lg">
            <div class="row">
                <div class="col-6">
                    <h2 class="py-2">Creative Leader<span>.</span></h2>
                    <p class="text-secondary py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, id deleniti unde, alias totam explicabo repellendus velit quidem odit veritatis, cumque ratione. Quasi nisi sed itaque ipsum libero, voluptatibus ullam?</p>
                    <a class="text-uppercase text-decoration-none fw-bold" href="#">read more</a>
                </div>
                <div class="col-6">
                    <div v-for="(stat, index) in stats" :key="index" class="py-2">
                        <div class="d-flex justify-content-between pb-1">
                            <h5>{{ stat.name }}</h5>
                            <h5>{{ stat.number }}%</h5>
                        </div>
                            <div class="outer-bar">
                                <div :style="{ 'width' : stat.number + '%' }" class="inner-bar"></div>
                            </div>
                    </div>
    
                </div>
            </div>
        </div>


    </div>

</template>

<style lang="scss" scoped>
    @use '../../../assets/sass/partials/variables' as *;
    @use '../../../assets/sass/partials/mixins' as *;

    h2{
        @include orange-border;
        span{
            color: $orange;
        }
    }

    .outer-bar{
        border-bottom: .5px solid lightgray;
        overflow: hidden;
        .inner-bar{
            background-color: $orange;
            height: 5px;
        }
    }
    .custom-padding{
        padding-block: 80px 130px;
    }
    a{
        @include orange-hover;
    }
</style>