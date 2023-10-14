const iam= document.getElementById('iam');
const text = document.createElement('span');
text.classList.add('auto');
iam.appendChild(text);
text.textContent = "Loving Guy"; 
let count = 0;
const textLoad = () => {
    if (count%3==0)
        text.textContent = "Web Developer"; 
    else if (count%3 == 1) 
        text.textContent = "Passionate Coder"; 
    else if (count%3 == 2) 
        text.textContent = "fond of sleeping"; 
    count++;
}
setInterval(textLoad, 4000);
