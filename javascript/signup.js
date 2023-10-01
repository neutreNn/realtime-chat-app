 const form = document.querySelector(".signup form"),
       continueBtn = form.document.querySelector(".button input");

form.onsubmit = (e) => {
    e.preventDefault(); //preveting form from submitting
}

continueBtn.onclick = () => {
    //Ajax
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/signup.php", true);
    xhr.onload = () => {

    }
    xhr.send();

}