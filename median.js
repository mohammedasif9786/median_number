let median  = (input)=>{
    if(input.length %2 !=0){
      let medNum = input[Math.floor(input.length/2)]
      console.log(medNum)
    }
    else{
        let medNum = input[input.length/2]+0.5
        console.log(medNum)
    }
}