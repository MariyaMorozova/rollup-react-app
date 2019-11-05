
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let obj = { coluor: 'fdf' };
let mySquare = createSquare({ width: 4, coluor: 'fdf' } as SquareConfig);


interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);


interface SearchFunc {
    (source: string, substring: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
}


// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface ;
// }
// interface ClockInterface  {
//     tick(): void;
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) {}
//     tick() {
//         console.log('beep beep');
//     }
// }
// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) {}
//     tick() {
//         console.log('tick tock');
//     }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    tick(): void;
}

const Clock: ClockConstructor = class Clock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
