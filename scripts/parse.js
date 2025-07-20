import {Save} from './savetoLocalStorage.js'

const ParseElem = localStorage.getItem('List')
const ToDoArray = JSON.parse(ParseElem)

export const render = (container) =>{
    container.innerHTML = ''
    ToDoArray.forEach(element => {
        const div = document.createElement('div')
        div.append(element)
        container.append(div)
        Save('List', JSON.stringify(ToDoArray))
    });
}