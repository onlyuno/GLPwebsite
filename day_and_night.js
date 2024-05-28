function day_and_night(){
    var body = document.querySelector('body');
    var border = document.querySelector('nav');
    var dayNight = document.querySelector('#day_night');
        if(document.querySelector('#day_night').value == 'bright'){
            body.style.backgroundColor='black';
            body.style.color='white';
            border.style.borderColor='white';
            document.querySelector('.accordion').style.color='black';
            dayNight.value='dark';
            dayNight.style.backgroundColor = 'white';
            dayNight.style.color = 'black';

            var alist = document.querySelectorAll('a');
            var i = 0;
            while(i<alist.length){
                console.log(alist[i]);
                alist[i].style.color = 'white';
                i = i + 1;
            }
        } else{
            body.style.backgroundColor = 'white';
            body.style.color = 'black';
            border.style.borderColor='black';
            dayNight.value = 'bright';
            dayNight.style.backgroundColor = 'black';
            dayNight.style.color = 'white';

            var alist = document.querySelectorAll('a');
            var i = 0;
            while(i < alist.length){
                console.log(alist[i]);
                alist[i].style.color = 'black';
                i = i + 1;
            }
        }
}