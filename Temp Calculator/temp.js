const text = document.getElementById("text")
const tofah = document.getElementById("tofah")
const tocel = document.getElementById("tocel")
const result = document.getElementById("result")
let temp;

function tempt(){
        if(tofah.checked){
            temp = Number(text.value)
            temp= temp * 9 / 5 + 32
            result.textContent=temp.toFixed(1)+ "°F"

        }else if(tocel.checked) {
            temp = Number(text.value)
            temp= (temp-32)*(5/9)
            result.textContent= temp.toFixed(1)+ "°C" 

        }
        else{
            result.textContent="Select a unit"
        }
}