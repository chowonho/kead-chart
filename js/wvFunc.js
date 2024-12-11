function test() {
    var element = document.createElement('table');

    var target = document.getElementById('mainDiv');
    addElement(target, element);
}

function createEelent(tagName, opt) {
    if (tagName) {
        var retElement = document.createElement(tagName);
        if (opt) {
            for (const [key, value] of Object.entries(opt)) {
                var k = key.toUpperCase();

                switch (k) {
                    case 'TEXT':
                        retElement.innerText = value;
                        break;
                    case 'HTML':
                        retElement.innerHtml = value;
                        break;
                    default:
                        retElement.setAttribute(key, value);
                }
            }
        }

        return retElement;
    } else {
        alert('TagName 이 없음.');
    }
}

function addElement(target, element) {
    target.appendChild(element);
}

function createTable(ds) {
    // 메인 테이블

    var table = createEelent('table', ds.meta.tableInfo);

    //ColGroup 설정
    var colGroup = createEelent('colgroup', { class: 'pc-only' });
    var colsInfo = ds.meta.cols;
    if (Number.isInteger(colsInfo)) {
        for (var i = 0; i < colsInfo; i++) {
            addElement(colGroup, createEelent('col', { style: 'width: auto' }));
        }
    } else if (Array.isArray(colsInfo)) {
        colsInfo.forEach((c) => addElement(colGroup, createEelent('col', { style: 'width:' + (c.width ?? ' auto') })));
    } else {
    }
    addElement(table, colGroup);

    //Table Caption 설정
    var captionPrefix = ds.meta.tableTitle + '리스트 입니다. ';
    var captionStr = captionPrefix;
    //ds.meta.headers.forEach((h) => captionStr += (h.title + ', ') );
    //captionStr = captionStr.slice(0, -1);

    //THead 설정
    var tHead = createEelent('thead');

    if (Array.isArray(ds.meta.headers[0])) {
        strArr = [];
        strTempArr = [];
        ds.meta.headers.forEach((subheaders) => subheaders.forEach((c) => (c.text = c.title)));
        ds.meta.headers.forEach((subheaders) => subheaders.forEach((c) => (captionStr += c.title + ', ')));
        ds.meta.headers.forEach((subheader) => {
            var tempArr = [];
            var tSubHeadTr = createEelent('tr');
            subheader.forEach((c) => {
                addElement(tSubHeadTr, createEelent('th', c));

                var roopCnt = c.colSpan ? c.colSpan : 1;
                for (var i = 1; i <= roopCnt; i++) {
                    tempArr.push({ title: c.title, rowSpan: c.rowSpan ? c.rowSpan : 1 });
                }
            });
            strTempArr.push(tempArr);
            addElement(tHead, tSubHeadTr);
        });
        console.log(strTempArr);

        // 다중 헤더 컬럼 및 RowSpan, ColSpan 처리에 따른 Caption 문자열 만들기
        // 1. 헤더 Array 정렬
        for (var j = 0; j < strTempArr.length - 1; j++) {
            for (var k = 0; k < strTempArr[j].length; k++) {
                if (strTempArr[j][k].rowSpan > 1) {
                    strTempArr[j][k].rowSpan--;
                    strTempArr[j + 1].splice(k, 0, { title: '', rowSpan: strTempArr[j][k].rowSpan });
                }
            }
        }
        var valiFlag = true;
        var valiCnt = strTempArr[0].length;
        // 2. 헤더 Array 유효성 체크
        for (var j = 0; j < strTempArr.length; j++) {
            if (strTempArr[j].length != valiCnt) {
                valiFlag = false;
            }
        }

        // 3. 헤더 문자열 생성
        if (valiFlag == true) {
            captionStr = captionPrefix;
            for (var j = 0; j < valiCnt; j++) {
                var captionTitle = '';
                for (var k = 0; k < strTempArr.length; k++) {
                    if (strTempArr[k][j]) {
                        captionTitle += strTempArr[k][j].title + ' ';
                    }
                }
                captionStr += captionTitle + ', ';
            }
        } else {
            //Array 수가 맞지 않을경우 헤더명 나열
        }
    } else {
        var tHeadTr = createEelent('tr');
        ds.meta.headers.forEach((c) => (c.text = c.title));
        ds.meta.headers.forEach((c) => addElement(tHeadTr, createEelent('th', c)));
        addElement(tHead, tHeadTr);
        ds.meta.headers.forEach((h) => (captionStr += h.title + ','));
    }
    captionStr = captionStr.replace(/,\s*$/, '');
    captionStr += ' 항목으로 구성되어 있습니다.';
    var caption = createEelent('caption', { text: captionStr });
    addElement(table, caption);

    addElement(table, tHead);

    //TBody 설정
    var tBody = createEelent('tbody');

    for (var i = 0; i < ds.data.length; i++) {
        var tBodyTr = createEelent('tr');

        var item = ds.data[i];

        if (item.child) {
            //child 있으면 RowSpan 처리
            for (const [key, value] of Object.entries(item)) {
                var tdAttr = {};
                if (typeof value == 'string') {
                    tdAttr.text = value;
                } else {
                    tdAttr = value;
                }
                tdAttr.rowSpan = item.child.length;

                var td = createTdElement(tdAttr);
                if (td != null) {
                    addElement(tBodyTr, td);
                }
            }
            for (var j = 0; j < item.child.length; j++) {
                var tBodySubTr = createEelent('tr');
                for (const [ckey, cvalue] of Object.entries(item.child[j])) {
                    var td = createTdElement(cvalue);
                    if (td != null) {
                        if (j == 0) {
                            // 0번째 ROW면 부모 TR에 같이 들어감
                            addElement(tBodyTr, td);
                        } else {
                            // 1번째 ROW부터는 신규 TR에 들어감
                            addElement(tBodySubTr, td);
                        }
                    }
                }
                if (j == 0) {
                    addElement(tBody, tBodyTr);
                } else {
                    addElement(tBody, tBodySubTr);
                }
            }
        } else {
            //child 없으면 그냥 처리
            for (const [key, value] of Object.entries(item)) {
                var td = createTdElement(value);
                addElement(tBodyTr, td);
            }
            addElement(tBody, tBodyTr);
        }
    }

    addElement(table, tBody);

    // 나중에 POP 에 쏴주기
    //var div = document.getElementById('mainDiv');
    //addElement(div,table);

    return table;
}

function createTdElement(info) {
    var td;
    if (typeof info == 'string') {
        td = createEelent('td', { text: info });
    } else if (typeof info == 'object') {
        if (!Array.isArray(info)) {
            td = createEelent('td', info);
        } else {
            return null;
        }
    } else {
        td = createEelent('td');
    }

    return td;
}

function showTable(id) {
    var sourceData = tableDataSet[id];

    // for (const [key, value] of Object.entries(tableDataSet)) {
    //     if(value?.meta?.id == id){
    //         sourceData = value;
    //     }else{

    //     }
    // }

    if (sourceData?.meta?.tableTitle) {
        div_title.innerHTML = sourceData.meta.tableTitle;
    } else {
        div_title.innerHTML = '타이틀이 없습니다.';
    }

    if (sourceData) {
        var div_tableContainer = document.getElementById('div_tableContainer');
        div_tableContainer.innerHTML = '';

        if (sourceData.meta.annotation) {
            var annotation = createEelent('p', { text: sourceData.meta.annotation, class: 'caption-unit' });
            addElement(div_tableContainer, annotation);
        }

        var table = createTable(sourceData);
        addElement(div_tableContainer, table);
        openModal('chartTable1');
    } else {
        alert('데이터가 없습니다.');
    }
}
