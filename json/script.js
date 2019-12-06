// objek ke JSON

// let mahasiswa = {
// 	nama : "muhammad Waldi",
// 	nrp : "173040079",
// 	email : "m.walid@gmail.com"
// }

// console.log(JSON.stringify(mahasiswa));


// JSON ke objek pakai panila javascript

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
// 	if (xhr.readyState == 4 && xhr.status == 200) {
// 		let mahasiswa = JSON.parse(this.responseText);
// 		console.log(mahasiswa);
// 	}
// }
// xhr.open('GET', 'coba.json', true);
// xhr.send();


// pakai jquery
$.getJSON('coba.json', function(data){
	console.log(data);
});
