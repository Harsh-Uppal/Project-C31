// JavaScript source code
class Particle {
    constructor(x, y) {
        this.body = Bodies.circle(x, y, 5);
        this.color = Colors[round(random(0, 4))];
        World.add(world, this.body);
    }

    display() {
        fill(this.color);
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        circle(0, 0, 10);
        pop();
        fill("white");
    }
}