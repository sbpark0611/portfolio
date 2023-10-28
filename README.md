# 포트폴리오

https://www.sangbin-portfolio.n-e.kr

<img width="1422" alt="Screenshot 2023-10-26 at 7 26 38 PM" src="https://github.com/sbpark0611/portfolio/assets/101174826/f7322dc4-533e-439f-a6ed-f03dcdd03a2f">

<img width="1428" alt="Screenshot 2023-10-26 at 7 26 59 PM" src="https://github.com/sbpark0611/portfolio/assets/101174826/837174b4-dc16-4fd5-b84c-d044f5caafbb">

<img width="1436" alt="Screenshot 2023-10-26 at 7 27 48 PM" src="https://github.com/sbpark0611/portfolio/assets/101174826/744c11a2-91c6-4d87-95c5-ee3b462d21c7">

<img width="1430" alt="Screenshot 2023-10-26 at 7 28 04 PM" src="https://github.com/sbpark0611/portfolio/assets/101174826/6d4684bf-9f1f-4c54-94e6-5d5a9a0b3990">

<img width="1430" alt="Screenshot 2023-10-26 at 7 28 24 PM" src="https://github.com/sbpark0611/portfolio/assets/101174826/0385fe02-197e-411c-933c-1ce1ac88f105">

## 기술 스택

### 백엔드

- aws (ec2, rds)

- spring

- postgresql db

### 프론트엔드

- react

### 배포

- docker, docker hub

## 상세

### db 연결

<img width="1268" alt="Screenshot 2023-10-26 at 7 34 08 PM" src="https://github.com/sbpark0611/portfolio/assets/101174826/fb972997-d58d-4508-a823-d8f1e0c8cc26">

- 최초 접속시 spring 서버에 데이터 요청 -> db로부터 데이터 수신

- db 구조: education table, experience table, project table, skill table

### 차트

- recharts를 사용해 막대 그래프 그림

- 받아온 데이터에서 사용된 skill 빈도를 계산한 후 그래프 작성

### 도메인 연결

- elastic ip 생성 후 https://www.sangbin-portfolio.n-e.kr 와 연결

### https 설정

- Let's Encrypt SSL 인증서 발급

- cron으로 인증서 자동 갱신
