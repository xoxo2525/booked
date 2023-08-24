function openLoginLink1() {
    var loginURL = 'https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/';
    window.open(loginURL, '_blank');
};

function openLoginLink2() {
    var loginURL = 'https://accounts.kakao.com/login/?continue=https%3A%2F%2Faccounts.kakao.com%2Fweblogin%2Faccount%2Finfo#login';
    window.open(loginURL, '_blank');
};

function openLoginLink3() {
    var loginURL = 'https://id.payco.com/login.nhn?serviceProviderCode=PAY&inflowKey=www&userLocale=ko_KR&nextURL=https%3A%2F%2Fwww.payco.com%2FisTargetForSecurity.nhn%3Fevent%3Dv03bfc269594ef649228e9a74bab00f042efc91d5acc6fbee31a382e80d42388fe';
    window.open(loginURL, '_blank');
};

function openPopup() {
    var popupURL = "membership.html";
    var windowName = "popupWindow";
    var windowFeatures = 'width=800,height=600,scrollbars=yes';
    window.open(popupURL, windowName, windowFeatures)
};