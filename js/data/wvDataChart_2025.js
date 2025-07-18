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
                data: [3.6, 16.1, 6.4, 73.9],
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
        labels: ['육아', '가사', ['재학', '수강 등'], '연로', '심신장애', '쉬었음'],
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
        labels: [
            ['일할 의사', '있음'],
            ['일할 의사', '없음'],
            ['일할 의사', '있음'],
            ['일할 의사', '없음'],
            ['일할 의사', '있음'],
            ['일할 의사', '없음'],
        ],
        datasets: [
            {
                data: [7.7, 92.3, 3.5, 96.5, 10.9, 89.1],
                backgroundColor: ['#FF5996', '#FF5996', '#3998EF', '#3998EF', '#3D8A14', '#3D8A14'],
                borderRadius: 5,
            },
        ],
    },
    chart_201: {
        labels: ['전체', '1~4명', ['5~', '49명'], ['50~', '299명'], ['300~', '999명'], ['1,000명', '이상']],
        datasets: [
            {
                data: [3.3, 1.1, 4.7, 58.9, 96.7, 99.5],
                backgroundColor: 'rgba(91, 155, 213, 1)',
                borderRadius: 5,
            },
        ],
    },
    chart_202: {
        labels: ['전체', '1~4명', ['5~', '49명'], ['50~', '299명'], ['300~', '999명'], ['1,000명', '이상']],
        datasets: [
            {
                data: [1.55, 0.56, 0.85, 2.22, 2.71, 2.44],
                backgroundColor: '#FF8533',
                borderRadius: 5,
            },
        ],
    },
    chart_203: {
        labels: ['장애인 근로자', '전체 근로자'],
        datasets: [
            {
                data: [71.8, 60.2],
                label: '남성',
                backgroundColor: '#5E18BF',
                borderRadius: 5,
            },
            {
                data: [28.2, 39.8],
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
                data :[61.7, 2.9, 6.8, 7.7, 13.8, 1.8, 2.6, 2.8],                
                backgroundColor: '#40DE6F',
                borderRadius: 5,
            },
        ],
    },
    chart_205: {
        labels: [
            ['업무상 ', '필요'],
            ['고용의무 ', '이행'],
            ['사업주 ', '지원제도'],
            ['입사 후 ', '장애인 확인'],
            ['사회적 이미지 ', ' 제고'],
        ],
        datasets: [
            {
                data: [45.5 , 32.1 , 8.9 , 5.7 , 5.3],
                backgroundColor: '#E830C6',
                borderRadius: 5,
            },
        ],
    },
    chart_206: {
        labels: [
            ['장애인과 ', '비장애인 구분', '없는 일괄채용', '(일반채용)'],
            ['장애인의 경우 ', '인사추천을 받아 ', '개별 채용'],
            ['장애인만을 ', '대상으로 ', '별도 공개 채용'],
            ['채용계획인원의 ', '일정부분 ', '장애인 할당채용']
        ],
        datasets: [
            {
                data: [69.4 , 10.3 , 10.2 , 10],
                backgroundColor: '#D64141',
                borderRadius: 5,
            },
        ],
    },
    chart_207: {
        labels: [
            ['업무능력', '갖춘', '인력 부족'],
            ['적합 직무 ', '부족'],
            ['장애인 ', '지원자가', '없음'],
            ['시설 및 ', '편의시설 등', '부족'],
            ['채용 후 ', '인사관리 어려움'] 
        ],
        datasets: [
            {
                data: [17.9 , 13.5 , 9.3 , 2.2 , 2],
                backgroundColor: '#FFCE2C',
                borderRadius: 5,
            },
        ],
    },
    chart_208: {
        labels: ['대부분 업무에 있음', '제한적인 업무에 있음', '수행할 직무를 찾기 힘듦'],
        datasets: [
            {
                data: [5.1 , 31 , 63.9],
                backgroundColor: '#082B76',
                borderRadius: 5,
            },
        ],
    },
    chart_209: {
        labels: ['대부분 업무에 있음', '제한적인 업무에 있음', '수행할 직무를 찾기 힘듦'],
        datasets: [
            {
                data: [1.9 , 20.8 , 77.3],
                backgroundColor: '#3A6CEB',
                borderRadius: 5,
            },
        ],
    },
    chart_210: {
        labels: [['적합 인력', '추천'], '모집대행', ['직무분석', '직업영역 개발'], ['현장훈련 후 ', '근로'], '직무체험 등 ', '맞춤훈련', ['장애인', '고용컨설팅']],
        datasets: [
            {
                data: [27.6 , 19.3 , 18.3 , 20.8 , 21.7 , 20.8 , 19.6],
                backgroundColor: '#FF5356',
                borderRadius: 5,
            },
        ],
    },
    chart_211: {
        labels: ['직무훈련', ['전문인력 ', '지원'], ['편의시설 ', '진단'], ['작업보조기기 ', '무상지원'], '출퇴근 지원', ['상담인력 및 ', '비용지원']],
        datasets: [
            {
                data: [35.7 , 30.6 , 30.1 , 31.7 , 29 , 25.8],
                backgroundColor: '#59C8FF',
                borderRadius: 5,
            },
        ],
    },
    chart_212: {
        labels: ['장려금 증액', ['고용에 따른 ', '세금 감면'], '부담금 인상', '직업영역개발', ['사업주 융자등', '금융지원']],
        datasets: [
            {
                data: [22.3 , 19.7 , 13 , 9.4 , 9.3],
                backgroundColor: '#FF5996',
                borderRadius: 5,
            },
        ],
    },
    chart_213: {
        labels: [['적합 직무', '부족'], ['생산성이 낮을 것 ', '같아서'], '위험한 근무환경', ['부담금 납부 ', '대상 아님']],
        datasets: [
            {
                data: [53.2 , 11.7 , 10.3 , 7.9],
                backgroundColor: '#ADE32D',
                borderRadius: 5,
            },
        ],
    },
    chart_214: {
        labels: ['전체', '50~299명', '300~999명', '1,000명 이상'],
        datasets: [
            {
                data: [22.2 , 20.8 , 27.6 , 32.5],
                backgroundColor: '#3D8A14',
                borderRadius: 5,
            },
        ],
    },
    chart_215: {
        labels: ['충분히 가능', '어느 정도 가능', '다소 어려움', '매우 어려움'],
        datasets: [
            {
                data: [1.4 , 21 , 66.4 , 11.2],
                backgroundColor: '#006083',
                borderRadius: 5,
            },
        ],
    },
    chart_216: {
        labels: ['매우 많음', '있는 편임', '없는 편임', '전혀 없음'],
        datasets: [
            {
                data: [0 , 7.9 , 61.8 , 30.3],
                backgroundColor: '#18BFB1',
                borderRadius: 5,
            },
        ],
    },
    chart_301: {
        labels: ['장애인 '],
        datasets: [
            {
                data: [202],
                label: '지적장애',
                backgroundColor: 'rgba(91, 155, 213, 1)',
                borderRadius: 5,
            },
            {
                data: [22],
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
                data: [9.3, 4.3],
                label: '중복장애 있음',
                backgroundColor: ['#FFCE2C'],
                type: 'bar',
            },
            {
                data: [90.7, 95.7],
                label: '중복장애 없음',
                backgroundColor: ['#31DCE9'],
                type: 'bar',
            },
        ],
    },
    chart_303: {
        labels: [
            ['두 문장 이상 ', '수준으로 ', '제시해도 이해함'],
            ['간단한 문장 ', '수준으로 ', '제시해야 이해함'],
            ['단어 수준으로 ', '제시해야 이해함'],
            ['다른 사람의 말을 ', '거의 이해하지 못함'],
        ],
        datasets: [
            {
                data: [52.1 , 28.1 , 12.7 , 7.1],
                backgroundColor: '#40DE6F',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_304: {
        labels: [
            ['두 단어', '이상으로 표현'],
            ['명확한', '단어로 표현'],
            ['불명료한', '단어로 표현'],
            ['불분명한', ' 소리로 표현'],
            ['의사 표현이', ' 불가능'],
        ],
        datasets: [
            {
                data: [56.2 , 21.4 , 10.7 , 7.4 , 4.3],
                backgroundColor: '#E830C6',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_305: {
        labels: ['읽기', '쓰기', '숫자 인지', '날짜, 요일 인지', '위치, 장소 인지', '주위 사람 인지', '상황 인지'],
        datasets: [
            {
                data: [70.4 , 69.1 , 65.7 , 66.8 , 73.5 , 78.8 , 73.3 ],
                backgroundColor: '#D64141',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_306: {
        labels: ['자신 해치기', '타인 해치기', '물건 파괴', '방해', '특이·반복 습관', '공격적 행동', '위축·부주의 행동', '비협조적 행동'],
        datasets: [
            {
                data: [21.7 , 14 , 17.3 , 17.3 , 26.4 , 17.9 , 24.4 , 24],
                backgroundColor: '#082B76',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_307: {
        labels: ['무학', ['초등학교', '졸업'], ['중학교', '졸업'], ['고등학교', '졸업'], ['대학교 이상', '졸업']],
        datasets: [
            {
                data: [13.6 , 11.6 , 13.9 , 55.2 , 5.7],
                label: '발달장애',
                backgroundColor: '#3A6CEB',
                borderRadius: 5,
            },
            {
                data: [14.4 , 23.7 , 16.3 , 31.6 , 14],
                label: '장애인구',
                backgroundColor: '#FF5356',
                borderRadius: 5,
            },
        ],
    },
    chart_308: {
        labels: ['당사자', '부모·가족', '학교교사', ['취업기관 등', '종사자'], ['복지관 등', '종사자'], '친구, 지인'],
        datasets: [
            {
                data: [28.9 , 49.3 , 4.6 , 3 , 10.9 , 3.2 ],
                backgroundColor: '#5E18BF',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_309: {
        labels: ['직업재활시설', '표준사업장', ['정부재정지원', '일자리'], '일반 사업체', '정부·공공', '무소속'],
        datasets: [
            {
                data: [22.6 , 13.5 , 13.4 , 40.1 , 5.7 , 4.9],
                backgroundColor: '#59C8FF',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_310: {
        labels: ['서비스', '제조', '사무', '음식', '청소·세탁', '농·어업', ['예술', '스포츠']],
        datasets: [
            {
                data: [17.2 , 32.7 , 8.3 , 7.6 , 19.8 , 3.6 , 7.9],
                backgroundColor: '#FF5996',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_311: {
        labels: [['능력 맞는', '업무 부여'], '업무시간 조정', '타인의 도움', ['보조기기', '편의시설'], '맞춤 훈련'],
        datasets: [
            {
                data: [81.5 , 74.4 , 72.8 , 56.5 , 65.7],
                backgroundColor: '#ADE32D',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_312: {
        labels: ['둘 다 희망', '보호자만 희망', '당사자만 희망', '둘 다 비희망'],
        datasets: [
            {
                data: [36.6 , 7 , 14.1 , 41],
                backgroundColor: '#3D8A14',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_313: {
        labels: ['돈 벌려고', ['잘 할 수', '있어서'], ['일 배우고', '싶어서'], ['다른 사람이', '시켜서'], ['집에만 있기', '싫어서'] ],
        datasets: [
            {
                data: [73.7 , 12.7 , 7.3 , 3.5 , 2.6],
                backgroundColor: '#006083',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_314: {
        labels: ['일 다니는 것이 좋다', '일이 재미있다', '일이 힘들다', '도움이 필요하다'],
        datasets: [
            {
                data: [73.3 , 68.5 , 30 , 49.5],
                backgroundColor: ['#E830C6', '#40DE6F', '#082B76', '#FF8533'],
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_315: {
        labels: ['희망', '비희망', '있음', '없음'],
        datasets: [
            {
                data: [50.7 , 47.9 , 45.5 , 54.5],
                backgroundColor: ['#18BFB1', '#18BFB1', '#693D00', '#693D00'],
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_316: {
        labels: [['가족(부모님)과', '함께'], ['결혼해서', '배우자와 함께'], '혼자서', '친구와 함께'],
        datasets: [
            {
                data: [52.1 , 23.8 , 2.6 , 20.8],
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
            '24'
        ],
        datasets: [
            {
                label: '등록장애인 비율',
                data: [
                    0.54, 0.59, 0.65, 0.71, 0.78, 0.91, 1.12, 1.47, 2.01, 2.36, 2.68, 3.01, 3.32, 3.67, 4.02, 4.27, 4.54, 4.88, 4.98, 4.97, 4.93, 4.89, 4.86, 4.83, 4.86, 4.92, 4.99, 5.05, 5.08, 5.12,
                    5.14, 5.13, 5.14
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
                    242419, 265442, 294246, 324860, 362475, 425064, 527250, 697513, 958196, 1134177, 1294254, 1454215, 1610994, 1789443, 1967326, 2104889, 2246965, 2429547, 2517312, 2519241, 2511159,
                    2501112, 2494460, 2490406, 2511051, 2545637, 2585850, 2618724, 2632328, 2642922, 2643696, 2633262,2631356
                ],
                type: 'bar',
                backgroundColor: '#3A6CEB',
                order: 1,
            },
        ],
    },
    chart_402: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
        datasets: [
            {
                label: '남성',
                data: [
                    779356, 872739, 964363, 1047562, 1138641, 1223644, 1284089, 1345557, 1425896, 1468333, 1466460, 1460490, 1453606, 1448878, 1446943, 1457588, 1475550
                    , 1496287 , 1513099 , 1520852 , 1527233 , 1529440 , 1524697 , 1525056 
                ],
                type: 'bar',
                backgroundColor: 'rgba(136, 91, 213, 1)',
                order: 1,
            },
            {
                label: '여성',
                data: [
                    354821, 421515, 489852, 563432, 650802, 743682, 820800, 901408, 1003651, 1048979, 1052781, 1050669, 1047506, 1045582, 1043463, 1053463, 1070087
                    , 1089563 , 1105625 , 1111476 , 1115689 , 1114256 , 1108565 , 1106300

                ],
                type: 'bar',
                backgroundColor: 'rgba(255, 206, 44, 1)',
                order: 2,
            },
            {
                label: '여성 비율',
                data: [31.3, 32.6, 33.7, 35.0, 36.4, 37.8, 39.0, 40.1, 41.3, 41.7, 41.8, 41.8, 41.9, 41.9, 41.9, 42.0, 42.0
                    , 42.1, 42.2, 42.2, 42.2, 42.1, 42.1, 42.0],
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
                label: '장애인',
                data: [ 1.4 , 2.5 , 3.5 , 4.2 , 7.5 , 14.5 , 23.6 , 22.0 , 20.8],
                backgroundColor: '#D64141',
                borderWidth: 1,
                borderRadius: 5,
            },
            {
                label: '전체인구',
                data: [6.1 ,9.0 ,11.6 ,12.9 ,15.1 ,17.0 ,15.3 ,8.2 ,4.8 ],
                backgroundColor: '#18BFB1',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_404: {
        labels: [['2014'], ['2019'], ['2024']],
        datasets: [
            {
                label: '장애인',
                data: [41.4, 48.3, 55.3],
                backgroundColor: '#ADE32D',
                borderWidth: 1,
                borderRadius: 5,
            },
            {
                label: '전체인구',
                data: [12.7, 15.5, 20.0],
                backgroundColor: '#FF5996',
                borderRadius: 5,
            },
        ],
    },
    chart_405: {
        labels: ['07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        datasets: [
            {
                data: [2105, 2247, 2430, 2517, 2519, 2511, 2501, 2494, 2490, 2511, 2546
                    , 2586, 2619, 2632, 2643, 2644, 2633, 2631],
                label: '전체',
                borderColor: 'rgba(91, 155, 213, 1)',
                backgroundColor: 'rgba(91, 155, 213, 1)',
                type: 'line',
            },
            {
                data: [1360, 1418, 1501, 1525, 1506, 1470, 1440, 1411, 1388, 1372, 1344
                     , 1326, 1299, 1260, 1226, 1186, 1148, 1105],
                label: '15~64세',
                borderColor: 'rgba(237, 125, 49, 1)',
                backgroundColor: 'rgba(237, 125, 49, 1)',
                type: 'line',
            },
            {
                data: [689, 772, 869, 935, 958, 987, 1010, 1033, 1053, 1089, 1150
                     ,1206 , 1264, 1314, 1356, 1394, 1418, 1455 ],
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
                data: [ 1296 , 252 , 253 , 253 , 18 , 184 , 20 , 97 , 70 , 6 , 12 , 10 , 3 , 14 , 7 ],
                label: '2014',
                backgroundColor: '#E830C6',
                borderWidth: 1,
                borderRadius: 5,
            },
            {
                data: [ 1223,  252,  253,  377,  21,  213,  29,  103,  92, 5,  12,  13,  3,  15,  7 ],
                label: '2019',
                backgroundColor: '#FFCE2C',
                borderWidth: 1,
                borderRadius: 5,
            },
            {
                data: [ 1133 , 235 , 246 , 442 , 22 , 233 , 47 , 103 , 111 , 5 , 11 , 16 , 3 , 17 , 7 ],
                label: '2024',
                backgroundColor: '#3A6CEB',
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    },
    chart_407: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
        datasets: [
            {
                label: '심한장애',
                data: [
                    584043, 645553, 701936, 756140, 816476, 877562, 917596, 956576, 1011900, 1009700, 992343, 980018, 971102, 966466, 965381, 969557, 978526
                    , 983755, 985228, 984303, 983108, 977805, 970289, 966428 ],
                type: 'bar',
                backgroundColor: '#5E18BF',
                order: 1,
            },
            {
                label: '심하지않은장애',
                data: [
                    550134, 648701, 752279, 854854, 972967, 1089764, 1187293, 1290389, 1417647, 1507612, 1526898, 1531141, 1530010, 1527994, 1525025, 1541494, 1567111
                    , 1602095, 1633496, 1648025, 1659814, 1665891, 1662973, 1664928 ],
                type: 'bar',
                backgroundColor: '#FF5356',
                order: 2,
            },
            {
                label: '심한장애 비율',
                data: [51.5, 49.9, 48.3, 46.9, 45.6, 44.6, 43.6, 42.6, 41.6, 40.1, 39.4, 39.0, 38.8, 38.7, 38.8, 38.6, 38.4
                    , 38.0, 37.6, 37.4, 37.2, 37.0, 36.8, 36.7],
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
        labels: ['0~4세', '5~9세', '10~14세', '15-19세', '20~24세', '25~29세', '30~34세', '35~39세', '40~44세', '45~49세', '50~54세', '55~59세', '60~64세', '65세 이상'],
        datasets: [
            {
                data: [ 5.2 , 4.1 , 5.8 , 9.2 , 15.4 , 26.9 , 39.8 , 47.8 , 51.2 , 56.4 , 58.9 , 59.4 , 58.9 , 53.6 ],
                label: '14 지체',
                borderColor: '#18BFB1',
                backgroundColor: '#18BFB1',
                type: 'line',
                borderDash: [10, 5],
            },
            {
                data: [ 12.3 , 6.1 , 5.4 , 5.2 , 5.5 , 5.3 , 5.2 , 5.0 , 4.9 , 5.3 , 6.3 , 7.1 , 8.0 , 15.6 ],
                label: '14 청각',
                borderColor: '#FF5996',
                backgroundColor: '#FF5996',
                type: 'line',
                borderDash: [10, 5],
            },
            {
                data: [ 25.9 , 61.7 , 66.0 , 68.3 , 61.1 , 44.4 , 26.3 , 16.9 , 11.6 , 7.5 , 4.9 , 3.4 , 2.1 , 0.7 ],
                label: '14 발달',
                borderColor: '#59C8FF',
                backgroundColor: '#59C8FF',
                type: 'line',
                borderDash: [10, 5],
            },
            {
                data: [ 3.9 , 1.5 , 3.0 , 6.6 , 8.7 , 11.5 , 16.6 , 25.3 , 36.0 , 43.1 , 45.9 , 50.4 , 52.8 , 46.6 ],
                label: '24 지체',
                borderColor: '#18BFB1',
                backgroundColor: '#18BFB1',
                type: 'line',
            },
            {
                data: [ 12.5 , 3.0 , 3.4 , 3.9 , 4.3 , 4.7 , 5.2 , 5.1 , 5.1 , 5.2 , 5.5 , 6.6 , 9.2 , 25.3 ],
                label: '24 청각',
                borderColor: '#FF5996',
                backgroundColor: '#FF5996',
                type: 'line',
            },
            {
                data: [ 26.4 , 74.5 , 79.7 , 75.9 , 69.3 , 63.5 , 52.2 , 37.6 , 22.8 , 14.9 , 10.1 , 6.4 , 4.1 , 1.1 ],
                label: '24 발달',
                borderColor: '#59C8FF',
                backgroundColor: '#59C8FF',
                type: 'line',
            },
        ],
    },
};
