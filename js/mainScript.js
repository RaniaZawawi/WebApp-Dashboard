const $trafficChart = $('#trafficChart')[0].getContext('2d');
const dailyChart = document.getElementById('dailyChart').getContext('2d');
const mobileChart = document.getElementById('mobileChart').getContext('2d');
const $membersSection = $('#members');
const $activitySection = $('#activities');
const $optionZone = $('#timeZ');

getDailyChart();
getMobileChart();
getMembersData();
getOptionZone();

//******************************************************************************
//                         Get Daily Traffic Chart function
//  Prepare bar chart with the data, and set options required
//******************************************************************************
function getDailyChart() {
  let barChart = new Chart(dailyChart, {
    type: 'bar',
    data: {
            labels: days,
            datasets: [{
              data: dayTraffic,
              backgroundColor: '#8888D6'
            }]
          },
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

//******************************************************************************
//                        Get Mobile Users Chart function
//  Prepare bar chart with the data, and set options required
//******************************************************************************
function getMobileChart() {

  let doughnutChart = new Chart(mobileChart, {
    type: 'doughnut',
    data: {
      labels: devices,
      datasets: [{
          backgroundColor: pieColors,
          data: pieValues
      }]
    },
    options: {
      legend: {
          position: 'right',
          labels: {
              fontSize: 16,
              boxWidth: 10,
              padding: 20
          }
      }
    }
  });
}

//******************************************************************************
//                           Get Members Data function
//  loop through the members data array, and for each member
//  1. call function member details to create html element with data
//     (provided from array), and added it to members section
//  2. call function activity details to create html element with data
//     (provided from array), and added it to activity section
//******************************************************************************
function getMembersData() {
  let memberHtml = '';
  let activityHtml = '';


  for (let memberInfo of membersData) {
    memberHtml = memberDetails(memberInfo);
    $membersSection.append(memberHtml);

    activityHtml = activityDetails(memberInfo);
    $activitySection.append(activityHtml);

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
