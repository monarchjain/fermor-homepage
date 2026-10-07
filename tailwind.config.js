module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { ink: "#0F2F2E", chalk: "#F5F7F4", moss: "#3E7C59", amber: "#E8B04B", slate2: "#4A5A58", line: "#D9E1DC" },
      fontFamily: { display: ["var(--font-display)", "sans-serif"], body: ["var(--font-body)", "sans-serif"] },
    },
  },
  plugins: [],
};
