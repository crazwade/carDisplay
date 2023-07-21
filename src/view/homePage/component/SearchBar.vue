<template>
  <div class="searchBar">
    <div class="search-box">
      <form class="flex items-center">
        <input
          v-model="name"
          type="text"
          placeholder=" "
          class="w-10 h-10 rounded-full border-3 border-black transition-all focus:w-72 focus:outline-none focus:border-black"
          @input="handleInputChange"
        >
        <button
          type="reset"
          class="w-5 h-5 absolute top-3 right-3 transform rotate-45 transition-transform focus:outline-none"
          @click="reset"
        >
          <span class="absolute left-1/2 top-1/2 w-0.5 h-5 bg-black transform -translate-x-1/2 -translate-y-1/2 transition-transform ease-out origin-center" />
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emits = defineEmits<{
  (e: 'change', name: string):void;
}>();

const name = ref('');

const handleInputChange = () => {
  emits('change', name.value);
};

const reset = () => {
  name.value = '';
  emits('change', name.value);
};

</script>

<style lang="scss" scoped>
$font-size: 20px;
$frame-color: #000000;
$size: 2.5em;
$open-width: 12em;
$open-padding: 0.3em 2.1em 0.3em 0.4em;
$frame-thickness: 0.3em;
$handle-height: 1.2em;
$open-trans-time: 800ms;
$close-trans-time: 150ms;

.searchBar {
  height: 75px;
  .search-box {
    font-size: $font-size;
    border: solid $frame-thickness $frame-color;
    display: inline-block;
    position: relative;
    border-radius: $size;
    input[type="text"] {
      font-family: inherit;
      font-weight: bold;
      width: $size;
      height: $size;
      padding: $open-padding;
      border: none;
      box-sizing: border-box;
      border-radius: $size;
      transition:
        width $open-trans-time cubic-bezier(0.68, -0.55, 0.27, 1.55) $close-trans-time;
      &:focus {
        outline: none;
      }
      &:focus, &:not(:placeholder-shown) {
        width: $open-width;
        transition: width $open-trans-time cubic-bezier(0.68, -0.55, 0.27, 1.55);
        + button[type="reset"] {
          transform: rotate(-45deg) translateY(0);
          transition:
            transform $close-trans-time ease-out $open-trans-time;
        }
        + button[type="reset"]:after {
          opacity: 1;
          transition:
            top $close-trans-time ease-out ($open-trans-time + $close-trans-time),
            right $close-trans-time ease-out ($open-trans-time + $close-trans-time),
            opacity $close-trans-time ease ($open-trans-time + $close-trans-time);
        }
      }
    }
    button[type="reset"] {
      background-color: transparent;
      width: $handle-height;
      height: $handle-height;
      border: 0;
      padding: 0;
      outline: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: ($size / 2) - ($handle-height / 2);
      right: ($size / 2) - ($handle-height / 2);
      transform: rotate(-45deg) translateY($size - $frame-thickness);
      transition:
        transform $close-trans-time ease-out $close-trans-time;
      &:before, &:after {
        content: "";
        background-color: $frame-color;
        width: $frame-thickness;
        height: $handle-height;
        position: absolute;
      }
      &:after {
        transform: rotate(90deg);
        opacity: 0;
        transition:
          transform $close-trans-time ease-out,
          opacity $close-trans-time ease-out;
      }
    }
  }
}
</style>
