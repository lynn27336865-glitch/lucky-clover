const clover = document.getElementById('clover');
const blessing = document.getElementById('blessing');

const blessings = [
  "✨ 叮咚！今日幸運值已加滿 100%！",
  "🍀 願希望與勇氣伴隨你的每一個決定！",
  "💫 轉角遇到小確幸，今天會是順遂的一天！",
  "💚 四葉草為你帶來平靜與好心情！",
  "🌟 凡事皆有解答，幸運正在向你招手！"
];

clover.addEventListener('click', () => {
  // 點擊旋轉動態
  clover.style.transform = 'scale(1.2) rotate(360deg)';
  setTimeout(() => {
    clover.style.transform = '';
  }, 400);

  // 隨機抽選祝福語
  const randomText = blessings[Math.floor(Math.random() * blessings.length)];
  blessing.textContent = randomText;
});
