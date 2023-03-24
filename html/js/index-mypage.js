(function () {
  ('use strict');
  //헤더푸터
  window.onload = function () {
    function onClick() {
      document.querySelector('.modal_wrap').style.display = 'block';
      document.querySelector('.black_bg').style.display = 'block';
    }
    function offClick() {
      document.querySelector('.modal_wrap').style.display = 'none';
      document.querySelector('.black_bg').style.display = 'none';
    }

    document.getElementById('modal_btn').addEventListener('click', onClick);
    document.querySelector('.modal_close').addEventListener('click', offClick);
  };

  // https://www.shinhancard.com/pconts/html/benefit/event/1216703_2239.html
  // https://www.samsung.com/sec/mobile-accessories/knotted-cover-for-galaxy-buds2/GP-FPR177AMCYK/
  // https://socar-mkt.socar.kr/ringroad/?_branch_match_id=1120872513357585993&utm_source=wairi&utm_campaign=branding&utm_medium=event&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8%2FXK85PTizSyy7SrwpJz8%2FzKy7PL04CAHS3rw0fAAAA
  //이벤트 클릭 페이지이동
  const shinhan = document.querySelector('.shinhan');
  const shinlink = 'https://www.shinhancard.com/pconts/html/benefit/event/1216703_2239.html';
  const buds = document.querySelector('.buds');
  const budslink = 'https://www.samsung.com/sec/mobile-accessories/knotted-cover-for-galaxy-buds2/GP-FPR177AMCYK/';
  const socar = document.querySelector('.socar');
  const socarlink =
    'https://socar-mkt.socar.kr/ringroad/?_branch_match_id=1120872513357585993&utm_source=wairi&utm_campaign=branding&utm_medium=event&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8%2FXK85PTizSyy7SrwpJz8%2FzKy7PL04CAHS3rw0fAAAA';
  //로고 누르면 리셋
  const logoreset = document.querySelector('#header .logo');
  //카테고리 호버
  const $listhover = document.querySelectorAll('.listcont li');
  const $summaries = document.querySelectorAll('.summary > div');
  const privacyadj = document.querySelector('.myadj');
  const gearadj = document.querySelector('.gear');
  const inforadj = document.querySelector('.inforadj');
  const orlist = document.querySelector('.orlist');
  let windowWidth = window.matchMedia('screen and (max-width: 769px)');
  //주문배송/리뷰 카테고리 클릭 시 불러올 부분 + 분홍노랑 타이틀 부활
  const ordertitle2 = document.querySelector('.ordertitle2');
  const reviewtitle2 = document.querySelector('.reviewtitle2');
  const reviewtd2 = document.querySelector('.reviewtd2');
  const orderlist = document.querySelector('.orderlist');
  const review = document.querySelector('.review');
  const mypage = document.querySelector('.mypage');
  const heart = document.querySelector('.heart');
  const salelist = document.querySelector('.salelist');
  const salecupon = document.querySelector('.salecupon');
  //프로필 클릭 초기화
  const welcoment = document.querySelector('.welcoment');
  //고객센터 클릭이벤트
  //고객센터 클릭이벤트 애니메이션
  const showtitle = document.querySelectorAll('.showtitle');
  const showask = document.querySelectorAll('.showask');
  //노랑분홍버튼 클릭이벤트
  const ordertitle = document.querySelector('.ordertitle');
  const reviewtitle = document.querySelector('.reviewtitle');

  //json  연결
  let mydata = JSON.parse(JSON.stringify(list));
  const ordtd = document.querySelector('.ordtd');
  const ordtd2 = document.querySelector('.ordtd2');
  const reviewtd = document.querySelector('.reviewtd');
  console.log(mydata);
  for (let i = 0; i < 3; i++) {
    const $tr = document.createElement('tr');
    const $td1 = document.createElement('td');
    const $td2 = document.createElement('td');
    const $td3 = document.createElement('td');
    const $td4 = document.createElement('td');
    const $td5 = document.createElement('td');
    const $img = document.createElement('img');
    $img.src = mydata[i].image;
    $td1.appendChild($img);
    $td1.firstChild.classList.add('donutimg');
    $tr.appendChild($td1);

    $td2.classList.toggle('donutname', true);
    $td2.textContent = mydata[i].name;
    $tr.appendChild($td2);

    $td3.classList.toggle('pay', true);
    $td3.textContent = mydata[i].price;
    $tr.appendChild($td3);

    $td4.classList.toggle('day', true);
    $td4.textContent = '22.11.15';
    $tr.appendChild($td4);

    $td5.classList.toggle('state', true);
    $td5.textContent = '배송완료';
    $tr.appendChild($td5);

    ordtd.appendChild($tr);
  }
  for (let i = 0; i < 3; i++) {
    const $tr = document.createElement('tr');
    const $td1 = document.createElement('td');
    const $td2 = document.createElement('td');
    const $td3 = document.createElement('td');
    const $td4 = document.createElement('td');
    const $td5 = document.createElement('td');
    const $img = document.createElement('img');
    $img.src = mydata[i].image;
    $td1.appendChild($img);
    $td1.firstChild.classList.add('donutimg');
    $tr.appendChild($td1);

    $td2.classList.toggle('donutname', true);
    $td2.textContent = mydata[i].name;
    $tr.appendChild($td2);

    $td3.classList.toggle('pay', true);
    $td3.textContent = mydata[i].price;
    $tr.appendChild($td3);

    $td4.classList.toggle('day', true);
    $td4.textContent = '22.11.15';
    $tr.appendChild($td4);

    $td5.classList.toggle('state', true);
    $td5.textContent = '배송완료';
    $tr.appendChild($td5);

    ordtd2.appendChild($tr);
  }
  for (let i = 0; i < 3; i++) {
    const $tr = document.createElement('tr');
    const $td1 = document.createElement('td');
    const $td2 = document.createElement('td');
    const $td3 = document.createElement('td');
    const $td4 = document.createElement('td');
    const $td5 = document.createElement('td');
    const $img = document.createElement('img');
    $img.src = mydata[i].image;
    $td1.appendChild($img);
    $td1.firstChild.classList.add('donutimg');
    $tr.appendChild($td1);

    $td2.classList.toggle('donutname', true);
    $td2.textContent = mydata[i].name;
    $tr.appendChild($td2);

    $td3.classList.toggle('pay', true);
    $td3.innerHTML = `상품은 잘 받으셨나요?<br>리뷰로 경험을 알려주세요!`;
    $tr.appendChild($td3);

    $td4.classList.toggle('day', true);
    $td4.innerHTML = `22.11.16~<br>22.11.23`;
    $tr.appendChild($td4);

    $td5.classList.toggle('state', true);
    const button = document.createElement('button');
    button.textContent = '리뷰 남기기';
    button.classList.toggle('reviewpage', true);
    $td5.appendChild(button);
    $tr.appendChild($td5);

    reviewtd.appendChild($tr);
  }
  for (let i = 0; i < 3; i++) {
    const $tr = document.createElement('tr');
    const $td1 = document.createElement('td');
    const $td2 = document.createElement('td');
    const $td3 = document.createElement('td');
    const $td4 = document.createElement('td');
    const $td5 = document.createElement('td');
    const $img = document.createElement('img');
    $img.src = mydata[i].image;
    $td1.appendChild($img);
    $td1.firstChild.classList.add('donutimg');
    $tr.appendChild($td1);

    $td2.classList.toggle('donutname', true);
    $td2.textContent = mydata[i].name;
    $tr.appendChild($td2);

    $td3.classList.toggle('pay', true);
    $td3.innerHTML = `상품은 잘 받으셨나요? <br> 리뷰로 경험을 알려주세요!`;
    $tr.appendChild($td3);

    $td4.classList.toggle('day', true);
    $td4.innerHTML = `22.11.16~<br>22.11.23`;
    $tr.appendChild($td4);

    $td5.classList.toggle('state', true);
    const button = document.createElement('button');
    button.textContent = '리뷰 남기기';
    button.classList.toggle('reviewpage', true);
    $td5.appendChild(button);
    $tr.appendChild($td5);

    reviewtd2.appendChild($tr);
  }

  //이벤트 클릭 페이지이동
  shinhan.addEventListener('click', (e) => {
    window.location.href = shinlink;
  });
  buds.addEventListener('click', (e) => {
    window.location.href = budslink;
  });
  socar.addEventListener('click', (e) => {
    window.location.href = socarlink;
  });

  //로고 누르면 리셋
  logoreset.addEventListener('click', (e) => {
    location.href =
      'index-mypage.html';
  });

  //카테고리 호버
  if ($listhover) {
    $listhover.forEach((item) => {
      item.addEventListener('click', (e) => {
        $summaries.forEach((subItem) => {
          if (windowWidth.matches) {
            subItem.classList.toggle('inforcon', subItem.dataset.view !== e.target.dataset.view);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return titleShow(true);
          } else {
            subItem.classList.toggle('inforcon', subItem.dataset.view !== e.target.dataset.view);
          }
        });
      });
    });
  }

  //주문배송/리뷰 카테고리 클릭 시 불러올 부분 + 분홍노랑 타이틀 부활
  function titleShow(tf) {
    ordertitle.classList.toggle('inforcon', tf);
    reviewtitle.classList.toggle('inforcon', tf);
  }
  orderlist.addEventListener('click', (e) => {
    reviewtitle2.classList.toggle('reviewNo2', true);
    reviewtd2.classList.toggle('reviewNo2', true);
    ordtd2.classList.toggle('ordNo2', false);
    ordertitle2.classList.toggle('ordNo2', false);
    ordertitle2.classList.toggle('ordwidth2', false);
    ordertitle2.classList.toggle('orderwidth2', true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return titleShow(true);
  });
  review.addEventListener('click', (e) => {
    ordertitle2.classList.toggle('ordNo2', true);
    ordtd2.classList.toggle('ordNo2', true);
    reviewtd2.classList.toggle('reviewNo2', false);
    reviewtitle2.classList.toggle('reviewNo2', false);
    reviewtitle2.classList.toggle('rewidth2', false);
    reviewtitle2.classList.toggle('reviewidth2', true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return titleShow(true);
  });

  mypage.addEventListener('click', (e) => {
    return titleShow(false);
  });
  heart.addEventListener('click', (e) => {
    return titleShow(false);
  });
  salelist.addEventListener('click', (e) => {
    return titleShow(false);
  });
  salecupon.addEventListener('click', (e) => {
    return titleShow(false);
  });

  //노랑분홍버튼 클릭이벤트
  ordertitle.addEventListener('click', (e) => {
    ordtd.classList.toggle('ordNo');
    reviewtitle.classList.toggle('reviewNo');
    ordertitle.classList.toggle('orderwidth');
    ordertitle.classList.toggle('ordwidth');
  });
  reviewtitle.addEventListener('click', (e) => {
    reviewtd.classList.toggle('reviewNo');
    ordertitle.classList.toggle('ordNo');
    reviewtitle.classList.toggle('reviewidth');
    reviewtitle.classList.toggle('rewidth');
  });

  //개인정보 수정 버튼
  function windouMatch() {
    inforadj.classList.toggle('inforcon', false);
    orlist.classList.toggle('inforcon', true);
  }
  privacyadj.addEventListener('click', (e) => {
    windouMatch();
    titleShow(true);
  });
  gearadj.addEventListener('click', (e) => {
    windouMatch();
    titleShow(true);
  });

  //프로필 클릭 초기화
  welcoment.addEventListener('click', (e) => {
    window.location.href = '';
  });

  //고객센터 클릭이벤트 + 애니메이션
  showtitle.forEach((items) => {
    items.addEventListener('click', (e) => {
      console.log(`----------${items}`);
      showask.forEach((subItem) => {
        console.log(subItem.classList.value);
        if (subItem.classList.value !== 'showask') {
          subItem.classList.toggle('Noshow', subItem.dataset.view !== e.target.dataset.view);
        } else {
          subItem.classList.toggle('Noshow', subItem.dataset.view === e.target.dataset.view);
        }
      });
    });
  });

  //회원정보 js
  //중복확인 버튼 누르면 '사용 가능한 ID 입니다.'
  //.double
  //버튼 눌렀다고 지워지지 않기... 텍스트 있어야만 가능하다고 하기..
  const doublecheck = document.querySelector('.double');
  const doubleTxT = document.querySelector('.id');
  const doubleId = document.querySelector('.idTx');
  const idiv = document.querySelector('.idiv');
  const passiv = document.querySelector('.passiv');
  const cpassiv = document.querySelector('.cpassiv');
  const nameiv = document.querySelector('.nameiv');
  const addiv = document.querySelector('.addiv');
  const teliv = document.querySelector('.teliv');
  const emailiv = document.querySelector('.emailiv');
  const butxt = document.querySelectorAll('.butxt');
  let idcheck = /^[a-z]{1,10}[0-9|a-z]{1,10}$/;

  idTx.addEventListener('click', (e) => {
    idiv.innerHTML = ``;
  });
  idTx.addEventListener('focusout', (e) => {
    const p = document.createElement('p');
    if (!idTx.value) {
      p.innerHTML = `*필수입력 사항입니다.`;
      idiv.appendChild(p);
      return e.preventDefault();
    }
  });
  //중복확인
  doublecheck.addEventListener('click', (e) => {
    const p = document.createElement('p');
    if (!idTx.value) {
      doubleTxT.appendChild(p);
      idiv.innerHTML = `
                *필수입력 사항입니다.
                `;
    } else if (doubleId.value) {
      if (!idcheck.test(doubleId.value)) {
        doubleTxT.appendChild(p);
        p.innerHTML = `
                    *규칙과 맞지 않습니다.
                `;
      } else {
        doubleTxT.appendChild(p);
        p.innerHTML = `
                *사용가능한 ID입니다.
                `;
      }
    }
  });

  //비밀번호 정규식
  const passTx = document.querySelector('.passTx');
  let passcheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  passTx.addEventListener('click', (e) => {
    passiv.innerHTML = ``;
  });
  passTx.addEventListener('focusout', (e) => {
    const p = document.createElement('p');
    if (!passTx.value) {
      passiv.appendChild(p);
      p.innerHTML = `
                    *필수입력 사항입니다.
                `;
      return e.preventDefault();
    } else if (passTx.value && !passcheck.test(passTx.value)) {
      passiv.appendChild(p);
      p.innerHTML = `
                    *규칙과 맞지 않습니다.
                `;
      return e.preventDefault();
    }
  });

  //비밀번호 확인
  const checkPassTx = document.querySelector('.checkPassTx');

  checkPassTx.addEventListener('click', (e) => {
    cpassiv.innerHTML = ``;
    return e.preventDefault();
  });
  checkPassTx.addEventListener('focusout', (e) => {
    const p = document.createElement('p');
    if (!checkPassTx.value) {
      cpassiv.appendChild(p);
      p.innerHTML = `
                    *필수입력 사항입니다.
                `;
      return e.preventDefault();
    } else if (checkPassTx.value && passTx.value !== checkPassTx.value) {
      cpassiv.appendChild(p);
      p.innerHTML = `
                        *일치하지 않습니다.
                    `;
      return e.preventDefault();
    }
  });

  //이름 빈칸 놉
  const nameTx = document.querySelector('.nameTx');

  nameTx.addEventListener('click', (e) => {
    nameiv.innerHTML = ``;
    return e.preventDefault();
  });
  nameTx.addEventListener('focusout', (e) => {
    const p = document.createElement('p');
    if (!nameTx.value) {
      nameiv.appendChild(p);
      p.innerHTML = `
                *필수입력 사항입니다.
            `;
    }
  });

  //주소빈칸 놉
  const addTx = document.querySelector('.addTx');
  const readdTx = document.querySelector('.readdTx');
  addTx.addEventListener('click', (e) => {
    addiv.innerHTML = ``;
    return e.preventDefault();
  });
  addTx.addEventListener('focusout', (e) => {
    const p = document.createElement('p');
    if (!addTx.value) {
      addiv.appendChild(p);
      p.innerHTML = `
                    *필수입력 사항입니다.
                `;
    }
  });
  readdTx.addEventListener('click', (e) => {
    addiv.innerHTML = ``;
    return e.preventDefault();
  });
  readdTx.addEventListener('focusout', (e) => {
    const p = document.createElement('p');
    if (!readdTx.value) {
      addiv.appendChild(p);
      p.innerHTML = `
                    *필수입력 사항입니다.
                `;
    }
  });
  //주소 API
  const search = document.querySelector('.search');
  search.addEventListener('click', (e) => {
    new daum.Postcode({
      oncomplete: function (data) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
        // 예제를 참고하여 다양한 활용법을 확인해 보세요.
        addTx.value = data.address;
        readdTx.focus();
      },
    }).open();
  });
  //전화 빈칸 놉 +정규식
  const numTxcon = document.querySelector('.numTxcon');
  const numTx = document.querySelector('.numTx');
  let numReg = /^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/;
  numTx.addEventListener('click', (e) => {
    teliv.innerHTML = ``;
    return e.preventDefault();
  });
  numTx.addEventListener('focusout', (e) => {
    const p = document.createElement('p');
    if (!numTx.value) {
      teliv.appendChild(p);
      p.innerHTML = `
                    *필수입력 사항입니다.
                `;
    } else if (numTx.value) {
      if (!numReg.test(numTx.value)) {
        numTxcon.appendChild(p);
        p.innerHTML = `
                            *규칙과 맞지 않습니다.
                        `;
      }
    }
  });

  //select값 input에 넣기. 이메일
  const domainListEl = document.querySelector('.emailchoice');
  const domainInputEl = document.querySelector('.emailcom');
  const email = document.querySelector('.email');
  email.addEventListener('click', (e) => {
    emailiv.innerHTML = ``;
  });
  email.addEventListener('focusout', (e) => {
    const p = document.createElement('p');
    if (!email.value) {
      emailiv.appendChild(p);
      p.innerHTML = `
                *필수입력 사항입니다.
            `;
    }
  });
  domainListEl.addEventListener('change', (e) => {
    if (event.target.value !== '직접입력') {
      domainInputEl.value = event.target.value;
      domainInputEl.disabled = true;
      domainInputEl.classList = 'emailgray';
    } else {
      domainInputEl.value = '';
      domainInputEl.disabled = false;
      domainInputEl.classList.toggle('emailgray');
      domainInputEl.classList.toggle('emailcom', true);
    }
  });
  //생일 날짜 for문
  //Y에 올해부터 -100년. M에 1~12, D에 1~31. 근데 이제 윤달과 30, 31일이 있는...
  //Y가 입력되면 m,M되면 d,
  //option을 만들고 option에 for문.
  const birthYEl = document.querySelector('.birthY');
  let isYearOptionExisted = false;
  birthYEl.addEventListener('focus', function () {
    if (!isYearOptionExisted) {
      isYearOptionExisted = true;
      for (let y = 1940; y <= 2022; y++) {
        const yearOption = document.createElement('option');
        yearOption.setAttribute('value', y);
        yearOption.innerText = y;
        this.appendChild(yearOption);
      }
    }
  });
  const birthMEl = document.querySelector('.birthM');
  let isMonthOptionExisted = false;
  birthMEl.addEventListener('click', function () {
    if (!isMonthOptionExisted) {
      isMonthOptionExisted = true;
      for (let m = 1; m <= 12; m++) {
        const monthOption = document.createElement('option');
        monthOption.setAttribute('value', m);
        monthOption.innerText = m;
        this.appendChild(monthOption);
      }
    }
  });
  const birthDEl = document.querySelector('.birthD');
  let isDayOptionExisted = false;
  birthDEl.addEventListener('focus', function () {
    if (!isDayOptionExisted) {
      isDayOptionExisted = true;
      for (let d = 1; d <= 31; d++) {
        const dayOption = document.createElement('option');
        dayOption.setAttribute('value', d);
        dayOption.innerText = d;
        this.appendChild(dayOption);
      }
    }
  });
  const sign = document.querySelector('.sign');
  const signOk = document.querySelector('.signOk');
  const signNo = document.querySelector('.signNo');

  const label = document.querySelector('label');
  let labelChild = label.childNodes;

  const p = document.createElement('p');
  signOk.addEventListener('click', (e) => {
    //input type text가 빈칸일때. butxt
    if (!butxt.value) {
      sign.prepend(p);
      p.innerHTML = `
                    *입력을 완료해주세요.
                `;
    } else {
      sign.prepend(p);
      p.innerHTML = `
        *수정되었습니다.
        `;
    }
  });

  signNo.addEventListener('click', (e) => {
    location.href = 'index-mypage.html';
    // window.open('https://www.naver.com');
  });
})();
