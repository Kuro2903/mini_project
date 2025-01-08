<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <RouterLink to="/">
      <img class="logo" width="60" src="./assets/logo.svg" alt="Vue logo"  />
    </RouterLink>
    <nav>
      <RouterLink to="/list">
      <div class="btn-main">
          List
        </div>
      </RouterLink>
      <RouterLink to="/create">
      <div class="btn-action">
          Create
        </div>
      </RouterLink>
    </nav>
  </header>
<RouterView></RouterView>

</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: var(--color-background);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .logo {
    display: block;
  }

  nav {
    display: flex;
  }

  .btn-main {
    margin-right: 1rem;
  }

  .btn-action {
    margin-left: auto;
  }

  a {
    color: var(--color-text);
    text-decoration: none;
  }

  /* a:hover {
    text-decoration: underline;
  } */

</style>
