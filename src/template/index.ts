const pageTemplate = `<template>
  <view :class="$style.page"> </view>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
.page {
}
</style>
`;

const wxConfig = `
export default definePageConfig({
  navigationBarTitleText: '',
  navigationStyle: 'custom',
})
`;

const alipayConfig = `
export default definePageConfig({
  navigationBarTitleText: '',
  titlePenetrate: 'YES',
  transparentTitle: 'always',
})
`;

const tsx = `import { View } from "@tarojs/components";

import "./index.scss";

const comp = () => {
  return <View className="">abc</View>;
};

export default comp;`;

const pageConfig = `export default {
  navigationBarTitleText: "",
  enableShareAppMessage: true,
};
`;

const vuePage = {
  ".vue": pageTemplate,
  ".config.ts": wxConfig,
  ".config.alipay.ts": alipayConfig,
};

const reactPage = {
  ".tsx": tsx,
  ".scss": ``,
  ".config.ts": pageConfig,
};

export const template = {
  vue: vuePage,
  react: reactPage,
};
