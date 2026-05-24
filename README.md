# 이능관리위원회 (IMC) 이중 포털

AI 채팅 세계관용 **대외 공식 누리집** + **내부 인트라** 사이트입니다.

## 로컬 vs GitHub 배포

| 방식 | 누가 볼 수 있나 |
|------|----------------|
| `npm run dev` | **본인 PC에서만** (개발용) |
| **GitHub Pages** | **인터넷 전체** (푸시하면 자동 배포) |

`npm run build` 결과물(`dist/`)은 정적 HTML이라 GitHub Pages·Netlify 등 어디든 올릴 수 있습니다. 이 저장소에는 **GitHub Actions**로 Pages 배포가 설정되어 있습니다.

---

## GitHub에 올리고 공개하기 (처음 한 번)

### 1. GitHub에 새 저장소 만들기

- [github.com/new](https://github.com/new) 에서 저장소 생성 (예: 이름 `au`)
- Public 또는 Private (Pages는 Public 저장소가 무료로 간단함)

### 2. 로컬에서 푸시

```bash
cd /Users/hyun/Desktop/au
git init
git add .
git commit -m "Initial commit: IMC public portal and intranet"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/au.git
git push -u origin main
```

`YOUR_USERNAME`과 저장소 이름을 본인 것으로 바꾸세요.

### 3. GitHub Pages 켜기

1. GitHub 저장소 → **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**
3. `main`에 푸시하면 `.github/workflows/deploy.yml`이 자동으로 빌드·배포

몇 분 후 주소:

```text
https://YOUR_USERNAME.github.io/au/
```

(저장소 이름이 `au`일 때. 이름이 다르면 `/저장소이름/` 경로가 바뀝니다.)

**저장소 이름이 `USERNAME.github.io`인 경우** (개인 Pages 사이트): Settings → Pages에서 배포 후 `https://USERNAME.github.io/` 루트에 올라갑니다. 이때는 `astro.config.mjs`의 `BASE_PATH`를 `/`로 두거나, workflow의 `BASE_PATH` 줄을 제거하세요.

### 4. (선택) 인트라 비밀번호 바꾸기

Settings → **Secrets and variables** → **Actions** → **New repository secret**

- Name: `PUBLIC_INTRANET_PASSWORD`
- Value: 원하는 비밀번호

없으면 기본값 `imc-intra`로 빌드됩니다.

---

## 로컬 개발

```bash
npm install
npm run dev
```

`http://localhost:4321`

로컬에서는 `BASE_PATH` 없이 `/` 루트로 동작합니다.

---

## 사이트 구조

| 구분 | URL (배포 후) |
|------|----------------|
| 대외 홈 | `/` (또는 `/au/` on Pages) |
| 인트라 로그인 | `/intranet/login` |

- 인트라 비밀번호(데모): `imc-intra`

---

## 중요: GitHub Pages에 올리면

- 사이트 **전체가 공개**됩니다 (대외 + 인트라 URL 모두).
- 인트라 비밀번호는 빌드된 JS에 포함될 수 있어 **진짜 보안이 아닙니다**. RP·세계관 연출용입니다.
- 민감한 설정 원문을 숨기려면: 저장소 Private + Netlify/Vercel 비밀번호 보호, 또는 인트라만 별도 비공개 배포를 검토하세요.

---

## 콘텐츠 추가

- 인물: `src/data/personnel/` + `index.ts`
- 공지: `src/data/notices.ts`

## 기술

- Astro 5 + Tailwind CSS 3
- GitHub Actions → GitHub Pages
