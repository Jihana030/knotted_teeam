(function () {
  ('use strict');
  const $frm = document.querySelector('form');

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

  //로고 누르면 리셋
  const logoreset = document.querySelector('#header .logo');
  logoreset.addEventListener('click', (e) => {
    window.location.href =
      'http://127.0.0.1:64939/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%ED%8D%BC%EC%8A%A4%ED%8A%B8/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%ED%8D%BC%EC%8A%A4%ED%8A%B8-%EC%9B%90%EC%A7%80/knotted(fullpage).html';
  });

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

  //가입완료/취소 버튼 누르면 사이트 넘어가게
  //<p>가 있으면 못넘어감.
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
        *가입을 환영합니다.
        `;
    }
  });

  signNo.addEventListener('click', (e) => {
    location.href = 'index-mypage.html';
    // window.open('https://www.naver.com');
  });
})();
