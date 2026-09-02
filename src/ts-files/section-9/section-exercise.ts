interface Renderable {
  render(): string
}

class Button implements Renderable {
  render(): string {
    return `Rendered Button`

  }
}

class ImageView implements Renderable {
  render(): string {
    return `Rendered ImageView`

  }
}

class TextBlock implements Renderable {
  render(): string {
    return `Rendered TextBlock`

  }
}

const button = new Button()
const imageView = new ImageView()
const textBlock = new TextBlock()

const arrTest = [button, imageView, textBlock]

for (let i = 0; i < arrTest.length; i += 1) {
  console.log(arrTest[i].render())
}

// its usefull so typescript can 'yell' if you forgot to implement method render


interface Saveable {
  save(): void;
}

class Draft implements Saveable {
  title: string = "Untitled";

  save(): void {
    console.log(this.title)
  }
}
const draft = new Draft()
draft.save()


interface test {
  test(): number
}

interface rice {
  rice(): string
}

class Hello implements test, rice {
  rice(): string {
    return ''
  }
  test(): number {
    return 0
  }
}
// 1. What does `implements` mean?
// it means that the class must contain everythinng that the interface implemented say so
// 2. Does `implements` inherit code?
// no
// 3. Can a class implement more than one interface?
// yes, but can you show me a real world example
// 4. Predict the TypeScript result:
// tyescript will coomplain becauyse bycicle does not have drive method
interface Drivable {
  drive(): void;
}

class Bicycle implements Drivable {
  pedal(): void {
    console.log("pedaling");
  }
}

// 5. What is the difference between these ?
// one implements and other extends... the extends inherit code; the implements does not
class Dog extends Animal { }
class Dog implements AnimalLike { }