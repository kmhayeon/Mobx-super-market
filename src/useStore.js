import {counter} from "./stores/counter";
import {market} from "./stores/market";

// 스토어를 한곳으로 모아줍니다.
const useStore = () => {
	return {counter, market};
};

export default useStore;