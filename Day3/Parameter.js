function fun1(x, y, ...z) {
    console.log("x = ", x)
    console.log("y = ", y)
    console.log("Z = ", z)
    console.log({ x, y, z });
}

fun1(10, 20, "hello", 40, 50);

