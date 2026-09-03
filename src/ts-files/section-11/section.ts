interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

function printAreas(shapes: Shape[]): void {
  for (const shape of shapes) {
    console.log(shape.area());
  }
}

const shapes: Shape[] = [
  new Rectangle(4, 5),
  new Circle(3),
];

printAreas(shapes);
// 20
// 9pi