<script>
import FooterLinks from './footerElements/FooterLinks.vue'
export default{
    name: 'AppFooter',

    components:{
        FooterLinks,
    },

    data() {
        return {
            about: [
                {
                    title: 'about',
                    description: 'We created Everlead to effectively become the stepping stone towards meeting all your goals & achieving business success.',
                    socials:[
                        {
                            name:'linkedin',
                            icon: 'fab fa-linkedin-in',
                            url: '#'
                        },
                        {
                            name:'facebook',
                            icon: 'fab fa-facebook-f',
                            url: '#'
                        },
                        {
                            name:'twitter',
                            icon: 'fab fa-twitter',
                            url: '#'
                        },
                    ]
                }
            ],
            twitter:[
                {
                    tag:'@aliasadadm',
                    post: ', can you please submit a ticket at https://t.co/aB6x9pY2zW and one of our support agent... https://t.co/X3gT6sL8qZ'
                },
                {
                    tag:'@HenrySefaBoaky1',
                    post:'Check out our theme Gioia which has all necessary elements to build a multi vendor marketplace. https://t.co/7h9F4pK2wE'
                },
            ],

            importantLinks: [
                {
                    name: 'About me',
                    url: '#'
                },
                {
                    name: 'About us',
                    url: '#'
                },
                {
                    name: 'Language packs',
                    url: '#'
                },
                {
                    name: 'Become a coach',
                    url: '#'
                },
                {
                    name: 'Monthly events',
                    url: '#'
                },
            ],
            contactMe:[
                {
                    icon: 'fas fa-location-dot',
                    description: '457 BigBlue Street, NY 10013'
                },
                {
                    icon: 'fas fa-phone',
                    description: '(315) 5512-2579'
                },
                {
                    icon: 'fas fa-envelope',
                    description: 'everlead@mikado.com'
                },
            ]

        }

    },
}
</script>

<template>

    <footer>
        <FooterLinks
            :about="about"
            :twitter="twitter"
            :links="importantLinks"
            :contact="contactMe"
        />
        <div class="orange-bar py-1 text-center">
            <span>Copyright Everlead&copy;MikadoThemes</span>
        </div>
    </footer>

</template>

<style lang="scss" scoped>
@use '../../assets/sass/partials/variables' as *;
    footer{
        background-color: #171515ff;
        .orange-bar{
            background-color: $orange;
            span{
                font-weight: 100;
                font-size: .9rem;
            }
        }
    }
    

</style>