/*
 * @Description:
 * @Author: xieyadong
 * @Date: 2024-01-17 09:54:41
 * @LastEditTime: 2024-01-18 19:06:27
 * @LastEditors: xieyadong
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, UserConfig, ConfigEnv } from 'vite'

import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      cors: true, // 默认启用并允许任何源
      open: true, // 在服务器启动时自动在浏览器中打开应用程序
      port: 3000,
      proxy: {
        '/api': {
          target: 'http://xxxx:3300',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/api`), '')
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'static/[name].js',
          assetFileNames: 'static/[name].[ext]'
        }
      },
      // 关闭 sorcemap 报错不会映射到源码
      sourcemap: false,
      // 打包大小超出 4000kb 提示警告
      chunkSizeWarningLimit: 4000,
      // 打包图片资源上线值
      assetsInlineLimit: 1024
    }
  }
})
