const radar = document.getElementById('myradarchart');

new Chart(radar,{
    type: 'radar',
    data: {
        labels: ['Technology' ,'Sport','Media','Gaming', 'Arts'],
        datasets: [{
            data: [70,53,82,60,33],
            backgroundColor:'rgb(63,128,234,0.3)',
            borderColor: 'rgb(63,128,234)',
        }]
    },
    options: {
        scales: {
          y: {
            beginAtZero: true,
            // stacked: true,
            display:false
          },
          x: {
            display:false,
            // stacked: true
          }
        }
      }
});


// charts js start

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun' , 'July' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec'],
      datasets: [{
        label: '# of Votes',
        data: [ 54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
        borderWidth: 1,
        barThickness: 10,
        backgroundColor:'#3F80EA'
      },{
        label: '# of Votes',
        data: [ 54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
        borderWidth: 1,
        barThickness: 10,
        borderRadius:10,
        backgroundColor:'#84aef2'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          stacked: true
        },
        x: {
          stacked: true
        }
      }
    }
  });
// charts js end

// pie chart js start

const dough = document.getElementById('mydoughnut');

new Chart(dough,{
    type: 'doughnut',
    data: {
        // labels: ['Social' ,'Search','Direct','Others'],
        datasets: [{
            data: [260,125,54,146],
            backgroundColor:['rgb(63,128,234)','rgb(240,173,78)','rgb(217,83,79)','rgb(232,234,237)'],
            weight: 1,
            radius:'60%',
            cutout:'75%',
            offset: 10
        }]
    },
    options: {
        scales: {
          y: {
            beginAtZero: true,
            // stacked: true,
            display:false
          },
          x: {
            display:false,
            // stacked: true
          }
        }
      }
});


// pie chart end


// calender js start
function generate_year_range(start, end) {
    var years = "";
    for (var year = start; year <= end; year++) {
        years += "<option value='" + year + "'>" + year + "</option>";
    }
    return years;
}

today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");


createYear = generate_year_range(1970, 2050);
/** or
 * createYear = generate_year_range( 1970, currentYear );
 */

document.getElementById("year").innerHTML = createYear;

var calendar = document.getElementById("calendar");
var lang = calendar.getAttribute('data-lang');

var months = "";
var days = "";

var monthDefault = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var dayDefault = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

if (lang == "en") {
    months = monthDefault;
    days = dayDefault;
} else if (lang == "id") {
    months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    days = ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
} else if (lang == "fr") {
    months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
} else {
    months = monthDefault;
    days = dayDefault;
}


var $dataHead = "<tr>";
for (dhead in days) {
    $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
}
$dataHead += "</tr>";

//alert($dataHead);
document.getElementById("thead-month").innerHTML = $dataHead;


monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);



function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    var firstDay = ( new Date( year, month ) ).getDay();

    tbl = document.getElementById("calendar-body");

    
    tbl.innerHTML = "";

    
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    var date = 1;
    for ( var i = 0; i < 6; i++ ) {
        
        var row = document.createElement("tr");

        
        for ( var j = 0; j < 7; j++ ) {
            if ( i === 0 && j < firstDay ) {
                cell = document.createElement( "td" );
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement("td");
                cell.setAttribute("data-date", date);
                cell.setAttribute("data-month", month + 1);
                cell.setAttribute("data-year", year);
                cell.setAttribute("data-month_name", months[month]);
                cell.className = "date-picker";
                cell.innerHTML = "<span>" + date + "</span>";

                if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
                    cell.className = "date-picker selected";
                }
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row);
    }

}

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}
// calender js end



// radar chart start

// const radar1 = document.getElementById('myradar');

// new Chart(radar1,{
//   type: 'radar',
//   data: [251,254,101],
//   options: {
//     responsive: true,
//     plugins: {
//       title: {
//         display: true,
//         text: 'Chart.js Radar Chart'
//       }
//     }
//   },
// });

// const DATA_COUNT = 7;
// const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

// const labels = Utils.months({count: 7});
// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: Utils.numbers(NUMBER_CFG),
//       borderColor: Utils.CHART_COLORS.red,
//       backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
//     },
//     {
//       label: 'Dataset 2',
//       data: Utils.numbers(NUMBER_CFG),
//       borderColor: Utils.CHART_COLORS.blue,
//       backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
//     }
//   ]
// };



// var options = {
//   series: [{
//   name: 'Series 1',
//   data: [80, 50, 30, 40, 100, 20],
// }],
//   chart: {
//   height: 350,
//   type: 'radar',
// },
// title: {
//   text: 'Basic Radar Chart'
// },
// xaxis: {
//   categories: ['January', 'February', 'March', 'April', 'May', 'June']
// }
// };

// var chart = new ApexCharts(document.querySelector("#myradarchart"), options);
// chart.render();






// radar chart end