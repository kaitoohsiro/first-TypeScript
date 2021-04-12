// カスタムでデータ型を作成
let a: string | number | boolean

// type Feet = number;
// type Pound = number;

type Patient = {
    name: string;
    // height: Feet;
    // weight: Pound;
    height: number;
    // weight: number;
    weight?: number; // ?を入れることで任意（なくてもいい）になる
}

let patient: Patient = {
    name: 'Taro Yamada',
    height: 170,
    weight: 80,
}