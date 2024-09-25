import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://elisirons.github.io/calculadoraJavaScript/");

  await page.getByRole("button", { name: "7" }).click();
  await page.getByRole("button", { name: "+" }).click();
  await page.getByRole("button", { name: "6" }).click();
  await page.getByRole("button", { name: "=" }).click();
  await expect(page.locator("#resultado")).toHaveValue("13");

  await page.getByRole("button", { name: "-" }).click();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("button", { name: "=" }).click();
  await expect(page.locator("#resultado")).toHaveValue("11");

  await page.getByRole("button", { name: "x" }).click();
  await page.getByRole("button", { name: "7" }).click();
  await page.getByRole("button", { name: "." }).click();
  await page.getByRole("button", { name: "9" }).click();
  await page.getByRole("button", { name: "=" }).click();
  await expect(page.locator("#resultado")).toHaveValue("86.9");

  await page.getByRole("button", { name: "/" }).click();
  await page.getByRole("button", { name: "1" }).click();
  await page.getByRole("button", { name: "=" }).click();
  await expect(page.locator("#resultado")).toHaveValue("86.9");

  await page.getByRole("button", { name: "C" }).click();
  await expect(page.locator("#resultado")).toHaveValue("");

  await page.getByRole("button", { name: "🌚" }).click();
  await expect(page.locator("body")).toHaveCSS(
    "background-color",
    "rgb(46, 46, 46)"
  );

  await page.getByRole("button", { name: "🌞" }).click();
  await expect(page.locator("body")).toHaveCSS(
    "background-color",
    "rgb(197, 197, 197)"
  );
});
