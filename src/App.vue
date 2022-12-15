<script setup lang="ts">
</script>

<template>
<div class="container">
  <header>
    <h1>Educa game!!</h1>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    Mi footer
  </footer>
</div>
</template>

<style scoped>
.container {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

main {
  flex: 1 0 auto;
}

header, main, footer {
    flex-shrink: 0;
}
/* .container {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "header header header"
    "main main main"
    "footer footer footer";
}

footer { grid-area: footer; }

header { grid-area: header; }

main { grid-area: main; } */

</style>
