<script setup >
import TheWelcome from '../components/TheWelcome.vue'
import JSConfetti from 'js-confetti';
import { ref, reactive } from 'vue';

const userData = reactive({
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
});

const confetti = new JSConfetti()
function showConfetti() {
  confetti.addConfetti()
}

const handleCreate = async () => {
  const res = await fetch('https://677e47a194bde1c1252b403f.mockapi.io/Data/User/users', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await res.json();
  console.log(data);
};

const handleClick = () => {
  
    handleCreate() 
      // Your handleCreate logic
    
    showConfetti() 
      // Your showConfeti logic
    }
  


</script>

<template>
  <main style="color: #000;padding: 2rem;" >
    <!-- <TheWelcome /> -->
    <h1 style="font-weight: bold;">Create Page</h1>
      <div style="margin-top: 2rem;">
        <label >Name:</label>
        <input type="text" required placeholder="Enter your name"  v-model="userData.name"/>
      </div>
      <div style="margin-top: 2rem;">
        <label >Username:</label>
        <input type="text" required placeholder="Enter your username"  v-model="userData.username"/>
      </div>
      <div style="margin-top: 2rem;">
        <label >Email:</label>
        <input type="text" required placeholder="Enter your email"  v-model="userData.email"/>
      </div>
      <div style="margin-top: 2rem;">
        <label >Phone:</label>
        <input type="text" required placeholder="Enter your phone"  v-model="userData.phone"/>
      </div>
      <div style="margin-top: 2rem;">
        <label >Website:</label>
        <input type="text" required placeholder="Enter your website"  v-model="userData.website"/>
      </div>
      <button class="btn-action2" @click="handleClick" >Create</button>
  </main>
</template>
