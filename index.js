var a = [];
document.getElementById('btnNhap').onclick = function(){
    //input: so: number
    var so = Number(document.getElementById('nhapSo').value);
    //output: string
    var output = '';
    //progress:
    a.push(so);
    output = '[' + a + ']';
    //in kq
    document.getElementById('arr').innerHTML = output;
}
function hide(i){
    document.getElementsByClassName('b' + i).style.display = 'none';
}
function show(i){
        document.getElementsByClassName('b' + i).style.display = 'block';
}
for(var i = 1; i <= 10; i++){
    hide(i);
}

var choose = Number(document.getElementById('choose').value);
switch(choose){
    case 1:{
        show(1);
        break;
    }
    case 2:{
        show(2);
        break;
    }
    case 3:{
        show(3);
        break;
    }
    case 4:{
        show(4);
        break;
    }
    case 5:{
        show(5);
        break;
    }
    case 6:{
        show(6);
        break;
    }
    case 7:{
        show(7);
        break;
    }
    case 8:{
        show(8);
        break;
    }
    case 9:{
        show(9);
        break;
    }
    case 10:{
        show(10);
        break;
    }
    default:{
        break;
    }
}
document.getElementById('btnTong').onclick = function(){
    //input: a[]
    //output: sum: number;
    var sum = 0;
    //progress:
    for(var i = 0; i < a.length; i++){
        if(a[i] > 0){
            sum += a[i];
        }
    }
    //in kq
    document.getElementById('kq1').innerHTML = sum;
}