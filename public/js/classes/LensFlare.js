class LensFlare {
  constructor({ x, y, color = 'rgba(255, 255, 255, 0.8)' }) {
    this.x = x
    this.y = y
    this.elements = [
      { size: 20, opacity: 0.8, offset: 0 },
      { size: 40, opacity: 0.4, offset: 30 },
      { size: 15, opacity: 0.3, offset: -20 },
      { size: 10, opacity: 0.2, offset: 50 }
    ]
    this.color = color
    this.opacity = 1
    this.fadeSpeed = 0.02
  }

  draw() {
    c.save()
    this.elements.forEach(element => {
      c.beginPath()
      c.arc(
        this.x + element.offset, 
        this.y, 
        element.size, 
        0, 
        Math.PI * 2
      )
      c.fillStyle = this.color
      c.globalAlpha = element.opacity * this.opacity
      c.fill()
    })
    c.restore()
  }

  update() {
    this.opacity -= this.fadeSpeed
    return this.opacity > 0
  }
}
