<script>
export default {
  inject: ["activeTabProvided"],
  props: {
    content: { type: Object, required: true },
    wwFrontState: { type: Object, required: true },
    wwEditorState: { type: Object, required: true },
  },
};
</script>

<template>
  <div v-if="this.content.name === this.activeTabProvided">
    <wwLayout path="slot" />
  </div>
</template>
