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

    return FullDate
}
var dateSection =  document.getElementById('todayDate')
// var currentDate = new Date()
// var date = currentDate.getDate()
// var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Sep", "Oct", "Nov", "Dec" ]
// var month = months[currentDate.getMonth()]
// var year = currentDate.getFullYear()
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var day = days[currentDate.getDay()]

// var FullDate  = day + " " + date + "-"+ month+ "-"+ year
dateSection.innerHTML = TodayDate()



// Setting Time

// var timeSection = document.getElementById('timeNow')
// var hours = ['12','1','2','3','4','5','6','7','8','9','10','11','12','1','2','3','4','5','6','7','8','9','10','11']
// var hour = hours[currentDate.getHours()]
// var minutes = currentDate.getMinutes()
// var seconds = currentDate.getSeconds()
// var meridiem = "A.M"
// var a = 11
// if(currentDate.getHours()>11){
//     meridiem = "P.M"
// }
// var FullTime = hour +":"+minutes+":"+seconds+" "+ meridiem
// timeSection.innerHTML = FullTime

function deletefunction(){
    
    var inputData = document.getElementById('task').value
    var dataPanel = document.getElementById('dataPanel')
    
    var dataField = document.createElement('div')
    dataField.setAttribute('class','dataField')
    

    var row = document.createElement('div')
    row.setAttribute('class','row')

    var panelDate = document.createElement('div')
    panelDate.setAttribute('class',"col-2 panelDate")

    var h3Date = document.createElement('h3')
    h3Date.setAttribute('id',"panelDate")
    var h3DateText = document.createTextNode(TodayDate())
    h3Date.appendChild(h3DateText)
    panelDate.appendChild(h3Date)

    TodayDate()
    // yaha pay panel date ka code aega
    row.appendChild(panelDate)

    var panelDay = document.createElement('div')
    panelDay.setAttribute('class', "col-2 panelDay")
    //yaha pay day ka code aega
    row.appendChild(panelDay)
 
    var panelTitle = document.createElement('div')
    panelTitle.setAttribute('class', 'col-4 panelTitle')
    var text = document.createTextNode(inputData)
    panelTitle.appendChild(text)
    row.appendChild(panelTitle)

    var col4 = document.createElement('div')
    col4.setAttribute('class', 'col-4')

    var row2 = document.createElement('div')
    row2.setAttribute('class','row')
    
    // delete btn
    var col12 = document.createElement('div')
    col12.setAttribute('class','col-12 button')


    var dltBtn = document.createElement('button')
    dltBtn.setAttribute('class','col-12 button')
    dltBtn.setAttribute('id', 'delete')
    dltBtn.setAttribute('onclick',"delBtnFunction('this')")
    id="delete"

    var BtnText = document.createTextNode('delete')
    dltBtn.appendChild(BtnText)
    col12.appendChild(dltBtn)
    row2.appendChild(col12)

    // edit btn
    var col12_2 = document.createElement('div')
    col12_2.setAttribute('class','col-12 button')

    var editBtn = document.createElement('button')
    editBtn.setAttribute('id', 'edit')
    editBtn.setAttribute('class',"col-12 button")
    editBtn.setAttribute('onclick',"editBtnFunction('this')")

    var editBtnText = document.createTextNode('edit')
    editBtn.appendChild(editBtnText)
    col12_2.appendChild(editBtn)
    row2.appendChild(col12_2)

    // done Btn
    var col12_3 = document.createElement('div')
    col12_3.setAttribute('class','col-12 button')

    var doneBtn = document.createElement('button')
    doneBtn.setAttribute('id', 'done')
    doneBtn.setAttribute('class',"col-12 button")
    doneBtn.setAttribute('onclick',"doneBtnFunction('this')")

    var doneBtnText = document.createTextNode('Done')
    doneBtn.appendChild(doneBtnText)
    col12_3.appendChild(doneBtn)
    row2.appendChild(col12_3)

    col4.appendChild(row2)
    row.appendChild(col4)

    dataField.appendChild(row)
    dataPanel.appendChild(dataField)
}