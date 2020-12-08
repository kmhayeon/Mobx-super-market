import {observable} from "mobx";
// **** import counter 연결
import { counter } from './counter'; // 다른 스토어 사용하기


const market = observable({
	selectedItems: [],
	// 아래는 액션과 같음
	put(name, price){
		// 존재하는지 찾고
		const exists = this.selectedItems.find((item)=> item.name === name);
		if (!exists){
			// 존재하지 않는다면 새로 집어넣음
			this.selectedItems.push({
				name,
				price,
				// **** counter.number를 사용
				count: counter.number,
			});
			return;
		}
		// 존재한다면 count 값만 올림
		// **** counter.number만큼 증가
		exists.count += counter.number;
	},
	take(name){
		const itemToTake = this.selectedItems.find((item)=>item.name === name);
		itemToTake.count--;
		if(itemToTake.count === 0){
			// 갯수가 0이면
			this.selectedItems.remove(itemToTake); // 배열에서 제거처리
		}
	},
	get total() {
		console.log('종합 계산..');
		return this.selectedItems.reduce((previous, current) => { //하나의 결과값만을 반환
			console.log(previous); // 첫번쨰(이전)값
			return previous + current.price * current.count; // 현재요소를 가져옴
		}, 0);
	},
});

export { market };
