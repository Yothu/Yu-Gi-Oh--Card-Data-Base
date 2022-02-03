/**
 * @jest-environment jsdom
*/

import popupCommentCounter from '../commentCounter.js';

describe('Comment counter function tests', () => {
  test('If there are no comment-elements inside the comment container, the function should add "Comments (0)" inside the comment title', () => {
    // ARRANGE
    document.body.innerHTML = `
    <div class="comments-container-title"></div>
    <div class="comment-container"></div>
    `;
    const cardContainer = document.querySelector('.comment-container');
    // ACT
    popupCommentCounter(cardContainer);
    const commentTitle = document.querySelector('.comments-container-title').textContent;
    // ASSERT
    expect(commentTitle).toBe('Comments (0)');
  });

  test('should ', () => {
    // ARRANGE
    // ACT
    // ASSERT
  });

  test('should ', () => {
    // ARRANGE
    // ACT
    // ASSERT
  });
});