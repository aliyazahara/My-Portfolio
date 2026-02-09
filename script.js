window.addEventListener('load', function() {
    const splash = document.querySelector('#splash-screen');
    const body = document.querySelector('body');
    
    setTimeout(() => {
        splash.classList.add('fade-out');
        setTimeout(() => {
            body.classList.add('start-animation');
        }, 200);
    }, 1500);
});

const revealItems = document.querySelectorAll(".reveal-item");

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("show");
        obs.unobserve(entry.target);
    });
}, {
    threshold: 0.15
});

revealItems.forEach(el => {
    observer.observe(el);
});

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.onload = function () {

    if (window.location.hash) {
        history.replaceState(null, null, window.location.pathname);
    }

    window.scrollTo(0, 0);
};

const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(btn => {
    btn.addEventListener("click", () => {

        tabs.forEach(b => b.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        btn.classList.add("active");
        document.getElementById(btn.dataset.tab)
            .classList.add("active");
    });
});

// init emailjs
(function(){
   emailjs.init("MaDa08IKvREsstLKI");
})();

document.getElementById("contact-form")
.addEventListener("submit", function(e){
   e.preventDefault();

   emailjs.sendForm(
      "service_91uipls",
      "template_ygk1x4n",
      this
   ).then(()=>{
      alert("Pesan berhasil dikirim");
      this.reset();
   },()=>{
      alert("Pesan gagal");
   });
});

// buat hover menu navbar
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-capsule a");

    const observerOptions = {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach((section) => {
        observer.observe(section);
    });
});

// about me home page desc
const typed = new Typed('#typing-text', {
    strings: ["A 6th-semester Informatics student specializing in Intelligent Interactive Systems, currently passionate about mastering Front-End Development. I have experience in web development and creating simple VR games through various academic projects. I am an enthusiastic and fast learner with high motivation to grow in a professional environment, ready to receive guidance and contribute effectively within an IT team."],
    typeSpeed: 25,
    showCursor: true,
    cursorChar: '|',
    loop: false,
    onComplete: (self) => {
        self.cursor.style.opacity = '0';
        self.cursor.style.transition = 'opacity 0.5s ease';
    }
});
//  buat tampilan sertif
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("imgFull");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close-modal");

    const viewButtons = document.querySelectorAll(".btn-view-cert");

    viewButtons.forEach(btn => {
        btn.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.getAttribute("data-src");
            captionText.innerHTML = this.closest('.card-info').querySelector('h3').innerHTML;
        }
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-capsule');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.querySelectorAll('.navbar-capsule a').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
}));