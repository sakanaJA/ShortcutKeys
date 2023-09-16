document.addEventListener('keydown', function(event) {
    event.preventDefault();  // この行でブラウザのデフォルトの動作（新しいタブを開く動作）をキャンセルします。
    if (event.ctrlKey && event.key === 't' || event.ctrlKey && event.key === 'T') {
        window.location.href = '../index.html';
        event.preventDefault();  // この行でブラウザのデフォルトの動作（新しいタブを開く動作）をキャンセルします。
        alert('temp');
        
    }
});


function CtralT() {
    alert('新しいタブが表示されたかな…？');
    
    var resultElement = document.getElementById('result');
    resultElement.innerText = 'ブラウザの新しいタブを開くことができるよ\n'
    +'※Ctrl + Nだと新しいウィンドウにて開いてくれるよ';
    
    // 色とサイズを変更する
    resultElement.style.color = 'red';  // 文字の色を赤に設定
    resultElement.style.fontSize = '24px';  // フォントサイズを24pxに設定
};


function back() {
    window.location.href = '../index.html';
  }
