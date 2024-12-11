const header = document.querySelector('.header');
const mobileGnb = document.querySelector('.mobile-gnb');
window.addEventListener('DOMContentLoaded', () => {
    // 헤더 gnb 스크립트
    initGnb(header);
    initMobileGnb(mobileGnb);
});

// PC
function initGnb(header) {
    let gnb = header.querySelector('.header-gnb');
    let gnbMenus = gnb.querySelectorAll('.gnb-depth-1 .depth-1');
    let depthMenus = gnb.querySelectorAll('.gnb-depth-2');
    let maxHeight = calculateMaxHeight();

    if (window.innerWidth > 1024) {
        changeMenuHeight(maxHeight);
    }

    gnb.addEventListener('mouseenter', (event) => {
        gnbOpen(header);
    });
    gnb.addEventListener('focusin', (event) => {
        gnbOpen(header);
    });
    gnb.addEventListener('mouseleave', (event) => {
        gnbClose(header);
    });
    gnb.addEventListener('focusout', (event) => {
        gnbClose(header);
    });

    gnbMenus.forEach((menu) => {
        menu.addEventListener('mouseenter', (event) => {
            menu.classList.add('current');
        });
        menu.addEventListener('focusin', (event) => {
            menu.classList.add('current');
        });

        menu.addEventListener('mouseleave', (event) => {
            menu.classList.remove('current');
        });
        menu.addEventListener('focusout', (event) => {
            menu.classList.remove('current');
        });
    });

    // window.addEventListener("resize", function () {
    //     if (window.innerWidth > 1024) {
    //         maxHeight = calculateMaxHeight();
    //         changeMenuHeight(maxHeight);
    //     }
    // });

    function gnbOpen(header) {
        // let headerHeight = maxHeight + 90; // 90은 헤더바의 높이
        // header.style.height = `${headerHeight}px`;
        header.classList.add('open');
    }

    function gnbClose(header) {
        header.classList.remove('open');
        // header.removeAttribute("style");
    }

    function calculateMaxHeight() {
        let heights = [...depthMenus].map((item) => item.getBoundingClientRect().height);
        let maxHeight = Math.max.apply(null, heights);
        return maxHeight;
    }

    function changeMenuHeight(height) {
        depthMenus.forEach((item) => {
            item.style.height = `${height}px`;
        });
    }
}

// Mobile
function initMobileGnb(mobileGnb) {
    let body = document.querySelector('body');
    let sidebarButton = mobileGnb.querySelector('.sidebar-btn');
    let mobileMenuButtons = mobileGnb.querySelectorAll('.depth-1 a');

    sidebarButton.addEventListener('click', () => {
        if (mobileGnb.classList.contains('open')) {
            mobileGnbClose(mobileGnb);
        } else {
            mobileGnbOpen(mobileGnb);
        }
    });

    mobileMenuButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            // event.preventDefault();
            let $this = event.target;
            openAccordion($this);
        });
    });

    // window.addEventListener("resize", function () {
    //     if (window.innerWidth > 1024) {
    //         mobileGnbClose(mobileGnb);
    //     }
    // });

    function mobileGnbOpen(gnb) {
        gnb.classList.add('open');
        body.classList.add('not-scroll');
    }

    function mobileGnbClose(gnb) {
        gnb.classList.remove('open');
        body.classList.remove('not-scroll');
    }

    // 모바일 메뉴 아코디언
    function openAccordion($this) {
        let target = $this.parentElement;
        let depthTarget = $this.nextElementSibling;
        if (!depthTarget) return;
        let otherLinks = siblings(target);
        let otherItems = otherLinks.map((link) => link.querySelector('ul'));

        if (target.classList.contains('open')) {
            target.classList.remove('open');
            depthTarget.style.maxHeight = '0px';
        } else {
            otherLinks.forEach((link) => link.classList.remove('open'));
            otherItems.forEach((item) => (item ? (item.style.maxHeight = '0px') : ''));
            target.classList.add('open');
            depthTarget.style.maxHeight = depthTarget.scrollHeight + 'px';
        }
    }
}

function siblings(element) {
    return [...element.parentElement.children].filter((value) => value != element);
}

// 모든 활성화 클래스 삭제
function removeActive(itemEls) {
    itemEls.forEach((itemEl) => {
        if (itemEl.classList.contains('on')) {
            itemEl.classList.remove('on');
        }
    });
}

// 외부 클릭시 닫힘
function handleClickOutside(element, boxEl) {
    document.addEventListener('focusin', function (e) {
        out(e);
    });
    document.addEventListener('click', function (e) {
        out(e);
    });

    function out(event) {
        const elements = document.querySelector(element);

        if (isOpen && !elements?.contains(event.target)) {
            elements?.querySelectorAll(boxEl).forEach((el) => {
                el.classList.remove('on');
                isOpen = false;
            });
        }
    }
}

// 모달창 열기
function openModal(name) {
    const modalTarget = document.querySelector(`#${name}`);
    console.log(modalTarget);
    const modalCloseBtn = modalTarget.querySelector('.modal-close-btn');
    modalTarget.classList.add('on');
    modalTarget.classList.remove('effect--out');
    modalCloseBtn.focus();

    document.body.classList.add('scroll-off');
}

// 모달창 닫기
function closeModal(name) {
    const modalTarget = document.querySelector(`#${name}`);
    modalTarget.classList.add('effect--out');
    setTimeout(() => {
        modalTarget.classList.remove('on');
    }, 120);
    document.querySelector('.returnFocus')?.focus(); // 팝업 열기 버튼으로 포커스 복귀
    document.body.classList.remove('scroll-off');
}

// 모달 버튼 포커스 복귀
const $popBtnEls = document.querySelectorAll('.modal-open-btn');
$popBtnEls.forEach(($popBtnEl) => {
    $popBtnEl.addEventListener('click', function () {
        document.querySelectorAll('.returnFocus').forEach((focusEl) => {
            focusEl.classList.remove('returnFocus');
        });
        this.classList.add('returnFocus');
    });
});

// 접근성 텍스트
function accessibilityText(targetEl) {
    let spanEl = document.createElement('span');
    let spanText = document.createTextNode('선택됨');
    spanEl.classList.add('skip');
    spanEl.appendChild(spanText);
    targetEl.append(spanEl);
}
