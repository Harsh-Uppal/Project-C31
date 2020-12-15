// JavaScript source code
class Division {
    constructor(x, y) {
        this.body = Bodies.rectangle(x, y, 10, 100, { isStatic: true });
        World.add(world,this.body);
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rect(0, 0, 10, 100);
        pop();
    }
}