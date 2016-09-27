function print(a) {
    for (var i = 1; i <= a; i++) {
        var test = "";
        for (var k = 1; k <= a - i; k++) {
            var space = " ";
            test = test + space;
        }
        for (var x = 1; x <= i * 2 - 1; x++) {
            var star = "*";
            test = test + star;
        }
        console.log(test);
    }
}
window.onload = function () {
    print(4);
};
//# sourceMappingURL=main.js.map