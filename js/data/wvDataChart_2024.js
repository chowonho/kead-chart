const chartDataSet = {
    chart_101: {
        labels: [2020, 2021, 2022, 2023, 2024],
        datasets: [
            {
                data: [34.9, 34.6, 36.4, 36.1, 33.8],
                label: '장애인',
                borderColor: 'rgba(91, 155, 213, 1)',
                backgroundColor: 'rgba(91, 155, 213, 1)',
                type: 'line',
            },
            {
                data: [60.2, 61.2, 63.0, 63.5, 63.5],
                label: '전체인구',
                borderColor: 'rgba(237, 125, 49, 1)',
                backgroundColor: 'rgba(237, 125, 49, 1)',
                type: 'line',
            },
        ],
    },
    chart_102: {
        labels: [2020, 2021, 2022, 2023, 2024],
        datasets: [
            {
                data: [5.9, 7.1, 4.5, 3.4, 5.1],
                label: '장애인',
                borderColor: '#40DE6F',
                backgroundColor: '#40DE6F',
                type: 'line',
            },
            {
                data: [4.5, 4.0, 3.0, 2.7, 3.0],
                label: '전체인구',
                borderColor: '#FFCE2C',
                backgroundColor: '#FFCE2C',
                type: 'line',
            },
        ],
    },
    chart_103: {
        labels: [2020, 2021, 2022, 2023, 2024],
        datasets: [
            {
                data: [37.0, 37.3, 38.1, 37.4, 35.7],
                label: '장애인',
                borderColor: '#5E18BF',
                backgroundColor: '#5E18BF',
                type: 'line',
            },
            {
                data: [63.0, 63.7, 64.9, 65.3, 65.4],
                label: '전체인구',
                borderColor: '#349FFF',
                backgroundColor: '#349FFF',
                type: 'line',
            },
        ],
    },
    chart_104: {
        labels: [2020, 2021, 2022, 2023, 2024],
        datasets: [
            {
                data: [63, 62.7, 61.9, 62.6, 64.3],
                label: '장애인',
                borderColor: '#E830C6',
                backgroundColor: '#E830C6',
                type: 'line',
            },
            {
                data: [37, 36.3, 35.1, 34.7, 34.6],
                label: '전체인구',
                borderColor: '#CE0000',
                backgroundColor: '#CE0000',
                type: 'line',
            },
        ],
    },
    chart_105: {
        labels: ['장애인 ', '전체 인구'],
        datasets: [
            {
                data: [42.3, 71.6],
                label: '남성',
                backgroundColor: '#E45CC7',
                borderRadius: 5,
            },
            {
                data: [22.3, 55.6],
                label: '여성',
                backgroundColor: '#4AEACF',
                borderRadius: 5,
            },
        ],
    },
    chart_106: {
        labels: ['15~29세 ', '30~39세', '40~49세', '50~59세', '60세 이상', '15~64세'],
        datasets: [
            {
                data: [36.1, 51.9, 56.8, 50.9, 25.8, 48.4],
                backgroundColor: '#3A6CEB',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_107: {
        labels: ['지체', '뇌병변', '시각', '청각', '발달', '기타'],
        datasets: [
            {
                data: [42.3, 13.6, 41.8, 27.2, 29.1, 23.1],
                backgroundColor: '#5BD580',
                borderRadius: 5,
            },
        ],
    },
    chart_108: {
        labels: ['중증', '경증'],
        datasets: [
            {
                data: [23.3, 38.5],
                backgroundColor: '#885BD5',
                borderRadius: 5,
            },
        ],
    },
    chart_109: {
        labels: ['장애인 ', '전체 인구'],
        datasets: [
            {
                data: [44.3, 73.9],
                label: '남성',
                backgroundColor: '#349FFF',
                borderRadius: 5,
            },
            {
                data: [23.8, 57.2],
                label: '여성',
                backgroundColor: '#5E18BF',
                borderRadius: 5,
            },
        ],
    },
    chart_110: {
        labels: ['15~29세', '30~39세', '40~49세', '50~59세', '60세 이상', '15~64세'],
        datasets: [
            {
                data: [38.7, 53.1, 58.2, 53.4, 27.5, 50.6],
                backgroundColor: '#D64141',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_111: {
        labels: ['지체', '뇌병변', '시각', '청각', '발달', '기타'],
        datasets: [
            {
                data: [44.7, 14.8, 43.7, 28.4, 30.4, 24.6],
                backgroundColor: '#FFCE2C',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_112: {
        labels: ['중증', '경증'],
        datasets: [
            {
                data: [24.2, 40.7],
                backgroundColor: '#082B76',
                borderRadius: 5,
            },
        ],
    },
    chart_113: {
        labels: [
            ['상용', '근로자'],
            ['임시', '근로자'],
            ['일용', '근로자'],
            ['고용원이 ', '있는', '자영업자'],
            ['고용원이 ', '없는', '자영업자'],
            ['무급가족', '종사자'],
        ],
        datasets: [
            {
                data: [39.3, 25.4, 8.1, 5, 19.8, 2.5],
                backgroundColor: '#5BD580',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_114: {
        labels: [['보건업 및', '사회복지', '서비스업'], ['제조업'], ['농업, 임업,', '어업 및 광업'], ['공공행정,', '국방 및 ', '사회보장 행정'], ['건설업']],
        datasets: [
            {
                data: [16.5, 13.5, 10.4, 8.7, 8.4],
                backgroundColor: '#E45CC7',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_115: {
        labels: [
            ['단순노무', '종사자'],
            ['사무', '종사자'],
            ['장치·기계', '조작 및', '조립종사자'],
            ['농림어업', '숙련 종사자'],
            ['기능원', '및 관련기능', '종사자'],
        ],
        datasets: [
            {
                data: [31.3, 15.5, 11.6, 9.9, 8.8],
                backgroundColor: '#3A6CEB',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_116: {
        labels: [['장애인', '직업재활시설', '일자리'], ['정부재정지원', '일자리'], ['공무원, 교사', '등 정부 및 ', '공공기관 일자리'], ['그 외 일반사업체']],
        datasets: [
            {
                data: [31.3, 15.5, 11.6, 9.9],
                backgroundColor: '#ED7D31',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_117: {
        labels: ['장애인', '전체인구'],
        datasets: [
            {
                data: [206.5, 312.8],
                backgroundColor: '#FFCE2C',
                borderRadius: 5,
            },
        ],
    },
    chart_118: {
        labels: ['장애인 ', '전체 인구'],
        datasets: [
            {
                data: [33.0, 61.8],
                label: '정규직',
                backgroundColor: '#18BFB1',
                borderRadius: 5,
            },
            {
                data: [67.0, 38.2],
                label: '비정규직',
                backgroundColor: '#693D00',
                borderRadius: 5,
            },
        ],
    },
    chart_119: {
        labels: ['육아', '가사', '재학·수강 등', '연로', '심신장애', '쉬었음'],
        datasets: [
            {
                data: [0.2, 13.1, 2.2, 15.6, 37.4, 29.9],
                backgroundColor: '#D64141',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_120: {
        labels: [['1년 내'], ['1년 내는 아니더라도', '향후 언젠가'], ['향후 언젠가']],
        datasets: [
            {
                data: [7.7, 3.5, 10.9],
                label: '일할 의사 있음',
                backgroundColor: '#3D8A14',
                borderRadius: 5,
            },
            {
                data: [92.3, 96.5, 89.1],
                label: '일할 의사 없음',
                backgroundColor: '#006083',
                borderRadius: 5,
            },
        ],
    },
    chart_201: {
        labels: ['전체', '1~4명', ['5~', '49명'], ['50~', '299명'], ['300~', '999명'], ['1,000명', '이상']],
        datasets: [
            {
                data: [3.4, 1.2, 5.4, 65.9, 96.6, 99.3],
                backgroundColor: 'rgba(91, 155, 213, 1)',
                borderRadius: 5,
            },
        ],
    },
    chart_202: {
        labels: ['전체', '1~4명', ['5~', '49명'], ['50~', '299명'], ['300~', '999명'], ['1,000명', '이상']],
        datasets: [
            {
                data: [1.41, 0.49, 0.73, 2.18, 2.31, 2.7],
                backgroundColor: '#FF8533',
                borderRadius: 5,
            },
        ],
    },
    chart_203: {
        labels: ['장애인 근로자', '전체 근로자'],
        datasets: [
            {
                data: [70.1, 60.8],
                label: '남성',
                backgroundColor: '#5E18BF',
                borderRadius: 5,
            },
            {
                data: [29.9, 39.2],
                label: '여성',
                backgroundColor: '#31DCE9',
                borderRadius: 5,
            },
        ],
    },
    chart_204: {
        labels: ['지체', '뇌병변, 안면', '시각', '청각, 언어', '지적, 자폐성', '정신', '신체내부', '국가유공자'],
        datasets: [
            {
                data: [70.7, 2.4, 5.4, 6.9, 8, 1.4, 2, 3.3],
                backgroundColor: '#40DE6F',
                borderRadius: 5,
            },
        ],
    },
    chart_205: {
        labels: [['업무상 필요에', '의해(장애여부 미고려)'], ['고용의무 이행'], ['사업주 지원제도'], ['입사 후', '장애인임을 확인'], ['기업의 사회적', '이미지 제고']],
        datasets: [
            {
                data: [47.5, 31.2, 9.6, 5.8, 5.8],
                backgroundColor: '#E830C6',
                borderRadius: 5,
            },
        ],
    },
    chart_206: {
        labels: [
            ['장애인 비장애인', '구분 없는 일반채용'],
            ['채용계획인원의', '일정부분', '장애인 할당채용'],
            ['인사추천을', '통한 개별 채용'],
            ['장애인 대상', '별도 공개 채용'],
        ],
        datasets: [
            {
                data: [79.1, 8.8, 7.7, 4.4],
                backgroundColor: '#D64141',
                borderRadius: 5,
            },
        ],
    },
    chart_207: {
        labels: [
            ['업무능력을 갖춘', '인력 부족'],
            ['장애인 지원자', '자체가 없음'],
            ['장애인에 적합', '직무 부족'],
            ['사업주,관리자', '등이 채용에', '소극적'],
            ['장애인용 시설 및', '장비·편의시설', '등이 부족'],
        ],
        datasets: [
            {
                data: [16.5, 12.7, 10.1, 1.5, 1.5],
                backgroundColor: '#FFCE2C',
                borderRadius: 5,
            },
        ],
    },
    chart_208: {
        labels: ['대부분 업무에 있음', '제한적인 업무에 있음', '수행할 직무를 찾기 힘듦'],
        datasets: [
            {
                data: [8.7, 28.7, 62.6],
                backgroundColor: '#082B76',
                borderRadius: 5,
            },
        ],
    },
    chart_209: {
        labels: ['대부분 업무에 있음', '제한적인 업무에 있음', '수행할 직무를 찾기 힘듦'],
        datasets: [
            {
                data: [0.6, 30.2, 69.2],
                backgroundColor: '#3A6CEB',
                borderRadius: 5,
            },
        ],
    },
    chart_210: {
        labels: ['적합한 인력 추천', '모집대행 서비스', '장애인 고용 컨설팅', '직무분석, 기업체 내 장애인 직업영역 개발', '맞춤훈련', '사전 현장훈련 후 근로', '직무체험 등 적합장애인 탐색기회 제공'],
        datasets: [
            {
                data: [37.8, 33.8, 30.7, 28.6, 28.4, 28.3, 27.9],
                backgroundColor: '#FF5356',
                borderRadius: 5,
            },
        ],
    },
    chart_211: {
        labels: ['직무능력향상훈련', '편의시설 진단 서비스', '출퇴근 지원', '장애인 지원 전문인력', '작업보조기기 무상지원', '직업생활, 고충처리 상담인력 및 비용지원'],
        datasets: [
            {
                data: [30.9, 29.2, 27.4, 26.8, 25.9, 25.6],
                backgroundColor: '#59C8FF',
                borderRadius: 5,
            },
        ],
    },
    chart_212: {
        labels: [
            '장애인 고용장려금 증액',
            '장애인 고용에 다른 세금 감면',
            '장애인 직업영역개발을 통한 고용창출 활성화',
            '적합한 장애인력 구인 서비스 강화',
            '부담금(부담기초액) 인상',
            '장애인의 직업적 능력 향상을 위한 교육훈련 서비스 강화',
        ],
        datasets: [
            {
                data: [19.6, 19.2, 12.7, 11.1, 10.7, 5.2],
                backgroundColor: '#FF5996',
                borderRadius: 5,
            },
        ],
    },
    chart_213: {
        labels: ['장애인에게 적합한 직무가 부족하거나 찾지 못해서', '부담금 납부 대상이 아님에 따라(상시 100인 미만)', '장애인 근로자의 생산성이 낮을 것 같아서', '근무환경이 유해하거나 위험해서'],
        datasets: [
            {
                data: [66.2, 14.6, 5.2, 4.2],
                backgroundColor: '#ADE32D',
                borderRadius: 5,
            },
        ],
    },
    chart_214: {
        labels: ['전체', '50~299명', '300~999명', '1,000명 이상'],
        datasets: [
            {
                data: [21.8, 20.9, 27, 34.2],
                backgroundColor: '#3D8A14',
                borderRadius: 5,
            },
        ],
    },
    chart_215: {
        labels: ['충분히 달성 가능', '어느 정도 달성 가능', '달성이 다소 어려움', '달성이 매우 어려움'],
        datasets: [
            {
                data: [1.4, 25.1, 63.5, 10],
                backgroundColor: '#006083',
                borderRadius: 5,
            },
        ],
    },
    chart_216: {
        labels: ['매우 많음', '있는 편임', '없는 편임', '전혀 없음'],
        datasets: [
            {
                data: [1.2, 31.9, 65.7, 1.2],
                label: '고용기업체',
                backgroundColor: '#18BFB1',
                borderRadius: 5,
            },
            {
                data: [0.0, 18.5, 67.4, 14.2],
                label: '미고용기업체',
                backgroundColor: '#693D00',
                borderRadius: 5,
            },
        ],
    },
    chart_301: {
        labels: ['장애인 '],
        datasets: [
            {
                data: [198975],
                label: '지적장애',
                backgroundColor: 'rgba(91, 155, 213, 1)',
                borderRadius: 5,
            },
            {
                data: [20025],
                label: '자폐성장애',
                backgroundColor: 'rgba(237, 125, 49, 1)',
                borderRadius: 5,
            },
        ],
    },
    chart_302: {
        labels: ['발달장애', '장애인구'],
        datasets: [
            {
                data: [11.5, 3.8],
                label: '중복장애 있음',
                backgroundColor: ['#FFCE2C'],
                type: 'bar',
            },
            {
                data: [88.5, 96.2],
                label: '중복장애 없음',
                backgroundColor: ['#31DCE9'],
                type: 'bar',
            },
        ],
    },
    chart_303: {
        labels: [
            ['두 문장 이상', '수준으로', '제시해도 이해함'],
            ['간단한 문장', '수준으로', '제시해야 이해함'],
            ['단어 수준으로', '제시해야 이해함'],
            ['다른 사람의 말을', '거의 이해하지 못함'],
        ],
        datasets: [
            {
                data: [54.9, 25.4, 12.2, 7.5],
                backgroundColor: '#40DE6F',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_304: {
        labels: [
            ['두 단어 이상을 사용한', '표현이나 문장으로', '의사를 표현함'],
            ['명확한 단어를 사용하여', '의사를 표현함'],
            ['불명료한 단어를 사용하여', '의사를 표현함'],
            ['불분명한 소리를 내어서', '의사를 표현함'],
            ['소리 등으로도 전혀', '의사를 표현할 수 없음'],
        ],
        datasets: [
            {
                data: [57.2, 19.6, 11.4, 7.3, 4.5],
                backgroundColor: '#E830C6',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_305: {
        labels: ['한글 읽기', '한글 쓰기', '숫자에 대한 인지', '날짜, 요일에 대한 인지', '위치, 장소에 대한 인지', '주위 사람에 대한 인지', '상황에 대한 인지'],
        datasets: [
            {
                data: [69.3, 67.4, 63.6, 65.7, 70.5, 76.4, 71.2],
                backgroundColor: '#D64141',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_306: {
        labels: [
            '자신을 해치는 행동',
            '타인을 해치는 행동',
            '물건을 파괴하는 행동',
            '방해하는 행동',
            '특이한 반복적인 습관',
            '사회적으로 공격적인 행동',
            '위축된 행동이나 부주의한 행동',
            '비협조적인 행동',
        ],
        datasets: [
            {
                data: [5.5, 2.6, 3.2, 3.8, 9.2, 3.9, 4.9, 4.8],
                backgroundColor: '#082B76',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_307: {
        labels: ['무학', '초등학교 졸업', '중학교 졸업', '고등학교 졸업', '대학교 이상 졸업'],
        datasets: [
            {
                data: [14.4, 11.9, 14.0, 54.0, 5.6],
                label: '발달장애',
                backgroundColor: '#3A6CEB',
                borderRadius: 5,
            },
            {
                data: [16.2, 23.0, 15.5, 31.4, 13.9],
                label: '장애인구',
                backgroundColor: '#FF5356',
                borderRadius: 5,
            },
        ],
    },
    chart_308: {
        labels: ['장애인 당사자', '부모 및 가족', '학교 교사', '전문 취업알선기관, 직업훈련기관 등 종사자', '복지관, 시설 등 종사자', '친구, 이웃 등 지인'],
        datasets: [
            {
                data: [31.1, 50.3, 4.2, 2, 9.1, 3],
                backgroundColor: '#5E18BF',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_309: {
        labels: [
            '장애인 직업재활시설',
            '장애인 표준사업장, 자회사형 표준사업장',
            '정부재정지원 일자리',
            '일반 민간사업체',
            '정부, 지자체, 공공기관 일자리',
            '특정한 회사나 사업체에 소속되어 있지 않음',
        ],
        datasets: [
            {
                data: [23.9, 14.6, 14.3, 32, 6, 8.8],
                backgroundColor: '#59C8FF',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_310: {
        labels: ['서비스', '제조', '사무', '음식', '청소·세탁', '농림어업', '예술스포츠'],
        datasets: [
            {
                data: [15, 35.5, 6.5, 8.9, 20, 5.7, 6.5],
                backgroundColor: '#FF5996',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_311: {
        labels: ['능력 수준에 맞는 업무 부여 및 조정', '업무시간 조정(단축)', '다른 사람의 도움 제공', '작업보조기기 및 편의시설 등 설치', '맞춤형 업무능력 향상훈련 실시'],
        datasets: [
            {
                data: [81.3, 72, 72.3, 52.4, 61.4],
                backgroundColor: '#ADE32D',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_312: {
        labels: ['당사자 희망 & 보호자 희망', '당사자 비희망 & 보호자 희망', '당사자 희망 & 보호자 비희망', '당사자 비희망 & 보호자 비희망'],
        datasets: [
            {
                data: [40.7, 8.5, 12.7, 36.8],
                backgroundColor: '#3D8A14',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_313: {
        labels: ['나는 돈을 벌고 싶다', '나는 일을 잘 할 수 있다', '나는 일을 배우고 싶다', '집에만 있기 싫다', '다른 사람이(엄마가 또는 선생님이) 일하라고 한다'],
        datasets: [
            {
                data: [72.3, 11.2, 7.3, 5.7, 3.2],
                backgroundColor: '#006083',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_314: {
        labels: ['나는 일 다니는 것이 좋다', '나는 하는 일이 재미있다', '나는 하는 일이 힘들다', '나는 일할 때 도움이 필요하다'],
        datasets: [
            {
                data: [73.3, 68.5, 30, 47.9],
                backgroundColor: '#18BFB1',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_315: {
        labels: ['취업 희망', '당장 내일부터 일할 의향'],
        datasets: [
            {
                data: [53.5, 45.3],
                backgroundColor: '#693D00',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_316: {
        labels: ['나는 가족(부모님)과 함께 살고 싶다', '나는 결혼해서 아내(남편)와 살고 싶다', '나는 혼자서 살고 싶다', '나는 친구와 살고 싶다'],
        datasets: [
            {
                data: [52.7, 25.7, 2.8, 17.6, , , ,],
                backgroundColor: 'rgba(91, 155, 213, 1)',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_401: {
        labels: [
            '92',
            '93',
            '94',
            '95',
            '96',
            '97',
            '98',
            '99',
            '00',
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
        ],
        datasets: [
            {
                label: '등록장애인 비율 (%)',
                data: [
                    0.54, 0.59, 0.65, 0.71, 0.78, 0.91, 1.12, 1.47, 2.01, 2.36, 2.68, 3.01, 3.32, 3.67, 4.02, 4.27, 4.54, 4.88, 4.98, 4.97, 4.93, 4.89, 4.86, 4.83, 4.86, 4.92, 4.99, 5.05, 5.08, 5.12,
                    5.15, 5.15,
                ],
                type: 'line',
                borderColor: '#FF5356',
                backgroundColor: '#FF5356',
                borderWidth: 2,
                tension: 0.4,
                yAxisID: 'y1',
                order: 0,
                fill: false,
            },
            {
                label: '등록장애인 수',
                data: [
                    242419, 265442, 294246, 324860, 362475, 425064, 527250, 697513, 958196, 1134177, 1294254, 1454215, 1610994, 1789443, 1967326, 2104889, 2246965, 2429547, 2517312, 2511159, 2501112,
                    2494460, 2490406, 2511051, 2545637, 2585876, 2618918, 2633026, 2644700, 2648424, 2641896,
                ],
                type: 'bar',
                backgroundColor: '#3A6CEB',
                order: 1,
            },
        ],
    },
    chart_402: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
        datasets: [
            {
                label: '남성',
                data: [
                    779356, 872739, 964363, 1047562, 1138641, 1223644, 1284089, 1345557, 1425896, 1468333, 1466460, 1460490, 1453606, 1448878, 1446943, 1457588, 1475550, 1496298, 1513206, 1521260,
                    1528280, 1532230, 1529806,
                ],
                type: 'bar',
                backgroundColor: 'rgba(136, 91, 213, 1)',
                order: 1,
            },
            {
                label: '여성',
                data: [
                    354821, 421515, 489852, 563432, 650802, 743682, 820800, 901408, 1003651, 1048979, 1052781, 1050669, 1047506, 1045582, 1043463, 1053463, 1070087, 1089578, 1105712, 1111766, 1116420,
                    1116194, 1112090,
                ],
                type: 'bar',
                backgroundColor: 'rgba(255, 206, 44, 1)',
                order: 2,
            },
            {
                label: '여성비율',
                data: [31.3, 32.6, 33.7, 35.0, 36.4, 37.8, 39.0, 40.1, 41.3, 41.7, 41.8, 41.8, 41.9, 41.9, 41.9, 42.0, 42.0, 42.1, 42.2, 42.2, 42.2, 42.1, 42.1],
                type: 'line',
                borderColor: 'rgba(91, 213, 128, 1)',
                backgroundColor: 'rgba(91, 213, 128, 1)',
                borderWidth: 2,
                tension: 0.4,
                yAxisID: 'y1',
                order: 0,
                borderDash: [2, 1],
                fill: false,
            },
        ],
    },
    chart_403: {
        labels: [['0~9세'], ['10~19세'], ['20~29세'], ['30~39세'], ['40~49세'], ['50~59세'], ['60~69세'], ['70~79세'], ['80세 이상']],
        datasets: [
            {
                label: '장애인구',
                data: [1.3, 2.4, 3.6, 4.2, 7.9, 15.1, 23.8, 15.1, 23.8, 21.6, 20.1],
                backgroundColor: '#D64141',
                borderWidth: 1,
                borderRadius: 5,
            },
            {
                label: '전체인구',
                data: [6.5, 9.1, 12.1, 12.8, 15.4, 16.9, 14.9, 7.7, 4.6],
                backgroundColor: '#18BFB1',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_404: {
        labels: [['2013'], ['2018'], ['2023']],
        datasets: [
            {
                label: '장애인',
                data: [40.4, 46.7, 53.9],
                backgroundColor: '#ADE32D',
                borderWidth: 1,
                borderRadius: 5,
            },
            {
                label: '전체인구',
                data: [12.2, 14.8, 19.0],
                backgroundColor: '#FF5996',
                borderRadius: 5,
            },
        ],
    },
    chart_405: {
        labels: ['07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        datasets: [
            {
                data: [2105, 2247, 2430, 2517, 2519, 2511, 2501, 2494, 2490, 2511, 2546, 2586, 2619, 2633, 2645, 2648, 2642],
                label: '전체',
                borderColor: 'rgba(91, 155, 213, 1)',
                backgroundColor: 'rgba(91, 155, 213, 1)',
                type: 'line',
            },
            {
                data: [1360, 1418, 1501, 1525, 1506, 1470, 1440, 1411, 1388, 1372, 1344, 1326, 1299, 1260, 1226, 1187, 1149],
                label: '15~64세',
                borderColor: 'rgba(237, 125, 49, 1)',
                backgroundColor: 'rgba(237, 125, 49, 1)',
                type: 'line',
            },
            {
                data: [689, 772, 869, 935, 958, 987, 1010, 1033, 1053, 1089, 1150, 1206, 1264, 1315, 1357, 1398, 1425],
                label: '65세 이상',
                borderColor: 'rgba(191, 155, 213, 1)',
                backgroundColor: 'rgba(191, 155, 213, 1)',
                type: 'line',
            },
        ],
    },
    chart_406: {
        labels: [['지체'], ['뇌병변'], ['시각'], ['청각'], ['언어'], ['지적'], ['자폐성'], ['정신'], ['신장'], ['심장'], ['호흡기'], ['간'], ['안면'], ['지적'], ['장루/요루'], ['뇌전증']],
        datasets: [
            {
                data: [1309, 253, 253, 255, 18, 179, 18, 96, 67, 7, 13, 9, 3, 13, 7],
                backgroundColor: '#E830C6',
                borderWidth: 1,
                borderRadius: 5,
            },
            {
                data: [1239, 253, 253, 343, 21, 207, 27, 102, 88, 5, 12, 13, 3, 15, 7],
                backgroundColor: '#FFCE2C',
                borderWidth: 1,
                borderRadius: 5,
            },
            {
                data: [1, 154, 241, 248, 433, 23, 230, 43, 104, 109, 5, 11, 16, 3, 17, 7],
                backgroundColor: '#3A6CEB',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_407: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
        datasets: [
            {
                label: '심한 장애',
                data: [
                    584043, 645553, 701936, 756140, 816476, 877562, 917596, 956576, 1011900, 1009700, 992343, 980018, 971102, 966466, 965381, 969557, 978526, 983769, 985403, 984965, 984813, 982338,
                    978634,
                ],
                type: 'bar',
                backgroundColor: '#5E18BF',
                order: 1,
            },
            {
                label: '심하지않은 장애',
                data: [
                    550134, 648701, 752279, 854854, 972967, 1089764, 1187293, 1290389, 1417647, 1507612, 1526898, 1531141, 1530010, 1527994, 1525025, 1541494, 1567111, 1602107, 1633515, 1648061,
                    1659887, 1666086, 1663262,
                ],
                type: 'bar',
                backgroundColor: '#FF5356',
                order: 2,
            },
            {
                label: '심한장애 비중',
                data: [51.5, 49.9, 48.3, 46.9, 45.6, 44.6, 43.6, 42.6, 41.6, 40.1, 39.4, 39.0, 38.8, 38.7, 38.8, 38.6, 38.4, 38.0, 37.6, 37.4, 37.2, 37.1, 37.0],
                type: 'line',
                borderColor: '#ADE32D',
                backgroundColor: '#ADE32D',
                borderWidth: 2,
                tension: 0.4,
                yAxisID: 'y1',
                order: 0,
                borderDash: [2, 1],
                fill: false,
            },
        ],
    },
    chart_408: {
        labels: ['0~4세', '5~9세', '10~14세', '20~24세', '25~29세', '30~34세', '35~39세', '40~44세', '45~49세', '50~54세', '55~59세', '60~64세', '65세 이상'],
        datasets: [
            {
                data: [5.8, 4.6, 6.2, 10.3, 17.2, 29.8, 42.1, 49.3, 52.6, 57.4, 59.8, 60, 58.8, 53.3],
                label: '지체',
                borderColor: '#18BFB1',
                backgroundColor: '#18BFB1',
                type: 'line',
                borderDash: [10, 5],
            },
            {
                data: [13.1, 6, 5.5, 5.3, 5.6, 5.3, 5.1, 5, 4.9, 5.5, 6.5, 7.1, 8.4, 15.9],
                label: '청각',
                borderColor: '#FF5996',
                backgroundColor: '#FF5996',
                type: 'line',
                borderDash: [10, 5],
            },
            {
                data: [24.5, 59.4, 65, 67.6, 58.8, 41, 24.2, 15.7, 10.7, 6.9, 4.5, 3.2, 1.9, 0.7],
                label: '발달',
                borderColor: '#59C8FF',
                backgroundColor: '#59C8FF',
                type: 'line',
                borderDash: [10, 5],
            },
            {
                data: [3.5, 1.7, 3.1, 6.5, 8.8, 12.1, 18, 27.6, 38, 44.3, 47, 51.3, 53.5, 46.8],
                label: '지체',
                borderColor: '#18BFB1',
                backgroundColor: '#18BFB1',
                type: 'line',
            },
            {
                data: [11.6, 3.3, 3.7, 4.1, 4.4, 4.9, 5.3, 5.2, 5.1, 5.2, 5.5, 6.9, 9.3, 24.9],
                label: '청각',
                borderColor: '#FF5996',
                backgroundColor: '#FF5996',
                type: 'line',
            },
            {
                data: [28.7, 71.6, 79, 74.5, 69, 62.5, 50.3, 34.9, 21.4, 14, 9.4, 6.1, 3.8, 1],
                label: '발달',
                borderColor: '#59C8FF',
                backgroundColor: '#59C8FF',
                type: 'line',
            },
        ],
    },
};
