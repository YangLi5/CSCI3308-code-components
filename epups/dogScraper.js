const rp = require('request-promise');
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const url = 'https://www.boulderhumane.org/dogs/';
const fs = require('fs');

(async function main(){
	try{
		const browser = await puppeteer.launch({headless: false});
		const page = await browser.newPage();

		await page.goto(url);
		await page.waitForSelector('#animal > div:nth-child(1)');
		//console.log('we made it');

		const sections = await page.$$('#animal > div');
		//console.log(sections.length);

		

		for (const i of sections){
			await page.click('#animal > div:nth-child(`i`) > a:nth-child(`i`)');	
		}
	}
	catch (e){
		console.log('error', e);
	}
})();

// puppeteer.launch({headless: false}).then(async browser => {
// 	const page = await browser.newPage();
// 	await page.goto(url);

	
// 	//await page.waitForSelector('#animal > div:nth-child(1)');
// 	//await page.click('#animal > div:nth-child(1) > a:nth-child(1)');
// 	let data = await page.evaluate(() =>{
// 		let dog_data = [];
// 		var dogs = document.getElementsByClassName('adoptable-animal');
// 		for(var i =1; i < dogs.length; i++){
// 			page.waitForSelector('#animal > div:nth-child(`i`)');
// 			page.click('#animal > div:nth-child(1) > a:nth-child(`i`)');
// 			var name = document.getElementsByClassName('ad-field-AnimalName').innerHTML;
// 			var breed = document.getElementsByClassName('ad-field-PrimaryBreed').innerHTML; 
// 			var age = document.getElementsByClassName('ad-field-Age').innerHTML;
// 			var sex = document.getElementsByClassName('ad-field-Sex').innerHTML;
// 			var weight = document.getElementsByClassName('ad-field-BodyWeight').innerHTML;
// 			var ID = document.getElementsByClassName('ad-field-ID').innerHTML;
// 			var fee = document.getElementsByClassName('ad-field-Price').innerHTML;

// 			var dog = { name: name, breed: breed, age: age, sex: sex, weight: weight, ID: ID, fee: fee};
// 			dog_data.push(dog);
// 			page.goBack();
// 			console.log('here');
// 		}
// 		return dog_data;
// 	})
	
// });



// const options = {
// 	uri : url,
// 	transform: function(body){
// 		return cheerio.load(body);
// 	}
// }

// rp(options)
// 	.then(($) => {
// 		//console.log($);
// 		console.log($('.adoptable-animal').next().href);
// 	})
// 	.catch((err) =>{
// 		console.log(err);
// 	})
// rp(url)
//   .then(function(html){
//     //success!
//     /*fs.writeFile('test.html', html, (err) =>{
//     	if(err) throw err;
//     })*/
//     //console.log($('a',html));
//     const dogs = [];
//     $('div.adoptable-animal > a.animal-name').each(function(index){
//     	const link = $(this).find('div.adoptable-animal>a').attr('href');
//     	const name = $(this).find('div.adoptable-animal>a').text();
//     	const obj = {
//     		link : link,
//     		name: name
//     	};
//     	console.log(link);
//     	console.log(name);
//     	dogs.push(JSON.stringify(obj));
//     });
//     fs.writeFile('info.txt', dogs, (err) =>{
//     		if(err) throw err;
//     	})
//   })
//   .catch(function(err){
//     console.log(err);
//   });



