<style scoped lang="less">
.tz-btn {
  outline: none;
  border: 1px solid transparent;
  font-size: 18px;
  text-align: center;
 
  &-default {
    color: #656b79;
    background-color: #f6f8fa;
    box-shadow: 0 0 1px #b8bbbf;
  }

  &-small {
    display: inline-block;
    font-size: 14px;
    padding: 0 12px;
    height: 33px;
  }

  &-normal {
    display: inline-block;
    padding: 0 12px;
  }

  &-large {
    display: block;
    width: 100%;
  }

}
</style>

<template>
  <button @click="handleClick" :class="classes">
    {{text}}
  </button>
</template>

<script>

const prefixCls = 'tz-btn'

export default {
  name: 'tz-button',
  props: {
    text: {
      type: String,
      default: '默认按钮'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        `${prefixCls}-${this.type}`,
        `${prefixCls}-${this.size}`
      ]
    }
  },
  methods: {
    handleClick ($event) {
      this.$emit('click', $event)
    }
  }
}
</script>