const gulpAssets = './assets'; // コンパイル対象のassetsディレクトリ
const publicAssets = '../public/assets'; //出力先のassetsディレクトリ
const syncDir = '../public'; //browse-syncの対象ディレクトリ

module.exports = {
  // 各gulpタスクで使用するpathをexport
  gulpAssets: gulpAssets,
  publicAssets: publicAssets,
  syncDir: syncDir,
  html: '../public/**/*.html',

  javascript: {
    // entryはwebpack.config.jsで指定
    watch: gulpAssets + '/js/**/*',
    dest: publicAssets + '/js'
  },
  vue: {
    watch: './component/**/*.vue'
  },
  stylesheet: {
    entry: gulpAssets + '/scss/main.scss',
    watch: gulpAssets + '/scss/**/*',
    dest: publicAssets + '/css'
  }
};
