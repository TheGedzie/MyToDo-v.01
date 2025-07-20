export const Save = (content) =>{
    localStorage.setItem('List',JSON.stringify(content))
}