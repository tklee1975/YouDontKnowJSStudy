aDummyAlert();
console.log("external js is executed");

function externalFunc() {
    return "from external src";
}

function aDummyAlert() {
    alert("external.js is ready");
}