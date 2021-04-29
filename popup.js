

const api_url = "http://28f17c13069b.ngrok.io/api";


const email = document.getElementById("email")
const password =document.getElementById("password")
const submit = document.getElementById("submit")

submit.addEventListener('click', getUserInfo)

async function getUserInfo() {
    const data = await fetch('http://28f17c13069b.ngrok.io/api/user_info')
	.then(r => r.json());
	for (i = 0; i < data.length; i++){
		
		if (data[i] = email){
			document.getElementById("output").textContent = JSON.stringify(data);
			break;
		}
		else {
			count += 1
		}
		if (count == data.length){
			document.getElementById("output").textContent = "Invalid Email";
			break;
		}
	}
    
}
