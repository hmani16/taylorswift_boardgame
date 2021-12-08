/**
* Template Name: Mamba - v4.7.0
* Template URL: https://bootstrapmade.com/mamba-one-page-bootstrap-template-free/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  //"use strict";


  // load in and set up trivia data
  const trivia = '[ { "question": "What is Taylor Swift\’s lucky number?", "answer": "13" }, { "question": "What song did Taylor win her first Grammy for?", "answer": "White Horse" }, { "question": "What cafe was Taylor discovered at?", "answer": "Bluebird Cafe" }, { "question": "What is Taylor’s middle name?", "answer": "Alison" }, { "question": "How many Grammys did Taylor win in 2010?", "answer": "4" }, { "question": "How tall is Taylor?", "answer": "5 ft 10 in" }, { "question": "What song got an iHeartRadio Best Lyric award?", "answer": "Blank Space" }, { "question": "Who was Taylor named after?", "answer": "James Taylor" }, { "question": "Name 3 acting credits Taylor has", "answer": "Valentine’s Day; New Girl; CSI; Cats;" }, { "question": "Taylor is the godmother for which celebrity\’s kid?", "answer": "Jaime King" } ]'
  const trivia_json_obj = JSON.parse(trivia);
  var trivia_len = trivia_json_obj.length;


  // load in and set up 'guess the lyric data'


  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Header fixed top on scroll
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop
    let nextElement = selectHeader.nextElementSibling
    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('fixed-top')
        nextElement.classList.add('scrolled-offset')
      } else {
        selectHeader.classList.remove('fixed-top')
        nextElement.classList.remove('scrolled-offset')
      }
    }
    window.addEventListener('load', headerFixed)
    onscroll(document, headerFixed)
  }

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  // on('click', '.scrollto', function(e) {
  //   if (select(this.hash)) {
  //     e.preventDefault()

  //     let navbar = select('#navbar')
  //     if (navbar.classList.contains('navbar-mobile')) {
  //       navbar.classList.remove('navbar-mobile')
  //       let navbarToggle = select('.mobile-nav-toggle')
  //       navbarToggle.classList.toggle('bi-list')
  //       navbarToggle.classList.toggle('bi-x')
  //     }
  //     scrollto(this.hash)
  //   }
  // }, true)


  on('click', '#clickGTL', function(e) {
      e.preventDefault()

      // set variables
      console.log("changing?")
      let bar = select("#GTLinner")
      let lyric = select("#theLyric");
      let answer = select("#gtl_answer")
      answer.innerHTML = "something"
      console.log(bar.style)
      bar.style.visibility = "visible"
      lyric.style.visibility = "visible"
      select("#clickGTLa").style.pointerEvents = 'none'

      // run the animation
      bar.classList.remove("in");
      void bar.offsetWidth;
      bar.classList.add("in")

      // reveal answer
      setTimeout(() => {  
          answer.style.visibility = "visible"
          select("#refreshGTLa").style.pointerEvents = 'auto'
          select("#clickGTLa").style.pointerEvents = 'auto'
      }, 20000);
  }, true)

  on('click', '#refreshGTL', function(e) {
      e.preventDefault()
      let bar = select("#GTLinner")
      let lyric = select("#theLyric");
      let answer = select("#gtl_answer")
      console.log(bar.style)
      bar.style.visibility = "hidden"
      lyric.style.visibility = "hidden"
      answer.style.visibility = "hidden"
      select("#clickGTLa").style.pointerEvents = 'auto'
      select("#refreshGTLa").style.pointerEvents = 'none'
  }, true)

  /**
   * Taylor Trivia starts
   */
  on('click', '#clickTT', function(e) {
      e.preventDefault()

      // set variables
      console.log("changing?")
      let bar = select("#TTinner")
      let question = select("#tt_question");
      let answer = select("#tt_answer")
      answer.innerHTML = ""
      console.log(bar.style)

      // retrive Q and A
      var curr_qa = null
      while (curr_qa == null) {
        var pos = Math.floor(Math.random() * trivia_len);
        curr_qa = trivia_json_obj[pos]
      }
      console.log(curr_qa)
      var curr_ans = curr_qa.answer
      var curr_qu = curr_qa.question

      // make div visibele
      bar.style.visibility = "visible"
      question.innerHTML = curr_qu
      question.style.visibility = "visible"
      select("#clickTTa").style.pointerEvents = 'none'

      // run the animation
      bar.classList.remove("in");
      void bar.offsetWidth;
      bar.classList.add("in")

      // reveal answer
      setTimeout(() => {  
          answer.innerHTML = curr_ans
          answer.style.visibility = "visible"
          select("#refreshTTa").style.pointerEvents = 'auto'
          select("#clickTTa").style.pointerEvents = 'auto'
      }, 20000);

      // update trivia json
      delete trivia_json_obj[pos]
      trivia_len = trivia_len - 1


  }, true)

  // reset trivia div
  on('click', '#refreshTT', function(e) {
      e.preventDefault()
      let bar = select("#TTinner")
      let lyric = select("#tt_question");
      let answer = select("#tt_answer")
      console.log(bar.style)
      bar.style.visibility = "hidden"
      lyric.style.visibility = "hidden"
      answer.style.visibility = "hidden"
      select("#clickTTa").style.pointerEvents = 'auto'
      select("#refreshTTa").style.pointerEvents = 'none'
  }, true)


  /**
   * Guess that song starts
   */
  on('click', '#clickGTS', function(e) {
      // e.preventDefault()
      let answer = select("#gts_answer")
      console.log(answer.innerHTML)
      setTimeout(() => {  
        // document.getElementById("#helpme").innerHTML = "fuck"
        answer.innerHTML = 'hello'
        console.log(answer.innerHTML)
        // answer.contentWindow.location.reload(true);
      }, 2000);

  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  // new Swiper('.portfolio-details-slider', {
  //   speed: 400,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   }
  // });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

})()
