function button() 
{
    let da = new Date();
    let hours=da.getHours();
    let minutes=da.getMinutes();
    let seconds=da.getSeconds();
    let ampm ="AM";
    if(hours>12)
    {
        hours=hours-12;
        ampm="PM";
    }

    if(hours<10)
    {
        hours="0"+hours;

    }

    if(minutes<10)
    {
        minutes="0"+minutes;

    }

    if(seconds<10)
    {
        seconds="0"+seconds;

    }
    
    
    document.getElementById("hour").innerHTML=hours;
    document.getElementById("min").innerHTML=minutes;
    document.getElementById("sec").innerHTML=seconds;
    document.getElementById("ampm").innerHTML=ampm;
    setInterval(button,1000);
    
}
button();
function theme() 
{
    let bg=document.getElementById("container_1");
    bg.style.backgroundColor="rgb(243,243,243)";

    let bg1=document.getElementById("contant");
    bg1.style.backgroundColor="rgb(221,221,221)";

    let clr=document.getElementById("tab");
    clr.style.color="black";
    
}
theme();