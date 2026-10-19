// 1. 判断当前页面在哪个目录：URL 路径里含 /works/ 就是详情页
const ROOT = location.pathname.includes('/works/') ? '..' : '.';

// 2. 导航的单一数据源
const NAV_HTML = `
  <ul class="nav-menu">
    <li><a href="{root}/index.html">Home</a></li>

    <li position="relative">
        <a href="{root}/index.html#works">My Works</a>
        <ul class="dropdown">
            <li><a href="{root}/works/work1.html">1: Pretty Pretty</a></li>
            <li><a href="{root}/works/work2.html">2: Random Tic-Tac-Toe</a></li>
            <li><a href="{root}/works/work3.html">3: I don't know</a></li>
            <li><a href="{root}/works/work4.html">4: I don't know</a></li>
            <li><a href="{root}/works/work5.html">5: To Kill an Alchemist</a></li>
        </ul>
    </li>

    <li><a href="{root}/thanks.html">Acknowledgements</a></li>

  </ul>
`;

// 3. 找到容器，替换占位符后注入
document.querySelector('#site-nav').innerHTML = NAV_HTML.replaceAll('{root}', ROOT);