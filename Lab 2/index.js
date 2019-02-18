const geometry = require("./geometry");
const utilities = require("./utilities");

console.log("\nTest Cases for Volume of Rectangular Prism \n");

try
{
    console.log("Volume of Rectangular Prism (1,2,3): " + geometry.volumeOfRectangularPrism(1,2,3))
}
catch(error)
{
    console.log("Test Case (1,2,3):", error);
}

try
{
    console.log("Volume of Rectangular Prism (1.0,2.5,3.5): " + geometry.volumeOfRectangularPrism(1.0,2.5,3.5))
}
catch(error)
{
    console.log("Test Case (1.0,2.5,3.5): ", error);
}

try
{
    console.log("Volume of Rectangular Prism (\"1\",2,\"3\"): " + geometry.volumeOfRectangularPrism("1",2,"3"))
}
catch(error)
{
    console.log("Test Case (\"1\",2,\"3\"): ", error);
}

try
{
    console.log("Volume of Rectangular Prism (\"Test\",2,3): " + geometry.volumeOfRectangularPrism("Test",2,3))
}
catch(error)
{
    console.log("Test Case (\"Test\",2,3):", error);
}

try
{
    console.log("Volume of Rectangular Prism (1,-2,3): " + geometry.volumeOfRectangularPrism(1,-2,3))
}
catch(error)
{
    console.log("Test Case (1,-2,3): ", error);
}


console.log("\nTest Cases for Surface Area of Rectangular Prism\n");

try
{
    console.log("Surface Area of Rectangular Prism (1,2,3): " + geometry.surfaceAreaOfRectangularPrism(1,2,3))
}
catch(error)
{
    console.log("Test Case (1,2,3):", error);
}

try
{
    console.log("Surface Area of Rectangular Prism (1.0,2.5,3.5): " + geometry.surfaceAreaOfRectangularPrism(1.0,2.5,3.5))
}
catch(error)
{
    console.log("Test Case (1.0,2.5,3.5): ", error);
}

try
{
    console.log("Surface Area of Rectangular Prism (\"1\",2,\"3\"): " + geometry.surfaceAreaOfRectangularPrism("1",2,"3"))
}
catch(error)
{
    console.log("Test Case (\"1\",2,\"3\"): ", error);
}

try
{
    console.log("Surface Area of Rectangular Prism (\"Test\",2,3): " + geometry.surfaceAreaOfRectangularPrism("Test",2,3))
}
catch(error)
{
    console.log("Test Case (\"Test\",2,3):", error);
}

try
{
    console.log("Surface Area of Rectangular Prism (1,-2,3): " + geometry.surfaceAreaOfRectangularPrism(1,-2,3))
}
catch(error)
{
    console.log("Test Case (1,-2,3): ", error);
}

console.log("\nTest Cases for Volume of Sphere\n");

try
{
    console.log("Volume of Sphere with radius 10: " + geometry.volumeOfSphere(10))
}
catch(error)
{
    console.log("Test Case 10:", error);
}

try
{
    console.log("Volume of Sphere with radius 1000: " + geometry.volumeOfSphere(1000))
}
catch(error)
{
    console.log("Test Case 1000: ", error);
}

try
{
    console.log("Volume of Sphere with radius -10: " + geometry.volumeOfSphere(-10))
}
catch(error)
{
    console.log("Test Case -10: ", error);
}

try
{
    console.log("Volume of Sphere with radius \"Text\": " + geometry.volumeOfSphere("Text"))
}
catch(error)
{
    console.log("Test Case \"Text\":", error);
}

try
{
    console.log("Volume of Sphere with radius \"2\": " + geometry.volumeOfSphere("2"))
}
catch(error)
{
    console.log("Test Case \"2\": ", error);
}

console.log("\nTest Cases for Surface Area of Sphere\n");

try
{
    console.log("Surface Area of Sphere with radius 10: " + geometry.surfaceAreaOfSphere(10))
}
catch(error)
{
    console.log("Test Case 10:", error);
}

try
{
    console.log("Surface Area of Sphere with radius 1000: " + geometry.surfaceAreaOfSphere(1000))
}
catch(error)
{
    console.log("Test Case 1000: ", error);
}

try
{
    console.log("Surface Area of Sphere with radius -10: " + geometry.surfaceAreaOfSphere(-10))
}
catch(error)
{
    console.log("Test Case -10: ", error);
}

try
{
    console.log("Surface Area of Sphere with radius \"Text\": " + geometry.surfaceAreaOfSphere("Text"))
}
catch(error)
{
    console.log("Test Case \"Text\":", error);
}

try
{
    console.log("Surface Area of Sphere with radius \"2\": " + geometry.surfaceAreaOfSphere("2"))
}
catch(error)
{
    console.log("Test Case \"2\": ", error);
}

console.log("\nTest Cases for Deep equality\n")

try
{
    let object1="hey";
    let object2=[1,2,3];
    console.log("Checking if the following objects are equal;")
    console.log("Object 1:" + JSON.stringify(object1));
    console.log("Object 2:" + JSON.stringify(object2));
    console.log("Equal? "+utilities.deepEquality(object1, object2));
}
catch(error)
{
    console.log(error);
}

try
{
    let object1={a: 1, b: 2, c: 3};
    let object2={a: 1, c: 3, b: 2};
    console.log("\nChecking if the following objects are equal;")
    console.log("Object 1:" + JSON.stringify(object1));
    console.log("Object 2:" + JSON.stringify(object2));
    console.log("Equal? "+utilities.deepEquality(object1, object2));
}
catch(error)
{
    console.log(error);
}

try
{
    let object1={a: 1, b: 2, c: [1,2,-3]};
    let object2={a: 1, c: [1,2,-3], b: 2};
    console.log("\nChecking if the following objects are equal;")
    console.log("Object 1:" + JSON.stringify(object1));
    console.log("Object 2:" + JSON.stringify(object2));
    console.log("Equal? "+utilities.deepEquality(object1, object2));
}
catch(error)
{
    console.log(error);
}

try
{
    let object1={a: 1, b: {d: 1, e: 2, f:3}, c: false};
    let object2={a: 1, c: false, b: {d: 1, f:3, e: 2}};
    console.log("\nChecking if the following objects are equal;")
    console.log("Object 1:" + JSON.stringify(object1));
    console.log("Object 2:" + JSON.stringify(object2));
    console.log("Equal? "+utilities.deepEquality(object1, object2));
}
catch(error)
{
    console.log(error);
}

try
{
    let object1={a: "Yo", b: {d: -1, e: "Nope", f:3}, c: 3};
    let object2={a: "Yo", c: 3, b: {d: -1, f:3, e: "Yup"}};
    console.log("\nChecking if the following objects are equal;")
    console.log("Object 1:" + JSON.stringify(object1));
    console.log("Object 2:" + JSON.stringify(object2));
    console.log("Equal? "+utilities.deepEquality(object1, object2));
}
catch(error)
{
    console.log(error);
}

console.log("\nTest Cases for Number of unique elements");

try
{
    let arr = ["a", "b", "c", "a", "b"];
    console.log("Checking the number of unique elements in " + arr);
    console.log("Unique count: " + utilities.uniqueElements(arr));
}
catch(error)
{
    console.log(error);
}

try
{
    let arr = ["a", "b"];
    console.log("Checking the number of unique elements in " + arr);
    console.log("Unique count: " + utilities.uniqueElements(arr));
}
catch(error)
{
    console.log(error);
}

try
{
    let arr = [1, 2, 3, "3", "2"];
    console.log("Checking the number of unique elements in 1,2,3,\"3\",\"2\"");
    console.log("Unique count: " + utilities.uniqueElements(arr));
}
catch(error)
{
    console.log(error);
}

try
{
    let arr = "Throw an error";
    console.log("Checking the number of unique elements in " + arr);
    console.log("Unique count: " + utilities.uniqueElements(arr));
}
catch(error)
{
    console.log(error);
}

try
{
    let arr = [true, false, true];
    console.log("Checking the number of unique elements in " + arr);
    console.log("Unique count: " + utilities.uniqueElements(arr));
}
catch(error)
{
    console.log(error);
}

console.log("\nTest Cases for count of each character\n");

try
{
    let str = "Hello, the pie is in the oven";
    console.log("Counting chars in string: " + str);
    console.log(utilities.countOfEachCharacterInString(str));
}
catch(error)
{
    console.log(error)
}

try
{
    let str = [1, 3, 5];
    console.log("Counting chars in string: " + str);
    console.log(utilities.countOfEachCharacterInString(str));
}
catch(error)
{
    console.log(error)
}

try
{
    let str = "1234556\"5\"";
    console.log("Counting chars in string: " + str);
    console.log(utilities.countOfEachCharacterInString(str));
}
catch(error)
{
    console.log(error)
}

try
{
    let str = 123;
    console.log("Counting chars in string: " + str);
    console.log(utilities.countOfEachCharacterInString(str));
}
catch(error)
{
    console.log(error)
}

try
{
    let str = {a : "b"};
    console.log("Counting chars in string: " + JSON.stringify(str));
    console.log(utilities.countOfEachCharacterInString(str));
}
catch(error)
{
    console.log(error)
}