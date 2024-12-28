import { defineConfig } from "windicss/helpers";
import AspectRatio from "windicss/plugin/aspect-ratio";

function withOpacitySupport(cssVariable) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${cssVariable}), ${opacityValue})`;
    }
    return `hsl(var(${cssVariable}))`;
  };
}

export default defineConfig({
  content: ["./src/**/*.{astro,html,js,md,mdx,ts,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          base: withOpacitySupport("--bg"),
          primary: withOpacitySupport("--primary"),
          accent: withOpacitySupport("--accent"),
          tertiary: withOpacitySupport("--tertiary"),
          "alt-1": withOpacitySupport("--alt-1"),
          "alt-2": withOpacitySupport("--alt-2"),
          violetish: withOpacitySupport("--extra-violetish"),
          greenish: withOpacitySupport("--extra-greenish"),
          yellowish: withOpacitySupport("--extra-yellowish"),
        },
      },
      backgroundImage: {
        "base-grad": "var(--bg-gradient)",
      },
    },
    fontFamily: {
      body: ["TT Chocolates"],
      sans: ["Mulish"],
    },
  },
  plugins: [AspectRatio],
});
