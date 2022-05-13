var operationStatus
var operationNumber1=0
var operationNumber2=0
let isFirst=true

function getNumber(num){
    if (isFirst==false) {
    document.getElementById("main-screen").value=null
    isFirst=true;
    }
    document.getElementById('main-screen').value+=num;

}

function getOperation(ope){

      
    operationNumber1=parseInt(document.getElementById('main-screen').value);

 console.log(operationNumber1)
    

    document.getElementById("main-screen").value=null;
    operationStatus=ope;
}

function getResult() {
    operationNumber2=parseInt(document.getElementById('main-screen').value);
    if (operationStatus==1) {
            document.getElementById("main-screen").value=operationNumber1+operationNumber2;  
    }
    if (operationStatus==2) {
        document.getElementById("main-screen").value=operationNumber1-operationNumber2;  
}
    if (operationStatus==3) {
        document.getElementById("main-screen").value=operationNumber1*operationNumber2;  
    }
    if (operationStatus==4) {
        document.getElementById("main-screen").value=operationNumber1/operationNumber2;  
}
    isFirst=false;
}
