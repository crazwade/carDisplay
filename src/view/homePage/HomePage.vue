<template>
  <el-header
    height="80px"
    class="flex justify-between items-center"
  >
    <el-tooltip
      content="比較清單"
      placement="top"
    >
      <el-icon size="60">
        <List />
      </el-icon>
    </el-tooltip>
    <SearchBar
      @change="filterName"
    />
    <el-tooltip
      content="前往比較"
      placement="top"
    >
      <el-icon size="60">
        <DArrowRight />
      </el-icon>
    </el-tooltip>
  </el-header>
  <el-main>
    <CardItem
      :span-r-w-d="spanRWD"
      :data="data"
    />
  </el-main>
</template>

<script setup lang='ts'>
import { ref, onMounted, reactive } from 'vue';
import CardItem from './component/CardItem.vue';
import SearchBar from './component/SearchBar.vue';

export type DataList = {
  name: string;
  cost: string;
  imgs: Array<{ src: string }>;
  info: {
    fuelConsumption: string;
    ReversingSystem: string;
    Keyless: string;
    AutoHold: string;
    Digitalnstrument: string;
    LaneDepartureWarning: string;
    ActiveSteeringHeadlights: string;
    AutomaticSwitchingLightL: string;
    SeatMaterial: string;
  };
};

const originData: DataList[] = [
  {
    name: 'Skoda Fabia 豪華動能版',
    cost: '869000',
    imgs: [
      {
        src: 'https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/d3fcc747-b0be-4b17-b8b4-43642700e780/Skoda%20Fabia%20%2818%29.jpg',
      },
      {
        src: 'https://cpv3prodbluecdnep.azureedge.net/images3/sites/zhtw-v2/15910551-a3cc-4f8c-99e0-e4c8222c1b3e/810b8738418bbcb0e1c3ef489232d80a/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp',
      },
      {
        src: 'https://cpv3prodbluecdnep.azureedge.net/images3/sites/zhtw-v2/f2a3d74b-47ef-4d47-9403-de3f9b55ade8/9de64bc4e99430fe0b73b1bcb904fe2f/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp'
      },
      {
        src: 'https://cpv3prodbluecdnep.azureedge.net/images3/sites/zhtw-v2/b89bba47-94cb-44c3-9c95-5e6b33275814/7cb2304e810863341a6e0b49a5298565/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp',
      },
      {
        src: 'https://cpv3prodbluecdnep.azureedge.net/images3/sites/zhtw-v2/a8a824a5-57db-4e21-8266-2a6ff90408fa/ec51602960aeb883108c9df269baa86a/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp'
      }
    ],
    info: {
      fuelConsumption: '19.2',
      ReversingSystem: '有',
      Keyless: '有',
      AutoHold: '沒有',
      Digitalnstrument: '10.25吋',
      LaneDepartureWarning: '沒有',
      ActiveSteeringHeadlights: '有',
      AutomaticSwitchingLightL: '有',
      SeatMaterial: '皮布雙織'
    }
  },
  {
    name: 'Skoda Kamiq 豪華動能版',
    cost: '979000',
    imgs: [
      {
        src: 'https://cpv3prodbluecdnep.azureedge.net/images3/sites/zhtw-v2/6d435135-23ec-4ba9-a236-ca94a9b59c41/e9ec7f8b6dd3481087e8aab14b996f01/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp',
      },
      {
        src: 'https://cpv3prodbluecdnep.azureedge.net/images3/sites/zhtw-v2/73dec42d-5a2c-4da4-aabb-c243a20d1c21/ed02b0b7eeb7a891a9e898fd758d87cb/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp',
      },
      {
        src: 'https://cpv3prodbluecdnep.azureedge.net/images3/sites/zhtw-v2/a49854ef-cb8c-4cf0-b6e8-ca6af6a4cc19/b3780fbff25fa959b65027f8aa428d57/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp'
      },
      {
        src: 'https://cpv3prodbluecdnep.azureedge.net/images3/sites/zhtw-v2/8f0fddb2-f9be-4f42-9311-713e8eb092a0/a8ea0bf64fa8d756dedcb9e15db1c715/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp',
      },
      {
        src: 'https://cpv3prodbluecdnep.azureedge.net/images3/sites/zhtw-v2/c9f151f2-f7ea-4d44-b59c-efd93b9ca8f9/037583e86915e9139ea57171640d1df4/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp'
      }
    ],
    info: {
      fuelConsumption: '16.8',
      ReversingSystem: '有',
      Keyless: '有',
      AutoHold: '沒有',
      Digitalnstrument: '10.25吋',
      LaneDepartureWarning: '有',
      ActiveSteeringHeadlights: '沒有',
      AutomaticSwitchingLightL: '沒有',
      SeatMaterial: '真皮'
    }
  },
  {
    name: 'Skoda Scala 豪華動能版',
    cost: '979000',
    imgs: [
      {
        src: 'https://cpv3prodbluecdnep.azureedge.net/images3/sites/zhtw-v2/8ed9cfe8-ceed-411b-a254-5dfabfffd7ea/549f3fcd17ed569b55dc70a938dad7f5/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp',
      },
      {
        src: 'https://cpv3prodbluecdnep.azureedge.net/images3/sites/zhtw-v2/811bf86d-a00d-4659-919b-dee8ba10a20a/2c97db5056ec6d97283b2f18f5845a64/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp'
      },
      {
        src: 'https://cpv3prodbluecdnep.azureedge.net/images3/sites/zhtw-v2/63ecded9-29a0-47a0-a907-1bc8b7c2a098/5184ed03e2fe6ccf456a021939789d53/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp'
      },
      {
        src: 'https://cpv3prodbluecdnep.azureedge.net/images3/sites/zhtw-v2/dd4c17af-be8a-4fc8-866a-fef13251a50c/c88fec63729a1fe1c46af27e11f319d8/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp1200_1.webp'
      }
    ],
    info: {
      fuelConsumption: '16.4',
      ReversingSystem: '有',
      Keyless: '有',
      AutoHold: '沒有',
      Digitalnstrument: '10.25吋',
      LaneDepartureWarning: '有',
      ActiveSteeringHeadlights: '沒有',
      AutomaticSwitchingLightL: '沒有',
      SeatMaterial: '真皮'
    }
  },
  {
    name: 'MG HS 旗艦版',
    cost: '915000',
    imgs: [
      {
        src: 'https://autos.yahoo.com.tw/p/r/w880/car-trim/July2022/e07454adb5e0131144c39118de8ab90a.jpeg',
      },
      {
        src: 'https://autos.yahoo.com.tw/p/r/w1200/car-trim/July2022/917cd2c5aadde0659ec5a6656c5caa1c.jpeg'
      },
      {
        src: 'https://autos.yahoo.com.tw/p/r/w1200/car-trim/July2022/31c5fd2b7fddac77c7596e0ab2ff09a9.jpeg'
      }
    ],
    info: {
      fuelConsumption: '13.5',
      ReversingSystem: '有',
      Keyless: '有',
      AutoHold: '有',
      Digitalnstrument: '12.3吋',
      LaneDepartureWarning: '有',
      ActiveSteeringHeadlights: '沒有',
      AutomaticSwitchingLightL: '有',
      SeatMaterial: '皮革'
    }
  },
  {
    name: 'Volkswagen Polo TSI Style',
    cost: '958000',
    imgs: [
      {
        src: 'https://assets.volkswagen.com/is/image/volkswagenag/polo-MQB?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTk2MCZoZWk9NzIwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjBhMDQ=',
      },
      {
        src: 'https://autos.yahoo.com.tw/p/r/w880/car-trim/November2021/9e92070b50ebca1bebb2a0a6e6004dac.jpeg'
      },
      {
        src: 'https://autos.yahoo.com.tw/p/r/w1200/car-trim/November2021/ed44587298f75db3f68b1cbb9cce0105.jpeg'
      },
      {
        src: 'https://autos.yahoo.com.tw/p/r/w1200/car-trim/November2021/cef63668c704c6eca9b41b58313f5d83.jpeg'
      }
    ],
    info: {
      fuelConsumption: '19.0',
      ReversingSystem: '有',
      Keyless: '有',
      AutoHold: '沒有',
      Digitalnstrument: '8吋',
      LaneDepartureWarning: '有',
      ActiveSteeringHeadlights: '沒有',
      AutomaticSwitchingLightL: '有',
      SeatMaterial: '織布'
    }
  },
  {
    name: 'Volkswagen T-Cross TSI Life',
    cost: '988000',
    imgs: [
      {
        src: 'https://autos.yahoo.com.tw/p/r/w1200/car-trim/November2019/e31e43f8cd076d45bc8382481f3ff7bb.jpeg',
      },
      {
        src: 'https://autos.yahoo.com.tw/p/r/w1200/car-trim/November2019/e7ac678bb54a0894956e416e1a0956c1.jpeg'
      },
      {
        src: 'https://autos.yahoo.com.tw/p/r/w1200/car-trim/November2019/7ec0950e12ac7a52ad7c2958f06428d6.jpeg'
      },
      {
        src: 'https://autos.yahoo.com.tw/p/r/w1200/car-trim/November2021/cef63668c704c6eca9b41b58313f5d83.jpeg'
      }
    ],
    info: {
      fuelConsumption: '18.1',
      ReversingSystem: '選配',
      Keyless: '有',
      AutoHold: '沒有',
      Digitalnstrument: '8吋',
      LaneDepartureWarning: '沒有',
      ActiveSteeringHeadlights: '沒有',
      AutomaticSwitchingLightL: '沒有',
      SeatMaterial: '織布'
    }
  },
];

const data: DataList[] = reactive([]);

const spanRWD = ref<number>(24);

// 偵測視窗大小變化，並重新渲染內容
window.addEventListener('resize', () => {
  spanRWD.value = window.innerWidth < 678 ? 24
  : window.innerWidth > 1000 ? 8 : 12;
});

const filterName = (name: string) => {
  const filteredData = originData.filter((item) => item.name.includes(name));
  const filteredResult = [...filteredData];
  data.splice(0, data.length, ...filteredResult);
};

onMounted(() => {
  spanRWD.value = window.innerWidth < 678 ? 24
  : window.innerWidth > 1000 ? 8 : 12;
  data.splice(0, data.length, ...originData);
});

</script>

<style lang="scss" scoped>

</style>
