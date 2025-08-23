let displayInput
let numFromDisplay
let displayNumberIntoCalculator
let numPrevOutput
let operation 
const calculator = {
    result: '',
    input:0,
   
    initial: function (value) {
        this.input = value
        this.result += `${value}`
        return this
      },
  
    add: function (num) {
            this.input += num
            this.result += ` + ${num}`
            return this
        },

        subtract: function (num) {
           this.input -= num
           this.result += ` - ${num}`
            return this
        },

        multiply: function (num) {
            this.input *= num
            this.result += ` * ${num}`
            return this
        },

        divide: function (num) {
            this.input /= num
            this.result += ` / ${num}`
            return this
        },

        display: function () {
            return this.input
        }
    
}



function displayContents(output = '') {
    console.log(displayNumberIntoCalculator.result == null ? '' : displayNumberIntoCalculator.result)
    document.querySelector('.display').innerHTML = `<p>${output}</p>`
}


document.querySelector('.buttons').addEventListener('click', function (e) {
    displayInput = e.target.textContent
    if (/[0-9().]+$/.test(displayInput)) {
        numPrevOutput = displayNumberIntoCalculator
        document.querySelector('.display').firstElementChild.append(`${displayInput}`)
        numFromDisplay = document.querySelector('.display').textContent.trim() 
     
        
    }
    else if (/^[\+\-\*/=]$/.test(displayInput)) {
        if (!numPrevOutput) displayNumberIntoCalculator = calculator.initial(parseFloat(numFromDisplay))
        document.querySelector('.display').innerHTML = '<p></p>'
        if (displayInput !== '=') {
            operation = displayInput
        }
        if (displayInput === '=') {
            switch (operation) {
                case '+':
                     numPrevOutput.add(parseInt(numFromDisplay))
                    displayContents(numPrevOutput.display())
                    break;
                case '-':
                    numPrevOutput.subtract(parseInt(numFromDisplay))
                    displayContents(numPrevOutput.display())
                    break;
                case '*':
                    numPrevOutput.multiply(parseInt(numFromDisplay))
                    displayContents(numPrevOutput.display())
                    break;
                case '/':
                    numPrevOutput.divide(parseInt(numFromDisplay))
                    displayContents(numPrevOutput.display())
                    break;
                default:
                    displayContents(numPrevOutput.display())
              
    
            }
        
        }
    } else {
        displayNumberIntoCalculator = null
        displayContents()
    }
    
})