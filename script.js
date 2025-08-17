//your JS code here. If required.
let output = document.getElementById('output');

const updatePromise = ()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Hello, world!")
		}, 1000)
	})
}


updatePromise().then((data)=>{
	// console.log(data);
	output.innerText = data;
})