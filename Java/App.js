function getProduct()
{
    var xhr =new XMLHttpRequest();
    
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200)
        {
            var product=xhr.responseText;
            //alert(product);*/
            displayProduct(product);
        }
    };
    var url="https://reqres.in/api/products/" + document.getElementById("pID").value;
    //url= "https://reqres.in/api/products/1"
    xhr.open("get", url, true);
    xhr.send();	

};
function displayProduct(p){
    var jsonData=JSON.parse(p);
	var prod=jsonData.data;
    document.getElementById("JK").innerHTML="<br>product Id :"+prod.id;
    document.getElementById("JK").innerHTML+="<br>product Name :"+prod.name.fontcolor(prod.color);
    document.getElementById("JK").innerHTML+="<br>product Year Extened :"+prod.year;
    document.querySelector(".Logo").innerHTML=prod.name;
    document.querySelector(".gL").innerHTML="Hellow I'm"+prod.name;
    document.querySelector("#NUM").innerHTML=prod.pantone_value;
    
};
