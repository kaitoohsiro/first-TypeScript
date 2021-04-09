let name1 = 'hello' // 文字列と認識された
let name2: string = '大阪 たろう' // これは型指定を書く必要はない

function getTax(price: number): number {
    return price * 0.1
}

let tax1 = getTax(10000)



let userId

let salary: number
let isValid: boolean
let customerName: string

function calcTax(country: string, price: number, unit: number): number | undefined {
    if(country === 'Japan') {
        return price * unit * 0.1
    } else if (country === 'America') {
        return price * unit * 0
    }
}

let tax2 = calcTax("Japan", 100, 1.8)