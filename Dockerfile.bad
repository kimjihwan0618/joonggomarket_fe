# 나만의 가짜 컴퓨터 만드는 설명서

# 1. 운영체제 및 프로그램 하나 하나 설치
# FROM ubuntu:22.04

# RUN sudo apt install -y nodejs
# RUN sudo npm install -g yarn

# 2. 이미 리눅스, node, npm, yarn까지 모두 깔려있는 컴퓨터 다운로드
FROM node:20

# 2-2. 프고그램 셋팅하기
# RUN mkdir myfolder   =>   아래에서 COPY 할 때, 자동으로 만들어주므로 굳이 필요 없음!
COPY . /joonggomarket/
WORKDIR /joonggomarket/
RUN yarn install
RUN yarn build

# 2-3. 도커안에서 프로그램 실행하기
CMD yarn start