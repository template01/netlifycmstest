module.exports = {
  content: {
    permalink: ':slug',
    routes: [
      {
        path: '/_content',
        method: 'get'
      }
    ],
    isPost: false
  },

  api: {
    baseURL: process.env.NODE_ENV === 'production'
      ? 'http://localhost:3000'
      : 'https://heuristic-kalam-9c1b36.netlify.com'
  }
}
