function sendMessage(event) {
    event.preventDefault();

    var data = event.srcElement;

    var name = data.name.value;
    var email = data.email.value;
    var message = data.email.message;

    var thankyouheader = document.getElementById("thankyouMessage");
    thankyouheader.innerText = "Tack för ditt meddelande " + name + ". Vi återkommer så snart vi kan!";
}