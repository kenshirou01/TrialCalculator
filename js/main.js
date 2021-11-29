'use strict';

let display = document.getElementById("display");
let plus = document.getElementById("plus");
let subtract = document.getElementById("subtract");
let times = document.getElementById("times");
let decimal = document.getElementById("decimal");
let division = document.getElementById("division");
let key = "0";

inactive();

function get_value(btn) {
    let sum = btn.value
        if(sum == "=") {
           display.value = eval(display.value);
          } else if (sum == "") {
              display.value = "";
              inactive();
          } else if (!isNaN(sum)){
              display.value += sum;
              active();
          }else{
              display.value += sum;
              inactive();
            //   if (sum == "*") {
            //       key = sum;
            //       display.value += sum;
            //       console.log(key);
            //   }else if (sum == "/"){
            //       key = sum;
            //       display.value += sum;
            //       console.log(key);
            //   }else if (sum == "+"){
            //       key = sum;
            //       display.value += sum;
            //       console.log(key);
            //   }else if (sum == "-"){
            //       key = sum;
            //       display.value += sum;
            //       console.log(key);
            //   }else if (sum == "."){
            //       key = sum;
            //       display.value += sum;
            //       console.log(key);
            //   }else {
            //       display.value += sum;
            //       console.log("エラー");
            //   }
          }
}

function inactive() {
    plus.disabled = true;
    subtract.disabled = true;
    times.disabled = true;
    decimal.disabled = true;
    division.disabled = true;
}

function active() {
    plus.disabled = false;
    subtract.disabled = false;
    times.disabled = false;
    decimal.disabled = false;
    division.disabled = false;    
}

// function get_value(get_num) {
//     let num = get_num.value;
//         flg = 0;
//         input += num;
//         display.value = input;
// }

// function get_calc(get_key){
//     let key = get_key.value;
//     let work;
    
//     if (flg == 0){
//         flg = 1;
//         work = total + calc + input;
//         total = eval(work);
//         input = "";
//         display.value = total;
//     }
    
//     if (key == "="){
//         total = 0;
//         calc = "+";
//     }else{
//         calc = key;
//     }
// }

// function get_AC() {
//     total = 0;
//     calc = "+";
//     input = "";
//     display.value = total;
// }
