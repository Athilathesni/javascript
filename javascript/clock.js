

function putZero(sec)
{
return sec<10?`0${sec}`:sec;
}

function asd(){
    let dt=new Date();
    // let day;
    // switch(new Date.getDay()){
    //     case 1:
    //         day="monday"
    //         break;
    //     case 2:
    //         day="tuesday"
    //         break;
    //     case 3:
    //         day="wenesday"
    //         break;
    //     case 4:
    //         day="thursday"
    //         break;
    //     case 5:
    //         day="friday"
    //         break;
    //     case 6:
    //         day="saturday"
    //         break;
    //     case 7:
    //         day="sunday"
    //         break;
    // } 
    let hours=dt.getHours();
    let ampm=hours>12?"PM":"AM";
    document.getElementById("clock").innerHTML=`${putZero(hours%12)} : ${putZero(dt.getMinutes())} : ${putZero(dt.getSeconds())}: ${ampm} ${dt.getDay()}:`
    setTimeout=(()=>{
        asd()
    },1000)
}
asd()