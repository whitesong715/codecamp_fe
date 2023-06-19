let num;

const seqSend = () => {
    num = String(Math.floor(Math.random() *1000000)).padStart(6, "0");
    // console.log(num, colorNum);
    document.getElementById("seq__num").style.color = "#" + num;
    // console.log(num);
    document.getElementById('seq__num').innerText = num;
}