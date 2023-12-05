$(function () {
  // 대상을 변수에 저장
  const $btnMenu = $('.btn-menu');
  const $menu = $('.menu-wrap');
  const $dim = $('.dim');

  // flag : 아직 활성화되지 않음
  let isActive = false;

  // 햄버거 버튼을 클릭했을 때
  $btnMenu.on('click', function (e) {
    e.preventDefault();

    // 버튼에 active 클래스 토글
    $(this).toggleClass('active');

    // $dim 활성화
    $dim.fadeToggle();

    // $menu가 보여지게 : isActive 조건에 따라서
    if (isActive === false) {
      // $menu를 보이게
      slideMenu(0);
      isActive = true;
    } else {
      // $menu를 안 보이게
      slideMenu('-100%');
      isActive = false;
    }
  });

  // 공통의 동작을 함수로 정의
  function slideMenu(pos) {
    $menu.animate(
      {
        left: pos,
      },
      350
    );
  }
});
