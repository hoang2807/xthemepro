document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll('.theme-designing-list-container .item');

  const showMoreButton = document.getElementById('show-more');
  let visibleItemCount = 12;
  let totalItems = items.length;

  for (let i = 0; i < visibleItemCount; i++) {
    items[i].style.display = 'flex';
  }

  showMoreButton.addEventListener('click', function () {
    if (visibleItemCount < totalItems) {
      for (let i = visibleItemCount; i < visibleItemCount + 6 && i < totalItems; i++) {
        items[i].style.display = 'flex';
      }
      visibleItemCount += 12;
    } else {
      showMoreButton.style.display = 'none';
    }
  });
});