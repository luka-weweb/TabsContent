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
  <wwLayout v-if="this.content.name === this.activeTabProvided" path="slot" />
</template>
