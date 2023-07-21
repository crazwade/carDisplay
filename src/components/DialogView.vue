<template>
  <el-dialog
    v-model="dialogVisible"
    title="詳細資訊"
    width="90%"
    :before-close="handleClose"
    :lock-scroll="true"
  >
    <span>{{ dislogData.name }}</span>
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
        />
      </el-carousel-item>
    </el-carousel>
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
