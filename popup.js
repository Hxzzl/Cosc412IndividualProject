

const api_url = "http://28f17c13069b.ngrok.io/api";


email = document.getElementById("email")
password =document.getElementById("password")
submit = document.getElementById("submit")
//document.getElementById("output").textContent =email
email = JSON.stringify(email)
console.log(email)
submit.addEventListener('click', function(){getUserInfo()})

async function getUserInfo() {
	
	//return document.getElementById("output").textContent =email
    await fetch(`http://28f17c13069b.ngrok.io/api/user_info/${email}`)
	.then(r => r.json())
	.then(data => {
		return document.getElementById("output").textContent = JSON.stringify(data);
	})
}
async function sendUserInfo() {
	await fetch('http://28f17c13069b.ngrok.io/api/user_info/submit', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(email),
	})
	.then(response => response.json())
	.then(data => {
	console.log('Success:', data);
	})
	.catch((error) => {
	console.error('Error:', error);
	});
}
