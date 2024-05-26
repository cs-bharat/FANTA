
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
        scrub : true, // reverse animation deta hellk
        markers: false
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
    top:'170%',
    left:'25%'
},'one')
.to('#orange',{
    top:'175%',
    left:'85%'
},'one')

// ---three---//
let tl2 = gsap.timeline({
    scrollTrigger:{
        triger:'.three', // selector
        start:'0% 40%',  // scroll start level
        end:'90% 70%', // scroll start level
        scrub : true, // reverse animation deta hellk
        markers: false
    }
});

tl2.from('#cocacola',{
    rotate: "-180deg",
    top:"190%",
  
},'two')
tl2.from('#pepsi',{
    rotate: "60deg",
    top:"200%",
},'two')

tl2.to('#fanta',{
    top:'200%',
    left:'30%'
},'one')

tl2.to('#orange-cut',{
    top:'180%',
    left:'45%'
},'one')