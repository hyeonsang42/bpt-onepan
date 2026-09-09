// 법PT 판단 테스트 방명록 수집 스크립트
// 사용법
// 1. 구글 스프레드시트를 새로 만든다. 첫 행에 순서대로 적는다: 시각 / 이름 / 후기 / 결과유형
// 2. 확장 프로그램 > Apps Script 를 열고 아래 코드를 붙여 넣는다.
// 3. 배포 > 새 배포 > 유형 "웹 앱"
//    실행 사용자: 나
//    액세스 권한: 모든 사용자
// 4. 배포 후 나오는 웹 앱 URL 을 index.html 의 ENDPOINT 에 넣는다.
// 5. 코드를 고치면 배포 > 배포 관리 에서 새 버전으로 다시 배포해야 반영된다.

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var p = e.parameter || {};

  var at = p.at ? new Date(p.at) : new Date();
  var name = String(p.name || '익명').slice(0, 20);
  var msg = String(p.msg || '').slice(0, 120);
  var type = String(p.type || '').slice(0, 30);

  if (!msg) {
    return ContentService.createTextOutput('empty');
  }

  sheet.appendRow([at, name, msg, type]);
  return ContentService.createTextOutput('ok');
}

// 브라우저에서 URL 을 직접 열었을 때 살아있는지 확인용
function doGet() {
  return ContentService.createTextOutput('법PT guestbook alive');
}
