var x = document.getElementById('nav_bar');
var y = document.getElementById('poza_meniu');
var ok = true;
function myfunction(){
    if(ok){
        x.style.animation= "animatie_open 1s 1";
        x.style.transformOrigin="top";
        x.style.animationFillMode="forwards";
        y.src = 'close_menu.jpg';
        ok = false;
    }
    else{
        x.style.animation= "animatie_close 1s 1";
        x.style.transformOrigin="bottom";
        x.style.animationFillMode="backwords";
        y.src = 'open_menu.jpg';
        ok = true;
    }
};
