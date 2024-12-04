document.addEventListener('DOMContentLoaded', function () {
    const infoCloseBtns = document.querySelectorAll('.btn-info-close');
    const infoOpenBtns = document.querySelectorAll('.btn--info');

    // 정보 닫기 버튼 이벤트
    infoCloseBtns.forEach((infoCloseBtn) => {
        infoCloseBtn.addEventListener('click', function () {
            let chartInfo = infoCloseBtn.closest('.chart-info');
            let chartBox = chartInfo.closest('.chart-card-item');

            chartInfo.classList.remove('show');
            chartBox.querySelector('.btn--info').classList.remove('active');
        });
    });

    // 정보 열기 버튼 이벤트
    infoOpenBtns.forEach((infoOpenBtn) => {
        infoOpenBtn.addEventListener('click', function () {
            let chartBox = infoOpenBtn.closest('.chart-card-item');
            let chartInfo = chartBox.querySelector('.chart-info');

            infoOpenBtn.classList.toggle('active');
            chartInfo.classList.toggle('show');
        });
    });
});

// 차트 전역 기본 스타일
Chart.register(ChartDataLabels);
Chart.defaults.color = '#575757';
Chart.defaults.font.family = 'Pretendard';

// 그래프 숫자 위치
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
    id: 'backgroundColor', // 플러그인 ID
    beforeDraw(chart) {
        const { ctx, chartArea } = chart; // 차트의 2D 컨텍스트와 차트 영역 가져오기
        ctx.save(); // 현재 상태 저장
        ctx.fillStyle = 'white'; // 배경색 설정
        ctx.fillRect(0, 0, chart.width, chart.height); // 캔버스 전체 배경색 설정
        ctx.restore(); // 상태 복원
    },
};

// 그래프 라인 제거
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
        ticks: {
            display: false,
        },
    },
};

const clearTooltip = (tooltipItems) => {
    return tooltipItems[0].label.replaceAll(',', '');
};

const chartConfigs = {
    chart_301: {
        type: 'bar',
        data: chartDataSet.chart_301,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            family: 'Pretendard',
                        },
                        boxWidth: 6,
                        boxHeight: 6,
                    },
                },
                datalabels: {
                    padding: {
                        bottom: -15,
                    },
                    // 콤마표시
                    formatter: function (value, context) {
                        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                    },
                },
            },
            maxBarThickness: 60,
            // scales: scalesFalse,
        },
    },
    chart_302: {
        type: 'bar',
        data: chartDataSet.chart_302,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            maxBarThickness: 60,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 6,
                        boxHeight: 6,
                    },
                },
                datalabels: {
                    align: 'center',
                    anchor: 'center',
                    color: '#000',
                    font: {
                        size: 12,
                    },
                },
            },
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                },
            },
        },
    },
    chart_303: {
        type: 'bar',
        data: chartDataSet.chart_303,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        title: clearTooltip,
                    },
                },
            },
            maxBarThickness: 20,
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        font: {
                            size: 11,
                        },
                    },
                },
                y: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        display: false,
                    },
                },
            },
        },
    },
    chart_304: {
        type: 'bar',
        data: chartDataSet.chart_304,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        title: clearTooltip,
                    },
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_305: {
        type: 'bar',
        data: chartDataSet.chart_305,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        title: clearTooltip,
                    },
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_306: {
        type: 'bar',
        data: chartDataSet.chart_306,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        title: clearTooltip,
                    },
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_307: {
        type: 'bar',
        data: chartDataSet.chart_307,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            family: 'Pretendard',
                        },
                        boxWidth: 6,
                        boxHeight: 6,
                    },
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        font: {
                            size: 11,
                        },
                    },
                },
                y: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        display: false,
                    },
                },
            },
            maxBarThickness: 20,
        },
    },
    chart_308: {
        type: 'bar',
        data: chartDataSet.chart_308,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        title: clearTooltip,
                    },
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_309: {
        type: 'bar',
        data: chartDataSet.chart_309,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        title: clearTooltip,
                    },
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_310: {
        type: 'bar',
        data: chartDataSet.chart_310,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        title: clearTooltip,
                    },
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_311: {
        type: 'bar',
        data: chartDataSet.chart_311,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        title: clearTooltip,
                    },
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_312: {
        type: 'bar',
        data: chartDataSet.chart_312,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        title: clearTooltip,
                    },
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_313: {
        type: 'bar',
        data: chartDataSet.chart_313,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        title: clearTooltip,
                    },
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_314: {
        type: 'bar',
        data: chartDataSet.chart_314,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        title: clearTooltip,
                    },
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_315: {
        type: 'bar',
        data: chartDataSet.chart_315,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        title: clearTooltip,
                    },
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
    chart_316: {
        type: 'bar',
        data: chartDataSet.chart_316,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        title: clearTooltip,
                    },
                },
            },
            maxBarThickness: 20,
            scales: scalesFalse,
        },
    },
};
