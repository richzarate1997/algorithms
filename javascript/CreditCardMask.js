// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!

function maskify(cc) {
    return '#'.repeat(Math.max(0, cc.length - 4)) + cc.slice(-4);
}

// Test
console.log(maskify("4556364607935616"));  // Outputs: "############5616"
console.log(maskify("64607935616"));       // Outputs: "#######5616"
console.log(maskify("1"));                 // Outputs: "1"
console.log(maskify(""));                  // Outputs: ""
console.log(maskify("Skippy"));            // Outputs: "##ippy"
console.log(maskify("Nananananananananananananananana Batman!"));  // Outputs: "####################################man!"
