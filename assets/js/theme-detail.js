$(document).ready(function () {
  $('.screenshot-container-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 3,
    variableWidth: true,
    prevArrow: $('.arrow-prev'),
    nextArrow: $('.arrow-next'),
    responsive: [
      {
        breakpoint: 1311,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          centerPadding: '13px',
        }
      }
    ]
  })
});

function showImageModal(image) {
  const modalImage = document.getElementById('modal-image')
  modalImage.src = image.src
  modalImage.alt = image.alt
}
