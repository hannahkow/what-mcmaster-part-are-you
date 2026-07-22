const QUIZ_DATA = {
  "PARTS": {
    "hexbolt": {
      "name": "Grade 8 Hex Bolt",
      "tagline": "The Rock",
      "part_number": "94239A100",
      "description": "Strong, dependable, and built for pressure. When something absolutely has to hold, people call you.",
      "quotes": [
        "“If it's worth doing, it's worth doing right the first time.”",
        "“I like knowing exactly what I'm dealing with. That's not overkill, that's preparation.”",
        "“Give me the spec and I'll give you something that lasts.”"
      ],
      "compatible": [
        "gear",
        "shim"
      ],
      "nemesis": "ducttape",
      "nemesis_reason": "You bring the structure, they bring the speed — together you get things both fixed fast and built to last."
    },
    "ducttape": {
      "name": "Duct Tape",
      "tagline": "The Resourceful One",
      "part_number": "1800N201",
      "description": "Resourceful, adaptable, and always able to make something work, no matter what gets thrown at you.",
      "quotes": [
        "“There's always a way. I just have to find it.”",
        "“Give me ten minutes and a little trust — I'll figure it out.”",
        "“I love a challenge nobody's solved yet.”"
      ],
      "compatible": [
        "cabletie",
        "caster"
      ],
      "nemesis": "hexbolt",
      "nemesis_reason": "They bring the structure, you bring the speed — together you get things both fixed fast and built to last."
    },
    "cabletie": {
      "name": "Cable Tie",
      "tagline": "The Organizer",
      "part_number": "70215K471",
      "description": "Efficient, practical, and naturally good at keeping people, projects, and plans together.",
      "quotes": [
        "“A place for everything makes everyone's day easier.”",
        "“I love a clean system. It's how good work happens on time.”",
        "“If it's organized, it's one less thing anyone has to worry about.”"
      ],
      "compatible": [
        "ducttape",
        "safetyglasses"
      ],
      "nemesis": "caster",
      "nemesis_reason": "You keep things steady, they keep things moving — between you, nothing stays stuck and nothing falls apart."
    },
    "bubblewrap": {
      "name": "Bubble Wrap",
      "tagline": "The Protector",
      "part_number": "2051T63",
      "description": "Caring, thoughtful, and supportive. You make the people around you feel safe, heard, and set up to succeed.",
      "quotes": [
        "“I just want everyone to make it through the day feeling good about it.”",
        "“Check-ins aren't extra work — they're the work that makes everything else work.”",
        "“I remember the small stuff because it's never actually small to the person going through it.”"
      ],
      "compatible": [
        "wd40",
        "oring"
      ],
      "nemesis": "hexbolt",
      "nemesis_reason": "Their directness and your warmth make a great pair — hard truths land a lot easier with a little care around them."
    },
    "wd40": {
      "name": "Oil-Embedded Sleeve Bearing",
      "tagline": "The Smooth Operator",
      "part_number": "2868T31",
      "description": "Charismatic, easygoing, and great at reducing friction. You keep things running smoothly for everyone around you.",
      "quotes": [
        "“I'd rather smooth things over than let them grind.”",
        "“Low drama, high output — that's the goal.”",
        "“A calm room gets more done than a loud one.”"
      ],
      "compatible": [
        "ducttape",
        "bubblewrap"
      ],
      "nemesis": "cabletie",
      "nemesis_reason": "You keep things loose and easy, they keep things structured — together you get flexibility that still holds up."
    },
    "safetyglasses": {
      "name": "Safety Glasses",
      "tagline": "The Voice of Reason",
      "part_number": "62065T32",
      "description": "Responsible, observant, and always thinking one step ahead. You catch the details that keep everyone else out of trouble.",
      "quotes": [
        "“Somebody's got to think two steps ahead — happy to be that somebody.”",
        "“Doing it safely and doing it well go together, every time.”",
        "“I read the whole manual because I actually want to get it right.”"
      ],
      "compatible": [
        "hexbolt",
        "shim"
      ],
      "nemesis": "ducttape",
      "nemesis_reason": "You slow down to check the details, they speed up to get it done — between you, things get done right and on time."
    },
    "ballbearing": {
      "name": "Ball Bearing",
      "tagline": "The Connector",
      "part_number": "60355K124",
      "description": "Smooth, energetic, and effortlessly social. You keep conversations and teams moving in a good direction.",
      "quotes": [
        "“I love getting people talking to each other instead of past each other.”",
        "“A good vibe in the room makes everything else easier.”",
        "“I remember what people care about. That's just paying attention.”"
      ],
      "compatible": [
        "caster",
        "wd40"
      ],
      "nemesis": "shim",
      "nemesis_reason": "You keep the energy up, they keep the details tight — together nothing gets missed and nobody has a bad day doing it."
    },
    "spring": {
      "name": "Compression Spring",
      "tagline": "The Resilient One",
      "part_number": "9622K51",
      "description": "You handle pressure, bounce back quickly, and always seem to have energy left for the next challenge.",
      "quotes": [
        "“A tough day is just a warm-up for a better one.”",
        "“I don't stay down long. There's too much good stuff ahead.”",
        "“Pressure just tells me where I'm needed most.”"
      ],
      "compatible": [
        "oring",
        "ballbearing"
      ],
      "nemesis": "shim",
      "nemesis_reason": "You bring the energy back fast, they bring the precision — together you recover quickly without cutting corners."
    },
    "oring": {
      "name": "O-Ring",
      "tagline": "The Quiet MVP",
      "part_number": "9452K111",
      "description": "Low-key but essential. You don't need the spotlight — you just make sure things hold together, quietly and consistently.",
      "quotes": [
        "“I don't need the credit. I just want things to work.”",
        "“Steady and reliable beats flashy, every time.”",
        "“The best compliment is when nobody even notices there was a problem.”"
      ],
      "compatible": [
        "gear",
        "spring"
      ],
      "nemesis": "ducttape",
      "nemesis_reason": "They handle the big visible fixes, you handle the quiet ongoing ones — between you, nothing slips through the cracks."
    },
    "caster": {
      "name": "Caster Wheel",
      "tagline": "The Go-Getter",
      "part_number": "2498T64",
      "description": "Flexible, energetic, and always ready for what's next. You bring momentum wherever you go.",
      "quotes": [
        "“New challenge, new energy — let's go.”",
        "“I like keeping things moving forward.”",
        "“Give me a direction and I'm already halfway there.”"
      ],
      "compatible": [
        "ballbearing",
        "ducttape"
      ],
      "nemesis": "cabletie",
      "nemesis_reason": "They keep things steady, you keep things moving — between you, nothing stays stuck and nothing falls apart."
    },
    "gear": {
      "name": "Gear",
      "tagline": "The Strategist",
      "part_number": "6448K11",
      "description": "Analytical, strategic, and obsessed with how everything fits together. You always have a plan, and a backup plan.",
      "quotes": [
        "“I like knowing how all the pieces connect before I move.”",
        "“A good plan saves everyone time later.”",
        "“I'm happiest when I can see the whole system working together.”"
      ],
      "compatible": [
        "hexbolt",
        "shim"
      ],
      "nemesis": "ducttape",
      "nemesis_reason": "You build the system, they keep it moving even when things change fast — together you're ready for anything."
    },
    "shim": {
      "name": "Shim",
      "tagline": "The Detail Master",
      "part_number": "98090A130",
      "description": "Detail-oriented and precise. You notice the small things everyone else overlooks and make sure everything lines up just right.",
      "quotes": [
        "“The details are where the quality actually lives.”",
        "“I noticed. I always notice. That's kind of the job.”",
        "“Getting it exactly right the first time saves everyone a headache later.”"
      ],
      "compatible": [
        "gear",
        "safetyglasses"
      ],
      "nemesis": "spring",
      "nemesis_reason": "They bring the quick recovery, you bring the precision — together you bounce back without cutting corners."
    }
  },
  "QUESTIONS": [
    {
      "time": "8:02 AM",
      "scene": [
        "You sit down, open your laptop, and find out today's priorities have shifted — a big order needs extra attention."
      ],
      "prompt": "You:",
      "options": [
        {
          "text": "Ask what needs to get done and get started right away.",
          "weights": { "hexbolt": 3, "gear": 1 }
        },
        {
          "text": "Dive in and figure out the details as you go.",
          "weights": { "ducttape": 3, "caster": 1 }
        },
        {
          "text": "Spend five minutes organizing the plan so the team can move efficiently.",
          "weights": { "cabletie": 3, "shim": 1 }
        },
        {
          "text": "Check in with the team to make sure everyone's on the same page.",
          "weights": { "bubblewrap": 3, "oring": 1 }
        }
      ]
    },
    {
      "time": "9:17 AM",
      "scene": [
        "You're in the flow when a coworker stops by your desk and says, “Can I run an idea by you?”"
      ],
      "prompt": "You:",
      "options": [
        {
          "text": "Talk it through with them until they land on a great answer themselves.",
          "weights": { "wd40": 3, "ballbearing": 1 }
        },
        {
          "text": "Ask a few good questions to help pressure-test the idea.",
          "weights": { "safetyglasses": 3, "gear": 1 }
        },
        {
          "text": "Say, “Let's get a few other people's take on this too — more perspectives, better outcome.”",
          "weights": { "ballbearing": 3, "wd40": 1 }
        },
        {
          "text": "Tell them to try it. If it needs adjusting, you'll adjust it together.",
          "weights": { "spring": 3, "oring": 1 }
        }
      ]
    },
    {
      "time": "10:46 AM",
      "scene": [
        "The conversation runs long and turns out to be really productive. You realize you haven't eaten yet."
      ],
      "prompt": "You grab:",
      "options": [
        {
          "text": "The same reliable snack you always get.",
          "weights": { "oring": 3, "spring": 1 }
        },
        {
          "text": "Whatever everyone else is grabbing — you're happy to go with the flow.",
          "weights": { "caster": 3, "ballbearing": 1 }
        },
        {
          "text": "Something you can eat with one hand so you can keep the momentum going.",
          "weights": { "gear": 3, "hexbolt": 1 }
        },
        {
          "text": "Something neat and portioned, because a tidy desk keeps your head clear.",
          "weights": { "shim": 3, "safetyglasses": 1 }
        }
      ]
    },
    {
      "time": "11:32 AM",
      "scene": [
        "On your way back, you notice a process that could clearly be running a little smoother."
      ],
      "prompt": "What do you focus on?",
      "options": [
        {
          "text": "Getting the group to just make a call and move forward.",
          "weights": { "hexbolt": 3, "spring": 1 }
        },
        {
          "text": "Jumping in to try something and see if it works.",
          "weights": { "ducttape": 3, "caster": 1 }
        },
        {
          "text": "Getting everything labeled, sorted, and easy to follow.",
          "weights": { "cabletie": 3, "shim": 1 }
        },
        {
          "text": "Making sure the person closest to the problem feels supported, not overwhelmed.",
          "weights": { "bubblewrap": 3, "safetyglasses": 1 }
        }
      ]
    },
    {
      "time": "1:14 PM",
      "scene": [
        "You get back from lunch to find the morning's project has become a team-wide priority — everyone's energized and ready to help."
      ],
      "prompt": "You naturally end up:",
      "options": [
        {
          "text": "Keeping the energy positive and productive as the team gets moving.",
          "weights": { "wd40": 3, "bubblewrap": 1 }
        },
        {
          "text": "Realizing this is exactly the kind of thing you flagged earlier — good thing you were thinking ahead.",
          "weights": { "safetyglasses": 3, "gear": 1 }
        },
        {
          "text": "Getting everyone talking, aligned, and rowing in the same direction.",
          "weights": { "ballbearing": 3, "wd40": 1 }
        },
        {
          "text": "Jumping into whatever needs doing to keep things moving forward.",
          "weights": { "spring": 3, "ducttape": 1 }
        }
      ]
    },
    {
      "time": "3:06 PM",
      "scene": [
        "The project's coming along well, and now a customer calls in with an interesting new request."
      ],
      "prompt": "At this point, you:",
      "options": [
        {
          "text": "Keep doing your part, one thing at a time.",
          "weights": { "oring": 3, "spring": 1 }
        },
        {
          "text": "Take the new request on — a change of pace is kind of energizing.",
          "weights": { "caster": 3, "ducttape": 1 }
        },
        {
          "text": "Make a list of what needs to happen. Then reorganize the list to make it even better.",
          "weights": { "gear": 3, "cabletie": 1 }
        },
        {
          "text": "Walk back through the day to make sure nothing's been missed.",
          "weights": { "shim": 3, "hexbolt": 1 }
        }
      ]
    },
    {
      "time": "4:01 PM",
      "scene": [
        "Your coworker from this morning comes back. Their idea turned into a bigger decision, and they want a second opinion."
      ],
      "prompt": "You:",
      "options": [
        {
          "text": "Remind them they know what they're doing and encourage them to make the call.",
          "weights": { "hexbolt": 3, "spring": 1 }
        },
        {
          "text": "Tell them to pick a direction — you can always adjust as you go.",
          "weights": { "ducttape": 3, "caster": 1 }
        },
        {
          "text": "Sit down with them and break the decision into clear, manageable steps.",
          "weights": { "cabletie": 3, "gear": 1 }
        },
        {
          "text": "Let them talk it out until they feel confident about it.",
          "weights": { "bubblewrap": 3, "oring": 1 }
        }
      ]
    },
    {
      "time": "4:48 PM",
      "scene": [
        "By the end of the day, the project's in great shape and the customer's request has been handled too.",
        "It was a genuine team effort."
      ],
      "prompt": "As you start packing up, your main thought is:",
      "options": [
        {
          "text": "Not exactly how I pictured the day going — but it came together nicely.",
          "weights": { "wd40": 3, "ducttape": 1 }
        },
        {
          "text": "Glad we caught the details early. It made all the difference.",
          "weights": { "safetyglasses": 3, "shim": 1 }
        },
        {
          "text": "Honestly, that was a fun day.",
          "weights": { "ballbearing": 3, "caster": 1 }
        },
        {
          "text": "Good day's work. Ready for tomorrow.",
          "weights": { "spring": 3, "oring": 1 }
        }
      ]
    },
    {
      "time": "4:59 PM",
      "scene": [
        "You're one minute from heading out. You check the group chat.",
        "The team just shared some great news."
      ],
      "prompt": "Your reaction:",
      "style": "reactions",
      "options": [
        {
          "label": ":thumbsup:",
          "emoji": "👍",
          "image": null,
          "gif_url": null,
          "weights": { "gear": 3, "hexbolt": 1 }
        },
        {
          "label": ":meow_party:",
          "emoji": null,
          "image": null,
          "gif_url": "https://media.tenor.com/1L7d8b_ZjxUAAAAj/meow-party-disco-cat.gif",
          "weights": { "caster": 3, "ducttape": 1 }
        },
        {
          "label": ":boogie_wookie:",
          "emoji": null,
          "image": null,
          "gif_url": "https://media1.tenor.com/m/25Xq_inoa58AAAAd/dancing-chewie.gif",
          "weights": { "shim": 3, "safetyglasses": 1 }
        },
        {
          "label": ":gunter:",
          "emoji": null,
          "image": null,
          "gif_url": "https://media.tenor.com/lieNzA-hpxoAAAAj/adventure-time-lol.gif",
          "weights": { "oring": 3, "cabletie": 1 }
        },
        {
          "label": ":dab_unicorn:",
          "emoji": null,
          "image": null,
          "gif_url": "https://media1.tenor.com/m/2m-JLMWAkUYAAAAd/yeet.gif",
          "weights": { "ballbearing": 3, "wd40": 1 }
        },
        {
          "label": ":dancing_dinosaur:",
          "emoji": null,
          "image": null,
          "gif_url": "https://media.tenor.com/m-LgpQJNTO8AAAAj/trex-dance.gif",
          "weights": { "ballbearing": 3, "wd40": 1 }
        }
      ]
    }
  ],
  "INTRO": [
    "You walk into McMaster-Carr ready to make things happen.",
    "Let's see how your day unfolds."
  ],
  "OUTRO": [
    "You've made it through another great day at McMaster-Carr.",
    "Now let's find out which part you are."
  ],
  "BONUS_QUESTION": {
    "time": "5:00 PM",
    "scene": [
      "One last thing before you head out —",
      "the badge scanner wants to confirm one small detail."
    ],
    "prompt": "Left-handed or right-handed?",
    "options": [
      {
        "text": "Left-handed",
        "value": "left"
      },
      {
        "text": "Right-handed",
        "value": "right"
      }
    ]
  },
  "GEAR_PART_LINKS": {
    "left": {
      "part_number": "3598N289"
    },
    "right": {
      "part_number": "3598N291"
    }
  }
};