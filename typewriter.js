const sentence = 'hello there from lighthouse labs\n';

const animateTyping = (sentence, initialDelay) => {
  let delay = initialDelay;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;
  }
};

animateTyping(sentence, 0);
