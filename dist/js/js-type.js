// 單引號(字元)跟雙引號(字串-由多個字元組成)都代表字串
let name = "David'Lin"; // 使用單引號
name = 'David"Lin'; // 使用跳脫符號
let firstName = "Mr' Lin";

console.log(name);
console.log(firstName);

let email = "kindpingwork@gmail.com";

let message = "敬愛的 " + name + ": 您輸入的信箱為: " + email + " 請查收";

console.log(message);

// ${variable}
let templateMessage = `敬愛的 ${name}: 您輸入的信箱為: ${email} 請查收`;

console.log(templateMessage);

let num1 = 100;
console.log(num1);

let num2 = "200";

console.log(num2);

let num3 = num1 + num2;

console.log(num3);

function add(a, b) {
    // 將字串轉換為數字，在某個版本預設是 8 進位，所以需要指定 10 進位
    // a = parseInt(a, 10);
    // b = parseInt(b, 10);

    console.log(a, b);
    // 使用 + 號將字串轉換為數字，建議使用 + 號，因為 + 號比 parseInt 快
    return +a + +b;
}

let r1 = add(num1, num2);
console.log(r1);
