class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  start(printTimeCallback) {
    // ... your code goes here

    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback(this.currentTime);
      }
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor((this.currentTime / 100) % 60);
  }
  getCentiseconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 100);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let twoDigitNumber = String(value).padStart(2, "0");
    return twoDigitNumber;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here

    let timeStamp = `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(
      this.getSeconds()
    )}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;
    return timeStamp;
  }
}
