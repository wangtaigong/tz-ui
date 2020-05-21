<template>
  <button @click="handleClick">
    buttonjfla;jf;aslj
    <!-- <slot></slot>   -->
  </button>
</template>

<script>
export default {
  name: 'tz-Button',
  methods: {
    handleClick () {
      console.log('clicked button')
    }
  }
}
</script>