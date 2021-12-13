
const Counter = {

template:`<div class="container">
  		<div class="columns">
    		<div class="column col-12">
				<table class="table">
  		<thead>
    		<tr>
      		<th>name</th>
      		<th>genre</th>
      		<th>release date</th>
    		</tr>
  		</thead>
  		<tbody>
    		<tr v-for="item in table_data" class="active">
      				<td>{{item.title}}</td>
      				<td>tho{{item.aur}}</td>
      				<td>14 October 1994</td>
    		</tr>
  		</tbody>
		</table>
		<button class="btn btn-primary" v-on:click="getMessage()"><i class="icon icon-refresh"></i></button>
    </div>
  </div>
</div>`,


  data() {
    return {
      table_data: []
    }
  },
  methods: {
  	getMessage(){
  		const path = '/randomdata';
  		axios.get(path).then((res) => {
          this.table_data = res.data;
        });
  	}
  },
  created() {
  	this.getMessage();
  }
}

Vue.createApp(Counter).mount("#app")