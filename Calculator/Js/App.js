let buttons = document.querySelectorAll('.btn');
let string = "";
Array.from(buttons).forEach((button) => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }else if(e.target.innerHTML == 'C' || e.target.innerHTML == 'CE'){
            string = "";
            document.querySelector('input').value = 0;
        }else if(e.target.innerHTML == 'X' ){
            string = string.slice(0,-1);
            document.querySelector('input').value = string;
        }
        else{ 
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        console.log(e.target);
        });
});