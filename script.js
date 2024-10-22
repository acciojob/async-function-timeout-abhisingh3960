//your JS code here. If required.
let textInputVal = document.getElementById('text');
let numberInputVal = document.getElementById('delay');
let submitBtn = document.getElementById('btn');

submitBtn.addEventListner('click' , (e)=>{
	e.prevnetDefault();
	function test1(){
		let textVal = textInputVal.value;
		setTimeout(()=>{
			textVal.innerText = "Test - 1";
		},1000)


		function test2(){
		let numberVal = numberInputVal.value;
		setTimeout(()=>{
			numberInputVal.innerText = "Test - 2";
		},2000)
		
	}
		test1();
		test2();
})