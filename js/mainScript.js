const generalChart = document.getElementById('trafficChart').getContext('2d');
const dailyChart = document.getElementById('dailyChart').getContext('2d');
const mobileChart = document.getElementById('mobileChart').getContext('2d');
const messageForm = document.getElementById('userMessages');
const settingForm = document.getElementById('userSettings');

const $membersSection = $('#members');
const $activitySection = $('#activities');
const $optionZone = $('#timeZ');
const $alertDiv = $('.alert');

let userEmails = [];

//  Prepare line chart with the traffic data, and options required
let lineChart = new Chart(generalChart, {
  type: 'line',
  data: trafficGraphData,
  options: trafficGraphOptions
});

//  Prepare bar chart with the daily data, and options required
let barChart = new Chart(dailyChart, {
  type: 'bar',
  data: dailyGraphData,
  options: dailyGraphOptions
});

//  Prepare doughnut chart with the mobile data, and options required
let doughnutChart = new Chart(mobileChart, {
  type: 'doughnut',
  data: mobileGraphData,
  options: mobileGraphOptions
});

getMembersData();
getOptionZone();

//  Define source for search with auto complete plugin
$('.ui.search').search({
                        source: userEmails
                      });

//******************************************************************************
//                      Event Listener functions
//******************************************************************************
//   1. Function triggered when the user messages form is submitted
//      to prevent page reload
//   2. Function triggered when the user settings form is submitted
//   to prevent page reload
//******************************************************************************
messageForm.addEventListener('submit',(event)=>{
    event.preventDefault();
})
settingForm.addEventListener('submit',(event)=>{
    event.preventDefault();
})

//******************************************************************************
//  Function triggered when a list item (within ul (id: traffic)) is clicked
//  remove chosen class from all other list items,
//  updates traffic graph with suitable data according to selected list item
//******************************************************************************
$('#traffic').on('click', 'li', function(event) {
  if (!$(this).hasClass('chosen')) {
    clearListItemChoiceClass();
    $(this).addClass('chosen');
    findListItemSelectedData($(this).index());
    lineChart.update();
  }
});

//******************************************************************************
//  Function triggered the close icon (X) is clicked
//  Hides div with class (alert),
//******************************************************************************
$('span.close').on('click', function() {
  $alertDiv.hide();
});

//******************************************************************************
//  when SEND button is clicked
//  set a message box (success or alert) according to data provided
//******************************************************************************
$('#send').on('click', function() {
  let $messageAdd = $('#userEmail').val();
  let $messageText = $('#textMessage').val();

  if ($messageAdd && $messageText)  {
    let alertType = 'success';
    let alertMessage = 'Message sent successfully';
  } else {
    let alertType = 'error';
    let alertMessage = "Missing data! Make sure that User's Email and Message Content are filled before sending";
  }
  setAlertBox (alertType, alertMessage);
});

//******************************************************************************
//                   Clear List Items Selected Class function
//  The (selected) class is removed from all list items
//******************************************************************************
function clearListItemChoiceClass(){
  for(let index=0; index <4; index++){
    $('li.general').eq(index).removeClass('chosen');
  };
}

//******************************************************************************
//                   Find List Items Selected Data function
//  compares value passed as parameter,
//  based on that sets the suitable data to traffic graph
//******************************************************************************
function findListItemSelectedData(itemIndex){
  switch (itemIndex) {
    case 0:
      lineChart.data.labels= xHours;
      lineChart.data.datasets[0].data = yHours;
      break;
    case 1:
      lineChart.data.labels= xDays;
      lineChart.data.datasets[0].data = yDays;
      break;
    case 2:
      lineChart.data.labels= xWeeks;
      lineChart.data.datasets[0].data = yWeeks;
      break;
    case 3:
      lineChart.data.labels= xMonths;
      lineChart.data.datasets[0].data = yMonths;
      break;
    default:
      console.log('inavlid choice');
      break;
  };
}
//******************************************************************************
//                           Get Members Data function
//  loop through the members data array, and for each member
//  1. call function member details to create html element with data
//     (provided from array), and added it to members section
//  2. call function activity details to create html element with data
//     (provided from array), and added it to activity section
//  3. add member email for userEmails array
//******************************************************************************
function getMembersData() {
  let memberHtml = '';
  let activityHtml = '';


  for (let memberInfo of membersData) {
    memberHtml = memberDetails(memberInfo);
    $membersSection.append(memberHtml);

    activityHtml = activityDetails(memberInfo);
    $activitySection.append(activityHtml);

    let emailObject = { title: memberInfo.memberEmail };
    userEmails.push(emailObject);
  }
  return;
}
//******************************************************************************
//                            Member Details function
//  set the HTML code for the card div in members section
//  to include details of the member passsed as parameter
//******************************************************************************

function memberDetails(memberInfo) {
  let htmlContent = '<div class="card container">';

  htmlContent +=  '<div class="container">';

  htmlContent +=  '<div>';
  htmlContent += '<img src="images/' +
              memberInfo.imageFile +
              '" alt="' +
              memberInfo.memberName +
              '">';
  htmlContent += '</div>';

  htmlContent +=  '<div>';
  htmlContent += '<p>' +
              memberInfo.memberName +
              '</p>';
  htmlContent += '<p class="mail">' +
              memberInfo.memberEmail +
              '</p>';
  htmlContent += '</div>';

  htmlContent += '</div>';

  htmlContent +=  '<div>';

  htmlContent += '<p>' +
              memberInfo.memberJoinDate +
              '</p>';
  htmlContent += '</div>';

  htmlContent += '</div>';

  htmlContent += '</div>';

  return htmlContent;
}

//******************************************************************************
//                            Activities Details function
//  set the HTML code for the card div in activities section
//  to include details of the member passsed as parameter
//******************************************************************************

function activityDetails(memberInfo) {
  let htmlContent = '<div class="post container">';

  htmlContent +=  '<div class="container">';

  htmlContent +=  '<div>';
  htmlContent += '<img src="images/' +
              memberInfo.imageFile +
              '" alt="' +
              memberInfo.memberName +
              '">';
  htmlContent += '</div>';

  htmlContent +=  '<div>';
  htmlContent += '<p>' +
              memberInfo.recentActivity +
              '</p>';
  htmlContent += '<p>' +
              memberInfo.activityTime +
              '</p>';
  htmlContent += '</div>';

  htmlContent += '</div>';

  htmlContent +=  '<div>';

  htmlContent += '<p class="link">&gt;</p>';
  htmlContent += '</div>';

  htmlContent += '</div>';

  htmlContent += '</div>';

  return htmlContent;
}

//******************************************************************************
//                           Get Daily Chart function
//  Prepare bar chart with the data, and set options required
//******************************************************************************
function getOptionZone() {
  let optionHtml = '';
  let count1 = 0;

  for (let timeZone of timeZones) {
    count1 += 1;
    optionHtml = '<option value="';
    optionHtml += count1;
    optionHtml += '">';
    optionHtml += timeZone;
    optionHtml += '</option>';

    $optionZone.append(optionHtml);
  }
  return;
}

//******************************************************************************
//                          Function Set Alert box
//  display a message box (success or alert) according to data provided
//******************************************************************************
function setAlertBox (alertType, alertMessage) {
  Lobibox.alert(alertType,{
                            msg: alertMessage,
                            horizontalOffset: 5,
                            //If the messagebox is larger (in width) than window's width. The messagebox's width is reduced to window width - 2 * horizontalOffset
                            width           : 400,
                            height          : 'auto',
                            // Height is automatically given calculated by width
                            closeButton     : true,
                            // Show close button or not
                            draggable       : false,
                            // Make messagebox draggable
                            customBtnClass  : 'lobibox-btn-default',
                            // Class for custom buttons
                            modal           : true,
                            debug           : false,
                            buttonsAlign    : 'center',
                            // Position where buttons should be aligned
                            closeOnEsc      : true,
                            // Close messagebox on Esc press
  });
}
