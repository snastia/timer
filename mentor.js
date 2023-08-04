const colorPickerOptions = [
        { label: 'red', color: '#F44336' },
        { label: 'green', color: '#4CAF50' },
        { label: 'blue', color: '#2196F3' },
        { label: 'grey', color: '#607D8B' },
        { label: 'pink', color: '#E91E63' },
        { label: 'indigo', color: '#3F51B5' },
      ];

const divEl = document.querySelector(".box")

function createOptions(options){
   return options.map((option) => {
   return `<span style = "background-color:${option.color}" class="option">${option.label}</span>`
   }).join("")
}

const options = createOptions(colorPickerOptions)
console.log(options)

divEl.innerHTML = options;