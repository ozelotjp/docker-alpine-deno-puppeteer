import puppeteer from "https://deno.land/x/puppeteer@5.5.1/mod.ts";

const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage();

await page.goto("https://example.com");
await page.screenshot({ path: "./example.jpeg" });

Deno.exit();
