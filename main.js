Webcam.set({
    width:350,
    height:300,
    image_format : "png",
    png_quality: 90
})
camera = document.getElementById("camera");
Webcam.attach("#camera");

function snap_img(){
    Webcam.snap(function (data_uri){
     document.getElementById("result").innerHTML = "<img id='pic' src = "+data_uri+">"
    });
}
console.log("ml5 version is ",ml5.version)
c = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XAYsPIp0N/model.json",modelLoaded)

function modelLoaded(){
    console.log("model has been loaded")
}

function Speak(){
    synth = window.speechSynthesis;
    sd  = "the first prediction is "+pd1+"And the second prediction is"+pd2;
    ut = new SpeechSynthesisUtterance(sd);
    synth.speak(ut);
}