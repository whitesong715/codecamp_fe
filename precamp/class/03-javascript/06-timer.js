let isStarted = false;

const seq_send = () => {

    if(isStarted === false) {
        
        isStarted = true;
        document.getElementById("seq_ok").disabled = false;

        let num = String(Math.floor(Math.random()*1000000)).padStart(6, "0")
        document.getElementById("seq_num").innerText = num;
        
        let time = 10;
        let timer = setInterval(() => {
            if(time >= 0)
            {
                let min = Math.floor(time / 60);
                let sec = String(time % 60).padStart(2, "0");
                document.getElementById("timer").innerText = min + ":" + sec;
                time = time - 1;
            }
            else {
                document.getElementById('seq_ok').disabled = true;
                isStarted = false
                console.log("타이머작동중")
                clearInterval(timer)
            }
        },1000)

    }
    else {
        
    }

}