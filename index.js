var contadorloop = 0 , loops = 0

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function doLike(){
    const like_btn = document.querySelector('article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button')
    const next = document.querySelector('a.coreSpriteRightPaginationArrow')

    if(like_btn){
        like_btn.click();
        contadorloop++;
    }
    next.click()
}

function loop(){
    const next = document.querySelector('a.coreSpriteRightPaginationArrow')
    setTimeout(()=>{
        doLike();
        if(loops>=11){
            return 0
        }
        if(contadorloop<=50){ 
            loop();
        }else{
            if(contadorloop>=51){
                setTimeout(()=>{
                    loops++;
                    contadorloop = 0;
                    loop()
                },getRandomInt(20000,30000))
            }else{
                console.log('Erro - 100,101: saiu do loop()')
            }
        }
    },getRandomInt(10000, 20000))
}

const interval = setInterval(()=>{
    const button_Like = document.querySelector(".PdwC2")
    if(button_Like)
    {
        clearInterval(interval)

        const button =document.createElement("button")
        button.innerHTML = "Like Auto"
        button.classList.add("LikeBotButton")

        button.addEventListener("click",()=>{
            button.innerHTML = "Like Rodando"
            button.innerHTML = "<span style='color: red;'>Like Rodando</span>"
            button.classList.add("LikeBotButton")
            console.log('INICIANDO BOT')
            loop()  
        })

        button_Like.appendChild(button)
    }
})

