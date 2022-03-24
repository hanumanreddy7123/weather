async function myfunction()
{
    //e.preventDefault();
    var cityname=document.getElementById("infield").value;
    //var APIkey="e6a648aed4120fa14b14aad53801e265";

    let api=`https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=e6a648aed4120fa14b14aad53801e265&units=metric`;
    let res1=await fetch(api);
    let res2=await res1.json();
    console.log(res2);
    let x=res2.list.map((ele)=>
    {
      return ele.dt_txt;
    })
    console.log(x);
    let y=res2.list.map((element)=>
    {
        return element.main.temp;
    })
    console.log(y);
    let min1=res2.list.map((e)=>
    {
        return e.main.temp_min;
    })
    console.log(min1)
    var minimum=Math.min(...min1)
    console.log(minimum)
    let max1=res2.list.map((max)=>
    {
        return max.main.temp_max;
    })
    console.log(max1)
    var maximum=Math.max(...max1)
    console.log(maximum)
    const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: x,
        datasets: [{
            label: `${cityname} weather for every 6 hours`,
            data: y,
            backgroundColor: [
                //'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                //'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
document.getElementById("temp").innerHTML=`Maximum temperature is ${maximum}`

}