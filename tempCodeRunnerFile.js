const chainable = (initialvalue) => ({
    value: initialvalue,
    add: function (num) {
        this.value += num;
        return this;
    },
    multiply: function (num) {
        this.value *= num;
        return this;
    },
    getResult: function () {
        return this.value;
    },

})

const result = chainable(5).add(3).multiply(2).getResult();
console.log(result);