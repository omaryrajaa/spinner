const symbols = ["|", "/", "-", "\\","|"];
let timer = 100;

for (const symbol of symbols) {
  setTimeout(() => {
    process.stdout.write(`\r${symbol}   `);
  },  timer += 200);
}

setTimeout(() => {
  process.stdout.write('\n');
}, 1100);


