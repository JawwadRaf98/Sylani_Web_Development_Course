Question = [
    {
        ques: "What is a correct syntax to output 'Hello World' in Python",
        opt1: 'p("Hello World")',
        opt2: 'echo "Hello World"',
        opt3: 'echo("Hello World");',
        opt4: 'print("Hello World")',
        correct: 'print("Hello World")'
    }
    ,
    {
        ques: 'How do you insert COMMENTS in Python code?',
        opt1: '//This is a comment',
        opt2: '/*This is a comment*/',
        opt3: '#This is a comment',
        opt4: "$This is Comment",
        correct: '#This is a comment'
        },
    {
        ques: 'Which one is NOT a legal variable name?',
        opt1: 'my_var',
        opt2: 'my-var',
        opt3: "_myvar",
        opt4: "Myvar",
        correct: "my-var"
    },
    {
        ques: 'How do you create a variable with the numeric value 5?',
        opt1: 'x = 5',
        opt2: 'x = int(5)',
        opt3: "Both the other answers are correct",
        opt4: "None of these.",
        correct: "Both the other answers are correct"
    },
    {
        ques: 'What is the correct file extension for Python files?',
        opt1: '.pyth',
        opt2: '.py',
        opt3: ".pyt",
        opt4: ".pt",
        correct: ".py"
    },
    {
        ques: 'How do you create a variable with the floating number 2.8?',
        opt1: 'x = 2.8',
        opt2: 'x = float(2.8)',
        opt3: 'Both the other answers are correct',
        opt4: "None of these.",
        correct: "Both the other answers are correct"
    },
    {
        ques: 'What is the correct syntax to output the type of a variable or object in Python?',
        opt1: 'print(type(x))',
        opt2: 'print(typeof x)',
        opt3: 'print(typeof(x))',
        opt4: "print(typeOf(x))",
        correct: "print(type(x))"
    },
    {
        ques: 'What is the correct way to create a function in Python?',
        opt1: 'function myfunction():',
        opt2: 'def myFunction():',
        opt3: 'create myFunction():',
        opt4: "build myFunction():",
        correct: "function myfunction():"
    },
    {
        ques: 'What is a correct syntax to check the length of a variable',
        opt1: 'print(len("Hello World"))',
        opt2: 'print(lenght("Hello World"))',
        opt3: 'print(("Hello World").len)',
        opt4: 'print(("Hello World").lenght)',
        correct: 'print(len("Hello World"))'
    }
    ,
    {
        ques: 'What is a correct syntax to create a tuple?',
        opt1: 'x = "a", "b"',
        opt2: 'x = ("a", "b")',
        opt3: 'Both the other answers are correct',
        opt4: 'None of these.',
        correct: 'Both the other answers are correct'
    }
]

score = []
var user = [
    {
        'userName' : "",
        'fatherName': "",
    }
]

function totalQuestion(){
    var question = Question.length
    return question
}

function question(no){
    currentQuestion = no    
    var quizBody = document.getElementById('quizBody')

    quiz = document.createElement('div')
    quiz.setAttribute('class','quiz')
    quiz.setAttribute('id','quiz')

    quizBody.appendChild(quiz)
   
    var questionPane =  document.createElement('div')
    questionPane.setAttribute('class','questionPane')

    var questionNo = document.createElement('div')
    questionNo.setAttribute('class', 'questionNo')
    questionNo.setAttribute('id', 'questionNo')
    questionPane.appendChild(questionNo)

    questionNo.appendChild(document.createTextNode("Question no "))

    var span = document.createElement('span')
    span.setAttribute('id','currentQuestion')

    getCurrentQuestionSpanText = document.createTextNode(currentQuestion)
    span.appendChild(getCurrentQuestionSpanText)

    questionNo.appendChild(span)

    questionNo.appendChild(document.createTextNode(" of "))

    var span = document.createElement('span')
    span.setAttribute('id','totalQuestion')

    getCurrentQuestionSpanText = document.createTextNode(Question.length)
    span.appendChild(getCurrentQuestionSpanText)

    questionNo.appendChild(span)

    var question = document.createElement('div')
    question.setAttribute('class','question')
    question.setAttribute('id','question')
    var objOfQuestion = Question[(currentQuestion - 1)]
    question.appendChild(document.createTextNode(objOfQuestion.ques))
    questionPane.appendChild(question)
    
    quiz.appendChild(questionPane)

    // 2nd Child of quiz
    // 1st option

    var optionPane = document.createElement('div')
    optionPane.setAttribute('class','optionPane')

    var form = document.createElement('form')
    var table = document.createElement('table')

    var tr  = document.createElement('tr')
    var td = document.createElement('td')
    var div = document.createElement('div')
    div.setAttribute('class','radio')
    var input = document.createElement('input')
    input.setAttribute("type","radio")
    input.setAttribute("id","opt1")
    input.setAttribute("name","option")
    input.setAttribute("value",objOfQuestion.opt1)
    input.setAttribute('onclick','enableBtn()')
    text = objOfQuestion.opt1
    div.appendChild(input)
    td.appendChild(div)
    tr.appendChild(td)

    var td = document.createElement('td')
    var p = document.createElement('p')
    p.setAttribute('class',"answer")
    p.setAttribute('id',"answer")
    p.appendChild(document.createTextNode(objOfQuestion.opt1))
    td.appendChild(p)
    tr.appendChild(td)
    table.appendChild(tr)

    // 2nd option
    var tr  = document.createElement('tr')
    var td = document.createElement('td')
    var div = document.createElement('div')
    div.setAttribute('class','radio')
    var input = document.createElement('input')
    input.setAttribute("type","radio")
    input.setAttribute("id","opt2")
    input.setAttribute("name","option")
    input.setAttribute("value",objOfQuestion.opt2)
    input.setAttribute('onclick','enableBtn()')
    text = objOfQuestion.opt2
    div.appendChild(input)
    td.appendChild(div)
    tr.appendChild(td)

    var td = document.createElement('td')
    var p = document.createElement('p')
    p.setAttribute('class',"answer")
    p.setAttribute('id',"answer")
    p.appendChild(document.createTextNode(objOfQuestion.opt2))
    td.appendChild(p)
    tr.appendChild(td)
    table.appendChild(tr)

    // 3rd option
    var tr  = document.createElement('tr')
    var td = document.createElement('td')
    var div = document.createElement('div')
    div.setAttribute('class','radio')
    var input = document.createElement('input')
    input.setAttribute("type","radio")
    input.setAttribute("id","opt3")
    input.setAttribute("name","option")
    input.setAttribute("value",objOfQuestion.opt3)
    input.setAttribute('onclick','enableBtn()')
    text = objOfQuestion.opt3
    div.appendChild(input)
    td.appendChild(div)
    tr.appendChild(td)

    var td = document.createElement('td')
    var p = document.createElement('p')
    p.setAttribute('class',"answer")
    p.setAttribute('id',"answer")
    p.appendChild(document.createTextNode(objOfQuestion.opt3))
    td.appendChild(p)
    tr.appendChild(td)
    table.appendChild(tr)

    // 4th option
    var tr  = document.createElement('tr')
    var td = document.createElement('td')
    var div = document.createElement('div')
    div.setAttribute('class','radio')
    var input = document.createElement('input')
    input.setAttribute("type","radio")
    input.setAttribute("id","opt4")
    input.setAttribute("name","option")
    input.setAttribute("value",objOfQuestion.opt4)
    input.setAttribute('onclick','enableBtn()')
    text = objOfQuestion.opt4
    div.appendChild(input)
    td.appendChild(div)
    tr.appendChild(td)

    var td = document.createElement('td')
    var p = document.createElement('p')
    p.setAttribute('class',"answer")
    p.setAttribute('id',"answer")
    p.appendChild(document.createTextNode(objOfQuestion.opt4))
    td.appendChild(p)
    tr.appendChild(td)
    table.appendChild(tr)

    form.appendChild(table)
    optionPane.appendChild(form)

    quiz.appendChild(optionPane)

    var div = document.createElement('div')
    div.setAttribute('class','submit')

    var input = document.createElement('input')
    input.setAttribute("type","button")
    input.setAttribute("id","submit")
    input.setAttribute("onclick","saveAnswer() ,loadNextQuestion()")
    input.setAttribute("value","submit")

    div.appendChild(input)
    form.appendChild(div)
    document.getElementById('submit').disabled = true
}
function clearPage(){
    quiz = document.getElementById('quiz')
    quiz.remove()
}

function loadNextQuestion(){
    
    var currentQuesNo = document.getElementById('currentQuestion').innerHTML
    var totalQues = totalQuestion()
    currentQuesNo = parseInt(currentQuesNo) + 1

    if(currentQuesNo > totalQues){
        changeTitle("Result")
        clearPage()
        generateResult()
    }
    else if (currentQuesNo === totalQues){
        quiz = document.getElementById('quiz')
        quiz.remove()
        question(currentQuesNo)

        var btn = document.getElementById('submit')
        btn.setAttribute('value','Finish')
    }
    
    else{
        quiz = document.getElementById('quiz')
        quiz.remove()
        question(currentQuesNo)
    }
}

function changeTitle(abc){
    var title = document.getElementById('title')
    title.firstChild.nodeValue = abc
}

function loadFirstQuestion(){    
    userName()
    main = document.getElementById('main')
    main.remove()

    body = document.getElementById('body')
    body.setAttribute('class','quizBody')
    body.setAttribute('id','quizBody')
    changeTitle("Quiz")
    question(1)
}

function enableBtn(){
    document.getElementById('submit').disabled = false
}
function saveAnswer(){
    var answer = ""
    curr = parseInt(document.getElementById('currentQuestion').innerHTML)
    correctAnswer = Question[curr-1].correct
    opt1 = document.getElementById('opt1')
    opt2 = document.getElementById('opt2')
    opt3 = document.getElementById('opt3')
    opt4 = document.getElementById('opt4')
    if(opt1.checked == true){
        answer = opt1.value
    }
    else if(opt2.checked == true){
        answer = opt2.value
    }
    else if(opt3.checked == true){
        answer = opt3.value
    }
    else if(opt4.checked == true){
        answer = opt4.value
    }
    else{
        answer = ""
    }

    if(answer === correctAnswer){
        score.push(answer)
    }
}
function userName(){
    var name = document.getElementById('name')
    var username = name.value
    var fatherName = document.getElementById('fatherName')
    var FatherName = fatherName.value
    user[0].userName = username
    user[0].fatherName = FatherName
}

function generateResult(){
    body = document.getElementById('quizBody')
    
    div = document.createElement('div')
    div.setAttribute('class',"result")

    div2 = document.createElement('div')
    div2.setAttribute('class',"content")
    
    h2 = document.createElement('h2')
    h2.appendChild(document.createTextNode("Name : "))
    span = document.createElement('span')
    span.setAttribute('id','name')
    span.appendChild(document.createTextNode(user[0].userName))
    h2.appendChild(span)
    div2.appendChild(h2)

    h2 = document.createElement('h2')
    h2.appendChild(document.createTextNode("Father Name : "))
    span = document.createElement('span')
    span.setAttribute('id','fatherName')
    span.appendChild(document.createTextNode(user[0].fatherName))
    h2.appendChild(span)
    div2.appendChild(h2)

    h2 = document.createElement('h2')
    h2.appendChild(document.createTextNode("Total : "))
    span = document.createElement('span')
    span.setAttribute('id','totalScore')
    span.appendChild(document.createTextNode(totalQuestion()))
    h2.appendChild(span)
    div2.appendChild(h2)

    h2 = document.createElement('h2')
    h2.appendChild(document.createTextNode("Your Score : "))
    span = document.createElement('span')
    span.setAttribute('id','obtScore')
    span.appendChild(document.createTextNode(score.length))
    h2.appendChild(span)
    div2.appendChild(h2)

    // <button><a href="index.html">Go Back</a></button>
    a = document.createElement('a')
    a.setAttribute('href','index.html')
    button = document.createElement('button')
    button.appendChild(document.createTextNode("Go Back"))
    a.appendChild(button)
    div2.appendChild(a)

    div.appendChild(div2)
    body.appendChild(div)

}