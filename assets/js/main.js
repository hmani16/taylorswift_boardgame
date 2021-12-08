/**
* Template Name: Mamba - v4.7.0
* Template URL: https://bootstrapmade.com/mamba-one-page-bootstrap-template-free/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  //"use strict";


  // load in and set up trivia data
  const trivia = '[ { "question": "What is Taylor Swift’s lucky number?", "answer": "13" }, { "question": "What song did Taylor win her first Grammy for?", "answer": "White Horse" }, { "question": "What cafe was Taylor discovered at?", "answer": "Bluebird Cafe" }, { "question": "What is Taylor’s middle name?", "answer": "Alison" }, { "question": "How many Grammys did Taylor win in 2010?", "answer": "4" }, { "question": "How tall is Taylor?", "answer": "5 ft 10 in" }, { "question": "What song got an iHeartRadio Best Lyric award?", "answer": "Blank Space" }, { "question": "Who was Taylor named after?", "answer": "James Taylor" }, { "question": "Name 3 acting credits Taylor has", "answer": "Valentine’s Day; New Girl; CSI; Cats;" }, { "question": "Taylor is the godmother for which celebrity\’s kid?", "answer": "Jaime King" } ]'
  const trivia_json_obj = JSON.parse(trivia);
  console.log(trivia_json_obj[0].question)
  var trivia_len = trivia_json_obj.length;


  // load in and set up 'guess the lyric data'
  const lyrics = "Clear blue water, high tide came and brought you in\nAnd I could go on and on, on and on, and I will\nSkies grew darker, currents swept you out again\nAnd you were just gone and gone, gone and gone\nIn silent screams,\nin wildest dreams\nI never dreamed of this\nThis love is good, this love is bad\nThis love is alive back from the dead\nThese hands had to let it go free\nAnd this love came back to me\nTossing, turning, struggled through the night with someone new\nAnd I could go on and on, on and on\nLantern burning, flickered in my mind for only you\nBut you're still gone, gone, gone\nBeen losing grip,\noh, sinking ships\nYou showed up just in time\nThis love is good, this love is bad\nThis love is alive back from the dead\nThese hands had to let it go free\nAnd this love came back to me\nThis love left a permanent mark\nThis love is glowing in the dark\nThese hands had to let it go free\nAnd this love came back to me\nThis love, this love, this love, this love... \nYour kiss, my cheek, I watched you leave\nYour smile, my ghost, I fell to my knees\nWhen you're young you just run\nBut you come back to what you need\nThis love is good, this love is bad\nThis love is alive back from the dead\nThese hands had to let it go free\nAnd this love came back to me\nThis love left a permanent mark\nThis love is glowing in the dark\nThese hands had to let it go free\nAnd this love came back to me\nThis love, this love, this love, this love...\n---\nYou stand with your hand on my waist line\nIt's a scene and we're out here in plain sight\nI can hear them whisper as we pass by\nIt's a bad sign, bad sign\nSomething happens when everybody finds out\nSee the vultures circling dark clouds\nLove's a fragile little flame, it could burn out\nIt could burn out \nCause they got the cages, they got the boxes\nAnd guns\nThey are the hunters, we are the foxes\nAnd we run\nBaby, I know places we won't be found \nAnd they'll be chasing their tails tryin' to track us down\nCause I, I know places we can hide\nI know places, I know places\nLights flash and we'll run for the fences\nLet them say what they want, we won't hear it\nLoose lips sink ships all the damn time\nNot this time \nJust grab my hand and don't ever drop it\nMy love\nThey are the hunters, we are the foxes\nAnd we run\nBaby, I know places we won't be found \nAnd they'll be chasing their tails tryin' to track us down\nCause I, I know places we can hide\nI know places \nThey are the hunters, we are the foxes\nAnd we run\nJust grab my hand and don't ever drop it\nMy love\nBaby, I know places we won't be found \nAnd they'll be chasing their tails tryin' to track us down\nCause I, I know places we can hide\nI know places\nThey take their shots, but we're bulletproof\nI know places\nAnd you know for me, it's always you\nI know places\nIn the dead of night, your eyes so green\nI know places\nAnd I know for you, it's always me\nI know places\n---\nThe drought was the very worst\nWhen the flowers that we'd grown together died of thirst\nIt was months, and months of back and forth\nYou're still all over me like a wine-stained dress I can't wear anymore\nHung my head as I lost the war, and the sky turned black like a perfect storm\nRain came pouring down when I was drowning\nThat's when I could finally breathe\nAnd by morning gone was any trace of you,\nI think I am finally clean\nThere was nothing left to do\nWhen the butterflies turned to dust that covered my whole room\nSo I punched a hole in the roof\nLet the flood carry away all my pictures of you\nThe water filled my lungs, I screamed so loud but no one heard a thing\nRain came pouring down when I was drowning\nThat's when I could finally breathe\nAnd by morning, gone was any trace of you,\nI think I am finally clean\nI think I am finally clean\nSaid I think I am finally clean\n10 months sober, I must admit\nJust because you're clean don't mean you don't miss it\n10 months older, I won't give in\nNow that I'm clean I'm never gonna risk it\nThe drought was the very worst\nWhen the flowers that we'd grown together died of thirst\nRain came pouring down when I was drowning\nThat's when I could finally breathe\nAnd by morning gone was any trace of you,\nI think I am finally clean\nRain came pouring down when I was drowning\nThat's when I could finally breathe\nAnd by morning gone was any trace of you\nI think I am finally clean\nFinally clean\nThink I'm finally clean\nThink I'm finally clean\n"
  const lyric_arr = lyrics.split("\n")
  var lyric_len = lyric_arr.length
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

  /**
   * Finish the lyric starts
   */
  on('click', '#clickGTL', function(e) {
      e.preventDefault()

      // set variables
      console.log("changing?")
      let bar = select("#GTLinner")
      let lyric = select("#theLyric");
      let answer = select("#gtl_answer")
      answer.innerHTML = ""

      // retieve lyrics
      var lyric1 = "---"
      var lyric2 = "---"
      var ans1 = "---"
      var ans2 = "---"
      while (lyric1 == "---"|| lyric2 == "---" || ans1 == "---" || ans2 == "---") {
        var pos = Math.floor(Math.random() * (lyric_len-4))
        console.log(pos)
        lyric1 = lyric_arr[pos]
        lyric2 = lyric_arr[pos + 1]
        ans1 = lyric_arr[pos + 2]
        ans2 = lyric_arr[pos + 3]
      }

      // reveal div
      bar.style.visibility = "visible"
      lyric.innerHTML = lyric1 + ";\n\n" + lyric2
      lyric.style.visibility = "visible"
      select("#clickGTLa").style.pointerEvents = 'none'

      // run the animation
      bar.classList.remove("in");
      void bar.offsetWidth;
      bar.classList.add("in")

      // reveal answer
      setTimeout(() => {  
          answer.innerHTML = ans1 + ";\n\n" + ans2
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
