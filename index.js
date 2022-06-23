var a = [];
document.querySelector('#btnTao').onclick = function(){
    //input: so: number
    var so = Number(document.querySelector('#nhapSo').value);
    //output: string
    var output = '';
    //progress:
    a.push(so);
    output = '[' + a + ']';
    //in kq
    document.querySelector('#arr').innerHTML = output;
}
//b1
function calSum(a,sum){
    for(var i = 0; i < a.length; i++){
        if(a[i] > 0){
            sum += a[i];
        }
    }
    return sum;
}
document.querySelector('.btnTong').onclick = function(){
    //input: a[]
    //output: sum: number;
    var sum = 0;
    //progress:
    sum = calSum(a,sum);
    //in kq
    document.querySelector('.kq1').innerHTML = 'Tổng: ' + sum;
}
//b2
function demSoDuong(a){
    var count = 0;
    for(var i = 0; i < a.length; i++){
        if(a[i] > 0)
            count++;
    }
    return count;
}
document.querySelector('.btnDem').onclick = function(){
    //input: a[]
    //output: count: number
    var count = 0;
    //progress:
    count = demSoDuong(a);
    //in kq
    document.querySelector('.kq2').innerHTML = 'Số số dương: ' + count;
}
//b3
function findMin(a){
    var min = a[0];
    for(var i = 1; i < a.length; i++){
        if(a[i] < min)
            min = a[i];
    }
    return min;
}
document.querySelector('.btnMin').onclick = function(){
    //input: a[]
    //output: soMin: number
    var soMin = 0;
    //progress:
    soMin = findMin(a);
    //in kq
    document.querySelector('.kq3').innerHTML = 'Số nhỏ nhất: ' + soMin;
}
//b4
function findMin1(a){
    for(var i = 0; i < a.length; i++){
        if(a[i] >= 0){
            var min = a[i];
            break;
        }
    }
    
    for(var j = 0; j < a.length; j++){
        if(a[j] > 0 && a[j] < min)
            min = a[j];
    }
    return min;
}
document.querySelector('.btnMin1').onclick = function(){
    //input: a[]
    //output: soMin1: number
    var soMin1 = 0;
    //progress:
    soMin1 = findMin1(a);
    //in kq
    document.querySelector('.kq4').innerHTML = 'Số dương nhỏ nhất: ' + soMin1;
}
//b5
function findLastEven(a){
    for(var i = a.length - 1; i >= 0; i--){
        if(a[i] % 2  == 0){
            return a[i];
        }
    }
    return -1;
}
document.querySelector('.btnTim').onclick = function(){
    //input: a[]
    //output: lastOdd: number
    var lastEven = -1;
    //progress:
    lastEven = findLastEven(a);
    //in kq
    document.querySelector('.kq5').innerHTML = 'Số chẵn cuối cùng: ' + lastEven;
}
//b6
document.querySelector('.btnSwap').onclick = function(){
    //input: a[], i1, i2
    var i1 = Number(document.querySelector('.i1').value) - 1;
    var i2 = Number(document.querySelector('.i2').value) - 1;
    //output: a[] sau khi đổi chỗ
    //progress:
    var temp = a[i1];
    a[i1] = a[i2];
    a[i2] = temp;
    //in kq
    document.querySelector('.kq6').innerHTML = 'Mảng sau khi đã đổi chỗ: ' + a;
}
//b7
function sapXepTangDan(a){
    for(var i = 0; i < a.length - 1; i++){
        for(var j = i + 1; j < a.length; j++){
            if(a[i] > a[j]){
                var temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
}
document.querySelector('.btnSort').onclick = function(){
    //input: a[]
    //output: a[] sau khi sắp xếp
    //progress:
    sapXepTangDan(a);
    //in kq
    document.querySelector('.kq7').innerHTML = 'Mảng sau khi đã sắp xếp tăng dần: ' + a;
}
//b8
function checkPrime(x){
    if(x < 2)
        return false;
    for(var i = 2; i <= Math.sqrt(x); i++){
        if(x % i == 0)
            return false;
    }
    return true;
}
document.querySelector('.btnPrime').onclick = function(){
    //input: a[]
    //output: numP: number;
    var numP = -1;
    //progress:
    for(var i = 0; i < a.length; i++){
        if(checkPrime(a[i])){
            numP = a[i];
            break;
        }
    }
    //in kq
    document.querySelector('.kq8').innerHTML = 'Số nguyên tố đầu tiên: ' + numP;
}
//b9
function checkReal(x){
    if(Math.ceil(x) != Math.floor(x))
        return false;
    else    
        return true;
}
function demSoNguyen(a,count){
    for(var i = 0; i < a.length; i++){
        if(checkReal(a[i]))
            count++;
    }
    return count;
}
document.querySelector('.btnThem').onclick = function(){
    //input: so: num;
    var so = Number(document.querySelector('.soThem').value);
    //output: string
    var output = '';
    //progress:
    a.push(so);
    output = '[' + a + ']';
    //in kq
    document.querySelector('.aThem').innerHTML = output;
}
document.querySelector('.btnReal').onclick = function(){
    //input: a[]
    //output: count: number;
    var count = 0;
    //progress:
    count = demSoNguyen(a,count);
    //in kq
    document.querySelector('.kq9').innerHTML = 'Số số nguyên: ' + count;
}
//b10
function demSoAm(a){
    var count = 0;
    for(var i = 0; i < a.length; i++){
        if(a[i] < 0)
            count++;
    }
    return count;
}
document.querySelector('.btnCmp').onclick = function(){
    //input: a[]
    //output: string;
    var output = '';
    //progress:
    soDuong = demSoDuong(a);
    soAm = demSoAm(a);
    if(soDuong > soAm)
        output = 'Số lượng số dương có trong mảng là ' + soDuong + ' lớn hơn số lượng số âm là ' + soAm;
    else if(soAm > soDuong)
        output = 'Số lượng số âm có trong mảng là ' + soAm + ' lớn hơn số lượng số dương la ' + soDuong;
    else    
        output = 'Số lượng số âm có trong mảng là ' + soAm + ' bằng số lượng số dương la ' + soDuong;
    //in kq
    document.querySelector('.kq10').innerHTML = output;
}