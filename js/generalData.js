// Notifications
notifyType = ['success','info', 'warning'];
notifyMessage = ['SVG icon created based navigation with required links.',
                 'A good practice is to check your website for cross-browser compatibility',
                 'Your Built form is not actually submitting data'];
notifyIcons = ['./Images/success-icon.png',
               './Images/info-icon.png',
               './Images/warning-icon.png']
// Traffic Data (Hourly)
xHours = ['1-2am', '3-4am', '5-6am', '7-8am', '9-10am', '11-12am', '1-2pm', '3-4pm', '5-6pm', '7-8pm', '9-10pm', '11-12pm',  ]
yHours = [320, 560, 630, 730, 590, 400, 520, 650, 340, 370, 210, 680];

// Traffic Data (Daily)
xDays = ['01Apr', '02Apr', '03Apr', '04Apr', '05Apr', '06Apr', '07Apr', '08Apr', '09Apr', '10Apr', '11Apr', '12Apr', '13Apr', '14Apr', '15Apr', '16Apr', '17Apr', '18Apr', '19Apr', '20Apr', '21Apr', '22Apr', '23Apr', '24Apr', '25Apr', '26Apr', '27Apr', '28Apr', '29Apr', '30Apr']
yDays = [678, 567, 345, 320, 560, 430, 730, 120, 890, 420, 650, 340, 370, 210, 980, 678, 567, 345, 320, 560, 430, 730, 120, 890, 420, 650, 340, 370, 210, 980];

// Traffic Data (Weekly)
xWeeks = ['Apr-Wk1', 'Apr-Wk2', 'Apr-Wk3', 'Apr-Wk4', 'Apr-Wk5', 'May-Wk1', 'May-Wk2', 'May-Wk3', 'May-Wk4', 'Jun-Wk01', 'Jun-Wk02', 'Jun-Wk03', 'Jun-WK04']
yWeeks = [678, 320, 560, 120, 890, 370, 210, 980, 678, 120, 890, 980, 770];

// Traffic Data (Monthly)
xMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
yMonths = [210, 980, 678, 120, 890, 980, 678, 320, 560, 120, 890, 370];

// Traffic Graph Data
trafficGraphData= { labels: xHours,
                    datasets: [{
                                data: yHours,
                                fill: true,
                                borderColor: '#8888D6',
                                backgroundColor: 'rgba(136, 136, 214,0.3)',
                                pointBackgroundColor: '#fff',
                                pointRadius: 5,
                                lineTension: 0.1
                              }]
                  };
trafficGraphOptions= {
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
                      };

// Daily Traffic Data
days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
dayTraffic = [50, 100, 175, 125, 225, 200, 100];

// Daily Traffic Graph Data
dailyGraphData= {
            labels: days,
            datasets: [{
                        data: dayTraffic,
                        backgroundColor: '#8888D6'
                      }]
            };
dailyGraphOptions= {
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
                    };

// Mobile Users Data
devices = ['Phones', 'Tablets', 'Desktop'];
pieColors = ['#77C37A', '#21ACAF','#8888D6'];
pieValues = [30,30,120];

// Mobile Users Graph Data
mobileGraphData= {
                  labels: devices,
                  datasets: [{
                              backgroundColor: pieColors,
                              data: pieValues
                            }]
                };
mobileGraphOptions= {
                      legend: {
                                position: 'right',
                                labels: {
                                          fontSize: 16,
                                          boxWidth: 10,
                                          padding: 20
                                        }
                              }
                    };

// Members information & activities
membersData= [
{
  memberName: "Victoria Chambers",
  memberEmail: "victoria.chambers80@example.com",
  memberJoinDate: "10/15/15",
  recentActivity: "Victoria Chambers commented on YourApp's SEO Tips",
  activityTime: "4 hours ago",
  imageFile:"member-1.jpg"
},
{
  memberName: "Dale Byrd",
  memberEmail: "dale.byrd52@example.com",
  memberJoinDate: "10/15/15",
  recentActivity: "Dale Byrd like the post Facebook's Changes for 2016",
  activityTime: "5 hours ago",
  imageFile:"member-2.jpg"
},
{
  memberName: "Dawn Wood",
  memberEmail: "dawn.wood16@example.com",
  memberJoinDate: "10/15/15",
  recentActivity: "Dawn Wood commented on Facebook's Changes for 2016",
  activityTime: "5 hours ago",
  imageFile:"member-3.jpg"
},
{
  memberName: "Dan Oliver",
  memberEmail: "dan.oliver82@example.com",
  memberJoinDate: "10/15/15",
  recentActivity: "Dan Oliver posted YourApp's SEO Tips",
  activityTime: "1 day ago",
  imageFile:"member-4.jpg"
}
]

timeZones = [ "UTC +04:30 Afghanistan",
              "UTC +03:00 Aland Islands",
              "UTC +02:00 Albania",
              "UTC +01:00 Algeria",
              "UTC -11:00 American Samoa",
              "UTC +02:00 Andorra",
              "UTC +01:00 Angola",
              "UTC -04:00 Anguilla",
              "UTC +08:00 Antarctica",
              "UTC -03:00 Argentina"
]
