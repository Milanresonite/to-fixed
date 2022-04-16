function testFun(val) {
    if(val === ""){
        return "";
    }
    if(typeof val === "string"){
      val = parseFloat(val);
    }
    val = val.toFixed(2);
    return val;
}

module.exports = testFun