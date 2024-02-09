<template>
  <template>
    <button v-if="!link" :class="mode">
      <slot> </slot>
    </button>
    <router-link v-else :to="to" :class="mode">
      <slot> </slot>
    </router-link>
  </template>
</template>

<script setup lang="ts">
const { link, mode, to } = defineProps(["link", "mode", "to"]);
</script>
<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #92f091;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
  a:active,
  button:hover,
 /* TODO: FIX BUTTON:ACTIVE COLOURS */
  button:active {
  background-color: grey;
  border-color: black;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}
.green {
  background-color: #92f091;
  border: 1px solid #6ebb60;
}

.red {
  background-color: #e60203;
  border: 1px solid #bc1d38;
}
.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>
