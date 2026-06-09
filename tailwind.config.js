module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        mlops: {
          bg: '#0f172a', card: '#1e293b', border: '#334155',
          primary: '#3b82f6', accent: '#8b5cf6', success: '#10b981',
          warning: '#f59e0b', error: '#ef4444', text: '#f8fafc', muted: '#94a3b8'
        }
      }
    },
  },
  plugins: [],
}
