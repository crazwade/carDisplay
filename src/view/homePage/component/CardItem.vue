<template>
  <DialogView
    :is-visible="isVisible"
    :dislog-data="dislogData"
    @close="dialogClose"
  />
  <el-row :gutter="20">
    <div
      v-if="data.length === 0"
      class=" w-full"
    >
      <el-col :span="24">
        <el-card
          :body-style="{ padding: '0px' }"
        >
          <div style="padding: 14px">
            查無資料...
          </div>
        </el-card>
      </el-col>
    </div>
    <el-col
      v-for="(item, index) in data"
      :key="index"
      :span="spanRWD"
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
            <span class="text-xl">
              {{ item.name }}
            </span>
          </div>
          <div class=" py-[10px] flex justify-center items-center">
            <el-icon
              color="#cd7f32"
              size="24"
            >
              <Money />
            </el-icon>
            <span class=" ml-5">
              {{ Number(item.cost).toLocaleString() }}
            </span>
          </div>
          <div class="bottom">
            <el-button
              type="info"
              class="button"
              @click="dialogOpen(item)"
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
import { ref } from 'vue';
import DialogView from '@/components/DialogView.vue';
import type { DataList } from '../HomePage.vue';

defineProps<{
  data: Array<DataList>,
  spanRWD: number,
}>();

const isVisible = ref(false);
const dislogData = ref<DataList>({
  name: '',
  cost: '',
  imgs: [
    {
      src: ''
    }
  ],
  info: {
    fuelConsumption: '',
    ReversingSystem: '',
    Keyless: '',
    AutoHold: '',
    Digitalnstrument: '',
    LaneDepartureWarning: '',
    ActiveSteeringHeadlights: '',
    AutomaticSwitchingLightL: '',
    SeatMaterial: '',
  },
});

const dialogClose = () => {
  isVisible.value = false;
};

const dialogOpen = (obj: DataList) => {
  isVisible.value = true;
  dislogData.value = obj;
};

</script>

<style lang="scss" scoped>
.spanTitle {
  font-family: inherit;
  font-weight: bold;
}
</style>
