import { reactive } from "vue";

export const store = reactive({

    //specialties section elements
    specialties:[
        {
            icon: '/img/svg-0.svg',
            title: 'knowing',
            description: 'Lorem ipsum dolor sit amet, quis consect.'
        },
        {
            icon: '/img/svg-1.svg',
            title: 'selling',
            description: 'Lorem ipsum dolor sit amet, quis consect.'
        },
        {
            icon: '/img/svg-2.svg',
            title: 'learning',
            description: 'Lorem ipsum dolor sit amet, quis consect.'
        },
        {
            icon: '/img/svg-3.svg',
            title: 'contact',
            description: 'Lorem ipsum dolor sit amet, quis consect.'
        },
    ],

    ourStaff:[
        {
            image: 'h1-img-01.jpg',
            name: 'Emily Johnson',
            role: 'Chief Technology Officer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quaerat sunt reiciendis dignissimos amet minus voluptates debitis eveniet voluptatibus ex?',
            signature: '',
        },
        
        {
            image: 'h1-img-02.jpg',
            name: 'Sophia Williams',
            role: 'Chief Financial Officer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quaerat sunt reiciendis dignissimos amet minus voluptates debitis eveniet voluptatibus ex?',
            signature: '',
        },
        {
            image: 'h1-img-03.jpg',
            name: 'Jason Bickford',
            role: 'Founder and Executive Director',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quaerat sunt reiciendis dignissimos amet minus voluptates debitis eveniet voluptatibus ex?',
            signature: '',
        },
        
    ],

})