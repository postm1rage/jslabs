class Stock {
  constructor() {
    this.boxes = [];
    this.counter = 0;
  }

  add(w, v) {
    let box = {
      id: this.counter,
      w: w,
      v: v,
      time: Date.now(),
    };
    this.boxes.push(box);
    this.counter++;
    return box.id;
  }

  getByW(min_w) {
    let suitableBoxes = [];

    for (let i = 0; i < this.boxes.length; i++) {
      if (this.boxes[i].w >= min_w) {
        suitableBoxes.push(this.boxes[i]);
      }
    }

    if (suitableBoxes.length === 0) {
      return -1;
    }

    let bestBox = suitableBoxes[0];
    for (let i = 1; i < suitableBoxes.length; i++) {
      if (suitableBoxes[i].time < bestBox.time) {
        bestBox = suitableBoxes[i];
      }
    }

    let indexToRemove = this.boxes.findIndex((box) => box.id === bestBox.id);
    this.boxes.splice(indexToRemove, 1);

    return bestBox.id;
  }

  getByV(min_v) {
    let suitableBoxes = [];

    for (let i = 0; i < this.boxes.length; i++) {
      if (this.boxes[i].v >= min_v) {
        suitableBoxes.push(this.boxes[i]);
      }
    }

    if (suitableBoxes.length === 0) {
      return -1;
    }

    let bestBox = suitableBoxes[0];
    for (let i = 1; i < suitableBoxes.length; i++) {
      if (suitableBoxes[i].time < bestBox.time) {
        bestBox = suitableBoxes[i];
      }
    }

    let indexToRemove = this.boxes.findIndex((box) => box.id === bestBox.id);
    this.boxes.splice(indexToRemove, 1);

    return bestBox.id;
  }
}

// Тестирование
let stock = new Stock();

stock.add(10, 5); // id 0
stock.add(20, 15); // id 1
stock.add(15, 10); // id 2

console.log(stock.getByW(12)); // 2 (грузоподъемность 15 >= 12, поступила позже чем 20)
console.log(stock.getByW(25)); // -1, нет подходящих
