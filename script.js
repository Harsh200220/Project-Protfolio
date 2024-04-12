
function project(img, title, desc){
    document.querySelector(".fourthMain").innerHTML = document.querySelector(".fourthMain").innerHTML + `
    <div class="flexCol">
    <img src="${img}" alt="">
    <h2>${title}</h2>
    <p>${desc}</p>
    </div>`
}



function certificateOdd(img, title, desc){
    document.querySelector(".fifthMain").innerHTML = document.querySelector(".fifthMain").innerHTML + `<div class="fifthInfo flex fifthOdd">
    <img src="${img}" alt="">
    <div>
        <h2>${title}</h2>
        <p>${desc}</p>
    </div>
</div>`
}


function certificateEven(img, title, desc){
    document.querySelector(".fifthMain").innerHTML = document.querySelector(".fifthMain").innerHTML + `<div class="fifthInfo flex fifthEven">
    
    <div>
        <h2>${title}</h2>
        <p>${desc}</p>
    </div>
    <img src="${img}" alt="">
</div>`
}

function internLeft(title, year, desc){
    document.querySelector(".thirdMain").innerHTML = document.querySelector(".thirdMain").innerHTML + `<div class="thirdLeft flex thirdCommon">
    <div>
        <h2>${title}</h2>
        <p>${year}</p>
        <p>${desc}</p>
    </div>
</div>
`
}
function internRight(title, year, desc){
    document.querySelector(".thirdMain").innerHTML = document.querySelector(".thirdMain").innerHTML + `<div class="thirdRight flex thirdCommon">
    <div>
        <h2>${title}</h2>
        <p>${year}</p>
        <p>${desc}</p>
    </div>
</div>
`
}



function main(){
    
    burger.addEventListener("click",()=>{
        document.querySelector(".navRight").style.right =20 + "px" ; 
    })
    

    document.querySelector(".close").addEventListener("click",()=>{
        document.querySelector(".navRight").style.right = -500 + "px" ; 
    })
}



// Internship

internLeft("Web Development"," Mar 2022 – Apr 2022 ","I have done internship in Web Development from Achmegrade. ")


internRight("Machine Learning","Mar 2023 – Apr 2023","I have done internship in Machine Learning from YBI Foundation.")


internLeft("Java Development","Oct 2023 – Nov 2023 ","I have done internship in Java Development from Cognifyz Technology.")



// Project 

project("img/project1.jpeg", "Rash Driving Alert System","During my Engineering I have created a project which was an IOT based Rash Driving Alert System. It was my mini Project." )


project("img/project2.jpeg", "Parmitra: HealthCare Monitering System","During my engineering my major project was a HealthCare Monitering System which was Specially designed for patients who are suffering from Hemi-plegia and Bi-plegia Paralysis.  " )

project("img/spotify.jpeg", "Spotify Clone","This is my Personal Project. In this project I have created a Spotify Clone using HTML, CSS & JS. It works just like original Spotify Website. We can listen to any song we want and it is user friendly." )

project("img/netflex.jpeg", "Netflex Clone","This is my another Personal Project. In this project I have created a Netflex Clone using HTML& CSS (Only the frontEnd of the Website). It Looks like original Netflex Website. " )



// Certifiates 

certificateOdd("img/voice acting.jpeg", "Voice Acting Kickstart Course"," I have done a course on Voice Acting kickstart course which was held by Sonal Kaushal (Official Hindi voice of Doraemon, america from Dr. Strange, PowerPuff Girls, Bandbud from Bandbud or Budbak and many more characters...). In this Course I have learned concepts like voice Modulation, breathing style, importance of Yoga and medidation.  ")  ;

certificateEven("img/research paper.jpeg", "Published Research Paper"," Title: Developing an Internet of Things (IoT) Driven Alert System for Detecting and Mitigating Rash Driving Incidents. Presented at the 2nd IEEE International Conference on Computer, Communication, and Control (IC42024).   ");


certificateOdd("img/winner.jpeg", "Winner at Rachna","It was a short video making competion where I secured first position among 70 Participants. In this event we have to create a short Video where theme was Independence Day ");

main();