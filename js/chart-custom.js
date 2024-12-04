document.addEventListener("DOMContentLoaded", function () {
    // new Chart(document.getElementById("sample-chart1"), chart_config1);
    // new Chart(document.getElementById("sample-chart2"), chart_config2);
    // new Chart(document.getElementById("sample-chart3"), chart_config3);
    // new Chart(document.getElementById("sample-chart4"), chart_config4);

    const infoCloseBtns = document.querySelectorAll(".btn-info-close");

    infoCloseBtns.forEach((infoCloseBtn) => {
        infoCloseBtn.addEventListener("click", function () {
            let chartInfo = infoCloseBtn.closest(".chart-info");
            let chartBox = chartInfo.closest(".chart-card-item");

            chartInfo.classList.remove("show");
            chartBox.querySelector(".btn--info").classList.remove("active");
        });
    });

    const infoOpenBtns = document.querySelectorAll(".btn--info");

    infoOpenBtns.forEach((infoOpenBtn) => {
        infoOpenBtn.addEventListener("click", function () {
            let chartBox = infoOpenBtn.closest(".chart-card-item");
            let chartInfo = chartBox.querySelector(".chart-info");

            infoOpenBtn.classList.add("active");
            chartInfo.classList.add("show");
        });
    });
});

const ctx = document.getElementById("sample-chart1");

Chart.defaults.color = "#575757";
Chart.defaults.font.family = "Pretendard";

// 플러그인 정의
const backgroundColorPlugin = {
    id: "backgroundColor", // 플러그인 ID
    beforeDraw(chart) {
        const { ctx, chartArea } = chart; // 차트의 2D 컨텍스트와 차트 영역 가져오기
        ctx.save(); // 현재 상태 저장
        ctx.fillStyle = "white"; // 배경색 설정
        ctx.fillRect(0, 0, chart.width, chart.height); // 캔버스 전체 배경색 설정
        ctx.restore(); // 상태 복원
    },
};

const chart1 = new Chart(ctx, {
    type: "bar",
    data: chartDataSet.id_101,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    font: {
                        family: "Pretendard",
                    },
                },
            },
        },
    },
    plugins: [backgroundColorPlugin],
});

const chart_config1 = {
    type: "bar",
    data: chartDataSet.id_101,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    font: {
                        family: "Pretendard",
                    },
                },
            },
        },
    },
    plugins: [backgroundColorPlugin], // 플러그인 추가
};


const chart_config2 = {
    type: "line",
    data: chartDataSet.id_102,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
        },
    },
    plugins: [backgroundColorPlugin], // 플러그인 추가
};

const chart_data3 = {
    labels: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
    datasets: [
        {
            data: [
                14894.6476, 13986.60396, 13748.98951, 13428.61846, 13697.12067, 13538.95274, 14476.41509, 15563.52299, 16459.95076, 16209.49985, 17349, 16648.17261, 16877.12866, 17122.92045,
                17396.38041, 17689.55352, 18009.7814, 18360.93855, 18737.31753,
            ],
            label: "한우",
            fill: true,
            backgroundColor: "rgba(248,67,101, 0.2)",
            borderColor: "rgb(248,67,101)",
            pointBackgroundColor: "rgb(248,67,101)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(248,67,101)",
        },
        {
            data: [
                4819.104563, 4637.442822, 4595.890857, 4602.638612, 4384.944874, 4188.519248, 4514.227801, 4662.688558, 4528.30169, 4100.110224, 4618, 4074.99806, 4066.9558, 4061.919618, 4061.549195,
                4065.777857, 4075.3927, 4097.242397, 4125.783745,
            ],
            label: "젖소",
            fill: true,
            backgroundColor: "rgba(161,67,248, 0.2)",
            borderColor: "rgb(161,67,248)",
            pointBackgroundColor: "rgb(161,67,248)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(161,67,248)",
            fill: true,
        },
        {
            data: [
                18192.64248, 17935.97966, 18576.69489, 18254.36617, 18934.84841, 18913.75976, 19716.22606, 20479.32678, 20408.1301, 20105.71301, 19210, 20796.41786, 21165.30465, 21544.61376,
                21937.7601, 22339.47221, 22757.79534, 23187.56923, 23630.077,
            ],
            label: "돼지",
            fill: true,
            backgroundColor: "rgba(128,248,67, 0.2)",
            borderColor: "rgb(128,248,67)",
            pointBackgroundColor: "rgb(128,248,67)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(128,248,67)",
            fill: true,
        },
        {
            data: [
                6677.919578, 6935.035555, 7118.495628, 7103.4268, 7637.589188, 7969.48843, 8024.595013, 8892.133193, 7531.082189, 8207.750399, 8735, 8523.10883, 8676.065614, 8827.743254, 8978.780013,
                9131.999785, 9290.954589, 9458.632884, 9631.877911,
            ],
            label: "닭",
            backgroundColor: "rgba(248,248,67, 0.2)",
            borderColor: "rgb(248,248,67)",
            pointBackgroundColor: "rgb(248,248,67)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(248,248,67)",
            fill: true,
        },
        {
            data: [
                1345.565381, 1502.318582, 1442.527582, 1244.318844, 1016.491967, 938.4941276, 968.9745713, 1024.69791, 633.151142, 659.1769909, 820, 585.457534, 559.7934244, 551.2749171, 547.705727,
                549.0095413, 552.4316269, 558.3647435, 566.0809827,
            ],
            label: "오리",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgb(255, 99, 132)",
            pointBackgroundColor: "rgb(255, 99, 132)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(255, 99, 132)",
            fill: true,
            borderWidth: 1,
        },
        {
            data: [
                45929.8796, 44997.38058, 45482.59847, 44633.36888, 45670.9951, 45549.21431, 47700.43853, 50622.36943, 49560.61588, 49282.25047, 50732, 50628.1549, 51345.24815, 52108.472, 52922.17544,
                53775.81291, 54686.35565, 55662.74781, 56691.13718,
            ],
            label: "전체",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(54, 162, 235)",
            pointBackgroundColor: "rgb(54, 162, 235)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(54, 162, 235)",
            fill: true,
            borderWidth: 1,
        },
    ],
};
const chart_config3 = {
    type: "radar",
    data: chart_data3,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
            },
        },
    },
    plugins: [backgroundColorPlugin], // 플러그인 추가
};

const chart_data4 = {
    labels: ["장애인에게 적합한 직무가 부족하거나 찾지 못해서", "부담금 납부 대상이 아님에 따라(상시 100인 미만)", "장애인 근로자의 생산성이 낮을 것 같아서", "근무환경이 유해하거나 위험해서"],
    datasets: [
        {
            data: [66.2, 14.6, 5.2, 4.2],
            backgroundColor: ["rgba(91, 155, 213, 1)", "rgba(255, 215, 88, 1)", "rgba(1, 157, 167, 1)", "rgba(237, 125, 49, 1)"],
            borderWidth: 0.5,
            borderColor: "#ddd",
        },
    ],
};
const chart_config4 = {
    type: "pie",
    data: chart_data4,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    boxWidth: 20,
                    fontColor: "#111",
                    padding: 15,
                },
            },
            datalabels: {
                color: "#111",
                textAlign: "center",
                font: {
                    lineHeight: 1.6,
                },
                formatter: function (value, ctx) {
                    let data = ctx.chart.data.datasets[0].data;
                    let sum = 0;
                    let dataIndex = data.length;
                    let index = 0;
                    data.map((data) => {
                        sum += data;
                        index++;
                    });
                    let percentage = Math.round((value / sum) * 100);
                    return ctx.chart.data.labels[ctx.dataIndex] + "\n" + percentage + "%";
                },
            },
        },
    },
    plugins: [backgroundColorPlugin], // 플러그인 추가
};
