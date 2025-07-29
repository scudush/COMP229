import { test, expect } from '@playwright/test';

test('contact form renders and accepts input', async ({ page }) => {
  await page.goto('http://localhost:5173'); // Update if necessary

  // Scroll to the contact section
  await page.locator('#contact').scrollIntoViewIfNeeded();

  // Fill out the form
  await page.getByPlaceholder('Your Name').fill('Scud');
  await page.getByPlaceholder('Your Email').fill('scud@example.com');
  await page.getByPlaceholder('Your Message').fill('This is a test message');

  // Submit form
  await page.getByRole('button', { name: /send message/i }).click();

  // Wait for status message
  const statusMessage = page.locator('text=/✅|❌/'); // Matches either success or error

  await expect(statusMessage).toBeVisible();
});
