

var  inputName = document.getElementById("inputName");
var inputURL = document.getElementById("inputURL");
var btn =document.getElementById('button');
var table = document.getElementById('tbody');
var box = document.getElementById('box');
var markX = document.querySelector('.mark');

var allList= [];

if (localStorage.getItem('site') != null) {
    allList = JSON.parse(localStorage.getItem('site'))
    display();
}

var urlRegex = /^[A-Za-z0-9\.\/:_$]+\.[A-Za-z0-9]{2,}$/;


inputName.addEventListener('keyup',function changeColor() {

    if (inputName.value.trim().length >=3){
       inputName.classList.remove('error')
       inputName.classList.add('accept');
       
    }
    else{
        inputName.classList.remove('accept')
    }
})

inputURL.addEventListener('keyup',function changeColor2() {
 
    if (urlRegex.test(inputURL.value.trim()) == true) {
        
        inputURL.classList.remove('error')
        inputURL.classList.add('accept');
        
    }else{
        inputURL.classList.remove('accept')
    }
})
//validation
btn.addEventListener('click',function validationInput() {
  
if (inputName.value.trim().length <3) {
  box.classList.replace('d-none','d-flex')  ;
  inputName.classList.add('error');


}if (urlRegex.test(inputURL.value.trim()) != true) {
    box.classList.replace('d-none','d-flex')  ;
    inputURL.classList.add('error');

}else{
    add();
}


})









//add
 function add() {
    list ={

        name : inputName.value,
        url : inputURL.value
    }
    
    allList.push(list);
    localStorage.setItem('site',JSON.stringify(allList))

    display();
    clear();
}


// display
function display() {
var container =''
    for (let i = 0; i < allList.length; i++) {
      container +=`
      <tr>

            <td>${i+1}</td>
            <td>${allList[i].name}</td>
            <td><a href="https://${allList[i].url}" target="-blank" class="btn btn-success fa fa-eye text-uppercase" >visit</a></td>
            <td><button onclick='deleteProduct(${i})' class="btn btn-danger fa fa-trash">delete</button></td>
           

      </tr>`  
        
    }
    table.innerHTML = container;
    
}
//clear
function clear() {
    inputName.value= '';
    inputURL.value = '';  
}

//delete
function deleteProduct(index){


    allList.splice(index,1);
    localStorage.setItem('site',JSON.stringify(allList))
    display();
}

// close box
markX.addEventListener('click',function closeBox() {
    box.classList.replace('d-flex','d-none')  ;

})