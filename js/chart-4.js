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
// Chart.register(ChartDataLabels);// 차트 위에 숫자표시
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
    formatter: function (value) {
        return value.toFixed(1);
    },
});

// 숫자를 소수점 1자리로 포맷팅
// Chart.defaults.set('plugins.tooltip', {
//     callbacks: {
//         label: function (context) {
//             const datasetLabel = context.dataset.label;
//             const value = context.raw;
//             // 특정 데이터셋만 소수점으로 표시
//             if (datasetLabel === '장애인' || datasetLabel === '전체인구' || datasetLabel === '등록장애인 비율' || datasetLabel === '여성 비율' || datasetLabel === '심한장애 비율') {
//                 return `${value.toFixed(1)}`;
//             }
//         },
//     },
// });

// const clearTooltip = (tooltipItems) => {
//     return tooltipItems[0].label.replaceAll(',', '');
// };

// Chart.defaults.set('plugins.tooltip', {
//     callbacks: {
//         title: clearTooltip,
//     },
// });

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

const chartConfigs = {
    chart_401: {
        type: 'bar',
        data: chartDataSet.chart_401,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
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
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const datasetLabel = context.dataset.label;
                            const value = context.raw;
                            // 특정 데이터셋만 소수점으로 표시
                            if (datasetLabel === '등록장애인 비율') {
                                return `${value.toFixed(1)}`;
                            }
                        },
                    },
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                },
                y1: {
                    position: 'right',
                    beginAtZero: true,
                },
            },
            elements: {
                point: {
                    radius: 0,
                },
            },
        },
    },
    chart_402: {
        type: 'bar',
        data: chartDataSet.chart_402,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
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
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const datasetLabel = context.dataset.label;
                            const value = context.raw;
                            // 특정 데이터셋만 소수점으로 표시
                            if (datasetLabel === '여성 비율') {
                                return `${value.toFixed(1)}`;
                            }
                        },
                    },
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                },
                y1: {
                    position: 'right',
                    grid: {
                        display: false, // 두 번째 y축의 그리드 숨기기
                    },
                },
            },
            elements: {
                point: {
                    radius: 0,
                },
            },
        },
    },
    chart_403: {
        type: 'bar',
        data: chartDataSet.chart_403,
        plugins: [backgroundColorPlugin],
        options: {
            // indexAxis: "y",
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        font: {
                            family: 'Pretendard',
                        },
                        boxWidth: 6,
                        boxHeight: 6,
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                const value = context.raw;
                                return `${value.toFixed(1)}`;
                            },
                        },
                    },
                },
                title: {
                    display: true,
                },
            },
            scales: {
                y: {
                    grid: {
                        display: false,
                    },
                },
            },
        },
    },
    chart_404: {
        type: 'bar',
        data: chartDataSet.chart_404,
        plugins: [backgroundColorPlugin],
        options: {
            // indexAxis: "y",
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        font: {
                            family: 'Pretendard',
                        },
                        boxWidth: 6,
                        boxHeight: 6,
                    },
                },
                title: {
                    display: true,
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const value = context.raw;
                            return `${value.toFixed(1)}`;
                        },
                    },
                },
            },
            scales: {
                y: {
                    grid: {
                        display: false,
                    },
                },
            },
        },
    },
    chart_405: {
        type: 'line',
        data: chartDataSet.chart_405,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
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
                },
                y: {
                    afterDataLimits: (scale) => {
                        scale.max = scale.max * 1.17;
                    },
                },
            },
        },
    },
    chart_406: {
        type: 'bar',
        data: chartDataSet.chart_406,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 6,
                        boxHeight: 6,
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
                        // display: false,
                    },
                },
            },
        },
    },
    chart_407: {
        type: 'bar',
        data: chartDataSet.chart_407,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
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
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const datasetLabel = context.dataset.label;
                            const value = context.raw;
                            // 특정 데이터셋만 소수점으로 표시
                            if (datasetLabel === '심한장애 비율') {
                                return `${value.toFixed(1)}`;
                            }
                        },
                    },
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                },
                y1: {
                    grid: {
                        display: false, // 두 번째 y축의 그리드 숨기기
                    },
                    position: 'right',
                    beginAtZero: true,
                },
            },
            elements: {
                point: {
                    radius: 0,
                },
            },
        },
    },
    chart_408: {
        type: 'line',
        data: chartDataSet.chart_408,
        plugins: [backgroundColorPlugin],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 6,
                        boxHeight: 6,
                    },
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const value = context.raw;
                            return `${value.toFixed(1)}`;
                        },
                    },
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                },
                y: {},
            },
        },
    },
};
