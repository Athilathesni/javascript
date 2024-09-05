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
    // async function fetchdata() {
    //     try{
    //         const res =await fetch("https://jsonplaceholder.typicode.com/posts")
    //         const data=await res.json();
    //         str=``;
    //         data.map((dt)=>{
    //             str+=`<tr>
    //          <th>${dt.id}</th>
    //          <th>${dt.userid}</th>
    //          <th>${dt.title}</th>
    //          <th>${dt.body}</th>
    //          </tr>`
    //         })
    //         document.getElementById("data").innerHTML=str;
    //     }catch(error){
    //         console.log(error);
            
    //     }
    // } 


    // export function add(a,b){
    //     return a+b

    // }
    // export function sub(a,b){
    //     return a-b
    // }

    //REGULAR EXPRESSION

    // RegExp=/[a-d]at/i
    // +.*?
    // RegExp=/fish.+$/
    // RegExp=/^[^c]at/
    // RegExp=/^\d{10}$/  //contact number [0-9]
    // RegExp=/^[6-9]\d{9}$/
    // RegExp=/^([0-2]\d|3[0-1])-([0-9]\d|1[1-2])-(\d{4})/
    // console.log(RegExp.test("27-10-2004"));
    // console.log(RegExp.test("rat eat fishs"));
    // console.log(RegExp.test("bat eat fruit"));

// DATE OF BIRTH VALIDATION
//     function asd(){
//     dob=document.getElementById("dobdata").value
//     const dobdata=/^([0-2]\d|3[0-1])-([0-9]\d|1[1-2])-(\d{4})/
//     db=dobdata.test(dob)
//      str=``
//      if(db){
//          str+=`
//      <h6 class="a1">${dob}<br>success</h6>`
//      }
//      else{
//          str+=`
//          <h6 class="a2">Enter Correct Formate DD-MM-YYYY<br></h6>
//         <h6 class="d1">'DD-01 TO 31'<br>'MM-1 TO 12'<br>'YYYY'</h6>`
//      }
//      document.getElementById("data").innerHTML=str
//      document.getElementById("dobdata").value=""
//  }
    
   
//USERNAME VALIDATION
//     function asd(){
//     a=document.getElementById("user").value
//     const user=/^[a-zA-Z]{4,}$/
//     b=user.test(a)
//     str=``
//     if(b){
//         str+=`<li>${a}</li><br>successful`
//     }
//     else{
//         str+=`
//         <li>invalid username</li>`

//     }
//     document.getElementById("list").innerHTML=str
//     document.getElementById("user").value=""
// }


//PASSWORD VALIDATION

    // function asd(){
    // a=document.getElementById("password").value
    // const password=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    // b=password.test(a)
    // str=``
    // if(b){
    // str+=`<li>${a}</li><br>successful`
    // }
    // else{
    // str+=`
    // <li>invalid password</li>`
    
    // }
    // document.getElementById("pwd").innerHTML=str
    // document.getElementById("password").value=""
    // }
    




//EMAIL VALIDATION
// function asd(){
//     a=document.getElementById("email").value
//     const email=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     b=email.test(a)
//     str=``
//     if(b){
//     str+=`<li>${a}</li><br>email is valid`
//     }
//     else{
//     str+=`
//     <li>please enter valid email address</li>`
    
//     }
//     document.getElementById("emailid").innerHTML=str
//     document.getElementById("email").value=""
//     }
  

    function asd(){
        a=document.getElementById("user").value
        c=document.getElementById("password").value
        d=document.getElementById("email").value
        const user=/^[a-zA-Z]{4,}$/
        const password=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
        const email=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        b=user.test(a)
        b=password.test(c)
        b=email.test(d)

        str=``
        if(b){
        str+=`<li>${a,c,d}</li><br>email is valid
        
        `
        }
        else{
        str+=`
        <li>please enter valid email address</li>
     <li>invalid password</li>
      <li>invalid username</li>  `
        
        }
        document.getElementById("emailid").innerHTML=str
        document.getElementById("email").value=""
document.getElementById("pwd").innerHTML=str
        document.getElementById("password").value=""

        document.getElementById("list").innerHTML=str
        document.getElementById("user").value=""

        }
      