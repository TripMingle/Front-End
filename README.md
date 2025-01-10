
<div align="center">
  <img src='https://github.com/user-attachments/assets/508ec400-9dc2-4995-af06-fdb2c0ae0a33' width=540 alt='Tripmingle 로고'/>
</div>

</br>

# Tripmingle

> 글로벌 여행 동행 웹 서비스 Tripmingle
>
> 팀구성 : **Frontend 1명** , Backend 2명 </br>
> 개발 기간 : 2024.06 ~ 진행중 </br></br> 2024년도 과학기술정보통신부의 재원으로 정보통신기획평가원의 지원을 받아 수행된 연구임. (2024-SW마에스트로과정)

## Tripmingle 배포 사이트

> [https://www.tripmingle.net](https://www.tripmingle.net/)

## Tripmingle 실행
1. dependency 설치
```bash
pnpm install
```
2. 개발 서버 실행 (3000포트)
```bash
pnpm dev
```

## 프로젝트 소개
TripMingle은 글로벌 여행 동행 서비스로, `여행 동행 찾기`, `여행 일정 관리`, `여행 동행 매칭 및 추천`, `여행 동행 채팅` 서비스를 제공합니다.

## 프로젝트 주요 기능
- 여행 동행 찾기 `프론트엔드 개발 완료` `백엔드 개발 완료`
  - 여행 날짜, 여행 동행 인원, 여행 동행 스타일, 여행 일정 등을 입력해 동행글 작성
  - 동행글 댓글 작성
  - 여행장 정보 확인
 
- 여행 일정 `프론트엔드 개발 완료` `백엔드 개발 완료`
  - 방문할 장소 검색 및 추가
  - 지도에서 방문 장소 확인
 
## 개발 환경

<div>
  Frontend : 
  <img src="https://img.shields.io/badge/React-v18.0.0-61dafb?style=flat-square&logo=React"/>
  <img src="https://img.shields.io/badge/NextJs-v14.2.3-3178c6?style=flat-square&logo=Next.Js"/>
  <img src="https://img.shields.io/badge/Typescript-v5.0.0-3178c6?style=flat-square&logo=Typescript"/>
  <img src="https://img.shields.io/badge/Zustand-v4.5.3-764abc?style=flat-square&"/>
  <img src="https://img.shields.io/badge/Vanilla--extract-v1.15.3-ff4785?style=flat-square&"/>
  <img src="https://img.shields.io/badge/pnpm-v9.4.0-f69220?style=flat-square&"/>
</div>
<div>
  Backend :
  <img src="https://img.shields.io/badge/Java-555555?style=flat-square&logo=Java"/> 
  <img src="https://img.shields.io/badge/Spring Boot-555555?style=flat-square&logo=Spring Boot"/>
  <img src="https://img.shields.io/badge/Spring Data JPA-555555?style=flat-square&logo=Spring Data JPA"/> 
  <img src="https://img.shields.io/badge/Spring Security-555555?style=flat-square&logo=Spring Security"/> 
  <img src="https://img.shields.io/badge/MySQL-555555?style=flat-square&logo=MySQL"/>
  <img src="https://img.shields.io/badge/Redis-555555?style=flat-square&logo=Redis"/> 
  <img src="https://img.shields.io/badge/MongoDB-555555?style=flat-square&logo=MongoDB"/> 
  <img src="https://img.shields.io/badge/EC2-555555?style=flat-square&logo=Amazon EC2"/> 
  <img src="https://img.shields.io/badge/RDS-555555?style=flat-square&logo=Amazon RDS"/> 
  <img src="https://img.shields.io/badge/AWS OpenSearch-555555?style=flat-square&logo=OpenSearch"/> 
  <img src="https://img.shields.io/badge/S3-555555?style=flat-square&logo=Amazon S3"/>

</div>

## 동작 화면
> ### 메인 페이지 (나라 검색, 나라 선택)

<table border="1" align='center'>
    <tr>
        <th>데스크톱 화면</th>
        <th>모바일 화면</th>
    </tr>
    <tr>
        <td> 
          <img src='https://github.com/user-attachments/assets/e10944e3-e8cd-42f9-bd8e-b1f311de998e'  alt='main_desk' />
        </td>
        <td> 
          <img src='https://github.com/user-attachments/assets/a6a94b93-dd3b-4384-8264-fc2a5fb2a7d5' alt='main_mobile' />
        </td>
    </tr>
</table>

> ### 동행 페이지 (동행글 리스트, 동행글 상세보기, 댓글 작성)

<table border="1" align='center'>
    <tr>
        <th>데스크톱 화면</th>
        <th>모바일 화면</th>
    </tr>
    <tr>
        <td> 
          <img src='https://github.com/user-attachments/assets/5bdb6f47-3ce7-4c96-966a-fa550ad067fd'  alt='companion_desk' />
        </td>
        <td> 
          <img src='https://github.com/user-attachments/assets/6c0153e4-91ff-4bb2-bd56-7b09d5c929f3' alt='companion_mobile' />
        </td>
    </tr>
</table>

> ### 동행글 작성 페이지
> 1step : 나라 선택, 나라 검색 </br>
> 2step : 날짜, 동행 언어, 동행인원, 동행 스타일 선택 </br>
> 3step : 여행 일정, 일정 추가, 일정 지도, 장소 검색 </br> 
> 4step : 제목, 내용 작성

<table border="1" align='center'>
    <tr>
        <th>데스크톱 화면</th>
        <th>모바일 화면</th>
    </tr>
    <tr>
        <td> 
          <img src='https://github.com/user-attachments/assets/03566a4d-34af-4259-9cfd-7a3aca126bd8'  alt='write_desk' />
        </td>
        <td> 
          <img src='https://github.com/user-attachments/assets/fea6b145-7915-4671-aa59-d4e4dc95d492' alt='write_mobile' />
        </td>
    </tr>
</table>





> ### 로그인 페이지 (비로그인일 경우 동행 요청, 댓글 작성 비허용, 카카오 소셜 로그인)

<table border="1" align='center'>
    <tr>
        <th>데스크톱 화면</th>
        <th>모바일 화면</th>
    </tr>
    <tr>
        <td> 
          <img src='https://github.com/user-attachments/assets/5aeeb00a-68e1-4fc6-97d9-919579c48853'  alt='login_desk' />
        </td>
        <td> 
          <img src='https://github.com/user-attachments/assets/92cd85d1-4157-464d-9e7a-e1c3eb9dccd4' alt='login_mobile' />
        </td>
    </tr>
</table>
