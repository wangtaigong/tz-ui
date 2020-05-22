<style scoped lang="less">
.tz-cell {
  background-color: #fff;
  box-sizing: border-box;
  color: inherit;
  min-height: 48px;
  display: block;
  overflow: hidden;
  position: relative;
  text-decoration: none;

  &-left {
    position: absolute;
    height: 100%;
    left: 0;
    transform: translateX(-100%);
  }

  &-right {
    position: absolute;
    height: 100%;
    right: 0;
    transform: translateX(100%);
  }

  &-wrapper {
    background-image: linear-gradient(180deg,#d9d9d9,#d9d9d9 50%,transparent 0);
    background-size: 120% 1px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-origin: content-box;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    font-size: 16px;
    line-height: 1;
    min-height: inherit;
    overflow: hidden;
    padding: 0 10px;
    width: 100%;
  }

}
</style>

<template>
  <a class="tz-cell" :href="href">
    <span class="tz-cell-mask" v-if="isLink"></span>
    <div class="tz-cell-left">
      <slot name="left"></slot>
    </div>
    <div class="tz-cell-wrapper">
      <div class="tz-cell-title">
        <slot name="title">
          <span class="tz-cell-text" v-text="title"></span>
          <span v-if="label" class="tz-cell-label" v-text="label"></span>
        </slot>
      </div>
      <div class="tz-cell-value" :class="{ 'is-link' : isLink }">
        <slot>
          <span v-text="value"></span>
        </slot>
      </div>
    </div>
    <div class="tz-cell-right">
      <slot name="right"></slot>
    </div>
  </a>
</template>

<script>
export default {
  name: 'tz-cell',
  props: {
    to: [String, Object],
    title: String,
    label: String,
    isLink: Boolean,
    value: {}
  },
  computed: {
    href() {
      return this.to
    },
    classes () {}
  },
  methods: {}
}
</script>