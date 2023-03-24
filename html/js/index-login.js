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

  //소셜 로그인 카카오
  const Kakao = document.querySelector('.kakaoA');
  const Redirect_URI = 'http://127.0.0.1:59624/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%ED%8D%BC%EC%8A%A4%ED%8A%B8/html/index-mypage.html';
  const REST_API_KEY = 'cf0835e0a593c7ae5b8d41e69860b6c5';
  const JavaScript_KEY = 'a66d7d1927895d88fac34d2a6ce86a31';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${Redirect_URI}&response_type=code`;

  Kakao.addEventListener('click', (e) => {
    window.location.href = KAKAO_AUTH_URL;
  });

  //소셜로그인 네이버
  const naver = document.querySelector('.naverA');
  const NAVER_Client_ID = 'I9M3bHEXDAzinkXQva0M';
  const NAVER_Client_Secret = 'XTrLWuKTL2';
  const Naver_Open_Api = 'https://nid.naver.com/oauth2.0/authorize';
  const NAVER_CALLBACK_URL = 'http://127.0.0.1:59624/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%ED%8D%BC%EC%8A%A4%ED%8A%B8/html/index-mypage.html';
  const NAVER_SERVICE_URL = 'http://127.0.0.1:59624/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%ED%8D%BC%EC%8A%A4%ED%8A%B8/html/index-login.html';

  naver.addEventListener('click', (e) => {
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_Client_ID}&response_type=code&redirect_uri=${NAVER_CALLBACK_URL}&state=`;
  });

  //소셜로그인 구글
  const Google = document.querySelector('.googleA');
  const Google_Client_ID = '676485563882-hsfjkeuob7k1j138e2dr2hq9c573t2pi.apps.googleusercontent.com';
  const Google_Client_Secret = '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';
  const Google_API_KEY = 'AIzaSyAAirZQTIHxklwlNGiWQp1oGZx1c_BCdgM';
  Google.addEventListener('click', (e) => {
    window.location.href =
      `https://accounts.google.com/o/oauth2/v2/auth?client_id=${Google_Client_ID}&redirect_uri=${Redirect_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;
  });
  function init() {
    gapi.load('auth2', function () {
      gapi.auth2.init();
      options = new gapi.auth2.SigninOptionsBuilder();
      options.setPrompt('select_account');
      // 추가는 Oauth 승인 권한 추가 후 띄어쓰기 기준으로 추가
      options.setScope('email profile openid https://www.googleapis.com/auth/user.birthday.read');
      // 인스턴스의 함수 호출 - element에 로그인 기능 추가
      // GgCustomLogin은 li태그안에 있는 ID, 위에 설정한 options와 아래 성공,실패시 실행하는 함수들
      gapi.auth2.getAuthInstance().attachClickHandler('GgCustomLogin', options, onSignIn, onSignInFailure);
    });
  }

  function onSignIn(googleUser) {
    var access_token = googleUser.getAuthResponse().access_token;
    $.ajax({
      // people api를 이용하여 프로필 및 생년월일에 대한 선택동의후 가져온다.
      url: 'https://people.googleapis.com/v1/people/me',
      // key에 자신의 API 키를 넣습니다.
      data: { personFields: 'birthdays', key: 'AIzaSyAAirZQTIHxklwlNGiWQp1oGZx1c_BCdgM', access_token: access_token },
      method: 'GET',
    })
      .done(function (e) {
        //프로필을 가져온다.
        var profile = googleUser.getBasicProfile();
        console.log(profile);
      })
      .fail(function (e) {
        console.log(e);
      });
  }
  function onSignInFailure(t) {
    console.log(t);
  }

  //회원가입 누르면 회원가입창으로 이동
  const signUp = document.querySelector('.signUp');
  const url = '';
  signUp.addEventListener('click', (e) => {
    location.href = 'index-sign_up.html';
  });
  //로그인 누르면 메인 페이지
  const login = document.querySelector('.login');
  login.addEventListener('click', (e) => {
    location.href = 'index-mypage.html';
    // window.Location.reload(url);
  });
  //비밀번호찾기 누르면 놀리기
  const forget = document.querySelector('.forget');
  const href = document.querySelector('.href');
  forget.addEventListener('click', (e) => {
    const joke = document.createElement('div');
    joke.classList.toggle('joke');
    href.append(joke);
    joke.innerHTML = `안타깝군요!`;
  });

  //로고 누르면 리셋
  const logoreset = document.querySelector('#header .logo');
  logoreset.addEventListener('click', (e) => {
    location.href = 'index-login.html';
  });

  //비밀번호 눈동자 이벤트
  //  $('body').on('focus', '.log input', function (event) {
  //    $(this).parent().addClass('active');
  //  });

  //  $('body').on('blur', '.log input', function () {
  //    if (!$(this).val().length > 0) {
  //      $(this).parent().removeClass('active');
  //    }
  //  });

  //  $('body').on('click', '.log svg:not(.active)', function () {
  //    $(this).addClass('active');
  //    $('.log input').attr('type', 'text');
  //  });

  //  $('body').on('click', '.log svg.active', function () {
  //    $(this).removeClass('active');
  //    $('.log input').attr('type', 'password');
  //  });

  const $log = document.querySelector('.log');
  const $svg = document.querySelector('.log svg');
  const $passinput = document.querySelector('.passtext');
  $svg.addEventListener('click', (e) => {
    console.log($svg.classList.value);
    if ($svg.classList.value !== 'active') {
      $svg.classList.toggle('active');
      $passinput.setAttribute('type', 'text');
    } else if ($svg.classList.value === 'active') {
      $svg.classList.toggle('active');
      $passinput.setAttribute('type', 'password');
    }
  });
  //헤더 로그인
  // const MYPAGE = 'http://127.0.0.1:59624/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%ED%8D%BC%EC%8A%A4%ED%8A%B8/html/index-mypage.html';
  // const LOGIN = 'http://127.0.0.1:59624/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%ED%8D%BC%EC%8A%A4%ED%8A%B8/html/index-login.html';
  // const SIGN_UP = 'http://127.0.0.1:59624/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%ED%8D%BC%EC%8A%A4%ED%8A%B8/html/index-sign_up.html';
  // const loginmove = document.querySelector('.loginmove');
  // loginmove.addEventListener('click', (e) => {
  //   window.location.href = LOGIN;
  //   console.log('a태그 되냐');
  // });
})();