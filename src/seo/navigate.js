// 라우터 컨텍스트 밖(콜백 등)에서 페이지 이동 — BrowserRouter 가 popstate 를 감지해 화면을 바꾼다.
export function navigateTo(path) {
  if (window.location.pathname + window.location.search === path) return;
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}
