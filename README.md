<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1vEkFM3sbSX8icaCXhdVXygtkGQGOjUZk

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

이 프로젝트는 GitHub Pages에 자동으로 배포됩니다.

### 배포 방법

1. **GitHub 저장소 생성**
   - GitHub에서 새 저장소를 만듭니다
   - 저장소 이름을 기억해두세요 (예: `bangkok-trip-2026`)

2. **Git 저장소 초기화 및 푸시**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/사용자명/저장소명.git
   git push -u origin main
   ```

3. **GitHub Pages 설정**
   - GitHub 저장소 페이지로 이동
   - Settings → Pages 메뉴 클릭
   - Source를 "GitHub Actions"로 선택
   - 저장

4. **Secrets 설정 (선택사항)**
   - Settings → Secrets and variables → Actions
   - `GEMINI_API_KEY`를 추가 (API 키를 사용하는 경우)

5. **자동 배포**
   - `main` 브랜치에 푸시하면 자동으로 배포됩니다
   - Actions 탭에서 배포 진행 상황을 확인할 수 있습니다
   - 배포 완료 후 `https://사용자명.github.io/저장소명/`에서 확인 가능

### 리포지토리 이름이 `username.github.io`인 경우

`username.github.io` 형식의 저장소는 루트 경로에서 제공되므로, `vite.config.ts`에서 base를 `/`로 설정하거나 환경 변수 `VITE_BASE_PATH=/`를 설정하세요.
