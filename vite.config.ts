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

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      'process.env': env,
      global: 'window',
    },
    plugins: [
      nodePolyfills({
        protocolImports: true,
      }),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            ...env,
          },
        },
      }),
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
      outDir: 'dist',
      minify: 'terser',
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
        },
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
              },
              { src: 'src/assets/**/*.json', dest: 'dist/assets' },
            ],
            hook: 'writeBundle',
          }),
        ],
        onwarn(warning, warn) {
          if (warning.code === 'EVAL' && warning.id?.includes('lottie-web')) {
            return
          }
          warn(warning)
        },
      },
      chunkSizeWarningLimit: 2000,
    },
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'antd',
        'antd-mobile',
        '@clerk/clerk-react',
      ],
    },
    server: {
      host: true,
      hmr: true,
      proxy: {
        '/api': {
          target: 'https://donate.mini-doge.com',
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
  }
})
