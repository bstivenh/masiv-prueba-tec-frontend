const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            comic_name: "Woodpecker",
            comic_img: "https://imgs.xkcd.com/comics/woodpecker.png",
            comic_alt: "If you don't have an extension cord I can get that too.  Because we're friends!  Right?",
            stars: [
                {
                    id: 0,
                    icon: 'far fa-star star-comic star-incompleted',
                    state: false
                },
                {
                    id: 1,
                    icon: 'far fa-star star-comic star-incompleted',
                    state: false
                },
                {
                    id: 2,
                    icon: 'far fa-star star-comic star-incompleted',
                    state: false
                },
                {
                    id: 3,
                    icon: 'far fa-star star-comic star-incompleted',
                    state: false
                },
                {
                    id: 4,
                    icon: 'far fa-star star-comic star-incompleted',
                    state: false
                },
            ]
        };
    },
    methods: {
        clickStar: function (idStar, stateStar) {
            if (stateStar) {
                if (this.stars[idStar + 1].state) {
                    var startLoop = idStar + 1;
                } else {
                    var startLoop = idStar;
                }

                for (let index = startLoop; index < 5; index++) {
                    this.stars[index].icon = 'far fa-star star-comic star-incompleted';
                    this.stars[index].state = false;
                }
            } else {
                for (let index = 0; index <= idStar; index++) {
                    this.stars[index].icon = 'fas fa-star star-comic star-completed';
                    this.stars[index].state = true;
                }
            }

        }
    }
});

app.mount("#root");