class Ripple {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.radius = 0
    this.maxRadius = 50
    this.opacity = 1
    this.speed = 2
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    c.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`
    c.stroke()
  }

  update() {
    this.radius += this.speed
    this.opacity -= 0.02
    return this.opacity > 0
  }
}
