document.getElementById('inputField').addEventListener('keydown', function(event) {
    // Ctrl + A を検出
    if (event.ctrlKey && event.key === 'T') {
        alert('成功！\n'
        +'ブラウザにて新しいタブを開くショートカットキーです。');
        document.getElementById('result').innerText = 'テキストボックス内を全選択に成功！\n'
        +'※Ctrl+N';
        event.preventDefault();  // テキスト全選択のデフォルト動作を阻止
    }
});

function back() {
    window.location.href = '../index.html';
  }
