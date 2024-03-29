
// ユーザの入力値を取得
let numElem = document.getElementById('num');
// 出力場所を取得
let resultElem = document.getElementById('result');

let btn = document.getElementById('btn');



// 実働処理
btn.addEventListener('click',function(){

	resultElem.innerHTML = '';
	
	let num = getNumber(numElem);
	if (num === 'null' && num == 'NaN') {
		resultElem.innerHTML = '数値を入力してください。';
	}

	let isNumber = isNum(num);
	if(isNumber == false){
		resultElem.innerHTML = '半角数字を入力してください。';
	}


	let arr = getRandom(num);

	let result = getResult(num,arr);

	console.log('**************************************');
	console.log(result);
	console.log('**************************************');


	outResult(resultElem,num,result);
	



});


// 入力値取得
function getNumber(Elem){
	let num = Elem.value;
	if (num == "") {
		return 'null';
	} 
	return num;
}


// 入力値の判定
function isNum(num){
	// チェック条件パターン
  let pattern = /^([1-9]\d*|0)(\.\d+)?$/;
  // 数値チェック
  return pattern.test(num);
	}



// ランダム値取得
function getRandom(num){
	let types = ['ストライク','ボール','アウト'];
	let arr = [];
	for(let i=0; i<num; i++){
		arr.push(types[Math.floor(Math.random() * 3)]);
	}
	return arr;
}


// ランダム結果を判定
function getResult(num,arr){
	// 1回でも「アウト」なら処理終了
	// 3回以上「ストライク」なら「アウト」　処理終了
	// 4回以上「ボール」なら「ファーボール」　処理終了
	let pitchings = [];

	// console.log(pitchings);
	// console.log(pitchings.indexOf('ストライク') + ':ストライク数');
	// console.log(pitchings.indexOf('ボール') + ':ボール数');
	// console.log(pitchings.indexOf('アウト') + ':アウト数');



	for(let i=0; i<num; i++){
		pitchings.push(arr[i]);
		
		if (pitchings.indexOf('アウト') != -1) {
			return pitchings;
			break;
		};
		
		let numStrik1 = pitchings.indexOf('ストライク');	
		if (numStrik1 != -1) {
			let numStrik2 = pitchings.indexOf('ストライク',numStrik1+1);
			if (numStrik2 != -1) {
				let numStrik3 = pitchings.indexOf('ストライク',numStrik2+1);
				if (numStrik3 != -1){
					pitchings.push('アウト');
					return pitchings;
					break;
		}}};
		

		let numBall1 = pitchings.indexOf('ボール');
		if (numBall1 != -1) {
			let numBalls2 = pitchings.indexOf('ボール',numBall1+1);
			if(numBalls2 != -1){
				let numBall3 = pitchings.indexOf('ボール',numBalls2+1);
				if(numBall3 != -1){
					let numBall4 = pitchings.indexOf('ボール',numBall3+1);
					if(numBall4 != -1){
						pitchings.push('ファーボール');
						return pitchings;
						break;
					}
				}
			}

			
		};
	};

}

// 結果を出力
function outResult(elem,num,arr){
	elem.innerHTML = `<P>予定投球${num}` 
					+ `<br>実投球数${arr.length}`
					+ `<br>結果${arr}</p>`;

}
