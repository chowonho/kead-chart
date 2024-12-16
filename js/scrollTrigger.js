gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.intro-text-group').forEach((section, index) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 100%',
            end: 'bottom 60%',
            toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        delay: index * 0.2,
    });
});

gsap.utils.toArray('.features-item').forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 70%',
            end: 'bottom 60%',
            toggleActions: 'play none none none',
        },
        opacity: 0,
        x: 50,
        duration: 0.7,
        ease: 'elastic.out(1,0.5)',
        delay: index * 0.3,
        onComplete: () => {
            item.style.transform = 'revert-layer';
        },
    });
});

gsap.utils.toArray('.ani-up').forEach((a, index) => {
    gsap.from(a, {
        scrollTrigger: {
            trigger: a,
            start: 'top 100%',
            end: 'bottom 60%',
            toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        delay: index * 0.2,
    });
});
