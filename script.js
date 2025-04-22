function showSection(params) {

   const elements = document.querySelectorAll(".main_content > div")

   elements.forEach(data =>{
      data.classList.add('hiden')
   })

   var w = document.getElementById(params + 'Section').classList.remove('hiden') 
}
showSection()
// console.log(w);
