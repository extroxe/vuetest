var vm = new Vue({
	el:'#app',
	data:{
		message:'dsdsd'
	},
	mounted:function(){
		this.getData();
	},
	methods:{
		getData:function(){
			axios.get('./data/data.json')
			.then(function(result){
				console.log(result);
			})
		}
	}
})