exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    TestCafe: {
      url: 'https://ya.ru/',
      browser: 'chrome:headless',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
	multiple: {
	  parallel: {
	    // Splits tests into 2 chunks
	    chunks: 4
	  }
	},
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-multireporter-test',
  translation: 'ru-RU'
}
