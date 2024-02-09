<template>
    <div :class="{ 'tag-selected': selected }" @click="toggleSelection">
      <span class="tag-label">
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
    background-color: #9b4444;
    color: white;
    border: none;
    box-shadow: none;
  }
  
  .tag-selected:hover {
    background-color: #9b4444;
  }
  
  .tag-selected .tag-icon {
    display: inline-block;
    margin-left: 4px;
  }
  
  .tag-label {
    display: inline-block;
    padding: 6px 12px;
    border: 1px solid #000;
    border-radius: 20px;
    cursor: pointer;
  }
  
  
  </style>
  