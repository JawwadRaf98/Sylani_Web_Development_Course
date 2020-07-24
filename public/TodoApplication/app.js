// Setting Date
function TodayDate(){
    var currentDate = new Date()
    var date = currentDate.getDate()
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Sep", "Oct", "Nov", "Dec" ]
    var month = months[currentDate.getMonth()]
    var year = currentDate.getFullYear()
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var day = days[currentDate.getDay()]
    var FullDate  = day + " " + date + "-"+ month+ "-"+ year


    // Setting Time

    var timeSection = document.getElementById('timeNow')
    var hours = ['12','1','2','3','4','5','6','7','8','9','10','11','12','1','2','3','4','5','6','7','8','9','10','11']
    var hour = hours[currentDate.getHours()]
    var minutes = currentDate.getMinutes()
    var seconds = currentDate.getSeconds()
    var meridiem = "A.M"
    var a = 11
    if(currentDate.getHours()>11){
        meridiem = "P.M"
    }
    var FullTime = hour +":"+minutes+":"+seconds+" "+ meridiem
    timeSection.innerHTML = FullTime

    return FullDate
}
var dateSection =  document.getElementById('todayDate')

dateSection.innerHTML = TodayDate()



setInterval(TodayDate, 100)
function addTask(){
    var dataPanel = document.getElementById('dataPanel')
    dataPanel.setAttribute('class','dataPanel dataPanelAfterDelete')

    var value = document.getElementById('task').value
    document.getElementById('task').value = ""

    var dataField = document.createElement('div')
    dataField.setAttribute('class','dataField')
    dataField.setAttribute('id','dataField')

    dataPanel.appendChild(dataField)
    
    var row = document.createElement('div')
    row.setAttribute('class', 'row')
    dataField.appendChild(row)

    // date section
    var panelDate = document.createElement('div')
    panelDate.setAttribute('class', 'col-lg-2 col-md-2 col-sm-4 col-4 panelDate')

    function todayDate(){
        var currentDate = new Date()
        var date = currentDate.getDate()
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Sep", "Oct", "Nov", "Dec" ]
        var month = months[currentDate.getMonth()]
        var year = currentDate.getFullYear()
        var Fulldate = date +"/"+month+"/"+year
        return Fulldate
    }

    var panelDateText = document.createTextNode(todayDate())
    panelDate.appendChild(panelDateText)
    row.appendChild(panelDate)

    // title section
    var panelTitle = document.createElement('div')
    panelTitle.setAttribute('class', 'col-lg-7 col-md-7 col-sm-8 col-8 panelTitle')
    //Yaha task aega
    var panelTitleText = document.createTextNode(value)
    panelTitle.appendChild(panelTitleText)
    row.appendChild(panelTitle)

    // Button Section
    var btnSection = document.createElement('div')
    btnSection.setAttribute('class','col-lg-3 col-md-3 col-sm-12 col-12 my-auto ')
    row.appendChild(btnSection)

    var row2 = document.createElement('div')
    row2.setAttribute('class','row buttonRow')
    btnSection.appendChild(row2)

// Edit Button
    var editBtnDiv = document.createElement('div')
    editBtnDiv.setAttribute('class', 'button')
    row2.appendChild(editBtnDiv)

    var editBtn = document.createElement('button')
    editBtn.setAttribute('type','button')
    editBtn.setAttribute('class','btn btn-outline-primary')
    editBtn.setAttribute('id','edit')
    editBtn.setAttribute('onclick','editFuntion(this)')
    var editBtnText = document.createTextNode('Edit')
    editBtn.append(editBtnText)
    editBtnDiv.appendChild(editBtn)

    // Delete button
    var deleteBtnDiv = document.createElement('div')
    deleteBtnDiv.setAttribute('class', 'button')
    row2.appendChild(deleteBtnDiv)

    var deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('type','button')
    deleteBtn.setAttribute('class','btn btn-outline-danger')
    deleteBtn.setAttribute('id','delete')
    deleteBtn.setAttribute('onclick','deleteFuntion(this)')
    var deleteBtnText = document.createTextNode('Delete')
    deleteBtn.append(deleteBtnText)
    deleteBtnDiv.appendChild(deleteBtn)


    // Done button
    var doneBtnDiv = document.createElement('div')
    doneBtnDiv.setAttribute('class', 'button')
    row2.appendChild(doneBtnDiv)

    var doneBtn = document.createElement('button')
    doneBtn.setAttribute('type','button')
    doneBtn.setAttribute('class','btn btn-outline-success')
    doneBtn.setAttribute('id','done')
    doneBtn.setAttribute('onclick','doneFuntion()')
    var doneBtnText = document.createTextNode('Done')
    doneBtn.append(doneBtnText)
    doneBtnDiv.appendChild(doneBtn)

    // console.log(row)
}

function deleteAllfunction(){
    var flag = confirm("Are you want to delete all task???")
    if(flag){
        var dataPanel = document.getElementById('dataPanel')
        dataPanel.setAttribute('class','dataPanel')
        dataPanel.innerHTML = ""
    }
}

function doneFuntion(){

    var btn  = document.getElementById('edit')
    var dataField = document.getElementById('dataField')
    dataField.setAttribute('id','dataFieldBorderAfterDone')
    btn.disabled = true
    console.log(vardataField)


}
function deleteFuntion(e){
    var flag = confirm('Are you sure????')
    if(flag){
        e.parentNode.parentNode.parentNode.parentNode.parentNode.remove()
    }

    function checkingForEmpytyTaskField(){
        var dataPanel = document.getElementById('dataPanel')
        console.log(dataPanel.childNodes[0])
    }
    checkingForEmpytyTaskField()
}
function editFuntion(e){
    var value = e.parentNode.parentNode.parentNode.parentNode.childNodes[1].innerHTML
    var updatedValue = prompt("Please update your task!", value)

    e.parentNode.parentNode.parentNode.parentNode.childNodes[1].innerHTML = updatedValue
    // console.log(e.parentNode.parentNode.parentNode.parentNode.childNodes[1].innerHTML)
}