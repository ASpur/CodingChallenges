export class Kata {
    static dnaStrand(dna: string) {
      //your code here
      let dict: { [id: string] : string; }  = {};
      dict["A"] = "T";
      dict["T"] = "A";
      dict["G"] = "C";
      dict["C"] = "G";
      
      let newDna = "";
      
      for(let c of dna){
        newDna += dict[c];
      }
      
      return newDna;
    }
  }