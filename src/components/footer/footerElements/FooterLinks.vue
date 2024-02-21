<script>
export default{
    name: 'FooterLinks',
    props:['about', 'twitter', 'links', 'contact'],
}
</script>

<template>
    
    <section id="footer-links">

        <div class="container container-lg">
            <div class="row">
                <!-- about section -->
                <div class="col-3">
                    <ul class="list-unstyled">
                        <li v-for="(element, index) in about" :key="index">
                            <h4 class="text-capitalize text-white">{{ element.title }}</h4>
                            <p class="white-hover py-3">{{ element.description }}</p>

                            <div class="d-flex align-content-center column-gap-3">
                                <div v-for="(social, index) in element.socials" :key="index" >
                                    <a :href="social.url" :class="social.name" class="rounded-circle p-1 px-3 d-flex justify-content-center align-items-center text-decoration-none socials">
                                        <i :class="social.icon"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- twitter section -->
                <div class="col-3">
                    <ul class="list-unstyled">
                        <li>
                            <h4 class="text-white text-capitalize ">Twitter</h4>
                        </li>
                        <li v-for="(element, index) in twitter" :key="index" class="d-flex align-items-start">
                            <i class="fab fa-twitter twitter-icon pt-2 me-2"></i>
                            <p class="white-hover">
                                <span class="text-decoration-underline">
                                    {{ element.tag }}
                                </span>
                                {{ element.post }}
                            </p>
                        </li>

                    </ul>
                </div>
                <!-- important links section -->
                <div class="col-3">
                    <ul class="list-unstyled ps-5">
                        <li>
                            <h4 class="text-capitalize text-white">Important Links</h4>
                        </li>
                        <li v-for="(element, index) in links" :key="index">
                            <a :href="element.url" class="white-hover">
                                {{ element.name }}
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- contact me section -->
                <div class="col-3">
                    <ul class="list-unstyled">
                        <li>
                            <h4 class="text-white text-capitalize ">Contact me</h4>
                        </li>
                        <li v-for="(element, index) in contact" :key="index">
                            <a href="#">
                                <i :class="element.icon" class="contact-icons me-3"></i>
                                <span class="white-hover">
                                    {{ element.description }}
                                </span>
                            </a>
                        </li>
                        <li>
                            <div class="input-group subscribe mt-3">
                                <input type="text" class="form-control shadow-none outline-none text-white" placeholder="Your Name" aria-label="Your Name" aria-describedby="username">
                                <span class="input-group-text text-uppercase text-white" id="username">subscribe</span>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    </section>
    
</template>

<style lang="scss" scoped>
@use '../../../assets/sass/partials/variables' as *;
@use '../../../assets/sass/partials/mixins' as *;
section{
    padding-block:120px;
}
    li{
        padding-block: 6px;
        h4{
            padding-bottom: 20px;
            @include orange-border;
        }
    }
    
    .linkedin, .facebook{
        &:hover{
            background-color: #0d62bdff;
            color: white;
        }
    }
    .twitter{
        &:hover{
            background-color: #1a95e8ff;
            color: white;
        }
    }
    .socials{
        width: 15px;
        aspect-ratio: 1;
        background-color: white;
        transition: .2s all ease-out;
        &:hover{
            transform: scale(120%);
        }

    }
    .contact-icons,
    .twitter-icon{
        color: $orange;
    }
    .subscribe{
        input,
        span{
            padding: 10px 0;
            border: none;
            background-color: transparent;
            border-radius: 0;
            border-bottom: 2px solid white;
        }

        .form-control{
            &::placeholder{
                color: gray;
                opacity: 1; 
            }
            &::-ms-input-placeholder{
                color: gray;
            }
            &::-ms-input-placeholder{
                color: gray;
            }
        }
    }
    .white-hover{
        color:#6b757dff;
            @include white-hover;
        }

</style>