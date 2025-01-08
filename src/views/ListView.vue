<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { onMounted, ref, computed, } from 'vue';
import JSConfetti from 'js-confetti';
import { useRouter } from 'vue-router';

//animation
const confetti = new JSConfetti()

// function showConfetti() {
//   confetti.addConfetti()
// }

// showConfetti()

const users = ref([]);
const txtSearch = ref('');

const router = useRouter();


onMounted(() => {
  (async ()=>{
    const res = await fetch('https://677e47a194bde1c1252b403f.mockapi.io/Data/User/users') ;
    const data = await res.json();
    users.value = data;
  })();
  // fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(data => {
  //     users.value = data;
  //     console.log(data);
  //   });
});

const filterUsers = computed(() => {
  return users.value.filter(item => item.name.toUpperCase().indexOf
  (txtSearch.value.toUpperCase()) !== -1||
   item.email.toUpperCase().indexOf(
    txtSearch.value.toUpperCase()) !== -1);
});


</script>

<template>
  <!-- <TheWelcome /> -->
  <main style="color: #000; padding: 2rem;">
    <h1 style="font-weight: bold;">List Page <br>
      
    </h1>
    
    <input type="text" placeholder="Search"  v-model="txtSearch"/>
    <div class="grp-card">
      <div class="card" v-for="user in filterUsers" >
        <div @click="router.push({ path: `/todo/${user?.id}` })">
          <h3>{{user?.id}} {{ user?.name }}</h3>
          <p>{{user?.email}}</p>
        </div>
      </div>
    </div>
  </main>
</template>
