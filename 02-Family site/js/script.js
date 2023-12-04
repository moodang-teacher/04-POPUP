$(function () {
  // 1. 셀렉트박스 이용
  const $selectMenu = $('.select-menu');

  // 셀렉트박스를 클릭하면 --> option의 선택이 바뀌면
  // change 이벤트 : input, textarea, select 등 요소의 value에 변화가 일어날 때
  $selectMenu.on('change', function () {
    // 클릭한 option의 value값을 가져와서 : val()
    const linkValue = $(this).val();
    console.log(linkValue);

    // 브라우저의 주소창에 적용시킨다. --> 페이지 이동 : location.href
    // location.href = linkValue;

    // 새 창 열기 --> window.open()
    window.open(linkValue);
  });

  // 2. 디자인 커스텀
  const $selectWrap = $('.select-wrap');
  const $selectList = $('.select-list');

  // strong(Family site)을 클릭하면 $selectList를 보이게
  $selectWrap.find('strong').on('click', function () {
    $selectList.slideToggle();
  });

  $selectList.children('li').on('click', function () {
    // attr('속성명')
    // const linkValue = $(this).attr('data-link');

    // data('속성명')
    const linkValue = $(this).data('link');
    console.log(linkValue);

    window.open(linkValue);

    $selectList.slideUp();
  });
});
