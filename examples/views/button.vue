<style scoped lang="less">
.container {
  > button {
    margin-bottom: 15px;
  }
}
</style>

<template>
  <div class="container">
    <tz-button size="small">small</tz-button>
    <tz-button size="normal">normal</tz-button>
    <tz-button size="large">large</tz-button>
    <tz-button size="large" type="default">default</tz-button>
    <tz-button size="large" type="primary">primary</tz-button>
    <tz-button size="large" type="danger">danger</tz-button>
    <tz-button size="large" type="danger" disabled>disabled</tz-button>
  </div>
</template>

<script>
export default {
  name: 'test-button'
}
</script>