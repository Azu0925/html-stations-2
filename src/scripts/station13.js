function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const checkBox = document.getElementById("check");
  const text = document.getElementById("text");
  if (checkBox.checked == true) {
    text.style.backgroundColor = "red";
  } else {
    text.style.backgroundColor = "";
  }
}
