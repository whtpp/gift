/**
 * 打字效果 byaei
 */
function typewrite() {
  let str =
    "<当代码不止是代码的时候，它就有了新的意义<愿你以后的每一天，无论谁在，谁不在<永远开心<永远充满希望<";
  let strp = "";
  let i = 0;
  function print1() {
    if (str[i] == "<") {
      document.getElementById("box1").innerHTML = strp + "<br><br>" + "|";
      strp += "<br><br>";
    } else if (str[i] == "-") {
      document.getElementById("box1").innerHTML = strp + "&nbsp&nbsp&nbsp";
      strp += "&nbsp&nbsp&nbsp";
    } else {
      strp += str[i];
      document.getElementById("box1").innerHTML = strp + "|";
    }
    i++;
  }
  function print2() {
    setTimeout(() => {
      document.getElementById("box1").innerHTML = strp + "&nbsp";
    }, 100);
    setTimeout(() => {
      document.getElementById("box1").innerHTML = strp + "|";
    }, 630);
  }
  let printid = setInterval(() => {
    print1();
    if (i == str.length) clearInterval(printid);
  }, 90);
  setTimeout(() => {
    id = setInterval(print2, 1060); //注意setInterval内部直接写函数的时候是直接写函数名不加括号的。
  }, (str.length - 1) * 90);
  //0.53秒闪一次
}

let clickb = false; //判断播放按钮是否已经按过了，如果已经按过了才可以执行键盘事件

function funclick() {
  let x = document.createElement("audio");
  x.setAttribute("src", "./video/55.mp3");
  x.setAttribute("autoplay", "autoplay");
  let yinyan = document.getElementById("yinyan");
  yinyan.setAttribute("style", "opacity:0");
  setTimeout(function () {
    document.getElementById("fronclick").style.zIndex = -300;
    document.getElementById("box").style.opacity = 1;
  }, 1500); //让播放按钮消失了
  //yinyan.style.opacity=0;
  clickb = true;
}

let k = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
  I: 8,
  J: 9,
  K: 10,
  L: 11,
  M: 12,
  N: 13,
  O: 14,
  P: 15,
  Q: 16,
  R: 17,
  S: 18,
  T: 19,
  U: 20,
  V: 21,
  W: 22,
  X: 23,
  Y: 24,
  Z: 25,
};
let a = [
  {
    name: "A",
    yin: 8,
    str: "<br>生号白茸向春开<br><br>辰角高霭紫气来<br><br>吉谶同语一杯酒<br><br>乐成共饮为勉怀",
  },
  {
    name: "B",
    yin: 2,
    str: `<br><br>在我看来<br><br>脾气不好<br><br>顶多算性格特点<br><br>不算缺点`,
  },
  { name: "C", yin: 3, str: "<br><br><br><br>未来不足惧，过往不须泣" },
  { name: "D", yin: 4, str: "<br><br><br><br>自我救赎，是一种信仰" },
  {
    name: "E",
    yin: 5,
    str: "<br>所谓顺其自然<br><br>应该是尽力而为后的不强求<br><br>而非两手一摊的不作为",
  },
  {
    name: "F",
    yin: 6,
    str: "任何时候<br><br>都应该具备修复一段关系的能力<br><br>毕竟沉默是个人都会<br><br>而前者最为难能可贵",
  },
  {
    name: "G",
    yin: 7,
    str: "<br><br>永远不要和亲近的人发脾气<br><br>我可以忍受委屈<br><br>但我无法忍受愧疚",
  },
  {
    name: "H",
    yin: 11,
    str: "<br><br>语气不要自视过高<br><br>即使没有站在所有人的制高点上<br><br>也可能不经意间<br><br>站在了对方的制高点上",
  },
  {
    name: "I",
    yin: 3,
    str: "<br><br>没有人生来就喜欢沉默<br><br>都是沟通无果后的选择",
  },
  {
    name: "J",
    yin: 10,
    str: "<br><br><br><br>智商越高的动物<br><br>越在做狗方面有独到的见解",
  },
  {
    name: "K",
    yin: 5,
    str: "<br><br>所有情感的单位都应该以年计才对<br><br>可还是有那么多人<br><br>为了一天两天的火花失望伤心",
  },
  {
    name: "L",
    yin: 3,
    str: "<br><br><br><br>生活本就波澜不惊<br><br>要学会自己创造快乐",
  },
  { name: "M", yin: 13, str: "<br><br><br><br>愿君平生路,一蓑烟雨度" },
  { name: "N", yin: 8, str: "<br><br><br><br>自我控制<br><br>是一种本能" },
  {
    name: "O",
    yin: 7,
    str: "<br><br><br><br>永远期待顶峰相见<br><br>有了期待<br><br>过程似乎总是是带着希望",
  },
  {
    name: "P",
    yin: 16,
    str: "<br><br><br><br>最不聪明的人<br><br>用曾经逝去的悲伤<br><br>惩罚未来的自己",
  },
  {
    name: "Q",
    yin: 17,
    str: "<br>读了那么多诗<br><br>还是喜欢这一句<br><br>长风破浪会有时<br><br>直挂云帆济沧海",
  },
  {
    name: "R",
    yin: 2,
    str: "<br><br>即使信仰与当下多数观念背道而驰<br><br>只要自己认为是对的<br><br>那就决意前行<br><br>永不后悔",
  },
  { name: "S", yin: 3, str: "<br><br>任何时候都应该有彻底改变自己的勇气" },
  { name: "T", yin: 20, str: "<br><br>不随便开始<br><br>不随意妥协" },
  {
    name: "U",
    yin: 5,
    str: "<br><br><br><br>必要的时候<br><br>做个坏人也无妨",
  },
  {
    name: "V",
    yin: 22,
    str: "<br><br><br><br>我不经意间饮尽了月光<br><br>整个世界变得摇摇晃晃",
  },
  {
    name: "W",
    yin: 19,
    str: "<br><br><br><br>给时光以生命<br><br>给岁月以文明",
  },
  {
    name: "X",
    yin: 2,
    str: "<br><br>失去人性<br><br>失去很多<br><br>失去兽性<br><br>失去一切",
  },
  {
    name: "Y",
    yin: 8,
    str: "<br><br>大学生最不怕的就是emo<br><br>怕是怕这些苦没来由",
  },
  { name: "Z", yin: 26, str: "<br><br><br>人类进化的时候你躲起来了嘛？" },
];
let b = [
  "url(./img/1648732086981.jpg)",
  "url(./img/1648731912585.jpg)",
  "url(./img/1648731907273.jpg)",
  "url(./img/1648731915141.jpg)",
  "url(./img/1648731917828.jpg)",
  "url(./img/1648732059529.jpg)",
  "url(./img/1648732079898.jpg)",
  "url(./img/R-C.jpg)",
  "url(./img/1648732094502.jpg)",
  "url(./img/R-C1.jpg)",
  "url(./img/R-C.jpg)",
  "url(./img/t012b38de2c48cd7949.jpg)",
  "url(./img/1648734738084.jpg)",
  "url(./img/1648734747756.jpg)",
  "url(./img/1648734756887.jpg)",
  "url(./img/1648734773439.jpg)",
  "url(./img/1648734788532.jpg)",
  "url(./img/1648734792456.jpg)",
  "url(./img/1648734812103.jpg)",
  "url(./img/1648734765585.jpg)",
  "url(./img/null-4a27dc4ee7567cc0.jpg)",
  "url(./img/null15ec55d42accd2e7.jpg)",
  "url(./img/null79b3d39492d44f57.jpg)",
  "url(./img/null13756b1060c5a917.jpg)",
  "url(./img/null-495067e2b97d418f.jpg)",
  "url(./img/null15ec55d42accd2e7.jpg)",
];
let s = "a";
let records = 0; //记录我已经输入过了，防止出现多个打字function byaei

/*键盘事件*/
function fl(e) {
  if (clickb == true) {
    let key = e.key;
    if ((key <= "z" && key >= "a") || (key <= "Z" && key >= "A")) {
      //避免大小写的错误
      let p = a[k[key]];
      s = s + p.name;
      let x = document.createElement("audio");
      x.setAttribute("src", `./video/${p.yin}.mp3`);
      x.setAttribute("autoplay", "autoplay");
      let box = document.getElementById("box");
      let boxl = document.getElementById("boxl");
      let boxr = document.getElementById("boxr");
      let boxup = document.getElementById("boxup");
      let bac = document.getElementById("bac");
      bac.style.opacity = 0;
      box.style.transition = "0.5s";
      box.style.opacity = 0;
      boxup.style.opacity = 0;
      setTimeout(function () {
        boxl.innerHTML = `${p.name}`;
        boxr.innerHTML = `${p.str}`;
        console.log(b[k[key]]);
        bac.style.background = `${b[k[key]]}`;
        box.style.opacity = 1;
        boxup.style.opacity = 1;
        bac.style.opacity = 1;
      }, 500);
      if (s.indexOf("XIAOYUXIAOYUSRKL") != -1 && records == 0) {
        setTimeout(function () {
          records = 1;
          bac.style.opacity = 0;
          box.style.opacity = 0;
          boxup.style.opacity = 0;
          bac.style.opacity = 0;
          let box1 = document.getElementById("box1");
          box1.style.zIndex = 7;
          box1.style.opacity = 1;
          let music = document.createElement("audio");
          x.setAttribute("src", `./video/u make me wanna.aac`);
          x.setAttribute("autoplay", "autoplay");
          x.setAttribute("loop", "loop");
        }, 750);
        setTimeout(typewrite, 3000); //进行打字
      }
    }
  }
}

window.onkeyup = fl;
