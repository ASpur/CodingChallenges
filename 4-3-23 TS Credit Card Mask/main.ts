// return masked string
export function maskify(cc: string): string {
    let output: string = ""

    for(let i = 0; i <= cc.length - 1; i++){
        if(i < cc.length - 4){
            output += "#"
        } else {
            output += cc[i];
        }
    }
    
    return output;
}