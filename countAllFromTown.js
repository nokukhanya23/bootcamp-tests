function countAllFromTown(reg, regTown){
    let count = 0;
    
    let regArr = reg.split(",");
    for(let i in regArr){
      let trimmed = regArr[i].trim();
      if(trimmed.startsWith(regTown)){
        count += 1;
      }
    }
    return count;
  }
  console.log(countAllFromTown('CL 124, CY 567, CL 345, CJ 456,CL 341','CL'))