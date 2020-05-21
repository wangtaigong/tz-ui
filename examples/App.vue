<template>
  <div>
    {{greet}}
    <tz-Button></tz-Button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      greet: 'Hello World'
    }
  }
}
</script>