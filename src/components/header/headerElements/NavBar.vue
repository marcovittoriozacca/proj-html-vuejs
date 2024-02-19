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
                <i v-if="link.active" class="fas fa-arrow-right-long active-arrow"></i>
                <a :class="{ 'active' : link.active }" :href="link.url" class="text-decoration-none text-uppercase d-flex align-content-center">
                    <!-- <svg v-if="link.active" xmlns="http://www.w3.org/2000/svg" width="32" height="32" style="height:20px" fill="currentColor"><path d="M4 15a1 1 0 001 1h19.586l-4.292 4.292a1 1 0 001.414 1.414l6-6a.99.99 0 00.292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 00-.216-.324l-6-6a1 1 0 00-1.414 1.414L24.586 14H5a1 1 0 00-1 1z"/></svg> -->
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