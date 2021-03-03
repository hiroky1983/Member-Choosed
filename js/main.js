const btn = document.getElementById("btn");
const arrNames = [
//ここに抽選したい人やモノの名前を入れる
];

btn.addEventListener("click", () => {
  const arrName = arrNames[Math.floor(Math.random() * arrNames.length)];
  const decsion = `メンバーは${arrName}さんです`;
  alert(decsion);
});
