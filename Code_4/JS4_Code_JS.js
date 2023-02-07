function area(){
    let Height=document.getElementById('Height').value;
    let Base=document.getElementById('Base').value;
    let result=0.5*(Height*Base);
    document.getElementById('result').value = result;
}