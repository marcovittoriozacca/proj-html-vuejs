<script>
export default{
    name: 'ArrowUpBtn'
}
</script>


<template>
    
    <a href="#" class="rounded-circle d-flex align-items-center justify-content-center text-decoration-none socials p-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><title>Artboard-32</title><g id="Up-2" data-name="Up"><polygon points="12.499 1 5.999 7.5 6.706 8.207 11.999 2.914 11.999 24 12.999 24 12.999 2.914 18.294 8.208 19.001 7.501 12.499 1" style="fill:currentColor"/></g></svg>
    </a>
    
</template>

<style lang="scss" scoped>

@use '../../assets/sass/partials/variables' as *;
.socials{
        background-color: white;
        border: .1px solid lightgray;
        svg{
            color: $orange;
            width: 25px;
            height: 25px;
        }
    }
</style>