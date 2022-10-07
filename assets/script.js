var currentDay = document.getElementById('currentDay')
currentDay.textContent = moment().format("MMM Do, YYYY")

var nine = document.getElementById('nine')
var ten = document.getElementById('ten')
var eleven = document.getElementById('eleven')
var twelve = document.getElementById('twelve')
var one = document.getElementById('one')
var two = document.getElementById('two')
var three = document.getElementById('three')
var four = document.getElementById('four')
var five = document.getElementById('five')

var nineSave = document.getElementById('nineSave')
var tenSave = document.getElementById('tenSave')
var elevenSave = document.getElementById('elevenSave')
var twelveSave = document.getElementById('twelveSave')
var oneSave = document.getElementById('oneSave')
var twoSave = document.getElementById('twoSave')
var threeSave = document.getElementById('threeSave')
var fourSave = document.getElementById('fourSave')
var fiveSave = document.getElementById('fiveSave')

var nineInput = document.getElementById('nineInput')
var tenInput = document.getElementById('tenInput')
var elevenInput = document.getElementById('elevenInput')
var twelveInput = document.getElementById('twelveInput')
var oneInput = document.getElementById('oneInput')
var twoInput = document.getElementById('twoInput')
var threeInput = document.getElementById('threeInput')
var fourInput = document.getElementById('fourInput')
var fiveInput = document.getElementById('fiveInput')


function colorBoxes() {
    var hour = moment().format('H')
    if (hour == 9) {
        nine.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-primary')
        ten.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        eleven.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        twelve.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        one.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        two.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        three.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        four.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        five.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
    } else if (hour == 10) {
        nine.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        ten.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-primary')
        eleven.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        twelve.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        one.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        two.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        three.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        four.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        five.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        
    } else if (hour == 11) {
        nine.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        ten.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        eleven.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-primary')
        twelve.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        one.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        two.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        three.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        four.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        five.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        
    } else if (hour == 12) {
        nine.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        ten.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        eleven.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        twelve.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-primary')
        one.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        two.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        three.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        four.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        five.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        
    } else if (hour == 13) {
        nine.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        ten.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        eleven.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        twelve.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        one.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-primary')
        two.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        three.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        four.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        five.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        
    } else if (hour == 14) {
        nine.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        ten.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        eleven.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        twelve.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        one.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        two.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-primary')
        three.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        four.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        five.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        
    } else if (hour == 15) {
        nine.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        ten.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        eleven.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        twelve.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        one.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        two.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        three.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-primary')
        four.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        five.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        
    } else if (hour == 16) {
        nine.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        ten.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        eleven.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        twelve.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        one.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        two.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        three.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        four.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-primary')
        five.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-success')
        
    } else if (hour == 17) {
        nine.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        ten.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        eleven.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        twelve.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        one.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        two.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        three.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        four.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        five.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-primary')
        
    } else {
        nine.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        ten.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        eleven.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        twelve.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        one.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        two.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        three.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        four.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        five.setAttribute('class', 'd-flex flex-row bd-highlight justify-content-between m-2 p-2 card border-danger')
        
    }
    
}
colorBoxes()
setInterval(colorBoxes, 5000)



// nine

function getNine() {
    var nineContent = localStorage.getItem('nine')
    console.log(nineContent)
    if (nineContent) {
        nineInput.parentElement.textContent = nineContent
        nineInput.style.display = 'none'
        nineSave.style.visibility = 'hidden'
    }
    
}

getNine()

nineSave.addEventListener("click", function(){
    console.log(nineInput.value)
    if (nineInput.value) {
        localStorage.setItem('nine', nineInput.value)
        nineInput.parentElement.textContent = nineInput.value
        nineInput.style.display = 'none'
        nineSave.style.visibility = 'hidden'
    }
})


// ten

function tenGet() {
    var tenContent = localStorage.getItem('ten')
    if (tenContent) {
        tenInput.parentElement.textContent = tenContent
        tenInput.style.display = 'none'
        tenSave.style.visibility = 'hidden'
    }
}

tenGet()

tenSave.addEventListener("click", function(){
    if (tenInput.value) {
        localStorage.setItem('ten', tenInput.value)
        tenInput.parentElement.textContent = tenInput.value
        tenInput.style.display = 'none'
        tenSave.style.visibility = 'hidden'
    }
})

// Eleven

function elevenGet() {
    var elevenContent = localStorage.getItem('eleven')
    if (elevenContent) {
        elevenInput.parentElement.textContent = elevenContent
        elevenInput.style.display = 'none'
        elevenSave.style.visibility = 'hidden'
    }
}

elevenGet()

elevenSave.addEventListener("click", function(){
    if (elevenInput.value) {
        localStorage.setItem('eleven', elevenInput.value)
        elevenInput.parentElement.textContent = elevenInput.value
        elevenInput.style.display = 'none'
        elevenSave.style.visibility = 'hidden'
    }
})

// Twelve

function twelveGet() {
    var twelveContent = localStorage.getItem('twelve')
    if (twelveContent) {
        twelveInput.parentElement.textContent = twelveContent
        twelveInput.style.display = 'none'
        twelveSave.style.visibility = 'hidden'
    }
}

twelveGet()

twelveSave.addEventListener("click", function(){
    if (twelveInput.value) {
        localStorage.setItem('twelve', twelveInput.value)
        twelveInput.parentElement.textContent = twelveInput.value
        twelveInput.style.display = 'none'
        twelveSave.style.visibility = 'hidden'
    }
})


// One

function oneGet() {
    var oneContent = localStorage.getItem('one')
    if (oneContent) {
        oneInput.parentElement.textContent = oneContent
        oneInput.style.display = 'none'
        oneSave.style.visibility = 'hidden'
    }
}

oneGet()

oneSave.addEventListener("click", function(){
    if (oneInput.value) {
        localStorage.setItem('one', oneInput.value)
        oneInput.parentElement.textContent = oneInput.value
        oneInput.style.display = 'none'
        oneSave.style.visibility = 'hidden'
    }
})


// Two

function twoGet() {
    var twoContent = localStorage.getItem('two')
    if (twoContent) {
        twoInput.parentElement.textContent = twoContent
        twoInput.style.display = 'none'
        twoSave.style.visibility = 'hidden'
    }
}

twoGet()

twoSave.addEventListener("click", function(){
    if (twoInput.value) {
        localStorage.setItem('two', twoInput.value)
        twoInput.parentElement.textContent = twoInput.value
        twoInput.style.display = 'none'
        twoSave.style.visibility = 'hidden'
    }
})


// Three

function threeGet() {
    var threeContent = localStorage.getItem('three')
    if (threeContent) {
        threeInput.parentElement.textContent = threeContent
        threeInput.style.display = 'none'
        threeSave.style.visibility = 'hidden'
    }
}

threeGet()

threeSave.addEventListener("click", function(){
    if (threeInput.value) {
        localStorage.setItem('three', threeInput.value)
        threeInput.parentElement.textContent = threeInput.value
        threeInput.style.display = 'none'
        threeSave.style.visibility = 'hidden'
    }
})


// Four

function fourGet() {
    var fourContent = localStorage.getItem('four')
    if (fourContent) {
        fourInput.parentElement.textContent = fourContent
        fourInput.style.display = 'none'
        fourSave.style.visibility = 'hidden'
    }
}

fourGet()

fourSave.addEventListener("click", function(){
    if (fourInput.value) {
        localStorage.setItem('four', fourInput.value)
        fourInput.parentElement.textContent = fourInput.value
        fourInput.style.display = 'none'
        fourSave.style.visibility = 'hidden'
    }
})


// Five

function fiveGet() {
    var fiveContent = localStorage.getItem('five')
    if (fiveContent) {
        fiveInput.parentElement.textContent = fiveContent
        fiveInput.style.display = 'none'
        fiveSave.style.visibility = 'hidden'
    }
}

fiveGet()

fiveSave.addEventListener("click", function(){
    if (fiveInput.value) {
        localStorage.setItem('five', fiveInput.value)
        fiveInput.parentElement.textContent = fiveInput.value
        fiveInput.style.display = 'none'
        fiveSave.style.visibility = 'hidden'
    }
})

// Clear all events button

document.getElementById('clearAll').addEventListener("click", function(){
    localStorage.setItem('nine', '')
    localStorage.setItem('ten', '')
    localStorage.setItem('eleven', '')
    localStorage.setItem('twelve', '')
    localStorage.setItem('one', '')
    localStorage.setItem('two', '')
    localStorage.setItem('three', '')
    localStorage.setItem('four', '')
    localStorage.setItem('five', '')
    location.reload()
})