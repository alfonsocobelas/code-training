// Abstract class
export class Polygon {
    constructor(height, width) {
        if (this.constructor === Polygon) {
            throw new Error('Class is of abstract type and cant be instantiated')
        }

        this.name = 'Polygon'
        this.height = height
        this.width = width
    }

    area() {
        throw new Error('area method must be implemented')
    }
}

export class Triangle extends Polygon {
    constructor(base, height) {
        super(base, height)
        this.name = 'Triangle'
    }

    area() {
        return (this.width * this.height) / 2
    }
}

export class Rectangle extends Polygon {
    constructor(length, width) {
        super(length, width)
        this.name = 'Rectangle'
    }

    area() {
        return this.height * this.width
    }
}

export class Square extends Polygon {
    constructor(side) {
        super(side)
        this.name = 'Square'
    }

    area() {
        return Math.pow(this.height, 2)
    }
}

export class Circle{
    constructor(radio) {
        this.name = 'Circle'
        this.radio = radio
    }

    area() {
        return (Math.PI * this.radio).toFixed(2)
    }
}

export function calculateArea(polygon) {
    if (polygon instanceof Circle) {
        return 'Circle is not polygon'
    }

    return polygon.area()
}