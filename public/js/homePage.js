import { Actionsheet } from 'vux';

var vm = new Vue({
	el:'#app',
	data:{
		message:'newTest',
		infoList:[]
	},
	mounted:function(){
		this.getData();
	},
	methods:{
		getData:function(){
			var _this = this;
			axios.get('../data/data.json')
			.then(function(result){
				if(result.statusText == 'OK'){
					_this.infoList = result.data;
					console.log(_this.infoList);
				}
			})
		}
	}
})

 vm.component("actionsheet", vuxActionsheet);