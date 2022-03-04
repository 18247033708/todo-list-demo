module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 用于 Antd
  plugins: [
    [
      "import",
      { libraryName: "Antd", libraryDirectory: "es", style: true }
    ]
  ]

}
