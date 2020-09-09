const { baseDir } = require('../scripts/helpers');

const config = {
  cliOptions: {
    cache: true,
    cacheLocation: baseDir('.jest', '.eslintcache'),
    fix: !!process.env.FIX,
    ignorePath: baseDir('.eslintignore'),
    format: 'codeframe',
  },
};

module.exports = config;
