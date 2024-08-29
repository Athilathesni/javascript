// let i=10
// const timer=document.getElementById('timers')
//     const interval=setInterval(() => {
//         timer.textContent=i
//         i--
//         if(i<0){
//             clearInterval(interval);
//             timer.textContent="start"
//         }
//     }, 1000);

    //task2
// let arr=[]
// function add(){
//     let a=document.getElementById("text").value
//     let b=document.getElementById("num").value
//     arr.push(a,b)
//     getData()
// }
// function getData(){
//     str=``
//     arr.map((i,index)=>{
//         str+=`<li type="1">username:${i} contact:${i}<button onclick="edit(${index})">Edit</button><button onclick="dlt(${index})">delete</button></li>`
    
//     })
//     document.getElementById("print").innerHTML= str
//     document.getElementById("text").value=""
//     document.getElementById("num").value=""
// }
// getData()
// function dlt(index){
//     console.log(index);
//     arr.splice(index,1)
//     getData()
// }
// function edit(index){
//     console.log(index);
//     let editData=prompt(`old data id "${arr[index]}" if you want to edit this then type in input field`);
//     if(editData!=null){
//         arr[index]=editData
//     }
//     getData()
// }
