import React from "react";
import {observable} from "mobx";

const counter = observable({
	number: 1,
	// 아래는 액션이라고 생각하면 됨
	increase(){
		this.number++;
	},
	decrease(){
		this.number--;
	},
});

export {counter};