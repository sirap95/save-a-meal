<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <header class="modal-header">
        <slot name="header">
          <h3> {{ header }}</h3>
        </slot>
        <button class="close-button" @click="close">&times;</button>
      </header>
      <main class="modal-body pb-3 text-start">
        <slot name="body"> {{content}} </slot>
      </main>
      <footer class="modal-footer">
        <slot name="footer">
          <button class="btn btn-danger" @click="close">Close</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "BaseModal",
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    header: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }

  },
  computed: {
    isVisible() {
      return this.value;
    },
  },
  methods: {
    close() {
      this.$emit("input", false);
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  max-width: 80%;
}

.modal-header,
.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
}
</style>
