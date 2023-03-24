var now = new Date();
function createtime() {
  var grt = new Date("08/03/2022 00:00:00");
  now.setTime(now.getTime() + 250);
  var days = (now - grt) / 1e3 / 60 / 60 / 24,
    dnum = Math.floor(days),
    hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
    hnum = Math.floor(hours);
  1 == String(hnum).length && (hnum = "0" + hnum);
  var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
    mnum = Math.floor(minutes);
  1 == String(mnum).length && (mnum = "0" + mnum);
  var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
    snum = Math.round(seconds);
  1 == String(snum).length && (snum = "0" + snum);
  let currentTimeHtml = "";
  (currentTimeHtml =
    hnum < 18 && hnum >= 9
      ? `<img class='boardsign' src='https://img.shields.io/badge/Judejojoker-%E7%99%BD%E6%97%A5%E6%A2%A6%E6%97%B6%E9%97%B4-lightgrey' title='世界只是你的游乐场～'><span class='textTip'> <br> 本站居然运行了 ${dnum} 天</span><span id='runtime'> ${hnum} 小时 ${mnum} 分 ${snum} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`
      : `<img class='boardsign' src='https://img.shields.io/badge/Judejojoker-%E5%81%9A%E6%A2%A6%E6%97%B6%E9%97%B4%E5%88%B0%EF%BD%9E-lightgrey' title='宇宙很大，生活更大~'><span class='textTip'> <br> 本站居然运行了 ${dnum} 天</span><span id='runtime'> ${hnum} 小时 ${mnum} 分 ${snum} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`),
    document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
setInterval(() => {
  createtime();
}, 250);