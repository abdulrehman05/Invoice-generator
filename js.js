const addItem = document.forms['additem'];
const itemContainer = document.querySelector('.item');

const subTotalItem = document.querySelector('#subtotal');
const wholeTaxItem = document.querySelector('#wholetax');
const totalItem = document.querySelector('#total');
const balancedueItem = document.querySelector('#balancedue');

let subtotal = 0
let wholetax = 0
let total = 0
let balancedue = 0

subTotalItem.querySelector('.value').innerHTML =  subtotal
wholeTaxItem.querySelector('.value').innerHTML =  wholetax
totalItem.querySelector('.value').innerHTML =  total
balancedueItem.querySelector('.value').innerHTML =  balancedue



addItem.addEventListener('submit', (event)=>{
    event.preventDefault();
let tax = 'Yes'
let iftax
if(addItem.querySelector('#tax').checked){
tax = 'Yes'
iftax = 1.25
}else{
    tax = 'No'
iftax = 1
}

rate = addItem.querySelector('#rate').value;
qty = addItem.querySelector('#qty').value;



    const element =`
    <div class="grid-container container">
    <button class="removebtn" data-html2canvas-ignore="true">Remove</button>
    <p type="text" class="description">${addItem.querySelector('#description').value}</p>
    <p type="number" class="rate">${rate}</p>
    <p type="number" class="qty">${qty}</p>
    <p type="number" class="amount">Rs. ${rate*qty*iftax}</p>
    <h3 type="check" class="tax" checked>${tax}</h3>
    </div>`   
    itemContainer.innerHTML += element

    
subtotal = 0
wholetax = 0
total = 0
balancedue = 0


let allItemsrate =document.querySelectorAll('.container');
allItemsrate.forEach(element => {
    let thisrate = parseInt(element.querySelector('.rate').textContent)
    let thisqty = parseInt(element.querySelector('.qty').textContent)    
    subtotal += thisrate*thisqty

let iftaxs
if(element.querySelector('h3').innerHTML == 'Yes'){
iftaxs = 1.25
}else{
iftaxs = 1
}
wholetax += ((thisrate*thisqty*iftaxs) - (thisrate*thisqty))

total += (thisrate*thisqty*iftaxs)
balancedue = total
}); 

subTotalItem.querySelector('.value').innerHTML =  subtotal
wholeTaxItem.querySelector('.value').innerHTML =  wholetax
totalItem.querySelector('.value').innerHTML =  total
balancedueItem.querySelector('.value').innerHTML =  balancedue


})
addItem.addEventListener('change',event=>{

    if(addItem.querySelector('#tax').checked){
        tax = 'Yes'
        iftax = 1.25
        }else{
            tax = 'No'
        iftax = 1
        }
        
        rate = addItem.querySelector('#rate').value;
        qty = addItem.querySelector('#qty').value;
        amount = addItem.querySelector('#amount');
    
        amount.innerHTML = 'Rs. ' +(rate*qty*iftax)
})

itemContainer.addEventListener('click', event=>{
    if(event.target.className == 'removebtn'){
        const item = event.target.parentElement;
        itemContainer.removeChild(item)
    }

     
subtotal = 0
wholetax = 0
total = 0
balancedue = 0


let allItemsrate = document.querySelectorAll('.container');
allItemsrate.forEach(element => {
    let thisrate = parseInt(element.querySelector('.rate').textContent)
    let thisqty = parseInt(element.querySelector('.qty').textContent)    
    subtotal += thisrate*thisqty

let iftaxs
if(element.querySelector('h3').innerHTML == 'Yes'){
iftaxs = 1.25
}else{
iftaxs = 1
}
wholetax += ((thisrate*thisqty*iftaxs) - (thisrate*thisqty))

total += (thisrate*thisqty*iftaxs)
balancedue = total
}); 

subTotalItem.querySelector('.value').innerHTML = 'Rs. '+  subtotal
wholeTaxItem.querySelector('.value').innerHTML = 'Rs. '+  wholetax
totalItem.querySelector('.value').innerHTML = 'Rs. '+  total
balancedueItem.querySelector('.value').innerHTML = 'Rs. '+  balancedue



})


const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const generaterandom = () => {
    const randomnumber = generate();
    document.querySelector('#invid').innerText = randomnumber;
}
const generate = () => {
    let result = ''
    for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))

    }
    return result

};
generaterandom()

var frominputs = document.querySelectorAll('.info .from input');
var fromcont = document.querySelector('.from')
var toinputs = document.querySelectorAll('.info .to input');
var tocont = document.querySelector('.to')

const firstForm = document.forms['firstForm'];
document.forms['firstForm'].addEventListener('submit', (event)=>{    
    event.preventDefault();

    
frominputs.forEach(one =>{
    const currentVal = one.value
    one.previousElementSibling.innerHTML += `: <h3 class="values">${currentVal}</h3>`;
    one.previousElementSibling.classList.toggle('text')
    one.classList.toggle('hidden');
})
toinputs.forEach(one =>{
    const currentVal = one.value
    one.previousElementSibling.innerHTML += `: <h3 class="values">${currentVal}</h3>`;
    one.previousElementSibling.classList.toggle('text')
    one.classList.toggle('hidden');
})

setTimeout(() => {
    const body = document.querySelector('body')
    html2pdf(body);
}, 1000);
    

setTimeout(() => {
    location.reload();
}, 10000);
})
var imgtaken = document.querySelector('#imginput');
var pic = document.getElementById("picture");
imgtaken.addEventListener('change',(event)=>{
    pic.style.display ='block'
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("imginput").files[0]);
    oFReader.onload = function (oFREvent) {
        pic.src = oFREvent.target.result;
    };
    document.getElementById("wholepicthing").style.display = 'none';
})
