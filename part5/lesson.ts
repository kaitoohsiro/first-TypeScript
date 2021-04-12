// 四角
interface Rectangle {
    kind: '四角形'
    width: number
    height: number
}

// 円
interface Circle {
    kind: "円"
    radius: number
}

type Shape = Rectangle | Circle

function area(shape: Shape) {
    switch(shape.kind) {
        case "四角形": return shape.height * shape.width
        case "円" : return shape.radius * Math.PI
    }
}

const myRectangle: Rectangle = {
    kind: "四角形",
    width: 100,
    height: 30
}

const myCircle: Circle = {
    kind: "円",
    radius: 50
}

console.log(area(myCircle))
console.log(area(myRectangle))