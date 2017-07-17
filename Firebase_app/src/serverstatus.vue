// eslint-disable
<template>
    <div>
        <h3> Fetching data and placing it accordingly </h3>
        <p>Changing Swag here  {{status}} </p>
        <hr>
        <button class="btn" @click="changeStatus">Change status</button>
        <button class="btn" @click="changing_sec">Click Me</button>
        <hr>
        <h3> According to JSON here - <a target="_blank" href="https://vue-firebase-demo-cd73e.firebaseio.com/data.json">
        https://vue-firebase-demo-cd73e.firebaseio.com/</a>
        </h3>
        <div>
            <h4>
            What are name of banners are present?
            </h4>
        </div>
          
        <ol> 
            <div class="main_row" v-for="item in data.banner_section">
            <div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <li> {{item.name}}</li>
               
                </div>
                <div class="col-lg-9 col-md-6 col-sm-6">
                   Want to Change this ?
                    <input @input="see_cont" placeholder="enter" v-model="item.name">
                    
                </div>
            </div>
        </div>
        <div class="button-class">
        <button class="btn" @click="set_content">Click To Save </button>
        </div>
         </ol>     
        <div>
            <h4>
            What are there respective taglines?
            </h4>
        </div>  
        <ol>
        <div class="main_row" v-for="item in data.banner_section">
            <div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    
                        <li>
                 {{item.data.tagline}}
                        </li>
                    
                </div>
                <div class="col-lg-9 col-md-6 col-sm-6">
                    Want to Change this ?
                    <input @input="see_cont" placeholder="enter" v-model="item.data.tagline">
                    
                </div>
            </div>
        </div>
        <div class="button-class">
        <button class="btn" @click="set_content">Click To Save </button>
        </div>   
        </ol>
        <div>
            <h4>
           How much is there opacity?
            </h4>
        </div>  
        <ol>
        <div class="main_row" v-for="item in data.banner_section">
            <div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                <li>    {{JSON.stringify(item.data.opacity)}} </li>
                </div>
                <div class="col-lg-9 col-md-6 col-sm-6">
                    Want to Change this ?
                    <input @input="see_cont" placeholder="enter" v-model="item.data.opacity">
                    
                </div>
            </div>
        </div>
        <div class="button-class">
                <button class="btn" @click="set_content">Click To Save </button>
        </div>
        </ol>
    </div>
</template>

<script>
import axios from 'axios';
import Vee from 'vee-validate';
    export default {
        data (){
            
            return {
                status : 'critical',
                op_val:' ',
                opacity_val:' ',
                rawdata:'',
                data:{},
                banner:'',
                banner_section:[],
                tagline_section:[],
                opacity_section:[],
                raw_name:'',
                i:''
                 };
        },

        methods : {
            changeStatus : function () {
                this.status = 'Not critical';
                
                for(this.i in this.data.banner_section){
                this.raw_name=this.data.banner_section[this.i].name;
                console.log(this.data.banner_section[this.i].name);
                }
            },
            see_cont:function(){
            console.log(this.data);
            },
            get_cont: function() {
				axios.get( 'https://vue-firebase-demo-cd73e.firebaseio.com/data.json' )
					.then(response => {
               console.log(response);
                this.data=response.data;
                console.log(this.data);
                })
                    .then(data=>{  
                console.log(this.data.banner_section[0].name);
                this.op_val=this.data.banner_section[0].data.opacity;
                this.opacity_val=JSON.stringify(this.op_val);
                console.log(this.op_val);
                console.log(this.opacity_val);
                    });
                          
            },
            set_content : function(){
                axios.put('https://vue-firebase-demo-cd73e.firebaseio.com/data.json',this.data)
                .then(response=> {
                    console.log(response.data);
                })
            },

             get_tagline : function(){
                 var i;
                for(i in this.data.banner_section){
                    this.tagline_section=i.tagline;
                console.log(this.tagline_section);
                }
                // this.get_cont();
            },
            changing_sec: function() {
				this.status= this.data.section_format[0].name;
			}
        },
        created() {
			 this.get_cont();
		}
    }
</script>

