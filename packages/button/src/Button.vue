<template>
  <button @click="handleClick">
    {{text}}
  </button>
</template>

<script>
export default {
  name: 'tz-button',
  props: {
    text: {
      type: String,
      default: '默认按钮'
    }
  },
  methods: {
    handleClick ($event) {
      this.$emit('click', $event)
      console.log($event)
    }
  }
}
</script>