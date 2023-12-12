document.addEventListener('DOMContentLoaded', () => {
    function changeWidth() {
      var scroll = (window.pageYOffset /8);
      var width = scroll;
       //var width = Math.min(100 - scroll);
    
      document.getElementById('bgimg').style.width = width + '%';
    }
    
    window.addEventListener('scroll', function(){
      requestAnimationFrame(changeWidth);
    })
})
    
    /*var paths = document.querySelectorAll('.line');
        paths.forEach(function (path) {
            var pathLength = path.getTotalLength();
            path.style.strokeDasharray = pathLength + ' ' + pathLength;
            path.style.strokeDashoffset = pathLength;
            path.getBoundingClientRect();
            window.addEventListener('scroll', function (e) {
                var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) /
                    (document.documentElement.scrollHeight - document.documentElement.clientHeight);
                var drawLength = pathLength * (1 - scrollPercentage);
                path.style.strokeDashoffset = drawLength;
                if (scrollPercentage >= 0.99) {
                    path.style.strokeDasharray = 'none';
                } else {
                    path.style.strokeDasharray = pathLength + ' ' + pathLength;
                }
            });
        });*/
    
    
    /*
        let paths = document.querySelectorAll('path');
    
        fillSvgPaths()
    
        document.addEventListener('scroll', fillSvgPaths)
    
        function fillSvgPaths() {
    
            let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / 
            (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    
            for (var i = 0; i < paths.length; i++) {
                let path = paths[i];
    
                let pathLength = path.getTotalLength();
    
                path.style.strokeDasharray = pathLength;
                path.style.strokeDashoffset = pathLength;
    
                let drawLength = pathLength * scrollPercentage;
    
                path.style.strokeDashoffset = pathLength - drawLength;
            }
        }    
    */
        
       /* gsap.registerPlugin(ScrollTrigger) 
    
        gsap.to(".svgline",{
            ScrollTrigger: {
                trigger: ".svgline",
                start: "top 50px",
                endtrigger: ".svgline",
                end: "bottom 80%",
                //toggleactions: "restart pause resume pause"
                scrub: true,
            },
            
            rotation: 360,
            duration: 5
        
        });*/
    
      /* let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.svg',
                start: 'top top',
                end: '+=' + window.innerHeight * 2,
                scrub: 0.3,
            }
        })*/

/*
const { innerHeight } = window;
// zoom-in
gsap.to(".bgimg", {
    scale: 2, stagger: 0.25,
    scrollTrigger: {
        trigger: ".bgimg",
        pin: true,
        start: 'top top',
        end: "bottom 90%",
        scrub: 0.3,
    }
});*/



        let TweenLite = gsap.timeline({
            scrollTrigger: {
                trigger: '.animation',
                pin: true,
                start: 'top top',
                end: '+=' + window.innerHeight *2,
                //end: "bottom 90%",
                scrub: 0.3,
                
            }
        })
            
        
            TweenLite.to(".path", 1, {drawSVG:"290 1020"});
            TweenLite.to(".path", 2, {drawSVG:"2040 1020"});
            TweenLite.to(".path", 3, {opacity:"0"});
            TweenLite.to(".mobile", 4, {opacity:"1"});
            TweenLite.to("#bgimg", 4, {opacity:"0"});
            TweenLite.to("#bg1", 5, {opacity:"1"});
            TweenLite.to("#bg2", 6, {opacity:"1"});
            TweenLite.to("#ksp-line", 7, {opacity:"1"});
            TweenLite.to(".pathline", 8, {drawSVG:"2240px 70px"});
        
        
   
    
    
    
    
