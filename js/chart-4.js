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
                },
                title: {
                    display: true,
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
                    enabled: true, // 툴팁 활성화 여부
                    mode: 'index', // 데이터 세트 인덱스별 툴팁 표시
                    intersect: true, // 마우스가 데이터 포인트 위에 있을 때만 표시
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
                    display: false,
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
