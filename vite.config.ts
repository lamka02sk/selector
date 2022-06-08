import { defineConfig } from 'vite'

export default defineConfig({
    base: '',
    publicDir: '',
    server: {
        host: '0.0.0.0',
        port: 3000,
        strictPort: true,
        force: true,
        base: '/',
    },
    build: {
        target: 'modules',
        outDir: 'dist',
        assetsDir: '',
        rollupOptions: {
            input: ['src/main.js'],
            output: {
                entryFileNames: '[name].js',
                assetFileNames: '[name].[ext]'
            }
        }
    },
})
