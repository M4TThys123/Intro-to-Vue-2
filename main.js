const nav = new Vue({
    el: '#nav',
    data: {
        // Logo
        logo: './assets/logo/nav_light.png',

        // Nav list
        navigaion: [
            {
                url: '/',
                name: 'Home'
            },
            {
                url: '/about',
                name: 'Diensten'
            },
            {
                url: '/about',
                name: 'Partners'
            },
            {
                url: '/about',
                name: 'About'
            },
        ]
    }
})

const main = new Vue({
    el: '#main',
    data: {
        // Infomratie
        product: 'Socks',
        description: 'A pair of warm fuzzy socks',
        inventory: 11,

        // Foto
        image: './assets/sock.jpeg',

        // Eigenschappen
        details: ['80% cutton', '20 poleyester', 'Top-G'],
        variants: [
            {
                Id: 0,
                Color: 'Green'
            },
            {
                Id: 0,
                Color: 'Blue'
            }
        ]

    }
})
