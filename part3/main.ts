let firstName: string
let age: number

let abc: any // なんでもいい
// void 値返さない

let abc: any = null // これはjsと変わらないからあまりtsを使っている意味がない

function logError(errorMessage: string): string {
    console.log(errorMessage)
    // return true 方指定しているのでエラーが出るはず
    return errorMessage
}