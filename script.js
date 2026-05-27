//Theme toggle 
var themeBtn = document.getElementById('themeBtn'); 
var themeIco = document.getElementById('themeIco'); 
if (themeBtn && themeIco) {
  themeBtn.addEventListener('click', function () {
     document.body.classList.toggle('dark'); 
     if (document.body.classList.contains('dark')) { 
        themeIco.classList.remove('fa-sun'); 
        themeIco.classList.add('fa-moon'); 
    } else { 
        themeIco.classList.remove('fa-moon'); 
        themeIco.classList.add('fa-sun');
     } 
    });
} 
    // Swiper init 
var hero = document.querySelector('.hero'); 
if (hero && hero.initialize) { 
    hero.initialize(); 
} 
// Carousel setup 
function makeSlide(trackId, prevId, nextId, barId) { 
    var track = document.getElementById(trackId);
    var prevBtn = document.getElementById(prevId); 
    var nextBtn = document.getElementById(nextId); 
    var bar = document.getElementById(barId); 
    if (!track || !prevBtn || !nextBtn || !bar) return; 
    var view = track.parentElement; 
    var step = 300; 
    nextBtn.addEventListener('click', function () { 
        view.scrollLeft += step; 
    }); 
    prevBtn.addEventListener('click', function () { 
        view.scrollLeft -= step; 
    }); 
    function moveBar() { 
        var max = view.scrollWidth - view.clientWidth; 
        if (max <= 0) { 
            bar.style.width = '100%'; 
            bar.style.left = '0px'; 
            return; 
        } 
        var pct = view.scrollLeft / max; 
        var w = (view.clientWidth / view.scrollWidth) * view.clientWidth; 
        if (w < 30) w = 30; 
        bar.style.width = w + 'px'; 
        bar.style.left = (pct * (view.clientWidth - w)) + 'px'; 
    } 
    view.addEventListener('scroll', moveBar); 
    window.addEventListener('resize', moveBar); 
    moveBar(); 
}

function randomizeImages() {
    var assets = [
        './assets/619geyiQI5L._SX3000_.jpg',
        './assets/61Yx5-N155L._SX3000_.jpg',
        './assets/71QcgptqadL._SX3000_.jpg',
        './assets/71qcoYgEhzL._SX3000_.jpg',
        './assets/81deorstoEL._AC_SY200_.jpg',
        './assets/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg',
        './assets/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg',
        './assets/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg',
        './assets/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg',
        './assets/Home_Flip_Summer_2024_315_HP_NewArrivals_QuadCard_D_01_1x._SY116_CB555960040_.jpg',
        './assets/Home_Flip_Summer_2024_316_HP_NewArrivals_QuadCard_D_02_1x._SY116_CB555960040_.jpg',
        './assets/Home_Flip_Summer_2024_318_HP_NewArrivals_QuadCard_D_04_1x._SY116_CB555960040_.jpg'
    ];
    function getRandomAsset() {
        return assets[Math.floor(Math.random() * assets.length)];
    }
    document.querySelectorAll('img').forEach(function (img) {
        if (img.closest('swiper-container.hero')) return;
        img.src = getRandomAsset();
    });
}

// Init all carousels 
makeSlide('track1', 'prev1', 'next1', 'bar1'); 
makeSlide('track2', 'prev2', 'next2', 'bar2'); 
makeSlide('track3', 'prev3', 'next3', 'bar3'); 
makeSlide('track4', 'prev4', 'next4', 'bar4');

var backToTop = document.getElementById('backToTop');
if (backToTop) {
    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    backToTop.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

randomizeImages();