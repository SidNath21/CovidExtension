const btn = document.querySelector(".btn")
const btnClose = document.querySelector(".btnClose");
const result = document.querySelector(".results")

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
recognition.continuous = true


btn.addEventListener("click", function(){
    btn.classList.toggle("active");
    if(btn.value == 'off'){
        btn.value = 'on'
    }
    else if(btn.value == 'on'){
        btn.value = 'off'
    }

    btn.value == "on" ? recognition.start() : recognition.stop()
    console.log(btn.value)

})

recognition.onresult = event => {


    let last = event.results.length - 1;
    let lastTranscript = event.results[last][0].transcript;

    let p = document.createElement('p');
    p.classList = "text";
    p.innerHTML = lastTranscript;

    result.appendChild(p)

   

}


btnClose.addEventListener("click", () => {
    window.close()
})





