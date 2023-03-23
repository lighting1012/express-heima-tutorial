import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
// 自动引入vant组件
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  root: './frontend',
  resolve: {
    alias: {
      '@': resolve(process.cwd(), './frontend', 'src')
    }
  },
  server: {
    host : '0.0.0.0',
    port: 9999,
    strictPort : false,
    https : false,
    open : false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8888',
        secure: false,
        changeOrigin: true
      }
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    })
  ]
})