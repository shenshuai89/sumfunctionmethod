// babel/preset-env 处理高版本语法的js
module.exports = {
  presets: [
    ['@babel/preset-env', {
      // rollupjs 会处理模块，所以设置成 false
      modules: false
    }]
  ],
  plugins: [
  ]
}
