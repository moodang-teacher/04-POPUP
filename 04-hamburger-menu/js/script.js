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

    // $menu가 보여지게 : isActive 조건에 따라서
    // isActive === false ? openMenu() : closeMenu();
    !isActive ? openMenu() : closeMenu();
  });

  // $dim을 클릭했을 때
  $dim.on('click', closeMenu);

  // 공통의 동작을 함수로 정의
  // 1. 메뉴의 움직임 (보이거나 숨기거나)
  function slideMenu(pos) {
    $menu.animate(
      {
        left: pos,
      },
      350
    );
  }

  // 2. openMenu : 메뉴를 보이게(메뉴, active부여, dim fadeIn, isActive)
  function openMenu() {
    $btnMenu.addClass('active');
    $dim.fadeIn();
    slideMenu(0);
    isActive = true;
  }

  // 3. closeMenu : 메뉴를 안 보이게(메뉴, active삭제, dim fadeOut, isActive)
  function closeMenu() {
    $btnMenu.removeClass('active');
    $dim.fadeOut();
    slideMenu('-100%');
    isActive = false;
  }
});
