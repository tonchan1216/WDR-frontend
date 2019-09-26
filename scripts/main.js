function sorry() {
    var result = "Sorry, Backend Stamp Rally is under construction";
    alert(result);
}

function addSkill() {
    var skillBox = document.getElementById('skill-box');
    var skillName = skillBox.value;

    if (skillName == "") {
        return
    }

    skillBox.value = "";

    // article要素を生成
    var article = document.createElement('article');
    article.className = 'skill';

    // h3要素を生成
    var h3 = document.createElement('h3');
    h3.textContent = skillName;

    // p要素を生成
    var p = document.createElement('p');

    article.appendChild(h3);
    article.appendChild(p);

    // 生成したdiv要素を追加する
    document.getElementById('contents').appendChild(article);
}
