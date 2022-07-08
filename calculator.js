let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string = eval(string);
            document.querySelector('.screen').value = string;
        }
        else{
            string = string+e.target.innerHTML;
            document.querySelector('.screen').value = string;
        }
        if(e.target.innerHTML=='AC'){
            string = "";
            document.querySelector('.screen').value = string;
        }
    })
})