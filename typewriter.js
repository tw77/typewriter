const sentence = "hello there from lighthouse labs";

let x = 0;

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, x = x + 50);
}

setTimeout(() => {
  console.log('\n');
}, sentence.length * 50);