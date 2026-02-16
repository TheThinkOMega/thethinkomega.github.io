document.addEventListener('DOMContentLoaded', function () {

  /* --- Scroll Animations (Intersection Observer) --- */
  var animatedEls = document.querySelectorAll('.fade-up, .fade-in, .stagger');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    animatedEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    animatedEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }


  /* --- Navbar Scroll Effect --- */
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    function updateNavbar() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();
  }


  /* --- Mobile Nav Close on Link Click --- */
  var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  var navCollapse = document.querySelector('.navbar-collapse');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navCollapse && navCollapse.classList.contains('show')) {
        var bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });


  /* --- CTA Form Handler --- */
  var ctaForm = document.querySelector('.cta-form form');
  if (ctaForm) {
    ctaForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var formEl = this;
      var successEl = formEl.closest('.cta-form').querySelector('.form-success')
        || formEl.parentElement.querySelector('.form-success');
      if (successEl) {
        formEl.style.display = 'none';
        successEl.classList.add('show');
      }
    });
  }

  var contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var formEl = this;
      var successEl = formEl.closest('.contact-form').querySelector('.form-success')
        || formEl.parentElement.querySelector('.form-success');
      if (successEl) {
        formEl.style.display = 'none';
        successEl.classList.add('show');
      }
    });
  }

});
