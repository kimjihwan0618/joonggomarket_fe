module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  geterateBuildId: () => 'joonggomarket_fe_project',
  // 아래 주소들만 out 폴더에 만들어줘 ! => getServerSideProps 있는 페이지는 제외
  exportPathMap: () => ({
    '/': { page: '/' },
    '/boards': { page: '/boards' },
    '/boards/new': { page: '/boards/new' },
    '/markets': { page: '/markets' },
    '/markets/new': { page: '/markets/new' },
    '/login': { page: '/login' },
    '/signup': { page: '/signup' },
    '/mypage/market': { page: '/mypage/market' },
    '/mypage/point': { page: '/mypage/point' },
    '/mypage/profile': { page: '/mypage/profile' },
    '/404': { page: '/404' },
  }),
  images: {
    loader: 'akamai',
    path: '/',
    domains: ['storage.googleapis.com'], // 외부 호스트 추가
  },
}
