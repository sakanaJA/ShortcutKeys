document.getElementById('inputField').addEventListener('keydown', function(event) {
    // Ctrl + A を検出
    if (event.ctrlKey && event.key === 'a') {
        alert('成功！\n'
        +'※補足：テキストボックス内が全選択されました。');
        
        var resultElement = document.getElementById('result');
        resultElement.innerText = 'テキストボックス内を全選択に成功！\n'
        +'※Ctrl+Cと組み合わせるとテキストボックス内を全コピーすることができるよ！';
        
        // 色とフォントサイズを変更
        resultElement.style.color = 'red';  // 文字色を赤に変更
        resultElement.style.fontSize = '20px';  // フォントサイズを20pxに変更
        
        //event.preventDefault();  // テキスト全選択のデフォルト動作を阻止
    }
});


function back() {
    window.location.href = '../index.html';
  }
