<script>
export default{
    name: 'UpcomingEvents',
    props:['events'],
    data() {
        return {
            day: undefined,
            month:undefined,
            year: undefined,
        }
    },

    methods: {
        getDay(elementDate){
            const date = new Date(elementDate)
            
            let day = date.getDate()
            if(day < 10){
                day = `0${day}`
            }
            return day
        },
        getMonth(elementDate){
            const date = new Date(elementDate)
            let month = date.toLocaleString('en-US', { month: 'short' });
            return month
        },
        getYear(elementDate){
            const date = new Date(elementDate)
            let year = date.getFullYear()
            return year
        },
    },
}
</script>

<template>

    <section id="events">

        <div class="container container-lg custom-padding">
            <div class="bg-white events-card">
                <h2 class="text-capitalize">upcoming events</h2>
        
                <ul class="list-unstyled">
                    <li v-for="(event, index) in events" :key="index"  class="d-flex custom-bg" :class="{ 'bg-white' : index == 0 }">
                        <div class="event-date align-self-start d-flex flex-column jusify-content-center align-items-center py-1 px-2 me-4 text-white">
                            <h4 class="m-0">{{ getDay(event.date) }}</h4>
                            {{ getMonth(event.date) }}, {{ getYear(event.date) }}
                        </div>
                        <div>
                            <h5>{{ event.name }}</h5>
                            <div class="text-secondary py-2">
                                <i class="fa-regular fa-clock me-2"></i>
                                {{ event.timeFrom }} - {{ event.timeTo }}, {{ event.date }}
                            </div>
                            <div class="text-secondary pt-2 pb-4">
                                <i class=" fas fa-regular fa-location-dot me-2"></i>
                                {{ event.location }}
                            </div>
                            <a href="#" class="text-uppercase text-decoration-none fw-bold">
                                read more
                            </a>
                        </div>
                    </li>
        
                </ul>
            </div>
        </div>

    </section>

</template>

<style lang="scss" scoped>
@use '../../../assets/sass/partials/variables' as *;
    
    #events{
        background-image: url('/img/h1-img-09.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: 100px;
        .custom-padding{
            padding-block: 150px;
        }
        .custom-bg{
            background-color: #F9F9F9;
        }
    li{
        border-bottom: 1px solid #ECECEC;
        &:hover h5{
            color: $orange;
            cursor: pointer;
        }

    }
    }
    h5{
        font-size: 1.5rem;
        font-weight: 600;
    }
    h2{
        padding: 15px 300px 30px 40px;
        box-shadow: 0 0 10px -5px gray;
    }
    li{
        padding: 40px;
    }
    i{
        color: $orange;
    }
    .event-date{
        background-color: $orange;
        font-size: .8rem;
        font-weight: 102;
    }
    .events-card{
        width: fit-content;
    }
    a{
        cursor: pointer;
        &:hover{
            color:$orange;
        }
    }
    

</style>