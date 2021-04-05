// TweenMax.to('.circle', 2, {x: 150, y: 150, borderRadius: '40%' });

// TweenMax.to('.square', 2, {x: -150, y: -150, scale: 2, delay: 1, ease: Back.easeOut });

// TweenMax.from('#rectangle', 2, {y:200, rotation: 180, scale: 1.5 });

// * * * * ADDED JQUERY

TweenMax.to($('.circle'), 2, {x: 150, y: 150, borderRadius: '40%' });

TweenMax.to($('.square'), 2, {x: -150, y: -150, scale: 2, delay: 1, ease: Back.easeOut });

TweenMax.from($('#rectangle'), 2, {y:200, rotation: 180, scale: 1.5 });

TweenMax.to($('li:first-child'), 3, {x: 130});
TweenMax.to($('li:nth-child(3)'), 3, {x: 80});
TweenMax.from($('li:nth-child(odd)'), 3, {scale: 1.5});