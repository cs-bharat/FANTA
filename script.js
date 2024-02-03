
// let tl0 = gsap.timeline();
// tl0.from(
//     '#fanta',
//     {
//         x:'-200%',
//         duration:2,
// })
// .from(
//     '#fanta-1',
//     {
//         y:'-200%',
//         duration:2
//     });

let tl = gsap.timeline({
    scrollTrigger:{
        triger:'.two', // selector
        start:'10% 20%',  // scroll start level
        end:'60% 90%', // scroll start level
        scrub : true,
        markers: true 
    }
});

tl.to('#fanta',{
    top:'120%',
    left:'0%'
},'one')
.to('#leaf',{
    rotate:'120deg',
    top:'100%',
    left:'85%'
},'one')
.to('#leaf3',{
    rotate:'240deg',
    top:'110%',
    left:'46%'
},'one')
.to('#orange-cut',{
    scale:'1.5',
    top:'110%',
    left:'15%'
},'one')
.to('#orange',{
    top:'175%',
    left:'85%'
},'one')