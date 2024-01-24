var cel = document.getElementById("cel");
var fah = document.getElementById("fah");

cel.addEventListener('input',function(){
    let c = this.value;
    let f = (c * 9/5) + 32;

    fah.value = f;
});

cel.addEventListener('input',function(){
    let c = this.value;
    let k = c + 273.15;

    kel.value = k;
});

fah.addEventListener('input',function(){
    let f = this.value;
    let c = (f-32) * 5/9;

    cel.value = c;
});

fah.addEventListener('input',function(){
    let f = this.value;
    let k = ((f-32)/1.8)+273.15;

    kel.value = k;
});

kel.addEventListener('input',function(){
    let k = this.value;
    let f = (k - 273.15) * 9/5 + 32;

    fah.value = f;
});

kel.addEventListener('input',function(){
    let k = this.value;
    let c = k - 273.15 ;
    
    cel.value = c;
});

