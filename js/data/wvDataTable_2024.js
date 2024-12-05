const tableDataSet = {
    //최근 5개년 장애인 고용률
    chart_101: {
        meta: {
            id: '101',
            tableInfo: { class: 'table' },
            tableTitle: '최근 5개년 장애인 고용률',
            cols: [{ width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }],
            headers: [
                [
                    {
                        title: '구분',
                        colSpan: 2,
                    },
                    {
                        title: '15세이상인구(명)',
                    },
                    {
                        title: '취업자(명)',
                    },
                    {
                        title: '고용률(%)',
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
            tableTitle: '최근 5개년 장애인 실업률',
            cols: [{ width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }],
            headers: [
                {
                    title: '구분',
                    colSpan: 2,
                },
                {
                    title: '15세이상인구(명)',
                },
                {
                    title: '실업자(명)',
                },
                {
                    title: '실업률(%)',
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
            tableTitle: '최근 5개년 장애인 경제활동참가율',
            cols: [{ width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }],
            headers: [
                {
                    title: '구분',
                    colSpan: 2,
                },
                {
                    title: '15세이상인구(명)',
                },
                {
                    title: '실업자(명)',
                },
                {
                    title: '경제활동참가율(%)',
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
            tableTitle: '최근 5개년 장애인 비경제활동인구 비율',
            cols: [{ width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }],
            headers: [
                {
                    title: '구분',
                    colSpan: 2,
                },
                {
                    title: '15세이상인구(명)',
                },
                {
                    title: '경제활동인구(명)',
                },
                {
                    title: '경제활동참가율(%)',
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
            tableTitle: '성별 고용률',
            cols: [{ width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }],
            headers: [
                {
                    title: '구분',
                    colSpan: 2,
                },
                {
                    title: '15세이상인구(명)',
                },
                {
                    title: '취업자(명)',
                },
                {
                    title: '고용률(%)',
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
            tableTitle: '연령별 고용률',
            cols: 4,
            headers: [
                {
                    title: '구분',
                },
                {
                    title: '15세이상인구(명)',
                },
                {
                    title: '취업자(명)',
                },
                {
                    title: '고용률(%)',
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
            tableTitle: '장애유형별 고용률',
            cols: 4,
            headers: [
                {
                    title: '구분',
                },
                {
                    title: '15세이상인구(명)',
                },
                {
                    title: '취업자(명)',
                },
                {
                    title: '고용률(%)',
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
            tableTitle: '장애정도별 고용률',
            cols: 4,
            headers: [
                {
                    title: '구분',
                },
                {
                    title: '15세이상인구(명)',
                },
                {
                    title: '취업자(명)',
                },
                {
                    title: '고용률(%)',
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
            tableTitle: '성별 경제활동참가율',
            cols: [{ width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }, { width: '33%' }],
            headers: [
                {
                    title: '구분',
                    colSpan: 2,
                },
                {
                    title: '15세이상인구(명)',
                },
                {
                    title: '경제활동인구(명)',
                },
                {
                    title: '경제활동참가율(%)',
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
            tableTitle: '연령별 경제활동참가율',
            cols: 4,
            headers: [
                {
                    title: '구분',
                },
                {
                    title: '15세이상인구(명)',
                },
                {
                    title: '경제활동인구(명)',
                },
                {
                    title: '경제활동참가율(%)',
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
            tableTitle: '장애유형별 경제활동참가율',
            cols: 4,
            headers: [
                {
                    title: '구분',
                },
                {
                    title: '15세이상인구(명)',
                },
                {
                    title: '경제활동인구(명)',
                },
                {
                    title: '경제활동참가율(%)',
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
            tableTitle: '장애정도별 경제활동참가율',
            cols: 4,
            headers: [
                {
                    title: '구분',
                },
                {
                    title: '15세이상인구(명)',
                },
                {
                    title: '경제활동인구(명)',
                },
                {
                    title: '경제활동참가율(%)',
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
            tableTitle: '장애인 취업자의 종사상지위',
            cols: [{ width: '20%' }, { width: '30%' }, { width: '25%' }, { width: '25%' }],
            headers: [
                {
                    title: '구분',
                    colSpan: 2,
                },
                {
                    title: '인원(명)',
                },
                {
                    title: '비율(%)',
                },
            ],
        },
        data: [
            {
                a: { text: '임금근로자', class: 'ac' },
                child: [
                    { A: { text: '상용근로자', class: 'al' }, B: { text: '342,068' }, C: { text: '39.3' } },
                    { A: { text: '임시근로자', class: 'al' }, B: { text: '221,398' }, C: { text: '25.4' } },
                    { A: { text: '일용근로자', class: 'al' }, B: { text: '70,604' }, C: { text: '8.1' } },
                ],
            },
            {
                a: { text: '비임금근로자', class: 'ac' },
                child: [
                    { A: { text: '고용원이 있는 자영업자', class: 'al' }, B: { text: '43143' }, C: { text: '5.0' } },
                    { A: { text: '고용원이 없는 자영업자', class: 'al' }, B: { text: '172563' }, C: { text: '19.8' } },
                    { A: { text: '무급가족종사자', class: 'al' }, B: { text: '21564' }, C: { text: '2.5' } },
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
            tableTitle: '장애인 취업자의 직장(일자리) 산업(상위 5개)',
            cols: [{ width: '40%' }, { width: '30%' }, { width: '30%' }],
            headers: [
                {
                    title: '구분',
                },
                {
                    title: '인원(명)',
                },
                {
                    title: '비율(%)',
                },
            ],
        },
        data: [
            { A: { text: '보건업 및 사회복지서비스업', class: 'al' }, B: { text: '144,115' }, C: { text: '16.5' } },
            { A: { text: '제조업', class: 'al' }, B: { text: '117,712' }, C: { text: '13.5' } },
            { A: { text: '농업, 임업, 어업 및 광업', class: 'al' }, B: { text: '90,759' }, C: { text: '10.4' } },
            { A: { text: '공공행정, 국방 및 사회보장 행정', class: 'al' }, B: { text: '75,708' }, C: { text: '8.7' } },
            { A: { text: '건설업', class: 'al' }, B: { text: '72,904' }, C: { text: '8.4' } },
            { A: { text: '전체', class: 'al' }, B: { text: '871,339' }, C: { text: '100' } },
        ],
    },
    //장애인 취업자의 직업(상위 5개)
    chart_115: {
        meta: {
            id: '110',
            tableInfo: { class: 'table' },
            tableTitle: '장애인 취업자의 직업(상위 5개)',
            cols: [{ width: '40%' }, { width: '30%' }, { width: '30%' }],
            headers: [
                {
                    title: '구분',
                },
                {
                    title: '인원(명)',
                },
                {
                    title: '비율(%)',
                },
            ],
        },
        data: [
            { A: { text: '단순노무 종사자' }, B: { text: ' 272,549 ' }, C: { text: ' 31.3 ' } },
            { A: { text: '사무 종사자' }, B: { text: ' 135,377 ' }, C: { text: ' 15.5 ' } },
            { A: { text: '장치·기계 조작 및 조립종사자' }, B: { text: ' 101,395 ' }, C: { text: ' 11.6 ' } },
            { A: { text: '농림어업 숙련 종사자' }, B: { text: ' 86,069 ' }, C: { text: ' 9.9 ' } },
            { A: { text: '기능원 및 관련기능 종사자' }, B: { text: ' 76,495 ' }, C: { text: ' 8.8 ' } },
            { A: { text: '전체' }, B: { text: ' 871,339 ' }, C: { text: ' 100.0 ' } },
        ],
    },
    //장애인 취업자의 직장(일자리) 유형
    chart_116: {
        meta: {
            id: '110',
            tableInfo: { class: 'table' },
            tableTitle: '장애인 취업자의 직업(상위 5개)',
            cols: [{ width: '50%' }, { width: '25%' }, { width: '25%' }],
            headers: [
                {
                    title: '구분',
                },
                {
                    title: '인원(명)',
                },
                {
                    title: '비율(%)',
                },
            ],
        },
        data: [
            { A: { text: '장애인 직업재활시설 일자리' }, B: { text: ' 31,352 ' }, C: { text: ' 3.6 ' } },
            { A: { text: '정부재정지원 일자리' }, B: { text: ' 140,365 ' }, C: { text: ' 16.1 ' } },
            { A: { text: '공무원, 교사 등 정부 및 공공기관 일자리' }, B: { text: ' 55,711 ' }, C: { text: ' 6.4 ' } },
            { A: { text: '그 외 일반사업체' }, B: { text: ' 643,911 ' }, C: { text: ' 73.9 ' } },
            { A: { text: '전체' }, B: { text: ' 871,339 ' }, C: { text: ' 100.0 ' } },
        ],
    },

    //장애인 임금근로자의 최근 3개월 월평균 임금
    chart_117: {
        meta: {
            id: '110',
            tableInfo: { class: 'table' },
            tableTitle: '장애인 임금근로자의 최근 3개월 월평균 임금',
            cols: [{ width: '50%' }, { width: '50%' }],
            headers: [
                {
                    title: '구분',
                },
                {
                    title: '최근 3개월 월평균 임금(만원)',
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
            tableTitle: '장애인 임금근로자의 비정규직 규모',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [
                {
                    title: '구분',
                    colSpan: 2,
                },
                {
                    title: '인원(명)',
                },
                {
                    title: '비율(%)',
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
            tableTitle: '장애인 비경제활동인구의 지난주 활동상태',
            cols: [{ width: '20%' }, { width: '20%' }, { width: '20%' }, { width: '20%' }],
            headers: [
                {
                    title: '구분',
                    colSpan: 2,
                },
                {
                    title: '인원(명)',
                },
                {
                    title: '비율(%)',
                },
            ],
        },
        data: [
            {
                a: { text: '지난주 활동상태', class: 'ac' },
                child: [
                    { A: { text: '육아' }, C: { text: '2,532' }, D: { text: '0.2' } },
                    { A: { text: '가사' }, C: { text: '217,612' }, D: { text: '13.1' } },
                    { A: { text: '재학·수강 등' }, C: { text: '36,491' }, D: { text: '2.2' } },
                    { A: { text: '연로' }, C: { text: '257,989' }, D: { text: '15.6' } },
                    { A: { text: '심신장애' }, C: { text: '618,992' }, D: { text: '37.4' } },
                    { A: { text: '심신장애' }, C: { text: '618,992' }, D: { text: '37.4' } },
                    { A: { text: '기타(쉬었음)' }, B: { text: '494,844' }, C: { text: '29.9' } },
                    { A: { text: '기타(쉬었음 외)' }, B: { text: '27,810' }, C: { text: '1.7' } },
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
            tableTitle: '장애인 비경제활동인구의 향후 일할 의사',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분', colSpan: 2, rowSpan: 3 }, { title: '인원(명)' }, { title: '비율(%)' }],
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
                    { A: { text: '소계', class: 'ac' }, B: { text: '1,285,554' }, C: { text: '100.0' } },
                ],
            },
            {
                a: { text: '전체 일할 의사', class: 'ac' },
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
            tableTitle: '장애인 고용기업체 비율',
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
            {
                A: { text: '1~4명', class: 'ac' },
                B: { text: ' 1,447,120 ' },
                C: { text: '76.0 ' },
                D: { text: '17,686' },
                E: { text: '27.6 ' },
                F: { text: '1,429,434' },
                G: { text: '77.7 ' },
                H: { text: '1.2 ' },
            },
            {
                A: { text: '5~49명', class: 'ac' },
                B: { text: ' 423,575 ' },
                C: { text: '22.2 ' },
                D: { text: '22,709' },
                E: { text: '35.4 ' },
                F: { text: '400,866' },
                G: { text: '21.8 ' },
                H: { text: '5.4 ' },
            },
            {
                A: { text: '50~299명', class: 'ac' },
                B: { text: ' 30,346 ' },
                C: { text: '1.6 ' },
                D: { text: '20,008' },
                E: { text: '31.2 ' },
                F: { text: '10,338' },
                G: { text: '0.6 ' },
                H: { text: '65.9 ' },
            },
            {
                A: { text: '300~999명', class: 'ac' },
                B: { text: ' 3,172 ' },
                C: { text: '0.2 ' },
                D: { text: '3,063' },
                E: { text: '4.8 ' },
                F: { text: '109' },
                G: { text: '0.0 ' },
                H: { text: '96.6 ' },
            },
            {
                A: { text: '1,000명 이상', class: 'ac' },
                B: { text: ' 654 ' },
                C: { text: '0.0 ' },
                D: { text: '649' },
                E: { text: '1.0 ' },
                F: { text: '5' },
                G: { text: '0.0 ' },
                H: { text: '99.3 ' },
            },
            {
                A: { text: '전체', class: 'ac' },
                B: { text: ' 1,904,866 ' },
                C: { text: '100.0 ' },
                D: { text: '64,115' },
                E: { text: '100.0 ' },
                F: { text: '1,840,751' },
                G: { text: '100.0 ' },
                H: { text: '3.4 ' },
            },
        ],
    },
    //장애인 근로자 비율
    chart_202: {
        meta: {
            tableInfo: { class: 'table' },
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
            { A: { text: '1~4명', class: 'al' }, B: { text: ' 3,611,077 ' }, C: { text: '24.2 ' }, D: { text: '17,769' }, E: { text: '8.5 ' }, F: { text: '0.49 ' } },
            { A: { text: '5~49명', class: 'al' }, B: { text: ' 4,604,712 ' }, C: { text: '30.9 ' }, D: { text: '33,489' }, E: { text: '16.0 ' }, F: { text: '0.73 ' } },
            { A: { text: '50~299명', class: 'al' }, B: { text: ' 3,162,787 ' }, C: { text: '21.2 ' }, D: { text: '68,821' }, E: { text: '32.9 ' }, F: { text: '2.18 ' } },
            { A: { text: '300~999명', class: 'al' }, B: { text: ' 1,494,710 ' }, C: { text: '10.0 ' }, D: { text: '34,548' }, E: { text: '16.5 ' }, F: { text: '2.31 ' } },
            { A: { text: '1,000명 이상', class: 'al' }, B: { text: ' 2,023,585 ' }, C: { text: '13.6 ' }, D: { text: '54,698' }, E: { text: '26.1 ' }, F: { text: '2.70 ' } },
            { A: { text: '전체', class: 'al' }, B: { text: ' 14,896,871 ' }, C: { text: '100.0 ' }, D: { text: '209,325' }, E: { text: '100.0 ' }, F: { text: '1.41 ' } },
        ],
    },
    //장애인 근로자 비율
    chart_203: {
        meta: {
            tableInfo: { class: 'table' },
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
            { A: { text: '남성', class: 'ac' }, B: { text: '9,055,852' }, C: { text: '60.8' }, D: { text: '146,786' }, E: { text: '70.1' }, F: { text: '1.62' } },
            { A: { text: '여성', class: 'ac' }, B: { text: '5,841,019' }, C: { text: '39.2' }, D: { text: '62,539' }, E: { text: '29.9' }, F: { text: '1.07' } },
            { A: { text: '전체', class: 'ac' }, B: { text: '14,896,871' }, C: { text: '100' }, D: { text: '209,325' }, E: { text: '100' }, F: { text: '1.41' } },
        ],
    },
    //장애인 임금근로자의 최근 3개월 월평균 임금
    chart_204: {
        meta: {
            id: '110',
            tableInfo: { class: 'table' },
            tableTitle: '장애인 임금근로자의 최근 3개월 월평균 임금',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분', colSpan: 2 }, { title: '장애인 근로자 수' }, { title: '비율' }],
        },
        data: [
            {
                a: { text: '신체외부', class: 'al' },
                child: [
                    { A: { text: '지체', class: 'al' }, B: { text: '147,910' }, C: { text: '70.7' } },
                    { A: { text: '뇌병변, 안면', class: 'al' }, B: { text: '4,920' }, C: { text: '2.4' } },
                ],
            },
            {
                a: { text: '감각', class: 'al' },
                child: [
                    { A: { text: '시각', class: 'al' }, B: { text: '11,364' }, C: { text: '5.4' } },
                    { A: { text: '청각, 언어', class: 'al' }, B: { text: '14,345' }, C: { text: '6.9' } },
                ],
            },
            {
                a: { text: '정신적', class: 'al' },
                child: [
                    { A: { text: '지적, 자폐성', class: 'al' }, B: { text: '16,849' }, C: { text: '8.0' } },
                    { A: { text: '정신', class: 'al' }, B: { text: '2,972' }, C: { text: '1.4' } },
                ],
            },
            { A: { text: '신체내부', class: 'al', colSpan: 2 }, B: { text: '4,114' }, C: { text: '2.0' } },
            { A: { text: '국가유공자', class: 'al', colSpan: 2 }, B: { text: '6,851' }, C: { text: '33.3' } },
        ],
    },
    //장애인 근로자 채용 이유(1순위)
    chart_205: {
        meta: {
            tableInfo: { class: 'table' },
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
            {
                A: { text: '고용의무를 이행하기 위해서', class: 'al' },
                B: { text: '31.2 ' },
                C: { text: '7.4 ' },
                D: { text: '54.0 ' },
                E: { text: '52.6 ' },
                F: { text: '61.0 ' },
                G: { text: '64.2 ' },
                H: { text: '57.2 ' },
            },
            {
                A: { text: '장려금 지원 등 사업주에 대한 지원제도 때문', class: 'al' },
                B: { text: '9.6 ' },
                C: { text: '4.3 ' },
                D: { text: '14.6 ' },
                E: { text: '15.0 ' },
                F: { text: '12.7 ' },
                G: { text: '11.9 ' },
                H: { text: '15.0 ' },
            },
            {
                A: { text: '기업의 사회적 이미지를 높이기 위해서', class: 'al' },
                B: { text: '5.8 ' },
                C: { text: '4.5 ' },
                D: { text: '7.0 ' },
                E: { text: '7.4 ' },
                F: { text: '5.5 ' },
                G: { text: '4.8 ' },
                H: { text: '7.3 ' },
            },
            {
                A: { text: '장애인 여부 고려 않고 업무상 필요에 의해', class: 'al' },
                B: { text: '47.5 ' },
                C: { text: '74.8 ' },
                D: { text: '21.4 ' },
                E: { text: '22.0 ' },
                F: { text: '17.8 ' },
                G: { text: '18.2 ' },
                H: { text: '18.0 ' },
            },
            {
                A: { text: '입사 후 장애인이 됐거나 장애인임을 알게 됨', class: 'al' },
                B: { text: '5.8 ' },
                C: { text: '9.0 ' },
                D: { text: '2.7 ' },
                E: { text: '2.8 ' },
                F: { text: '2.8 ' },
                G: { text: '0.9 ' },
                H: { text: '2.2 ' },
            },
            { A: { text: '기타', class: 'al' }, B: { text: '0.1 ' }, C: { text: '-' }, D: { text: '0.2 ' }, E: { text: '0.2 ' }, F: { text: '0.2 ' }, G: { text: '-' }, H: { text: '0.2 ' } },
            {
                A: { text: '전체', class: 'ac' },
                B: { text: '100.0 ' },
                C: { text: '100.0 ' },
                D: { text: '100.0 ' },
                E: { text: '100.0 ' },
                F: { text: '100.0 ' },
                G: { text: '100.0 ' },
                H: { text: '100.0 ' },
            },
            {
                A: { text: '(추정 수)', class: 'ac' },
                B: { text: '(46,429)' },
                C: { text: '(22,709)' },
                D: { text: '(23,720)' },
                E: { text: '(20,008)' },
                F: { text: '(3,063)' },
                G: { text: '(649)' },
                H: { text: '(14,635)' },
            },
        ],
    },
    //장애인 근로자 채용 방법
    chart_206: {
        meta: {
            tableInfo: { class: 'table' },
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
            {
                A: { text: '장애인과 비장애인 구분 없는 일괄채용(일반채용)', class: 'al' },
                B: { text: '79.1 ' },
                C: { text: '85.8 ' },
                D: { text: '72.6 ' },
                E: { text: '74.6 ' },
                F: { text: '62.0 ' },
                G: { text: '60.6 ' },
                H: { text: '66.8 ' },
            },
            {
                A: { text: '채용계획인원의 일정부분 장애인 할당채용', class: 'al' },
                B: { text: '8.8 ' },
                C: { text: '4.2 ' },
                D: { text: '13.2 ' },
                E: { text: '12.4 ' },
                F: { text: '17.8 ' },
                G: { text: '17.3 ' },
                H: { text: '15.8 ' },
            },
            {
                A: { text: '장애인만을 대상으로 별도 공개 채용', class: 'al' },
                B: { text: '4.4 ' },
                C: { text: '2.7 ' },
                D: { text: '6.0 ' },
                E: { text: '4.9 ' },
                F: { text: '11.2 ' },
                G: { text: '12.7 ' },
                H: { text: '8.2 ' },
            },
            {
                A: { text: '장애인의 경우 인사추천을 받아 개별 채용', class: 'al' },
                B: { text: '7.7 ' },
                C: { text: '7.3 ' },
                D: { text: '8.2 ' },
                E: { text: '8.1 ' },
                F: { text: '8.9 ' },
                G: { text: '9.3 ' },
                H: { text: '9.1 ' },
            },
            {
                A: { text: '전체', class: 'ac' },
                B: { text: '100.0 ' },
                C: { text: '100.0 ' },
                D: { text: '100.0 ' },
                E: { text: '100.0 ' },
                F: { text: '100.0 ' },
                G: { text: '100.0 ' },
                H: { text: '100.0 ' },
            },
            {
                A: { text: '(추정 수)', class: 'ac' },
                B: { text: '(46,429)' },
                C: { text: '(22,709)' },
                D: { text: '(23,720)' },
                E: { text: '(20,008)' },
                F: { text: '(3,063)' },
                G: { text: '(649)' },
                H: { text: '(14,635)' },
            },
        ],
    },

    //장애인 근로자 채용 시 애로사항(1순위) (상위 5개)
    chart_207: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '장애인 근로자 채용 시 애로사항(1순위) (상위 5개)',
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
            {
                A: { text: '업무능력을 갖춘 인력이 부족해서', class: 'al' },
                B: { text: '16.5 ' },
                C: { text: '9.8 ' },
                D: { text: '23.0 ' },
                E: { text: '22.6 ' },
                F: { text: '24.8 ' },
                G: { text: '25.9 ' },
                H: { text: '26.8 ' },
            },
            {
                A: { text: '장애인 지원자 자체가 없어서', class: 'al' },
                B: { text: '12.7 ' },
                C: { text: '5.8 ' },
                D: { text: '19.4 ' },
                E: { text: '19.4 ' },
                F: { text: '18.6 ' },
                G: { text: '22.4 ' },
                H: { text: '16.4 ' },
            },
            {
                A: { text: '장애인에게 적합한 직무가 부족하거나 찾지 못해서', class: 'al' },
                B: { text: '10.1 ' },
                C: { text: '7.3 ' },
                D: { text: '12.7 ' },
                E: { text: '11.7 ' },
                F: { text: '18.2 ' },
                G: { text: '15.4 ' },
                H: { text: '15.0 ' },
            },
            {
                A: { text: '사업주, 관리자, 동료 등이 채용에 대해 소극적', class: 'al' },
                B: { text: '1.5 ' },
                C: { text: '0.5 ' },
                D: { text: '2.5 ' },
                E: { text: '2.5 ' },
                F: { text: '3.1 ' },
                G: { text: '0.7 ' },
                H: { text: '3.1 ' },
            },
            {
                A: { text: '장애인용 시설 및 장비·편의시설 등이 부족해서', class: 'al' },
                B: { text: '1.5 ' },
                C: { text: '0.5 ' },
                D: { text: '2.3 ' },
                E: { text: '2.5 ' },
                F: { text: '1.3 ' },
                G: { text: '1.8 ' },
                H: { text: '2.2 ' },
            },
            {
                A: { text: '전체', class: 'ac' },
                B: { text: '100.0 ' },
                C: { text: '100.0 ' },
                D: { text: '100.0 ' },
                E: { text: '100.0 ' },
                F: { text: '100.0 ' },
                G: { text: '100.0 ' },
                H: { text: '100.0 ' },
            },
            {
                A: { text: '(추정 수)', class: 'ac' },
                B: { text: '(46,429)' },
                C: { text: '(22,709)' },
                D: { text: '(23,720)' },
                E: { text: '(20,008)' },
                F: { text: '(3,063)' },
                G: { text: '(649)' },
                H: { text: '(14,635)' },
            },
        ],
    },

    //중증장애인 수행가능 직무가 있는 비율
    chart_208: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '중증장애인 수행가능 직무가 있는 비율',
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
            {
                A: { text: '대부분 업무에서 중증장애인이 수행할 직무가 있다', class: 'al' },
                B: { text: '8.7 ' },
                C: { text: '6.0 ' },
                D: { text: '11.2 ' },
                E: { text: '11.8 ' },
                F: { text: '8.4 ' },
                G: { text: '7.1 ' },
                H: { text: '11.1 ' },
            },
            {
                A: { text: '제한적인 업무에서 중증장애인이 수행할 직무가 있다', class: 'al' },
                B: { text: '28.7 ' },
                C: { text: '17.0 ' },
                D: { text: '39.9 ' },
                E: { text: '38.0 ' },
                F: { text: '48.6 ' },
                G: { text: '56.5 ' },
                H: { text: '46.0 ' },
            },
            {
                A: { text: '중증장애인이 수행할 만한 직무를 찾기 힘들다', class: 'al' },
                B: { text: '62.6 ' },
                C: { text: '77.0 ' },
                D: { text: '48.9 ' },
                E: { text: '50.2 ' },
                F: { text: '42.9 ' },
                G: { text: '36.4 ' },
                H: { text: '42.9 ' },
            },
            {
                A: { text: '전체', class: 'ac' },
                B: { text: '100.0 ' },
                C: { text: '100.0 ' },
                D: { text: '100.0 ' },
                E: { text: '100.0 ' },
                F: { text: '100.0 ' },
                G: { text: '100.0 ' },
                H: { text: '100.0 ' },
            },
            {
                A: { text: '(추정 수)', class: 'ac' },
                B: { text: '(46,429)' },
                C: { text: '(22,709)' },
                D: { text: '(23,720)' },
                E: { text: '(20,008)' },
                F: { text: '(3,063)' },
                G: { text: '(649)' },
                H: { text: '(14,635)' },
            },
        ],
    },
    //장애인 수행가능 직무가 있는 비율
    chart_209: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '장애인 수행가능 직무가 있는 비율',
            cols: [{ width: '70%' }, { width: '30%' }],
            headers: [{ title: '구분' }, { title: '전체' }],
        },
        data: [
            { A: { text: '대부분 업무에서 장애인이 수행할 직무가 있다', class: 'al' }, B: { text: '0.6 ' } },
            { A: { text: '제한적인 업무에서 장애인이 수행할 직무가 있다', class: 'al' }, B: { text: '30.2 ' } },
            { A: { text: '장애인이 수행할 만한 직무를 찾기 힘들다', class: 'al' }, B: { text: '29.2 ' } },
            { A: { text: '전체', class: 'ac' }, B: { text: '100.0 ' } },
            { A: { text: '(추정 수)', class: 'ac' }, B: { text: '(411,317)' } },
        ],
    },
    //장애인 근로자 채용지원 서비스 필요 비율(중복응답)
    chart_210: {
        meta: {
            tableInfo: { class: 'table' },
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
            { A: { text: '기업에 적합한 인력 추천', class: 'al' }, B: { text: '25.9 ' }, C: { text: '37.8 ' }, D: { text: '24.6 ' } },
            { A: { text: '모집대행 서비스', class: 'al' }, B: { text: '24.7 ' }, C: { text: '33.8 ' }, D: { text: '23.7 ' } },
            { A: { text: '직무분석 컨설팅 및 기업체 내 장애인 직업영역 개발', class: 'al' }, B: { text: '22.9 ' }, C: { text: '28.6 ' }, D: { text: '22.2 ' } },
            { A: { text: '사전 현장훈련을 통해 직무에 적응 후 근로', class: 'al' }, B: { text: '23.5 ' }, C: { text: '28.3 ' }, D: { text: '22.9 ' } },
            { A: { text: '현장에서 일정기간 직무체험을 통해 기업에서 적합장애인 탐색할 기회 제공', class: 'al' }, B: { text: '22.3 ' }, C: { text: '27.9 ' }, D: { text: '21.7 ' } },
            { A: { text: '현장 직무에 실제 활용 가능하도록 일정기간 수행하는 훈련 제공', class: 'al' }, B: { text: '22.9 ' }, C: { text: '28.4 ' }, D: { text: '22.3 ' } },
            {
                A: { text: '기업의 장애인 고용환경 분석·진단부터 적합인력 지원까지 체계적인 고용서비스 설계를 위한 지원', class: 'al' },
                B: { text: '23.0 ' },
                C: { text: '30.7 ' },
                D: { text: '22.1 ' },
            },
            { A: { text: '(추정 수)', class: 'ac' }, B: { text: '(457,746)' }, C: { text: '(46,429)' }, D: { text: '(411,317)' } },
        ],
    },
    //장장애인 근로자 고용유지 서비스 필요 비율(중복응답)
    chart_211: {
        meta: {
            tableInfo: { class: 'table' },
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
            { A: { text: '재직 근로 장애인 근로자 직무능력향상훈련', class: 'al' }, B: { text: '24.6 ' }, C: { text: '30.9 ' }, D: { text: '23.8 ' } },
            { A: { text: '근로 장애인 근로자의 안정적 업무 수행을 위한 전문인력 지원', class: 'al' }, B: { text: '22.8 ' }, C: { text: '29.2 ' }, D: { text: '22.1 ' } },
            { A: { text: '사업체 근무환경 개선을 위한 편의시설 진단 및 인증서비스 지원', class: 'al' }, B: { text: '23.7 ' }, C: { text: '27.4 ' }, D: { text: '23.3 ' } },
            { A: { text: '업무 수행 시 필요한 작업보조기기 무상 지원', class: 'al' }, B: { text: '23.3 ' }, C: { text: '25.6 ' }, D: { text: '23.1 ' } },
            { A: { text: '출퇴근 지원', class: 'al' }, B: { text: '23.6 ' }, C: { text: '25.9 ' }, D: { text: '23.4 ' } },
            { A: { text: '직업생활, 고충처리 상담 인력 및 비용 지원', class: 'al' }, B: { text: '23.6 ' }, C: { text: '26.8 ' }, D: { text: '23.2 ' } },
            { A: { text: '(추정 수)', class: 'ac' }, B: { text: '(457,746)' }, C: { text: '(46,429)' }, D: { text: '(411,317)' } },
        ],
    },
    //장애인 고용 증진을 위해 필요한 사항(1순위) (상위 6개)
    chart_212: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '장애인 고용 증진을 위해 필요한 사항(1순위) (상위 6개)',
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
            { A: { text: '장애인 고용장려금 증액', class: 'al' }, B: { text: '19.6 ' }, C: { text: '30.6 ' }, D: { text: '18.4 ' } },
            { A: { text: '장애인 고용에 다른 세금 감면', class: 'al' }, B: { text: '19.2 ' }, C: { text: '16.4 ' }, D: { text: '19.5 ' } },
            { A: { text: '장애인 직업영역개발을 통한 고용창출 활성화', class: 'al' }, B: { text: '12.7 ' }, C: { text: '7.5 ' }, D: { text: '13.3 ' } },
            { A: { text: '적합한 장애인력 구인 서비스 강화', class: 'al' }, B: { text: '11.1 ' }, C: { text: '9.7 ' }, D: { text: '11.2 ' } },
            { A: { text: '부담금(부담기초액) 인상', class: 'al' }, B: { text: '10.7 ' }, C: { text: '11.9 ' }, D: { text: '10.6 ' } },
            { A: { text: '장애인의 직업적 능력 향상을 위한 교육훈련 서비스 강화', class: 'al' }, B: { text: '5.2 ' }, C: { text: '1.4 ' }, D: { text: '5.6 ' } },
            { A: { text: '전체', class: 'ac' }, B: { text: '100 ' }, C: { text: '100 ' }, D: { text: '100 ' } },
            { A: { text: '(추정 수)', class: 'ac' }, B: { text: '(457,746)' }, C: { text: '(46,429)' }, D: { text: '(411,317)' } },
        ],
    },
    //장애인 의무고용률을 달성했지만 추가채용 의사가 있는 비율
    chart_214: {
        meta: {
            tableInfo: { class: 'table' },
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
            { A: { text: '의무고용률 달성과 상관없이 지속적으로 장애인 채용 예정', class: 'al' }, B: { text: '21.8 ' }, C: { text: '20.9 ' }, D: { text: '27.0 ' }, E: { text: '34.2 ' } },
            { A: { text: '의무고용률을 달성했기 때문에 추가적 장애인 채용 의사 없음', class: 'al' }, B: { text: '78.2 ' }, C: { text: '79.1 ' }, D: { text: '73.0 ' }, E: { text: '65.8 ' } },
            { A: { text: '전체', class: 'ac' }, B: { text: '100.0 ' }, C: { text: '100.0 ' }, D: { text: '100.0 ' }, E: { text: '100.0 ' } },
            { A: { text: '(추정 수)', class: 'ac' }, B: { text: '(16,803)' }, C: { text: '(14,682)' }, D: { text: '(1,800)' }, E: { text: '(322)' } },
        ],
    },
    //향후 3년 내 장애인 의무고용률 달성 전망
    chart_215: {
        meta: {
            tableInfo: { class: 'table' },
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
            { A: { text: '충분히 달성 가능하다', class: 'al' }, B: { text: '1.4 ' }, C: { text: '2.5 ' }, D: { text: '0.6 ' }, E: { text: '' } },
            { A: { text: '어느 정도 달성 가능하다', class: 'al' }, B: { text: '25.1 ' }, C: { text: '36.9 ' }, D: { text: '17.2 ' }, E: { text: '' } },
            { A: { text: '달성이 다소 어려움', class: 'al' }, B: { text: '63.5 ' }, C: { text: '56.7 ' }, D: { text: '68.0 ' }, E: { text: '' } },
            { A: { text: '달성이 매우 어려움', class: 'al' }, B: { text: '10.0 ' }, C: { text: '3.9 ' }, D: { text: '14.1 ' }, E: { text: '' } },
            { A: { text: '전체', class: 'ac' }, B: { text: '100.0 ' }, C: { text: '100.0 ' }, D: { text: '100.0 ' }, E: { text: '' } },
            { A: { text: '(추정 수)', class: 'ac' }, B: { text: '(17,368)' }, C: { text: '(6,917)' }, D: { text: '(10,451)' }, E: { text: '' } },
        ],
    },
    //장애인고용 비의무기업체의 향후 장애인 채용 의사
    chart_216: {
        meta: {
            tableInfo: { class: 'table' },
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
            { A: { text: '채용할 의사가 매우 많다', class: 'al' }, B: { text: '0.1 ' }, C: { text: '1.2 ' }, D: { text: '-' }, E: { text: '' } },
            { A: { text: '채용할 의사가 있는 편이다', class: 'al' }, B: { text: '19.2 ' }, C: { text: '31.9 ' }, D: { text: '18.5 ' }, E: { text: '' } },
            { A: { text: '채용할 의사가 없는 편이다', class: 'al' }, B: { text: '67.3 ' }, C: { text: '65.7 ' }, D: { text: '67.4 ' }, E: { text: '' } },
            { A: { text: '채용할 의사가 전혀 없다', class: 'al' }, B: { text: '13.5 ' }, C: { text: '1.2 ' }, D: { text: '14.2 ' }, E: { text: '' } },
            { A: { text: '전체', class: 'ac' }, B: { text: '100.0 ' }, C: { text: '100.0 ' }, D: { text: '100.0 ' }, E: { text: '' } },
            { A: { text: '(추정 수)', class: 'ac' }, B: { text: '(423,575)' }, C: { text: '(22,709)' }, D: { text: '(400,866)' }, E: { text: '' } },
        ],
    },
    //15세 이상 발달장애인 인구
    chart_301: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '15세 이상 발달장애인 인구',
            cols: 3,
            headers: [{ title: '구분' }, { title: '추정수(명)' }, { title: '비율(%)' }],
        },
        data: [
            { A: { text: '지적장애', class: 'ac' }, B: { text: ' 198,975 ' }, C: { text: ' 90.9 ' } },
            { A: { text: '자폐성장애', class: 'ac' }, B: { text: ' 20,025 ' }, C: { text: ' 9.1 ' } },
            { A: { text: '전체', class: 'ac' }, B: { text: ' 219,000 ' }, C: { text: ' 100.0 ' } },
        ],
    },

    //중복장애 유무
    chart_302: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '중복장애 유무',
            cols: 4,
            headers: [{ title: '구분', colSpan: 2 }, { title: '추정수(명)' }, { title: '비율(%)' }],
        },
        data: [
            {
                a: { text: '발달장애', class: 'ac' },
                child: [
                    { A: { text: '중복장애 있음', class: 'ac' }, B: { text: ' 25,173 ' }, C: { text: ' 11.5 ' } },
                    { A: { text: '중복장애 없음', class: 'ac' }, B: { text: ' 193,827 ' }, C: { text: ' 88.5 ' } },
                    { A: { text: '전체', class: 'ac' }, B: { text: ' 219,000 ' }, C: { text: ' 100.0 ' } },
                ],
            },
            {
                a: { text: '장애인구', class: 'ac' },
                child: [
                    { A: { text: '중복장애 있음', class: 'ac' }, B: { text: ' 98,350 ' }, C: { text: ' 3.8 ' } },
                    { A: { text: '중복장애 없음', class: 'ac' }, B: { text: ' 2,490,697 ' }, C: { text: ' 96.2 ' } },
                    { A: { text: '전체', class: 'ac' }, B: { text: ' 2,589,047 ' }, C: { text: ' 100.0 ' } },
                ],
            },
        ],
    },
    //다른 사람의 말을 이해하는 수준
    chart_303: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '다른 사람의 말을 이해하는 수준',
            cols: [{ width: '50%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '추정수(명)' }, { title: '비율(%)' }],
        },
        data: [
            { A: { text: '두 문장 이상 수준으로 제시해도 이해함', class: 'al' }, B: { text: ' 120,123 ' }, C: { text: ' 54.9 ' } },
            { A: { text: '간단한 문장 수준으로 제시해야 이해함', class: 'al' }, B: { text: ' 55,698 ' }, C: { text: ' 25.4 ' } },
            { A: { text: '단어 수준으로 제시해야 이해함', class: 'al' }, B: { text: ' 26,786 ' }, C: { text: ' 12.2 ' } },
            { A: { text: '다른 사람의 말을 거의 이해하지 못함', class: 'al' }, B: { text: ' 16,393 ' }, C: { text: ' 7.5 ' } },
            { A: { text: '전체', class: 'ac' }, B: { text: ' 219,000 ' }, C: { text: ' 100.0 ' } },
        ],
    },
    //자신의 의사를 말로 표현하는 수준
    chart_304: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '자신의 의사를 말로 표현하는 수준',
            cols: [{ width: '50%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '추정수(명)' }, { title: '비율(%)' }],
        },
        data: [
            { A: { text: '두 단어 이상을 사용한 표현이나 문장으로 의사를 표현함', class: 'al' }, B: { text: ' 125,365 ' }, C: { text: ' 57.2 ' } },
            { A: { text: '명확한 단어를 사용하여 의사를 표현함', class: 'al' }, B: { text: ' 42,910 ' }, C: { text: ' 19.6 ' } },
            { A: { text: '불명료한 단어를 사용하여 의사를 표현함', class: 'al' }, B: { text: ' 24,871 ' }, C: { text: ' 11.4 ' } },
            { A: { text: '불분명한 소리를 내어서 의사를 표현함', class: 'al' }, B: { text: ' 16,037 ' }, C: { text: ' 7.3 ' } },
            { A: { text: '소리 등으로도 전혀 의사를 표현할 수 없음', class: 'al' }, B: { text: ' 9,817 ' }, C: { text: ' 4.5 ' } },
            { A: { text: '전체', class: 'ac' }, B: { text: ' 219,000 ' }, C: { text: ' 100.0 ' } },
        ],
    },
    //인지능력 수준
    chart_305: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '인지능력 수준',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분', colSpan: 2 }, { title: '추정수(명)' }, { title: '비율(%)' }],
        },
        data: [
            {
                a: { text: '한글 읽기', class: 'ac' },
                child: [
                    { A: { text: '불가능', class: 'al' }, B: { text: '67,214' }, C: { text: '30.7' } },
                    { A: { text: '제한적으로 가능', class: 'al' }, B: { text: '60,367' }, C: { text: '27.6' } },
                    { A: { text: '가능', class: 'al' }, B: { text: '91,243' }, C: { text: '41.7' } },
                ],
            },
            {
                a: { text: '한글 쓰기', class: 'ac' },
                child: [
                    { A: { text: '불가능', class: 'al' }, B: { text: '71,036' }, C: { text: '32.4' } },
                    { A: { text: '제한적으로 가능', class: 'al' }, B: { text: '67,966' }, C: { text: '31' } },
                    { A: { text: '가능', class: 'al' }, B: { text: '79,822' }, C: { text: '36.4' } },
                ],
            },
            {
                a: { text: '숫자에 대한 인지', class: 'ac' },
                child: [
                    { A: { text: '불가능', class: 'al' }, B: { text: '79,588' }, C: { text: '36.3' } },
                    { A: { text: '제한적으로 가능', class: 'al' }, B: { text: '75,302' }, C: { text: '34.4' } },
                    { A: { text: '가능', class: 'al' }, B: { text: '63,956' }, C: { text: '29.2' } },
                ],
            },
            {
                a: { text: '날짜, 요일에 대한 인지', class: 'ac' },
                child: [
                    { A: { text: '불가능', class: 'al' }, B: { text: '74,949' }, C: { text: '34.2' } },
                    { A: { text: '제한적으로 가능', class: 'al' }, B: { text: '62,992' }, C: { text: '28.8' } },
                    { A: { text: '가능', class: 'al' }, B: { text: '80,905' }, C: { text: '36.9' } },
                ],
            },
            {
                a: { text: '위치, 장소에 대한 인지', class: 'ac' },
                child: [
                    { A: { text: '불가능', class: 'al' }, B: { text: '64,366' }, C: { text: '29.4' } },
                    { A: { text: '제한적으로 가능', class: 'al' }, B: { text: '77,552' }, C: { text: '35.4' } },
                    { A: { text: '가능', class: 'al' }, B: { text: '76,835' }, C: { text: '35.1' } },
                ],
            },
            {
                a: { text: '주위 사람에 대한 인지', class: 'ac' },
                child: [
                    { A: { text: '불가능', class: 'al' }, B: { text: '51,319' }, C: { text: '23.4' } },
                    { A: { text: '제한적으로 가능', class: 'al' }, B: { text: '81,758' }, C: { text: '37.3' } },
                    { A: { text: '가능', class: 'al' }, B: { text: '85,676' }, C: { text: '39.1' } },
                ],
            },
            {
                a: { text: '상황에 대한 인지', class: 'ac' },
                child: [
                    { A: { text: '불가능', class: 'al' }, B: { text: '62,795' }, C: { text: '28.7' } },
                    { A: { text: '제한적으로 가능', class: 'al' }, B: { text: '81,258' }, C: { text: '37.1' } },
                    { A: { text: '가능', class: 'al' }, B: { text: '74,673' }, C: { text: '34.1' } },
                ],
            },
            {
                a: { text: '전체', class: 'ac', colSpan: 2 },
                b: { text: '219,000', class: 'ac' },
                c: { text: '100.0', class: 'ac' },
            },
        ],
    },
    //도전적 행동 발생 정도
    chart_306: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '도전적 행동 발생 정도',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분', colSpan: 2 }, { title: '추정수(명)' }, { title: '비율(%)' }],
        },
        data: [
            {
                a: { text: '자신을 해치는 행동', class: 'ac' },
                child: [
                    { A: { text: '전혀 안함', class: 'al' }, B: { text: '170,147' }, C: { text: '77.7' } },
                    { A: { text: '가끔 함', class: 'al' }, B: { text: '36,781' }, C: { text: '16.8' } },
                    { A: { text: '자주 함', class: 'al' }, B: { text: '12,054' }, C: { text: '5.5' } },
                ],
            },
            {
                a: { text: '타인을 해치는 행동', class: 'ac' },
                child: [
                    { A: { text: '전혀 안함', class: 'al' }, B: { text: '186,444' }, C: { text: '85.1' } },
                    { A: { text: '가끔 함', class: 'al' }, B: { text: '26,778' }, C: { text: '12.2' } },
                    { A: { text: '자주 함', class: 'al' }, B: { text: '5,778' }, C: { text: '2.6' } },
                ],
            },
            {
                a: { text: '물건을 파괴하는 행동', class: 'ac' },
                child: [
                    { A: { text: '전혀 안함', class: 'al' }, B: { text: '180,605' }, C: { text: '82.5' } },
                    { A: { text: '가끔 함', class: 'al' }, B: { text: '31,384' }, C: { text: '14.3' } },
                    { A: { text: '자주 함', class: 'al' }, B: { text: '7,011' }, C: { text: '3.2' } },
                ],
            },
            {
                a: { text: '방해하는 행동', class: 'ac' },
                child: [
                    { A: { text: '전혀 안함', class: 'al' }, B: { text: '178,360' }, C: { text: '81.4' } },
                    { A: { text: '가끔 함', class: 'al' }, B: { text: '32,264' }, C: { text: '14.7' } },
                    { A: { text: '자주 함', class: 'al' }, B: { text: '8,376' }, C: { text: '3.8' } },
                ],
            },
            {
                a: { text: '특이한 반복적인 습관', class: 'ac' },
                child: [
                    { A: { text: '전혀 안함', class: 'al' }, B: { text: '158,063' }, C: { text: '72.2' } },
                    { A: { text: '가끔 함', class: 'al' }, B: { text: '40,702' }, C: { text: '18.6' } },
                    { A: { text: '자주 함', class: 'al' }, B: { text: '20,235' }, C: { text: '9.2' } },
                ],
            },
            {
                a: { text: '사회적으로 공격적인 행동', class: 'ac' },
                child: [
                    { A: { text: '전혀 안함', class: 'al' }, B: { text: '176,141' }, C: { text: '80.4' } },
                    { A: { text: '가끔 함', class: 'al' }, B: { text: '34,350' }, C: { text: '15.7' } },
                    { A: { text: '자주 함', class: 'al' }, B: { text: '8,509' }, C: { text: '3.9' } },
                ],
            },
            {
                a: { text: '위축된 행동이나 부주의한 행동', class: 'ac' },
                child: [
                    { A: { text: '전혀 안함', class: 'al' }, B: { text: '157,779' }, C: { text: '72' } },
                    { A: { text: '가끔 함', class: 'al' }, B: { text: '50,322' }, C: { text: '23' } },
                    { A: { text: '자주 함', class: 'al' }, B: { text: '10,806' }, C: { text: '4.9' } },
                ],
            },
            {
                a: { text: '비협조적인 행동', class: 'ac' },
                child: [
                    { A: { text: '전혀 안함', class: 'al' }, B: { text: ' 163,858 ' }, C: { text: ' 74.8 ' } },
                    { A: { text: '가끔 함', class: 'al' }, B: { text: ' 44,344 ' }, C: { text: ' 20.2 ' } },
                    { A: { text: '자주 함', class: 'al' }, B: { text: ' 10,563 ' }, C: { text: ' 4.8 ' } },
                ],
            },
            {
                a: { text: '전체', class: 'ac', colSpan: 2 },
                b: { text: '219,000', class: 'ac' },
                c: { text: '100.0', class: 'ac' },
            },
        ],
    },
    //최종 학력
    chart_307: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '최종 학력',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분', colSpan: 2 }, { title: '추정수(명)' }, { title: '비율(%)' }],
        },
        data: [
            {
                a: { text: '발달장애', class: 'ac' },
                child: [
                    { A: { text: '무학', class: 'al' }, B: { text: ' 31,618 ' }, C: { text: ' 14.4 ' } },
                    { A: { text: '초등학교 졸업', class: 'al' }, B: { text: ' 26,076 ' }, C: { text: ' 11.9 ' } },
                    { A: { text: '중학교 졸업', class: 'al' }, B: { text: ' 30,663 ' }, C: { text: ' 14.0 ' } },
                    { A: { text: '고등학교 졸업', class: 'al' }, B: { text: ' 118,347 ' }, C: { text: ' 54.0 ' } },
                    { A: { text: '대학교 이상 졸업', class: 'al' }, B: { text: ' 12,296 ' }, C: { text: ' 5.6 ' } },
                    { A: { text: '전체', class: 'al' }, B: { text: ' 219,000 ' }, C: { text: ' 100.0 ' } },
                ],
            },
            {
                a: { text: '장애인구', class: 'ac' },
                child: [
                    { A: { text: '무학', class: 'al' }, B: { text: ' 420,318 ' }, C: { text: ' 16.2 ' } },
                    { A: { text: '초등학교 졸업', class: 'al' }, B: { text: ' 594,985 ' }, C: { text: ' 23.0 ' } },
                    { A: { text: '중학교 졸업', class: 'al' }, B: { text: ' 400,585 ' }, C: { text: ' 15.5 ' } },
                    { A: { text: '고등학교 졸업', class: 'al' }, B: { text: ' 812,286 ' }, C: { text: ' 31.4 ' } },
                    { A: { text: '대학교 이상 졸업', class: 'al' }, B: { text: ' 360,873 ' }, C: { text: ' 13.9 ' } },
                    { A: { text: ' 전체 ', class: 'al' }, B: { text: ' 2,589,047 ' }, C: { text: ' 100.0 ' } },
                ],
            },
        ],
    },
    //취업자가 일(취업)하기로 결심한 데 가장 큰 영향을 미친 사람
    chart_308: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '취업자가 일(취업)하기로 결심한 데 가장 큰 영향을 미친 사람',
            cols: [{ width: '50%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '추정수(명)' }, { title: '비율(%)' }],
        },
        data: [
            { A: { text: '장애인 당사자', class: 'al' }, B: { text: ' 20,254 ' }, C: { text: ' 31.1 ' } },
            { A: { text: '부모 및 가족', class: 'al' }, B: { text: ' 32,784 ' }, C: { text: ' 50.3 ' } },
            { A: { text: '학교 교사', class: 'al' }, B: { text: ' 2,716 ' }, C: { text: ' 4.2 ' } },
            { A: { text: '전문 취업알선기관, 직업훈련기관 등 종사자', class: 'al' }, B: { text: ' 1,314 ' }, C: { text: ' 2.0 ' } },
            { A: { text: '복지관, 시설 등 종사자', class: 'al' }, B: { text: ' 5,940 ' }, C: { text: ' 9.1 ' } },
            { A: { text: '친구, 이웃 등 지인', class: 'al' }, B: { text: ' 1,964 ' }, C: { text: ' 3.0 ' } },
            { A: { text: '전체', class: 'al' }, B: { text: ' 65,144 ' }, C: { text: ' 100.0 ' } },
        ],
    },
    //취업자의 현재 직장(사업체) 유형
    chart_309: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '취업자의 현재 직장(사업체) 유형',
            cols: [{ width: '50%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '추정수(명)' }, { title: '비율(%)' }],
        },
        data: [
            { A: { text: '장애인 직업재활시설(보호작업장, 근로사업장 등)', class: 'al' }, B: { text: ' 15,597 ' }, C: { text: ' 23.9 ' } },
            { A: { text: '장애인 표준사업장, 자회사형 표준사업장', class: 'al' }, B: { text: ' 9,521 ' }, C: { text: ' 14.6 ' } },
            { A: { text: '정부재정지원 일자리(공공근로, 복지일자리 등)', class: 'al' }, B: { text: ' 9,294 ' }, C: { text: ' 14.3 ' } },
            { A: { text: '일반 민간사업체(민간회사 또는 개인사업체) ', class: 'al' }, B: { text: ' 20,855 ' }, C: { text: ' 32.0 ' } },
            { A: { text: '정부, 지자체, 공공기관 일자리', class: 'al' }, B: { text: ' 3,886 ' }, C: { text: ' 6.0 ' } },
            { A: { text: '특정한 회사나 사업체에 소속되어 있지 않음', class: 'al' }, B: { text: ' 5,756 ' }, C: { text: ' 8.8 ' } },
            { A: { text: '전체', class: 'al' }, B: { text: ' 65,144 ' }, C: { text: ' 100.0 ' } },
        ],
    },
    //취업자가 주로 수행하는 업무 종류
    chart_310: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '취업자가 주로 수행하는 업무 종류',
            cols: [{ width: '70%' }, { width: '15%' }, { width: '15%' }],
            headers: [{ title: '구분' }, { title: '추정수(명)' }, { title: '비율(%)' }],
        },
        data: [
            { A: { text: '서비스(배송, 주유, 미용, 판매, 진열, 서빙, 돌봄 등)', class: 'al' }, B: { text: ' 9,774 ' }, C: { text: ' 15.0 ' } },
            { A: { text: '제조(조립, 포장, 운반, 수리 등)', class: 'al' }, B: { text: ' 23,104 ' }, C: { text: ' 35.5 ' } },
            { A: { text: '사무(사무지원, 사서, 우체국 등)', class: 'al' }, B: { text: ' 4,254 ' }, C: { text: ' 6.5 ' } },
            { A: { text: '음식(바리스타, 제빵, 재료 준비, 설거지 등)', class: 'al' }, B: { text: ' 5,778 ' }, C: { text: ' 8.9 ' } },
            { A: { text: '청소·세탁(실내·외 청소, 세차, 세탁 등)', class: 'al' }, B: { text: ' 13,006 ' }, C: { text: ' 20.0 ' } },
            { A: { text: '농림어업(채소·화초 재배, 모종 심기, 버섯 재배, 물고기 잡기 등)', class: 'al' }, B: { text: ' 3,727 ' }, C: { text: ' 5.7 ' } },
            { A: { text: '예술스포츠(음악, 미술, 스포츠 등)', class: 'al' }, B: { text: ' 4,236 ' }, C: { text: ' 6.5 ' } },
            { A: { text: '전체', class: 'al' }, B: { text: ' 65,144 ' }, C: { text: ' 100.0 ' } },
        ],
    },
    //취업자가 장애와 관련해서 필요한 지원
    chart_311: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '취업자가 장애와 관련해서 필요한 지원',
            cols: [{ width: '35%' }, { width: '35%' }, { width: '15%' }, { width: '15%' }],
            headers: [{ title: '구분', colSpan: 2 }, { title: '추정수(명)' }, { title: '비율(%)' }],
        },
        data: [
            {
                a: { text: '능력 수준에 맞는 \r\n업무 부여 및 조정', class: 'ac' },
                child: [
                    { A: { text: '이미 받고 있거나 필요함', class: 'al' }, B: { text: ' 52,966 ' }, C: { text: ' 81.3 ' } },
                    { A: { text: '받고 있지 않으며 필요하지 않음', class: 'al' }, B: { text: ' 11,743 ' }, C: { text: ' 18.0 ' } },
                ],
            },
            {
                a: { text: '업무시간 조정(단축)', class: 'ac' },
                child: [
                    { A: { text: '이미 받고 있거나 필요함', class: 'al' }, B: { text: ' 46,912 ' }, C: { text: ' 72.0 ' } },
                    { A: { text: '받고 있지 않으며 필요하지 않음', class: 'al' }, B: { text: ' 17,943 ' }, C: { text: ' 27.5 ' } },
                ],
            },
            {
                a: { text: '다른 사람의 도움 제공', class: 'ac' },
                child: [
                    { A: { text: '이미 받고 있거나 필요함', class: 'al' }, B: { text: ' 47,090 ' }, C: { text: ' 72.3 ' } },
                    { A: { text: '받고 있지 않으며 필요하지 않음', class: 'al' }, B: { text: ' 17,509 ' }, C: { text: ' 26.9 ' } },
                ],
            },
            {
                a: { text: '작업보조기기 및 \r\n 편의시설 등 설치', class: 'ac' },
                child: [
                    { A: { text: '이미 받고 있거나 필요함', class: 'al' }, B: { text: ' 34,161 ' }, C: { text: ' 52.4 ' } },
                    { A: { text: '받고 있지 않으며 필요하지 않음', class: 'al' }, B: { text: ' 30,446 ' }, C: { text: ' 46.7 ' } },
                ],
            },
            {
                a: { text: '맞춤형 업무능력 향상훈련 실시', class: 'ac' },
                child: [
                    { A: { text: '이미 받고 있거나 필요함', class: 'al' }, B: { text: ' 39,992 ' }, C: { text: ' 61.4 ' } },
                    { A: { text: '받고 있지 않으며 필요하지 않음', class: 'al' }, B: { text: ' 24,753 ' }, C: { text: ' 38.0 ' } },
                ],
            },
            {
                a: { text: '전체', class: 'ac', colSpan: 2 },
                b: { text: '65,144', class: 'ac' },
                c: { text: '100.0', class: 'ac' },
            },
        ],
    },
    //미취업자 당사자(PL, ER)와 보호자의 취업 희망 여부
    chart_312: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '미취업자 당사자(PL, ER)와 보호자의 취업 희망 여부',
            cols: [{ width: '50%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '추정수(명)' }, { title: '비율(%)' }],
        },
        data: [
            { A: { text: '당사자 희망 & 보호자 희망', class: 'al' }, B: { text: ' 33,387 ' }, C: { text: ' 40.7 ' } },
            { A: { text: '당사자 비희망 & 보호자 희망', class: 'al' }, B: { text: ' 6,950 ' }, C: { text: ' 8.5 ' } },
            { A: { text: '당사자 희망 & 보호자 비희망', class: 'al' }, B: { text: ' 10,390 ' }, C: { text: ' 12.7 ' } },
            { A: { text: '당사자 비희망 & 보호자 비희망', class: 'al' }, B: { text: ' 30,164 ' }, C: { text: ' 36.8 ' } },
            { A: { text: '전체', class: 'ac' }, B: { text: ' 81,962 ' }, C: { text: ' 100.0 ' } },
        ],
    },
    //발달장애인 당사자가 일을 하는 이유
    chart_313: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '발달장애인 당사자가 일을 하는 이유',
            cols: [{ width: '50%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '추정수(명)' }, { title: '비율(%)' }],
        },
        data: [
            { A: { text: '나는 돈을 벌고 싶다', class: 'al' }, B: { text: ' 38,909 ' }, C: { text: ' 72.3 ' } },
            { A: { text: '나는 일을 잘 할 수 있다', class: 'al' }, B: { text: ' 6,043 ' }, C: { text: ' 11.2 ' } },
            { A: { text: '나는 일을 배우고 싶다', class: 'al' }, B: { text: ' 3,953 ' }, C: { text: ' 7.3 ' } },
            { A: { text: '집에만 있기 싫다', class: 'al' }, B: { text: ' 3,059 ' }, C: { text: ' 5.7 ' } },
            { A: { text: '다른 사람이(엄마가 또는 선생님이) 일하라고 한다', class: 'al' }, B: { text: ' 1,733 ' }, C: { text: ' 3.2 ' } },
            { A: { text: '전 체', class: 'ac' }, B: { text: ' 53,790 ' }, C: { text: ' 100.0 ' } },
        ],
    },
    //취업 발달장애인 당사자의 일자리 및 업무 주요 특성
    chart_314: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '취업 발달장애인 당사자의 일자리 및 업무 주요 특성',
            cols: [{ width: '50%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '추정수(명)' }, { title: '비율(%)' }],
        },
        data: [
            { A: { text: '나는 일 다니는 것이 좋다', class: 'al' }, B: { text: ' 39,408 ' }, C: { text: ' 73.3 ' } },
            { A: { text: '나는 하는 일이 재미있다', class: 'al' }, B: { text: ' 36,861 ' }, C: { text: ' 68.5 ' } },
            { A: { text: '나는 하는 일이 힘들다', class: 'al' }, B: { text: ' 16,110 ' }, C: { text: ' 30.0 ' } },
            { A: { text: '나는 일할 때 도움이 필요하다', class: 'al' }, B: { text: ' 25,740 ' }, C: { text: ' 47.9 ' } },
            { A: { text: '전체', class: 'al' }, B: { text: ' 53,790 ' }, C: { text: ' 100.0 ' } },
        ],
    },
    //미취업 발달장애인 당사자의 취업 희망
    chart_315: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '미취업 발달장애인 당사자의 취업 희망',
            cols: [{ width: '50%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '추정수(명)' }, { title: '비율(%)' }],
        },
        data: [
            { A: { text: '취업 희망', class: 'al' }, B: { text: ' 44,048 ' }, C: { text: ' 53.5 ' } },
            { A: { text: '당장 내일부터 일할 의향', class: 'al' }, B: { text: ' 19,946 ' }, C: { text: ' 45.3 ' } },
            { A: { text: '전체', class: 'al' }, B: { text: ' 82,327 ' }, C: { text: ' 100.0 ' } },
        ],
    },
    //발달장애인 당사자가 나중에 살고 싶은 방식
    chart_316: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '발달장애인 당사자가 나중에 살고 싶은 방식',
            cols: [{ width: '50%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '추정수(명)' }, { title: '비율(%)' }],
        },
        data: [
            { A: { text: '나는 가족(부모님)과 함께 살고 싶다', class: 'al' }, B: { text: ' 71,751 ' }, C: { text: ' 52.7 ' } },
            { A: { text: '나는 결혼해서 아내(남편)와 살고 싶다', class: 'al' }, B: { text: ' 34,990 ' }, C: { text: ' 25.7 ' } },
            { A: { text: '나는 혼자서 살고 싶다', class: 'al' }, B: { text: ' 3,862 ' }, C: { text: ' 2.8 ' } },
            { A: { text: '나는 친구와 살고 싶다', class: 'al' }, B: { text: ' 23,967 ' }, C: { text: ' 17.6 ' } },
            { A: { text: '전체', class: 'al' }, B: { text: ' 136,117 ' }, C: { text: ' 100.0 ' } },
        ],
    },
    //등록장애인 추이
    chart_401: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '등록장애인 추이',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '등록장애인 수' }, { title: '등록장애인 비율' }, { title: '전체인구 수' }],
        },
        data: [
            { A: { text: '92', class: 'ac' }, B: { text: '242,419' }, C: { text: '0.54' }, D: { text: ' 44,503,200 ' } },
            { A: { text: '93', class: 'ac' }, B: { text: '265,442' }, C: { text: '0.59' }, D: { text: ' 45,001,113 ' } },
            { A: { text: '94', class: 'ac' }, B: { text: '294,246' }, C: { text: '0.65' }, D: { text: ' 45,416,339 ' } },
            { A: { text: '95', class: 'ac' }, B: { text: '324,860' }, C: { text: '0.71' }, D: { text: ' 45,858,029 ' } },
            { A: { text: '96', class: 'ac' }, B: { text: '362,475' }, C: { text: '0.78' }, D: { text: ' 46,266,256 ' } },
            { A: { text: '97', class: 'ac' }, B: { text: '425,064' }, C: { text: '0.91' }, D: { text: ' 46,684,069 ' } },
            { A: { text: '98', class: 'ac' }, B: { text: '527,250' }, C: { text: '1.12' }, D: { text: ' 46,991,171 ' } },
            { A: { text: '99', class: 'ac' }, B: { text: '697,513' }, C: { text: '1.47' }, D: { text: ' 47,335,678 ' } },
            { A: { text: '00', class: 'ac' }, B: { text: '958,196' }, C: { text: '2.01' }, D: { text: ' 47,732,558 ' } },
            { A: { text: '01', class: 'ac' }, B: { text: '1,134,177' }, C: { text: '2.36' }, D: { text: ' 48,021,543 ' } },
            { A: { text: '02', class: 'ac' }, B: { text: '1,294,254' }, C: { text: '2.68' }, D: { text: ' 48,229,948 ' } },
            { A: { text: '03', class: 'ac' }, B: { text: '1,454,215' }, C: { text: '3.01' }, D: { text: ' 48,386,823 ' } },
            { A: { text: '04', class: 'ac' }, B: { text: '1,610,994' }, C: { text: '3.32' }, D: { text: ' 48,583,805 ' } },
            { Ac: { text: '05', class: 'ac' }, B: { text: '1,789,443' }, C: { text: '3.67' }, D: { text: ' 48,782,274 ' } },
            { Ac: { text: '06', class: 'ac' }, B: { text: '1,967,326' }, C: { text: '4.02' }, D: { text: ' 48,991,779 ' } },
            { Ac: { text: '07', class: 'ac' }, B: { text: '2,104,889' }, C: { text: '4.27' }, D: { text: ' 49,268,928 ' } },
            { Ac: { text: '08', class: 'ac' }, B: { text: '2,246,965' }, C: { text: '4.54' }, D: { text: ' 49,540,367 ' } },
            { Ac: { text: '09', class: 'ac' }, B: { text: '2,429,547' }, C: { text: '4.88' }, D: { text: ' 49,773,145 ' } },
            { Ac: { text: '10', class: 'ac' }, B: { text: '2,517,312' }, C: { text: '4.98' }, D: { text: ' 50,515,666 ' } },
            { Ac: { text: '11', class: 'ac' }, B: { text: '2,519,241' }, C: { text: '4.97' }, D: { text: ' 50,734,284 ' } },
            { Ac: { text: '12', class: 'ac' }, B: { text: '2,511,159' }, C: { text: '4.93' }, D: { text: ' 50,948,272 ' } },
            { Ac: { text: '13', class: 'ac' }, B: { text: '2,501,112' }, C: { text: '4.89' }, D: { text: ' 51,141,463 ' } },
            { Ac: { text: '14', class: 'ac' }, B: { text: '2,494,460' }, C: { text: '4.86' }, D: { text: ' 51,327,916 ' } },
            { Ac: { text: '15', class: 'ac' }, B: { text: '2,490,406' }, C: { text: '4.83' }, D: { text: ' 51,529,338 ' } },
            { Ac: { text: '16', class: 'ac' }, B: { text: '2,511,051' }, C: { text: '4.86' }, D: { text: ' 51,696,216 ' } },
            { Ac: { text: '17', class: 'ac' }, B: { text: '2,545,637' }, C: { text: '4.92' }, D: { text: ' 51,778,544 ' } },
            { Ac: { text: '18', class: 'ac' }, B: { text: '2,585,876' }, C: { text: '4.99' }, D: { text: ' 51,826,059 ' } },
            { Ac: { text: '19', class: 'ac' }, B: { text: '2,618,918' }, C: { text: '5.05' }, D: { text: ' 51,849,861 ' } },
            { Ac: { text: '20', class: 'ac' }, B: { text: ' 2,633,026 ' }, C: { text: ' 5.08 ' }, D: { text: '51,829,023' } },
            { Ac: { text: '21', class: 'ac' }, B: { text: ' 2,644,700 ' }, C: { text: ' 5.12 ' }, D: { text: '51,638,809' } },
            { Ac: { text: '22', class: 'ac' }, B: { text: ' 2,648,424 ' }, C: { text: ' 5.15 ' }, D: { text: '51,439,038' } },
            { Ac: { text: '23', class: 'ac' }, B: { text: ' 2,641,896 ' }, C: { text: ' 5.15 ' }, D: { text: '51,325,329' } },
        ],
    },

    //등록장애인 성별 분포
    chart_402: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '등록장애인 성별 분포',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '남성' }, { title: '여성' }, { title: '여성비율(%)' }],
        },
        data: [
            { A : {text : '01', class : 'ac'},B : {text :'1,134,177'}, C : {text :'779,356'}, D : {text :'354,821'} , E : {text :'31.3'} },
            { A : {text : '02', class : 'ac'},B : {text :'1,294,254'}, C : {text :'872,739'}, D : {text :'421,515'} , E : {text :'32.6'} },
            { A : {text : '03', class : 'ac'},B : {text :'1,454,215'}, C : {text :'964,363'}, D : {text :'489,852'} , E : {text :'33.7'} },
            { A : {text : '04', class : 'ac'},B : {text :'1,610,994'}, C : {text :'1,047,562'}, D : {text :'563,432'} , E : {text :'35.0'} },
            { A : {text : '05', class : 'ac'},B : {text :'1,789,443'}, C : {text :'1,138,641'}, D : {text :'650,802'} , E : {text :'36.4'} },
            { A : {text : '06', class : 'ac'},B : {text :'1,967,326'}, C : {text :'1,223,644'}, D : {text :'743,682'} , E : {text :'37.8'} },
            { A : {text : '07', class : 'ac'},B : {text :'2,104,889'}, C : {text :'1,284,089'}, D : {text :'820,800'} , E : {text :'39.0'} },
            { A : {text : '08', class : 'ac'},B : {text :'2,246,965'}, C : {text :'1,345,557'}, D : {text :'901,408'} , E : {text :'40.1'} },
            { A : {text : '09', class : 'ac'},B : {text :'2,429,547'}, C : {text :'1,425,896'}, D : {text :'1,003,651'} , E : {text :'41.3'} },
            { A : {text : '10', class : 'ac'},B : {text :'2,517,312'}, C : {text :'1,468,333'}, D : {text :'1,048,979'} , E : {text :'41.7'} },
            { A : {text : '11', class : 'ac'},B : {text :'2,519,241'}, C : {text :'1,466,460'}, D : {text :'1,052,781'} , E : {text :'41.8'} },
            { A : {text : '12', class : 'ac'},B : {text :'2.511.159'}, C : {text :'1,460,490'}, D : {text :'1,050,669'} , E : {text :'41.8'} },
            { A : {text : '13', class : 'ac'},B : {text :'2,501,112'}, C : {text :'1,453,606'}, D : {text :'1,047,506'} , E : {text :'41.9'} },
            { A : {text : '14', class : 'ac'},B : {text :'2,494,460'}, C : {text :'1,448,878'}, D : {text :'1,045,582'} , E : {text :'41.9'} },
            { A : {text : '15', class : 'ac'},B : {text :'2,490,406'}, C : {text :'1,446,943'}, D : {text :'1,043,463'} , E : {text :'41.9'} },
            { A : {text : '16', class : 'ac'},B : {text :'2,511,051'}, C : {text :'1,457,588'}, D : {text :'1,053,463'} , E : {text :'42.0'} },
            { A : {text : '17', class : 'ac'},B : {text :'2,545,637'}, C : {text :'1,475,550'}, D : {text :'1,070,087'} , E : {text :'42.0'} },
            { A : {text : '18', class : 'ac'},B : {text :'2,585,876'}, C : {text :'1,496,298'}, D : {text :'1,089,578'} , E : {text :'42.1'} },
            { A : {text : '19', class : 'ac'},B : {text :'2,633,026'}, C : {text :'1,513,206'}, D : {text :'1,105,712'} , E : {text :'42.2'} },
            { A : {text : '20', class : 'ac'},B : {text :'2,644,700'}, C : {text :'1,521,260'}, D : {text :'1,111,766'} , E : {text :'42.2'} },
            { A : {text : '21', class : 'ac'},B : {text :'1,528,280'}, C : {text :' 1,528,280 '}, D : {text :' 1,116,420 '} , E : {text :'42.2'} },
            { A : {text : '22', class : 'ac'},B : {text :'2,648,424'}, C : {text :' 1,532,230 '}, D : {text :' 1,116,194 '} , E : {text :'42.1'} },
            { A : {text : '23', class : 'ac'},B : {text :'2,641,896'}, C : {text :' 1,529,806 '}, D : {text :' 1,112,090 '} , E : {text :'42.1'} },
        ],
    },
    //등록장애인 연령 분포
    chart_403: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '등록장애인 연령 분포',
            cols: [{ width: '20%' }, { width: '20%' }, { width: '20%' }, { width: '20%' }, { width: '20%' }],
            headers: [{ title: '구분' }, { title: '장애인' }, { title: '장애인 비율' }, { title: '전체인구' }, { title: '전체인구 비율' }],
        },
        data: [
            { A: { text: ' 0~9세 ', class: 'ac' }, B: { text: ' 35,180 ' }, C: { text: ' 1.3 ' }, D: { text: ' 3,332,892 ' }, E: { text: '6.5' } },
            { A: { text: ' 10~19세 ', class: 'ac' }, B: { text: ' 63,806 ' }, C: { text: ' 2.4 ' }, D: { text: ' 4,651,460 ' }, E: { text: '9.1' } },
            { A: { text: ' 20~29세 ', class: 'ac' }, B: { text: ' 94,155 ' }, C: { text: ' 3.6 ' }, D: { text: ' 6,197,486 ' }, E: { text: '12.1' } },
            { A: { text: ' 30~39세 ', class: 'ac' }, B: { text: ' 109,676 ' }, C: { text: ' 4.2 ' }, D: { text: ' 6,575,548 ' }, E: { text: '12.8' } },
            { A: { text: ' 40~49세 ', class: 'ac' }, B: { text: ' 209,775 ' }, C: { text: ' 7.9 ' }, D: { text: ' 7,922,134 ' }, E: { text: '15.4' } },
            { A: { text: ' 50~59세 ', class: 'ac' }, B: { text: ' 397,716 ' }, C: { text: ' 15.1 ' }, D: { text: ' 8,695,699 ' }, E: { text: '16.9' } },
            { A: { text: ' 60~69세 ', class: 'ac' }, B: { text: ' 627,665 ' }, C: { text: ' 23.8 ' }, D: { text: ' 7,630,708 ' }, E: { text: '14.9' } },
            { A: { text: ' 70~79세 ', class: 'ac' }, B: { text: ' 571,828 ' }, C: { text: ' 21.6 ' }, D: { text: ' 3,966,203 ' }, E: { text: '7.7' } },
            { A: { text: ' 80세 이상 ', class: 'ac' }, B: { text: ' 532,095 ' }, C: { text: ' 20.1 ' }, D: { text: ' 2,353,199 ' }, E: { text: '4.6' } },
        ],
    },
    //65세 이상 등록장애인 비율
    chart_404: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '65세 이상 등록장애인 비율',
            cols: [{ width: '20%' }, { width: '20%' }, { width: '20%' }, { width: '20%' }, { width: '20%' }],
            headers: [{ title: '구분', colSpan: 2 }, { title: '2013' }, { title: '2018' }, { title: '2023' }],
        },
        data: [
            {
                a: { text: '장애인', class: 'ac' },
                child: [
                    { A: { text: '전체', class: 'al' }, B: { text: '2,500,961' }, C: { text: '2,585,876' }, D: { text: '2,641,896' } },
                    { A: { text: '65세 이상', class: 'al' }, B: { text: '1,009,721' }, C: { text: '1,206,482' }, D: { text: '1,425,095' } },
                    { A: { text: '65세 이상 비율', class: 'al' }, B: { text: '40.4' }, C: { text: '46.7' }, D: { text: '53.9' } },
                ],
            },
            {
                a: { text: '전체인구', class: 'ac' },
                child: [
                    { A: { text: '전체', class: 'al' }, B: { text: '51,141,463' }, C: { text: '51,826,059' }, D: { text: '51,325,329' } },
                    { A: { text: '65세 이상', class: 'al' }, B: { text: '6,250,986' }, C: { text: '7,650,408' }, D: { text: '9,730,411' } },
                    { A: { text: '65세 이상 비율', class: 'al' }, B: { text: '12.2' }, C: { text: '14.8' }, D: { text: '19.0' } },
                ],
            },
        ],
    },
    //15-64세 등록장애인 추이
    chart_405: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '15-64세 등록장애인 추이',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '전체' }, { title: '15~64세' }, { title: '65세 이상' }],
        },
        data: [
            { A: { text: '07', class: 'ac' }, B: { text: ' 2,105 ' }, C: { text: ' 1,360 ' }, D: { text: ' 689 ' } },
            { A: { text: '08', class: 'ac' }, B: { text: ' 2,247 ' }, C: { text: ' 1,418 ' }, D: { text: ' 772 ' } },
            { A: { text: '09', class: 'ac' }, B: { text: ' 2,430 ' }, C: { text: ' 1,501 ' }, D: { text: ' 869 ' } },
            { A: { text: '10', class: 'ac' }, B: { text: ' 2,517 ' }, C: { text: ' 1,525 ' }, D: { text: ' 935 ' } },
            { A: { text: '11', class: 'ac' }, B: { text: ' 2,519 ' }, C: { text: ' 1,506 ' }, D: { text: ' 958 ' } },
            { A: { text: '12', class: 'ac' }, B: { text: ' 2,511 ' }, C: { text: ' 1,470 ' }, D: { text: ' 987 ' } },
            { A: { text: '13', class: 'ac' }, B: { text: ' 2,501 ' }, C: { text: ' 1,440 ' }, D: { text: ' 1,010 ' } },
            { A: { text: '14', class: 'ac' }, B: { text: ' 2,494 ' }, C: { text: ' 1,411 ' }, D: { text: ' 1,033 ' } },
            { A: { text: '15', class: 'ac' }, B: { text: ' 2,490 ' }, C: { text: ' 1,388 ' }, D: { text: ' 1,053 ' } },
            { A: { text: '16', class: 'ac' }, B: { text: ' 2,511 ' }, C: { text: ' 1,372 ' }, D: { text: ' 1,089 ' } },
            { A: { text: '17', class: 'ac' }, B: { text: ' 2,546 ' }, C: { text: ' 1,344 ' }, D: { text: ' 1,150 ' } },
            { A: { text: '18', class: 'ac' }, B: { text: ' 2,586 ' }, C: { text: ' 1,326 ' }, D: { text: ' 1,206 ' } },
            { A: { text: '19', class: 'ac' }, B: { text: ' 2,619 ' }, C: { text: ' 1,299 ' }, D: { text: ' 1,264 ' } },
            { A: { text: '20', class: 'ac' }, B: { text: ' 2,633 ' }, C: { text: ' 1,260 ' }, D: { text: ' 1,315 ' } },
            { A: { text: '21', class: 'ac' }, B: { text: ' 2,645 ' }, C: { text: ' 1,226 ' }, D: { text: ' 1,357 ' } },
            { A: { text: '22', class: 'ac' }, B: { text: ' 2,648 ' }, C: { text: ' 1,187 ' }, D: { text: ' 1,398 ' } },
            { A: { text: '23', class: 'ac' }, B: { text: ' 2,642 ' }, C: { text: ' 1,149 ' }, D: { text: ' 1,425 ' } },
        ],
    },
    //등록장애인 장애유형 분포
    chart_406: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '등록장애인 장애유형 분포',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '2013' }, { title: '2018' }, { title: '2023' }],
        },
        data: [
            { A: { text: '지체', class: 'ac' }, B: { text: ' 1,309 ' }, C: { text: ' 1,239 ' }, D: { text: ' 1,154 ' } },
            { A: { text: '뇌병변', class: 'ac' }, B: { text: ' 253 ' }, C: { text: ' 253 ' }, D: { text: ' 241 ' } },
            { A: { text: '시각', class: 'ac' }, B: { text: ' 253 ' }, C: { text: ' 253 ' }, D: { text: ' 248 ' } },
            { A: { text: '청각', class: 'ac' }, B: { text: ' 255 ' }, C: { text: ' 343 ' }, D: { text: ' 433 ' } },
            { A: { text: '언어', class: 'ac' }, B: { text: ' 18 ' }, C: { text: ' 21 ' }, D: { text: ' 23 ' } },
            { A: { text: '지적', class: 'ac' }, B: { text: ' 179 ' }, C: { text: ' 207 ' }, D: { text: ' 230 ' } },
            { A: { text: '자폐성', class: 'ac' }, B: { text: ' 18 ' }, C: { text: ' 27 ' }, D: { text: ' 43 ' } },
            { A: { text: '정신', class: 'ac' }, B: { text: ' 96 ' }, C: { text: ' 102 ' }, D: { text: ' 104 ' } },
            { A: { text: '신장', class: 'ac' }, B: { text: ' 67 ' }, C: { text: ' 88 ' }, D: { text: ' 109 ' } },
            { A: { text: '심장', class: 'ac' }, B: { text: ' 7 ' }, C: { text: ' 5 ' }, D: { text: ' 5 ' } },
            { A: { text: '호흡기', class: 'ac' }, B: { text: ' 13 ' }, C: { text: ' 12 ' }, D: { text: ' 11 ' } },
            { A: { text: '간', class: 'ac' }, B: { text: ' 9 ' }, C: { text: ' 13 ' }, D: { text: ' 16 ' } },
            { A: { text: '안면', class: 'ac' }, B: { text: ' 3 ' }, C: { text: ' 3 ' }, D: { text: ' 3 ' } },
            { A: { text: '장루ㆍ요루', class: 'ac' }, B: { text: ' 13 ' }, C: { text: ' 15 ' }, D: { text: ' 17 ' } },
            { A: { text: '뇌전증', class: 'ac' }, B: { text: ' 7 ' }, C: { text: ' 7 ' }, D: { text: ' 7 ' } },
        ],
    },
    //등록장애인 장애정도 분포
    chart_407: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '등록장애인 장애정도 분포',
            cols: [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }],
            headers: [{ title: '구분' }, { title: '심한장애' }, { title: '심하지않은장애' }, { title: '심한장애 비중(%)' }],
        },
        data: [
            { A: { text: '01', class: 'ac' }, B: { text: '584,043' }, C: { text: '550,134' }, D: { text: '51.5' } },
            { A: { text: '02', class: 'ac' }, B: { text: '645,553' }, C: { text: '648,701' }, D: { text: '49.9' } },
            { A: { text: '03', class: 'ac' }, B: { text: '701,936' }, C: { text: '752,279' }, D: { text: '48.3' } },
            { A: { text: '04', class: 'ac' }, B: { text: '756,140' }, C: { text: '854,854' }, D: { text: '46.9' } },
            { A: { text: '05', class: 'ac' }, B: { text: '816,476' }, C: { text: '972,967' }, D: { text: '45.6' } },
            { A: { text: '06', class: 'ac' }, B: { text: '877,562' }, C: { text: '1,089,764' }, D: { text: '44.6' } },
            { A: { text: '07', class: 'ac' }, B: { text: '917,596' }, C: { text: '1,187,293' }, D: { text: '43.6' } },
            { A: { text: '08', class: 'ac' }, B: { text: '956,576' }, C: { text: '1,290,389' }, D: { text: '42.6' } },
            { A: { text: '09', class: 'ac' }, B: { text: '1,011,900' }, C: { text: '1,417,647' }, D: { text: '41.6' } },
            { A: { text: '10', class: 'ac' }, B: { text: '1,009,700' }, C: { text: '1,507,612' }, D: { text: '40.1' } },
            { A: { text: '11', class: 'ac' }, B: { text: '992,343' }, C: { text: '1,526,898' }, D: { text: '39.4' } },
            { A: { text: '12', class: 'ac' }, B: { text: '980,018' }, C: { text: '1,531,141' }, D: { text: '39.0' } },
            { A: { text: '13', class: 'ac' }, B: { text: '971,102' }, C: { text: '1,530,010' }, D: { text: '38.8' } },
            { A: { text: '14', class: 'ac' }, B: { text: '966,466' }, C: { text: '1,527,994' }, D: { text: '38.7' } },
            { A: { text: '15', class: 'ac' }, B: { text: '965,381' }, C: { text: '1,525,025' }, D: { text: '38.8' } },
            { A: { text: '16', class: 'ac' }, B: { text: '969,557' }, C: { text: '1,541,494' }, D: { text: '38.6' } },
            { A: { text: '17', class: 'ac' }, B: { text: '978,526' }, C: { text: '1,567,111' }, D: { text: '38.4' } },
            { A: { text: '18', class: 'ac' }, B: { text: '983,769' }, C: { text: '1,602,107' }, D: { text: '38.0' } },
            { A: { text: '19', class: 'ac' }, B: { text: '985,403' }, C: { text: '1,633,515' }, D: { text: '37.6' } },
            { A: { text: '20', class: 'ac' }, B: { text: ' 984,965 ' }, C: { text: ' 1,648,061 ' }, D: { text: '37.4' } },
            { A: { text: '21', class: 'ac' }, B: { text: ' 984,813 ' }, C: { text: ' 1,659,887 ' }, D: { text: '37.2' } },
            { A: { text: '22', class: 'ac' }, B: { text: ' 982,338 ' }, C: { text: ' 1,666,086 ' }, D: { text: '37.1' } },
            { A: { text: '23', class: 'ac' }, B: { text: ' 978,634 ' }, C: { text: ' 1,663,262 ' }, D: { text: '37.0' } },
        ],
    },
    //연령별 지체, 청각, 발달장애 비중 변화
    chart_408: {
        meta: {
            tableInfo: { class: 'table' },
            tableTitle: '연령별 지체, 청각, 발달장애 비중 변화',
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
                { title: '2013 합계' },
                { title: '2013 지체' },
                { title: '13 지체 비율' },
                { title: '2013 청각' },
                { title: '13 청각 비율' },
                { title: '2013 발달' },
                { title: '13 발달 비율' },
                { title: '2023 합계' },
                { title: '2023 지체' },
                { title: '23 지체 비율' },
                { title: '2023 청각' },
                { title: '23 청각 비율' },
                { title: '2023 발달' },
                { title: '23 발달 비율' },
            ],
        },
        data: [
            {
                A: { text: '0-4세', class: 'ac' },
                B: { text: ' 5,011 ' },
                C: { text: ' 290 ' },
                D: { text: ' 5.8 ' },
                E: { text: ' 655 ' },
                F: { text: ' 13.1 ' },
                G: { text: ' 11.6 ' },
                H: { text: ' 24.5 ' },
                I: { text: ' 4,589 ' },
                J: { text: ' 162 ' },
                K: { text: ' 3.5 ' },
                L: { text: ' 534 ' },
                M: { text: ' 11.6 ' },
                N: { text: ' 1,315 ' },
                O: { text: '28.7' },
            },
            {
                A: { text: '5-9세', class: 'ac' },
                B: { text: ' 17,673 ' },
                C: { text: ' 805 ' },
                D: { text: ' 4.6 ' },
                E: { text: ' 1,068 ' },
                F: { text: ' 6.0 ' },
                G: { text: ' 3.3 ' },
                H: { text: ' 59.4 ' },
                I: { text: ' 30,591 ' },
                J: { text: ' 505 ' },
                K: { text: ' 1.7 ' },
                L: { text: ' 1,000 ' },
                M: { text: ' 3.3 ' },
                N: { text: ' 21,911 ' },
                O: { text: '71.6' },
            },
            {
                A: { text: '10-14세', class: 'ac' },
                B: { text: ' 28,990 ' },
                C: { text: ' 1,791 ' },
                D: { text: ' 6.2 ' },
                E: { text: ' 1,592 ' },
                F: { text: ' 5.5 ' },
                G: { text: ' 3.7 ' },
                H: { text: ' 65.0 ' },
                I: { text: ' 32,318 ' },
                J: { text: ' 1,016 ' },
                K: { text: ' 3.1 ' },
                L: { text: ' 1,201 ' },
                M: { text: ' 3.7 ' },
                N: { text: ' 25,526 ' },
                O: { text: '79' },
            },
            {
                A: { text: '15-19세', class: 'ac' },
                B: { text: ' 40,095 ' },
                C: { text: ' 4,127 ' },
                D: { text: ' 10.3 ' },
                E: { text: ' 2,144 ' },
                F: { text: ' 5.3 ' },
                G: { text: ' 4.1 ' },
                H: { text: ' 67.6 ' },
                I: { text: ' 31,488 ' },
                J: { text: ' 2,042 ' },
                K: { text: ' 6.5 ' },
                L: { text: ' 1,293 ' },
                M: { text: ' 4.1 ' },
                N: { text: ' 23,460 ' },
                O: { text: '74.5' },
            },
            {
                A: { text: '20-24세', class: 'ac' },
                B: { text: ' 42,496 ' },
                C: { text: ' 7,324 ' },
                D: { text: ' 17.2 ' },
                E: { text: ' 2,382 ' },
                F: { text: ' 5.6 ' },
                G: { text: ' 4.4 ' },
                H: { text: ' 58.8 ' },
                I: { text: ' 42,243 ' },
                J: { text: ' 3,727 ' },
                K: { text: ' 8.8 ' },
                L: { text: ' 1,851 ' },
                M: { text: ' 4.4 ' },
                N: { text: ' 29,153 ' },
                O: { text: '69' },
            },
            {
                A: { text: '25-29세', class: 'ac' },
                B: { text: ' 46,513 ' },
                C: { text: ' 13,847 ' },
                D: { text: ' 29.8 ' },
                E: { text: ' 2,468 ' },
                F: { text: ' 5.3 ' },
                G: { text: ' 4.9 ' },
                H: { text: ' 41.0 ' },
                I: { text: ' 51,912 ' },
                J: { text: ' 6,288 ' },
                K: { text: ' 12.1 ' },
                L: { text: ' 2,531 ' },
                M: { text: ' 4.9 ' },
                N: { text: ' 32,426 ' },
                O: { text: '62.5' },
            },
            {
                A: { text: '30-34세', class: 'ac' },
                B: { text: ' 76,617 ' },
                C: { text: ' 32,279 ' },
                D: { text: ' 42.1 ' },
                E: { text: ' 3,944 ' },
                F: { text: ' 5.1 ' },
                G: { text: ' 5.3 ' },
                H: { text: ' 24.2 ' },
                I: { text: ' 52,468 ' },
                J: { text: ' 9,441 ' },
                K: { text: ' 18.0 ' },
                L: { text: ' 2,757 ' },
                M: { text: ' 5.3 ' },
                N: { text: ' 26,416 ' },
                O: { text: '50.3' },
            },
            {
                A: { text: '35-39세', class: 'ac' },
                B: { text: ' 98,882 ' },
                C: { text: ' 48,766 ' },
                D: { text: ' 49.3 ' },
                E: { text: ' 4,945 ' },
                F: { text: ' 5.0 ' },
                G: { text: ' 5.2 ' },
                H: { text: ' 15.7 ' },
                I: { text: ' 57,208 ' },
                J: { text: ' 15,776 ' },
                K: { text: ' 27.6 ' },
                L: { text: ' 2,976 ' },
                M: { text: ' 5.2 ' },
                N: { text: ' 19,960 ' },
                O: { text: '34.9' },
            },
            {
                A: { text: '40-44세', class: 'ac' },
                B: { text: ' 145,437 ' },
                C: { text: ' 76,501 ' },
                D: { text: ' 52.6 ' },
                E: { text: ' 7,183 ' },
                F: { text: ' 4.9 ' },
                G: { text: ' 5.1 ' },
                H: { text: ' 10.7 ' },
                I: { text: ' 92,260 ' },
                J: { text: ' 35,023 ' },
                K: { text: ' 38.0 ' },
                L: { text: ' 4,696 ' },
                M: { text: ' 5.1 ' },
                N: { text: ' 19,701 ' },
                O: { text: '21.4' },
            },
            {
                A: { text: '45-49세', class: 'ac' },
                B: { text: ' 191,741 ' },
                C: { text: ' 110,111 ' },
                D: { text: ' 57.4 ' },
                E: { text: ' 10,624 ' },
                F: { text: ' 5.5 ' },
                G: { text: ' 5.2 ' },
                H: { text: ' 6.9 ' },
                I: { text: ' 117,515 ' },
                J: { text: ' 52,011 ' },
                K: { text: ' 44.3 ' },
                L: { text: ' 6,103 ' },
                M: { text: ' 5.2 ' },
                N: { text: ' 16,416 ' },
                O: { text: '14' },
            },
            {
                A: { text: '50-54세', class: 'ac' },
                B: { text: ' 263,590 ' },
                C: { text: ' 157,709 ' },
                D: { text: ' 59.8 ' },
                E: { text: ' 17,048 ' },
                F: { text: ' 6.5 ' },
                G: { text: ' 5.5 ' },
                H: { text: ' 4.5 ' },
                I: { text: ' 172,916 ' },
                J: { text: ' 81,262 ' },
                K: { text: ' 47.0 ' },
                L: { text: ' 9,518 ' },
                M: { text: ' 5.5 ' },
                N: { text: ' 16,200 ' },
                O: { text: '9.4' },
            },
            {
                A: { text: '55-59세', class: 'ac' },
                B: { text: ' 279,522 ' },
                C: { text: ' 167,596 ' },
                D: { text: ' 60.0 ' },
                E: { text: ' 19,885 ' },
                F: { text: ' 7.1 ' },
                G: { text: ' 6.9 ' },
                H: { text: ' 3.2 ' },
                I: { text: ' 224,800 ' },
                J: { text: ' 115,382 ' },
                K: { text: ' 51.3 ' },
                L: { text: ' 15,474 ' },
                M: { text: ' 6.9 ' },
                N: { text: ' 13,611 ' },
                O: { text: '6.1' },
            },
            {
                A: { text: '60-64세', class: 'ac' },
                B: { text: ' 254,673 ' },
                C: { text: ' 149,704 ' },
                D: { text: ' 58.8 ' },
                E: { text: ' 21,414 ' },
                F: { text: ' 8.4 ' },
                G: { text: ' 9.3 ' },
                H: { text: ' 1.9 ' },
                I: { text: ' 306,493 ' },
                J: { text: ' 164,105 ' },
                K: { text: ' 53.5 ' },
                L: { text: ' 28,420 ' },
                M: { text: ' 9.3 ' },
                N: { text: ' 11,686 ' },
                O: { text: '3.8' },
            },
            {
                A: { text: '65세 이상', class: 'ac' },
                B: { text: ' 1,009,721 ' },
                C: { text: ' 538,435 ' },
                D: { text: ' 53.3 ' },
                E: { text: ' 160,047 ' },
                F: { text: ' 15.9 ' },
                G: { text: ' 24.9 ' },
                H: { text: ' 0.7 ' },
                I: { text: ' 1,425,095 ' },
                J: { text: ' 666,761 ' },
                K: { text: ' 46.8 ' },
                L: { text: ' 354,500 ' },
                M: { text: ' 24.9 ' },
                N: { text: ' 14,743 ' },
                O: { text: '1' },
            },
        ],
    },
};
