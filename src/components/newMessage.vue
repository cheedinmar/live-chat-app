<template>
  <div>
    <form @submit.prevent='addMessage'>
        <label for='new-message' >New Message (enter to add):</label>
        <input type='text' name='new-message' v-model='newMessage' placeholder="Enter message...">
        <p class="text-secondary nomessages" v-if="errorText">
        {{errorText}}
          
        </p>
        <button class='btn btn-primary' type="submit" name="action">Submit</button>
    </form>
  </div>
</template>

<script>
import fb from  '@/firebase/init';
export default {
    name:'newMessage',
    props:['name'],
    data(){
        return{
         newMessage:null,
         errorText:null
        }
    },
    methods:{
        addMessage(){
          //to send the data, message, name and time to the database
            if(this.newMessage){
              fb.collection('messages').add({
                message:this.newMessage,
                name:this.name,
                timestamp: Date.now()
              }).catch(err =>{
                console.log(err);
              });
              this.newMessage =null;
              
            }else{
              this.errorText ='A message must be entered first'
            } 
        }
    }
}
</script>

<style>

</style>