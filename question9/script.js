//  part 1
//  function printNumbersInterval(from, to) { 
//     let counter = from; 
//     const interval = setInterval(() => { 
//      console.log(counter); 
//      counter++; 
//      if (counter > to) clearInterval(interval); 
//     }, 1000); 
//    } 
//    printNumbersInterval(1, 10); 
   
   
  /* Part 2 */ 
   
  function printNumbersTimeout (from, to) { 
   for (let i = from; i <= to; i++) { 
    setTimeout(() => { 
     console.log(i); 
    }, i * 1000); 
   } 
  } 
   printNumbersTimeout(1, 10);