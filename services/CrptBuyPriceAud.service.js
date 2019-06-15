"use strict";

var request = require('request');
module.exports = {
	name: "CrptBuyPriceAud",

	/**
	 * Service settings
	 */
	settings: {

	},

	/**
	 * Service dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello'
		 *
		 * @returns
		 */
		GetPriceBtc() {
//getting bitcoin
			return new Promise(function (resolve, reject) {
				return new Promise(function (resolve, reject) {

					//make a ajax call and then return the valuve 

					request('https://acx.io:443//api/v2/tickers/btcaud.json', function (error, response, body) {
						if (error) {
							reject('error', error)
						}
						resolve(JSON.parse(body));
					});


				}).then(data => {

					let bitprice = parseFloat(data.ticker.buy);
					let extraammount = bitprice * 1.5 / 100;
resolve(extraammount);

				})

					//  resolve('foo');

					.catch(e => { return "error doingcalc"; });



			})
		.catch(e => { return "error"; });



		},
		GetPriceEth() {
			//getting Etherium
						return new Promise(function (resolve, reject) {
							return new Promise(function (resolve, reject) {
			
								//make a ajax call and then return the valuve 
			
								request('https://acx.io//api/v2/tickers/ethaud.json', function (error, response, body) {
									if (error) {
										reject('error', error)
									}
									resolve(JSON.parse(body));
								});
			
			
							}).then(data => {
			
								let bitprice = parseFloat(data.ticker.buy);
								let extraammount = bitprice * 1.5 / 100;
			resolve(extraammount);
			
							})
			
								//  resolve('foo');
			
								.catch(e => { return "error doingcalc"; });
			
			
			
						})
					.catch(e => { return "error"; });
			
			
			
					},
		GetPriceLtc() {
//getting lightCoin
			return new Promise(function (resolve, reject) {
				return new Promise(function (resolve, reject) {

					//make a ajax call and then return the valuve 

					request('https://acx.io//api/v2/tickers/ltcaud.json', function (error, response, body) {
						if (error) {
							reject('error', error)
						}
						resolve(JSON.parse(body));
					});


				}).then(data => {

					let bitprice = parseFloat(data.ticker.buy);
					let extraammount = bitprice * 1.5 / 100;
resolve(extraammount);

				})

					//  resolve('foo');

					.catch(e => { return "error doingcalc"; });



			})
		.catch(e => { return "error"; });



		},
	






	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {

	}
};