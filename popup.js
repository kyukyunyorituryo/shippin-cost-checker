// 設定画面で保存ボタンを押されたら
function save_options() {
    
  // 設定値を変数に格納  
  var ship = document.getElementById('shipping-cost').value;
 
  // chromeアカウントと紐づくストレージに保存
  chrome.storage.sync.set({
    selected_ship: ship
    
  }, function() {

  });
}
 
// 設定画面で設定を表示する
function restore_options() {
  // デフォルト値は、ここで設定する
  chrome.storage.sync.get({
    selected_ship: 3000
    
  // 保存された値があったら、それを使う
  }, function(items) {
    document.getElementById('shipping-cost').value = items.selected_ship;
  });
}
 
// 画面表示と保存ボタンのイベントを設定
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);