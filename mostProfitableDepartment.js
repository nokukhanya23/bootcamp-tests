function mostProfitableDay(data){
	let dayMap = {}
    
    for(let i in data){
    	let days = data[i]
        
        dayMap[days.day] = 0;
    }
  
 	for(let x in data){
    	let days = data[x];
      	let currentDayTotal = dayMap[days.day];
      
      	currentDayTotal += days.sales
      	dayMap[days.day] = currentDayTotal;
    }
  	
  //return dayMap;
  
  let highestSaleDay = 0;
  let highestDay = "";
  
  for(let i in dayMap){
  	console.log(i);
    console.log(dayMap[i])
    if(dayMap[i] > highestSaleDay){
      		highestSaleDay = dayMap[i];
      		highestDay = i;
       }
  }
  
  console.log(highestSaleDay)
  return highestDay;
  
}

console.log(mostProfitableDay(salesData))
