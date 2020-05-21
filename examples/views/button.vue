<style scoped lang="less">
.container {
  > button {
    margin-bottom: 15px;
  }
}
</style>

<template>
  <div class="container">
    <tz-button size="small">按钮-小</tz-button>
    <tz-button size="normal">按钮-中</tz-button>
    <tz-button size="large">按钮-大</tz-button>
    <tz-button size="large" type="default">按钮-大-default</tz-button>
    <tz-button size="large" type="primary">按钮-大-primary</tz-button>
    <tz-button size="large" type="danger">按钮-大-danger</tz-button>
    <tz-button size="large" type="danger" :disabled="true">按钮-大-disabled</tz-button>
  </div>
</template>

<script>
export default {
  name: 'test-button'
}
</script>