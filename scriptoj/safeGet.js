/*
https://scriptoj.com/problems/99
var data = { a: { b: { c: 'ScriptOJ' } } }
safeGet(data, 'a.b.c') // => scriptoj
safeGet(data, 'a.b.c.d') // => 返回 undefined
safeGet(data, 'a.b.c.d.e.f.g') // => 返回 undefined
console.log('ScriptOJ') // => 打印 ScriptOJ
*/
const log = console.log;
const data = { a: { b: { c: 'ScriptOJ' } } }

const safeGet = (data, getStr) => {
    if (!data) {
        return undefined;
    }
    let getArray = getStr.split('.');
    let res;
    while (getArray.length > 0) {
        if (data[getArray[0]] === undefined) {
            return undefined;
        }
        res = data = data[getArray[0]];
        getArray = getArray.slice(1);
    }
    return res;
}

log(safeGet(data, 'a.b.c.d.c'))