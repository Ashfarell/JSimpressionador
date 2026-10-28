class Stopwatch {
  elapsedTimeInSeconds = 0;
  intervalId = null;

  start() {
    this.intervalId = setInterval(() => {
      this.elapsedTimeInSeconds++;
      console.log(Stopwatch.formatTime(this.elapsedTimeInSeconds));
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.elapsedTimeInSeconds = 0;
  }

  static formatTime(timeSeconds) {
    const hours = Math.floor(timeSeconds / 3600);
    const minutes = Math.floor((timeSeconds % 3600) / 60);
    const seconds = timeSeconds - hours * 3600 - minutes * 60;

    return `${Stopwatch.zeroPadding(hours)}:${Stopwatch.zeroPadding(minutes)}:${Stopwatch.zeroPadding(seconds)}`;
  }

  static zeroPadding(originalNumber, desiredAmoutnDigits = 2) {
    let stringNumber = String(originalNumber);
    const zerosRequired = desiredAmoutnDigits - stringNumber.length();

    if(zerosRequired <= 0) {
      return stringNumber;
    }

    for(let counter = 0; counter < zerosRequired; counter++) {
      stringNumber = `0${stringNumber}`;
    }

    return stringNumber;
  }
}

const sw1 = new Stopwatch();
sw1.start();