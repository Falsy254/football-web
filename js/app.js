const documentModal = document.getElementsByClassName(".document");
const players = document.querySelectorAll(".players ul li");
const profileModal = document.getElementById("profile-modal");

console.log(players);

players.forEach(function (player) {
player.addEventListener("click",function(e){
profileModal.style.display="block"
const playerName=player.children[2].textContent
const playerAge=player.children[4].textContent
const playerPosition=player.children[3].textContent
const playerBio=player.children[5].textContent

profileModal.innerHTML=`
<i class="fa-solid fa-xmark" id="cancel"></i>
<p>Name: ${playerName}</p>
<p>Age: ${playerAge}</p>
<p>Position: ${playerPosition}</p>
<P>Bio: ${playerBio}</p>
`
const cancel= document.getElementById("cancel");
cancel.addEventListener("click", ()=>{
    profileModal.style.display="none"
    
})
})
});
const contract = document.querySelectorAll(".contract");
console.log(contract);
const button = document.getElementById("submit");
console.log(profileModal.textContent);

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[1].value;
    var message = document.getElementsByName('message')[2].value;
    var params = {
      from_name: name,
      from_email: email,
      message: message
    };


    emailjs.send('<YOUR_SERVICE_ID>', '<YOUR_TEMPLATE_ID>', params)
      .then(function() {
        alert('Email sent successfully!');
        document.getElementById('contact-form').reset();
      }, function(error) {
        console.log('Error sending email:', error);
      });
  });

