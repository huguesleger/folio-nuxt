import { gsap } from "gsap";


export const loader = function() {
    const loader = document.querySelector('.loader');
    const charsName = document.querySelectorAll('.loader-wrapper.wrapper-name .word > .char, .loader-wrapper.wrapper-name .whitespace');
    const charsJob = document.querySelectorAll('.loader-wrapper.wrapper-job .word > .char, .loader-wrapper.wrapper-job .whitespace');
    const loaderWrapper = document.querySelectorAll('.loader-wrapper');

    const tlSettings = {
        staggerVal: 0.015,
        charsDuration: 0.7
    }

    const tl = gsap.timeline();

    tl.set(charsName, {
        yPercent: 100,
        opacity: 0,
    })
    .set(charsJob, {
        yPercent: 100,
        opacity: 0,
    })
    .to(loaderWrapper, {
        opacity: 1
    })
    .to(charsName, {
        yPercent: 0,
        opacity: 1,
        ease: "Power2.easeInOut",
        duration: tlSettings.charsDuration,
        stagger: tlSettings.staggerVal
    })
    .to(charsName, {
        yPercent: -100,
        opacity: 0,
        delay: 1.2,
        ease: "Power2.easeInOut",
        duration: tlSettings.charsDuration,
        stagger: tlSettings.staggerVal,
    })


    tl.to(charsJob, {
        yPercent: 0,
        opacity: 1,
        ease: "Power2.easeInOut",
        duration: tlSettings.charsDuration,
        stagger: tlSettings.staggerVal,
        onComplete: function(){
            gsap.to(charsJob, {
                yPercent: -100,
                opacity: 0,
                delay: 1.2,
                ease: "Power2.easeInOut",
                duration: tlSettings.charsDuration,
                stagger: tlSettings.staggerVal,
            })
            gsap.to(loader, {
                yPercent: -100,
                delay: 2.2,
                ease: "Expo.easeInOut",
                duration: 1,
            })   
        }
    })
}