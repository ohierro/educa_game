<template>
<div class="custom-modal">
  <div class="modal-content">Hola</div>
</div>
</template>

<style>
.custom-modal {
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  transition: all .5s;
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}
</style>