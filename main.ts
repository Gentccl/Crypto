function CharChiffer (ch: string, shift: number) {
    while (shift < 0) {
        shift = shift + 26
    }
    // ASCII A = 65
    return String.fromCharCode((ch.charCodeAt(0) - 65 + shift) % 26 + 65)
}
let shift = 0
let strC=""
let str = "ABBA"
for (let i=0;i<str.length;i=i+1){
    strC=""+strC+CharChiffer(str.charAt(i),3)
}
basic.showString("" + (strC))
