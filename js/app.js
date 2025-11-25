

const name = `Lorem Ipsum, Lorem Ipsum,Lorem Ipsum,Lorem <br>
                     Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum`;

document.querySelector('.txt').innerHTML = name;



const buttonElement = document.querySelector('.btn');
buttonElement.addEventListener('click', buttonClick);

function buttonClick() {

  if(buttonElement.innerText === 'Hej') {
    buttonElement.innerText = 'Hej Då!';
  }
  else{
    buttonElement.innerText = 'Hej';
  }
}











