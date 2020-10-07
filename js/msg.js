//SCRIPT TO ALERT USER REGARDING DISPLAY
//WRITTEN BY KYLE CHRISTIE (7/10/20)

function checkAlert(){
    var alerted = localStorage.getItem('alerted') || '';
    if(alerted != 'yes'){
        alert("For the best experience it is advised that, on some Operating Systems, you view this webpage in full-screen mode. Please press F11 to do so, press again to exit fullscreen mode");
        localStorage.setItem('alerted', 'yes');
    }
}