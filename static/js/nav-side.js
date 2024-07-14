document.addEventListener("scroll", function() {
    let navLinks = document.querySelectorAll('.nav-side .nav-link');
    let navBar = document.getElementById('nav-side');

    // 这个地方进行修改 改为别的id
    let introSection = document.getElementById('header-container'); // 获取id为intro的section元素

    // 检查页面滚动位置是否已滚动至intro部分以下
    let introBottom = introSection.getBoundingClientRect().bottom;
    if (window.scrollY > introBottom) {
        navBar.style.display = 'block'; // 如果是，则显示导航栏
    } else {
        navBar.style.display = 'none'; // 如果不是，则隐藏导航栏
    }

    // 检查是否为移动设备窗口大小，并相应地隐藏导航栏
    if (window.innerWidth < 768) {
        navBar.style.display = 'none';
    }

    navLinks.forEach(link => {
        let section = document.querySelector(link.getAttribute('href'));
        if (!section) return; // 如果section不存在，则跳过

        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // 检查section是否在视窗内，并相应地添加或移除active-link类
        if (sectionTop < window.innerHeight && sectionBottom >= 0) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
});