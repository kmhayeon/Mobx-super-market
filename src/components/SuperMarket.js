import React from 'react';
import SuperMarketTemplate from './SuperMarketTemplate';
import ShopItemList from './ShopItemList';
import BasketItemList from './BasketItemList';
import TotalPrice from "./TotalPrice";

//https://hyeok999.github.io/2020/04/16/mobx-hooks-market/#a15 참고
const SuperMarket = () => {
	return (
		<SuperMarketTemplate
			items={<ShopItemList />}
			basket={<BasketItemList />}
			total={<TotalPrice/>}
		/>
	)
};

export default SuperMarket;