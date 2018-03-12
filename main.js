


function showTime(){

    var time = new Date();
    var h    = time.getHours();
    var m    = time.getMinutes();
    var s    = time.getSeconds();
    

    h = (h<10) ? "0" + h :h;
    m = (m<10) ? "0" + m :m;
    s = (s<10) ? "0" + s :s;
    var setTime = h + ":" + m + ":" + s;
    document.getElementById('clock').innerHTML = setTime;

    setTimeout(showTime,1000);

}

showTime();
