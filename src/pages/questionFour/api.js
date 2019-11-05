import axios from "axios";

async function getNHSData () {
    const url = "https://api.nhs.uk/live-well",
          subscriptionkey = "fb2209fae92d40729aaf482098bf6c95";

	return new Promise((resolve, reject)=>{
		axios.get(url, {
            headers: {
                'subscription-key': subscriptionkey,
                'Content-Type': 'application/json'
            }})
            .then((result)=> {
			const data = result.data.mainEntityOfPage;			
			resolve(data)
		}).catch((error) => reject(error))
	})
}

export { getNHSData }