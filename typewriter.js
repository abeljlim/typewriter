const sentence = "hello there from lighthouse labs";
const charDuration = 50;
let charCount = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, charCount * charDuration)
  charCount++;
}
setTimeout(() => {
  process.stdout.write('\n')
}, charCount * charDuration);

// Could also do a recursive approach that keeps track of sentence and index ...