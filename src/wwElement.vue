<script>
export default {
  inject: ["activeTabProvided"],
  props: {
    name: {
      type: String,
    },
  },
};
</script>

<template>
  <div v-if="name === this.activeTabProvided">
    <slot></slot>
  </div>
</template>
