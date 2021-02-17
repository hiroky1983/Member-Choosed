const btn = document.getElementById("btn");
const arrNames = [
  "モーリー",
  "magako",
  "ナッキー",
  "ぼっけもん",
  "kiryu",
  "yoko",
  "mari107",
  "コウタッチャブル",
  "cti1650",
  "tonkatu00",
  "ハラショー",
  "Tatsuya Yamashita",
  "かーき",
  "みやさん",
  "AKIMIDO",
  "Nこーせい",
  "ヤマさん",
  "ゆーこ",
  "MASA",
  "かっちょ",
  "Hidechika",
  "なかこう",
  "こす",
  "ヨッシー",
  "Teppei",
  "etochan",
  "ヒロ",
  "HinaTa",
  "Ryo",
  "よしを",
  "ラオウ",
  "Boo",
  "Bob",
  "てんぱぱ",
];

btn.addEventListener("click", () => {
  const arrName = arrNames[Math.floor(Math.random() * arrNames.length)];
  const decsion = `メンバーは${arrName}さんです`;
  alert(decsion);
});
