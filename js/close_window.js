var close_time;
var close_time2 = 10;
var timeout = "";

clearTimeout(close_time);
close_time= setTimeout("close_window()", 10000);
show_time();

function show_time()
{
    let divClock = document.getElementById('Time');
    divClock.innerText = timeout;
	close_time2--;
	timeout = "남은 시간은 " + close_time2 + "초입니다.";
	setTimeout(show_time, 1000);
}

function close_window() {
   window.close();
}
