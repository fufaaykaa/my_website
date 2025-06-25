document.addEventListener("DOMContentLoaded", function () {
  function setupSlideshow(slideshowId) {
      let slideIndex = 0;
      const slideshow = document.getElementById(slideshowId);
      if (!slideshow) return;

      const slides = slideshow.querySelectorAll(".slide");
      const prevButton = slideshow.querySelector(".prev");
      const nextButton = slideshow.querySelector(".next");

      function showSlide(index) {
          slides.forEach((slide, i) => {
              slide.classList.remove("active");
              if (i === index) {
                  slide.classList.add("active");
              }
          });
      }

      function changeSlide(direction) {
          slideIndex += direction;
          if (slideIndex >= slides.length) slideIndex = 0;
          if (slideIndex < 0) slideIndex = slides.length - 1;
          showSlide(slideIndex);
      }

      if (prevButton && nextButton) {
          prevButton.addEventListener("click", () => changeSlide(-1));
          nextButton.addEventListener("click", () => changeSlide(1));
      }

      setInterval(() => changeSlide(1), 3000);
      showSlide(slideIndex);
  }

  setupSlideshow("slideshow-left");
  setupSlideshow("slideshow-right");

  // Collapsible Sections
  document.querySelectorAll(".collapsible").forEach(button => {
      button.addEventListener("click", function () {
          this.classList.toggle("active");
          let content = this.nextElementSibling;
          content.style.display = content.style.display === "block" ? "none" : "block";
      });
  });


  // --- Collapsible Feature Details ---
  const featureCircles = document.querySelectorAll(".feature-circle2");
  featureCircles.forEach(circle => {
      circle.addEventListener("click", function () {
          let details = this.nextElementSibling;
          details.classList.toggle("hidden");
      });
  });

  // --- Starfield Animation ---
  const canvas = document.getElementById('starfield');
  if (canvas) {
      const ctx = canvas.getContext('2d');
      function resizeCanvas() {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
      }

      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();

      let stars = [];
      const STAR_COUNT = 150;

      function createStars() {
          stars = [];
          for (let i = 0; i < STAR_COUNT; i++) {
              const x = Math.random() * canvas.width;
              const y = Math.random() * canvas.height;
              const radius = Math.random() * 2;
              const alpha = Math.random() * 0.5 + 0.5;
              const flickerSpeed = Math.random() * 0.03 + 0.01;
              stars.push({ x, y, radius, alpha, flickerSpeed });
          }
      }

      createStars();

      function animate() {
          requestAnimationFrame(animate);
          ctx.fillStyle = 'black';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          stars.forEach(star => {
              star.alpha += star.flickerSpeed;
              if (star.alpha <= 0.3 || star.alpha >= 1) {
                  star.flickerSpeed = -star.flickerSpeed;
              }

              ctx.beginPath();
              ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
              ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
              ctx.fill();
          });
      }

      animate();
  }
});

// Add this to your script.js file
// Project data - you'll need to fill this with your actual project data
const projects = {
  project1: {
    banner: "images/inbetween/banner.png",
    color: "#455f47", 
    description: "InBetween is a multiplayer game where players are challenged to join forces and solve various puzzles! However, here comes a catch... they need to do it all together while sharing one controller. Set in a cozy and playful environment game provides an exciting challenge for both players! The game has been created in the 'University of Europe for Applied Sciences', as a part of the class 'Build a Toy First' (supervised by: Prof. Csongor Baranyai).",
    contributions: [
      {
        title: "🫶 3D Characters Design (including 3D animation)",
        details: [
          "3D models",
          "Textures",
          "6 animations for each character"
        ]
      },
      {
        title: "🏠 Main Menu (Attic) Design",
        details: [
          "Approximately 25-30 models",
          "Texture for each model",
          "Lighting & particle systems",
          "Animations"
        ]
      },
      {
          title: "🌀 Level Design",
          details: [
            "Designed layouts for levels 1, 2, and 5",
            "Designed the 'disappearing wall' mechanic"
          ]
      },
      {
          title: "🌸 Environment Design",
          details: [
            "3D models of level walls, floors, and shape holes (Shapes Game)",
            "Textures for all these models",
            "Design of the background for levels (Shapes Game)", 
            "Models and textures for game boxes' lids"
          ]
      }
    ],
    links: {
      itch: {
        url: "https://fufaaykaa.itch.io/inbetween",
        icon: "icons/play.png" 
      },
      documentation: {
        url: "documents/IB_doc.pdf",
        icon: "icons/documentation.png"
      },
      trailer: {
        url: "https://youtu.be/65OHOn39Dm4?si=2ZQRy6U2lZfLOSMj",
        icon: "icons/trailer.png"
      }
    },
    slides: [
      "images/inbetween/slide1.png",
      "images/inbetween/slide2.png",
      "images/inbetween/slide3.png",
      "images/inbetween/slide4.png",
      "images/inbetween/slide5.png",
      "images/inbetween/slide6.png",
      "images/inbetween/slide7.png",
      "images/inbetween/slide8.png"
    ]
  },
  project2: {
      title: "(Don't) Lie",
      banner: "images/dontlie/banner_dontlie.png",
      color: "#04234f", 
      description: "'(Don't) Lie' - story about crimes and lies, where the main character has to trick a lie detector to get away with a mmu This narrative-based game was created at the Game Design // UE at the 'University of Europe for Applied Sciences'. This project is a part of the class 'Game A Week' (supervised by: Viktor Pekar) – Theme: One Button. And as a part of the Berlin Mini Jam in April 2025 – Theme: Heartbeat",
      contributions: [
        {
          title: "💅🏻 3D Modeling and Animation",
          details: [
            "3D model of the hand",
            "3 animations of the hand model",
            "3D model of the camera",
            "3D model of the door",
            "Textures for all these models"
          ]
        },
        {
          title: "🔊 Sound Implementation",
          details: [
            "Implemented 2 background sounds",
            "Set up Audio Manager"
          ]
        },
        {
          title: "⚙️ Coding",
          details: [
            "Script-driven hand animations",
            "Audio Manager Script"
          ]
        },
      ],
      links: {
        itch: {
          url: "https://gurlcave.itch.io/dont-lie",
          icon: "icons/play.png" 
        },
        documentation: {
          url: "documents/DontLie_doc.pdf",
          icon: "icons/documentation.png"
        }
      },
      slides: [
        "images/dontlie/slide1.png",
        "images/dontlie/slide2.png",
        "images/dontlie/slide3.png"
      ]
    },
    project3: {
      title: "Medieval21",
      banner: "images/medieval/banner.png",
      color: "#5e2170", 
      description: "'Medieval 21' is a cozy, charming version of a classic 'Blackjack'. Set in medieval atmosphere, stunning pixel art, cards with a unique design, combined with smooth mechanics bring a fresh twist to a beloved classic, what can be better? Try it out yourself!",
      contributions: [
        {
          title: "🎴 Cards Design",
          details: [
            "Queen card character",
            "King card character",
            "Jack card character",
            "Joker card character"
          ]
        },
        {
          title: "🏰 Background Design",
          details: [
            "Castle asset",
            "Animated skeletons",
            "Animated fire",
            "Castle window animations",
            "Particle system for stars"
          ]
        },
        {
          title: "🎨 UI Design",
          details: [
            "Buttons & Score messages",
            "Life indicators (Hearts)",
            "Main Menu & Credits Design",
            "Card Pile Animation"
          ]
        },
        {
          title: "📜 Main Menu Design",
          details: [
            "Scene transition animations",
            "Characters animations on cards",
            "Showing credits animation"
          ]
        },
        {
          title: "🔊 Sound Implementation",
          details: [
            "AudioManager for background music",
            "Losing life sound",
            "Score message sounds"
          ]
        },
        {
          title: "💡 Lighting Setup",
          details: [
            "Used **Unity URP 2D Light Package**",
            "Set up lights for castle, fire, and main menu, etc."
          ]
        }
      ],
      links: {
        itch: {
          url: "https://fufaaykaa.itch.io/medieval-21",
          icon: "icons/play.png" 
        },
      },
      slides: [
        "images/medieval/slide1.png",
        "images/medieval/slide2.png",
        "images/medieval/slide3.png",
        "images/medieval/slide4.png"
      ]
    },
    project4: {
      title: "Devolution",
      banner: "images/devolution/dev_banner.png",
      color: "#bc581c", 
      description: "Devolution is a game design focused project exploring the creative process and challenges of game development, consisting of exhibitions, interviews, lectures, an archive and so on. Each Devolution event / exhibition focalises on the evolution of a game through the exhibition of prototypes and interim versions and an in-depth conversation with the developers. During the last years Devolution dismantled the games and worked with the developers of The Curious Expedition, Shift Happens and Thumper.",
      contributions: [
        {
          title: "🌞 Role: PR & Social Media Team Lead",
          details: [
          ]
        },
        {
          title: "📊 Social Media Strategy:",
          details: [
            "Developed the overall social media strategy for 3 social media accounts",
            "Adjust amd improve this strategy depending on the audience's reaction"
          ]
        },
        {
          title: "🗓 Task & Team Management:",
          details: [
            "Distribute tasks among team members based on their preferences and team's needs",
            "Created a structured timeline for all tasks, update this timeline twice a week",
            "Organize meetings for the team"
          ]
        },
        {
          title: "📲 Content Planning & Creation:",
          details: [
            "Designed timetable of the post, update this timetable frequently",
            "Gather materials for content (videos, images, interviews, etc.)",
            "Edit and cut videos"
          ]
        },
        {
          title: "🖼 Exhibition Planning & Visual Content:",
          details: [
            "Prepare a strategy for future 'Devolution' exhibitions",
            "Handle the process of creating a visual content to be showcased at exhibitions",
          ]
        },
        {
          title: "A big part of imformation is related to the future plans and releases of the 'Devolution' project, therefore the information is private and I can't talk about it in details",
          details: [
          ]
        },
      ],
      links: {
        instagram: {
          url: "https://www.instagram.com/devolutionbln",
          icon: "icons/insta.png" 
        },
        bluesky: {
          url: "https://bsky.app/profile/devolutionbln.bsky.social",
          icon: "icons/bluesky.png" 
        },
        mastodon: {
          url: "https://sunny.garden/@devolution",
          icon: "icons/mastodon.png"
        }
      },
      slides: [
        "images/devolution/post1.png",
        "images/devolution/post2.png",
        "images/devolution/post3.png",
        "images/devolution/post4.png",
      ]
    },
    project5: {
      title: "Smash!!!",
      banner: "images/smash/banner_smash.png",
      color: "#7a0053", 
      description: "Smash!!! is a unique twist on the classic ‘Rock, Paper, Scissors’ game, where making a poor character choice doesn’t necessarily mean you’ve lost your chance to win. This game was developed in the 'University of Europe for Applied Sciences', as the part of the class 'Game a Week' (supervised by: Viktor Pekar)",
      contributions: [
        {
          title: "🪨📃✂️ 2D Characters Design",
          details: [
            "Created 3 characters",
          ]
        },
        {
          title: "👀 2D Animation",
          details: [
            "2 idle animations for each character",
            "Set up script-driven animations in Unity"
          ]
        },
        {
          title: "⚙️ Coding",
          details: [
            "Selecting character mechanic",
            "Movement mechanic",
            "Lose/Win conditions",
            "Collision logic",
            "All buttons functionality"
          ]
        },
        {
          title: "🎨 UI Design",
          details: [
            "Main Menu design",
            "Tutorial scene design",
            "Controls tutorial design in Selection scene"
          ]
        },
        {
          title: "💡 Lightning Design using URP",
          details: [
            "Lightning in the level",
            "Lightning in Main Menu",
            "Lightning in all Lost/Won scenes"
          ]
        },
      ],
      links: {
        itch: {
          url: "https://fufaaykaa.itch.io/smash",
          icon: "icons/play.png" 
        },
        documentation: {
          url: "documents/Smash_doc.pdf",
          icon: "icons/documentation.png"
        }
      },
      slides: [
        "images/smash/slide1.png",
        "images/smash/slide2.png",
        "images/smash/slide3.png",
        "images/smash/slide4.png"
      ]
    },
    project6: {
      title: "Escaping Elephant",
      banner: "images/animation/elephant_cover.png",
      color: "#64090a", 
      description: "'Escaping Elephant' is an endless runner, where a little sad elephant is trying to escape from the circus. This game was created as a part of the 'Tools and Technologies' (supervised by: Florian Grolig) course in the 'University of Europe for Applied Sciences'. The main character's model (elephant), model of the collectibles, 3 types of obstacles, model of the circus, textures, all animations of the character & obstacles, and also sound effects were created by Taisia Malakhova (me). All other models, scripts and UIs were created by the other people.",
      contributions: [
        {
          title: "🫶 3D Modeling & Texturing",
          details: [
            "Created 3D model of the character",
            "Designed and applied texture for the character",
            "Modeled collectibles",
            "Created textures for collectibles and obstacles",
            "Modeled and textured the circus environment (scene surrounding)."
          ]
        },
        {
          title: "👀 7 Character's Animations",
          details: [
            "Idle",
            "Flying",
            "Jumping",
            "Sliding",
            "After hit",
            "Scared (before the run)",
            "Dead"
          ]
        },
        {
          title: "🚧 Obstacle Animations",
          details: [
            "Designed destruction animations for all obstacles."
          ]
        },
        {
          title: "🔊 Sound Implementation",
          details: [
            "Implemented elephant roar sound when hit.",
            "Integrated elephant scream sound effect when dead.",
            "Created destruction sound effects for obstacles.",
            "Added background music."
          ]
        },
      ],
      links: {
        itch: {
          url: "https://fufaaykaa.itch.io/escaping-elephant",
          icon: "icons/play.png" 
        },
      },
      slides: [
        "images/animation/elephant1.png",
        "images/animation/elephant2.png",
        "images/animation/elephant3.png",
        "images/animation/elephant4.png",
        "images/animation/elephant5.png",
      ]
    },
    project7: {
      title: "Dark Light",
      banner: "images/darklight/banner.jpg",
      color: "#00296A", 
      description: "What Dark Light hopes to be is a game where you solve puzzles to uncover the story of a post-apocalyptic world where the sun disappeared.",
      contributions: [
        {
          title: "🫶 3D Modeling",
          details: [
            "Farm Location: Barn, greenhouses, tractor, 3 gardens, 4 types of bushes, 3 types of trees, 3 types of fences, 2 types of boxes, street lights, gnome, ladder, and all other models in the 'Farm' location",
            "Magic Fountain Location: Designed the fountain, flowers, and trees with flowers",
            "Forest Location: Fishing rod, puzzle models for the cave, 2 types of fences, and reused some trees and bushes from the farm"
          ]
        },
        {
          title: "🖌 Texturing",
          details: [
            "Created textures and UV mapping for all 3D models",
            "Designed ground textures for different locations"
          ]
        },
        {
          title: "👀 Animation",
          details: [
            "Character waking up in the beginning",
            "Switcher turning and lighting switching on/off in the greenhouse",
            "Opening and closing of the electricity box",
            "Fence fixing in the garden",
            "Gnome's hat movement",
            "Barn doors opening",
            "Street lights and tractor lights switching on",
            "Water movement in the fountain",
            "Sun rising back into the sky",
            "Particle systems",
            "Additional animations throughout the game"
          ]
        },
        {
          title: "⚙️ Coding",
          details: [
            "Implemented the dialogue system.",
            "Programmed triggers for animations.",
            "Developed doors opening and closing mechanics.",
            "Created text prompts for controls that appear and disappear."
          ]
        },
        {
          title: "🎨 UI Design",
          details: [
            "Designed the interactive panel with a code entry system",
            "Designed dialogues UI",
            "Created and managed the final cutscene"
          ]
        },
        {
          title: "🔊 Sound Implementation",
          details: [
            "Added sounds for the animations",
            "Set up audio manager",
            "3D audio",
          ]
        },
        {
          title: "🎥 Trailer",
          details: [
            "Directed, edited, and produced the official game trailer",
          ]
        }
      ],
      links: {
        itch: {
          url: "https://miketakashi.itch.io/dark-light",
          icon: "icons/play.png" 
        },
        documentation: {
          url: "documents/darklight_doc.pdf",
          icon: "icons/documentation.png"
        },
        trailer: {
          url: "https://youtu.be/7ABVSjjRa0k?si=1igYsNm_51jWFeu2",
          icon: "icons/trailer.png"
        },
      },
      slides: [
        "images/darklight/slide1.png",
        "images/darklight/slide2.png",
        "images/darklight/slide3.png",
        "images/darklight/slide4.png",
        "images/darklight/slide5.png",
        "images/darklight/slide6.png",
        "images/darklight/slide7.png"
      ]
    },
    project8: {
      title: "Zombification",
      banner: "images/zombification/banner.png",
      color: "#631f1f", 
      description: "Zombification is a 2D puzzle game that involves solving maze-like levels. The player is a zombie virus that infects a healthy human's body by leaving a green trail behind it. There are 9 levels in total, each being a different body part. Can you solve all of them? Let's find out! This game was created in PuzzleScript, as a part of the University course 'Game and Play' (supervised by: Csongor Baranyai)",
      contributions: [
        {
          title: "🌀 Level Design",
          details: [
            "Older Version: Designed levels 1, 3, 5, 6",
            "Newer Version: Designed levels 1, 2, 5"
          ]
        },
        {
          title: "⚙️ Coding",
          details: [
            "Implemented character movement",
            "Developed virus character interactions with all objects",
            "Created the leaving-a-trail mechanic",
            "Programmed winning conditions",
            "Designed and structured levels"
          ]
        },
        {
          title: "🧟‍♀️ Communication Design",
          details: [
            "Character waking up in the beginning",
            "Switcher turning and lighting switching on/off in the greenhouse",
            "Opening and closing of the electricity box",
            "Fence fixing in the garden",
            "Gnome's hat movement",
            "Barn doors opening",
            "Street lights and tractor lights switching on",
            "Water movement in the fountain",
            "Sun rising back into the sky",
            "Particle systems",
            "Additional animations throughout the game"
          ]
        },
        {
          title: "🎥 Trailer",
          details: [
            "Directed, edited, and produced the official game trailer",
            "Created 2D animations of the main character and used them in the trailer"
          ]
        },
      ],
      links: {
        itch: {
          url: "https://taya-marta-marianna.itch.io/zombification",
          icon: "icons/play.png" 
        },
        documentation: {
          url: "documents/Zombification_doc.pdf",
          icon: "icons/documentation.png"
        },
        trailer: {
          url: "https://youtu.be/zY6ZEsSIT_8?si=-2m6gnnwStFSwRlN",
          icon: "icons/trailer.png"
        }
      },
      slides: [
        "images/zombification/slide2.png",
        "images/zombification/slide3.png",
        "images/zombification/slide4.png",
        "images/zombification/slide5.png",
        "images/zombification/slide6.png",
        "images/zombification/slide7.png"
      ]
    },
    project9: {
      title: "Piggy Pixie",
      banner: "images/animation/pixie_cover.png",
      color: "#834151", 
      description: "'Piggy Pixie' is a 3D Modeling and Animation project, which was created as a part of the 'Animation for Games' course (supervised by: Florian Grolig) in the 'University of Europe for Applied Sciences'. The main character's model, texture, all animations and additional effects, such as particle systems, were created by me (Taisia Malakhova). The character is able to walk, run, jump. As the additional animations: the character has an idle animation, she reacts to the rain and the bus stop, which can be seen on the map. All the models besides Pixie, the scripts for the character control, rain and bus stop were created by the professors of UE.",
      contributions: [
        {
          title: "🫶 3D Modeling & Texturing",
          details: [
            "Created the 3D model of the character",
            "Designed and applied character's texture"
          ]
        },
        {
          title: "👀 10 Character's Animations",
          details: [
            "Walking",
            "Idle (dancing)",
            "Idle (standing)",
            "Idle (head turning)",
            "Jumping",
            "Running",
            "Watching the rain",
            "Waiting for the bus 1",
            "Waiting for the bus 2",
            "Walking with jump"
          ]
        },
        {
          title: "🫧 Animator set up in Unity",
          details: [
            "Set up randomization of the idle animations",
            "Created 5 layers of animation",
            "Implemented avatar mask for animation customization"
          ]
        },
        {
          title: "🎧 Headphones System",
          details: [
            "Designed headphones model",
            "Implemented activation/deactivation logic:",
            "1. Headphones appear during the Dancing Idle Animation",
            "2. Headphones disappear when any other animation starts"
          ]
        },
        {
          title: "✨ FX & Script-Driven Animations",
          details: [
            "Implemented 2 particle systems for additional effects",
            "Designed BlendTree for smooth transitions between walking and running animations",
            "Added 2 script-driven animations for rain and bus stop triggers"
          ]
        }
      ],
      links: {
        itch: {
          url: "https://fufaaykaa.itch.io/piggy-pixie",
          icon: "icons/play.png" 
        },
        documentation: {
          url: "documents/pixie_doc.pdf",
          icon: "icons/documentation.png"
        },
        trailer: {
          url: "https://youtu.be/3CVWAksWvOU?si=CSrl4aCAiFWsjEGm",
          icon: "icons/trailer.png"
        }
      },
      slides: [
        "images/animation/pixie1.png",
        "images/animation/pixie2.png",
        "images/animation/pixie3.png",
        "images/animation/pixie4.png",
        "images/animation/pixie5.png",
      ]
    },
    project10: {
      title: "Drunk Döner RPG (DDR)",
      banner: "images/ddr/banner.png",
      color: "#6d292e", 
      description: "'Drunk Döner Kebab (DDR)' is a game about the protagonist who got too drunk and ended up in debt in a kebab shop somewhere in Berlin. The goal is to earn enough money during the night to be released. This game was developed in the 'University of Europe for Applied Sciences', as the part of the class 'Game a Week' (supervised by: Viktor Pekar).",
      contributions: [
        {
          title: "🫶 3D Character Design",
          details: [
            "Created the 3D model of 10 NPCs",
            "Designed and applied character's texture"
          ]
        },
        {
          title: "👀 3D Characters' Animations",
          details: [
            "Idle",
            "Walking",
            "Arguing (only for the Döner Shop Owner Character)",
          ]
        },
        {
          title: "🌼 3D Environment Design",
          details: [
            "Designed the layout of the models",
            "Created 1 additional Character Model",
          ]
        },
        {
          title: "🎨 UI Design",
          details: [
            "Main Menu Design",
            "Credits Design",
            "Tutorials Design",
            "Pause Menu Design"
          ]
        },
        {
          title: "Cutscene Design",
          details: [
            "Dialogue System Set Up",
            "DIalogues Text for 2 Characters",
            "Scene Layout"
          ]
        },
        {
          title: "🔊 Sound Design",
          details: [
            "Audio Manager Script",
            "Background Music Selection and Implementation",
          ]
        }
      ],
      links: {
        itch: {
          url: "https://rast0k.itch.io/ddr-kebab",
          icon: "icons/play.png" 
        },
        documentation: {
          url: "documents/DDR_Documentation",
          icon: "icons/documentation.png"
        },
      },
      slides: [
        "images/ddr/slide1.png",
        "images/ddr/slide2.png",
        "images/ddr/slide3.png",
        "images/ddr/slide4.png",
      ]
    },
};


// Modal functionality
const modal = document.getElementById("project-modal");
const closeBtn = document.querySelector(".close-btn");
const modalLeftBg = document.getElementById("modal-left-bg");
let modalSlideInterval; // Variable to hold the interval

// Open modal when "More Info" is clicked
document.querySelectorAll(".more-info-btn").forEach(btn => {
  btn.addEventListener("click", function(e) {
      e.preventDefault();
      const projectId = this.getAttribute("data-project");
      if (projectId) openProjectModal(projectId);
  });
});

// Close modal
closeBtn.addEventListener("click", closeProjectModal);

// Close when clicking outside content
window.addEventListener("click", function(e) {
  if (e.target === modal) {
      closeProjectModal();
  }
});

function openProjectModal(projectId) {
  const project = projects[projectId];
  if (!project) return;
  
  // Set project data
  document.getElementById("modal-description").textContent = project.description;
  document.getElementById("modal-banner").src = project.banner;
  modalLeftBg.style.backgroundColor = project.color;
  
  // Set links
  const linksContainer = document.querySelector('.project-links');
  linksContainer.innerHTML = '';
  
  Object.entries(project.links).forEach(([key, linkData]) => {
      const link = document.createElement('a');
      link.href = linkData.url;
      link.target = "_blank";
      link.className = "project-link";
      link.innerHTML = `<img src="${linkData.icon}" alt="${key}">`;
      
      if (linkData.url.endsWith('.pdf')) {
          link.download = '';
      }
      
      linksContainer.appendChild(link);
  });
  
  // Set contributions
  const contributionsContainer = document.getElementById("modal-contributions");
  contributionsContainer.innerHTML = "";
  
  project.contributions.forEach(contribution => {
      const item = document.createElement("div");
      item.className = "contribution-item";
      
      const title = document.createElement("div");
      title.className = "contribution-title";
      title.textContent = contribution.title;
      
      const details = document.createElement("ul");
      details.className = "contribution-details";
      
      contribution.details.forEach(detail => {
          const li = document.createElement("li");
          li.textContent = detail;
          details.appendChild(li);
      });
      
      item.appendChild(title);
      item.appendChild(details);
      contributionsContainer.appendChild(item);
  });
  
  // Set slideshow
  const slideshow = document.getElementById("modal-slideshow");
  slideshow.innerHTML = ""; // Clear previous slides and buttons
  
  project.slides.forEach((slide, index) => {
      const img = document.createElement("img");
      img.src = slide;
      img.alt = `${project.title} screenshot ${index + 1}`;
      img.className = index === 0 ? "slide active" : "slide";
      slideshow.appendChild(img);
  });
  
  // Add prev/next buttons directly inside the slideshow container
  const prevBtn = document.createElement("button");
  prevBtn.className = "prev";
  prevBtn.innerHTML = "❮";
  prevBtn.onclick = () => changeModalSlide(-1);
  
  const nextBtn = document.createElement("button");
  nextBtn.className = "next";
  nextBtn.innerHTML = "❯";
  nextBtn.onclick = () => changeModalSlide(1);
  
  slideshow.appendChild(prevBtn);
  slideshow.appendChild(nextBtn);
  
  
  // Start automatic slideshow
  modalSlideIndex = 0;
  startModalSlideshow();
  
  // Show modal
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  // Clear the slideshow interval when closing
  clearInterval(modalSlideInterval);
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

function startModalSlideshow() {
  // Clear any existing interval
  clearInterval(modalSlideInterval);
  
  // Start new interval (changes slide every 3 seconds)
  modalSlideInterval = setInterval(() => {
      changeModalSlide(1);
  }, 3000);
}

// Slideshow functionality for modal
let modalSlideIndex = 0;

function changeModalSlide(n) {
  const slides = document.querySelectorAll("#modal-slideshow .slide");
  if (slides.length === 0) return;
  
  modalSlideIndex += n;
  if (modalSlideIndex >= slides.length) modalSlideIndex = 0;
  if (modalSlideIndex < 0) modalSlideIndex = slides.length - 1;
  
  slides.forEach(slide => slide.classList.remove("active"));
  slides[modalSlideIndex].classList.add("active");
  
  // Reset the interval timer whenever manually changing slides
  startModalSlideshow();
}

document.querySelector('video').playbackRate = 1; // 1.5x speed

document.addEventListener('click', function() {
  const video = document.querySelector('video');
  video.play().catch(e => console.log(e));
}, { once: true }); // Runs only once
