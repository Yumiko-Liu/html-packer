(function(window) {
  var offWidth = document.body.clientWidth / 1378 * 100;
  document.documentElement.style.fontSize = offWidth + 'px';
}(window));

module.exports = {
  "getLink": function(type) {
    // var path = '';
    // path = type === 'teacher' && '';
    // var xmlhttp = new XMLHttpRequest();
    // xmlhttp.onreadystatechange = function () {
    //   if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    //     var res = xmlhttp.response;
    //     document.getElementById('ios-dl').setAttribute('href', res);
    //     document.getElementById('android-dl').setAttribute('href', res);
    //   }
    // }
    // xmlhttp.open("GET", path, true);
    // xmlhttp.send();
    var fileName = type === 'teacher' ? 'teacher' : 'parental';
    console.log(fileName);
  }
}
