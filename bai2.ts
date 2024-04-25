interface changeSpeed{
    speedUp():void;
    slowDown():void;
    stop():void;
}
class Vehicle implements changeSpeed{
    private speed:number;
    constructor(speed:number){
        this.speed = speed
    }
    speedUp(): void {
        this.speed += 80;
    }

    slowDown(): void {
        this.speed -= 30;
    }

    stop(): void {
        this.speed = 0;
    }

    printSpeed(): void {
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