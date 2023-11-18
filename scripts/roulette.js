const button = document.querySelector('button');
const answer = document.querySelector('#answer h2');
const answerText = document.querySelector('#answer p');

button.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * 6);
  if (randomNumber === 0) {
    answer.innerHTML = 'PHP/Laravel';
  } else if (randomNumber === 1) {
    answer.innerHTML = 'Laravel（応用）';
  } else if (randomNumber === 2) {
    answer.innerHTML = 'PM';
  } else if (randomNumber === 3) {
    answer.innerHTML = 'Figma';
  } else if (randomNumber === 4) {
    answer.innerHTML = 'データベース設計';
  } else if (randomNumber === 5) {
    answer.innerHTML = 'React.js';
  }
  answerText.innerHTML = '今日も頑張ろう！！';
});