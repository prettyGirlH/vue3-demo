import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/vue3-demo/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      output: {

        manualChunks: (id) => {
          // 将 Vue 全家桶单独打包
          if (id.includes('node_modules')) {
            if (id.includes('vue') || id.includes('pinia') || id.includes('vue-router')) {
              return 'vue-core'
            }
            if (id.includes('element-plus') || id.includes('vant')) {
              return 'ui-lib'
            }
            return 'vendor'
          }
        },
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js',
        
        // 2. 控制静态资源（CSS、图片等）的路径
        assetFileNames: (assetInfo) => {
          // 获取原始文件名
          const fileName = assetInfo.name || ''
          
          // 将CSS文件放到 css 目录
          if (fileName.endsWith('.css')) {
            return 'css/[name].[hash].[ext]'
          }
          
          // 将图片文件放到 img 目录
          const imgExts = ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'ico']
          if (imgExts.some(ext => fileName.endsWith(`.${ext}`))) {
            return 'img/[name].[hash].[ext]'
          }
          
          // 其他资源（字体等）放到 assets 目录
          return 'assets/[name].[hash].[ext]'
        }
      }
    }
  }
})
