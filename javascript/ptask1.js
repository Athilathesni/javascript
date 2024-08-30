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
        function fetchdata(){
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            str=``
            data.map((dt)=>{
                str+=`<tr>
                <th>${dt.id}</th>
                <th>${dt.name}</th>
                <th>${dt.email}</th>
                <th>${dt.body}</th>
                </tr>`
            })
            document.getElementById("data").innerHTML=str
        })
        .catch((error)=>{
            console.log(error);
        })
    }