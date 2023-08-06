let canvas = document.getElementById('canvas')
let c = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 534
c.fillRect(0, 0, canvas.width, canvas.height)
let gravity = 0.2
class Sprite {
    constructor({position,velocity}) {
       this.position = position
       this.velocity = velocity
       this.height = 150
    }
    
    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x,this.position.y,40,this.height)
    }
    
    update(){
        this.draw()
       
        this.position.y +=this.velocity.y 
        if(this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0
        }else{
             this.velocity.y += 0.2
        }
      
    }
}

const player1 = new Sprite({
    position:{
    x:0,
    y:0
    },
    velocity:{
    x:0,
    y:0
    }
    
})



const player2 = new Sprite({
    position:{
    x:400,
    y:130
    },
    velocity:{
    x:0,
    y:0
    }
    
})

function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle ='black'
    c.fillRect(0,0,canvas.width, canvas.height)
    player1.update()
    player2.update()
}
animate()
