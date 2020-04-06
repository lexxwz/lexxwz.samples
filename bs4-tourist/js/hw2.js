let hw2 = {};
window.onload = function(){
    hw2.out = document.getElementById('out');
    // hw2.out.style.visibility.hidden;
    hw2.map = document.getElementById('map');
    hw2.close = document.getElementById('close');
    hw2.inputs = document.getElementsByTagName('input');
    for(i=0; i<hw2.inputs.length; i++){hw2.inputs[i].onclick = function(){
        hw2.map.src = this.dataset.src;
        hw2.out.style.visibility = 'visible';
    }}
    hw2.close.onclick = function(){
        hw2.out.style.visibility = 'hidden';
    }
}