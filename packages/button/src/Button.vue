<style scoped lang="less">
.tz-btn {
    border-radius: 4px;
    border: 0;
    box-sizing: border-box;
    color: inherit;
    display: block;
    font-size: 18px;
    height: 41px;
    outline: 0;
    overflow: hidden;
    position: relative;
    text-align: center;

  &::after {
    background-color: #000;
    content: "";
    opacity: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
  }

  &:active::after {
    opacity: .4;
  }
 
  &-default {
    color: #656b79;
    background-color: #f6f8fa;
    box-shadow: 0 0 1px #b8bbbf;
  }

  &-primary {
    color: #fff;
    background-color: #26a2ff;
  }

  &-danger {
    color: #fff;
    background-color: #ef4f4f;
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

  &-disabled {
    opacity: .6;
  }

}
</style>

<template>
  <button @click="handleClick" :class="classes" :disabled="disabled">
    <slot>{{text}}</slot>
  </button>
</template>

<script>
import { oneOf } from '../../shared'

const prefixCls = 'tz-btn'

export default {
  name: 'tz-button',
  props: {
    text: {
      type: String,
      default: '默认按钮'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return oneOf(value, ['default', 'primary', 'danger'])
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return oneOf(value, ['small', 'normal', 'large'])
      }
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        `${prefixCls}-${this.disabled ? 'disabled' : ''}`,
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