// Setting Date
var dateSection =  document.getElementById('todayDate')
var currentDate = new Date()
var date = currentDate.getDate()
var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Sep", "Oct", "Nov", "Dec" ]
var month = months[currentDate.getMonth()]
var year = currentDate.getFullYear()
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var day = days[currentDate.getDay()]

var FullDate  = day + " " + date + "-"+ month+ "-"+ year
dateSection.innerHTML = FullDate



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

function deletefunction(){
    
    var inputData = document.getElementById('task').value
    var div  = document.createElement('div')
    var dataPanel = document.getElementById('dataPanel')
    
    var dataField = document.createElement('div')
    dataField.setAttribute('class','dataField')
    

    var row = document.createElement('div')
    row.setAttribute('class','row')

    var panelDate = document.createElement('div')
    panelDate.setAttribute('class',"col-2 panelDate")
    // yaha pay panel date ka code aega

    var panelDay = div
    panelDay.setAttribute('class', "col-2 panelDay")
    //yaha pay day ka code aega

    var panelTitle = div
    panelTitle.setAttribute('class', 'col-4 panelTitle')
    //yaha pay title a code aega

    var col4 = div
    col4.setAttribute('class', 'col-4')

    row.appendChild(panelDate)
    row.appendChild(panelDay)
    row.appendChild(panelTitle)
    row.appendChild(col4)
    row.appendChild(div)
    
    
    // dataField.appendChild(row)

    // dataPanel.appendChild(dataField)

    console.log(row)
    
}