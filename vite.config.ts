import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    // GitHub Pages 배포를 위한 base 경로 설정
    // 리포지토리 이름이 username.github.io가 아니면 base를 설정해야 함
    const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
    const base = repoName && !repoName.includes('.github.io')
      ? `/${repoName}/`
      : '/';
    
    return {
      base: env.VITE_BASE_PATH || base,
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
