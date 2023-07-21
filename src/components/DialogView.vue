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

const props = defineProps<{
  isVisible: boolean;
  dislogData: {
    name: string,
    cost: string,
    imgs: Array<{ src: string }>,
  }
}>();

const emits = defineEmits<{
  (e: 'close'):void;
}>();

const dialogVisible = ref(false);

watch(() => props.isVisible, () => {
  dialogVisible.value = props.isVisible;
});

const handleClose = () => {
  emits('close');
};

</script>

<style lang="scss" scoped>

</style>
