import react from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import path from "path";
import postcssPxtoRem from "postcss-pxtorem";
import tailwindcss from "tailwindcss";
import { defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import viteImagemin from "vite-plugin-imagemin";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";


export default defineConfig(({ mode }) => ({
  define: {
    "process.env": loadEnv(mode, process.cwd()),
    global: {},
  },
  plugins: [
    createHtmlPlugin({ minify: true }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "./src/assets/icon")],
      symbolId: "icon-[name]",
      customDomId: "__svg__icon__[name]__",
      svgoOptions: {
        plugins: [
          {
            name: "removeViewBox",
            active: false,
          },
          {
            name: "removeDimensions",
            active: true,
          },
        ],
      },
    }),
    react(),
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
      },
      pngquant: {
        quality: [0.65, 0.8],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
  ],
  esbuild: {
    target: "esnext"
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
        postcssPxtoRem({ rootValue: 16, propList: ["*"] }),
        cssnano({ preset: "default" }),
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: "terser",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      treeshake: true,
      output: {
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
        format: "es",
        manualChunks(id) {
          if (id.includes("node_modules")) {
            const packageName = id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0];
            if (
              ["html-parse-stringify", "void-elements"].includes(packageName)
            ) {
              return;
            }
            return packageName;
          }
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"],
        passes: 3,
        toplevel: true,
        reduce_vars: true,
        collapse_vars: true,
      },
      mangle: true,
      format: {
        comments: false,
      },
    },
  },
  server: {
    host: true,
    hmr: true,
    watch: {
      usePolling: true,
    },
    fs: {
      strict: true,
    },
  },
}));
