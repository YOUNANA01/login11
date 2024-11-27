// HTML 요소 참조
const signupContainer = document.getElementById('signup-container');
const loginContainer = document.getElementById('login-container');
const profileContainer = document.getElementById('profile-container');
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const userInfo = document.getElementById('user-info');
const toSignup = document.getElementById('to-signup');
const logoutButton = document.getElementById('logout');

// 회원가입 페이지로 이동
toSignup.addEventListener('click', function() {
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
});

// 회원가입 데이터 저장
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const user = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        gender: document.getElementById('gender').value,
        age: document.getElementById('age').value,
        animalTestLink: document.getElementById('animal-test-link').value,
        animalTestResult: document.getElementById('animal-test-result').value,
        discTestLink: document.getElementById('disc-test-link').value,
        discTestResult: document.getElementById('disc-test-result').value
    };

    localStorage.setItem(user.username, JSON.stringify(user));
    alert('회원가입이 완료되었습니다!');
    signupForm.reset();
    signupContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});

// 로그인 처리
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedUser = JSON.parse(localStorage.getItem(username));

    if (storedUser && storedUser.password === password) {
        alert('로그인 성공!');
        displayUserInfo(storedUser);
    } else {
        alert('아이디 또는 비밀번호가 잘못되었습니다.');
    }
});

// 사용자 정보 표시
function displayUserInfo(user) {
    userInfo.innerHTML = `
        <p><strong>아이디:</strong> ${user.username}</p>
        <p><strong>성별:</strong> ${user.gender}</p>
        <p><strong>나이:</strong> ${user.age}</p>
        <p><strong>동물상 테스트 링크:</strong> <a href="${user.animalTestLink}" target="_blank">${user.animalTestLink}</a></p>
        <p><strong>동물상 테스트 결과:</strong> ${user.animalTestResult}</p>
        <p><strong>DISC 검사 링크:</strong> <a href="${user.discTestLink}" target="_blank">${user.discTestLink}</a></p>
        <p><strong>DISC 검사 결과:</strong> ${user.discTestResult}</p>
    `;
    loginContainer.style.display = 'none';
    profileContainer.style.display = 'block';
}

// 로그아웃 처리
logoutButton.addEventListener('click', function() {
    profileContainer.style.display = 'none';
    loginContainer.style.display = 'block';
    loginForm.reset();
});