function solution(number){
    let sum = 0;
    for(number--; number >= 3; number--){
      if(number % 3 == 0 || number % 5 == 0){
        sum += number;
      }
    }
    return sum;
  }