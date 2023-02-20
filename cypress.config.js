const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    username: 'testing54321',
    password: 'i0D#6drN@QCz',
    firstName: 'test',
    lastName: 'test',
    overallRatingUrl: '/overall',
    registerUrl: '/register'
  },
  e2e: {
    baseUrl: 'https://buggy.justtestit.org/',
  },
})