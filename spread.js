var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
console.log("Spread Operators"); // used for spreading array or obj
var so1 = [1, 2, 3, 4, 5, 6, 7];
var so2 = __spreadArrays(so1, [11, 12, 13, 14, 15]); //[so1,11,12,13,14,15] -- puts entire array at 1st position 
console.warn("so2 :" + so2);
var soEx = __spreadArrays(so1, so2);
console.warn(soEx);
var obj = {
    a: 'ram',
    b: 'sham',
    c: 'tom'
};
var obj1 = __assign(__assign({}, obj), { d: 'harry', e: 'kim' });
console.warn(obj1);
console.log("Rest Operator"); // used for catching all the parameters of the funtion
function sum() {
    var s = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        s[_i] = arguments[_i];
    }
    console.log(s);
}
sum.apply(void 0, __spreadArrays([1, 2, 3, 4, "ravi"], so2, so1));
