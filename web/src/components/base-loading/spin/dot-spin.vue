<script setup></script>

<template>
  <div class="dots-loader" />
</template>

<style lang="less" scoped>
.dots-loader:not(:required) {
  position: relative;
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-bottom: 30px;
  overflow: hidden;
  text-indent: -9999px;
  background: transparent;
  border-radius: 100%;
  box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px,
    #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
  transform-origin: 50% 50%;
  animation: dots-loader 5s infinite ease-in-out;
}

@keyframes dots-loader {
  0% {
    box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px,
      #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
  }

  8.33% {
    box-shadow: #f86 14px -14px 0 7px, #fc6 14px -14px 0 7px,
      #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
  }

  16.67% {
    box-shadow: #f86 14px 14px 0 7px, #fc6 14px 14px 0 7px, #6d7 14px 14px 0 7px,
      #4ae -14px 14px 0 7px;
  }

  25% {
    box-shadow: #f86 -14px 14px 0 7px, #fc6 -14px 14px 0 7px,
      #6d7 -14px 14px 0 7px, #4ae -14px 14px 0 7px;
  }

  33.33% {
    box-shadow: #f86 -14px -14px 0 7px, #fc6 -14px 14px 0 7px,
      #6d7 -14px -14px 0 7px, #4ae -14px -14px 0 7px;
  }

  41.67% {
    box-shadow: #f86 14px -14px 0 7px, #fc6 -14px 14px 0 7px,
      #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
  }

  50% {
    box-shadow: #f86 14px 14px 0 7px, #fc6 -14px 14px 0 7px,
      #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
  }

  58.33% {
    box-shadow: #f86 -14px 14px 0 7px, #fc6 -14px 14px 0 7px,
      #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
  }

  66.67% {
    box-shadow: #f86 -14px -14px 0 7px, #fc6 -14px -14px 0 7px,
      #6d7 -14px -14px 0 7px, #4ae 14px -14px 0 7px;
  }

  75% {
    box-shadow: #f86 14px -14px 0 7px, #fc6 14px -14px 0 7px,
      #6d7 14px -14px 0 7px, #4ae 14px -14px 0 7px;
  }

  83.33% {
    box-shadow: #f86 14px 14px 0 7px, #fc6 14px -14px 0 7px,
      #6d7 14px 14px 0 7px, #4ae 14px 14px 0 7px;
  }

  91.67% {
    box-shadow: #f86 -14px 14px 0 7px, #fc6 14px -14px 0 7px,
      #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
  }

  100% {
    box-shadow: #f86 -14px -14px 0 7px, #fc6 14px -14px 0 7px,
      #6d7 14px 14px 0 7px, #4ae -14px 14px 0 7px;
  }
}
</style>
