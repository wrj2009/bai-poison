let searched = false;

document.getElementById("keyword").addEventListener(
  "focus",
  () => {
    document.getElementById("search-input").classList.add("focus");
  }
)
document.getElementById("keyword").addEventListener(
  "blur",
  () => {
    document.getElementById("search-input").classList.remove("focus");
  }
)
document.getElementById("search-input").addEventListener(
  "click",
  () => {
    document.getElementById("keyword").focus();
  }
)
document.getElementById("keyword").addEventListener(
  "keydown",
  e => {
    if (this.value == "") {
      document.getElementById("clear").classList.add("hide");
    } else {
      document.getElementById("clear").classList.remove("hide");
    }
    if (!document.getElementById("links").classList.contains("hide")) document.getElementById("links").classList.add("hide");
    document.getElementById("hide-logo").classList.remove("hide");
    if (!document.getElementsByClassName("search-form")[0].classList.contains("hide")) document.getElementsByClassName("search-form")[0].classList.add("searching");
    if (!document.getElementsByClassName("top")[0].classList.contains("hide")) document.getElementsByClassName("top")[0].classList.add("searching");
    if (!document.getElementById("home-logo").classList.contains("hide")) document.getElementById("home-logo").classList.add("hide");
    if (!document.getElementById("recommended").classList.contains("hide")) document.getElementById("recommended").classList.add("hide");
    if (!searched) document.getElementById("search-tips").classList.remove("hide");
    document.getElementById("empty").classList.add("hide");
    if (e.key == "Enter") {
      search();
    }
  }
)
document.getElementById("search-button").addEventListener(
  "click",
  () => {
    if (document.getElementById("keyword").value != "") {
      search();
    }
  }
)
document.getElementById("clear").addEventListener(
  "click",
  () => {
    document.getElementById("keyword").value = "";
    document.getElementById("clear").classList.add("hide");
  }
)

const search_results = [
  [
    "水是什么意思？年轻人都在聊！",
    "水是什么？水究竟是什么梗？水是如何火起来的？大家都知道，现代社会中随着人们生活水平的提高，水如今也成为了人们茶余饭后的谈资。相信大家对水都很熟悉，水就是我们每天都会经常遇到的，但是…"
  ],
  [
    "关于这种食物的 8 个真相，外国小伙一脸懵逼！",
    "最近很火的这种食物是什么梗？这种食物是怎么火起来的呢？大家都知道，这种食物最近很火，究竟是为什么很火呢？这种食物到底是什么梗？相信大家对这种食物都很熟悉，这种食物就是我们每天都会经…"
  ],
  [
    "这种液体是怎么回事？知道真相的我……",
    "这种液体是怎么一回事？这种液体是什么梗？这种液体最近为什么这么火呢？众所周知，这种液体是最近非常火的一个词。那么这种液体到底是什么梗呢？相信大家对这种液体都很熟悉，这种液体就是我们…"
  ],
  [
    "草是怎么回事？最详细的解答来了！",
    "你知道草吗？草最近为什么这么火？说到草大家肯定都不陌生，但是你知道草到底是什么吗？相信大家对草都很熟悉，草就是我们每天都会经常遇到的，但是草是怎么回事呢？就由小编来为大家介绍一下。…"
  ],
  [
    "你听过营销号吗？年轻人都在聊！",
    "营销号是什么？营销号究竟是什么梗？营销号是如何火起来的？众所周知，营销号是最近非常火的一个词。那么营销号到底是什么梗呢？相信大家对营销号都很熟悉，营销号就是我们每天都会经常遇到的，…"
  ],
  [
    "数学书是怎么火起来的？最详细的解答来了！",
    "数学书是什么？数学书究竟是什么梗？数学书是如何火起来的？众所周知，数学书是最近非常火的一个词。那么数学书到底是什么梗呢？相信大家对数学书都很熟悉，数学书就是我们每天都会经常遇到的，…"
  ],
  [
    "数学书是什么意思？身边有数学书的要注意了！",
    "数学书是什么？数学书究竟是什么梗？数学书是如何火起来的？大家都知道，现代社会中随着人们生活水平的提高，数学书如今也成为了人们茶余饭后的谈资。相信大家对数学书都很熟悉，数学书就是我们…"
  ],
  [
    "什么是哔哩哔哩？今天终于水落石出！",
    "随着人们生活水平的提高和科技的进步，哔哩哔哩也被越来越多人所知。那么哔哩哔哩究竟是什么意思呢？相信大家对哔哩哔哩都很熟悉，哔哩哔哩就是我们每天都会经常遇到的，但是哔哩哔哩是怎么回事…"
  ],
  [
    "GitHub 是怎么回事？转给身边的老人！",
    "随着人们生活水平的提高和科技的进步，GitHub 也被越来越多人所知。那么 GitHub 究竟是什么意思呢？相信大家对 GitHub 都很熟悉，GitHub 就是我们每天都会经常遇…"
  ],
  [
    "Scratch 有什么妙用？99% 的人都不知道！",
    "你知道 Scratch 吗？Scratch 最近为什么这么火？随着人们生活水平的提高和科技的进步，Scratch 也被越来越多人所知。那么 Scratch 究竟是什么意思呢？相信大…"
  ],
  [
    "小编是怎么火起来的？身边有小编的要注意了！",
    "小编是什么？小编究竟是什么梗？小编是如何火起来的？大家都知道，小编最近很火，究竟是为什么很火呢？小编到底是什么梗？相信大家对小编都很熟悉，小编就是我们每天都会经常遇到的，但是小编是…"
  ]
]
function search() {
  searched = true;
  document.getElementById("search-tips").classList.add("light");
  document.getElementById("search-results").classList.add("light");
  setTimeout(() => {
    if (!document.getElementById("search-tips").classList.contains("hide")) document.getElementById("search-tips").classList.add("hide");
    document.getElementById("search-results").classList.remove("hide");
    document.getElementById("search-tips").classList.remove("light");
    document.getElementById("search-results").classList.remove("light");
    let search_result_titles = document.getElementsByClassName("search-result-title");
    let search_result_contents = document.getElementsByClassName("search-result-content");
    for (let i = 0; i < search_result_titles.length; i++) {
      let result = Math.floor(Math.random() * search_results.length)
      search_result_titles[i].innerHTML = search_results[result][0];
      search_result_contents[i].innerHTML = search_results[result][1];
    }
  }, 500);
}

const titles = [
  "专家：你每天都在喝的东西含有大量有毒物质，喝 1 mL 就会导致中毒！",
  "震惊！这种东西吃了会导致中毒，就在我们身边！看完赶紧转发扩散",
  "最新研究发现，喝水会导致中毒！专家提醒：千万不要再喝水了！",
  "开水不能直接喝是怎么回事呢？开水相信大家都很熟悉，但是开水不能直接喝是怎么回事呢？开水不能直接喝，…",
  "近日一外国小伙火了，大家都知道非牛顿流体有多厉害，一位外国小伙作死尝试从楼顶跳进非牛顿流体里，想想…",
  "震惊！根据最新研究成果，H₂O 其实和水是一样的！",
  "登上热搜的水是什么意思？99%的人都不知道！",
  "你听说过这种东西吗？专家权威解读！",
  "关于这种食物的 8 个真相，令人震惊！",
  "为什么电脑不需要主板？不懂会闹大笑话！",
  "什么是营销号？老外：真的太牛了！",
  "你听过小编吗？还不知道就 out 了！",
  "这种东西有什么妙用？知道真相的我……",
  "这种东西是什么？一小伙竟借此月入百万！",
]

let recommended_content_titles = document.getElementsByClassName("recommended-title");
for (let i = 0; i < recommended_content_titles.length; i++) {
  recommended_content_titles[i].innerText = titles[Math.floor(Math.random() * titles.length)];
}

document.getElementById("keyword").focus();
