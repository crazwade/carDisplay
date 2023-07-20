<template>
  <el-row :gutter="20">
    <el-col
      v-for="(item, index) in data"
      :key="index"
      :span="isCancelSpan ? 24 : 12"
      class="py-[10px]"
    >
      <el-card
        :body-style="{ padding: '0px' }"
      >
        <el-carousel
          ref="carousel"
          arrow="always"
          :autoplay="false"
          :indicator-position="'none'"
        >
          <el-carousel-item
            v-for="(info, index2) in item.imgs"
            :key="index2"
          >
            <img
              :src="info.src"
              class="image w-full h-full object-cover"
            >
          </el-carousel-item>
        </el-carousel>
        <div style="padding: 14px">
          <div>
            <h2>{{ item.name }}</h2>
          </div>
          <div class=" py-[10px]">
            <span>{{ item.time }}</span>
          </div>
          <div class="bottom">
            <el-button
              type="info"
              class="button"
            >
              詳細資訊
            </el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang='ts'>
const props = defineProps<{
  data: Array<{
    name: string,
    time: string,
    imgs: Array<{ src: string }>,
  }>,
  isCancelSpan: boolean,
}>();

console.log(props);
</script>

<style lang="scss" scoped>

</style>
