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

    events:[
        {
            name: 'Melbourne Coaching',
            timeFrom: '9:00 am',
            timeTo: ' 5:00 pm',
            date: 'Jan 7, 2022',
            location: 'Cambridge. MA 02138, USA',
        },
        {
            name: 'New York Coaching',
            timeFrom: '9:00 am',
            timeTo: ' 5:00 pm',
            date: 'Jan 11, 2022',
            location: 'Cambridge. MA 02138, USA',
        },
        {
            name: 'London Coaching',
            timeFrom: '9:00 am',
            timeTo: ' 5:00 pm',
            date: 'Jan 21, 2022',
            location: 'Cambridge. MA 02138, USA',
        },
    ],

    stats:[
        {
            name: 'Mentorship',
            number: 78,
        },
        {
            name: 'Education',
            number: 95,
        },
        {
            name: 'Learning',
            number: 65,
        },
        {
            name: 'Motivation',
            number: 83,
        },
    ],
    latestNews: [
        {
            image: 'h1-blog-img-01.jpg',
            date: 'May 5, 2019',
            author: 'Amanda Doe',
            title: 'Next Investment',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quisquam, est molestias officiis vero officia',
            url: '#'
        },
        {
            image: 'h1-blog-img-02.jpg',
            date: 'May 5, 2019',
            author: 'Amanda Doe',
            title: 'Team Building',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quisquam, est molestias officiis vero officia',
            url: '#'
        },
        {
            image: 'h1-blog-img-03.jpg',
            date: 'May 5, 2019',
            author: 'Amanda Doe',
            title: 'New Business Day',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quisquam, est molestias officiis vero officia',
            url: '#'
        },
        {
            image: 'h1-blog-img-04.jpg',
            date: 'May 5, 2019',
            author: 'Amanda Doe',
            title: 'Strategic Planning Session',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quisquam, est molestias officiis vero officia',
            url: '#'
        },
        {
            image: 'h1-img-07.jpg',
            date: 'May 5, 2019',
            author: 'Amanda Doe',
            title: 'Innovation Workshop',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quisquam, est molestias officiis vero officia',
            url: '#'
        },
        {
            image: 'h1-img-08.jpg',
            date: 'May 5, 2019',
            author: 'Amanda Doe',
            title: 'Growth Strategy Retreat',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quisquam, est molestias officiis vero officia',
            url: '#'
        },
    ]

})