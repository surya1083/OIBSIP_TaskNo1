let string = '';

let buttons = document.querySelectorAll(".buttons");

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=> {
        string = document.querySelector('input').value;
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            document.querySelector('input').value = '';
            string = '';
        }
        else if(e.target.innerHTML == 'Del'){
            document.querySelector('input').value = document.querySelector('input').value.slice(0,-1);
            string = string.slice(0,-1);
        }
        else if(e.target .innerHTML == 'sq'){
            string = string*string;
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '%'){
            string = string/100;
            document.querySelector('input').value = string;
        }
        else{
            string = string+e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

document.addEventListener('keypress', (e)=>{
    console.log(e.key);
    if(e.key == 'Enter' || e.key == '='){
        string = document.querySelector('input').value;
        string = eval(string);
        document.querySelector('input').value = string;
    }
})

