const fs = require("fs");
const builder = require("xmlbuilder");

// Extract the site URL
const envFilePath = "src/environments/env.json";
const envData = JSON.parse(fs.readFileSync(envFilePath, "utf-8"));

const environment = envData.production;

const siteUrl = environment.saasUrl;

// Read and parse the SEO JSON file
const seoDataPath = "src/assets/seo.json";
const seoData = JSON.parse(fs.readFileSync(seoDataPath, "utf8"));

// Generate sitemap URLs from SEO data
const urls = Object.keys(seoData).map((key) => ({
  loc: `${siteUrl}${key}`,
  changefreq: seoData[key].changefreq,
  priority: seoData[key].priority,
}));

console.log(urls);

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

fs.writeFileSync("src/assets/sitemap.xml", xml);
console.log("Sitemap generated!");
