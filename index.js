import {Save} from './scripts/savetoLocalStorage.js'

const input = document.querySelector('[data-input]')
const button = document.querySelector('[data-btn]')
const container = document.querySelector('[data-item-container]')

const ToDoList = JSON.parse(localStorage.getItem('List')) || []


button.addEventListener('click', () => {
    if(input.value.trim()){
        ToDoList.push(input.value)
        input.value = ''
        Save(ToDoList)
        
       render()
    }
})

const render = () =>{
    container.innerHTML = ''
        ToDoList.forEach((todo, index) => {
            const div = document.createElement('div')
            const btn  = document.createElement('button')
            btn.textContent = '❌'
            btn.addEventListener('click', () => {
                ToDoList.splice(index, 1)
                render()
            })
            div.textContent = todo
            div.append(btn)
            div.classList.add('todo__element')
            container.append(div)
        });
}


render()