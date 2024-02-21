<script>
export default{
    name: 'NavBar',
    props:['links'],
}

</script>

<template>
    
    <nav class="d-flex align-items-center justify-content-between px-5 container-fluid py-4 position-absolute">
        <figure>
            <img src="/img/logo-img-01.png" alt="logo-img-1" width="120">
        </figure>

        <ul class="list-unstyled d-flex align-items-center column-gap-4 mb-2">
            <li v-for="(link, index) in links" :key="index" class="d-flex align-items-center column-gap-2">

                <svg v-if="link.active" class="active-arrow" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><g id="Right-2" data-name="Right"><polygon points="17.5 5.999 16.793 6.706 22.086 11.999 1 11.999 1 12.999 22.086 12.999 16.792 18.294 17.499 19.001 24 12.499 17.5 5.999" style="fill:currentColor"/></g></svg>

                <a :class="{ 'active' : link.active }" :href="link.url" class="text-decoration-none text-uppercase d-flex align-content-center">
                    {{ link.name }}
                </a>
            </li>
            <i class="fa-solid fa-magnifying-glass fa-flip-horizontal"></i>
            <i class="fa-solid fa-list"></i>
        </ul>
    </nav>
</template>


<style lang="scss" scoped>
@use '../../../assets/sass/partials/variables' as *;
    a{
        font-weight: 500;
        &:hover{
            color: $orange;
        }
    }
    .active{
        color: $orange;
    }
    i{
        cursor: pointer;
        &:hover{
            color: $orange;
        }
    }
    
    nav{
        top: 0;
        z-index: 9999;
        left: 0;
        right: 0;
    }
    .active-arrow{
        color: $orange;
    }
</style>