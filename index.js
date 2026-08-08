const planets = {
    moon: {
        name: "Moon",
        image: "destination/image-moon.png",
        info: "The Moon is the earths only sattellite",
        distance: "384 TH. KM",
        time: "3 DAYS"
    },

    mars: {
        name: "Mars",
        image: "destination/image-mars.png",
        info: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
         distance: "225 MIL. KM",
        time: "9 MONTHS"
    },
    
    europa: {
        name: "Europa",
        image: "destination/image-europa.png",
        info: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin",
        distance: "628 MIL. KM",
        time: "3 YEARS"

    },

    titan: {
        name: "Titan",
        image: "destination/image-titan.png",
        info: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 BIL. KM",
        time: "7 YEARS"
    }
}

function showPlanet(planet) {
    document.getElementById("planet-img").src = planets[planet].image;
    document.getElementById("planet-name").textContent = planets[planet].name;
    document.getElementById("planet-info").textContent = planets[planet].info;
    document.getElementById("planet-distance").textContent = planets[planet].distance;
    document.getElementById("planet-time").textContent = planets[planet].time;

    document.querySelectorAll(".planet-buttons button").forEach(btn => {
        btn.classList.remove("active");
    });
    document.querySelector(`.planet-buttons button[onclick="showPlanet('${planet}')"]`).classList.add("active");
}

if (document.getElementById("planet-img")) {
    showPlanet('moon');
}

const crew = [
    {
        image: "crew/image-anousheh-ansari.png",
        role: "FLIGHT ENGINEER",
        name: "Anousheh Ansari",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    },
    {
        image: "crew/image-douglas-hurley.png",
        role: "Commander",
        name: "Douglas Hurley",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
        image: "crew/image-mark-shuttleworth.png",
        role: "Mission Specialist",
        name: "Mark Shuttleworth",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
        image: "crew/image-victor-glover.png",
        role: "Pilot",
        name: "Victor Glover",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer."
    }
];

function showCrew(index) {
    document.getElementById("crew-img").src = crew[index].image;
    document.getElementById("role").textContent = crew[index].role;
    document.getElementById("name").textContent = crew[index].name;
    document.getElementById("bio").textContent = crew[index].bio;

    document.querySelectorAll(".dot").forEach(dot => {
        dot.classList.remove("active");
    });
    document.querySelector(`.dot[data-index="${index}"]`).classList.add("active");
}

document.querySelectorAll(".dot").forEach(dot => {
    dot.addEventListener("click", () => {
        showCrew(Number(dot.dataset.index));
    });

    showCrew(0);
});


const tech = [
    {   
        p: "The terminology",
        terminology: "Spaceport",
        pp: " A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        image: "technology/image-spaceport-portrait.jpg"
    },

    {
        p: "The terminology",
        terminology: "Space capsule",
        pp: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        image: "technology/image-space-capsule-portrait.jpg"
    },

    {
        p: "The terminology",
        terminology: "Launch vehicle",
        pp: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        image: "technology/image-launch-vehicle-portrait.jpg"
    }
]

const buttons = document.querySelectorAll(".number");

const pTech = document.getElementById("p-tech");
const hTech = document.getElementById("h-tech");
const ppTech = document.getElementById("pp-tech");
const techImg = document.getElementById("tech-img");


function showTech(index) {
pTech.textContent = tech[index].p;
hTech.textContent = tech[index].terminology;
ppTech.textContent = tech[index].pp;
techImg.src = tech[index].image;
}

buttons.forEach((button, index) => {
button.addEventListener("click", () => {
    showTech(index);

    buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");
})
showTech(0);
})