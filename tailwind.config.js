module.exports = {
  mode:'jit',
  purge: [
    '.**/*.html',
    '.**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:"#9e9d24",
        black:"#222",
        white:"#fff",
        gray:"#ecf0f1",
        MainBtnBg:"#fff",
        MainBtnText:"#9e9d24",
        MainBtnHoverBg:"#9e9d24",
        MainBtnHoverText:"#fff"
      },
      fontFamily: {
				base: [
					"YuGothic",
					"Yu Gothic Medium",
					"Yu Gothic",
					"Hiragino Kaku Gothic Pro",
				],
				Raleway: ["Raleway"],
			},
    },
  },
  variants: {
    extend: {
      // transform:['hover'],
      // scale:['hover']
    },
  },
  plugins: [],
}
