'use strict';

function fibonacci_series(n) {
        var object=bulidObject();
        var put=[];

        for(var i=0;i<=n;i++){
            put[i]=object[1][i];
        }

        return put;
    }

    function bulidObject() {
        var object;
        object={1:[0,1]};

        for (var i = 2; i <= 10; i++) {
            object[i] = object[i - 1];
            var s = object[i - 1][object[i - 1].length - 2] + object[i - 1][object[i - 1].length - 1];
            object[i].push(s);
        }

        return object;

}

module.exports = fibonacci_series;
