<script>
export default{
    name: 'ArrowUpBtn'
}
</script>


<template>
    
    <a href="#" class="rounded-circle p-1 px-3 d-flex justify-content-center align-items-center text-decoration-none socials">
        <i class="fa-solid fa-arrow-up-long"></i>
    </a>
    
</template>

<style lang="scss" scoped>

@use '../../assets/sass/partials/variables' as *;
.socials{
        width: 40px;
        aspect-ratio: 1;
        background-color: white;
        border: .1px solid lightgray;
        i{
            color: $orange;
            font-size:1.5rem;
        }
    }
</style>