<template>
  <div class="btn tag-label col-md-4" :class="{ 'tag-selected': selected }" @click="toggleSelection">
    <span>
      <slot></slot>
    </span>
    <span class="tag-icon" v-if="selected">
       <i class="fas fa-check"></i>
      </span>
    <span class="tag-icon" v-else>
      <i class="fas fa-plus"></i>
    </span>
  </div>
</template>
  
<script lang="ts">
export default {
  data() {
    return {
      selected: false
    };
  },
  methods: {
    toggleSelection() {
      this.selected = !this.selected;
    }
  }
};
</script>
  
<style scoped>
.tag-selected {
  background-color: #9b4444 !important;
  color: white;
  border: 2px solid #fff !important;
  box-shadow: none;
}

.tag-selected:hover, .tag-label:hover {
  background-color: #C68484 !important;
}
.tag-icon {
  display: inline-block;
  margin-left: 10px;
}

.tag-label {
  width:fit-content;
  display: inline-block;
  font-weight: bold;
  padding: 8px 16px;
  border: 2px solid #000;
  border-radius: 24px;
  cursor: pointer;
  background-color: antiquewhite;
}
</style>
  