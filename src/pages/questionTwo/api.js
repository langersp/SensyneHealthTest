import axios from "axios";

async function getCardDetails (){
	return new Promise((resolve, reject)=>{
		axios.get('http://localhost:3001/example').then((result)=>{
			const {title, body, imgSrc} = result.data;			
			resolve({title, body, imgSrc})
		}).catch((error) => reject(error))
	})
}

export { getCardDetails }