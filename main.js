//event.which is for Firefox since it does not support keyCode and returns 0. Bah.
function myFunction(event) {

    var keypressed = event.which || event.keyCode;
    document.getElementById("content").innerHTML = "The Unicode value of the key pressed is: " + keypressed;

    //change the background color value to the value equal to the key pressed
    var str = String(keypressed);
    document.getElementById("main-wrapper").style.backgroundColor= "#"+str;
}