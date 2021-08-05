module.exports = {
  purge: [
    '.**/*.html',
     '.**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:"#3498db",
        black:"#222",
        white:"#fff",
        gray:"#ecf0f1",
        MainBtnBg:"#3498db",
        MainBtnText:"#fff",
        MainBtnHoverBg:"#222",
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
