<template>
  <el-dialog
    v-model="dialogVisible"
    title="詳細資訊"
    width="90%"
    :before-close="handleClose"
    :lock-scroll="true"
  >
    <el-row>
      <el-col
        :span="24"
        class=" py-2"
      >
        <span class=" text-xl">{{ dislogData.name }}</span>
      </el-col>
      <el-col
        :span="24"
      >
        <div class=" py-[10px] flex justify-center items-center">
          <el-icon
            color="#cd7f32"
            size="24"
          >
            <Money />
          </el-icon>
          <span class=" ml-5">
            {{ Number(dislogData.cost).toLocaleString() }}
          </span>
        </div>
      </el-col>
      <el-col
        :span="24"
        class=" py-2"
      >
        <el-carousel
          :autoplay="false"
          :indicator-position="'none'"
        >
          <el-carousel-item
            v-for="(item, index) in dislogData.imgs"
            :key="index"
          >
            <el-image
              :src="item.src"
              :preview-src-list="dislogData.imgs.map((info) => info.src)"
              :preview-teleported="true"
              class=" w-auto h-[100%] object-cover"
            />
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col
        :span="24"
        class="py-2"
      >
        <el-table
          style="width: 100%"
          :data="getValues()"
          :show-header="false"
        >
          <el-table-column
            prop="title"
            width="200"
          />
          <el-table-column
            prop="value"
            width="120"
          />
        </el-table>
      </el-col>
    </el-row>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">關閉</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue';
import type { DataList } from '../view/homePage/HomePage.vue';

const props = defineProps<{
  isVisible: boolean;
  dislogData: DataList;
}>();

const emits = defineEmits<{
  (e: 'close'):void;
}>();

const dialogVisible = ref(false);
const info = ref();

const headers = [
  {
    prop: 'fuelConsumption',
    label: '油耗',
  },
  {
    prop: 'SeatMaterial',
    label: '座椅材質',
  },
  {
    prop: 'ReversingSystem',
    label: '倒車顯影',
  },
  {
    prop: 'Keyless',
    label: 'Keyless',
  },
  {
    prop: 'AutoHold',
    label: 'Auto Hold',
  },
  {
    prop: 'Digitalnstrument',
    label: '矩陣頭燈',
  },
  {
    prop: 'LaneDepartureWarning',
    label: '道路偏移警示',
  },
  {
    prop: 'ActiveSteeringHeadlights',
    label: '主動轉向頭燈',
  },
  {
    prop: 'AutomaticSwitchingLightL',
    label: '遠近光自動切換',
  },
];

watch(() => props.isVisible, () => {
  dialogVisible.value = props.isVisible;
  info.value = props.dislogData.info;
  console.log(getValues());
  console.log(info.value);
});

const handleClose = () => {
  emits('close');
};

const getValues = () => {
  return headers.map((item) => {
    return [info.value].reduce((pre, cur) => Object.assign(pre, {'value': cur[item.prop]}), {'title': item.label,});
  });
};

</script>

<style lang="scss" scoped>
</style>
