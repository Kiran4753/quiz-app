

// elements selection
//container selection
const container = document.querySelector('.container');
// start page selection
const imageContainer = document.querySelector('.image-container')
const startBtn = document.querySelector('.start-btn');
// category page selection
const category = document.querySelector('.category');
const categoryContainer = document.querySelector('.category-container');
const categoryBtns = document.querySelectorAll('#category-btn');
// question page selection
const topContainer = document.querySelector('.top-container');
const totalScore = document.querySelector('#score');
const questionContainer = document.getElementById('question-container');
const answerContainer = document.querySelector('.answer-container');
const answerBtns = document.querySelectorAll('#answer-btn');
//const nextBtn = document.getElementById('next-btn');



// load category
startBtn.addEventListener('click', showCategory);


function showCategory(){
    category.classList.remove('hide');
    categoryContainer.classList.remove('hide');
    startBtn.classList.add('hide');
    imageContainer.classList.add('hide');
}

function removeCategory(){
    category.classList.add('hide');
    categoryContainer.classList.add('hide');
    startBtn.classList.add('hide');
    imageContainer.classList.add('hide');
}

//show question
function showQuestion(){
    topContainer.classList.remove('hide');
    questionContainer.classList.remove('hide');
    answerContainer.classList.remove('hide');
    imageContainer.classList.add('hide');
    startBtn.classList.add('hide');
}

function backToCategory(){
    topContainer.classList.add('hide');
    questionContainer.classList.add('hide');
    answerContainer.classList.add('hide');
    category.classList.remove('hide');
    categoryContainer.classList.remove('hide');
    startBtn.classList.add('hide');
    imageContainer.classList.add('hide');
}


let score = 0;
let index = 0;


//load question
categoryBtns.forEach(function(button){
    button.addEventListener('click', function(){
        
        //gk
        if(button.value == 'gk'){
            removeCategory();
            showQuestion();
            loadGkQuestion();
            //back button
            const backBtn = document.createElement('button');
            backBtn.innerText = '< back';
            backBtn.classList.add('back-btn');
            topContainer.appendChild(backBtn);
            backBtn.addEventListener('click', function(){
                backToCategory();
                topContainer.removeChild(backBtn);
                container.removeChild(nextBtn);   
            });

            answerBtns.forEach(function(button){
                button.addEventListener('click', function(){
                    let correctAnswer = gkQuestions[index].correct;
            
                    if(button.value == correctAnswer){
                        button.style.background = '#65a30d';
                        score = score + 10;
                        totalScore.innerText = score;
                    }else{
                        button.style.background = '#dc2626';
                        totalScore.innerText = score;
                    }
                })
            });

            //next button
            const nextBtn = document.createElement('button');
            nextBtn.innerText = 'next';
            nextBtn.classList.add('next-btn');
            container.appendChild(nextBtn);
            nextBtn.addEventListener('click', function(){
                index++;
                if(index > gkQuestions.length-1){
                   index = 0;
                   totalScore.innerText = 0;
                }
                loadGkQuestion();
            })
            
        }
        ///////////////////////////////////////////////////////
        //history
        if(button.value == 'history'){
            //console.log('ok');
            removeCategory();
            showQuestion();
            loadHistoryQuestion();
            //back button
            const backBtn = document.createElement('button');
            backBtn.innerText = '< back';
            backBtn.classList.add('back-btn');
            topContainer.appendChild(backBtn);
            backBtn.addEventListener('click', function(){
                backToCategory();
                topContainer.removeChild(backBtn);
                container.removeChild(nextBtn);   
            });

            answerBtns.forEach(function(button){
                button.addEventListener('click', function(){
                    let correctAnswer = historyQuestions[index].correct;
            
                    if(button.value == correctAnswer){
                        button.style.background = '#65a30d';
                        score = score + 10;
                        totalScore.innerText = score;
                    }else{
                        button.style.background = '#dc2626';
                        totalScore.innerText = score;
                    }
                })
            });

            //next button
            const nextBtn = document.createElement('button');
            nextBtn.innerText = 'next';
            nextBtn.classList.add('next-btn');
            container.appendChild(nextBtn);
            nextBtn.addEventListener('click', function(){
                index++;
                if(index > historyQuestions.length-1){
                   index = 0;
                   totalScore.innerText = 0;
                }
                loadHistoryQuestion();
            })
            
        }

        //science
        if(button.value == 'science'){
            removeCategory();
            showQuestion();
            loadScienceQuestion();
            //back button
            const backBtn = document.createElement('button');
            backBtn.innerText = '< back';
            backBtn.classList.add('back-btn');
            topContainer.appendChild(backBtn);
            backBtn.addEventListener('click', function(){
                backToCategory();
                topContainer.removeChild(backBtn);
                container.removeChild(nextBtn);   
            });

            answerBtns.forEach(function(button){
                button.addEventListener('click', function(){
                    let correctAnswer = scienceQuestion[index].correct;
            
                    if(button.value == correctAnswer){
                        button.style.background = '#65a30d';
                        score = score + 10;
                        totalScore.innerText = score;
                    }else{
                        button.style.background = '#dc2626';
                        totalScore.innerText = score;
                    }
                })
            });

            //next button
            const nextBtn = document.createElement('button');
            nextBtn.innerText = 'next';
            nextBtn.classList.add('next-btn');
            container.appendChild(nextBtn);
            nextBtn.addEventListener('click', function(){
                index++;
                if(index > scienceQuestions.length-1){
                   index = 0;
                   totalScore.innerText = 0;
                }
                loadScienceQuestion();
            })
            
        }


    })

})



function loadGkQuestion(){
    let data = gkQuestions[index];
    questionContainer.innerText = data.question;
    answerBtns[0].innerText = data.a
    answerBtns[1].innerText = data.b
    answerBtns[2].innerText = data.c
    answerBtns[3].innerText = data.d
    answerBtns.forEach(function(button){
        button.style.background = 'white';
    });
}

//hitory question
function loadHistoryQuestion(){
    let data = historyQuestions[index];
    questionContainer.innerText = data.question;
    answerBtns[0].innerText = data.a
    answerBtns[1].innerText = data.b
    answerBtns[2].innerText = data.c
    answerBtns[3].innerText = data.d
    answerBtns.forEach(function(button){
        button.style.background = 'white';
    });
}

//science question
function loadScienceQuestion(){
    let data = scienceQuestions[index];
    questionContainer.innerText = data.question;
    answerBtns[0].innerText = data.a
    answerBtns[1].innerText = data.b
    answerBtns[2].innerText = data.c
    answerBtns[3].innerText = data.d
    answerBtns.forEach(function(button){
        button.style.background = 'white';
    });
}

