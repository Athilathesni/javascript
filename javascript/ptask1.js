//     function fetchdata(){
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((res)=>{
//             return res.json()
//         })
//      .then((data)=>{
//         console.log(data);
//         str=``
//         data.map((dt)=>{
//             str+=`${dt.comment}`
//         })
//         document.getElementById("data").innerHTML=str
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// }
//1.LIST FORMATE
    // function fetchdata(){
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((res)=>{
    //         return res.json()
    //     })
    //     .then((data)=>{
    //         console.log(data);
    //         str=``
    //         data.map((dt)=>{
    //             str+=`<li>${dt.title}</li>`
    //         })
    //         document.getElementById("data").innerHTML=str
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // }

//2.TABLE FORMATE
// function fetchdata(){
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res)=>{
//         return res.json()
//     })
//     .then((data)=>{
//         console.log(data);
//         str=``
//         data.map((dt)=>{
//             str+=`<tr>
//             <th>${dt.id}</th>
//             <th>${dt.userid}</th>
//             <th>${dt.title}</th>
//             <th>${dt.body}</th>
//             </tr>`
//         })
//         document.getElementById("data").innerHTML=str
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// }

//3.task
    //     function fetchdata(){
    //     fetch("https://jsonplaceholder.typicode.com/comments")
    //     .then((res)=>{
    //         return res.json()
    //     })
    //     .then((data)=>{
    //         console.log(data);
    //         str=``
    //         data.map((dt)=>{
    //             str+=`<tr>
    //             <th>${dt.id}</th>
    //             <th>${dt.name}</th>
    //             <th>${dt.email}</th>
    //             <th>${dt.body}</th>
    //             </tr>`
    //         })
    //         document.getElementById("data").innerHTML=str
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // }

    //4.TASK ALBUM CARD
    // function fetchdata(){
    //     fetch("https://jsonplaceholder.typicode.com/albums")
    //         .then((res)=>{
    //             return res.json()
    //         })
    //         .then((data)=>{
    //             console.log(data);
    //             str=``
    //             data.map((dt)=>{
    //                 str+=`
    //                 <div class="a1">${dt.id}<br>
    //                 ${dt.userId}<br>
    //                 ${dt.title}</div>`
    //             })
    //             document.getElementById("data").innerHTML=str
    //         })
    //         .catch((error)=>{
    //             console.log(error);
    //         })
    //     }

//5.TASK PHOTOS CARD

    // function fetchdata(){
    // fetch("https://jsonplaceholder.typicode.com/photos")
    //     .then((res)=>{
    //         return res.json()
    //     })
    //     .then((data)=>{
    //         console.log(data);
    //         str=``
    //         data.map((dt)=>{
    //             str+=`
    //             <div class="photos">
    //             <img src="${dt.url}" alt="" style="width:400px">
    //             <div class="ttl">
    //             ${dt.title}</div>
    //             </div>`
    //         })
    //         document.getElementById("data").innerHTML=str

    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // }
//6.TASK TODOS TABLE
    // function fetchdata(){
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //     .then((res)=>{
    //         return res.json()
    //     })
    //     .then((data)=>{
    //         console.log(data);
    //         str=``
    //         data.map((dt)=>{
    //             str+=`<tr>
    //             <th>${dt.userId}</th>
    //             <th>${dt.id}</th>
    //             <th>${dt.title}</th>

    //             <th>${dt.completed?"<h4 class='a1'>completed</h4>":"<h4 class='a2'> Not completed</h4>"}</th>
    //             </tr>`
    //         })
    //         document.getElementById("data").innerHTML=str
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // }


    //7.TASK USERS CARD
    // function fetchdata(){
    // fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res)=>{
    //         return res.json()
    //     })
    //     .then((data)=>{
    //         console.log(data);
    //         str=``
    //         data.map((dt)=>{
    //             str+=`<div class="user">
    //             <div class="a1"><h4 class="head">ID</h4>
    //              ${dt.id}<br>
    //             <span class="shead">NAME:</span> ${dt.name}<br>
    //            <span class="shead">USERNAME:</span> ${dt.username}<br>
    //            <span class="shead">EMAIL:</span> ${dt.email}</div>

    //           <div class="a2"><h4 class="head">ADDRESS:</h4><br>
    //           <span class="shead">STREET:</span> ${dt.address.street}<br>
    //            <span class="shead">SUITE:</span>${dt.address.suite}<br>
    //            <span class="shead">CITY:</span>${dt.address.city}<br>
    //          <span class="shead">ZIPCODE:</span>  ${dt.address.zipcode}<br>
    //           <span class="shead">PHONE:</span> ${dt.phone}<br>
    //           <span class="shead">WEBSITE:</span> ${dt.website}<br></div>

            
    //             <div class="a3"><h4 class="head">COMPANY:</h4><br>
    //             <span class="shead">NAME:</span> ${dt.company.name}<br>
    //             <span class="shead">CATCHPHRASE:</span> ${dt.company.catchPhrase}<br>
    //            <span class="shead">BS:</span>  ${dt.company.bs}</div>
    //            </div>`;
                
    //         })
    //         document.getElementById("data").innerHTML=str

    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // }


// 1.ASYNC FUNCTION TASK
    async function fetchdata() {
        try{
            const res =await fetch("https://jsonplaceholder.typicode.com/posts")
            const data=await res.json();
            str=``;
            data.map((dt)=>{
                str+=`<tr>
             <th>${dt.id}</th>
             <th>${dt.userid}</th>
             <th>${dt.title}</th>
             <th>${dt.body}</th>
             </tr>`
            })
            document.getElementById("data").innerHTML=str;
        }catch(error){
            console.log(error);
            
        }
    } 