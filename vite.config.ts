import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import path from 'path'
import postcssPxtoRem from 'postcss-pxtorem'
import tailwindcss from 'tailwindcss'
import { defineConfig, loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import viteImagemin from 'vite-plugin-imagemin'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import copy from 'rollup-plugin-copy'

export default defineConfig(({ mode }) => ({
  define: {
    'process.env': loadEnv(mode, process.cwd()),
    global: {},
  },
  plugins: [
    nodePolyfills({
      // 启用以下选项以 Polyfill 特定模块
      protocolImports: true, // 支持 protocol 模块 (http, https 等)
    }),
    createHtmlPlugin({ minify: true }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), './src/assets/icon')],
      symbolId: 'icon-[name]',
      customDomId: '__svg__icon__[name]__',
      svgoOptions: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'removeDimensions',
            active: true,
          },
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [
                { fill: 'currentColor' },
                { 'fill-rule': 'evenodd' },
                { 'clip-rule': 'evenodd' },
              ],
            },
          },
        ],
      },
    }),
    react(),
    process.env.NODE_ENV === 'production' &&
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 75,
          progressive: true,
        },
        pngquant: {
          quality: [0.1, 0.3],
          speed: 2,
        },
        webp: {
          quality: 70,
          method: 6,
          lossless: false,
          nearLossless: 60,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
              active: false,
            },
            {
              name: 'removeEmptyAttrs',
              active: true,
            },
          ],
        },
      }),
  ],
  esbuild: {
    target: 'esnext',
  },
  base: '/',
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        api: 'modern-compiler',
      },
    },
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
        postcssPxtoRem({ rootValue: 16, propList: ['*'] }),
        cssnano({ preset: 'default' }),
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist', // 确保输出目录为 dist
    minify: 'terser',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        manualChunks: {
          antd: ['antd'],
          'antd-mobile': ['antd-mobile'],
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
      plugins: [
        copy({
          targets: [
            {
              src: 'src/assets/**/*.tgs',
              dest: 'dist/assets',
            }, // 忽略 .tgs 文件
            { src: 'src/assets/**/*.json', dest: 'dist/assets' }, // 包含 .json 文件
          ],
          hook: 'writeBundle', // 在写入包时执行
        }),
      ],
      onwarn(warning, warn) {
        if (warning.code === 'EVAL' && warning.id?.includes('lottie-web')) {
          // 忽略 lottie-web 的 eval 警告
          return
        }
        warn(warning) // 其他警告继续输出
      },
    },
    chunkSizeWarningLimit: 2000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'antd', 'antd-mobile'],
  },
  server: {
    host: true,
    hmr: true,
    proxy: {
      '/api': {
        target: 'https://minidoge.memesweb3.workers.dev',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
    watch: {
      usePolling: true,
    },
    fs: {
      strict: true,
    },
  },
}))
