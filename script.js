function makeid(l) {
  // write your code here
	let temp="1a2b3c4d5e";
	let ans="";
	let count=0;
	while(count<=l)
		{
			let r=Math.floor(Math.random()*10);
			ans=ans+temp[r];
			count++;
}
	return ans;
}

// Do not change the code below.
//const l = prompt("Enter a number.");
//alert(makeid(l));
