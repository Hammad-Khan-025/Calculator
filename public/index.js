const btnClick = document.querySelectorAll('.btn');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');

let string = "";
let arr = Array.from(btnClick);

arr.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let text = e.target.innerHTML;

        if (text === '=') {
            try {
                // Replace "÷" with "/"
                string = string.replace(/÷/g, '/');
                string = string.replace(/X/g, '*');
                string = eval(string);
                input2.value = "=" + string;
            } catch (error) {
                input2.value = 'Error';
                console.error('Invalid expression:', error);
            }
        } 
        else if (text === 'AC') {
            string = '';
            input1.value = '';
            input2.value = '';
        } 
        else if (text === 'Del') {
            // Remove the last character from the string
            string = string.slice(0, -1);
            input1.value = string;
        } 
        else {
            string += text;
            input1.value = string;
        }
    });
});
