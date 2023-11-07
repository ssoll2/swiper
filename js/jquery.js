$(document).ready(function(){
    // ? console.log($("#div")) //document.querySeletor랑 같음
    // console.log($("li"))

    // $("li").css("color", "red")  // document.querySelectorAll("li").forEach(li => li.style.color = "red")

    // ? 자바스크립트
    // const lists = document.querySelectorAll("li")
    // for(let i = 0;i<lists.length;i++) {
    //     lists[i].style.color = "red"
    // }

    // ? jquery          
    // $("li").on("click", function() {
    //     $("li").css("color", "black")
    //     $(this).css("color", "red")
    // })


    // ? 자바스크립트
    const lists = document.querySelectorAll("li")

    // for (let i = 0; i < lists.length; i++) {
    //     lists[i].addEventListener("click", function() {
    //         for(let j = 0; j<lists.length;j++) {
    //             lists[j].style.color = "black"
    //         }
    //         lists[i].style.color = "red"
    //     })
    // }
    // ? forEach
    lists.forEach(function(li){
        li.addEventListener("click", function() {
            lists.forEach(function(li){
                li.style.color = "black"
            
            })
            li.style.color = "red"
        })
    })
        
  


   
 });  