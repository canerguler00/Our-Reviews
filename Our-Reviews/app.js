const reviews = [
    {
        id: 1,
        name: "Sibel ALEV",
        job: "Web Developer",
        img: `img/100.jfif `,
        info: `Its one of the best way of improving written skills. I was really helpful. I wish I could find out about Textranch earlier. Thanks a lot for editors.`
    },
    {
        id: 2,
        name: "Hüseyin ULU",
        job: "IT",
        img: `img/102.jfif `,
        info: ` Wow. An online service where professional editors even revise the style of your text? Amazing. Thanks, Textranch.`
    },
    {
        id: 3,
        name: "Mehmet EYLÜL ",
        job: "Web Designer",
        img: `img/103.jfif `,
        info: ` It helped me a lot to write in English. There are people who can check my writing and in the same time, I can learn where my mistakes are.`
    },
    {
        id: 4,
        name: "Deniz GEYİK ",
        job: "Intern",
        img: `img/20.jfif `,
        info: `Thanks for immediate response, really awesome application.`
    },
    
]

const img = document.getElementById("img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const about = document.getElementById("about");

const prevBtn = document.getElementById("prev-btn");
const skipBtn = document.getElementById("skip-btn");
const randomBtn = document.getElementById("random-btn");

let item = 0;

window.addEventListener("DOMContentLoaded", function(){
    showPerson();
});

function showPerson(){
    const itemDOM = reviews[item];
    img.src = itemDOM.img;
    author.textContent = itemDOM.name;
    job.textContent = itemDOM.job;
    about.textContent = itemDOM.info;

}

// skipbtn //

skipBtn.addEventListener("click", function(){
    item++;
    if(item > reviews.length -1){
        item = 0;
    }
    showPerson();
});

// prevbtn //

prevBtn.addEventListener("click", function(){
    item--;
    if(item < 0 ){
        item = reviews.length -1;
    }
    showPerson();
});

//  randombtn //

randomBtn.addEventListener("click", function(){
    item = Math.floor(Math.random() * reviews.length);
    
    showPerson();
})
