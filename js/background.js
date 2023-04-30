const images=["0.jpg","1.jpg","2.jpg"]

const randomImage=images[Math.floor(Math.random()*images.length)]
document.body.style.backgroundImage=`url('img/${randomImage}')`