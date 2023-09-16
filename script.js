function navigateToAnotherPage() {
  window.location.href = 'CtrlA/CtralA.html';
}


function popBalloon(element) {
  element.style.visibility = 'hidden';  // 風船を非表示にする
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById('message').textContent = messages[randomIndex];
}

function temp() {
  alert('実装中なのでちょっと待ってね♡');
}


