/**
 * @jest-environment jsdom
*/

import popupCommentCounter from '../commentCounter.js';

describe('Comment counter function tests', () => {
  test('There are no comment-elements inside the comment container, the function should add "Comments (0)" in the comment title', () => {
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

  test('There are six comment-elements inside the comment container, the function should add "Comments (6)" in the comment title', () => {
    // ARRANGE
    document.body.innerHTML = `
    <div class="comments-container-title"></div>
    <div class="comment-container">
      <div class="comment-element"></div>
      <div class="comment-element"></div>
      <div class="comment-element"></div>
      <div class="comment-element"></div>
      <div class="comment-element"></div>
      <div class="comment-element"></div>
    </div>
    `;
    const cardContainer = document.querySelector('.comment-container');
    // ACT
    popupCommentCounter(cardContainer);
    const commentTitle = document.querySelector('.comments-container-title').textContent;
    // ASSERT
    expect(commentTitle).toBe('Comments (6)');
  });

  test('There are 3 direct children inside the comment container that are comment-element, the function should ignore indirect children and add "Comments (3)" in the comment title', () => {
    // ARRANGE
    document.body.innerHTML = `
    <div class="comments-container-title"></div>
    <div class="comment-container">
      <div class="comment-element"></div>
      <div class="comment-element">
        <div class="comment-element"></div>
      </div>
      <p class="paragraph"></p>
      <span class="spank"></span>
      <div class="comment-element"></div>
      <hr>
    </div>
    `;
    const cardContainer = document.querySelector('.comment-container');
    // ACT
    popupCommentCounter(cardContainer);
    const commentTitle = document.querySelector('.comments-container-title').textContent;
    // ASSERT
    expect(commentTitle).toBe('Comments (3)');
  });
});
