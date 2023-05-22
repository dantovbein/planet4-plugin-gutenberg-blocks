import {login} from './login';

async function newPost(page, context) {
  // Login.
  await page.goto('./');
  await login(context);

  // Create and navigate to new post.
  await page.goto('./wp-admin/post-new.php');

  // On dev instance, need to close modal so test can continue
  const closeButton = page.locator('.components-modal__header button');
  if (await closeButton.isVisible()) {
    await closeButton.click();
  }

  // Fill in post title.
  await page.locator('.editor-post-title__input').click();
  await page.locator('h1.editor-post-title').fill('Test Post');
}

export {newPost};