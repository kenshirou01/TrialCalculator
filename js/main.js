'use strict';

let display = document.getElementById("display");
let plus = document.getElementById("plus");
let subtract = document.getElementById("subtract");
let times = document.getElementById("times");
let decimal = document.getElementById("decimal");
let division = document.getElementById("division");
let flg = 0;

function get_value(btn) {
    let sum = btn.value
        // = 入力処理
        if (sum == "=") {
            if (display.value == "0") {
                display.value = "0";
            }else {
                display.value = eval(display.value);
                flg = 1;
            }
        // AC 入力処理
          } else if (sum == "") {
              display.value = "0";
              flg = 0;
              inactive();
        // 数字　入力処理
          } else if (!isNaN(sum)){
              if (flg == 1) {
                  display.value = sum;
                  flg = 0;
              } else {
                  if (sum == "00" && (display.value == "" || display.value == "0")) {
                      display.value = "0";
                      active();
                  }else if (display.value == "0" || display.value == "00"){
                      display.value = sum;
                  }else {
                      display.value += sum;
                      active();
                  }
              }
        // 記号　入力処理
          } else{
                  display.value += sum;
                  flg = 0;
                  inactive();
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
