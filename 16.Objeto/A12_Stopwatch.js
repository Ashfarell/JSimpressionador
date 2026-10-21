class Stopwatch {
  elapsedtime = 0;

  start() {
    setInterval(() => {
      this.elapsedtime++;
    }, 1000);
  }

  stop() {}

  reset() {}
}

const test = new Stopwatch();
test.start();
console.log(test.elapsedtime);
