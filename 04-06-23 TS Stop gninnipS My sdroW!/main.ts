export function spinWords(words: string): string {
    let spunPhrase = "";
    let tokens = words.split(" ");
    
    for(let token of tokens){
      if(token.length >= 5){
        spunPhrase += " " + reverseString(token);
      }
      else {
        spunPhrase += " "  + token;
      }
    }
    
    return spunPhrase.trim();
  }
  
  function reverseString(s: string) : string{
    let reversed: string = "";  
    for(let c of s){
        reversed = c + reversed;
      }
    
    return reversed;
  }