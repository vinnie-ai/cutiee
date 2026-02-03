const heart = document.getElementById("heart");

const heartShape = [
  [0,1,1,0,0,1,1,0],
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1],
  [0,1,1,1,1,1,1,0],
  [0,0,1,1,1,1,0,0],
  [0,0,0,1,1,0,0,0]
];

const size = 22;
let delay = 0;

heartShape.forEach((row, y) => {
  row.forEach((cell, x) => {
    if (cell) {
      const piece = document.createElement("div");
      piece.className = "heart-piece";
      piece.style.left = `${x * size}px`;
      piece.style.top = `${y * size}px`;
      piece.style.animationDelay = `${delay}s`;
      delay += 0.03;
      heart.appendChild(piece);
    }
  });
});
