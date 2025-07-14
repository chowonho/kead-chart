const tableDataSet = {
    //최근 5개년 장애인 고용률
    chart_101: {
        meta: {
            id: '101',
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '최근 5개년 장애인 고용률',
            cols: [{ width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }],
            headers: [
                [
                    {
                        title: '구분',
                        colSpan: 2,
                    },
                    {
                        title: '15세이상인구',
                    },
                    {
                        title: '취업자',
                    },
                    {
                        title: '고용률',
                    },
                ],
            ],
        },
        data: [
            {
                a: { text: '장애인', class: 'ac' },
                child: [
                    { A: { text: '2020', class: 'ac' }, B: { text: ' 2,562,873 ' }, C: { text: ' 893,392 ' }, D: { text: '34.9' } },
                    { A: { text: '2021', class: 'ac' }, B: { text: ' 2,574,907 ' }, C: { text: ' 891,804 ' }, D: { text: '34.6' } },
                    { A: { text: '2022', class: 'ac' }, B: { text: ' 2,583,530 ' }, C: { text: ' 940,575 ' }, D: { text: '36.4' } },
                    { A: { text: '2023', class: 'ac' }, B: { text: ' 2,589,047 ' }, C: { text: ' 935,261 ' }, D: { text: '36.1' } },
                    { A: { text: '2024', class: 'ac' }, B: { text: ' 2,574,398 ' }, C: { text: ' 871,339 ' }, D: { text: '33.8' } },
                ],
            },
            {
                a: { text: '전체인구', class: 'ac' },
                child: [
                    { A: { text: '2020', class: 'ac' }, B: { text: ' 44,756,000 ' }, C: { text: ' 26,930,000 ' }, D: { text: '60.2' } },
                    { A: { text: '2021', class: 'ac' }, B: { text: ' 45,049,000 ' }, C: { text: ' 27,550,000 ' }, D: { text: '61.2' } },
                    { A: { text: '2022', class: 'ac' }, B: { text: ' 45,245,000 ' }, C: { text: ' 28,485,000 ' }, D: { text: '63.0' } },
                    { A: { text: '2023', class: 'ac' }, B: { text: ' 45,379,000 ' }, C: { text: ' 28,835,000 ' }, D: { text: '63.5' } },
                    { A: { text: '2024', class: 'ac' }, B: { text: ' 45,543,000 ' }, C: { text: ' 28,915,000 ' }, D: { text: '63.5' } },
                ],
            },
        ],
    },

    //최근 5개년 장애인 실업률
    chart_102: {
        meta: {
            id: '102',
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            annotation: '(단위 : 명, %)',
            tableTitle: '최근 5개년 장애인 실업률',
            cols: [{ width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }],
            headers: [
                {
                    title: '구분',
                    colSpan: 2,
                },
                {
                    title: '15세이상인구',
                },
                {
                    title: '실업자',
                },
                {
                    title: '실업률',
                },
            ],
        },
        data: [
            {
                a: { text: '장애인', class: 'ac' },
                child: [
                    { A: { text: '2020', class: 'ac' }, B: { text: ' 2,562,873 ' }, C: { text: ' 55,654 ' }, D: { text: '5.9' } },
                    { A: { text: '2021', class: 'ac' }, B: { text: ' 2,574,907 ' }, C: { text: ' 68,146 ' }, D: { text: '7.1' } },
                    { A: { text: '2022', class: 'ac' }, B: { text: ' 2,583,530 ' }, C: { text: ' 44,424 ' }, D: { text: '4.5' } },
                    { A: { text: '2023', class: 'ac' }, B: { text: ' 2,589,047 ' }, C: { text: ' 33,087 ' }, D: { text: '3.4' } },
                    { A: { text: '2024', class: 'ac' }, B: { text: ' 2,574,398 ' }, C: { text: ' 46,789 ' }, D: { text: '5.1' } },
                ],
            },
            {
                a: { text: '전체인구', class: 'ac' },
                child: [
                    { A: { text: '2020', class: 'ac' }, B: { text: ' 44,756,000 ' }, C: { text: ' 1,278,000 ' }, D: { text: '4.5' } },
                    { A: { text: '2021', class: 'ac' }, B: { text: ' 45,049,000 ' }, C: { text: ' 1,148,000 ' }, D: { text: '4.0' } },
                    { A: { text: '2022', class: 'ac' }, B: { text: ' 45,245,000 ' }, C: { text: ' 889,000 ' }, D: { text: '3.0' } },
                    { A: { text: '2023', class: 'ac' }, B: { text: ' 45,379,000 ' }, C: { text: ' 787,000 ' }, D: { text: '2.7' } },
                    { A: { text: '2024', class: 'ac' }, B: { text: ' 45,543,000 ' }, C: { text: ' 884,000 ' }, D: { text: '3.0' } },
                ],
            },
        ],
    },

    //최근 5개년 장애인 경제활동참가율
    chart_103: {
        meta: {
            id: '103',
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '최근 5개년 장애인 경제활동참가율',
            cols: [{ width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }],
            headers: [
                {
                    title: '구분',
                    colSpan: 2,
                },
                {
                    title: '15세이상인구',
                },
                {
                    title: '경제활동인구',
                },
                {
                    title: '경제활동참가율',
                },
            ],
        },
        data: [
            {
                a: { text: '장애인', class: 'ac' },
                child: [
                    { A: { text: '2020', class: 'ac' }, B: { text: ' 2,562,873 ' }, C: { text: ' 949,047 ' }, D: { text: '37.0' } },
                    { A: { text: '2021', class: 'ac' }, B: { text: ' 2,574,907 ' }, C: { text: ' 959,950 ' }, D: { text: '37.3' } },
                    { A: { text: '2022', class: 'ac' }, B: { text: ' 2,583,530 ' }, C: { text: ' 984,999 ' }, D: { text: '38.1' } },
                    { A: { text: '2023', class: 'ac' }, B: { text: ' 2,589,047 ' }, C: { text: ' 968,348 ' }, D: { text: '37.4' } },
                    { A: { text: '2024', class: 'ac' }, B: { text: ' 2,574,398 ' }, C: { text: ' 918,128 ' }, D: { text: '35.7' } },
                ],
            },
            {
                a: { text: '전체인구', class: 'ac' },
                child: [
                    { A: { text: '2020', class: 'ac' }, B: { text: ' 44,756,000 ' }, C: { text: ' 28,209,000 ' }, D: { text: '63.0' } },
                    { A: { text: '2021', class: 'ac' }, B: { text: ' 45,049,000 ' }, C: { text: ' 28,698,000 ' }, D: { text: '63.7' } },
                    { A: { text: '2022', class: 'ac' }, B: { text: ' 45,245,000 ' }, C: { text: ' 29,374,000 ' }, D: { text: '64.9' } },
                    { A: { text: '2023', class: 'ac' }, B: { text: ' 45,379,000 ' }, C: { text: ' 29,623,000 ' }, D: { text: '65.3' } },
                    { A: { text: '2024', class: 'ac' }, B: { text: ' 45,543,000 ' }, C: { text: ' 29,799,000 ' }, D: { text: '65.4' } },
                ],
            },
        ],
    },

    //최근 5개년 장애인 비경제활동인구 비율
    chart_104: {
        meta: {
            id: '104',
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '최근 5개년 장애인 비경제활동인구 비율',
            cols: [{ width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }],
            headers: [
                {
                    title: '구분',
                    colSpan: 2,
                },
                {
                    title: '15세이상인구',
                },
                {
                    title: '비경제활동인구',
                },
                {
                    title: '비경제활동인구 비율',
                },
            ],
        },
        data: [
            {
                a: { text: '장애인', class: 'ac' },
                child: [
                    { A: { text: '2020', class: 'ac' }, B: { text: ' 2,562,873 ' }, C: { text: ' 1,613,826 ' }, D: { text: '63.0' } },
                    { A: { text: '2021', class: 'ac' }, B: { text: ' 2,574,907 ' }, C: { text: ' 1,614,957 ' }, D: { text: '62.7' } },
                    { A: { text: '2022', class: 'ac' }, B: { text: ' 2,583,530 ' }, C: { text: ' 1,598,531 ' }, D: { text: '61.9' } },
                    { A: { text: '2023', class: 'ac' }, B: { text: ' 2,589,047 ' }, C: { text: ' 1,620,699 ' }, D: { text: '62.6' } },
                    { A: { text: '2024', class: 'ac' }, B: { text: ' 2,574,398 ' }, C: { text: ' 1,656,270 ' }, D: { text: '64.3' } },
                ],
            },
            {
                a: { text: '전체인구', class: 'ac' },
                child: [
                    { A: { text: '2020', class: 'ac' }, B: { text: ' 44,756,000 ' }, C: { text: ' 16,548,000 ' }, D: { text: '37.0' } },
                    { A: { text: '2021', class: 'ac' }, B: { text: ' 45,049,000 ' }, C: { text: ' 16,351,000 ' }, D: { text: '36.3' } },
                    { A: { text: '2022', class: 'ac' }, B: { text: ' 45,245,000 ' }, C: { text: ' 15,871,000 ' }, D: { text: '35.1' } },
                    { A: { text: '2023', class: 'ac' }, B: { text: ' 45,379,000 ' }, C: { text: ' 15,756,000 ' }, D: { text: '34.7' } },
                    { A: { text: '2024', class: 'ac' }, B: { text: ' 45,543,000 ' }, C: { text: ' 15,744,000 ' }, D: { text: '34.6' } },
                ],
            },
        ],
    },

    //성별 고용률
    chart_105: {
        meta: {
            id: '105',
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '성별 고용률',
            cols: [{ width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }],
            headers: [
                {
                    title: '구분',
                    colSpan: 2,
                },
                {
                    title: '15세이상인구',
                },
                {
                    title: '취업자',
                },
                {
                    title: '고용률',
                },
            ],
        },
        data: [
            {
                a: { text: '장애인', class: 'ac' },
                child: [
                    { A: { text: '남성', class: 'ac' }, B: { text: ' 1,483,788 ' }, C: { text: ' 628,060 ' }, D: { text: '42.3' } },
                    { A: { text: '여성', class: 'ac' }, B: { text: ' 1,090,610 ' }, C: { text: ' 243,279 ' }, D: { text: '22.3' } },
                    { A: { text: '전체', class: 'ac' }, B: { text: ' 2,574,398 ' }, C: { text: ' 871,339 ' }, D: { text: '33.8' } },
                ],
            },
            {
                a: { text: '전체인구', class: 'ac' },
                child: [
                    { A: { text: '남성', class: 'ac' }, B: { text: ' 22,440,000 ' }, C: { text: ' 16,071,000 ' }, D: { text: '71.6' } },
                    { A: { text: '여성', class: 'ac' }, B: { text: ' 23,103,000 ' }, C: { text: ' 12,844,000 ' }, D: { text: '55.6' } },
                    { A: { text: '전체', class: 'ac' }, B: { text: ' 45,543,000 ' }, C: { text: ' 28,915,000 ' }, D: { text: '63.5' } },
                ],
            },
        ],
    },

    //연령별 고용률
    chart_106: {
        meta: {
            id: '106',
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '연령별 고용률',
            cols: 4,
            headers: [
                {
                    title: '구분',
                },
                {
                    title: '15세이상인구',
                },
                {
                    title: '취업자',
                },
                {
                    title: '고용률',
                },
            ],
        },
        data: [
            { A: { text: '15~29세', class: 'ac' }, B: { text: ' 125,643 ' }, C: { text: ' 45,347 ' }, D: { text: '36.1' } },
            { A: { text: '30~39세', class: 'ac' }, B: { text: ' 109,676 ' }, C: { text: ' 56,919 ' }, D: { text: '51.9' } },
            { A: { text: '40~49세', class: 'ac' }, B: { text: ' 209,775 ' }, C: { text: ' 119,204 ' }, D: { text: '56.8' } },
            { A: { text: '50~59세', class: 'ac' }, B: { text: ' 397,716 ' }, C: { text: ' 202,508 ' }, D: { text: '50.9' } },
            { A: { text: '60세 이상', class: 'ac' }, B: { text: ' 1,731,588 ' }, C: { text: ' 447,361 ' }, D: { text: '25.8' } },
            { A: { text: '15~64세', class: 'ac' }, B: { text: ' 1,146,781 ' }, C: { text: ' 554,985 ' }, D: { text: '48.4' } },
            { A: { text: '전체', class: 'ac' }, B: { text: ' 2,574,398 ' }, C: { text: ' 871,339 ' }, D: { text: '33.8' } },
        ],
    },

    //장애유형별 고용률
    chart_107: {
        meta: {
            id: '107',
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '장애유형별 고용률',
            cols: 4,
            headers: [
                {
                    title: '구분',
                },
                {
                    title: '15세이상인구',
                },
                {
                    title: '취업자',
                },
                {
                    title: '고용률',
                },
            ],
        },
        data: [
            { A: { text: '지체', class: 'ac' }, B: { text: ' 1,151,818 ' }, C: { text: ' 487,514 ' }, D: { text: '42.3' } },
            { A: { text: '뇌병변', class: 'ac' }, B: { text: ' 232,986 ' }, C: { text: ' 31,760 ' }, D: { text: '13.6' } },
            { A: { text: '시각', class: 'ac' }, B: { text: ' 247,110 ' }, C: { text: ' 103,278 ' }, D: { text: '41.8' } },
            { A: { text: '청각', class: 'ac' }, B: { text: ' 430,119 ' }, C: { text: ' 116,872 ' }, D: { text: '27.2' } },
            { A: { text: '발달', class: 'ac' }, B: { text: ' 223,772 ' }, C: { text: ' 65,192 ' }, D: { text: '29.1' } },
            { A: { text: '기타', class: 'ac' }, B: { text: ' 288,593 ' }, C: { text: ' 66,724 ' }, D: { text: '23.1' } },
            { A: { text: '전체', class: 'ac' }, B: { text: ' 2,574,398 ' }, C: { text: ' 871,339 ' }, D: { text: '33.8' } },
        ],
    },

    //장애유형별 고용률
    chart_108: {
        meta: {
            id: '108',
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '장애정도별 고용률',
            cols: 4,
            headers: [
                {
                    title: '구분',
                },
                {
                    title: '15세이상인구',
                },
                {
                    title: '취업자',
                },
                {
                    title: '고용률',
                },
            ],
        },
        data: [
            { A: { text: '중증', class: 'ac' }, B: { text: ' 788,297 ' }, C: { text: ' 183,685 ' }, D: { text: '23.3' } },
            { A: { text: '경증', class: 'ac' }, B: { text: ' 1,786,101 ' }, C: { text: ' 687,654 ' }, D: { text: '38.5' } },
            { A: { text: '전체', class: 'ac' }, B: { text: ' 2,574,398 ' }, C: { text: ' 871,339 ' }, D: { text: '33.8' } },
        ],
    },

    //성별 경제활동참가율
    chart_109: {
        meta: {
            id: '109',
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '성별 경제활동참가율',
            cols: [{ width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }],
            headers: [
                {
                    title: '구분',
                    colSpan: 2,
                },
                {
                    title: '15세이상인구',
                },
                {
                    title: '경제활동인구',
                },
                {
                    title: '경제활동참가율',
                },
            ],
        },
        data: [
            {
                a: { text: '장애인', class: 'ac' },
                child: [
                    { A: { text: '남성', class: 'ac' }, B: { text: ' 1,483,788 ' }, C: { text: ' 658,049 ' }, D: { text: '44.3' } },
                    { A: { text: '여성', class: 'ac' }, B: { text: ' 1,090,610 ' }, C: { text: ' 260,079 ' }, D: { text: '23.8' } },
                    { A: { text: '전체', class: 'ac' }, B: { text: ' 2,574,398 ' }, C: { text: ' 918,128 ' }, D: { text: '35.7' } },
                ],
            },
            {
                a: { text: '전체인구', class: 'ac' },
                child: [
                    { A: { text: '남성', class: 'ac' }, B: { text: ' 22,440,000 ' }, C: { text: ' 16,593,000 ' }, D: { text: '73.9' } },
                    { A: { text: '여성', class: 'ac' }, B: { text: ' 23,103,000 ' }, C: { text: ' 13,206,000 ' }, D: { text: '57.2' } },
                    { A: { text: '전체', class: 'ac' }, B: { text: ' 45,543,000 ' }, C: { text: ' 29,799,000 ' }, D: { text: '65.4' } },
                ],
            },
        ],
    },

    //연령별 경제활동참가율
    chart_110: {
        meta: {
            id: '110',
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '연령별 경제활동참가율',
            cols: 4,
            headers: [
                {
                    title: '구분',
                },
                {
                    title: '15세이상인구',
                },
                {
                    title: '경제활동인구',
                },
                {
                    title: '경제활동참가율',
                },
            ],
        },
        data: [
            { A: { text: '15~29세', class: 'ac' }, B: { text: ' 125,643 ' }, C: { text: ' 48,649 ' }, D: { text: ' 38.7 ' } },
            { A: { text: '30~39세', class: 'ac' }, B: { text: ' 109,676 ' }, C: { text: ' 58,290 ' }, D: { text: ' 53.1 ' } },
            { A: { text: '40~49세', class: 'ac' }, B: { text: ' 209,775 ' }, C: { text: ' 122,056 ' }, D: { text: ' 58.2 ' } },
            { A: { text: '50~59세', class: 'ac' }, B: { text: ' 397,716 ' }, C: { text: ' 212,551 ' }, D: { text: ' 53.4 ' } },
            { A: { text: '60세 이상', class: 'ac' }, B: { text: ' 1,731,588 ' }, C: { text: ' 476,582 ' }, D: { text: ' 27.5 ' } },
            { A: { text: '15~64세', class: 'ac' }, B: { text: ' 1,146,781 ' }, C: { text: ' 580,547 ' }, D: { text: ' 50.6 ' } },
            { A: { text: '전체', class: 'ac' }, B: { text: ' 2,574,398 ' }, C: { text: ' 918,128 ' }, D: { text: ' 35.7 ' } },
        ],
    },

    //장애유형별 경제활동참가율
    chart_111: {
        meta: {
            id: '111',
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '장애유형별 경제활동참가율',
            cols: 4,
            headers: [
                {
                    title: '구분',
                },
                {
                    title: '15세이상인구',
                },
                {
                    title: '경제활동인구',
                },
                {
                    title: '경제활동참가율',
                },
            ],
        },
        data: [
            { A: { text: '지체', class: 'ac' }, B: { text: ' 1,151,818 ' }, C: { text: ' 514,620 ' }, D: { text: ' 44.7 ' } },
            { A: { text: '뇌병변', class: 'ac' }, B: { text: ' 232,986 ' }, C: { text: ' 34,375 ' }, D: { text: ' 14.8 ' } },
            { A: { text: '시각', class: 'ac' }, B: { text: ' 247,110 ' }, C: { text: ' 107,974 ' }, D: { text: ' 43.7 ' } },
            { A: { text: '청각', class: 'ac' }, B: { text: ' 430,119 ' }, C: { text: ' 122,074 ' }, D: { text: ' 28.4 ' } },
            { A: { text: '발달', class: 'ac' }, B: { text: ' 223,772 ' }, C: { text: ' 68,063 ' }, D: { text: ' 30.4 ' } },
            { A: { text: '기타', class: 'ac' }, B: { text: ' 288,593 ' }, C: { text: ' 71,021 ' }, D: { text: ' 24.6 ' } },
            { A: { text: '전체', class: 'ac' }, B: { text: ' 2,574,398 ' }, C: { text: ' 918,128 ' }, D: { text: ' 35.7 ' } },
        ],
    },

    //장애정도별 경제활동참가율
    chart_112: {
        meta: {
            id: '112',
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '장애정도별 경제활동참가율',
            cols: 4,
            headers: [
                {
                    title: '구분',
                },
                {
                    title: '15세이상인구',
                },
                {
                    title: '경제활동인구',
                },
                {
                    title: '경제활동참가율',
                },
            ],
        },
        data: [
            { A: { text: '중증', class: 'ac' }, B: { text: ' 788,297 ' }, C: { text: ' 190,672 ' }, D: { text: ' 24.2 ' } },
            { A: { text: '경증', class: 'ac' }, B: { text: ' 1,786,101 ' }, C: { text: ' 727,456 ' }, D: { text: ' 40.7 ' } },
            { A: { text: '전체', class: 'ac' }, B: { text: ' 2,574,398 ' }, C: { text: ' 918,128 ' }, D: { text: ' 35.7 ' } },
        ],
    },
    //장애인 취업자의 종사상지위
    chart_113: {
        meta: {
            id: '113',
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '장애인 취업자의 종사상지위',
            cols: [{ width: '20%' }, { width: '30%' }, { width: '25%' }, { width: '25%' }],
            headers: [
                {
                    title: '구분',
                    colSpan: 2,
                },
                {
                    title: '인원',
                },
                {
                    title: '비율',
                },
            ],
        },
        data: [
            {
                a: { text: '임금근로자', class: 'ac' },
                child: [
                    { A: { text: '상용근로자', class: 'ac' }, B: { text: '342,068' }, C: { text: '39.3' } },
                    { A: { text: '임시근로자', class: 'ac' }, B: { text: '221,398' }, C: { text: '25.4' } },
                    { A: { text: '일용근로자', class: 'ac' }, B: { text: '70,604' }, C: { text: '8.1' } },
                ],
            },
            {
                a: { text: '비임금근로자', class: 'ac' },
                child: [
                    { A: { text: '고용원이 있는 자영업자', class: 'ac' }, B: { text: '43,143' }, C: { text: '5.0' } },
                    { A: { text: '고용원이 없는 자영업자', class: 'ac' }, B: { text: '172,563' }, C: { text: '19.8' } },
                    { A: { text: '무급가족종사자', class: 'ac' }, B: { text: '21,564' }, C: { text: '2.5' } },
                ],
            },
            {
                a: { text: '전체', colSpan: 2, class: 'ac' },
                b: { text: '871,339' },
                c: { text: '100.0' },
            },
        ],
    },
    //장애인 취업자의 직장(일자리) 산업(상위 5개)
    chart_114: {
        meta: {
            id: '114',
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '장애인 취업자의 직장(일자리) 산업',
            cols: [{ width: '40%' }, { width: '30%' }, { width: '30%' }],
            headers: [
                {
                    title: '구분',
                },
                {
                    title: '인원',
                },
                {
                    title: '비율',
                },
            ],
        },
        data: [
            { A: { text: '농업, 임업, 어업 및 광업', class: 'ac' }, B: { text: '90,759' }, C: { text: '10.4' } },
            { A: { text: '제조업', class: 'ac' }, B: { text: '117,712' }, C: { text: '13.5' } },
            { A: { text: '전기, 가스, 증기 및 공기 조절 공급업', class: 'ac' }, B: { text: '973' }, C: { text: '0.1' } },
            { A: { text: '수도, 하수 및 폐기물 처리, 원료재생', class: 'ac' }, B: { text: '7,392' }, C: { text: '0.8' } },
            { A: { text: '건설업', class: 'ac' }, B: { text: '72,904' }, C: { text: '8.4' } },
            { A: { text: '도매 및 소매업', class: 'ac' }, B: { text: '69,284' }, C: { text: '8.0' } },
            { A: { text: '운수 및 창고업', class: 'ac' }, B: { text: '67,761' }, C: { text: '7.8' } },
            { A: { text: '숙박 및 음식점업', class: 'ac' }, B: { text: '30,546' }, C: { text: '3.5' } },
            { A: { text: '정보통신업', class: 'ac' }, B: { text: '15,299' }, C: { text: '1.8' } },
            { A: { text: '금융 및 보험업', class: 'ac' }, B: { text: '10,829' }, C: { text: '1.2' } },
            { A: { text: '부동산업', class: 'ac' }, B: { text: '12,326' }, C: { text: '1.4' } },
            { A: { text: '전문, 과학 및 기술 서비스업', class: 'ac' }, B: { text: '14,591' }, C: { text: '1.7' } },
            { A: { text: '사업시설관리, 사업 지원 및 임대 서비스업', class: 'ac' }, B: { text: '63,297' }, C: { text: '7.3' } },
            { A: { text: '공공행정, 국방 및 사회보장 행정', class: 'ac' }, B: { text: '75,708' }, C: { text: '8.7' } },
            { A: { text: '교육 서비스업', class: 'ac' }, B: { text: '28,852' }, C: { text: '3.3' } },
            { A: { text: '보건업 및 사회복지 서비스업', class: 'ac' }, B: { text: '144,115' }, C: { text: '16.5' } },
            { A: { text: '예술, 스포츠 및 여가 관련 서비스업', class: 'ac' }, B: { text: '15,708' }, C: { text: '1.8' } },
            { A: { text: '협회 및 단체, 수리 및 기타 개인 서비스업', class: 'ac' }, B: { text: '30,469' }, C: { text: '3.5' } },
            { A: { text: '기타 및 모름/응답거절', class: 'ac' }, B: { text: '2,814' }, C: { text: '0.3' } },
            { A: { text: '전체', class: 'ac' }, B: { text: '871,339' }, C: { text: '100.0' } },
        ],
    },
    //장애인 취업자의 직업(상위 5개)
    chart_115: {
        meta: {
            id: '110',
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '장애인 취업자의 직업',
            cols: [{ width: '40%' }, { width: '30%' }, { width: '30%' }],
            headers: [
                {
                    title: '구분',
                },
                {
                    title: '인원',
                },
                {
                    title: '비율',
                },
            ],
        },
        data: [
            { A: { text: '관리자', class: 'ac' }, B: { text: '6,685' }, C: { text: '0.8' } },
            { A: { text: '전문가 및 관련 종사자', class: 'ac' }, B: { text: '72,047' }, C: { text: '8.3' } },
            { A: { text: '사무 종사자', class: 'ac' }, B: { text: '135,377' }, C: { text: '15.5' } },
            { A: { text: '서비스 종사자', class: 'ac' }, B: { text: '65,360' }, C: { text: '7.5' } },
            { A: { text: '판매 종사자', class: 'ac' }, B: { text: '53,506' }, C: { text: '6.1' } },
            { A: { text: '농림어업 숙련 종사자', class: 'ac' }, B: { text: '86,069' }, C: { text: '9.9' } },
            { A: { text: '기능원 및 관련 기능 종사자', class: 'ac' }, B: { text: '76,495' }, C: { text: '8.8' } },
            { A: { text: '장치·기계조작 및 조립 종사자', class: 'ac' }, B: { text: '101,395' }, C: { text: '11.6' } },
            { A: { text: '단순 노무 종사자', class: 'ac' }, B: { text: '272,549' }, C: { text: '31.3' } },
            { A: { text: '기타 및 모름/응답거절', class: 'ac' }, B: { text: '1,858' }, C: { text: '0.2' } },
            { A: { text: '전체', class: 'ac' }, B: { text: '871,339' }, C: { text: '100.0' } },
        ],
    },
    //장애인 취업자의 직장(일자리) 유형
    chart_116: {
        meta: {
            id: '110',
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '장애인 취업자의 직장(일자리) 유형',
            cols: [{ width: '50%' }, { width: '25%' }, { width: '25%' }],
            headers: [
                {
                    title: '구분',
                },
                {
                    title: '인원',
                },
                {
                    title: '비율',
                },
            ],
        },
        data: [
            { A: { text: '장애인 직업재활시설 일자리', class: 'ac' }, B: { text: ' 31,352 ' }, C: { text: ' 3.6 ' } },
            { A: { text: '정부재정지원 일자리', class: 'ac' }, B: { text: ' 140,365 ' }, C: { text: ' 16.1 ' } },
            { A: { text: '공무원, 교사 등 정부 및 공공기관 일자리', class: 'ac' }, B: { text: ' 55,711 ' }, C: { text: ' 6.4 ' } },
            { A: { text: '그 외 일반사업체', class: 'ac' }, B: { text: ' 643,911 ' }, C: { text: ' 73.9 ' } },
            { A: { text: '전체', class: 'ac' }, B: { text: ' 871,339 ' }, C: { text: ' 100.0 ' } },
        ],
    },

    //장애인 임금근로자의 최근 3개월 월평균 임금
    chart_117: {
        meta: {
            id: '110',
            tableInfo: { class: 'table' },
            annotation: '(단위 : 만원)',
            tableTitle: '장애인 임금근로자의 최근 3개월 월평균 임금',
            cols: [{ width: '50%' }, { width: '50%' }],
            headers: [
                {
                    title: '구분',
                },
                {
                    title: '최근 3개월 월평균 임금',
                },
            ],
        },
        data: [
            { A: { text: '장애인', class: 'ac' }, B: { text: ' 206.5 ' } },
            { A: { text: '전체 인구', class: 'ac' }, B: { text: '312.8' } },
        ],
    },

    //장애인 임금근로자의 비정규직 규모
    chart_118: {
        meta: {
            id: '109',
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '장애인 임금근로자의 비정규직 규모',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [
                {
                    title: '구분',
                    colSpan: 2,
                },
                {
                    title: '인원',
                },
                {
                    title: '비율',
                },
            ],
        },
        data: [
            {
                a: { text: '장애인', class: 'ac' },
                child: [
                    { A: { text: '정규직', class: 'ac' }, B: { text: ' 209,429 ' }, C: { text: '33.0' } },
                    { A: { text: '비정규직', class: 'ac' }, B: { text: ' 424,641 ' }, C: { text: '67.0' } },
                    { A: { text: '전체', class: 'ac' }, B: { text: ' 634,070 ' }, C: { text: '100.0' } },
                ],
            },
            {
                a: { text: '전체인구', class: 'ac' },
                child: [
                    { A: { text: '정규직', class: 'ac' }, B: { text: ' 13,685,000 ' }, C: { text: '61.8' } },
                    { A: { text: '비정규직', class: 'ac' }, B: { text: ' 8,459,000 ' }, C: { text: '38.2' } },
                    { A: { text: '전체', class: 'ac' }, B: { text: ' 22,143,000 ' }, C: { text: '100.0' } },
                ],
            },
        ],
    },
    //장애인 비경제활동인구의 지난주 활동상태
    chart_119: {
        meta: {
            id: '109',
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '장애인 비경제활동인구의 지난주 활동상태',
            cols: [{ width: '20%' }, { width: '20%' }, { width: '20%' }, { width: '20%' }],
            headers: [
                {
                    title: '구분',
                    colSpan: 2,
                },
                {
                    title: '인원',
                },
                {
                    title: '비율',
                },
            ],
        },
        data: [
            {
                a: { text: '지난주 활동상태', class: 'ac' },
                child: [
                    { A: { text: '육아', class: 'ac' }, C: { text: '2,532' }, D: { text: '0.2' } },
                    { A: { text: '가사', class: 'ac' }, C: { text: '217,612' }, D: { text: '13.1' } },
                    { A: { text: '재학·수강 등', class: 'ac' }, C: { text: '36,491' }, D: { text: '2.2' } },
                    { A: { text: '연로', class: 'ac' }, C: { text: '257,989' }, D: { text: '15.6' } },
                    { A: { text: '심신장애', class: 'ac' }, C: { text: '618,992' }, D: { text: '37.4' } },
                    { A: { text: '기타(쉬었음)', class: 'ac' }, B: { text: '494,844' }, C: { text: '29.9' } },
                    { A: { text: '기타(쉬었음 외)', class: 'ac' }, B: { text: '27,810' }, C: { text: '1.7' } },
                ],
            },
            {
                a: { text: '취업준비', class: 'ac', colSpan: 2 },
                b: { text: '19,838' },
                c: { text: '1.2' },
            },
            {
                a: { text: '전체', class: 'ac', colSpan: 2 },
                b: { text: '1,656,270' },
                c: { text: '100.0' },
            },
        ],
    },
    //장애인 비경제활동인구의 향후 일할 의사
    chart_120: {
        meta: {
            id: '109',
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '장애인 비경제활동인구의 향후 일할 의사',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분', colSpan: 2, rowSpan: 3 }, { title: '인원' }, { title: '비율' }],
        },
        data: [
            {
                a: { text: '1년 내 ', class: 'ac' },
                child: [
                    { A: { text: '일할 의사 있음', class: 'ac' }, B: { text: '127,716' }, C: { text: '7.7' } },
                    { A: { text: '일할 의사 없음', class: 'ac' }, B: { text: '1,528,554' }, C: { text: '92.3' } },
                    { A: { text: '소계', class: 'ac' }, B: { text: '1,656,270' }, C: { text: '100.0' } },
                ],
            },
            {
                a: { text: '1년 내는 아니더라도 향후 언젠가', class: 'ac' },
                child: [
                    { A: { text: '일할 의사 있음', class: 'ac' }, B: { text: '52,739' }, C: { text: '3.5' } },
                    { A: { text: '일할 의사 없음', class: 'ac' }, B: { text: '1,475,815' }, C: { text: '96.5' } },
                    { A: { text: '소계', class: 'ac' }, B: { text: '1,528,554' }, C: { text: '100.0' } },
                ],
            },
            {
                a: { text: '향후 일할 의사 전체', class: 'ac' },
                child: [
                    { A: { text: '일할 의사 있음', class: 'ac' }, B: { text: '180,455' }, C: { text: '10.9' } },
                    { A: { text: '일할 의사 없음', class: 'ac' }, B: { text: '1,475,815' }, C: { text: '89.1' } },
                    { A: { text: '소계', class: 'ac' }, B: { text: '1,656,270' }, C: { text: '100.0' } },
                ],
            },
        ],
    },

    //장애인 고용기업체 비율
    chart_201: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '장애인 고용체 비율',
            cols: [{ width: '110px' }, { width: '110px' }, { width: '80px' }, { width: '110px' }, { width: '80px' }, { width: '110px' }, { width: '80px' }, { width: '110px' }],
            headers: [
                [
                    { title: '구분', rowSpan: 2 },
                    { title: '전체', colSpan: 2 },
                    { title: '장애인 고용기업체', colSpan: 2 },
                    { title: '장애인미고용기업체', colSpan: 2 },
                    { title: '장애인 고용기업체 비율', rowSpan: 2 },
                ],
                [{ title: '기업체 수 ' }, { title: '비율' }, { title: '기업체 수 ' }, { title: '비율' }, { title: '기업체 수 ' }, { title: '비율' }],
            ],
        },
        data: [
            { A : {text : '1~4명', class : 'ac'}, B : {text :' 1,229,492 '}, C : {text :'69.6'} , D : {text :'13,241'}, E : {text :'22.4 '}, F : {text :'1,216,251'}, G : {text :'71.3 '}, H : {text :'1.1 '}},
            { A : {text : '5~49명', class : 'ac'}, B : {text :' 501,603 '}, C : {text :'28.4'} , D : {text :'23,674'}, E : {text :'40.1 '}, F : {text :'477,929'}, G : {text :'28.0 '}, H : {text :'4.7 '}},
            { A : {text : '50~299명', class : 'ac'}, B : {text :' 30,243 '}, C : {text :'1.7'} , D : {text :'17,814'}, E : {text :'30.2 '}, F : {text :'12,429'}, G : {text :'0.7 '}, H : {text :'58.9 '}},
            { A : {text : '300~999명', class : 'ac'}, B : {text :' 3,454 '}, C : {text :'0.2'} , D : {text :'3,340'}, E : {text :'5.7 '}, F : {text :'113'}, G : {text :'0.0 '}, H : {text :'96.7 '}},
            { A : {text : '1,000명 이상', class : 'ac'}, B : {text :' 969 '}, C : {text :'0.1'} , D : {text :'964'}, E : {text :'1.6 '}, F : {text :'5'}, G : {text :'0.0 '}, H : {text :'99.5 '}},
            { A : {text : '전체', class : 'ac'}, B : {text :' 1,765,761 '}, C : {text :'100.0 '} , D : {text :'59,033'}, E : {text :'100.0 '}, F : {text :'1,706,727'}, G : {text :'100.0 '}, H : {text :'3.3 '}}

        ],
    },
    //장애인 근로자 비율
    chart_202: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '장애인 근로자 비율',
            cols: [{ width: '30%' }, { width: '30%' }, { width: '20%' }, { width: '20%' }, { width: '20%' }, { width: '20%' }],
            headers: [
                [
                    { title: '구분', rowSpan: 2 },
                    { title: '상시근로자', colSpan: 4 },
                    { title: '장애인 고용률', rowSpan: 2 },
                ],
                [{ title: '전체' }, { title: '비율' }, { title: '장애인' }, { title: '비율' }],
            ],
        },
        data: [
           { A : {text : '1~4명', class : 'ac'}, B : {text :' 2,665,209 '}, C : {text :'16.6 '} , D : {text :'14,853'}, E : {text :'6.0 '}, F : {text :'0.56 '}},
            { A : {text : '5~49명', class : 'ac'}, B : {text :' 5,656,690 '}, C : {text :'35.3 '} , D : {text :'48,101'}, E : {text :'19.3 '}, F : {text :'0.85 '}},
            { A : {text : '50~299명', class : 'ac'}, B : {text :' 3,087,527 '}, C : {text :'19.3 '} , D : {text :'68,564'}, E : {text :'27.6 '}, F : {text :'2.22 '}},
            { A : {text : '300~999명', class : 'ac'}, B : {text :' 1,703,004 '}, C : {text :'10.6 '} , D : {text :'46,114'}, E : {text :'18.5 '}, F : {text :'2.71 '}},
            { A : {text : '1,000명 이상', class : 'ac'}, B : {text :' 2,918,018 '}, C : {text :'18.2 '} , D : {text :'71,149'}, E : {text :'28.6 '}, F : {text :'2.44 '}},
            { A : {text : '전체', class : 'ac'}, B : {text :' 16,030,448 '}, C : {text :'100.0 '} , D : {text :'248,781'}, E : {text :'100.0 '}, F : {text :'1.55 '}}

        ],
    },
    //성별 장애인 근로자 비율
    chart_203: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '성별 장애인 근로자 비율',
            annotation: '(단위 : 명, %)',
            cols: [{ width: '30%' }, { width: '30%' }, { width: '20%' }, { width: '20%' }, { width: '20%' }, { width: '20%' }],
            headers: [
                [
                    { title: '구분', rowSpan: 2 },
                    { title: '상시근로자', colSpan: 4 },
                    { title: '장애인 고용률', rowSpan: 2 },
                ],
                [{ title: '전체' }, { title: '비율' }, { title: '장애인' }, { title: '비율' }],
            ],
        },
        data: [
           { A : {text : '남성', class : 'ac'}, B : {text :'9,653,132'}, C : {text :'60.2'} , D : {text :'178,743'}, E : {text :'71.8'}, F : {text :'1.85'}},
            { A : {text : '여성', class : 'ac'}, B : {text :'6,377,316'}, C : {text :'39.8'} , D : {text :'70,038'}, E : {text :'28.2'}, F : {text :'1.1'}},
            { A : {text : '전체', class : 'ac'}, B : {text :'16,030,448'}, C : {text :'100'} , D : {text :'248,781'}, E : {text :'100'}, F : {text :'1.55'}}
        ],
    },
    //장애인 임금근로자의 최근 3개월 월평균 임금
    chart_204: {
        meta: {
            id: '110',
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '장애유형별 근로자 비율',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분', colSpan: 2 }, { title: '장애인 근로자 수' }, { title: '비율' }],
        },
        data: [
            {
                a: { text: '신체외부', class: 'al' },
                child: [
                    { A : {text : '지체', class : 'al'}, B : {text :'153,427'}, C : {text :'61.7'}},
                    { A : {text : '뇌병변, 안면', class : 'al'}, B : {text :'7,204'}, C : {text :'2.9'}},


                ],
            },
            {
                a: { text: '감각', class: 'al' },
                child: [
                    { A : {text : '시각', class : 'al'}, B : {text :'16,889'}, C : {text :'6.8'}},
                    { A : {text : '청각, 언어', class : 'al'}, B : {text :'19,131'}, C : {text :'7.7'}},

                ],
            },
            {
                a: { text: '정신적', class: 'al' },
                child: [
                   { A : {text : '지적, 자폐성', class : 'al'}, B : {text :'34,419'}, C : {text :'13.8'}},
                   { A : {text : '정신', class : 'al'}, B : {text :'4,451'}, C : {text :'1.8'}},
                ],
            },
            { A: { text: '신체내부', class: 'al', colSpan: 2 }, B: { text: '6,356' }, C: { text: '2.6' } },
            { A: { text: '국가유공자', class: 'al', colSpan: 2 }, B: { text: '6,905' }, C: { text: '2.8' } },
        ],
    },
    //장애인 근로자 채용 이유(1순위)
    chart_205: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : %, 개)',
            tableTitle: '장애인 근로자 채용 이유',
            cols: [{ width: '200px' }, { width: '100px' }, { width: '100px' }, { width: '100px' }, { width: '100px' }, { width: '100px' }, { width: '100px' }, { width: '100px' }],
            headers: [
                [
                    { title: '구분', rowSpan: 3 },
                    { title: '전체(고용)', rowSpan: 3 },
                    { title: '고용의무기업체 여부', colSpan: 5 },
                    { title: '부담금 납부 대상(100명 이상)', rowSpan: 3 },
                ],
                [
                    { title: '비의무(5~49명)', rowSpan: 2 },
                    { title: '의무', colSpan: 4 },
                ],
                [{ title: '(50명 이상)' }, { title: '50~299명' }, { title: '300~999명' }, { title: '1,000명 이상' }],
            ],
        },
        data: [
            { A : {text : '고용의무를 이행하기 위해서(%)', class : 'ac'}, B : {text :'32.1 '}, C : {text :'7.1 '} , D : {text :'58.8 '}, E : {text :'56.7 '}, F : {text :'67.6 '}, G : {text :'66.5 '}, H : {text :'63.3 '}},
            { A : {text : '장려금 지원 등 사업주에 대한 지원제도 때문(%)', class : 'ac'}, B : {text :'8.9 '}, C : {text :'10.8 '} , D : {text :'6.9 '}, E : {text :'6.7 '}, F : {text :'7.5 '}, G : {text :'8.4 '}, H : {text :'7.2 '}},
            { A : {text : '기업의 사회적 이미지를 높이기 위해서(%)', class : 'ac'}, B : {text :'5.3 '}, C : {text :'5.7 '} , D : {text :'4.9 '}, E : {text :'4.8 '}, F : {text :'4.5 '}, G : {text :'7.0 '}, H : {text :'4.8 '}},
            { A : {text : '장애인 여부 고려 않고 업무상 필요에 의해(%)', class : 'ac'}, B : {text :'45.5 '}, C : {text :'63.9 '} , D : {text :'25.8 '}, E : {text :'27.9 '}, F : {text :'17.5 '}, G : {text :'16.2 '}, H : {text :'21.5 '}},
            { A : {text : '입사 후 장애인이 됐거나 장애인임을 알게 됨(%)', class : 'ac'}, B : {text :'5.7 '}, C : {text :'8.6 '} , D : {text :'2.6 '}, E : {text :'2.7 '}, F : {text :'2.3 '}, G : {text :'1.9 '}, H : {text :'2.3 '}},
            { A : {text : '기타(%)', class : 'ac'}, B : {text :'2.5 '}, C : {text :'4.0 '} , D : {text :'1.0 '}, E : {text :'1.1 '}, F : {text :'0.6 '}, G : {text :'-'}, H : {text :'0.9 '}},
            { A : {text : '전체', class : 'ac'}, B : {text :'100.0 '}, C : {text :'100.0 '} , D : {text :'100.0 '}, E : {text :'100.0 '}, F : {text :'100.0 '}, G : {text :'100.0 '}, H : {text :'100.0 '}},
            { A : {text : '(추정 수)', class : 'ac'}, B : {text :'(45,792)'}, C : {text :'(23,674)'} , D : {text :'(22,118)'}, E : {text :'(17,814)'}, F : {text :'(3,340)'}, G : {text :'(964)'}, H : {text :'(14,526)'}},

        ],
    },
    //장애인 근로자 채용 방법
    chart_206: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : %, 개)',
            tableTitle: '장애인 근로자 채용 방법',
            cols: [{ width: '200px' }, { width: '100px' }, { width: '100px' }, { width: '100px' }, { width: '100px' }, { width: '100px' }, { width: '100px' }, { width: '100px' }],
            headers: [
                [
                    { title: '구분', rowSpan: 3 },
                    { title: '전체(고용)', rowSpan: 3 },
                    { title: '고용의무기업체 여부', colSpan: 5 },
                    { title: '부담금 납부 대상(100명 이상)', rowSpan: 3 },
                ],
                [
                    { title: '비의무(5~49명)', rowSpan: 2 },
                    { title: '의무', colSpan: 4 },
                ],
                [{ title: '(50명 이상)' }, { title: '50~299명' }, { title: '300~999명' }, { title: '1,000명 이상' }],
            ],
        },
        data: [
            { A : {text : '장애인과 비장애인 구분 없는 일괄채용(일반채용)(%)', class : 'ac'}, B : {text :'69.4 '}, C : {text :'76.9 '} , D : {text :'61.5 '}, E : {text :'62.2 '}, F : {text :'58.4 '}, G : {text :'58.0 '}, H : {text :'59.4 '}},
            { A : {text : '채용계획인원의 일정부분 장애인 할당채용(%)', class : 'ac'}, B : {text :'10.0 '}, C : {text :'4.3 '} , D : {text :'16.2 '}, E : {text :'15.2 '}, F : {text :'21.3 '}, G : {text :'15.4 '}, H : {text :'18.0 '}},
            { A : {text : '장애인만을 대상으로 별도 공개 채용(%)', class : 'ac'}, B : {text :'10.2 '}, C : {text :'7.4 '} , D : {text :'13.2 '}, E : {text :'13.2 '}, F : {text :'12.6 '}, G : {text :'16.6 '}, H : {text :'13.9 '}},
            { A : {text : '장애인의 경우 인사추천을 받아 개별 채용(%)', class : 'ac'}, B : {text :'10.3 '}, C : {text :'11.5 '} , D : {text :'9.1 '}, E : {text :'9.3 '}, F : {text :'7.7 '}, G : {text :'10.0 '}, H : {text :'8.7 '}},
            { A : {text : '전체', class : 'ac'}, B : {text :'100.0 '}, C : {text :'100.0 '} , D : {text :'100.0 '}, E : {text :'100.0 '}, F : {text :'100.0 '}, G : {text :'100.0 '}, H : {text :'100.0 '}},
            { A : {text : '(추정 수)', class : 'ac'}, B : {text :'(45,792)'}, C : {text :'(23,674)'} , D : {text :'(22,118)'}, E : {text :'(17,814)'}, F : {text :'(3,340)'}, G : {text :'(964)'}, H : {text :'(14,526)'}}

        ],
    },

    //장애인 근로자 채용 시 애로사항(1순위) (상위 5개)
    chart_207: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : %, 개)',
            tableTitle: '장애인 근로자 채용 시 애로사항',
            cols: [{ width: '200px' }, { width: '100px' }, { width: '100px' }, { width: '100px' }, { width: '100px' }, { width: '100px' }, { width: '100px' }, { width: '100px' }],
            headers: [
                [
                    { title: '구분', rowSpan: 3 },
                    { title: '전체(고용)', rowSpan: 3 },
                    { title: '고용의무기업체 여부', colSpan: 5 },
                    { title: '부담금 납부 대상(100명 이상)', rowSpan: 3 },
                ],
                [
                    { title: '비의무(5~49명)', rowSpan: 2 },
                    { title: '의무', colSpan: 4 },
                ],
                [{ title: '(50명 이상)' }, { title: '50~299명' }, { title: '300~999명' }, { title: '1,000명 이상' }],
            ],
        },
        data: [
            { A : {text : '업무능력을 갖춘 인력이 부족해서', class : 'ac'}, B : {text :'17.9 '}, C : {text :'16.3 '} , D : {text :'19.5 '}, E : {text :'18.6 '}, F : {text :'22.1 '}, G : {text :'27.6 '}, H : {text :'21.0 '}},
            { A : {text : '장애인에게 적합한 직무가 부족하거나 찾지 못해서', class : 'ac'}, B : {text :'13.5 '}, C : {text :'6.9 '} , D : {text :'20.6 '}, E : {text :'20.1 '}, F : {text :'22.5 '}, G : {text :'22.9 '}, H : {text :'22.0 '}},
            { A : {text : '장애인 지원자 자체가 없어서', class : 'ac'}, B : {text :'9.3 '}, C : {text :'7.1 '} , D : {text :'11.8 '}, E : {text :'11.1 '}, F : {text :'13.6 '}, G : {text :'17.7 '}, H : {text :'12.5 '}},
            { A : {text : '장애인용 시설 및 장비·편의시설 등이 부족해서', class : 'ac'}, B : {text :'2.2 '}, C : {text :'2.9 '} , D : {text :'1.4 '}, E : {text :'1.4 '}, F : {text :'1.3 '}, G : {text :'0.5 '}, H : {text :'1.3 '}},
            { A : {text : '채용 후 인사관리가 어려울 것 같아서', class : 'ac'}, B : {text :'2.0 '}, C : {text :'2.1 '} , D : {text :'2.0 '}, E : {text :'2.0 '}, F : {text :'1.8 '}, G : {text :'2.2 '}, H : {text :'2.0 '}},
            { A : {text : '전체', class : 'ac'}, B : {text :'100.0 '}, C : {text :'100.0 '} , D : {text :'100.0 '}, E : {text :'100.0 '}, F : {text :'100.0 '}, G : {text :'100.0 '}, H : {text :'100.0 '}},
            { A : {text : '(추정 수)', class : 'ac'}, B : {text :'(45,792)'}, C : {text :'(23,674)'} , D : {text :'(22,118)'}, E : {text :'(17,814)'}, F : {text :'(3,340)'}, G : {text :'(964)'}, H : {text :'(14,526)'}},

        ],
    },

    //중증장애인 수행가능 직무가 있는 비율
    chart_208: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : %, 개)',
            tableTitle: '중증장애인 수행가능 직무 유무',
            cols: [{ width: '200px' }, { width: '100px' }, { width: '100px' }, { width: '100px' }, { width: '100px' }, { width: '100px' }, { width: '100px' }, { width: '100px' }],
            headers: [
                [
                    { title: '구분', rowSpan: 3 },
                    { title: '전체(고용)', rowSpan: 3 },
                    { title: '고용의무기업체 여부', colSpan: 5 },
                    { title: '부담금 납부 대상(100명 이상)', rowSpan: 3 },
                ],
                [
                    { title: '비의무(5~49명)', rowSpan: 2 },
                    { title: '의무', colSpan: 4 },
                ],
                [{ title: '(50명 이상)' }, { title: '50~299명' }, { title: '300~999명' }, { title: '1,000명 이상' }],
            ],
        },
        data: [
            { A : {text : '대부분 업무에서 중증장애인이 수행할 직무가 있다(%)', class : 'ac'}, B : {text :'5.1 '}, C : {text :'4.8 '} , D : {text :'5.4 '}, E : {text :'5.3 '}, F : {text :'6.3 '}, G : {text :'5.6 '}, H : {text :'6.0 '}},
            { A : {text : '제한적인 업무에서 중증장애인이 수행할 직무가 있다(%)', class : 'ac'}, B : {text :'31.0 '}, C : {text :'24.1 '} , D : {text :'38.4 '}, E : {text :'36.5 '}, F : {text :'43.8 '}, G : {text :'55.6 '}, H : {text :'41.3 '}},
            { A : {text : '중증장애인이 수행할 만한 직무를 찾기 힘들다(%)', class : 'ac'}, B : {text :'63.9 '}, C : {text :'71.1 '} , D : {text :'56.1 '}, E : {text :'58.2 '}, F : {text :'49.9 '}, G : {text :'38.8 '}, H : {text :'52.7 '}},
            { A : {text : '전체', class : 'ac'}, B : {text :'100.0 '}, C : {text :'100.0 '} , D : {text :'100.0 '}, E : {text :'100.0 '}, F : {text :'100.0 '}, G : {text :'100.0 '}, H : {text :'100.0 '}},
            { A : {text : '(추정 수)', class : 'ac'}, B : {text :'(45,792)'}, C : {text :'(23,674)'} , D : {text :'(22,118)'}, E : {text :'(17,814)'}, F : {text :'(3,340)'}, G : {text :'(964)'}, H : {text :'(14,526)'}}
        ],
    },
    //장애인 수행가능 직무가 있는 비율
    chart_209: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : %, 개)',
            tableTitle: '장애인 수행가능 직무 유무',
            cols: [{ width: '70%' }, { width: '30%' }],
            headers: [{ title: '구분' }, { title: '전체' }],
        },
        data: [
           { A : {text : '대부분 업무에서 장애인이 수행할 직무가 있다(%)', class : 'al'}, B : {text :'1.9 '}},
            { A : {text : '제한적인 업무에서 장애인이 수행할 직무가 있다(%)', class : 'al'}, B : {text :'20.8 '}},
            { A : {text : '장애인이 수행할 만한 직무를 찾기 힘들다(%)', class : 'al'}, B : {text :'77.3 '}},
            { A : {text : '전체', class : 'al'}, B : {text :'100.0 '}},
            { A : {text : '(추정 수)', class : 'al'}, B : {text :'(490,476)'}}

        ],
    },
    //장애인 근로자 채용지원 서비스 필요 비율(중복응답)
    chart_210: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : %, 개)',
            tableTitle: '장애인 근로자 채용지원 서비스 필요 비율(중복응답)',
            cols: [{ width: '40%' }, { width: '20%' }, { width: '20%' }, { width: '20%' }],
            headers: [
                [
                    { title: '구분', rowSpan: 2 },
                    { title: '전체\r\n(고용+미고용)', rowSpan: 2 },
                    { title: '장애인고용 여부', colSpan: 2 },
                ],
                [{ title: '고용' }, { title: '미고용' }],
            ],
        },
        data: [
            { A : {text : '기업에 적합한 인력 추천', class : 'al'}, B : {text :'28.9 '}, C : {text :'43.4 '} , D : {text :'27.6 '}},
            { A : {text : '모집대행 서비스', class : 'al'}, B : {text :'19.3 '}, C : {text :'29.9 '} , D : {text :'18.4 '}},
            { A : {text : '직무분석 컨설팅 및 기업체 내 장애인 직업영역 개발', class : 'al'}, B : {text :'18.3 '}, C : {text :'23.6 '} , D : {text :'17.8 '}},
            { A : {text : '사전 현장훈련을 통해 직무에 적응 후 근로', class : 'al'}, B : {text :'20.8 '}, C : {text :'27.9 '} , D : {text :'20.1 '}},
            { A : {text : '현장에서 일정기간 직무체험을 통해 기업에서 적합장애인 탐색할 기회 제공', class : 'al'}, B : {text :'21.7 '}, C : {text :'28.1 '} , D : {text :'21.1 '}},
            { A : {text : '현장 직무에 실제 활용 가능하도록 일정기간 수행하는 훈련 제공', class : 'al'}, B : {text :'20.8 '}, C : {text :'28.6 '} , D : {text :'20.1 '}},
            { A : {text : '기업의 장애인 고용환경 분석·진단부터 적합인력 지원까지 체계적인 고용서비스 설계를 위한 지원', class : 'al'}, B : {text :'19.6 '}, C : {text :'23.5 '} , D : {text :'19.2 '}},
            { A : {text : '(추정 수)', class : 'al'}, B : {text :'(536,269)'}, C : {text :'(45,792)'} , D : {text :'(490,476)'}}
        ],
    },
    //장장애인 근로자 고용유지 서비스 필요 비율(중복응답)
    chart_211: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : %, 개)',
            tableTitle: '장애인 근로자 고용유지 서비스 필요 비율(중복응답)',
            cols: [{ width: '40%' }, { width: '20%' }, { width: '20%' }, { width: '20%' }],
            headers: [
                [
                    { title: '구분', rowSpan: 2 },
                    { title: '전체 (고용+미고용)', rowSpan: 2 },
                    { title: '장애인고용 여부', colSpan: 2 },
                ],
                [{ title: '고용' }, { title: '미고용' }],
            ],
        },
        data: [
            { A : {text : '재직 근로 장애인 근로자 직무능력향상훈련(%)', class : 'al'}, B : {text :'35.7 '}, C : {text :'35.9 '} , D : {text :'35.7 '}},
            { A : {text : '근로 장애인 근로자의 안정적 업무 수행을 위한 전문인력 지원(%)', class : 'al'}, B : {text :'30.6 '}, C : {text :'28.1 '} , D : {text :'30.8 '}},
            { A : {text : '사업체 근무환경 개선을 위한 편의시설 진단 및 인증서비스 지원(%)', class : 'al'}, B : {text :'30.1 '}, C : {text :'23.4 '} , D : {text :'30.7 '}},
            { A : {text : '업무 수행 시 필요한 작업보조기기 무상 지원(%)', class : 'al'}, B : {text :'31.7 '}, C : {text :'24.1 '} , D : {text :'32.5 '}},
            { A : {text : '출퇴근 지원(%)', class : 'al'}, B : {text :'29.0 '}, C : {text :'23.9 '} , D : {text :'29.5 '}},
            { A : {text : '직업생활, 고충처리 상담 인력 및 비용 지원(%)', class : 'al'}, B : {text :'25.8 '}, C : {text :'24.2 '} , D : {text :'25.9 '}},
            { A : {text : '(추정 수)', class : 'al'}, B : {text :'(536,269)'}, C : {text :'(45,792)'} , D : {text :'(490,476)'}}

        ],
    },
    //장애인 고용 증진을 위해 필요한 사항(1순위) (상위 6개)
    chart_212: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : %, 개)',
            tableTitle: '장애인 고용 증진을 위해 필요한 사항',
            cols: [{ width: '40%' }, { width: '20%' }, { width: '20%' }, { width: '20%' }],
            headers: [
                [
                    { title: '구분', rowSpan: 2 },
                    { title: '전체 (고용+미고용)', rowSpan: 2 },
                    { title: '장애인고용 여부', colSpan: 2 },
                ],
                [{ title: '고용' }, { title: '미고용' }],
            ],
        },
        data: [
            { A : {text : '장애인고용장려금 증액', class : 'al'}, B : {text :'22.3 '}, C : {text :'30.3 '} , D : {text :'21.6 '}},
            { A : {text : '장애인 고용에 따른 세금 감면', class : 'al'}, B : {text :'19.7 '}, C : {text :'24.3 '} , D : {text :'19.3 '}},
            { A : {text : '고용부담금(부담기초액) 인상', class : 'al'}, B : {text :'13.0 '}, C : {text :'10.5 '} , D : {text :'13.2 '}},
            { A : {text : '장애인 직업영역개발을 통한 고용창출 활성화', class : 'al'}, B : {text :'9.4 '}, C : {text :'5.1 '} , D : {text :'9.8 '}},
            { A : {text : '장애인고용 사업주에 대한 융자 등 금융지원 확대', class : 'al'}, B : {text :'9.3 '}, C : {text :'9.5 '} , D : {text :'9.3 '}},
            { A : {text : '고용의무 범위 확대', class : 'al'}, B : {text :'6.1 '}, C : {text :'4.6 '} , D : {text :'6.2 '}},
            { A : {text : '전체', class : 'al'}, B : {text :'100.0 '}, C : {text :'100.0 '} , D : {text :'100.0 '}},
            { A : {text : '(추정 수)', class : 'al'}, B : {text :'(536,269)'}, C : {text :'(45,792)'} , D : {text :'(490,476)'}}
        ],
    },
    //장애인 의무고용률을 달성했지만 추가채용 의사가 있는 비율
    chart_214: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : %, 개)',
            tableTitle: '장애인 의무고용률을 달성했지만 추가채용 의사가 있는 비율',
            cols: [{ width: '50%' }, { width: '15%' }, { width: '15%' }, { width: '15%' }, { width: '15%' }],
            headers: [
                [
                    { title: '구분', rowSpan: 2 },
                    { title: '전체 (고용)', rowSpan: 2 },
                    { title: '고용의무기업체 여부', colSpan: 3 },
                ],
                [{ title: '50~299명' }, { title: '300~999명' }, { title: '1,000명 이상' }],
            ],
        },
        data: [
            { A : {text : '의무고용률 달성과 상관없이 지속적으로 장애인 채용 예정', class : 'ac'}, B : {text :'22.2 '}, C : {text :'20.8 '} , D : {text :'27.6 '}, E : {text :'32.5'}},
            { A : {text : '의무고용률을 달성했기 때문에 추가적 장애인 채용 의사 없음', class : 'ac'}, B : {text :'77.8 '}, C : {text :'79.2 '} , D : {text :'72.4 '}, E : {text :'67.5'}},
            { A : {text : '전체', class : 'ac'}, B : {text :'100.0 '}, C : {text :'100.0 '} , D : {text :'100.0 '}, E : {text :'100.0'}},
            { A : {text : '(추정 수)', class : 'ac'}, B : {text :'(10,284)'}, C : {text :'(8,406)'} , D : {text :'(1,477)'}, E : {text :'(402)'}}
        ],
    },
    //향후 3년 내 장애인 의무고용률 달성 전망
    chart_215: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : %, 개)',
            tableTitle: '향후 3년 내 장애인 의무고용률 달성 전망',
            cols: [{ width: '40%' }, { width: '20%' }, { width: '20%' }, { width: '20%' }],
            headers: [
                [
                    { title: '구분', rowSpan: 2 },
                    { title: '전체\r\n(고용+미고용)', rowSpan: 2 },
                    { title: '장애인고용 여부', colSpan: 2 },
                ],
                [{ title: '고용' }, { title: '미고용' }],
            ],
        },
        data: [
                { A : {text : '충분히 달성 가능하다', class : 'al'}, B : {text :'1.4 '}, C : {text :'2.2 '} , D : {text :'0.6 '}},
                { A : {text : '어느 정도 달성 가능하다', class : 'al'}, B : {text :'21.0 '}, C : {text :'33.8 '} , D : {text :'9.0 '}},
                { A : {text : '달성이 다소 어렵다', class : 'al'}, B : {text :'66.4 '}, C : {text :'57.5 '} , D : {text :'74.8 '}},
                { A : {text : '달성이 매우 어렵다', class : 'al'}, B : {text :'11.2 '}, C : {text :'6.5 '} , D : {text :'15.7 '}},
                { A : {text : '전체', class : 'al'}, B : {text :'100.0 '}, C : {text :'100.0 '} , D : {text :'100.0 '}},
                { A : {text : '(추정 수)', class : 'al'}, B : {text :'(24,381)'}, C : {text :'(11,834)'} , D : {text :'(12,548)'}}
        ],
    },
    //장애인고용 비의무기업체의 향후 장애인 채용 의사
    chart_216: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : %, 개)',
            tableTitle: '장애인고용 비의무기업체의 향후 장애인 채용 의사',
            cols: [{ width: '40%' }, { width: '20%' }, { width: '20%' }, { width: '20%' }],
            headers: [
                [
                    { title: '구분', rowSpan: 2 },
                    { title: '전체\r\n(고용+미고용)', rowSpan: 2 },
                    { title: '장애인고용 여부', colSpan: 2 },
                ],
                [{ title: '고용' }, { title: '미고용' }],
            ],
        },
        data: [
                { A : {text : '채용할 의사가 매우 많다', class : 'al'}, B : {text :'0.0 '}, C : {text :'0.9 '} , D : {text :'-'}},
                { A : {text : '채용할 의사가 있는 편이다', class : 'al'}, B : {text :'7.9 '}, C : {text :'35.6 '} , D : {text :'6.5 '}},
                { A : {text : '채용할 의사가 없는 편이다', class : 'al'}, B : {text :'61.8 '}, C : {text :'54.7 '} , D : {text :'62.1 '}},
                { A : {text : '채용할 의사가 전혀 없다', class : 'al'}, B : {text :'30.3 '}, C : {text :'8.8 '} , D : {text :'31.3 '}},
                { A : {text : '전체', class : 'al'}, B : {text :'100.0 '}, C : {text :'100.0 '} , D : {text :'100.0 '}},
                { A : {text : '(추정 수)', class : 'al'}, B : {text :'(501,603)'}, C : {text :'(23,674)'} , D : {text :'(477,929)'}}
        ],
    },
    //15세 이상 발달장애인 인구
    chart_301: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '15세 이상 발달장애인 규모',
            cols: 3,
            headers: [{ title: '구분' }, { title: '추정 수' }, { title: '비율' }],
        },
        data: [
            { A : {text : '지적장애', class : 'ac'}, B : {text :' 202,265 '}, C : {text :' 90.4 '} },
            { A : {text : '자폐성장애', class : 'ac'}, B : {text :' 21,507 '}, C : {text :' 9.6 '} },
            { A : {text : '전체', class : 'ac'}, B : {text :' 223,772 '}, C : {text :' 100.0 '} }

        ],
    },

    //중복장애 유무
    chart_302: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '중복장애 유무',
            cols: 4,
            headers: [{ title: '구분', colSpan: 2 }, { title: '추정 수' }, { title: '비율' }],
        },
        data: [
            {
                a: { text: '발달장애', class: 'ac' },
                child: [
                    { A : {text : '중복장애 있음', class : 'ac'}, B : {text :' 20,771 '}, C : {text :' 9.3 '}},
                    { A : {text : '중복장애 없음', class : 'ac'}, B : {text :' 203,001 '}, C : {text :' 90.7 '}},
                    { A : {text : '전체', class : 'ac'}, B : {text :' 223,772 '}, C : {text :' 100.0 '}}
                ],
            },
            {
                a: { text: '장애인구', class: 'ac' },
                child: [
                    { A : {text : '중복장애 있음', class : 'ac'}, B : {text :' 110,537 '}, C : {text :' 4.3 '}},
                    { A : {text : '중복장애 없음', class : 'ac'}, B : {text :' 2,463,861 '}, C : {text :' 95.7 '}},
                    { A : {text : '전체', class : 'ac'}, B : {text :' 2,574,398 '}, C : {text :' 100.0 '}}
                ],
            },
        ],
    },
    //다른 사람의 말을 이해하는 수준
    chart_303: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '다른 사람의 말을 이해하는 수준',
            cols: [{ width: '50%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '추정 수' }, { title: '비율' }],
        },
        data: [
           { A : {text : '두 문장 이상 수준으로 제시해도 이해함', class : 'al'}, B : {text :' 116,582 '}, C : {text :' 52.1 '}},
            { A : {text : '간단한 문장 수준으로 제시해야 이해함', class : 'al'}, B : {text :' 62,917 '}, C : {text :' 28.1 '}},
            { A : {text : '단어 수준으로 제시해야 이해함', class : 'al'}, B : {text :' 28,492 '}, C : {text :' 12.7 '} },
            { A : {text : '다른 사람의 말을 거의 이해하지 못함', class : 'al'}, B : {text :' 15,781 '}, C : {text :' 7.1 '}},
            { A : {text : '전체', class : 'al'}, B : {text :' 223,772 '}, C : {text :' 100.0 '} }
        ],
    },
    //자신의 의사를 말로 표현하는 수준
    chart_304: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '자신의 의사를 말로 표현하는 수준',
            cols: [{ width: '50%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '추정 수' }, { title: '비율' }],
        },
        data: [
            { A : {text : '두 단어 이상을 사용한 표현이나 문장으로 의사를 표현함', class : 'al'}, B : {text :' 125,826 '}, C : {text :' 56.2 '}},
            { A : {text : '명확한 단어를 사용하여 의사를 표현함', class : 'al'}, B : {text :' 47,943 '}, C : {text :' 21.4 '}},
            { A : {text : '불명료한 단어를 사용하여 의사를 표현함', class : 'al'}, B : {text :' 23,963 '}, C : {text :' 10.7 '}},
            { A : {text : '불분명한 소리를 내어서 의사를 표현함', class : 'al'}, B : {text :' 16,506 '}, C : {text :' 7.4 '}},
            { A : {text : '소리 등으로도 전혀 의사를 표현할 수 없음', class : 'al'}, B : {text :' 9,534 '}, C : {text :' 4.3 '}},
            { A : {text : '전체', class : 'al'}, B : {text :' 223,772 '}, C : {text :' 100.0 '}}

        ],
    },
    //인지능력 수준
    chart_305: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '인지능력 수준',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분', colSpan: 2 }, { title: '추정 수' }, { title: '비율' }],
        },
        data: [
            {
                a: { text: '한글 읽기', class: 'ac' },
                child: [
                   { A : {text : '불가능', class : 'al'}, B : {text :' 66,072 '}, C : {text :' 29.5 '}},
                    { A : {text : '제한적으로 가능', class : 'al'}, B : {text :' 60,551 '}, C : {text :' 27.1 '}},
                    { A : {text : '가능', class : 'al'}, B : {text :' 96,911 '}, C : {text :' 43.3 '}},


                ],
            },
            {
                a: { text: '한글 쓰기', class: 'ac' },
                child: [
                   { A : {text : '불가능', class : 'al'}, B : {text :' 68,767 '}, C : {text :' 30.7 '}},
                    { A : {text : '제한적으로 가능', class : 'al'}, B : {text :' 66,789 '}, C : {text :' 29.8 '}},
                    { A : {text : '가능', class : 'al'}, B : {text :' 87,876 '}, C : {text :' 39.3 '}},

                ],
            },
            {
                a: { text: '숫자에 대한 인지', class: 'ac' },
                child: [
                    { A : {text : '불가능', class : 'al'}, B : {text :' 76,439 '}, C : {text :' 34.2 '}},
                    { A : {text : '제한적으로 가능', class : 'al'}, B : {text :' 75,404 '}, C : {text :' 33.7 '}},
                    { A : {text : '가능', class : 'al'}, B : {text :' 71,589 '}, C : {text :' 32.0 '}},

                ],
            },
            {
                a: { text: '날짜, 요일에 대한 인지', class: 'ac' },
                child: [
                    { A : {text : '불가능', class : 'al'}, B : {text :' 73,897 '}, C : {text :' 33.0 '}},
                    { A : {text : '제한적으로 가능', class : 'al'}, B : {text :' 62,201 '}, C : {text :' 27.8 '}},
                    { A : {text : '가능', class : 'al'}, B : {text :' 87,334 '}, C : {text :' 39.0 '}},

                ],
            },
            {
                a: { text: '위치, 장소에 대한 인지', class: 'ac' },
                child: [
                    { A : {text : '불가능', class : 'al'}, B : {text :' 59,003 '}, C : {text :' 26.4 '}},
                    { A : {text : '제한적으로 가능', class : 'al'}, B : {text :' 76,012 '}, C : {text :' 34.0 '}},
                    { A : {text : '가능', class : 'al'}, B : {text :' 88,389 '}, C : {text :' 39.5 '}},

                ],
            },
            {
                a: { text: '주위 사람에 대한 인지', class: 'ac' },
                child: [
                    { A : {text : '불가능', class : 'al'}, B : {text :' 46,905 '}, C : {text :' 21.0 '}},
                    { A : {text : '제한적으로 가능', class : 'al'}, B : {text :' 82,432 '}, C : {text :' 36.8 '}},
                    { A : {text : '가능', class : 'al'}, B : {text :' 93,986 '}, C : {text :' 42.0 '}},

                ],
            },
            {
                a: { text: '상황에 대한 인지', class: 'ac' },
                child: [
                    { A : {text : '불가능', class : 'al'}, B : {text :' 59,458 '}, C : {text :' 26.6 '}},
                    { A : {text : '제한적으로 가능', class : 'al'}, B : {text :' 80,237 '}, C : {text :' 35.9 '}},
                    { A : {text : '가능', class : 'al'}, B : {text :' 83,680 '}, C : {text :' 37.4 '}},
                ],
            },
            {
                a: { text: '전체', class: 'ac', colSpan: 2 },
                b: { text: '223,772', class: 'ar' },
                c: { text: '100.0', class: 'ar' },
            },
        ],
    },
    //도전적 행동 발생 정도
    chart_306: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '도전적 행동 발생 정도',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분', colSpan: 2 }, { title: '추정 수' }, { title: '비율' }],
        },
        data: [
            {
                a: { text: '자신을 해치는 행동', class: 'ac' },
                child: [
                        { A : {text : '전혀 안함', class : 'al'}, B : {text :' 175,032 '}, C : {text :' 78.2 '}},
                        { A : {text : '가끔 함', class : 'al'}, B : {text :' 40,583 '}, C : {text :' 18.1 '}},
                        { A : {text : '자주 함', class : 'al'}, B : {text :' 8,025 '}, C : {text :' 3.6 '}}
                ],
            },
            {
                a: { text: '타인을 해치는 행동', class: 'ac' },
                child: [
                        { A : {text : '전혀 안함', class : 'al'}, B : {text :' 192,357 '}, C : {text :' 86.0 '}},
                        { A : {text : '가끔 함', class : 'al'}, B : {text :' 27,401 '}, C : {text :' 12.2 '}},
                        { A : {text : '자주 함', class : 'al'}, B : {text :' 3,882 '}, C : {text :' 1.7 '}}

                ],
            },
            {
                a: { text: '물건을 파괴하는 행동', class: 'ac' },
                child: [
                        { A : {text : '전혀 안함', class : 'al'}, B : {text :' 185,003 '}, C : {text :' 82.7 '}},
                        { A : {text : '가끔 함', class : 'al'}, B : {text :' 34,243 '}, C : {text :' 15.3 '}},
                        { A : {text : '자주 함', class : 'al'}, B : {text :' 4,393 '}, C : {text :' 2.0 '}}

                ],
            },
            {
                a: { text: '방해하는 행동', class: 'ac' },
                child: [
                        { A : {text : '전혀 안함', class : 'al'}, B : {text :' 184,737 '}, C : {text :' 82.6 '}},
                        { A : {text : '가끔 함', class : 'al'}, B : {text :' 33,735 '}, C : {text :' 15.1 '}},
                        { A : {text : '자주 함', class : 'al'}, B : {text :' 5,013 '}, C : {text :' 2.2 '}}

                ],
            },
            {
                a: { text: '특이한 반복적인 습관', class: 'ac' },
                child: [
                        { A : {text : '전혀 안함', class : 'al'}, B : {text :' 164,235 '}, C : {text :' 73.4 '}},
                        { A : {text : '가끔 함', class : 'al'}, B : {text :' 45,702 '}, C : {text :' 20.4 '}},
                        { A : {text : '자주 함', class : 'al'}, B : {text :' 13,383 '}, C : {text :' 6.0 '}}

                ],
            },
            {
                a: { text: '사회적으로 공격적인 행동', class: 'ac' },
                child: [
                        { A : {text : '전혀 안함', class : 'al'}, B : {text :' 183,489 '}, C : {text :' 82.0 '}},
                        { A : {text : '가끔 함', class : 'al'}, B : {text :' 34,231 '}, C : {text :' 15.3 '}},
                        { A : {text : '자주 함', class : 'al'}, B : {text :' 5,754 '}, C : {text :' 2.6 '}}

                ],
            },
            {
                a: { text: '위축된 행동이나 부주의한 행동', class: 'ac' },
                child: [
                        { A : {text : '전혀 안함', class : 'al'}, B : {text :' 168,779 '}, C : {text :' 75.4 '}},
                        { A : {text : '가끔 함', class : 'al'}, B : {text :' 47,748 '}, C : {text :' 21.3 '}},
                        { A : {text : '자주 함', class : 'al'}, B : {text :' 6,834 '}, C : {text :' 3.1 '}}

                ],
            },
            {
                a: { text: '비협조적인 행동', class: 'ac' },
                child: [
                        { A : {text : '전혀 안함', class : 'al'}, B : {text :' 169,848 '}, C : {text :' 75.9 '}},
                        { A : {text : '가끔 함', class : 'al'}, B : {text :' 45,099 '}, C : {text :' 20.2 '}},
                        { A : {text : '자주 함', class : 'al'}, B : {text :' 8,515 '}, C : {text :' 3.8 '}}
                ],
            },
            {
                a: { text: '전체', class: 'ac', colSpan: 2 },
                b: { text: '223,772', class: 'ar' },
                c: { text: '100.0', class: 'ar' },
            },
        ],
    },
    //최종 학력
    chart_307: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '최종 학력',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분', colSpan: 2 }, { title: '추정 수' }, { title: '비율' }],
        },
        data: [
            {
                a: { text: '발달장애', class: 'ac' },
                child: [
                   { A : {text : '무학', class : 'al'}, B : {text :' 30,411 '}, C : {text :' 13.6 '}},
                    { A : {text : '초등학교 졸업', class : 'al'}, B : {text :' 25,890 '}, C : {text :' 11.6 '}},
                    { A : {text : '중학교 졸업', class : 'al'}, B : {text :' 31,161 '}, C : {text :' 13.9 '}},
                    { A : {text : '고등학교 졸업', class : 'al'}, B : {text :' 123,527 '}, C : {text :' 55.2 '}},
                    { A : {text : '대학교 이상 졸업', class : 'al'}, B : {text :' 12,782 '}, C : {text :' 5.7 '}},
                    { A : {text : '전체', class : 'al'}, B : {text :' 223,772 '}, C : {text :' 100.0 '}}
                ],
            },
            {
                a: { text: '장애인구', class: 'ac' },
                child: [
                   { A : {text : '무학', class : 'al'}, B : {text :' 370,622 '}, C : {text :' 14.4 '}},
                    { A : {text : '초등학교 졸업', class : 'al'}, B : {text :' 609,158 '}, C : {text :' 23.7 '}},
                    { A : {text : '중학교 졸업', class : 'al'}, B : {text :' 419,435 '}, C : {text :' 16.3 '}},
                    { A : {text : '고등학교 졸업', class : 'al'}, B : {text :' 813,651 '}, C : {text :' 31.6 '}},
                    { A : {text : '대학교 이상 졸업', class : 'al'}, B : {text :' 361,532 '}, C : {text :' 14.0 '}},
                    { A : {text : ' 전체 ', class : 'al'}, B : {text :' 2,574,398 '}, C : {text :' 100.0 '}}
                ],
            },
        ],
    },
    //취업자가 일(취업)하기로 결심한 데 가장 큰 영향을 미친 사람
    chart_308: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '취업자가 일하기로 결심한 데 영향을 미친 사람',
            cols: [{ width: '50%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '추정 수' }, { title: '비율' }],
        },
        data: [
            { A : {text : '장애인 당사자', class : 'al'}, B : {text :' 19,727 '}, C : {text :' 28.9 '}},
            { A : {text : '부모 및 가족', class : 'al'}, B : {text :' 33,628 '}, C : {text :' 49.3 '}},
            { A : {text : '학교 교사', class : 'al'}, B : {text :' 3,169 '}, C : {text :' 4.6 '}},
            { A : {text : '전문 취업알선기관, 직업훈련기관 등 종사자', class : 'al'}, B : {text :' 2,065 '}, C : {text :' 3.0 '}},
            { A : {text : '복지관, 시설 등 종사자', class : 'al'}, B : {text :' 7,467 '}, C : {text :' 10.9 '}},
            { A : {text : '친구, 이웃 등 지인', class : 'al'}, B : {text :' 2,175 '}, C : {text :' 3.2 '}},
            { A : {text : '전체', class : 'al'}, B : {text :' 68,230 '}, C : {text :' 100.0 '}},
        ],
    },
    //취업자의 현재 직장(사업체) 유형
    chart_309: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '취업자의 현재 직장 유형',
            cols: [{ width: '50%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '추정 수' }, { title: '비율' }],
        },
        data: [
            { A : {text : '장애인 직업재활시설(보호작업장, 근로사업장 등)', class : 'al'}, B : {text :' 15,400 '}, C : {text :' 22.6 '}},
            { A : {text : '장애인 표준사업장, 자회사형 표준사업장', class : 'al'}, B : {text :' 9,179 '}, C : {text :' 13.5 '}},
            { A : {text : '정부재정지원 일자리(공공근로, 복지일자리 등)', class : 'al'}, B : {text :' 9,130 '}, C : {text :' 13.4 '}},
            { A : {text : '일반 민간사업체(민간회사 또는 개인사업체) ', class : 'al'}, B : {text :' 27,335 '}, C : {text :' 40.1 '}},
            { A : {text : '정부, 지자체, 공공기관 일자리', class : 'al'}, B : {text :' 3,873 '}, C : {text :' 5.7 '}},
            { A : {text : '특정한 회사나 사업체에 소속되어 있지 않음', class : 'al'}, B : {text :' 3,314 '}, C : {text :' 4.9 '}},
            { A : {text : '전체', class : 'al'}, B : {text :' 68,230 '}, C : {text :' 100.0 '}}
        ],
    },
    //취업자가 주로 수행하는 업무 종류
    chart_310: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '취업자가 주로 수행하는 업무 종류',
            cols: [{ width: '70%' }, { width: '15%' }, { width: '15%' }],
            headers: [{ title: '구분' }, { title: '추정 수' }, { title: '비율' }],
        },
        data: [
            { A : {text : '서비스(배송, 주유, 미용, 판매, 진열, 서빙, 돌봄 등)', class : 'al'}, B : {text :' 11,704 '}, C : {text :' 17.2 '}},
            { A : {text : '제조(조립, 포장, 운반, 수리 등)', class : 'al'}, B : {text :' 22,337 '}, C : {text :' 32.7 '}},
            { A : {text : '사무(사무지원, 사서, 우체국 등)', class : 'al'}, B : {text :' 5,661 '}, C : {text :' 8.3 '}},
            { A : {text : '음식(바리스타, 제빵, 재료 준비, 설거지 등)', class : 'al'}, B : {text :' 5,199 '}, C : {text :' 7.6 '}},
            { A : {text : '청소·세탁(실내·외 청소, 세차, 세탁 등)', class : 'al'}, B : {text :' 13,536 '}, C : {text :' 19.8 '}},
            { A : {text : '농림어업(채소·화초 재배, 모종 심기, 버섯 재배, 물고기 잡기 등)', class : 'al'}, B : {text :' 2,436 '}, C : {text :' 3.6 '}},
            { A : {text : '예술스포츠(음악, 미술, 스포츠 등)', class : 'al'}, B : {text :' 5,372 '}, C : {text :' 7.9 '}},
            { A : {text : '전체', class : 'al'}, B : {text :' 68,230 '}, C : {text :' 100.0 '}}
        ],
    },
    //취업자가 장애와 관련해서 필요한 지원
    chart_311: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '취업자가 장애와 관련해서 필요한 지원',
            cols: [{ width: '35%' }, { width: '35%' }, { width: '15%' }, { width: '15%' }],
            headers: [{ title: '구분', colSpan: 2 }, { title: '추정 수' }, { title: '비율' }],
        },
        data: [
            {
                a: { text: '능력 수준에 맞는 \r\n업무 부여 및 조정', class: 'ac' },
                child: [
                   { A : {text : '이미 받고 있거나 필요함', class : 'al'}, B : {text :' 55,578 '}, C : {text :' 81.5 '}},
                   { A : {text : '받고 있지 않으며 필요하지 않음', class : 'al'}, B : {text :' 12,369 '}, C : {text :' 18.1 '}}
                ],
            },
            {
                a: { text: '업무시간 조정(단축)', class: 'ac' },
                child: [
                    { A : {text : '이미 받고 있거나 필요함', class : 'al'}, B : {text :' 50,745 '}, C : {text :' 74.4 '}},
                    { A : {text : '받고 있지 않으며 필요하지 않음', class : 'al'}, B : {text :' 17,202 '}, C : {text :' 25.2 '}}
                ],
            },
            {
                a: { text: '다른 사람의 도움 제공', class: 'ac' },
                child: [
                   { A : {text : '이미 받고 있거나 필요함', class : 'al'}, B : {text :' 49,662 '}, C : {text :' 72.8 '}},
                    { A : {text : '받고 있지 않으며 필요하지 않음', class : 'al'}, B : {text :' 18,179 '}, C : {text :' 26.6 '}}
                ],
            },
            {
                a: { text: '작업보조기기 및 \r\n 편의시설 등 설치', class: 'ac' },
                child: [
                   { A : {text : '이미 받고 있거나 필요함', class : 'al'}, B : {text :' 38,569 '}, C : {text :' 56.5 '}},
                    { A : {text : '받고 있지 않으며 필요하지 않음', class : 'al'}, B : {text :' 28,988 '}, C : {text :' 42.5 '}}
                ],
            },
            {
                a: { text: '맞춤형 업무능력 향상훈련 실시', class: 'ac' },
                child: [
                    { A : {text : '이미 받고 있거나 필요함', class : 'al'}, B : {text :' 44,837 '}, C : {text :' 65.7 '}},
                    { A : {text : '받고 있지 않으며 필요하지 않음', class : 'al'}, B : {text :' 22,868 '}, C : {text :' 33.5 '}}
                ],
            },
            {
                a: { text: '전체', class: 'ac', colSpan: 2 },
                b: { text: '68,230', class: 'ar' },
                c: { text: '100.0', class: 'ar' },
            },
        ],
    },
    //미취업자 당사자(PL, ER)와 보호자의 취업 희망 여부
    chart_312: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '미취업자 당사자와 보호자의 취업 희망 여부',
            cols: [{ width: '50%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '추정 수' }, { title: '비율' }],
        },
            data: [
                    { A : {text : '당사자 희망 & 보호자 희망', class : 'al'}, B : {text :' 29,260 '}, C : {text :' 36.6 '}},
                    { A : {text : '당사자 비희망 & 보호자 희망', class : 'al'}, B : {text :' 5,568 '}, C : {text :' 7.0 '}},
                    { A : {text : '당사자 희망 & 보호자 비희망', class : 'al'}, B : {text :' 11,311 '}, C : {text :' 14.1 '}},
                    { A : {text : '당사자 비희망 & 보호자 비희망', class : 'al'}, B : {text :' 32,807 '}, C : {text :' 41.0 '}},
                    { A: { text: '전체', class: 'ac' }, B: { text: ' 80,042 ' }, C: { text: ' 100.0 ' } },
        ],
    },
    //발달장애인 당사자가 일을 하는 이유
    chart_313: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '취업자가 일을 하는 이유',
            cols: [{ width: '50%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '추정 수' }, { title: '비율' }],
        },
        data: [
           { A : {text : '나는 돈을 벌고 싶다', class : 'al'}, B : {text :' 41,740 '}, C : {text :' 73.7 '}},
            { A : {text : '나는 일을 잘 할 수 있다', class : 'al'}, B : {text :' 7,190 '}, C : {text :' 12.7 '}},
            { A : {text : '나는 일을 배우고 싶다', class : 'al'}, B : {text :' 4,110 '}, C : {text :' 7.3 '}},
            { A : {text : '다른 사람이(엄마가 또는 선생님이) 일하라고 한다', class : 'al'}, B : {text :' 1,964 '}, C : {text :' 3.5 '}},
            { A : {text : '집에만 있기 싫다', class : 'al'}, B : {text :' 1,498 '}, C : {text :' 2.6 '}},
            { A : {text : '전 체', class : 'ac'}, B : {text :' 56,607 '}, C : {text :' 100.0 '}}
        ],
    },
    //취업 발달장애인 당사자의 일자리 및 업무 주요 특성
    chart_314: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '취업자의 일자리 및 업무에 대한 생각',
            cols: [{ width: '50%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '추정 수' }, { title: '비율' }],
        },
        data: [
           { A : {text : '나는 일 다니는 것이 좋다', class : 'al'}, B : {text :' 43,473 '}, C : {text :' 76.8 '}},
            { A : {text : '나는 하는 일이 재미있다', class : 'al'}, B : {text :' 36,882 '}, C : {text :' 65.2 '}},
            { A : {text : '나는 하는 일이 힘들다', class : 'al'}, B : {text :' 13,026 '}, C : {text :' 23.0 '}},
            { A : {text : '나는 일할 때 도움이 필요하다', class : 'al'}, B : {text :' 28,049 '}, C : {text :' 49.5 '}},
            { A : {text : '전체', class : 'ac'}, B : {text :' 53,790 '}, C : {text :' 100.0 '}}
        ],
    },
    //미취업 발달장애인 당사자의 취업 희망
    chart_315: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '미취업자의 취업 희망 여부',
            cols: [{ width: '50%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분', colSpan: 2 }, { title: '추정 수' }, { title: '비율' }],
        },
        data: [
            {
                a: { text: '취업 희망 여부', class: 'ac' },
                child: [
                   { A : {text : '취업 희망', class : 'al'}, B : {text :' 40,571 '}, C : {text :' 50.7 '}},
                    { A : {text : '취업 비희망', class : 'al'}, B : {text :' 38,374 '}, C : {text :' 47.9 '}}
                ],
            },
            {
                a: { text: '당장 내일부터 일할 의향', class: 'ac' },
                child: [
                    { A : {text : '네, 일할래요', class : 'al'}, B : {text :' 18,458 '}, C : {text :' 45.5 '}},
                    { A : {text : '아니요, 안할래요', class : 'al'}, B : {text :' 22,113 '}, C : {text :' 54.5 '}}                ],
            },
            { A: { text: '전 체', class: 'ac', colSpan: 2 }, B: { text: ' 80,042 ', class: 'ar' }, C: { text: ' 100.0 ', class: 'ar' } },
        ],
    },
    //발달장애인 당사자가 나중에 살고 싶은 방식
    chart_316: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '나중에 살고 싶은 방식',
            cols: [{ width: '50%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '추정 수' }, { title: '비율' }],
        },
        data: [
            { A : {text : '나는 가족(부모님)과 함께 살고 싶다', class : 'al'}, B : {text :' 71,205 '}, C : {text :' 52.1 '}},
            { A : {text : '나는 결혼해서 아내(남편)와 살고 싶다', class : 'al'}, B : {text :' 32,490 '}, C : {text :' 23.8 '}},
            { A : {text : '나는 혼자서 살고 싶다', class : 'al'}, B : {text :' 3,489 '}, C : {text :' 2.6 '}},
            { A : {text : '나는 친구와 살고 싶다', class : 'al'}, B : {text :' 28,453 '}, C : {text :' 20.8 '}},
            { A : {text : '전체', class : 'ac'}, B : {text :' 136,649 '}, C : {text :' 100.0 '}},

        ],
    },
    //등록장애인 추이
    chart_401: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '등록장애인 추이',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '등록장애인 수' }, { title: '등록장애인 비율' }, { title: '전체인구 수' }],
        },
        data: [
            { A : {text : '92', class:'ac'}, B : {text :'242,419'}, C : {text :'0.54'} , D : {text :'44,503,200'} },
            { A : {text : '93', class:'ac'}, B : {text :'265,442'}, C : {text :'0.59'} , D : {text :'45,001,113'} },
            { A : {text : '94', class:'ac'}, B : {text :'294,246'}, C : {text :'0.65'} , D : {text :'45,416,339'} },
            { A : {text : '95', class:'ac'}, B : {text :'324,860'}, C : {text :'0.71'} , D : {text :'45,858,029'} },
            { A : {text : '96', class:'ac'}, B : {text :'362,475'}, C : {text :'0.78'} , D : {text :'46,266,256'} },
            { A : {text : '97', class:'ac'}, B : {text :'425,064'}, C : {text :'0.91'} , D : {text :'46,684,069'} },
            { A : {text : '98', class:'ac'}, B : {text :'527,250'}, C : {text :'1.12'} , D : {text :'46,991,171'} },
            { A : {text : '99', class:'ac'}, B : {text :'697,513'}, C : {text :'1.47'} , D : {text :'47,335,678'} },
            { A : {text : '00', class:'ac'}, B : {text :'958,196'}, C : {text :'2.01'} , D : {text :'47,732,558'} },
            { A : {text : '01', class:'ac'}, B : {text :'1,134,177'}, C : {text :'2.36'} , D : {text :'48,021,543'} },
            { A : {text : '02', class:'ac'}, B : {text :'1,294,254'}, C : {text :'2.68'} , D : {text :'48,229,948'} },
            { A : {text : '03', class:'ac'}, B : {text :'1,454,215'}, C : {text :'3.01'} , D : {text :'48,386,823'} },
            { A : {text : '04', class:'ac'}, B : {text :'1,610,994'}, C : {text :'3.32'} , D : {text :'48,583,805'} },
            { A : {text : '05', class:'ac'}, B : {text :'1,789,443'}, C : {text :'3.67'} , D : {text :'48,782,274'} },
            { A : {text : '06', class:'ac'}, B : {text :'1,967,326'}, C : {text :'4.02'} , D : {text :'48,991,779'} },
            { A : {text : '07', class:'ac'}, B : {text :'2,104,889'}, C : {text :'4.27'} , D : {text :'49,268,928'} },
            { A : {text : '08', class:'ac'}, B : {text :'2,246,965'}, C : {text :'4.54'} , D : {text :'49,540,367'} },
            { A : {text : '09', class:'ac'}, B : {text :'2,429,547'}, C : {text :'4.88'} , D : {text :'49,773,145'} },
            { A : {text : '10', class:'ac'}, B : {text :'2,517,312'}, C : {text :'4.98'} , D : {text :'50,515,666'} },
            { A : {text : '11', class:'ac'}, B : {text :'2,519,241'}, C : {text :'4.97'} , D : {text :'50,734,284'} },
            { A : {text : '12', class:'ac'}, B : {text :'2,511,159'}, C : {text :'4.93'} , D : {text :'50,948,272'} },
            { A : {text : '13', class:'ac'}, B : {text :'2,501,112'}, C : {text :'4.89'} , D : {text :'51,141,463'} },
            { A : {text : '14', class:'ac'}, B : {text :'2,494,460'}, C : {text :'4.86'} , D : {text :'51,327,916'} },
            { A : {text : '15', class:'ac'}, B : {text :'2,490,406'}, C : {text :'4.83'} , D : {text :'51,529,338'} },
            { A : {text : '16', class:'ac'}, B : {text :'2,511,051'}, C : {text :'4.86'} , D : {text :'51,696,216'} },
            { A : {text : '17', class:'ac'}, B : {text :'2,545,637'}, C : {text :'4.92'} , D : {text :'51,778,544'} },
            { A : {text : '18', class:'ac'}, B : {text :'2,585,850'}, C : {text :'4.99'} , D : {text :'51,826,059'} },
            { A : {text : '19', class:'ac'}, B : {text :'2,618,724'}, C : {text :'5.05'} , D : {text :'51,849,861'} },
            { A : {text : '20', class:'ac'}, B : {text :'2,632,328'}, C : {text :'5.08'} , D : {text :'51,829,023'} },
            { A : {text : '21', class:'ac'}, B : {text :'2,642,922'}, C : {text :'5.12'} , D : {text :'51,638,809'} },
            { A : {text : '22', class:'ac'}, B : {text :'2,643,696'}, C : {text :'5.14'} , D : {text :'51,439,038'} },
            { A : {text : '23', class:'ac'}, B : {text :'2,633,262'}, C : {text :'5.13'} , D : {text :'51,325,329'} },
            { A : {text : '24', class:'ac'}, B : {text :'2,631,356'}, C : {text :'5.14'} , D : {text :'51,217,221'} },

        ],
    },

    //등록장애인 성별 분포
    chart_402: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '등록장애인 성별 분포',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '남성' }, { title: '여성' }, { title: '여성 비율' }],
        },
        data: [
            { A : {text : '01', class: 'ac'}, B : {text :'779,356'}, C : {text :'354,821'} , D : {text :'31.3'} },
            { A : {text : '02', class: 'ac'}, B : {text :'872,739'}, C : {text :'421,515'} , D : {text :'32.6'} },
            { A : {text : '03', class: 'ac'}, B : {text :'964,363'}, C : {text :'489,852'} , D : {text :'33.7'} },
            { A : {text : '04', class: 'ac'}, B : {text :'1,047,562'}, C : {text :'563,432'} , D : {text :'35.0'} },
            { A : {text : '05', class: 'ac'}, B : {text :'1,138,641'}, C : {text :'650,802'} , D : {text :'36.4'} },
            { A : {text : '06', class: 'ac'}, B : {text :'1,223,644'}, C : {text :'743,682'} , D : {text :'37.8'} },
            { A : {text : '07', class: 'ac'}, B : {text :'1,284,089'}, C : {text :'820,800'} , D : {text :'39.0'} },
            { A : {text : '08', class: 'ac'}, B : {text :'1,345,557'}, C : {text :'901,408'} , D : {text :'40.1'} },
            { A : {text : '09', class: 'ac'}, B : {text :'1,425,896'}, C : {text :'1,003,651'} , D : {text :'41.3'} },
            { A : {text : '10', class: 'ac'}, B : {text :'1,468,333'}, C : {text :'1,048,979'} , D : {text :'41.7'} },
            { A : {text : '11', class: 'ac'}, B : {text :'1,466,460'}, C : {text :'1,052,781'} , D : {text :'41.8'} },
            { A : {text : '12', class: 'ac'}, B : {text :'1,460,490'}, C : {text :'1,050,669'} , D : {text :'41.8'} },
            { A : {text : '13', class: 'ac'}, B : {text :'1,453,606'}, C : {text :'1,047,506'} , D : {text :'41.9'} },
            { A : {text : '14', class: 'ac'}, B : {text :'1,448,878'}, C : {text :'1,045,582'} , D : {text :'41.9'} },
            { A : {text : '15', class: 'ac'}, B : {text :'1,446,943'}, C : {text :'1,043,463'} , D : {text :'41.9'} },
            { A : {text : '16', class: 'ac'}, B : {text :'1,457,588'}, C : {text :'1,053,463'} , D : {text :'42'} },
            { A : {text : '17', class: 'ac'}, B : {text :'1,475,550'}, C : {text :'1,070,087'} , D : {text :'42'} },
            { A : {text : '18', class: 'ac'}, B : {text :'1,496,287'}, C : {text :'1,089,563'} , D : {text :'42.1'} },
            { A : {text : '19', class: 'ac'}, B : {text :'1,513,099'}, C : {text :'1,105,625'} , D : {text :'42.2'} },
            { A : {text : '20', class: 'ac'}, B : {text :'1,520,852'}, C : {text :'1,111,476'} , D : {text :'42.2'} },
            { A : {text : '21', class: 'ac'}, B : {text :'1,527,233'}, C : {text :'1,115,689'} , D : {text :'42.2'} },
            { A : {text : '22', class: 'ac'}, B : {text :'1,529,440'}, C : {text :'1,114,256'} , D : {text :'42.1'} },
            { A : {text : '23', class: 'ac'}, B : {text :'1,524,697'}, C : {text :'1,108,565'} , D : {text :'42.1'} },
            { A : {text : '24', class: 'ac'}, B : {text :'1,525,056'}, C : {text :'1,106,300'} , D : {text :'42.0'} },

        ],
    },
    //등록장애인 연령 분포
    chart_403: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '등록장애인 연령 분포',
            cols: [{ width: '20%' }, { width: '20%' }, { width: '20%' }, { width: '20%' }, { width: '20%' }],
            headers: [{ title: '구분' }, { title: '장애인' }, { title: '장애인 비율' }, { title: '전체인구' }, { title: '전체인구 비율' }],
        },
        data: [

            { A : {text : ' 0~9세 ', class: 'ac' }, B : {text :'36,032'}, C : {text :'1.4'} , D : {text :'3,140,118'} , E : {text :'6.1'} },
            { A : {text : ' 10~19세 ', class: 'ac' }, B : {text :'66,734'}, C : {text :'2.5'} , D : {text :'4,619,265'} , E : {text :'9.0'} },
            { A : {text : ' 20~29세 ', class: 'ac' }, B : {text :'91,377'}, C : {text :'3.5'} , D : {text :'5,955,656'} , E : {text :'11.6'} },
            { A : {text : ' 30~39세 ', class: 'ac' }, B : {text :'109,585'}, C : {text :'4.2'} , D : {text :'6,624,563'} , E : {text :'12.9'} },
            { A : {text : ' 40~49세 ', class: 'ac' }, B : {text :'197,616'}, C : {text :'7.5'} , D : {text :'7,722,823'} , E : {text :'15.1'} },
            { A : {text : ' 50~59세 ', class: 'ac' }, B : {text :'382,385'}, C : {text :'14.5'} , D : {text :'8,706,370'} , E : {text :'17.0'} },
            { A : {text : ' 60~69세 ', class: 'ac' }, B : {text :'621,450'}, C : {text :'23.6'} , D : {text :'7,818,783'} , E : {text :'15.3'} },
            { A : {text : ' 70~79세 ', class: 'ac' }, B : {text :'578,655'}, C : {text :'22.0'} , D : {text :'4,186,597'} , E : {text :'8.2'} },
            { A : {text : ' 80세 이상 ', class: 'ac' }, B : {text :'547,522'}, C : {text :'20.8'} , D : {text :'2,443,046'} , E : {text :'4.8'} },

            
        ],
    },
    //65세 이상 등록장애인 비율
    chart_404: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '65세 이상 등록장애인 비율',
            cols: [{ width: '20%' }, { width: '20%' }, { width: '20%' }, { width: '20%' }, { width: '20%' }],
            headers: [{ title: '구분', colSpan: 2 }, { title: '2014' }, { title: '2019' }, { title: '2024' }],
        },
        data: [
            {
                a: { text: '장애인', class: 'ac' },
                child: [                  
                    { A : {text : '전체', class: 'al' }, B : {text :'2,494,460'}, C : {text :'2,618,724'} , D : {text :'2,631,356'}},
                    { A : {text : '65세 이상', class: 'al' }, B : {text :'1,033,308'}, C : {text :'1,263,791'} , D : {text :'1,455,782'}},
                    { A : {text : '65세 이상 비율', class: 'al' }, B : {text :'41.4'}, C : {text :'48.3'} , D : {text :'55.3'}}
                ],
            },
            {
                a: { text: '전체인구', class: 'ac' },
                child: [
                    { A : {text : '전체', class: 'al'}, B : {text :'51,327,916'}, C : {text :'51,849,861'} , D : {text :'51,217,221'}},
                    { A : {text : '65세 이상', class: 'al'}, B : {text :'6,520,607'}, C : {text :'8,026,915'} , D : {text :'10,256,782'}},
                    { A : {text : '65세 이상 비율', class: 'al'}, B : {text :'12.7'}, C : {text :'15.5'} , D : {text :'20'}}
                ],
            },
        ],
    },
    //15-64세 등록장애인 추이
    chart_405: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 천명)',
            tableTitle: '15-64세 등록장애인 추이',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '전체' }, { title: '15~64세' }, { title: '65세 이상' }],
        },
        data: [
            { A : {text : '07', class: 'ac'}, B : {text :'2,105'}, C : {text :'1,360'} , D : {text :'689 '}},
            { A : {text : '08', class: 'ac'}, B : {text :'2,247'}, C : {text :'1,418'} , D : {text :'772 '}},
            { A : {text : '09', class: 'ac'}, B : {text :'2,430'}, C : {text :'1,501'} , D : {text :'869 '}},
            { A : {text : '10', class: 'ac'}, B : {text :'2,517'}, C : {text :'1,525'} , D : {text :'935 '}},
            { A : {text : '11', class: 'ac'}, B : {text :'2,519'}, C : {text :'1,506'} , D : {text :'958'}},
            { A : {text : '12', class: 'ac'}, B : {text :'2,511'}, C : {text :'1,470'} , D : {text :'987'}},
            { A : {text : '13', class: 'ac'}, B : {text :'2,501'}, C : {text :'1,440'} , D : {text :'1,010'}},
            { A : {text : '14', class: 'ac'}, B : {text :'2,494'}, C : {text :'1,411'} , D : {text :'1,033'}},
            { A : {text : '15', class: 'ac'}, B : {text :'2,490'}, C : {text :'1,388'} , D : {text :'1,053'}},
            { A : {text : '16', class: 'ac'}, B : {text :'2,511'}, C : {text :'1,372'} , D : {text :'1,089'}},
            { A : {text : '17', class: 'ac'}, B : {text :'2,546'}, C : {text :'1,344'} , D : {text :'1,150'}},
            { A : {text : '18', class: 'ac'}, B : {text :'2,586'}, C : {text :'1,326'} , D : {text :'1,206'}},
            { A : {text : '19', class: 'ac'}, B : {text :'2,619'}, C : {text :'1,299'} , D : {text :'1,264'}},
            { A : {text : '20', class: 'ac'}, B : {text :'2,632'}, C : {text :'1,260'} , D : {text :'1,314'}},
            { A : {text : '21', class: 'ac'}, B : {text :'2,643'}, C : {text :'1,226'} , D : {text :'1,356'}},
            { A : {text : '22', class: 'ac'}, B : {text :'2,644'}, C : {text :'1,186'} , D : {text :'1,394'}},
            { A : {text : '23', class: 'ac'}, B : {text :'2,633'}, C : {text :'1,148'} , D : {text :'1,418'}},
            { A : {text : '24', class: 'ac'}, B : {text :'2,631'}, C : {text :'1,105'} , D : {text :'1,455'}}
        ],
    },
    //등록장애인 장애유형 분포
    chart_406: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '등록장애인 장애유형 분포',
            annotation: '(단위 : 천명)',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '2014' }, { title: '2019' }, { title: '2024' }],
        },
        data: [
            { A : {text : '지체', class: 'ac'}, B : {text :' 1,296 '}, C : {text :' 1,223 '} , D : {text :' 1,133 '}},
            { A : {text : '뇌병변', class: 'ac'}, B : {text :' 252 '}, C : {text :' 252 '} , D : {text :' 235 '}},
            { A : {text : '시각', class: 'ac'}, B : {text :' 253 '}, C : {text :' 253 '} , D : {text :' 246 '}},
            { A : {text : '청각', class: 'ac'}, B : {text :' 253 '}, C : {text :' 377 '} , D : {text :' 442 '}},
            { A : {text : '언어', class: 'ac'}, B : {text :' 18 '}, C : {text :' 21 '} , D : {text :' 22 '}},
            { A : {text : '지적', class: 'ac'}, B : {text :' 184 '}, C : {text :' 213 '} , D : {text :' 233 '}},
            { A : {text : '자폐성', class: 'ac' }, B : {text :' 20 '}, C : {text :' 29 '} , D : {text :' 47 '}},
            { A : {text : '정신', class: 'ac'}, B : {text :' 97 '}, C : {text :' 103 '} , D : {text :' 103 '}},
            { A : {text : '신장', class: 'ac'}, B : {text :' 70 '}, C : {text :' 92 '} , D : {text :' 111 '}},
            { A : {text : '심장', class: 'ac'}, B : {text :' 6 '}, C : {text :' 5 '} , D : {text :' 5 '}},
            { A : {text : '호흡기', class: 'ac'}, B : {text :' 12 '}, C : {text :' 12 '} , D : {text :' 11 '}},
            { A : {text : '간', class: 'ac'}, B : {text :' 10 '}, C : {text :' 13 '} , D : {text :' 16 '}},
            { A : {text : '안면', class: 'ac'}, B : {text :' 3 '}, C : {text :' 3 '} , D : {text :' 3 '}},
            { A : {text : '장루ㆍ요루', class: 'ac'}, B : {text :' 14 '}, C : {text :' 15 '} , D : {text :' 17 '}},
            { A : {text : '뇌전증', class: 'ac'}, B : {text :' 7 '}, C : {text :' 7 '} , D : {text :' 7 '}}
        ],
    },
    //등록장애인 장애정도 분포
    chart_407: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '등록장애인 장애정도 분포',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '심한장애' }, { title: '심하지않은장애' }, { title: '심한장애 비율' }],
        },
        data: [
            { A : {text : '01', class : 'ac'}, B : {text :'584,043'}, C : {text :'550,134'} , D : {text :'51.5'}},
            { A : {text : '02', class : 'ac'}, B : {text :'645,553'}, C : {text :'648,701'} , D : {text :'49.9'}},
            { A : {text : '03', class : 'ac'}, B : {text :'701,936'}, C : {text :'752,279'} , D : {text :'48.3'}},
            { A : {text : '04', class : 'ac'}, B : {text :'756,140'}, C : {text :'854,854'} , D : {text :'46.9'}},
            { A : {text : '05', class : 'ac'}, B : {text :'816,476'}, C : {text :'972,967'} , D : {text :'45.6'}},
            { A : {text : '06', class : 'ac'}, B : {text :'877,562'}, C : {text :'1,089,764'} , D : {text :'44.6'}},
            { A : {text : '07', class : 'ac'}, B : {text :'917,596'}, C : {text :'1,187,293'} , D : {text :'43.6'}},
            { A : {text : '08', class : 'ac'}, B : {text :'956,576'}, C : {text :'1,290,389'} , D : {text :'42.6'}},
            { A : {text : '09', class : 'ac'}, B : {text :'1,011,900'}, C : {text :'1,417,647'} , D : {text :'41.6'}},
            { A : {text : '10', class : 'ac'}, B : {text :'1,009,700'}, C : {text :'1,507,612'} , D : {text :'40.1'}},
            { A : {text : '11', class : 'ac'}, B : {text :'992,343'}, C : {text :'1,526,898'} , D : {text :'39.4'}},
            { A : {text : '12', class : 'ac'}, B : {text :'980,018'}, C : {text :'1,531,141'} , D : {text :'39.0'}},
            { A : {text : '13', class : 'ac'}, B : {text :'971,102'}, C : {text :'1,530,010'} , D : {text :'38.8'}},
            { A : {text : '14', class : 'ac'}, B : {text :'966,466'}, C : {text :'1,527,994'} , D : {text :'38.7'}},
            { A : {text : '15', class : 'ac'}, B : {text :'965,381'}, C : {text :'1,525,025'} , D : {text :'38.8'}},
            { A : {text : '16', class : 'ac'}, B : {text :'969,557'}, C : {text :'1,541,494'} , D : {text :'38.6'}},
            { A : {text : '17', class : 'ac'}, B : {text :'978,526'}, C : {text :'1,567,111'} , D : {text :'38.4'}},
            { A : {text : '18', class : 'ac'}, B : {text :'983,755'}, C : {text :'1,602,095'} , D : {text :'38.0'}},
            { A : {text : '19', class : 'ac'}, B : {text :'985,228'}, C : {text :'1,633,496'} , D : {text :'37.6'}},
            { A : {text : '20', class : 'ac'}, B : {text :' 984,303 '}, C : {text :' 1,648,025 '} , D : {text :'37.4'}},
            { A : {text : '21', class : 'ac'}, B : {text :' 983,108 '}, C : {text :' 1,659,814 '} , D : {text :'37.2'}},
            { A : {text : '22', class : 'ac'}, B : {text :' 977,805 '}, C : {text :' 1,665,891 '} , D : {text :'37.0'}},
            { A : {text : '23', class : 'ac'}, B : {text :' 970,289 '}, C : {text :' 1,662,973 '} , D : {text :'36.8'}},
            { A : {text : '24', class : 'ac'}, B : {text :' 966,428 '}, C : {text :' 1,664,928 '} , D : {text :'36.7'}}

        ],
    },
    //연령별 지체, 청각, 발달장애 비중 변화
    chart_408: {
        meta: {
            tableInfo: { class: 'table' },
            annotation: '(단위 : 명, %)',
            tableTitle: '연령별 지체, 청각, 발달장애 비율 변화',
            cols: [
                { width: '120px' },
                { width: '120px' },
                { width: '120px' },
                { width: '120px' },
                { width: '120px' },
                { width: '120px' },
                { width: '120px' },
                { width: '120px' },
                { width: '120px' },
                { width: '120px' },
                { width: '120px' },
                { width: '120px' },
                { width: '120px' },
                { width: '120px' },
                { width: '120px' },
            ],
            headers: [
                { title: '구분' },
                { title: '2014 합계' },
                { title: '2014 지체' },
                { title: '14 지체 비율' },
                { title: '2014 청각' },
                { title: '14 청각 비율' },
                { title: '2014 발달' },
                { title: '14 발달 비율' },
                { title: '2024 합계' },
                { title: '2024 지체' },
                { title: '24 지체 비율' },
                { title: '2024 청각' },
                { title: '24 청각 비율' },
                { title: '2024 발달' },
                { title: '24 발달 비율' },
            ],
        },
        data: [
            { A : {text : '0-4세', class : 'ac'}, B : {text :' 5,159 '}, C : {text :' 270 '} , D : {text :' 5.2 '}, E : {text :' 637 '}, F : {text :' 12.3 '}, G : {text :' 1,336 '}, H : {text :' 25.9 '}, I : {text :' 4,051 '}, J : {text :' 160 '}, K : {text :' 3.9 '}, L : {text :' 506 '}, M : {text :' 12.5 '}, N : {text :' 1,068 '}, O : {text :' 26.4 '}},
            { A : {text : '5-9세', class : 'ac'}, B : {text :' 17,798 '}, C : {text :' 721 '} , D : {text :' 4.1 '}, E : {text :' 1,082 '}, F : {text :' 6.1 '}, G : {text :' 10,980 '}, H : {text :' 61.7 '}, I : {text :' 31,981 '}, J : {text :' 490 '}, K : {text :' 1.5 '}, L : {text :' 956 '}, M : {text :' 3.0 '}, N : {text :' 23,818 '}, O : {text :' 74.5 '}},
            { A : {text : '10-14세', class : 'ac'}, B : {text :' 27,307 '}, C : {text :' 1,584 '} , D : {text :' 5.8 '}, E : {text :' 1,472 '}, F : {text :' 5.4 '}, G : {text :' 18,019 '}, H : {text :' 66.0 '}, I : {text :' 34,201 '}, J : {text :' 1,013 '}, K : {text :' 3.0 '}, L : {text :' 1,163 '}, M : {text :' 3.4 '}, N : {text :' 27,273 '}, O : {text :' 79.7 '}},
            { A : {text : '15-19세', class : 'ac'}, B : {text :' 40,258 '}, C : {text :' 3,698 '} , D : {text :' 9.2 '}, E : {text :' 2,088 '}, F : {text :' 5.2 '}, G : {text :' 27,508 '}, H : {text :' 68.3 '}, I : {text :' 32,533 '}, J : {text :' 2,144 '}, K : {text :' 6.6 '}, L : {text :' 1,282 '}, M : {text :' 3.9 '}, N : {text :' 24,680 '}, O : {text :' 75.9 '}},
            { A : {text : '20-24세', class : 'ac'}, B : {text :' 43,746 '}, C : {text :' 6,755 '} , D : {text :' 15.4 '}, E : {text :' 2,412 '}, F : {text :' 5.5 '}, G : {text :' 26,715 '}, H : {text :' 61.1 '}, I : {text :' 39,830 '}, J : {text :' 3,476 '}, K : {text :' 8.7 '}, L : {text :' 1,716 '}, M : {text :' 4.3 '}, N : {text :' 27,614 '}, O : {text :' 69.3 '}},
            { A : {text : '25-29세', class : 'ac'}, B : {text :' 45,423 '}, C : {text :' 12,200 '} , D : {text :' 26.9 '}, E : {text :' 2,394 '}, F : {text :' 5.3 '}, G : {text :' 20,188 '}, H : {text :' 44.4 '}, I : {text :' 51,547 '}, J : {text :' 5,941 '}, K : {text :' 11.5 '}, L : {text :' 2,445 '}, M : {text :' 4.7 '}, N : {text :' 32,727 '}, O : {text :' 63.5 '}},
            { A : {text : '30-34세', class : 'ac'}, B : {text :' 70,917 '}, C : {text :' 28,215 '} , D : {text :' 39.8 '}, E : {text :' 3,684 '}, F : {text :' 5.2 '}, G : {text :' 18,622 '}, H : {text :' 26.3 '}, I : {text :' 53,744 '}, J : {text :' 8,937 '}, K : {text :' 16.6 '}, L : {text :' 2,785 '}, M : {text :' 5.2 '}, N : {text :' 28,076 '}, O : {text :' 52.2 '}},
            { A : {text : '35-39세', class : 'ac'}, B : {text :' 93,780 '}, C : {text :' 44,841 '} , D : {text :' 47.8 '}, E : {text :' 4,687 '}, F : {text :' 5.0 '}, G : {text :' 15,863 '}, H : {text :' 16.9 '}, I : {text :' 55,841 '}, J : {text :' 14,147 '}, K : {text :' 25.3 '}, L : {text :' 2,845 '}, M : {text :' 5.1 '}, N : {text :' 21,010 '}, O : {text :' 37.6 '}},
            { A : {text : '40-44세', class : 'ac'}, B : {text :' 137,802 '}, C : {text :' 70,562 '} , D : {text :' 51.2 '}, E : {text :' 6,776 '}, F : {text :' 4.9 '}, G : {text :' 15,918 '}, H : {text :' 11.6 '}, I : {text :' 86,003 '}, J : {text :' 30,978 '}, K : {text :' 36.0 '}, L : {text :' 4,411 '}, M : {text :' 5.1 '}, N : {text :' 19,621 '}, O : {text :' 22.8 '}},
            { A : {text : '45-49세', class : 'ac'}, B : {text :' 186,669 '}, C : {text :' 105,215 '} , D : {text :' 56.4 '}, E : {text :' 9,844 '}, F : {text :' 5.3 '}, G : {text :' 13,920 '}, H : {text :' 7.5 '}, I : {text :' 111,613 '}, J : {text :' 48,147 '}, K : {text :' 43.1 '}, L : {text :' 5,764 '}, M : {text :' 5.2 '}, N : {text :' 16,613 '}, O : {text :' 14.9 '}},
            { A : {text : '50-54세', class : 'ac'}, B : {text :' 250,931 '}, C : {text :' 147,751 '} , D : {text :' 58.9 '}, E : {text :' 15,902 '}, F : {text :' 6.3 '}, G : {text :' 12,295 '}, H : {text :' 4.9 '}, I : {text :' 163,707 '}, J : {text :' 75,196 '}, K : {text :' 45.9 '}, L : {text :' 8,971 '}, M : {text :' 5.5 '}, N : {text :' 16,453 '}, O : {text :' 10.1 '}},
            { A : {text : '55-59세', class : 'ac'}, B : {text :' 285,510 '}, C : {text :' 169,675 '} , D : {text :' 59.4 '}, E : {text :' 20,316 '}, F : {text :' 7.1 '}, G : {text :' 9,723 '}, H : {text :' 3.4 '}, I : {text :' 218,678 '}, J : {text :' 110,265 '}, K : {text :' 50.4 '}, L : {text :' 14,377 '}, M : {text :' 6.6 '}, N : {text :' 14,033 '}, O : {text :' 6.4 '}},
            { A : {text : '60-64세', class : 'ac'}, B : {text :' 255,852 '}, C : {text :' 150,634 '} , D : {text :' 58.9 '}, E : {text :' 20,449 '}, F : {text :' 8.0 '}, G : {text :' 5,487 '}, H : {text :' 2.1 '}, I : {text :' 291,845 '}, J : {text :' 154,050 '}, K : {text :' 52.8 '}, L : {text :' 26,762 '}, M : {text :' 9.2 '}, N : {text :' 11,863 '}, O : {text :' 4.1 '}},
            { A : {text : '65세 이상', class : 'ac'}, B : {text :' 1,033,308 '}, C : {text :' 553,487 '} , D : {text :' 53.6 '}, E : {text :' 161,036 '}, F : {text :' 15.6 '}, G : {text :' 7,305 '}, H : {text :' 0.7 '}, I : {text :' 1,455,782 '}, J : {text :' 677,700 '}, K : {text :' 46.6 '}, L : {text :' 368,051 '}, M : {text :' 25.3 '}, N : {text :' 15,823 '}, O : {text :' 1.1 '}}

        ],
    },
};
