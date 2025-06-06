let body = document.getElementById ('body');
let dmode = document.getElementById('dmode');

dmode.addEventListener('click', function(){
    body.classList.toggle('darkmode')
});


let tabs = document.querySelectorAll('.nav_text');
let divs = document.querySelectorAll('.content');

tabs.forEach((tab) => {
    tab.addEventListener('mouseover', function(){
        tabs.forEach((tab) => {
            tab.classList.remove('tab_active')}) 
        this.classList.add('tab_active')
        divs.forEach((div) => {
            div.classList.remove('active')
            div.classList.add('content')
        })  
        if(this.classList.contains('tab_1')) {
            divs[0].classList.add('active')
            divs[0].classList.remove('content') 
        }else if (this.classList.contains('tab_2')) {
            divs[1].classList.add('active');
            divs[1].classList.remove('content')
        }else if (this.classList.contains('tab_3')) {
            divs[2].classList.add('active');
            divs[2].classList.remove('content')
        }
    })
})


let sidenav = document.querySelector('.sidenav')
let hamburger = document.getElementById('menu')
let closeside = document.getElementById('closeside')

hamburger.addEventListener('click', function() {  
    sidenav.classList.remove('sidenav')
    sidenav.classList.add('sideopen')
    closeside.addEventListener('click', function() {
        sidenav.classList.remove('sideopen')
        sidenav.classList.add('sidenav')
    })
});


let trade = document.querySelector('.trade')
let interaction = document.getElementById('interaction')
let finish = document.getElementById('trade_finish')
let blur = document.querySelector('.body_blur')

trade.addEventListener('click', function(){
    interaction.classList.remove('none_trade')
    interaction.classList.add('interact')
    finish.addEventListener('click', function(){
        interaction.classList.remove('interact')
        interaction.classList.add('none_trade')
    })
})


let favs = document.querySelectorAll('.fav')
let favfulls = document.querySelectorAll('.favfull')

favs.forEach((fav, index) => {
    favfulls.forEach(favfull => {
        fav.addEventListener('click', function() {
            fav.classList.add('favnone')
            favfull.classList.remove('favnone')
            favfull.addEventListener('click', function() {
                fav.classList.remove('favnone')
                favfull.classList.add('favnone')
            })
        })
    })    
})

