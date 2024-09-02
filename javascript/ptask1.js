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

    function fetchdata(){
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            str=``
            data.map((dt)=>{
                str+=`
                <div class="photos">
                <img src="${dt.url}" alt="" style="width:400px">
                <div class="ttl">
                ${dt.title}</div>
                </div>`
            })
            document.getElementById("data").innerHTML=str

        })
        .catch((error)=>{
            console.log(error);
        })
    }
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