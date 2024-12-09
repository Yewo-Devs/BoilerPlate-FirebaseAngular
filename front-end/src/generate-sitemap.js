const fs = require("fs");
const builder = require("xmlbuilder");

// Read the environment file
const environment = JSON.parse(
  fs
    .readFileSync("environments/environment.ts", "utf8")
    .replace(/export const environment = /, "")
    .replace(/;/, "")
);

// Extract the site URL
const siteUrl = environment.saasUrl;

const urls = [
  { loc: `${siteUrl}`, changefreq: "daily", priority: 1.0 },
  {
    loc: `${siteUrl}pricing`,
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    loc: `${siteUrl}support`,
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    loc: `${siteUrl}sign-in`,
    changefreq: "weekly",
    priority: 0.8,
  },
  // Add more URLs as needed
];

const root = builder
  .create("urlset", { encoding: "UTF-8" })
  .att("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");

urls.forEach((url) => {
  const urlElement = root.ele("url");
  urlElement.ele("loc", url.loc);
  urlElement.ele("changefreq", url.changefreq);
  urlElement.ele("priority", url.priority);
});

const xml = root.end({ pretty: true });

fs.writeFileSync("assets/sitemap.xml", xml);
console.log("Sitemap generated!");
