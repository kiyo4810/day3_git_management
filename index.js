// 猫の名簿
const cats = ["ごまちゃん", "パンくん", "レオくん"];

// i というカウンターを作って、0から順番に1ずつ増やしていく
for (let i = 0; i < cats.length; i++) {
    console.log( (i + 1) + "番目の猫は" + cats[i] );
    document.getElementById("cat" + (i +1)).innerText;
}