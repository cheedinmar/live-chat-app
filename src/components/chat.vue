<template>
  <div class='chat container'>
    <h2 class="center teal-text">Live Chat</h2>
    <div class="card">
        <div class="card-content">
            <div class="messages" v-chat-scroll="{always:false,smooth:true}">
                <div v-for="message in messages" :key="message.id">
                    <span class="text-info">[{{ message.name}}]:  </span>
                    <span>{{message.message}}</span>
                    <span class="text-secondary time">{{message.timestamp}}</span>
                </div>
            </div>
        </div>
        <div class="card-action ">
            <newMessage :name='name' />
          <!--pass the name of the user to this new message component  -->
        </div>
    </div>
  </div>
</template>

<script>
import newMessage from './newMessage.vue';
import fb from '@/firebase/init';
import moment from 'moment';
export default {
name:'Chat',
components:{
    newMessage
},
data(){
    return{
        messages:[]
    }
},
created(){
   let ref =fb.collection('messages').orderBy('timestamp');
   ref.onSnapShot(function(snapshot){

       snapshot.docChanges().forEach(change=>{
           if(change.type='added'){
               let doc =change.doc;
               this.messages.push({
                   id:doc.id,
                   name:doc.data(),
                   message:doc.data().message,
                   timestamp: moment(doc.data().timestamp).format('LTS')
               });
           }
       });
       
   });
},
props:['name'],
}
</script>

<style>
.chat h2{
    font-size:2.6em;
    margin-bottom:40px;
}
.chat span{
    font-size:1.4em;
}

.chat .time{
    display:block;
    font-size:1.2em
}
.messages{
    max-height:300px;
    overflow:auto;
}
</style>