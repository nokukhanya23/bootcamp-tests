function countRegNumber(RegNumber) {
    let array = RegNumber.split(",")
    return (array, array.length)
  };
  console.log(countRegNumber("A 182736, CY5 523519, CJ 812328"));
  console.log(countRegNumber("CA 42665,AA 12 RT GP"));