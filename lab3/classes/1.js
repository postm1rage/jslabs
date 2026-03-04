class Clock {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    
    display() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }
}

let clock = new Clock(10, 30, 45);
clock.display();