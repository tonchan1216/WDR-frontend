export function addSkill () {
  let skillBox = document.getElementById('skill-box');
  const skillName = skillBox.value;
  let article = document.createElement('article');  // article要素を生成
  let h3 = document.createElement('h3');  // h3要素を生成
  let p = document.createElement('p');  // p要素を生成

  if (skillName == "") return

  skillBox.value = "";
  article.className = 'skill';
  h3.textContent = skillName;

  article.appendChild(h3);
  article.appendChild(p);

  // 生成したdiv要素を追加する
  document.querySelector('#contents>section').appendChild(article);
}
