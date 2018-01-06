function curry(fn, thisArgs){
    if (!Array.isArray(thisArgs)) {
        thisArgs = [];
    }
    return function() {
        let args = Array.prototype.slice.call(arguments);
        if ((args.length + thisArgs.length) < fn.length) {
            return curry(fn, thisArgs.concat(args));
        }
        return fn.apply(this, thisArgs.concat(args));
    }
}


var abc = function(a, b, c) {
  return [a, b, c];
};

var curried = curry(abc);
console.log(curried(1)(2)(3))
