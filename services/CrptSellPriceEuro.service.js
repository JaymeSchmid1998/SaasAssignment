"use strict";

var request = require('request');
module.exports = {
	name: "CrptSellPriceEuro",

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



			//this part gets the conversion rate

			return new Promise(function (resolve, reject) {
				return new Promise(function (resolve, reject) {

					//make a ajax call and then return the valuve 

					request('https://api.exchangeratesapi.io/latest?base=EUR', function (error, response, body) {
						if (error) {
							reject('error', error)
						}
						resolve(JSON.parse(body));
					});


				}).then(data => {

					
					//you divide this by the ammount given to give the converted value 
					
					let divisor= parseFloat(data.rates.AUD);
					//getting bitcoin
				//	return new Promise(function (resolve, reject) {
						return new Promise(function (resolve, reject) {

							//make a ajax call and then return the valuve 

							request('https://acx.io:443//api/v2/tickers/btcaud.json', function (error, response, body) {
								if (error) {
									reject('error', error)
								}
								resolve(JSON.parse(body));
							});


						}).then(data => {

							//let bitprice = parseFloat(data.ticker.buy);
							let foundval = parseFloat(data.ticker.sell) * divisor;
							resolve(foundval);

						})

							//  resolve('foo');

							.catch(e => { return "error doingcalc"; });
					//})
					//	.catch(e => { return "error"; });
				})
					.catch(e => { return "error doingcalc"; });
			})
				.catch(e => { return "error"; });

		},
		GetPriceEth() {




//this part gets the conversion rate

return new Promise(function (resolve, reject) {
	return new Promise(function (resolve, reject) {

		//make a ajax call and then return the valuve 

		request('https://api.exchangeratesapi.io/latest?base=EUR', function (error, response, body) {
			if (error) {
				reject('error', error)
			}
			resolve(JSON.parse(body));
		});


	}).then(data => {

		
		//you divide this by the ammount given to give the converted value 
		
		let divisor= parseFloat(data.rates.AUD);
		//getting bitcoin
		//return new Promise(function (resolve, reject) {
			return new Promise(function (resolve, reject) {

				//make a ajax call and then return the valuve 

				request('https://acx.io//api/v2/tickers/ethaud.json', function (error, response, body) {
					if (error) {
						reject('error', error)
					}
					resolve(JSON.parse(body));
				});


			}).then(data => {

				//let bitprice = parseFloat(data.ticker.buy);
				let foundval = parseFloat(data.ticker.sell) * divisor;
				resolve(foundval);

			})

				//  resolve('foo');

				.catch(e => { return "error doingcalc"; });
	//	})
	//		.catch(e => { return "error"; });
	})
		.catch(e => { return "error doingcalc"; });
})
	.catch(e => { return "error"; });

		},
		GetPriceLtc() {






			return new Promise(function (resolve, reject) {
				return new Promise(function (resolve, reject) {
			
					//make a ajax call and then return the valuve 
			
					request('https://api.exchangeratesapi.io/latest?base=EUR', function (error, response, body) {
						if (error) {
							reject('error', error)
						}
						resolve(JSON.parse(body));
					});
			
			
				}).then(data => {
			
					
					//you divide this by the ammount given to give the converted value 
					
					let divisor= parseFloat(data.rates.AUD);
					//getting bitcoin
					//return new Promise(function (resolve, reject) {
						return new Promise(function (resolve, reject) {
			
							//make a ajax call and then return the valuve 
			
							request('https://acx.io//api/v2/tickers/ltcaud.json', function (error, response, body) {
								if (error) {
									reject('error', error)
								}
								resolve(JSON.parse(body));
							});
			
			
						}).then(data => {
			
							//let bitprice = parseFloat(data.ticker.buy);
							let foundval = parseFloat(data.ticker.sell) * divisor;
							resolve(foundval);
			
						})
			
							//  resolve('foo');
			
							.catch(e => { return "error doingcalc"; });
					//})
					//	.catch(e => { return "error"; });
				})
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