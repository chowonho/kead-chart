document.addEventListener("DOMContentLoaded", function () {    
    const infoCloseBtns = document.querySelectorAll(".btn-info-close");
    const infoOpenBtns = document.querySelectorAll(".btn--info");

    // 정보 닫기 버튼 이벤트
    infoCloseBtns.forEach((infoCloseBtn) => {
        infoCloseBtn.addEventListener("click", function () {
            let chartInfo = infoCloseBtn.closest(".chart-info");
            let chartBox = chartInfo.closest(".chart-card-item");

            chartInfo.classList.remove("show");
            chartBox.querySelector(".btn--info").classList.remove("active");
        });
    });

    // 정보 열기 버튼 이벤트
    infoOpenBtns.forEach((infoOpenBtn) => {
        infoOpenBtn.addEventListener("click", function () {
            let chartBox = infoOpenBtn.closest(".chart-card-item");
            let chartInfo = chartBox.querySelector(".chart-info");

            infoOpenBtn.classList.toggle("active");
            chartInfo.classList.toggle("show");
        });
    });
});

// 차트 전역 기본 스타일
Chart.register(ChartDataLabels);
Chart.defaults.color = "#575757";
Chart.defaults.font.family = "Pretendard";

Chart.defaults.set('plugins.datalabels', {
    align: 'top',
    anchor: 'end',
    font: {
        size: 11,
    },
    padding: {
        bottom: -10,
    },
});

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

const scalesFalse = {
    x: {
        grid: {
            display: false,
        },
    },
    y: {
        grid: {
            display: false,
        },
    },
}


const chartConfigs = {
    chart_101 : {
        type: "line",
        data: chartDataSet.chart_101,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        boxWidth: 6,
                        boxHeight: 6,
                    }
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                },
                y: {
                    afterDataLimits: (scale) => {
                        scale.max = scale.max * 1.17;
                    }
                },
            },
        },
    },
    chart_102 : {
        type: "line",
        data: chartDataSet.chart_102,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        boxWidth: 6,
                        boxHeight: 6,
                    }
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
    },
    chart_103 : {
        type: "line",
        data: chartDataSet.chart_103,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        boxWidth: 6,
                        boxHeight: 6,
                    }
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
    },
    chart_104 : {
        type: "line",
        data: chartDataSet.chart_104,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        boxWidth: 6,
                        boxHeight: 6,
                    }
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                },
                y: {
                    grid: {
                        display: false,
                    },
                },
            },
        },
    },
    chart_105 : {
        type: "bar",
        data: chartDataSet.chart_105,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                bar: {
                    width: 2,
                }
            },
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        font: {
                            family: "Pretendard",
                        },
                        boxWidth: 6,
                        boxHeight: 6,
                    },
                },
            },
            maxBarThickness: 40,
            scales: scalesFalse,
        },
    },
    chart_106 :{
        type: "bar",
        data: chartDataSet.chart_106,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_107 : {
        type: "bar",
        data: chartDataSet.chart_107,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 60,
            scales: scalesFalse,
        },
    },
    chart_108 : {
        type: "bar",
        data: chartDataSet.chart_108,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 60,
            scales: scalesFalse,
        },
    },
    chart_109 : {
        type: "bar",
        data: chartDataSet.chart_109,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                bar: {
                    width: 2,
                }
            },
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        font: {
                            family: "Pretendard",
                        },
                        boxWidth: 6,
                        boxHeight: 6,
                    },
                },
            },
            maxBarThickness: 40,
            scales: scalesFalse,
        },
    },
    chart_110 :{
        type: "bar",
        data: chartDataSet.chart_110,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_111 :{
        type: "bar",
        data: chartDataSet.chart_111,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_112 :{
        type: "bar",
        data: chartDataSet.chart_112,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 60,
            scales: scalesFalse,
        },
    },
    chart_113 :{
        type: "bar",
        data: chartDataSet.chart_113,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_114 :{
        type: "bar",
        data: chartDataSet.chart_114,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_115 :{
        type: "bar",
        data: chartDataSet.chart_115,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_116 :{
        type: "bar",
        data: chartDataSet.chart_116,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_117 :{
        type: "bar",
        data: chartDataSet.chart_117,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 60,
            scales: scalesFalse,
        },
    },    
    chart_118 :{
        type: "bar",
        data: chartDataSet.chart_118,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                bar: {
                    width: 2,
                }
            },
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        font: {
                            family: "Pretendard",
                        },
                        boxWidth: 6,
                        boxHeight: 6,
                    },
                },
            },
            maxBarThickness: 40,
            scales: scalesFalse,
        },
    },
    chart_119 :{
        type: "bar",
        data: chartDataSet.chart_119,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_120 : {
        type: "bar",
        data: chartDataSet.chart_120,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        boxWidth: 6,
                        boxHeight: 6,
                    }
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    }
}
