# EmailJS 설정 가이드

## 📧 이메일로 문의 받기 설정하기

### 1단계: EmailJS 계정 만들기

1. https://www.emailjs.com/ 접속
2. **Sign Up** 클릭하여 무료 계정 생성
3. 이메일 인증 완료

### 2단계: Email Service 추가

1. EmailJS 대시보드에서 **Email Services** 클릭
2. **Add New Service** 클릭
3. **Gmail** 선택 (또는 원하는 이메일 서비스)
4. Gmail 계정으로 로그인 (`shinji9112@gmail.com`)
5. **Service ID**를 메모해두기 (예: `service_xxxxxx`)

### 3단계: Email Template 만들기

1. **Email Templates** 메뉴 클릭
2. **Create New Template** 클릭
3. 다음 템플릿 사용:

```
제목: [S.R&P 상담 신청] {{user_name}}님의 문의

내용:
================================
S.R&P 무료 상담 신청
================================

📋 고객 정보
-----------------------
이름: {{user_name}}
연락처: {{user_phone}}
이메일: {{user_email}}
매장명: {{store_name}}

💬 문의 내용
-----------------------
{{message}}

================================
접수 시간: {{reply_to}}
================================
```

4. **Template ID**를 메모해두기 (예: `template_xxxxxx`)
5. **Save** 클릭

### 4단계: Public Key 확인

1. **Account** > **General** 메뉴로 이동
2. **Public Key** 확인 및 복사 (예: `xxxxxxxxxxxxx`)

### 5단계: 환경 변수 설정

프로젝트 루트 폴더에 `.env.local` 파일 생성:

```bash
# .env.local 파일 내용
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

실제 값으로 교체하세요!

### 6단계: 개발 서버 재시작

```bash
npm run dev
```

### 7단계: 테스트

1. http://localhost:3000/contact 접속
2. 무료 상담 신청 폼 작성
3. 제출 버튼 클릭
4. `shinji9112@gmail.com`에서 이메일 확인

---

## 🚀 배포 시 주의사항

Vercel에 배포할 때 환경 변수를 설정해야 합니다:

1. Vercel 프로젝트 대시보드 접속
2. **Settings** > **Environment Variables**
3. 위 3개의 환경 변수 추가
4. **Redeploy** 실행

---

## 📊 무료 플랜 한도

- 월 200개 이메일
- 한도 초과 시 유료 플랜으로 전환 필요

---

## 🆘 문제 해결

**이메일이 안 오는 경우:**
1. 스팸 폴더 확인
2. EmailJS 대시보드에서 전송 내역 확인
3. 브라우저 콘솔에서 에러 메시지 확인
4. 환경 변수가 정확한지 확인

**"Failed to send email" 에러:**
- Service ID, Template ID, Public Key가 정확한지 확인
- EmailJS 계정이 활성화되었는지 확인

