import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "A Shattered World",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "shattered-world-wiki.netlify.app",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fdf6e3",       // warm parchment background
          lightgray: "#e8dfc8",   // soft aged paper for borders
          gray: "#a89880",        // muted warm grey
          darkgray: "#3d2e1e",    // dark brown for body text
          dark: "#1a0f00",        // near-black with warmth for headers
          secondary: "#c0850a",   // deep gold (Halcyra) — links and accents
          tertiary: "#8b3a6b",    // rich purple (Mira) — hover states
          highlight: "rgba(192, 133, 10, 0.12)",   // gold tint highlight
          textHighlight: "#c0850a44",
        },
        darkMode: {
          light: "#12100e",       // near-black with warmth (Reficul/dark)
          lightgray: "#2a2018",   // dark brown-black for borders/panels
          gray: "#6b5a4e",        // muted mid-tone
          darkgray: "#d4c4a8",    // warm cream for body text
          dark: "#f5e6c8",        // bright warm cream for headers
          secondary: "#d4a017",   // bright gold (Halcyra) — links and accents
          tertiary: "#a855a0",    // deep purple (Mira) — hover states
          highlight: "rgba(212, 160, 23, 0.15)",   // gold glow highlight
          textHighlight: "#8b1a1a88",              // deep red (Grungrak/Reficul)
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
