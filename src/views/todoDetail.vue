<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { onMounted,ref  } from 'vue';
import { useRoute } from 'vue-router';
import JSConfetti from 'js-confetti'

const confetti = new JSConfetti()

function showConfetti() {
  confetti.addConfetti()
}




const router = useRoute();
const user = ref(null);

onMounted(() => {
  (async ()=>{
    const res = await fetch('https://677e47a194bde1c1252b403f.mockapi.io/Data/User/users/'+router.params.id) ;
    const data = await res.json();
    user.value = data;
  })();
  // fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(data => {
  //     users.value = data;
  //     console.log(data);
  //   });
});


</script>

<template>
  <main style="color: red;padding: 2rem;" >
    <!-- <TheWelcome /> -->
    <!-- Todo Detail Page {{ router.params.id }} -->
    <div class="grp-card">
      <button class="card" @click="showConfetti">
      <div class="item" >
        <ul>
          <h3>{{user?.name}}</h3>
          <li>{{user?.username}}</li>
          <li>{{user?.email}}</li>
          <li>{{user?.phone}}</li>
          <li>{{user?.website}}</li>

        </ul>
      </div>
    </button>
    </div>

  </main>
</template>

