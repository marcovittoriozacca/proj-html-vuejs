<script>
export default {
    name: 'ContactUs',
    props:['logos']
}
</script>

<template>

    <section id="contact-us" class="custom-margin">

        <div class="container container-lg">
            <div class="row">
                <div class="col-6">
                    <div class="map position-relative">
                        <img class="position-absolute first-point" src="/img/h1-contact-rev-02.png" alt="map-point">
                        <img class="position-absolute second-point" src="/img/h1-contact-rev-02.png" alt="map-point">
                        <img class="position-absolute third-point" src="/img/h1-contact-rev-02.png" alt="map-point">
                        <div class="d-flex flex-column border position-absolute map-box bg-white shadow-lg">
                            <span class="fw-bold">New York Coaching</span>
                            <a href="#" class="text-capitalize">
                                read more
                            </a>
                        </div>

                    </div>
                </div>
                <div class="col-6">
                    <div class="contact-form">
                        <div class="form-header py-2 mb-5">
                            <h2>Contact us<span>.</span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div class="form-body">
                            <div class="row">
                                <div class="col-6">
                                    <input type="text" name="name" id="name" class="w-100 p-3 mb-4" placeholder="Your Name">
                                </div>
                                <div class="col-6">
                                    <input type="email" name="email" id="email" class="w-100 p-3 mb-4" placeholder="Your Email">
                                </div>
                                <div class="col-12"> 
                                    <textarea class="w-100 p-3 mb-4" name="message" id="message" rows="4" placeholder="Write a message..."></textarea>
                                </div>
                                <div class="col-6">

                                    <button class="px-4 py-3 text-uppercase btn-orange text-white">
                                        <span>Send</span>
                                        <i class="fas fa-arrow-right-long"></i>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="partner-logo">
                    <div class="row justify-content-between">
                        <div class="col-2" v-for="(logo, index) in logos" :key="index">
                            <figure class="m-0">
                                <img :src="`/img/${logo.blackLogo}`" alt="partner-logo">
                                <img :src="`/img/${logo.orangeLogo}`" alt="partner-logo">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

</template>

<style lang="scss" scoped>
@use '../../../assets/sass/partials/mixins' as *;
@use '../../../assets/sass/partials/variables' as *;
    .map{
        background-image: url('/img/h1-contact-rev-01.png');
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        img,
        .map-box{
            transform: translate(-50%, -50%)
        }
        .first-point{
            left: 26%;
            top: 42%;
        }
        .second-point{
            left: 52%;
            top: 33%;
        }
        .third-point{
            right: 14%;
            bottom: 25%;
        }
        .map-box{
            padding: 20px 70px 20px 20px;
            top: 56%;
            left: 40%;
        }
    }

    .contact-form{
        .form-header{
            @include orange-border;
        }
        .form-body{
            input,
            textarea{
                border: 0;
                background-color: transparent;
                border-bottom: .5px solid lightgray;
                border-radius: 0;
                &:focus-visible{
                    outline: none;
                }
            }
            .btn-orange{    
                background-color: $orange;     
                span{
                    padding-right: 20px;
                }       
                i{
                    padding: 8px;
                    border-left: 2px solid white;

                }
                &:hover i{
                    border-left: 2px solid $orange;
                }

            }
        }
    }
    .custom-margin{
        margin-block: 150px 220px;
    }
    .partner-logo{
        margin-top: 150px;
        figure{
            position: relative;
            img{
                position: absolute;
                cursor: pointer;

                &:first-of-type{
                    &:hover{
                        display: none;

                    }
                }
                
                &:last-of-type{
                    opacity: 0;
                    &:hover{
                        opacity: 1;
                        
                    }
                }
            }
        }
    }
    
</style>