import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // 这里换成你真实域名 ✅
  site: "https://cnl.cc",
  // 生成的静态文件放在 dist 文件夹（Cloudflare 必须用这个）
  outDir: "dist",
  // 关闭不必须的功能，更稳定
  prefetch: false,
  integrations: [mdx(), sitemap(), tailwind()],
});