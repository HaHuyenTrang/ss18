"use strict";
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 80;
    }
    slowDown() {
        this.speed -= 30;
    }
    stop() {
        this.speed = 0;
    }
    printSpeed() {
        console.log("tốc độ:", this.speed);
    }
}
const vehicle = new Vehicle(0);
vehicle.printSpeed();
vehicle.speedUp();
vehicle.printSpeed();
vehicle.slowDown();
vehicle.printSpeed();
vehicle.stop();
vehicle.printSpeed();
