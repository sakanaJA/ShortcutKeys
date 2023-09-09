document.getElementById('inputField').addEventListener('keydown', function(event) {
    // Ctrl + A を検出
    if (event.ctrlKey && event.key === 'a') {
        document.getElementById('result').innerText = '成功! Ctrl + A が押されました！\n'
        +'※補足：テキストボックス内をダブルクリックするとその文字と同じ種類の文字が連続する範囲が選択されるぞ！';
        //event.preventDefault();  // テキスト全選択のデフォルト動作を阻止
    }
});

function back() {
    window.location.href = 'index.html';
  }
