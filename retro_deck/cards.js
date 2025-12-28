const tarotCards = [
  // MAJOR ARCANA (22 cards)
  {
    name: "The Fool",
    cardName: "the_fool",
    arcana: "major",
    number: 0,
    classicDesign: `The Fool depicts a youth walking joyfully into the world. He is taking his first steps, and he is exuberant, joyful, excited.`,
    retroDeckDesign: `What better subject than Monkey D Luffy?



✅ is a traveler

✅ is carefree

✅ is an optimist

✅ is innocent

✅ would jump off a cliff..!



I considered drawing Chopper, instead of a generic dog, but such cuteness couldn’t be expressed with such few pixels…



I think he would have deserved one of these expressions, but I didn’t want it to steal the show from Luffy!`,
    meanings: {
      upright: {
        general: "New beginnings, innocence, spontaneity, free spirit",
        past: "A leap of faith you took led to where you are now",
        present: "You're at the beginning of a new journey with unlimited potential",
        future: "An exciting new adventure awaits you",
        full: `The Fool depicts a youth walking joyfully into the world. He is taking his first steps, and he is exuberant, joyful, excited.`
      },
      reversed: {
        general: "Recklessness, taken advantage of, inconsideration",
        past: "A rash decision without proper planning affected your path",
        present: "You may be acting foolishly or taking unnecessary risks",
        future: "Proceed with caution to avoid costly mistakes",
        full: `It can mean that you are literally acting like a fool by disregarding the repercussions of your actions. Like the youth depicted in the card, you don't see how dangerous of a position you find yourself in.`
      }
    }
  },
  {
    name: "The Magician",
    cardName: "the_magician",
    arcana: "major",
    number: 1,
    classicDesign: `The Magician is one tarot card that is filled with symbolism. The central figure depicts someone with one hand pointed to the sky, while the other hand points to the ground, as if to say "as above, so below".`,

    retroDeckDesign: `I think this particular pose of Fern (from Frieren) is pretty good at representing someone “standing in command of focused willpower”... Whatever that means…

I managed to fit most objects (pentacle, cup, wand and sword) in the design, but felt like the hand position and the infinity symbol should have ruined the composition, which is already pretty busy as is.

Hope you like it! …Zoltraak!`,


    meanings: {
      upright: {
        general: "Manifestation, resourcefulness, power, inspired action",
        past: "You successfully manifested your desires through willpower",
        present: "You have all the tools you need to succeed",
        future: "Your skills and talents will bring success",
        full: `The Magician is one tarot card that is filled with symbolism. The central figure depicts someone with one hand pointed to the sky, while the other hand points to the ground, as if to say "as above, so below".`
      },
      reversed: {
        general: "Manipulation, poor planning, untapped talents",
        past: "Manipulation or deception clouded your judgment",
        present: "You're not using your full potential",
        future: "Beware of trickery or self-sabotage",
        full: `reversed The Magician, it suggests that you may be feeling disconnected from your personal power and potential. It’s time to reassess how you approach your goals and intentions.`
      }
    }
  },
  {
    name: "The High Priestess",
    cardName: "the_high_priestess",
    arcana: "major",
    number: 2,
    classicDesign: `You've most likely encountered the High Priestess before, but in other forms - she can be seen in the archetypes of Persephone, Artemis, Isis and many more. Jachin (right) is generally referred to as the Pillar of Establishment and Boaz (left) is the Pillar of Strength.`,

    retroDeckDesign: `Another character from Frieren, this time Serie!

In the story, (season one, at least) she represents “the pinnacle of magic”, Head and Founder of the Continental Magic Association.

She’s lived for thousands of years, little do humans know, for example, she was the teacher of the great human mage Flamme, now mostly a myth, the one who opened the doors for magic to enter human society.

She fits the role perfectly.`,


    meanings: {
      upright: {
        general: "Intuition, sacred knowledge, divine feminine, subconscious",
        past: "Your intuition guided you through uncertain times",
        present: "Trust your inner voice and instincts",
        future: "Hidden knowledge will be revealed to you",
        full: `You've most likely encountered the High Priestess before, but in other forms - she can be seen in the archetypes of Persephone, Artemis, Isis and many more. Jachin (right) is generally referred to as the Pillar of Establishment and Boaz (left) is the Pillar of Strength.`
      },
      reversed: {
        general: "Secrets, disconnected from intuition, withdrawal",
        past: "You ignored your intuition to your detriment",
        present: "You're out of touch with your inner wisdom",
        future: "Secrets may be revealed or kept to your disadvantage",
        full: `reversed, it can mean that you are finding it difficult to listen to your intuition. It is time for you to meditate and try new approach, for at this moment, the rational approach will not work.`
      }
    }
  },
  {
    name: "The Empress",
    cardName: "the_empress",
    arcana: "major",
    number: 3,
    classicDesign: `The Empress depicts a woman sitting on a throne. From the abundant nature that surrounds her, we can assume that this woman represents the Earth Mother archetype, a goddess of fertility.`,

    retroDeckDesign: `One PIece’s Boa Hancock, Pirate Empress of Amazon Lily, canonically the “most beautiful woman in the world”.

Formidable Fighter, tied to the introduction of the concept of Haki (one of One Piece’s power systems) in the series.

A strong willed woman, forged by her past as a slave of the Celestian Dragons.

Tsundere, icy and commanding with everyone, except her love, Luffy.`,


    meanings: {
      upright: {
        general: "Femininity, beauty, nature, nurturing, abundance",
        past: "A period of growth and abundance blessed you",
        present: "You're in a creative and nurturing phase",
        future: "Prosperity and fertility await you",
        full: `The Empress depicts a woman sitting on a throne. From the abundant nature that surrounds her, we can assume that this woman represents the Earth Mother archetype, a goddess of fertility.`
      },
      reversed: {
        general: "Creative block, dependence on others, emptiness",
        past: "Lack of self-care or creative stagnation held you back",
        present: "You're feeling creatively blocked or dependent",
        future: "Address self-worth issues to move forward",
        full: `reversed indicates that you have lost too much of your own willpower and strength because you have started placing too much effort and concern to other people’s affairs. While the Empress's nature is of showering her loved ones with attention and care, this can sometimes go overboard.`
      }
    }
  },
  {
    name: "The Emperor",
    cardName: "the_emperor",
    arcana: "major",
    number: 4,
    classicDesign: `In the Emperor tarot card, a stoic ruler figure can be seen on his throne, which is adorned with the heads of four rams, representing his astrological sign - Aries. In one hand, he carries a scepter, representing his reign and his right to rule, and in the other an orb, a symbol of the kingdom that he watches over.`,
    retroDeckDesign: `Imu was introduced as a silhouette in One Piece chapter 906.
As of writing, chapter 1161 is out, 5 years have past, we saw Imu in combat during a flashback, and still have no idea of the actual appearance.

So what do we know?

We have seen his eyes.

We know he's been called "The creator of this world", its ruler, the king, a god and even "The world".

We know he's been king of the world for a long time, possibly 800 years.

We saw glimpses of his power, which can be defined as control.

A puppeteer from the shadow who controls everything going on, at all times.

There is no lush greenery or riches in this card design, but I think it strongly fits every other theme.`,

    meanings: {
      upright: {
        general: "Authority, establishment, structure, father figure",
        past: "Strong leadership or structure provided stability",
        present: "Take control and establish order in your life",
        future: "You will step into a position of authority",

        full: `In the Emperor tarot card, a stoic ruler figure can be seen on his throne, which is adorned with the heads of four rams, representing his astrological sign - Aries. In one hand, he carries a scepter, representing his reign and his right to rule, and in the other an orb, a symbol of the kingdom that he watches over.`
      },
      reversed: {
        general: "Domination, excessive control, lack of discipline",
        past: "Rigid thinking or tyranny caused problems",
        present: "You're being too controlling or lacking discipline",
        future: "Power struggles or authority issues may arise",

        full: `They might perceive you as a challenge to their authority or stability, leading to frustration and confusion. Their emotions could be clouded by self-doubt, making them hesitant to fully express how they feel about you.As it relates to your own feelings, the reversed Emperor indicates a struggle with personal power and direction.`
      }
    }
  },
  {
    name: "The Hierophant",
    cardName: "the_hierophant",
    arcana: "major",
    number: 5,
    classicDesign: `The card depicts a religious figure that sits in a rather formal environment characteristic for a church. He is wearing three elaborate vestments which are designated to represent the three different worlds.`,

    retroDeckDesign: `This is actually the first card I’ve designed for this deck. It took 8 hours. Eight hours.

Anyway… The card is also often called “The Pope”, so I figured using an historic figure would be nice! This is my re-interpretation of a portrait of Pope Pius II, did you know he also wrote an erotica novel before switching careers?

Color palette has been swapped to better fit the traditional tarot card design.`,


    meanings: {
      upright: {
        general: "Spiritual wisdom, religious beliefs, conformity, tradition",
        past: "Traditional values or spiritual guidance shaped your path",
        present: "Seek wisdom from established institutions or mentors",
        future: "Traditional approaches will serve you well",
        full: `The card depicts a religious figure that sits in a rather formal environment characteristic for a church. He is wearing three elaborate vestments which are designated to represent the three different worlds.`
      },
      reversed: {
        general: "Personal beliefs, freedom, challenging the status quo",
        past: "Rebelling against tradition brought consequences",
        present: "You're questioning established norms and beliefs",
        future: "Break free from restrictive traditions",
        full: `reversed Hierophant can indicate that your relationship may have become rather stale or boring. You may have entered the relationship since it seemed practical, but without injecting some extra excitement, it can feel dull.`
      }
    }
  },
  {
    name: "The Lovers",
    cardName: "the_lovers",
    arcana: "major",
    number: 6,
    classicDesign: `In the Lovers card, the man and the woman in the image are being protected and blessed by an angel above. The couple seems secure and happy in their home, which appears to be the Garden of Eden.`,

    retroDeckDesign: `While looking for inspiration I found this beautiful painting, “The Lovers” by René Magritte:

It doesn’t really fit the traditional design of the card, but the card represents love, union, significant relationships, personal values and important decisions.

I was thinking how love is blind, love is trust.

… And, I don’t know, it just clicked.`,


    meanings: {
      upright: {
        general: "Love, harmony, relationships, values alignment, choices",
        past: "An important relationship or choice shaped your journey",
        present: "You face an important decision about values or relationships",
        future: "A significant partnership or choice approaches",
        full: `In the Lovers card, the man and the woman in the image are being protected and blessed by an angel above. The couple seems secure and happy in their home, which appears to be the Garden of Eden.`
      },
      reversed: {
        general: "Self-love, disharmony, imbalance, misalignment",
        past: "A relationship ended or values were compromised",
        present: "Your relationships or values are out of balance",
        future: "Relationship challenges or difficult choices ahead",
        full: `The arrival of the reversed Lovers card suggests that this person is grappling with confusion and imbalance in their emotions. They may feel torn between attraction and doubt, struggling to commit fully due to unresolved issues or past experiences.`
      }
    }
  },
  {
    name: "The Chariot",
    cardName: "the_chariot",
    arcana: "major",
    number: 7,
    classicDesign: `The Chariot tarot card depicts a figure sitting inside a vehicle that is being driven by two black and white sphinxes. The whole card has a bit of a celestial influence; the figure sits underneath a blue canopy adorned by white stars.`,

    retroDeckDesign: `The chariot symbolizes willpower, docs, success, victory through overtaking obstacles.

So I decided to go for a “Chariot Race” subject.

I searched a lot to find a subject that would fit the card format, and finally stumbled upon this gem from William Small:

In my reinterpretation, the pilot exits the last curve before arriving at the goal, alone, as other contestants have been left in the dust, as vines are present to symbolize assured victory.`,


    meanings: {
      upright: {
        general: "Control, willpower, success, action, determination",
        past: "Your determination and focus brought victory",
        present: "Channel your energy and take decisive action",
        future: "Success through willpower and determination",
        full: `The Chariot tarot card depicts a figure sitting inside a vehicle that is being driven by two black and white sphinxes. The whole card has a bit of a celestial influence; the figure sits underneath a blue canopy adorned by white stars.`
      },
      reversed: {
        general: "Self-discipline, opposition, lack of direction",
        past: "Lack of control or direction led to setbacks",
        present: "You're feeling scattered or lacking focus",
        future: "Obstacles may slow your progress without discipline",
        full: `The appearance of the reversed Chariot points to a sense of confusion and lack of direction in how this person feels about you. They may be struggling with their emotions, feeling overwhelmed or uncertain about where they stand.`
      }
    }
  },
  {
    name: "Strength",
    cardName: "strength",
    arcana: "major",
    number: 8,
    classicDesign: `In this tarot card, you will see a woman who calmly holds the jaws of a fully grown lion. Despite the fact that the lion looks menacing and strong, the woman seems to have dominion over it.`,

    retroDeckDesign: `The lion is the symbol of courage and bravery, confidence, self-confidence and power.
“The lion doesn't concern himself with the opinions of sheep”, I think that is “inner strength” and patience mean to me.

The card also represents compassion, can lions be compassionate? (I don’t know if I want to find out!)

For this card specifically (and from this card going forward) I changed my style a bit, leaving the complex patterns behind, to help print the natural colors and curves of the lion to life.

The outline is still visible and thick for proper background contrast.`,


    meanings: {
      upright: {
        general: "Strength, courage, persuasion, influence, compassion",
        past: "Inner strength helped you overcome challenges",
        present: "Face challenges with courage and compassion",
        future: "Your inner strength will see you through",
        full: `In this tarot card, you will see a woman who calmly holds the jaws of a fully grown lion. Despite the fact that the lion looks menacing and strong, the woman seems to have dominion over it.`
      },
      reversed: {
        general: "Inner strength, self-doubt, low energy, raw emotion",
        past: "Self-doubt or weakness undermined your efforts",
        present: "You're experiencing self-doubt or lack of confidence",
        future: "Build your confidence to overcome future challenges",
        full: `reversed, the card can signal a bit of codependency in your relationship. This may stem from some forms of insecurity that make it difficult for you and your partner to be more independent and pursue your own interests.`
      }
    }
  },
  {
    name: "The Hermit",
    cardName: "the_hermit",
    arcana: "major",
    number: 9,
    classicDesign: `The Hermit depicts an old man standing alone at the peak of the mountain while holding a lantern in one of his hands and a staff on the other. The mountain denotes accomplishment, development, and success.`,

    retroDeckDesign: `In tarot reading, The Hermit means introspection, wisdom, loneliness and spiritual guidance.

In this card design (and in a few others), we follow the adventure and life of a character guided by fate.

This is the moment of the journey where the mental training reaches completion, and the hero is now mentally ready to start preparation for the final fight.

I think the themes of loneliness and spiritual guidance are on point, as is introspection.`,


    meanings: {
      upright: {
        general: "Soul-searching, introspection, being alone, inner guidance",
        past: "A period of solitude brought important insights",
        present: "Take time for introspection and inner reflection",
        future: "Wisdom will come through solitude and reflection",
        full: `The Hermit depicts an old man standing alone at the peak of the mountain while holding a lantern in one of his hands and a staff on the other. The mountain denotes accomplishment, development, and success.`
      },
      reversed: {
        general: "Isolation, loneliness, withdrawal",
        past: "Excessive isolation held you back",
        present: "You're isolating yourself too much from others",
        future: "Beware of becoming too withdrawn",
        full: `reversed, you are perhaps in a situation where you'd like to be alone; there is nothing wrong about that. However, there is a possibility that your seclusion may become harmful to both yourself and others.`
      }
    }
  },
  {
    name: "Wheel of Fortune",
    cardName: "wheel_of_fortune",
    arcana: "major",
    number: 10,
    classicDesign: `The Wheel of Fortune is one of the most highly symbolic cards in the deck, filled with signs that each have its own meaning. At the center of the card, lies a giant wheel, covered in esoteric symbols.`,

    retroDeckDesign: `This is by far one of my favorite designs in the Rider-Waite tarot deck, so I had to recreate it as closely as possible.

The angel takes on a more biblical form, allowing for better design at low resolution, while the eagle has been transformed to better first the composition.`,


    meanings: {
      upright: {
        general: "Good luck, karma, life cycles, destiny, turning point",
        past: "Fate intervened to change your course",
        present: "A turning point is occurring in your life",
        future: "Positive change and good fortune are coming",
        full: `The Wheel of Fortune is one of the most highly symbolic cards in the deck, filled with signs that each have its own meaning. At the center of the card, lies a giant wheel, covered in esoteric symbols.`
      },
      reversed: {
        general: "Bad luck, resistance to change, breaking cycles",
        past: "Bad luck or resistance to change caused difficulties",
        present: "You're experiencing a downturn or resisting change",
        future: "Prepare for unexpected changes or setbacks",
        full: `The arrival of the reversed Wheel of Fortune suggests that you should embrace a period of introspection and reevaluation. This is your cue to take control of your circumstances rather than leaving things to chance.`
      }
    }
  },
  {
    name: "Justice",
    cardName: "justice",
    arcana: "major",
    number: 11,
    classicDesign: `The Justice tarot card is a symbol of truth, fairness, and law. As she sits in her chair, the scales in her left hand represent how intuition should balance logic.`,

    retroDeckDesign: `In Greek mythology, Themis is the titan/goddess of Divine Order, law and justice.

She is blindfolded, probably part of the origin of the saying “the law is the same for everyone” we have here in Italy.

The design and pose are inspired from one of the many statues of her:`,


    meanings: {
      upright: {
        general: "Justice, fairness, truth, cause and effect, law",
        past: "Justice was served and balance restored",
        present: "Seek truth and fairness in your decisions",
        future: "You will receive what you deserve",
        full: `The Justice tarot card is a symbol of truth, fairness, and law. As she sits in her chair, the scales in her left hand represent how intuition should balance logic.`
      },
      reversed: {
        general: "Unfairness, lack of accountability, dishonesty",
        past: "Injustice or unfair treatment affected your path",
        present: "You're avoiding accountability or acting unfairly",
        future: "Unfair situations or lack of accountability ahead",
        full: `when the reversed Justice card appears in your reading. Be cautious about who you share your financial information with, and ensure that they can be trusted before going forward.`
      }
    }
  },
  {
    name: "The Hanged Man",
    cardName: "the_hanged_man",
    arcana: "major",
    number: 12,
    classicDesign: `In this card, it depicts a man who is suspended upside-down, and he is hanging by his foot from the living world tree. This tree is rooted deep down in the underworld, and it is known to support the heavens.`,

    retroDeckDesign: `The Hanged Man tarot card signifies a voluntary pause, surrender, and gaining new perspectives through suspension or sacrifice, often indicating a need to stop striving and simply observe to find spiritual insight, wisdom, or breakthroughs, rather than being about death or literal suffering.

What better mythological example of this, than Odin, offering himself to himself, in exchange for power, wisdom and magic?`,


    meanings: {
      upright: {
        general: "Pause, surrender, letting go, new perspectives",
        past: "A period of waiting brought new understanding",
        present: "Surrender to the moment and see things differently",
        future: "A necessary pause will bring enlightenment",
        full: `In this card, it depicts a man who is suspended upside-down, and he is hanging by his foot from the living world tree. This tree is rooted deep down in the underworld, and it is known to support the heavens.`
      },
      reversed: {
        general: "Delays, resistance, stalling, indecision",
        past: "Resistance to change prolonged difficulties",
        present: "You're resisting necessary changes or stuck in limbo",
        future: "Stop delaying and take action",
        full: `The reversed Hanged Man tarot love meaning suggests that the period of waiting is over. There may have been a slowdown in your love life recently, forcing you to take the time to consider different perspectives on romance and love.`
      }
    }
  },
  {
    name: "Death",
    cardName: "death",
    arcana: "major",
    number: 13,
    classicDesign: `Here, we see Death riding a beautiful white horse while holding up a black flag with a white pattern. It is portrayed as a living skeleton, the bones being the only part of the human body existing after death.`,

    retroDeckDesign: `The Death tarot card rarely means literal death, instead, it signifies major transformation, endings, and new beginnings, representing the necessary conclusion of one life phase to make way for growth, renewal, and a fresh cycle. 

It's about letting go of what no longer serves you (identities, situations, beliefs, …) to embrace profound change, with its reversed meaning often pointing to resisting these necessary shifts or clinging to the past.

I think Zoro meeting the Grim Reaper during Wano final act does symbolize a few of these quite fittingly.`,


    meanings: {
      upright: {
        general: "Endings, change, transformation, transition",
        past: "A major ending allowed for new beginnings",
        present: "You're in the midst of significant transformation",
        future: "Major changes and new beginnings approach",
        full: `Here, we see Death riding a beautiful white horse while holding up a black flag with a white pattern. It is portrayed as a living skeleton, the bones being the only part of the human body existing after death.`
      },
      reversed: {
        general: "Resistance to change, personal transformation, inner purging",
        past: "Fear of change held you back from growth",
        present: "You're resisting necessary endings",
        future: "Embrace change or face stagnation",
        full: `They may feel stuck or hesitant, struggling to let go of past experiences that influence their perception of you. This could indicate lingering doubts or fears that prevent them from fully embracing their feelings for you, leaving them in a state of confusion.With regard to your own emotions, the reversed Death card reflects an internal struggle as well.`
      }
    }
  },
  {
    name: "Temperance",
    cardName: "temperance",
    arcana: "major",
    number: 14,
    classicDesign: `On the Temperance card, there is an angel with wings, whose gender is not immediately obvious, which suggests that there is a balance between the sexes. One foot of the angel is in water, to represent the subconscious, while the other foot is on dry land, a representation of the material world.`,

    retroDeckDesign: `I found a beautiful depiction of SCP-001 by user “promise land” on Pinterest, that perfectly fits the theme, so I took inspiration from that, reusing pose and color scheme.`,


    meanings: {
      upright: {
        general: "Balance, moderation, patience, purpose",
        past: "Balance and patience led to harmony",
        present: "Find the middle path and practice moderation",
        future: "Patience and balance will bring success",
        full: `On the Temperance card, there is an angel with wings, whose gender is not immediately obvious, which suggests that there is a balance between the sexes. One foot of the angel is in water, to represent the subconscious, while the other foot is on dry land, a representation of the material world.`
      },
      reversed: {
        general: "Imbalance, excess, self-healing, re-alignment",
        past: "Excess or imbalance caused problems",
        present: "Your life is out of balance",
        future: "Restore balance to avoid negative consequences",
        full: `Sometimes, no matter our best efforts, we can’t force love to come into being. You may benefit from being a bit more patient, while also making sure that your own emotions or desires do not go into extremes.`
      }
    }
  },
  {
    name: "The Devil",
    cardName: "the_devil",
    arcana: "major",
    number: 15,
    classicDesign: `This card shows the Devil represented in his most well-known satyr form, otherwise known as Baphomet. Along with being half goat and half man, the devil has bat wings and an inverted pentagram on his forehead.`,

    retroDeckDesign: `Interesting description, but there is a piece I’d very much like to draw, but never had the chance: Netflix poster for Devilman Crybaby with Amon silhouette!`,


    meanings: {
      upright: {
        general: "Shadow self, attachment, addiction, restriction, sexuality",
        past: "Unhealthy attachments or addictions bound you",
        present: "You're trapped by materialism or unhealthy patterns",
        future: "Beware of becoming enslaved to desires",
        full: `This card shows the Devil represented in his most well-known satyr form, otherwise known as Baphomet. Along with being half goat and half man, the devil has bat wings and an inverted pentagram on his forehead.`
      },
      reversed: {
        general: "Releasing limiting beliefs, exploring dark thoughts, detachment",
        past: "You broke free from limiting beliefs or addictions",
        present: "You're releasing yourself from bondage",
        future: "Freedom from restrictions is coming",
        full: `the reversed Devil appears, it reveals a sense of liberation and newfound clarity in how this person feels about you. They may be breaking free from past attachments or unhealthy patterns that once clouded their judgment, leading them to see your relationship with fresh eyes.`
      }
    }
  },
  {
    name: "The Tower",
    cardName: "the_tower",
    arcana: "major",
    number: 16,
    classicDesign: `The Tower card depicts a high spire nestled on top of the mountain. A lightning bolt strikes the tower which sets it ablaze.`,

    retroDeckDesign: `I opted for Dracula’s castle from the movie Van Helsing.

In the movie, Dracula is attempting to use the same process that revived Frankenstein’s creation to revive his undead children.

This card means sudden, dramatic upheaval, destruction of old structures (beliefs, relationships, situations) that no longer serve you, leading to profound change, revelation, and liberation, often feeling chaotic but ultimately paving the way for rebuilding on a stronger foundation.

The design showcases a tower being struck by supernatural lightning, which captures the card's dramatic energy. 

The castle represents a structure built on corruption and lies (vampirism, death, dark magic) that needs to be violently destroyed for the world to heal, just like The Tower card shows false beliefs and toxic situations getting obliterated so you can rebuild something real.`,


    meanings: {
      upright: {
        general: "Sudden change, upheaval, chaos, revelation, awakening",
        past: "A sudden disruption shattered false foundations",
        present: "Unexpected change is dismantling your reality",
        future: "Sudden upheaval will destroy false structures",
        full: `The Tower card depicts a high spire nestled on top of the mountain. A lightning bolt strikes the tower which sets it ablaze.`
      },
      reversed: {
        general: "Personal transformation, fear of change, averting disaster",
        past: "You narrowly avoided disaster or resisted change",
        present: "You're resisting necessary destruction of old ways",
        future: "You may avoid the worst if you adapt now",
        full: `The arrival of the reversed Tower card suggests that this person is experiencing a sense of upheaval but is beginning to find clarity. They may feel shaken by past events or misunderstandings between you, yet there’s an underlying desire to rebuild and reconnect.`
      }
    }
  },
  {
    name: "The Star",
    cardName: "the_star",
    arcana: "major",
    number: 17,
    classicDesign: `The Star card shows a woman kneeling at the edge of a small pond. One container pours the water out to the dry land, as if to to nourish it and ensure its fertility.`,

    retroDeckDesign: `The Star represents hope, renewal, and cosmic guidance, a beacon in darkness that promises healing and new possibilities. 

The Purple Catalyst Comet from Adventure Time captures this: it's a cosmic force that brings massive change and transformation to whatever it touches, literally reshaping reality and offering fresh starts. 

Just like the traditional Star card shows celestial light pouring down to nourish the earth, the Catalyst Comet descends from the heavens as an agent of rebirth, carrying the universe's promise that even after destruction, something new and beautiful can emerge.`,


    meanings: {
      upright: {
        general: "Hope, faith, purpose, renewal, spirituality",
        past: "Hope and faith guided you through darkness",
        present: "Renewed hope and inspiration fill your life",
        future: "Your wishes and dreams will be fulfilled",
        full: `The Star card shows a woman kneeling at the edge of a small pond. One container pours the water out to the dry land, as if to to nourish it and ensure its fertility.`
      },
      reversed: {
        general: "Lack of faith, despair, self-trust, disconnection",
        past: "Loss of faith or hope dimmed your path",
        present: "You're feeling hopeless or disconnected from purpose",
        future: "Reconnect with your faith to find your way",
        full: `the reversed Star card appears in relation to how someone feels about you, it suggests a sense of disillusionment or disappointment. This person may feel uncertain and lack hope regarding your connection, possibly due to past experiences that have left them feeling vulnerable or let down.`
      }
    }
  },
  {
    name: "The Moon",
    cardName: "the_moon",
    arcana: "major",
    number: 18,
    classicDesign: `On either side of the path stand a wolf and a dog, representing our animalistic nature - one is civilized, and the other wild and feral. There is a crawfish that is crawling out of the pond from which the path stems from.`,

    retroDeckDesign: `Being a massive One Piece fan, I read this and I think “God Valley”.
I couldn’t fit the fish, but I managed to sneak the constellation of the Wolf on both sides of the pillars (mirrored), representing the dog and the wolf.`,


    meanings: {
      upright: {
        general: "Illusion, fear, anxiety, subconscious, intuition",
        past: "Illusions or fears clouded your judgment",
        present: "Things are not as they seem; trust your intuition",
        future: "Navigate through uncertainty with inner wisdom",
        full: `On either side of the path stand a wolf and a dog, representing our animalistic nature - one is civilized, and the other wild and feral. There is a crawfish that is crawling out of the pond from which the path stems from.`
      },
      reversed: {
        general: "Release of fear, repressed emotion, inner confusion",
        past: "You overcame fears and illusions",
        present: "Clarity is emerging from confusion",
        future: "Hidden truths will be revealed",
        full: `The arrival of the reversed The Moon suggests a cloud of confusion and uncertainty surrounding how someone feels about you. They may be grappling with self-doubt or fear, leading them to question their feelings for you.`
      }
    }
  },
  {
    name: "The Sun",
    cardName: "the_sun",
    arcana: "major",
    number: 19,
    classicDesign: `The Sun card presents an feeling of optimism and fulfillment. This card represents the dawn which follows the darkest of nights.`,

    retroDeckDesign: `The Sun card represents vitality, clarity, and overwhelming life force breaking through darkness. 
In this design, Frieza's moment of recognition captures that instant when truth becomes undeniable: what seemed hidden is now brilliantly, terrifyingly revealed. 

His famous line "that's no sun" (from a couple of chapters earlier) perfectly inverts the card's meaning, as he mistakes pure concentrated energy for a celestial body, just before being consumed by the very light he failed to comprehend.

Of course, as we know, it didn’t work, but the scene is just so damn cool.`,


    meanings: {
      upright: {
        general: "Positivity, fun, warmth, success, vitality",
        past: "Joy and success illuminated your path",
        present: "Everything is going well; enjoy this positive time",
        future: "Success and happiness are assured",
        full: `The Sun card presents an feeling of optimism and fulfillment. This card represents the dawn which follows the darkest of nights.`
      },
      reversed: {
        general: "Inner child, feeling down, overly optimistic",
        past: "Excessive optimism or temporary setbacks occurred",
        present: "You're feeling less enthusiastic than usual",
        future: "Delays in happiness, but it will still come",
        full: `the Sun is reversed, it suggests pleasant things; but perhaps clouded by one’s inability to appreciate and see what is truly there. If you’ve been glum, depressed or pessimistic about what you have at work, the Sun suggests that you need only to peel back the clouds and see what happiness you already have.`
      }
    }
  },
  {
    name: "Judgement",
    cardName: "judgement",
    arcana: "major",
    number: 20,
    classicDesign: `This card depicts what one would imagine the last judgment would be, in the various forms that takes in many mythologies. The image in the Judgement card shows women, men, and children who are rising from the grave to respond to Gabriel’s trumpet call.`,

    retroDeckDesign: `The judgement card signified self-evaluation, awakening, renewal, purpose, reflection, reckoning.

In this design, we see the moment when “The little one in the flask” (or Father), moves towards Kami (or Truth) to consume it.

A true moment of renewal, purpose and reckoning.

What follows if the awakening, but Father was ultimately incapable of self-evaluation, which ultimately leads to his demise.`,


    meanings: {
      upright: {
        general: "Judgement, rebirth, inner calling, absolution",
        past: "A moment of reckoning brought transformation",
        present: "You're being called to a higher purpose",
        future: "A time of judgement and renewal approaches",
        full: `This card depicts what one would imagine the last judgment would be, in the various forms that takes in many mythologies. The image in the Judgement card shows women, men, and children who are rising from the grave to respond to Gabriel’s trumpet call.`
      },
      reversed: {
        general: "Self-doubt, inner critic, ignoring the call",
        past: "You ignored your calling or judged yourself harshly",
        present: "You're doubting yourself or avoiding your purpose",
        future: "Answer your calling or face regret",
        full: `reversed Judgement card can mean that you doubt and judge yourself too harshly. This could be causing you to miss opportunities that were awaiting you.`
      }
    }
  },
  {
    name: "The World",
    cardName: "the_world",
    arcana: "major",
    number: 21,
    classicDesign: `The World card in the tarot deck has a dancing figure at the center. The dancing figure on the card has one leg crossed over the other and holds a wand in either hand.`,

    retroDeckDesign: `As we know, a certain One Piece character recently (Chapter 1161 is out at time of writing) said that another certain character could be referred to as “The World”.

But that character design has already been used in another card.

I also had to restrain myself from drawing “Za Warudo!!” or another JoJo Scene, which would have been incredibly cool…

I opted for “Loki Nika’s form”, because I think the design is just too good to not use it.

This card means realisation, inner and outer self becoming one, which the awakening of the Hito Hito no Mi model Nika symbolizes perfectly.

The card also tells us how an individual is profoundly linked with all other things, and that we all dance and sway along the flow of life to one rhythm, in my interpretation, dancing like Nika to the drums of liberation!`,


    meanings: {
      upright: {
        general: "Completion, integration, accomplishment, travel",
        past: "You successfully completed a major life cycle",
        present: "You're reaching completion and fulfillment",
        future: "Success and accomplishment await you",
        full: `The World card in the tarot deck has a dancing figure at the center. The dancing figure on the card has one leg crossed over the other and holds a wand in either hand.`
      },
      reversed: {
        general: "Seeking personal closure, short-cuts, delays",
        past: "Incomplete goals or unfinished business lingered",
        present: "You're close to completion but not quite there",
        future: "Tie up loose ends to move forward",
        full: `The appearance of the reversed The World card in relation to how someone feels about you suggests a sense of incompleteness or disconnection. This person may feel uncertain or unfulfilled in their emotions towards you, as if they are struggling to see the bigger picture of your relationship.


================================================================================
SUIT OF WANDS (14 Cards)
================================================================================`
      }
    }
  },

  // MINOR ARCANA - WANDS (14 cards)
  {
    name: "Ace of Wands",
    cardName: "wands_ace",
    arcana: "minor",
    suit: "wands",
    classicDesign: `Wands are associated with fire energy, and the Ace of Wands is the core representation of fire within the deck. The card shows a hand that is sticking out of a cloud while holding the wand.`,
    retroDeckDesign: `This card is designed somewhat after the composition of the classic tarot cards, with the twist being the reuse of certain assets from some of my previous works!

The trees on the right are part of the Sneakbit (available on Steam, App Store, Play Store) tiling system, while the hand is part of an unreleased Dungeon Crawler project.`,

    meanings: {
      upright: {
        general: "Inspiration, new opportunities, growth, potential",
        past: "A spark of inspiration set things in motion",
        present: "New creative opportunities are emerging",
        future: "Exciting new ventures are on the horizon",

        full: `Wands are associated with fire energy, and the Ace of Wands is the core representation of fire within the deck. The card shows a hand that is sticking out of a cloud while holding the wand.`
      },
      reversed: {
        general: "Emerging creativity, lack of direction, distractions",
        past: "Missed opportunities or lack of direction held you back",
        present: "You're struggling to find your creative spark",
        future: "Delays in new projects may occur",

        full: `reversed Ace of Wands indicates trials and tribulations that you will face in the near future. You might not have any direction, which leads to being uninspired or unmotivated.`
      }
    }
  },
  {
    name: "Two of Wands",
    cardName: "wands_two",
    arcana: "minor",
    suit: "wands",
    classicDesign: `The Two of Wands card features a man standing on top of what looks like a castle and in his right hand he holds a miniature globe. From the way he is standing, the man is looking down upon the vast terrain, in which an ocean lies on the left-hand side, whilst the land stretches over on the right-hand side.`,

    retroDeckDesign: `The Two of Wands tarot card signifies future planning, exploring new horizons, and making crucial decisions between the comfort of the known and the adventure of the unknown.
What better scene to represents this than Frodo and Sam leaving the Shire?
In this particular frame we capture the moment where Same briefly stops as he realizes he's never been this far from home.`,


    meanings: {
      upright: {
        general: "Future planning, progress, decisions, discovery",
        past: "Planning and vision set your current path",
        present: "You're planning your next move",
        future: "Your plans will lead to expansion",
        full: `The Two of Wands card features a man standing on top of what looks like a castle and in his right hand he holds a miniature globe. From the way he is standing, the man is looking down upon the vast terrain, in which an ocean lies on the left-hand side, whilst the land stretches over on the right-hand side.`
      },
      reversed: {
        general: "Personal goals, inner alignment, fear of unknown",
        past: "Fear prevented you from expanding",
        present: "You're feeling stuck in planning phase",
        future: "Overcome fear to move forward",
        full: `You may find that the plans that you laid out for your career path are not going the way that you envisioned. You may have missed details and had many obstacles that you did not foresee.`
      }
    }
  },
  {
    name: "Three of Wands",
    cardName: "wands_three",
    arcana: "minor",
    suit: "wands",
    classicDesign: `The Three of Wands depicts a man who is standing on the edge of a cliff, looking over the ocean and the mountains. From the cliff edge, he sees everything that is ahead of him.`,

    retroDeckDesign: `The Three of Wands represents forward momentum, planning, expansion, and progress unfolding. It's about ships leaving harbor, ventures launched, and waiting for results with confident anticipation. You've taken action, now you watch the horizon for what comes next.

The hourglass with wings captures this, time is moving forward, actively flying toward your goals. The sand is already halfway through, representing that initial progress has been made, momentum is building, and there's no turning back now. The three wands forming a triangle in the background create a stable foundation for this forward motion, a geometric symbol of strength supporting your expanding vision.

I love how the wings suggest both speed and elevation, you're not just passively waiting, you're soaring toward those distant shores. The hourglass isn't sitting still on some shelf; it's an active participant in your journey. That feeling of "I've planted the seeds, now I'm watching them grow" is perfectly embodied by sand actively falling while the whole thing races forward through the air.`,


    meanings: {
      upright: {
        general: "Progress, expansion, foresight, overseas opportunities",
        past: "Your foresight led to expansion",
        present: "Your plans are beginning to bear fruit",
        future: "Growth and expansion are coming",
        full: `The Three of Wands depicts a man who is standing on the edge of a cliff, looking over the ocean and the mountains. From the cliff edge, he sees everything that is ahead of him.`
      },
      reversed: {
        general: "Playing small, lack of foresight, unexpected delays",
        past: "Lack of planning caused setbacks",
        present: "Your expansion is delayed or blocked",
        future: "Reassess your plans before proceeding",
        full: `reversed Three of Wands indicates that you may have been embarking on personal journeys or developments, but you have not received the achievements that you were hoping for. This could be due to delays or road blocks.`
      }
    }
  },
  {
    name: "Four of Wands",
    cardName: "wands_four",
    arcana: "minor",
    suit: "wands",
    classicDesign: `The Four of Wands depicts a couple which dances beneath the welcome wreath which is tied between four wands, which are crystal tipped. There is a canopy of flowers on the card which resembles the canopy that is particularly characteristic of the traditional Jewish ceremony.`,

    retroDeckDesign: `The Four of Wands represents celebration, harmony, homecoming, and reaching a significant milestone. It's about that moment when you've built something stable and worth celebrating, a foundation that lets you finally relax and enjoy what you've achieved.

This design shows a gateway formed by four wands, wrapped in lush greenery and vines, with fireworks exploding in the sky and the sun rising in the background. It was a good party! The natural archway creates that sense of "home" and accomplishment, while the celebratory fireworks and dawn light capture the joy and promise of the moment. The vines growing around the structure suggest that what's been built is alive, thriving, and ready to support whatever comes next.

I wanted to capture that specific feeling of celebration after hard work, not wild chaos, but warm, earned happiness. The rising sun promises new beginnings while the settling fireworks hint at festivities winding down. It's that perfect moment between achievement and rest, when you can look at what you've built and think "yeah, this is good."`,


    meanings: {
      upright: {
        general: "Celebration, joy, harmony, relaxation, homecoming",
        past: "A celebration marked an important milestone",
        present: "Enjoy this time of happiness and stability",
        future: "A joyous celebration approaches",
        full: `The Four of Wands depicts a couple which dances beneath the welcome wreath which is tied between four wands, which are crystal tipped. There is a canopy of flowers on the card which resembles the canopy that is particularly characteristic of the traditional Jewish ceremony.`
      },
      reversed: {
        general: "Personal celebration, inner harmony, conflict with others",
        past: "Conflicts marred celebrations",
        present: "You're finding it hard to celebrate or relax",
        future: "Address conflicts before celebrating",
        full: `The arrival of the reversed Four of Wands suggests that the person you are inquiring about feels a sense of instability or disconnection regarding their emotions towards you. They may be grappling with feelings of uncertainty and lack of commitment, possibly reflecting on past experiences that have left them hesitant to fully embrace what could be between you.`
      }
    }
  },
  {
    name: "Five of Wands",
    cardName: "wands_five",
    arcana: "minor",
    suit: "wands",
    classicDesign: `The Five of Wands depicts five men all holding their own wands and brandishing them up in the air. Like with most fives in the tarot, it is about some kind of disagreement that is facing the querent.`,

    retroDeckDesign: `The Five of Wands represents conflict, competition, and chaotic struggle, but not the serious, damaging kind. It's more like sparring matches, rival teams clashing, or that messy energy when everyone's fighting for position but nobody's actually trying to destroy each other. Playground scuffles, not war zones.

So here we have Goku and Chi-Chi during the 23rd World Martial Arts Tournament! The poor guy doesn't even recognize her, has completely forgotten his childhood promise to marry her, and yet here they are, fighting in the ring, literally battling it out while destiny laughs in the background. It's the perfect representation of the card's chaotic, competitive energy: two people who are *meant* to be together, but first they have to work through this messy, confused conflict phase.

What makes this work is that their fight isn't about hatred or destruction, it's competition, pride, and Chi-Chi trying to get through Goku's impossibly thick skull. The Five of Wands is all about that scrambling energy where everyone's pushing and pulling in different directions, and this match captures it perfectly. They're destined to end up together, to build a life and family, but first? First they gotta throw hands in a tournament arc. Classic Dragon Ball, classic Five of Wands energy.`,


    meanings: {
      upright: {
        general: "Conflict, disagreements, competition, tension",
        past: "Competition or conflict challenged you",
        present: "You're facing rivalry or internal conflict",
        future: "Prepare for competition or disagreements",
        full: `The Five of Wands depicts five men all holding their own wands and brandishing them up in the air. Like with most fives in the tarot, it is about some kind of disagreement that is facing the querent.`
      },
      reversed: {
        general: "Inner conflict, conflict avoidance, tension release",
        past: "Avoiding conflict created more problems",
        present: "Conflicts are resolving or being internalized",
        future: "Release of tension is coming",
        full: `reversed meaning can be that your natural method of dealing with disagreements is avoiding any kind of conflict by getting away from that place as fast as you can. Sometimes this can be regarded as a good thing, but other times, it may lead to a number of issues that are brewing up within you, for which you will have to address soon.`
      }
    }
  },
  {
    name: "Six of Wands",
    cardName: "wands_six",
    arcana: "minor",
    suit: "wands",
    classicDesign: `The Six of Wands tarot card depicts a man who is currently wearing a wreath of victory around his head. He is depicted riding a horse through a crowd of people who are cheering.`,

    retroDeckDesign: `The Six of Wands represents victory, public recognition, triumph, and well-earned success. It's that moment when you ride back into town after winning the battle, and everyone's cheering for you. The hero's welcome. The victory lap.

I found this cool statue of a triumphant figure on horseback and decided to redraw it as a real person. The rider sits confident and composed, wearing sunglasses (because heroes don't need to see the haters), surrounded by lush greenery that speaks to the fertile ground their success has created. The six wands stand in the foreground like the standards of a Roman triumph, announcing the moment of glory.

The composition is how the horse and rider break through those vertical wands, almost like they're parting a crowd of supporters. The elevated perspective reinforces the card's theme of being recognized and celebrated, while the relaxed posture of the rider shows someone who's earned their victory and knows it. Sometimes you just gotta put on the shades and take your victory lap.`,


    meanings: {
      upright: {
        general: "Success, public recognition, progress, self-confidence",
        past: "Victory and recognition came your way",
        present: "You're experiencing success and acclaim",
        future: "Public recognition and success await",
        full: `The Six of Wands tarot card depicts a man who is currently wearing a wreath of victory around his head. He is depicted riding a horse through a crowd of people who are cheering.`
      },
      reversed: {
        general: "Private achievement, personal definition of success, fall from grace",
        past: "Success was short-lived or went unrecognized",
        present: "You're doubting your abilities despite success",
        future: "Define success on your own terms",
        full: `reversed Six of Wands, it’s a signal to turn inward and embrace self-reflection. You may need to shift your focus from public recognition to personal achievements and inner growth.`
      }
    }
  },
  {
    name: "Seven of Wands",
    cardName: "wands_seven",
    arcana: "minor",
    suit: "wands",
    classicDesign: `The Seven of Wands has an image of a man who is standing on a tall hill and being challenged by the opponents below. He seems to be defending this position and attacking in retaliation.`,

    retroDeckDesign: `The Seven of Wands represents defending your position, standing your ground against opposition, and fighting to maintain what you've worked hard to achieve. It's about courage under pressure, holding your territory when others challenge you, and refusing to back down even when the odds seem overwhelming.

Mikasa Ackerman carrying seven thunder spears is perfect for this. Throughout Attack on Titan, she's the embodiment of fierce determination and unwavering resolve, always ready to defend what matters most to her. The thunder spears specifically represent both her arsenal and her readiness for combat, she's not just standing guard, she's actively prepared to fight off any threat. Seven spears for the Seven of Wands, each one a promise that she won't yield an inch.

The pose captures that moment of defiance and vigilance, where you're not attacking but you're definitely not retreating either. You've claimed your ground, and anyone who wants it will have to go through you first. That's Mikasa's entire character arc, and that's the Seven of Wands energy right there.`,


    meanings: {
      upright: {
        general: "Challenge, competition, protection, perseverance",
        past: "You defended your position against opposition",
        present: "Stand your ground against challenges",
        future: "You'll need to defend your position",
        full: `The Seven of Wands has an image of a man who is standing on a tall hill and being challenged by the opponents below. He seems to be defending this position and attacking in retaliation.`
      },
      reversed: {
        general: "Exhaustion, giving up, overwhelmed",
        past: "You gave up when challenged",
        present: "You're feeling overwhelmed by opposition",
        future: "Choose your battles wisely",
        full: `the reversed Seven of Wands, it suggests that the person you are asking about feels overwhelmed and perhaps even defeated when it comes to their emotions toward you. They may sense a lack of confidence or feel as though they cannot stand their ground in this relationship, leading them to withdraw rather than engage.


================================================================================
SUIT OF CUPS (14 Cards)
================================================================================`
      }
    }
  },
  {
    name: "Eight of Wands",
    cardName: "wands_eight",
    arcana: "minor",
    suit: "wands",
    classicDesign: `The Eight of Wands is depicted as eight flying staves that appear as if they are suspended in the air. Some may look at them as wands that are blossoming that are traveling at a maximum speed.`,

    retroDeckDesign: `The Eight of Wands represents swift action, movement, rapid progress, and events accelerating toward conclusion. It's about things happening all at once, energy in motion, and messages or forces converging on a single point with unstoppable momentum.

So here we have an angry mammoth with flaming eyes charging through the tundra, and eight wands pointed directly at it from hunters we cannot see (they're behind the camera, that's us!). The beast is massive, powerful, and moving fast, while multiple spears fly through the air simultaneously, all converging on the same target. It's that crucial moment where everything happens at once: the hunt reaches its climax, multiple forces unite toward one goal, and there's no turning back.

The mammoth's fury and those burning eyes capture the raw energy and intensity of the Eight of Wands perfectly. This isn't a slow, careful process, it's explosive, immediate, and unstoppable. The tundra setting emphasizes how exposed everything is: no hiding, no delays, just pure momentum carrying everything to its inevitable conclusion. Eight wands, eight hunters, one target, total commitment!`,


    meanings: {
      upright: {
        general: "Movement, fast paced change, action, alignment",
        past: "Rapid developments changed your situation",
        present: "Things are moving quickly now",
        future: "Swift progress and movement ahead",
        full: `The Eight of Wands is depicted as eight flying staves that appear as if they are suspended in the air. Some may look at them as wands that are blossoming that are traveling at a maximum speed.`
      },
      reversed: {
        general: "Delays, frustration, resisting change, internal alignment",
        past: "Delays frustrated your progress",
        present: "Things are moving slower than expected",
        future: "Patience is needed as delays occur",
        full: `reversed meaning is generally associated with patience. There is a possibility that you are feeling frustrated about something.`
      }
    }
  },
  {
    name: "Nine of Wands",
    cardName: "wands_nine",
    arcana: "minor",
    suit: "wands",
    classicDesign: `A man is shown carrying a heavy burden of wood, in the form of ten bundled wands, approaching a town which is not too far. This image on the ten of wands indicates a person who has already struggled in life and has succeeded, and he is now carrying the harvests to his final destination.`,

    retroDeckDesign: `The Nine of Wands represents resilience in the face of adversity, standing guard despite exhaustion, and the final test before victory. It's about being battered but not broken, maintaining your defense when you've already fought so hard and wonder if you can take one more hit.

Hashirama's Sage Art: Gracious Deity Gates perfectly captures this moment of last-stand determination. Those massive torii gates crashing down to restrain the unstoppable Madara Uchiha, it's the ultimate "one more defense" move. The technique itself is beautiful and powerful, these divine gates summoned to hold back overwhelming force, but we all know what happens next: Madara is simply too strong, and even this legendary sealing jutsu won't be enough to stop him.

That's what the Nine of Wands is about though, isn't it? Standing your ground even when victory isn't guaranteed, throwing everything you have into one more barrier, one more defense, because giving up isn't an option. The gates represent both incredible power and the acknowledgment that sometimes, even our strongest efforts are tested beyond their limits. It's not about whether the gates hold, it's about the unwavering resolve to erect them in the first place.`,


    meanings: {
      upright: {
        general: "Resilience, courage, persistence, test of faith",
        past: "You persevered through difficult tests",
        present: "You're battle-weary but must persist",
        future: "One final challenge before success",
        full: `REVERSED: (No reversed meaning available)

11. TEN OF WANDS
--------------------------------------------------------------------------------
UPRIGHT: A man is shown carrying a heavy burden of wood, in the form of ten bundled wands, approaching a town which is not too far. This image on the ten of wands indicates a person who has already struggled in life and has succeeded, and he is now carrying the harvests to his final destination.`
      },
      reversed: {
        general: "Inner resources, struggle, overwhelm, defensive",
        past: "You struggled to maintain boundaries",
        present: "You're feeling exhausted and defensive",
        future: "Rest and recover before the next challenge",
        full: `when reversed here, has two potential meanings. It might be that you are coming out of a time of economic trouble.`
      }
    }
  },
  {
    name: "Ten of Wands",
    cardName: "wands_ten",
    arcana: "minor",
    suit: "wands",
    classicDesign: `A man carrying a heavy burden of ten staves, struggling to keep going.`,

    retroDeckDesign: `The Ten of Wands represents burden, responsibility, overwhelm, and struggle, carrying too much weight, being stretched to your absolute limit, but still pushing forward to reach the finish line. It's about exhaustion from success, the heavy price of achievement.

This is Endeavor's moment of ultimate victory and simultaneous breaking point: raising his fist in triumph after defeating the Nomu, officially becoming the Number One Hero after All Might's retirement. But look at him, he's completely spent, surrounded by smoke and destruction, barely standing. This is what he's wanted his entire life, what drove him to abuse his family, to push himself and others beyond all limits. And now that he has it? He's alone, exhausted, carrying the weight of being #1 in a world that's lost its Symbol of Peace.

The imagery captures that Ten of Wands energy perfectly: victory that looks like collapse, achievement that costs everything, finally getting what you wanted only to realize how impossibly heavy it is to carry. The flames and smoke swirling around him aren't just battle damage, they're the visual representation of burden itself, the crushing responsibility of a crown he's not sure he can bear.`,


    meanings: {
      upright: {
        general: "Burden, extra responsibility, hard work, completion",
        past: "Heavy responsibilities weighed you down",
        present: "You're carrying too much on your shoulders",
        future: "Increased responsibilities are coming",

        full: `Burdens, extra responsibility, hard work, completion. Taking on more than you can handle, feeling overloaded, struggling to get everything done, but still pushing through to reach the end goal despite feeling exhausted and overwhelmed. Experiencing stress and pressure from having too much on your plate, but seeing the finish line in sight and making that last big push to complete things, even if it requires putting in more effort than you feel capable of. Ultimate achievement and success, but at a steep cost.`
      },
      reversed: {
        general: "Doing it all, carrying the burden, delegation, release",
        past: "You released burdens that weren't yours",
        present: "It's time to delegate and lighten your load",
        future: "Relief from burdens is near",

        full: `Inability to delegate, overstressed, burnt out. Refusing to share your burdens with others, insisting on taking on more than you can handle alone. Not setting healthy boundaries or limits, leading to collapse under the weight of your responsibilities. Feeling exhausted, overwhelmed and ready to give up from pushing yourself too hard for too long without rest. Reaching a breaking point where you can no longer cope with the pressure. Needing to put some burdens down and ask for help before you crumble completely.`
      }
    }
  },
  {
    name: "Page of Wands",
    cardName: "wands_page",
    arcana: "minor",
    suit: "wands",
    classicDesign: `A well-dressed young man is boldly holding a stick standing on a barren land. His shirt is made in a salamander like pattern which is a symbol of transformation from bad to good.`,

    retroDeckDesign: `The Page of Wands represents youthful energy, enthusiasm, adventure, and fearless exploration of new ideas. It's about raw passion and taking bold action without overthinking, embodying that pure, untamed creative spark that comes from believing you can do anything.

Ultimate Baseball Kid captures this! This was one of my favorite Yu-Gi-Oh! cards as a kid, one of the last ones I bought before I stopped playing altogether. There's something so wonderfully reckless about this card's energy: a kid with a massive baseball bat, ready to swing with everything they've got. The fact that it gains 1000 ATK for every fire monster on your field? That's pure escalating enthusiasm, getting stronger and bolder the more you commit to the fire attribute strategy. That's what the Page of Wands is about: diving headfirst into what excites you and building momentum through sheer passion.

The design shows that moment of pure confidence before taking a swing, bat raised high, ready to knock it out of the park. It's not about careful strategy or measured tactics; it's about that fearless "I'm going for it!" energy that defines youth and new beginnings. Just like when I used to play this card without worrying about optimal deck builds or competitive meta, just pure fun and excitement at what might happen next.`,


    meanings: {
      upright: {
        general: "Inspiration, ideas, discovery, limitless potential, free spirit",
        past: "Youthful enthusiasm sparked new interests",
        present: "Explore new ideas with enthusiasm",
        future: "Good news or exciting opportunities approach",
        full: `A well-dressed young man is boldly holding a stick standing on a barren land. His shirt is made in a salamander like pattern which is a symbol of transformation from bad to good.`
      },
      reversed: {
        general: "Newly formed ideas, redirecting energy, self-limiting beliefs",
        past: "Lack of direction scattered your energy",
        present: "You're struggling to focus your enthusiasm",
        future: "Develop your ideas before sharing them",
        full: `This person may feel uninspired or lack the enthusiasm they once had, possibly questioning their own desires and motivations regarding your connection. They might be grappling with self-doubt or feeling overwhelmed by external pressures, leading them to withdraw emotionally rather than engage fully.With regard to your own feelings, this card suggests that you could be experiencing restlessness or frustration.`
      }
    }
  },
  {
    name: "Knight of Wands",
    cardName: "wands_knight",
    arcana: "minor",
    suit: "wands",
    classicDesign: `The Knight of Wands is seen on his horse that is reared up and ready for action. Judging from the knight’s clothes and armor, as well as his horse, he is prepared for what’s ahead.`,

    retroDeckDesign: `The Knight of Wands embodies pure action: passion, adventure, impulsiveness, and charging forward with fiery determination. This is someone who doesn't just have an idea, they're already halfway across the battlefield making it happen, consequences be damned.

So naturally, I drew a warrior on horseback, spear raised high against a blazing background, mid-charge through what's clearly a battleground. The horned helmet adds that touch of fearsome energy, while the flames surrounding the scene capture the element of wands: fire, intensity, unstoppable momentum. This isn't someone carefully planning their next move, they're already IN the move, and everyone else better keep up or get out of the way.

I kept the same design approach as the other mounted court cards for consistency, but this one really leans into that chaotic, passionate energy. The upward-pointed spear symbolizes ambition and forward direction, while the rearing horse shows barely-contained power ready to explode into action. It's all about that moment right before impact, where everything is energy and motion and absolute confidence.`,


    meanings: {
      upright: {
        general: "Energy, passion, inspired action, adventure, impulsiveness",
        past: "Passionate pursuit drove your actions",
        present: "Take bold action toward your goals",
        future: "An adventurous journey awaits",
        full: `The Knight of Wands is seen on his horse that is reared up and ready for action. Judging from the knight’s clothes and armor, as well as his horse, he is prepared for what’s ahead.`
      },
      reversed: {
        general: "Passion project, haste, scattered energy, delays",
        past: "Impulsiveness led to hasty mistakes",
        present: "Your energy is scattered and unfocused",
        future: "Slow down to avoid burnout",
        full: `reversed knight of wands can mean that you are directionless in your career. Unmoored,  you might be bouncing from job to job without considering what you want and how you need to get there.`
      }
    }
  },
  {
    name: "Queen of Wands",
    cardName: "wands_queen",
    arcana: "minor",
    suit: "wands",
    classicDesign: `The image depicted in the Queen of Wand shows a queen sitting proudly on a throne while facing forwards which is a clear symbol of strength and fire. She is holding a sunflower in her left hand, and the image of the sunflowers are also carved on the throne - meaning happiness, satisfaction, and fertility.`,

    retroDeckDesign: `The Queen of Wands represents confidence, charisma, determination, and fierce independence. She's bold, passionate, and commands attention naturally. She sits on her throne with unwavering self-assurance, a natural leader who inspires others through pure force of personality and creative vision.

For this design, I kept the same throne and fiery scenery as the King of Wands, because consistency matters! All four queens share a similar compositional approach with their respective kings, sitting in their domain with their suit's symbol prominently displayed. The flames roaring at the base of the throne capture that passionate, unstoppable energy the Queen of Wands embodies, while the black cat (a classic symbol in traditional tarot) adds that touch of mystery and independence.

The radiating wands behind her form a powerful mandala pattern, emphasizing how her influence spreads outward in all directions. She doesn't just hold power, she *radiates* it. The warm color palette of reds, oranges, and golds reinforces the fire element, that creative spark and magnetic personality that makes the Queen of Wands impossible to ignore.`,


    meanings: {
      upright: {
        general: "Courage, confidence, independence, social butterfly, determination",
        past: "Confidence and charisma served you well",
        present: "Embrace your power and authenticity",
        future: "Your confidence will attract success",
        full: `The image depicted in the Queen of Wand shows a queen sitting proudly on a throne while facing forwards which is a clear symbol of strength and fire. She is holding a sunflower in her left hand, and the image of the sunflowers are also carved on the throne - meaning happiness, satisfaction, and fertility.`
      },
      reversed: {
        general: "Self-respect, self-confidence, introverted, re-establish sense of self",
        past: "Insecurity undermined your efforts",
        present: "Rebuild your confidence and self-worth",
        future: "Focus on self-development",
        full: `when reversed, shows a lack of professional enthusiasm. You might be drained or unwilling to take on new tasks.`
      }
    }
  },
  {
    name: "King of Wands",
    cardName: "wands_king",
    arcana: "minor",
    suit: "wands",
    classicDesign: `The King of Wands depicts a man who has in his hands a blossoming wand, which is set to represent creativity and life's passion. His throne, as well as his cape, are decorated with the salamander and the lion, which are symbols of fire and strength.`,

    retroDeckDesign: `The King of Wands sits upon his throne in a realm of flames, commanding the element of fire itself. Following the same compositional approach as the other court cards, this design places the figure front and center, but here the throne is backed by wands driven into the ground like stakes claiming territory, a declaration of dominance and authority over the suit's domain.

Fire represents passion, vision, and the raw energy of creation and destruction. This king doesn't just hold a wand, he's surrounded by them, his throne literally planted among the tools of his power. The flames licking at the bottom of the card aren't a threat; they're his environment, the natural habitat of someone who transforms vision into reality through sheer force of will. Where others might see chaos in the inferno, the King of Wands sees opportunity, fuel, the very substance of leadership and entrepreneurial spirit.

The throne's construction from wands creates this sense of earned authority, not inherited, but claimed. Each wand driven into the ground is a conquest, a project completed, a vision manifested. The fiery background pulses with that restless, ambitious energy the King of Wands embodies: always moving, always building, never content to simply maintain what already exists.`,


    meanings: {
      upright: {
        general: "Natural-born leader, vision, entrepreneur, honour",
        past: "Strong leadership brought success",
        present: "Lead with vision and integrity",
        future: "Step into a leadership role",
        full: `The King of Wands depicts a man who has in his hands a blossoming wand, which is set to represent creativity and life's passion. His throne, as well as his cape, are decorated with the salamander and the lion, which are symbols of fire and strength.`
      },
      reversed: {
        general: "Impulsiveness, haste, ruthless, high expectations",
        past: "Aggressive leadership caused problems",
        present: "You're being too forceful or impulsive",
        future: "Temper your ambition with wisdom",
        full: `They might feel overwhelmed by their emotions and struggle to express themselves clearly. Their passion could be misdirected, leading to feelings of inadequacy or insecurity regarding your connection.`
      }
    }
  },

  // MINOR ARCANA - CUPS (14 cards)
  {
    name: "Ace of Cups",
    cardName: "cups_ace",
    arcana: "minor",
    suit: "cups",
    classicDesign: `In the Ace of Cups card, there is a hand emanating from the clouds holding out a cup, as if in a offer to the querent to take a drink. This cup is overflowing with sparkling water which symbolizes pure and pristine emotion.`,
    retroDeckDesign: `I wanted to keep this one classic, so I designed a winged cup as the centerpiece. The wings symbolize the spiritual and transcendent nature of emotion, how feelings can lift us up and carry us beyond ourselves. Water flows from the cup, because this ace is all about abundance, emotions that can't be contained, connections that overflow. The design is simple but powerful, letting the symbolism speak for itself without getting too busy.The Ace of Cups is foundational, the pure essence of its suit, so having a more traditional symbolic approach just made sense. Sometimes the classics work because they *work*, you know?`,

    meanings: {
      upright: {
        general: "Love, new relationships, compassion, creativity",
        past: "New love or emotional connection blessed you",
        present: "Your heart is open to new emotional experiences",
        future: "New love or deep emotional fulfillment approaches",

        full: `In the Ace of Cups card, there is a hand emanating from the clouds holding out a cup, as if in a offer to the querent to take a drink. This cup is overflowing with sparkling water which symbolizes pure and pristine emotion.`
      },
      reversed: {
        general: "Self-love, intuition, repressed emotions",
        past: "Emotional blockages prevented connection",
        present: "Focus on self-love and healing",
        future: "Release emotional baggage to receive love",

        full: `This may have stemmed from an argument or even a break up, leaving you to feel alone and vulnerable. This card can also simply mean feeling a bit somber about your current relationship, or perhaps having a temporary loss of faith.`
      }
    }
  },
  {
    name: "Two of Cups",
    cardName: "cups_two",
    arcana: "minor",
    suit: "cups",
    classicDesign: `This card shows an image of a man and a woman that are exchanging their cups in a ceremony. There is the symbol of Hermes’ caduceus in between which is often related to negotiation, trade, cosmic energy, protection, proper conduct, and duality.`,

    retroDeckDesign: `The Two of Cups represents partnership, mutual attraction, and the beautiful chemistry between two people. It's about connection, unity, and that spark of recognition when you meet someone who just *gets* you. Think romantic relationships, close friendships, or any bond built on genuine emotional exchange and respect.

I went for a classic date night scene: two people sharing drinks, leaning in close, eyes locked in conversation. There's something intimate about sharing a drink with someone, that moment where you're both present, engaged, and the rest of the world fades away. The starry background adds a touch of magic to the moment, because isn't that what connection feels like? Like the universe aligned just right?

The composition keeps them balanced and equal, neither dominating the space, which the Two of Cups is about: balanced partnership, give and take, mutual respect. They're mirroring each other's energy, both invested in this moment they're creating together. Sometimes the most powerful magic is just two people genuinely enjoying each other's company.`,


    meanings: {
      upright: {
        general: "Unified love, partnership, mutual attraction",
        past: "A meaningful partnership formed",
        present: "You're experiencing harmonious connection",
        future: "A significant partnership is forming",
        full: `This card shows an image of a man and a woman that are exchanging their cups in a ceremony. There is the symbol of Hermes’ caduceus in between which is often related to negotiation, trade, cosmic energy, protection, proper conduct, and duality.`
      },
      reversed: {
        general: "Self-love, break-ups, disharmony, distrust",
        past: "A relationship ended or became imbalanced",
        present: "There's tension in your partnerships",
        future: "Address relationship issues or risk separation",
        full: `when the reversed 2 of Cups card shows up in a love tarot reading. Either the two of you are becoming too co-dependent on each other, unable to develop each person’s unique talents, or the balance between two partners can be upset with uneven power dynamics.`
      }
    }
  },
  {
    name: "Three of Cups",
    cardName: "cups_three",
    arcana: "minor",
    suit: "cups",
    classicDesign: `Good times are in the air, for the three ladies have wreaths made of flowers in their hair. Wreaths are often associated with success and victory, so their happiness is well deserved.`,

    retroDeckDesign: `The Three of Cups represents celebration, friendship, community, and joyful connections. It's about finding your chosen family, those bonds that transcend blood and formality. In traditional depictions, three figures raise their cups in a toast, celebrating unity and mutual support.

I had to recreate *that* scene from One Piece: young Ace, Sabo, and Luffy sharing sake cups to officially become brothers. This moment is the very essence of chosen family, three kids who found each other and decided "we're brothers now, and nothing will ever change that." They're not related by blood, but their bond becomes stronger than any biological connection could be. The cups they share aren't just for celebration, they're a sacred oath, a promise that they'll always have each other's backs.

The composition captures that circular unity, three hands reaching toward cups on a shared table, equal and together. It's informal, intimate, and pure. These kids didn't need a ceremony or official recognition, just sake cups and the determination to make their own family. That's the Three of Cups energy: authentic connection, chosen bonds, and the kind of celebration that changes your life forever.`,


    meanings: {
      upright: {
        general: "Celebration, friendship, creativity, collaborations",
        past: "Joy and friendship enriched your life",
        present: "Celebrate with friends and loved ones",
        future: "Social gatherings and celebrations ahead",
        full: `Good times are in the air, for the three ladies have wreaths made of flowers in their hair. Wreaths are often associated with success and victory, so their happiness is well deserved.`
      },
      reversed: {
        general: "Independence, alone time, hardcore partying, 'three's a crowd'",
        past: "Social conflicts or overindulgence occurred",
        present: "You need time alone or are feeling excluded",
        future: "Balance social time with solitude",
        full: `reversed, it means that you may have no time to socialize or go out with friends. You may be too busy with school or work that you can’t spare some time to have fun.`
      }
    }
  },
  {
    name: "Four of Cups",
    cardName: "cups_four",
    arcana: "minor",
    suit: "cups",
    classicDesign: `The Four of Cups displays a young man sitting under a tree on a mountaintop, far from others. He seems to be in contemplation and meditation.`,

    retroDeckDesign: `The Four of Cups represents contemplation, apathy, and withdrawn introspection, that moment when you're so deep in meditation (or maybe just in your feelings) that you miss opportunities literally sitting right in front of you. The card warns against being too absorbed in your inner world to notice what the universe is offering.

Piccolo meditating by a river is just *perfect* for this. Here's a character who literally goes off alone to meditate and train in isolation, someone who's mastered the art of turning inward. The four cups sit across the water from him, close enough to reach, but he's completely absorbed in his meditation, unaware or uninterested in what's being presented. That physical separation of the river mirrors the emotional distance the card represents.

I love how this captures both sides of the card's meaning: Piccolo's meditation shows genuine spiritual depth and the value of introspection, but it also hints at that stubborn Namekian tendency to isolate himself. Sometimes you gotta stop meditating and look at what's actually in front of you. The composition puts us on the side with the cups, as if we're trying to get his attention across that water, but he's just... sitting there. Classic Four of Cups energy.`,


    meanings: {
      upright: {
        general: "Meditation, contemplation, apathy, reevaluation",
        past: "Discontent led to introspection",
        present: "You're feeling apathetic or uninspired",
        future: "Look beyond current options for new opportunities",
        full: `The Four of Cups displays a young man sitting under a tree on a mountaintop, far from others. He seems to be in contemplation and meditation.`
      },
      reversed: {
        general: "Retreat, withdrawal, checking in for alignment",
        past: "You withdrew to find clarity",
        present: "You're emerging from a period of introspection",
        future: "New perspectives will revitalize you",
        full: `You may find yourself more open to new experiences, relationships, or perspectives. This card signifies a time to break free from the cycle of stagnation and actively seek out opportunities for personal growth and fulfillment.`
      }
    }
  },
  {
    name: "Five of Cups",
    cardName: "cups_five",
    arcana: "minor",
    suit: "cups",
    classicDesign: `There are certain Tarot cards whose imagery immediately conjure up negative emotions, and the Five of Cups carries such weight. This is a card which signifies loss as well as the painful challenges which stem from that particular loss.`,

    retroDeckDesign: `The Five of Cups represents loss, grief, regret, and dwelling on what's been spilled rather than seeing what remains. It's about that crushing moment when you realize you've been deceived, when your trust has been shattered, and all you can do is focus on the emptiness left behind.

Sanji's moment of heartbreak in Whole Cake Island captures this. He's standing in the rain, cape soaked, as he overhears Pudding, the woman he was ready to marry, the one bright spot in his forced arrangement, mocking him, revealing her true cruel nature and how easily she manipulated his feelings. The five cups at his feet fill with rain, literal vessels catching his tears and the storm around him. He's consumed by what he's lost, unable to see past this moment of devastation.

The rain adds another layer to the traditional card design. In the Rider-Waite version, the figure is cloaked and hunched over spilled cups, unable to see the two cups still standing behind them. Here, Sanji is drenched in his grief, the storm reflecting his inner turmoil, each cup filling with the same rain that mirrors his tears. It's that uniquely Sanji blend of romantic tragedy, the man who falls hardest, hurts deepest, but will eventually stand back up and keep moving forward.`,


    meanings: {
      upright: {
        general: "Regret, failure, disappointment, pessimism",
        past: "Loss or disappointment affected you deeply",
        present: "You're focused on what went wrong",
        future: "Accept loss and look toward what remains",
        full: `There are certain Tarot cards whose imagery immediately conjure up negative emotions, and the Five of Cups carries such weight. This is a card which signifies loss as well as the painful challenges which stem from that particular loss.`
      },
      reversed: {
        general: "Personal setbacks, self-forgiveness, moving on",
        past: "You overcame grief and moved forward",
        present: "You're beginning to heal and find acceptance",
        future: "Emotional healing and recovery ahead",
        full: `when the reversed 5 of Cups appears in a love tarot reading. This really is the card of moving on, of letting go of past grief and suffering.`
      }
    }
  },
  {
    name: "Six of Cups",
    cardName: "cups_six",
    arcana: "minor",
    suit: "cups",
    classicDesign: `The Six of Cups symbolize the joy of nostalgia, the comfort of home and childhood innocence. In the card itself, there are six cups filled with white flowers.`,

    retroDeckDesign: `The Six of Cups represents nostalgia, childhood memories, innocence, and the simple joys of the past. It's about those moments when life felt uncomplicated, when happiness didn't require much, just the right company, the right game, and time to enjoy it all.

This design captures that perfectly: six red solo cups scattered on a wooden floor, a GameCube sitting idle, and a TV screen showing Sneakbit (my game, available on Steam, App Store and Play Store, shameless plug!). It's a snapshot of those childhood afternoons when this was all you needed. No responsibilities, no stress, just you, your friends, some snacks, and a game that would keep you entertained for hours. The composition feels lived-in, like you just walked into someone's basement hangout from the early 2000s.

I wanted to evoke that specific kind of nostalgia, not just "the past," but *your* past, those formative years when gaming meant something different. When you'd gather around a CRT TV, pass controllers around, and make memories that still warm your heart today. The Six of Cups is about revisiting that innocence and joy, and sometimes, that means remembering the simple setup that made it all possible.`,


    meanings: {
      upright: {
        general: "Revisiting the past, childhood memories, innocence, joy",
        past: "Nostalgia or past connections influenced you",
        present: "The past is calling to you",
        future: "A reunion or nostalgic experience awaits",
        full: `The Six of Cups symbolize the joy of nostalgia, the comfort of home and childhood innocence. In the card itself, there are six cups filled with white flowers.`
      },
      reversed: {
        general: "Living in the past, forgiveness, lacking playfulness",
        past: "You were stuck in the past",
        present: "Release the past and embrace the present",
        future: "Let go of old patterns to move forward",
        full: `reversed can mean that you are clinging to the past. You should explore your memories, but you should not allow yourself to remain there.`
      }
    }
  },
  {
    name: "Seven of Cups",
    cardName: "cups_seven",
    arcana: "minor",
    suit: "cups",
    classicDesign: `The Seven of Cups symbolizes imagination, choice, wishful thinking, illusion and fantasy. The card shows person with their back turned towards us, contemplating 7 images that are creeping out of the cups, all of which are floating in the clouds.`,

    retroDeckDesign: `The Seven of Cups represents choices, illusions, wishful thinking, and fantasies, often an overwhelming array of options where not everything is as valuable or attainable as it seems. When you're presented with too many tempting possibilities, how do you know which ones are real and which are just mirages?

I decided to fill each cup with fundamental human desires: money for wealth and security, a brain for knowledge and intelligence, a Sharingan for supernatural power, a Dragon Ball and Poké Ball representing two flavors of adventure (one with a clear objective, the other for the pure joy of wandering), food for pleasure and sustenance, and a heart for love and connection. These are universal temptations that appear across every narrative, every journey, every hero's path.

The beauty of the Seven of Cups is that it doesn't tell you which choice is right or wrong, it just reminds you that when faced with so many glittering possibilities, some might be illusions, some might lead nowhere, and choosing everything means choosing nothing. Which cup would you reach for first?`,


    meanings: {
      upright: {
        general: "Opportunities, choices, wishful thinking, illusion",
        past: "Many options led to confusion",
        present: "You have many choices but lack clarity",
        future: "Discernment is needed among many options",
        full: `The Seven of Cups symbolizes imagination, choice, wishful thinking, illusion and fantasy. The card shows person with their back turned towards us, contemplating 7 images that are creeping out of the cups, all of which are floating in the clouds.`
      },
      reversed: {
        general: "Alignment, personal values, overwhelmed by choices",
        past: "Illusions were shattered, revealing truth",
        present: "Clarity is emerging from confusion",
        future: "Make grounded, realistic choices",
        full: `reversed seven of cups can have several conflicting meanings. You’ll need to take a closer look at your circumstances to understand which apply to you.`
      }
    }
  },
  {
    name: "Eight of Cups",
    cardName: "cups_eight",
    arcana: "minor",
    suit: "cups",
    classicDesign: `In the Eight of Cups, we are confronted with the moment of transition. We see a cloaked figure taking off to a barren land leaving behind eight golden cups.`,

    retroDeckDesign: `The Eight of Cups represents leaving behind what no longer serves you, walking away from material comfort or emotional situations to seek deeper meaning and spiritual fulfillment. It's about recognizing when something that once brought satisfaction has become empty, and having the courage to journey into the unknown.

In this card design, like a few others, we follow the journey of a hero. In this scene we can see him leaving home, walking away from riches and comfort, symbolized by the eight golden cups carefully arranged on the ground. The lush landscape and distant horizons ahead represent the uncertain but spiritually rewarding path he's chosen. Behind him lies everything material, everything safe and known, but something deeper calls him forward.

The composition captures that bittersweet moment of departure: the cups are perfectly arranged, nothing is broken or wrong with them, they're just... not enough anymore. The hero's small figure against the vast landscape emphasizes both the courage this decision takes and the expansive possibilities that await. Sometimes leaving behind "good enough" to search for something more meaningful is the hardest journey of all.`,


    meanings: {
      upright: {
        general: "Disappointment, abandonment, withdrawal, escapism",
        past: "You walked away from an unfulfilling situation",
        present: "It's time to leave something behind",
        future: "A journey of self-discovery awaits",
        full: `In the Eight of Cups, we are confronted with the moment of transition. We see a cloaked figure taking off to a barren land leaving behind eight golden cups.`
      },
      reversed: {
        general: "Trying one more time, indecision, aimless drifting",
        past: "Fear prevented necessary change",
        present: "You're hesitating to move on",
        future: "Commit to change or accept stagnation",
        full: `The appearance of the reversed Eight of Cups points to a sense of confusion and reluctance within them. They may be grappling with their emotions, feeling torn between moving on and holding onto what they have with you.`
      }
    }
  },
  {
    name: "Nine of Cups",
    cardName: "cups_nine",
    arcana: "minor",
    suit: "cups",
    classicDesign: `In this card, a middle-aged man is sitting on a wooden bench while his arms are crossed, and his face are showing quite a level of contentment. He is dressed elegantly and has the look of the true satisfaction.`,

    retroDeckDesign: `The Nine of Cups is often called "the wish card" – it represents contentment, satisfaction, emotional fulfillment, and having your desires met. It's about that moment when you can sit back, look at what you've achieved, and just feel... pleased with yourself.

For this design, I went more traditional! A satisfied figure sits comfortably on his patio, surrounded by lush vines (because of course there are vines, they're becoming my signature at this point). Behind him, nine golden cups are displayed in an arc, all filled to the brim – physical proof of abundance and emotional wealth. His posture says it all: arms crossed, relaxed, that subtle pleased expression of someone who's got everything they wanted.

I love how simple this one is compared to some of the other cards. No dramatic lightning strikes, no cosmic transformations, no death gods – just a guy, his cups, and pure contentment. Sometimes the best representation of a card's meaning is the most straightforward one. He's not showing off, he's not striving for more, he's just... satisfied. That's the whole vibe of the Nine of Cups, and honestly? Goals.`,


    meanings: {
      upright: {
        general: "Contentment, satisfaction, gratitude, wish come true",
        past: "Your wishes were fulfilled",
        present: "You're experiencing emotional satisfaction",
        future: "Your dreams will come true",
        full: `In this card, a middle-aged man is sitting on a wooden bench while his arms are crossed, and his face are showing quite a level of contentment. He is dressed elegantly and has the look of the true satisfaction.`
      },
      reversed: {
        general: "Inner happiness, materialism, dissatisfaction, indulgence",
        past: "Material success didn't bring happiness",
        present: "You're seeking fulfillment in the wrong places",
        future: "True happiness comes from within",
        full: `The arrival of the reversed Nine of Cups suggests that their emotions are clouded by disappointment and unmet expectations. They may have initially felt a strong attraction or connection, but now they find themselves questioning the depth of those feelings.`
      }
    }
  },
  {
    name: "Ten of Cups",
    cardName: "cups_ten",
    arcana: "minor",
    suit: "cups",
    classicDesign: `On the Ten of Cups, there is a couple holding each other while facing a beautiful house and a green garden. Beside them, there are two children playing joyously.`,

    retroDeckDesign: `The Ten of Cups represents ultimate emotional fulfillment, family harmony, joy, and the realization of dreams, basically, the "happily ever after" moment where everything just clicks into place. It's about reaching a state of complete contentment, surrounded by love and peace.

So what better way to capture this than a serene beach scene at sunset? Ten golden cups stand prominently in the foreground, while behind them stretches an idyllic coastline that extends peacefully toward the horizon. In the middle distance, a couple stands together near the water's edge, small but present, gazing out at the endless possibility before them. They're positioned a couple meters below our viewpoint, as if we're looking down at this perfect moment from a slight elevation, maybe we're standing on the shore ourselves, witnessing their joy.

The composition creates this beautiful sense of perspective: the cups ground us in the present moment, the couple represents the human connection at the heart of this fulfillment, and the expansive beach stretching to the horizon symbolizes all the beautiful days still to come. It's not just about *having* happiness, it's about standing in it, surrounded by it, with endless blue skies ahead. That's the Ten of Cups energy right there.`,


    meanings: {
      upright: {
        general: "Divine love, blissful relationships, harmony, alignment",
        past: "Harmonious relationships blessed your life",
        present: "You're experiencing emotional fulfillment",
        future: "Lasting happiness and harmony ahead",
        full: `On the Ten of Cups, there is a couple holding each other while facing a beautiful house and a green garden. Beside them, there are two children playing joyously.`
      },
      reversed: {
        general: "Disconnection, misaligned values, struggling relationships",
        past: "Family or relationship discord occurred",
        present: "Your relationships feel out of alignment",
        future: "Work on relationships or accept their nature",
        full: `The atmosphere is more hostile than usual, and your colleagues may not be supportive right now. You may be left with the feeling that you don’t quite belong in this position, and your basic sense of stability and security may feel shaken.`
      }
    }
  },
  {
    name: "Page of Cups",
    cardName: "cups_page",
    arcana: "minor",
    suit: "cups",
    classicDesign: `The Page of Cups represents the unexpected inspiration that comes to us from the unconscious, perhaps in ways that we may not truly understand. In this card, a youth at the seashore wears a blue tunic adorned with floral prints, and holds a golden cup.`,

    retroDeckDesign: `The Page of Cups represents emotional curiosity, creative messages, intuition, and the beginning of emotional or artistic journeys. They're a dreamer, someone who sees magic in the ordinary and possibilities where others see limitations.

This design shows an anime-style kid sitting cross-legged in meditation, a cup placed before them. But this isn't just any cup, a koi fish leaps from it, defying the physical constraints of its container. The koi itself is rich with symbolism: in Japanese culture, it represents perseverance, transformation, and the courage to swim against the current. There's a famous legend about koi swimming upstream to become dragons, which perfectly captures the Page of Cups' journey from youthful curiosity to emotional mastery.

The child's calm, meditative pose contrasts beautifully with the dynamic energy of the leaping fish, suggesting someone who has learned to be still enough to witness magic happening. The impossible moment, a fish that shouldn't fit bursting forth with water and life, is exactly the kind of wonder the Page of Cups brings into the world. They don't question if it's real, they just believe it into existence.`,


    meanings: {
      upright: {
        general: "Creative opportunities, curiosity, possibility, new ideas",
        past: "Emotional curiosity opened new doors",
        present: "Be open to creative and emotional messages",
        future: "Good news about love or creativity coming",
        full: `The Page of Cups represents the unexpected inspiration that comes to us from the unconscious, perhaps in ways that we may not truly understand. In this card, a youth at the seashore wears a blue tunic adorned with floral prints, and holds a golden cup.`
      },
      reversed: {
        general: "New ideas, doubting intuition, emotional immaturity",
        past: "Emotional immaturity caused issues",
        present: "You're doubting your creative instincts",
        future: "Develop emotional intelligence",
        full: `in reverse, it highlights that someone close to you is wrestling with emotional immaturity or confusion. They may feel overwhelmed by their own feelings and struggle to express them clearly, leading to mixed signals or even avoidance.`
      }
    }
  },
  {
    name: "Knight of Cups",
    cardName: "cups_knight",
    arcana: "minor",
    suit: "cups",
    classicDesign: `The Knight of Cups is a card which depicts a young knight who is gloriously riding a white horse while at the same time holding a cup as if he is a messenger of a certain sort. Unlike the Knight of Wands or the Knight of Swords, this particular one isn’t charging along with his horse.`,

    retroDeckDesign: `The Knight of Cups represents romance, charm, imagination, and following your heart with passionate idealism. He's the dreamer of the court cards, moved by emotion and creative inspiration, often arriving as a messenger of love or artistic opportunity.

In this design, our knight rides his rampant horse along the shoreline at dusk, raising a beer to toast the moment. There's something beautifully carefree about this scene, the combination of a majestic steed, dramatic sunset clouds, and... a casual beer. It captures that specific energy of the Knight of Cups perfectly: grand romantic gestures mixed with genuine, unpretentious emotion. He's not holding a delicate chalice in some formal pose; he's celebrating life, love, and the journey itself.

The timing is dusk (or dawn, but dusk fits better), that liminal space between day and night, reality and dreams, perfectly embodying the Knight of Cups' tendency to live between the practical world and the realm of imagination. The horse rearing up on the beach, caught between solid ground and the vast ocean, reinforces this duality. He's literally at the threshold of the emotional depths (the sea) while still connected to earth.

All four knights in this deck share a similar design approach, creating visual cohesion across the suit while their individual details tell their unique stories. This one's about riding into the sunset (or out of the sunrise?) with your heart wide open and a drink raised high.`,


    meanings: {
      upright: {
        general: "Creativity, romance, charm, imagination, beauty",
        past: "Romance or creative pursuit inspired you",
        present: "Follow your heart and creative vision",
        future: "A romantic or creative opportunity approaches",
        full: `The Knight of Cups is a card which depicts a young knight who is gloriously riding a white horse while at the same time holding a cup as if he is a messenger of a certain sort. Unlike the Knight of Wands or the Knight of Swords, this particular one isn’t charging along with his horse.`
      },
      reversed: {
        general: "Overactive imagination, unrealistic, jealous, moody",
        past: "Unrealistic expectations led to disappointment",
        present: "You're being overly idealistic",
        future: "Ground your dreams in reality",
        full: `reversed, he can be rather passive aggressive, and full of empty promises. Being a great romantic, many of his tales and his proclamations of love can be over exaggerated.`
      }
    }
  },
  {
    name: "Queen of Cups",
    cardName: "cups_queen",
    arcana: "minor",
    suit: "cups",
    classicDesign: `The Queen of Cups rules the emotional realm. She is the woman whose throne is right on the ocean’s edge, and water is typically symbolic of the unconscious and feeling.`,

    retroDeckDesign: `The Queen of Cups sits on her underwater throne, a blonde mermaid surrounded by the treasures of the deep. The throne design mirrors her King's, maintaining visual consistency across the suit, while algae sways gently around the base and golden cups rest in the foreground. It's a scene of emotional depth, quite literally!

Mermaids are perfect for the Queen of Cups' energy: intuitive, emotionally intelligent, existing in the realm of feelings and the subconscious. Water is the element of emotion, and who better to embody emotional mastery than someone who lives completely immersed in it? The Queen of Cups represents compassion, nurturing through emotional understanding, and deep psychic sensitivity. Mermaids naturally embody these qualities, reading the currents, feels the tides, and navigates an entire world invisible to those who live above the surface.

The scattered cups in the design represent the suit's focus on emotions, relationships, and intuition, while the underwater setting emphasizes the card's connection to the subconscious mind and spiritual depths. Unlike the chaos of a storm or the mystery of dark waters, this is a calm, controlled environment, the Queen sits in her element, completely at home in emotional waters that might overwhelm others.`,


    meanings: {
      upright: {
        general: "Compassion, warmth, kindness, intuition, healer",
        past: "Emotional intelligence guided you well",
        present: "Trust your intuition and show compassion",
        future: "Emotional maturity will serve you",
        full: `The Queen of Cups rules the emotional realm. She is the woman whose throne is right on the ocean’s edge, and water is typically symbolic of the unconscious and feeling.`
      },
      reversed: {
        general: "Inner feelings, self-care, self-love, co-dependency",
        past: "Emotional overwhelm or co-dependency occurred",
        present: "You're giving too much to others",
        future: "Prioritize self-care and boundaries",
        full: `reversed means that you are not in sync with your emotions. You can also feel restricted in the expressing the way that you truly feel.`
      }
    }
  },
  {
    name: "King of Cups",
    cardName: "cups_king",
    arcana: "minor",
    suit: "cups",
    classicDesign: `The King of Cups is a card in the tarot that shows generosity, control, and emotional balance. The card itself depicts a king seated on a throne, who has an amulet that is shaped like a fish.`,

    retroDeckDesign: `The King of Cups represents emotional maturity, compassion, and wisdom gained through deep understanding of feelings. He's the master of the emotional realm, calm on the surface while holding vast depths beneath, able to counsel others while maintaining perfect inner balance.

For this design, I went with a merman king holding his arms aloft in an underwater throne room, surrounded by golden cups and swaying algae. The pose is inspired by Kami's Predecessor from DBZ (all four Kings share variations of this robed figure design), while the throne itself echoes One Piece's Empty Throne, because what says "emotional depth" better than literally being submerged underwater? 

The mermaid tail was a natural choice: creatures of the deep who navigate between two worlds, just like the King of Cups bridges emotion and reason. The cups scattered around him represent the mastery of feelings, not hoarding them or letting them overflow, but understanding when to pour out compassion and when to hold steady. The algae adds that sense of an established kingdom, ancient and patient, while those golden cups catch whatever light filters down from above. It's about being completely in your element (literally!) while maintaining that regal composure.`,


    meanings: {
      upright: {
        general: "Emotional balance, control, generosity, diplomatic",
        past: "Emotional maturity brought stability",
        present: "Balance your emotions with wisdom",
        future: "Emotional mastery will guide you",
        full: `The King of Cups is a card in the tarot that shows generosity, control, and emotional balance. The card itself depicts a king seated on a throne, who has an amulet that is shaped like a fish.`
      },
      reversed: {
        general: "Self-compassion, inner feelings, moodiness, emotionally manipulative",
        past: "Emotional manipulation or moodiness caused problems",
        present: "You're struggling with emotional control",
        future: "Develop emotional self-awareness",
        full: `The reversed King of Cups suggests that there is a character in your life that is depicted by this card, whether a part of you or someone else. While he is normally very in touch and controlled with his emotions, he has lately become manipulative and emotionally controlling.


================================================================================
SUIT OF SWORDS (14 Cards)
================================================================================`
      }
    }
  },

  // MINOR ARCANA - SWORDS (14 cards)
  {
    name: "Ace of Swords",
    cardName: "swords_ace",
    arcana: "minor",
    suit: "swords",
    classicDesign: `The Ace of Swords shows a hand emerging from the clouds wielding a double-edged sword. This double edged sword carries a golden crown while being encircled by a wreath.`,
    retroDeckDesign: `The Ace of Swords represents clarity, breakthrough moments, mental force, truth cutting through confusion, and the raw power of intellect unshackled. It's about that decisive instant when everything suddenly makes sense, when you see the solution with crystal clarity, or when you finally speak the truth that needed to be said.

For this design, I went simple but dramatic: a golden winged sword shooting upward, viewed from below to emphasize its power and majesty. The low angle makes you feel small in comparison, like you're witnessing something divine descending from the heavens (or ascending toward them?). The wings aren't just decorative, they represent how ideas and truth can soar, how a single clear thought can elevate everything.

The sword design takes inspiration from Excalibur in Sword Art Online, which works perfectly since that weapon literally represents the pinnacle of what can be achieved in its world, ultimate power achieved through clarity of purpose and unwavering will. Plus, let's be honest, it just looks *cool* in pixel art form.

I kept the composition clean compared to some of my other cards because the Ace of Swords *is* that moment of clarity, no clutter, no confusion, just pure, concentrated understanding piercing through the clouds of doubt.`,

    meanings: {
      upright: {
        general: "Breakthroughs, new ideas, mental clarity, success",
        past: "A moment of clarity changed everything",
        present: "New ideas and mental breakthroughs are occurring",
        future: "A flash of insight will show the way",

        full: `The Ace of Swords shows a hand emerging from the clouds wielding a double-edged sword. This double edged sword carries a golden crown while being encircled by a wreath.`
      },
      reversed: {
        general: "Inner clarity, re-thinking an idea, clouded judgment",
        past: "Confusion or poor judgment led astray",
        present: "Your thinking is clouded or confused",
        future: "Seek clarity before making decisions",

        full: `The arrival of the reversed Ace of Swords suggests a sense of confusion and miscommunication. This person may be struggling with their thoughts and feelings, leading to uncertainty about their emotions toward you.`
      }
    }
  },
  {
    name: "Two of Swords",
    cardName: "swords_two",
    arcana: "minor",
    suit: "swords",
    classicDesign: `The Two of Swords symbolizes the confusion we face when we are forced to make difficult choices. In the Two of Swords card, there is a seated woman that is blindfolded while holding a sword in each of her hands.`,

    retroDeckDesign: `The Two of Swords traditionally represents difficult decisions, stalemate, and being at a crossroads where you must choose between two equally weighted options. It's about that moment of paralysis when both paths seem impossible to take.

But here's the thing: this is also Shanks' Jolly Roger. The skull with the scarred left eye, two swords crossed behind it, tongue sticking out in that iconic pirate grin. Red-Haired Shanks, who gave up his arm for Luffy's future, who chose to let Blackbeard escape rather than pursue revenge, who split the heavens with a single clash against Whitebeard. Every major moment in his story involves impossible choices with massive consequences.

I'm really proud of the shading work on this one! The skull has actual depth and dimension, and those long swords create this perfect X composition that frames everything. Adding the tongue gave me that extra splash of red I needed (matching the head scars) while keeping that playful pirate energy alive. Because even when you're stuck between two impossible choices, sometimes you just gotta stick your tongue out at fate and pick one.`,


    meanings: {
      upright: {
        general: "Difficult decisions, weighing options, an impasse, avoidance",
        past: "Indecision or avoidance delayed progress",
        present: "You're at a crossroads and must choose",
        future: "A difficult choice awaits",
        full: `The Two of Swords symbolizes the confusion we face when we are forced to make difficult choices. In the Two of Swords card, there is a seated woman that is blindfolded while holding a sword in each of her hands.`
      },
      reversed: {
        general: "Indecision, confusion, information overload, stalemate",
        past: "You broke through a stalemate",
        present: "Clarity is emerging from confusion",
        future: "The answer will reveal itself",
        full: `the presence of the reversed Two of Swords, it reveals a sense of confusion and indecision. This person may be struggling to confront their emotions, feeling torn between attraction and uncertainty.`
      }
    }
  },
  {
    name: "Three of Swords",
    cardName: "swords_three",
    arcana: "minor",
    suit: "swords",
    classicDesign: `One of the most iconic images in the tarot, the Three of Swords displays a floating heart that is pierced by three swords. There is also a heavy downpour in the background.`,

    retroDeckDesign: `The Three of Swords traditionally represents heartbreak, grief, painful truth, and emotional suffering. It's one of the most literally interpreted cards in the entire tarot deck, a heart pierced by swords. So I went for it.

No characters, no references, no clever reinterpretations. Just a human heart stabbed by three swords. Sometimes the most direct approach is the most powerful one, especially when depicting something as universally understood as heartbreak. The anatomical heart makes it visceral and real, this isn't romantic symbolism, it's the actual organ that keeps you alive, being wounded. 

The pixel art makes the blood and muscle look almost digital, like corruption spreading through data. The swords pierce from different angles, showing how pain rarely comes from just one source, it's the accumulation of cuts that really gets you. The dark purple halftone background creates this suffocating atmosphere that perfectly captures that feeling when grief just... surrounds everything.

I kept the composition clean and centered because when you're in that kind of pain, everything else fades away. It's just you and the hurt, front and center, impossible to ignore.`,


    meanings: {
      upright: {
        general: "Heartbreak, emotional pain, sorrow, grief, hurt",
        past: "Painful experiences wounded you",
        present: "You're experiencing heartbreak or sorrow",
        future: "Emotional pain is coming but will lead to healing",
        full: `One of the most iconic images in the tarot, the Three of Swords displays a floating heart that is pierced by three swords. There is also a heavy downpour in the background.`
      },
      reversed: {
        general: "Negative self-talk, releasing pain, optimism, forgiveness",
        past: "You began healing from past wounds",
        present: "You're recovering from heartbreak",
        future: "Healing and forgiveness are near",
        full: `The arrival of the reversed Three of Swords suggests a powerful moment of healing and release from past pain. This person may be moving beyond heartbreak or disappointment, allowing themselves to open up emotionally.`
      }
    }
  },
  {
    name: "Four of Swords",
    cardName: "swords_four",
    arcana: "minor",
    suit: "swords",
    classicDesign: `There is a quiet stillness that is present in the Four of Swords, a sense of calm peace that is contrasted so deeply with the pain in the Three of Swords. Here, in a church, there is a carving of a knight that lies upon a tomb with three swords hanging above him while the fourth one lies beneath him.`,

    retroDeckDesign: `The Four of Swords represents rest, recovery, and contemplation after battle. It's about taking necessary time to heal, both physically and mentally, before the next challenge arrives. A pause, not an ending.

This design shows a fallen knight's tomb, with four swords mounted on the wall above as a memorial. The composition mirrors the classic Rider-Waite imagery where a knight lies in repose with swords displayed nearby, but here the scene is more solemn, more final in its presentation. Yet there's something peaceful about it too, the wreath of green vines framing the scene suggests life continuing, growth even in stillness, nature reclaiming what was once battlefield. 

The knight has earned their rest. The swords hang as both memorial and reminder: the battles fought, the victories won, the cost paid. It's that moment of total surrender to recovery, acknowledging that you can't keep fighting indefinitely without breaking. Sometimes the bravest thing a warrior can do is lay down and heal.`,


    meanings: {
      upright: {
        general: "Rest, relaxation, meditation, contemplation, recuperation",
        past: "Rest and recovery restored you",
        present: "Take time to rest and recharge",
        future: "A period of rest is needed",
        full: `There is a quiet stillness that is present in the Four of Swords, a sense of calm peace that is contrasted so deeply with the pain in the Three of Swords. Here, in a church, there is a carving of a knight that lies upon a tomb with three swords hanging above him while the fourth one lies beneath him.`
      },
      reversed: {
        general: "Exhaustion, burn-out, deep contemplation, stagnation",
        past: "Burnout forced you to stop",
        present: "You're emerging from rest, ready to act",
        future: "Avoid burnout by resting now",
        full: `Your heart is willing to relax, but this is not what your mind wants. You feel that you have too much that is depending on you.`
      }
    }
  },
  {
    name: "Five of Swords",
    cardName: "swords_five",
    arcana: "minor",
    suit: "swords",
    classicDesign: `The Five of Swords card depicts a young man who has a very convenient look of contempt on his face. He is looking at the enemies that he has managed to conquer.`,

    retroDeckDesign: `The Five of Swords represents defeat, betrayal, hollow victory, and winning at too great a cost. It's about conflict where someone "wins" but loses something precious in the process, leaving everyone worse off than before.

This scene depicts the death of L in Death Note. Light holds L's body in his arms and screams in pain. Partially, this scene shows real pain, Light and L have become rival-friends over their psychological cat-and-mouse game, and there's genuine shock in this moment. But under the facade, Light is happy and can barely contain himself after those first few seconds, as victory is finally his. He's won the battle. He's outsmarted the world's greatest detective.

But as we know from the series, this victory doesn't last long. Light's triumph over L marks the beginning of his downfall, not his ascension. He's won, but at what cost? The very act of defeating L sets in motion the events that will ultimately destroy him. That's the Five of Swords in its purest form: a victory so poisoned that it becomes indistinguishable from defeat. Light thinks he's holding his conquered enemy, but he's really cradling the moment his fate was sealed.`,


    meanings: {
      upright: {
        general: "Conflict, disagreements, competition, defeat, winning at all costs",
        past: "A conflict left wounds on all sides",
        present: "You're in or approaching a conflict",
        future: "Choose battles wisely; not all are worth winning",
        full: `The Five of Swords card depicts a young man who has a very convenient look of contempt on his face. He is looking at the enemies that he has managed to conquer.`
      },
      reversed: {
        general: "Reconciliation, making amends, past resentment",
        past: "You made peace after conflict",
        present: "Resolution and reconciliation are possible",
        future: "Let go of resentment to move forward",
        full: `The arrival of the reversed Five of Swords suggests a significant transformation in how someone feels about you, revealing a shift from conflict and tension towards resolution and understanding. This person is beginning to let go of past grievances or misunderstandings, feeling more inclined to seek harmony rather than engage in battles.`
      }
    }
  },
  {
    name: "Six of Swords",
    cardName: "swords_six",
    arcana: "minor",
    suit: "swords",
    classicDesign: `The image in the Six of Swords shows a woman and a child in a boat being rowed in the water to a land that is on the other side. We can gather from the images that the woman and the child are leaving something behind, as their backs are faced towards us.`,

    retroDeckDesign: `The Six of Swords represents transition, moving away from turbulent times, and a difficult but necessary journey toward calmer waters. It's about leaving behind what's hurting you, even when the path forward is uncertain and requires trust.

Bird Box's river escape scene captures this: Malorie and her children navigate dangerous waters while blindfolded, forced to trust the journey despite being unable to see what's ahead. The six swords surrounding their boat work on two levels, they're both the protection guiding them through chaos and the very real dangers that make this journey so perilous. Just like the card's meaning, it's a bittersweet passage: leaving behind horror and trauma, moving toward hope and safety, but doing so through darkness and fear.

The blindfolds are what really seal it for me. In the movie, they're literal survival tools, but they also represent the leap of faith required when making major life transitions. Sometimes you have to move forward without seeing the full picture, trusting that staying put would be worse than the uncertainty ahead.`,


    meanings: {
      upright: {
        general: "Transition, change, rite of passage, releasing baggage",
        past: "You moved on from difficult times",
        present: "You're in transition to calmer waters",
        future: "A journey toward better times awaits",
        full: `The image in the Six of Swords shows a woman and a child in a boat being rowed in the water to a land that is on the other side. We can gather from the images that the woman and the child are leaving something behind, as their backs are faced towards us.`
      },
      reversed: {
        general: "Personal transition, resistance to change, unfinished business",
        past: "Resistance prolonged difficult times",
        present: "You're struggling to let go and move on",
        future: "Release the past to move forward",
        full: `They may feel stuck or unable to move forward in their feelings for you, perhaps haunted by past experiences or unresolved issues. Their emotions are clouded by uncertainty, making it difficult for them to fully embrace what they might want from your connection.This card surfaces when it’s time to reflect on your own feelings, indicating that you might be experiencing similar turbulence.`
      }
    }
  },
  {
    name: "Seven of Swords",
    cardName: "swords_seven",
    arcana: "minor",
    suit: "swords",
    classicDesign: `In the Seven of Swords card, there is a man that is seen running away sneakily from a camp of some sort, while carrying five swords in his hands. Behind him, two other swords are on standing on the ground.`,

    retroDeckDesign: `The Seven of Swords represents stealth, strategy, deception, and getting away with something through cunning rather than confrontation. It's about acting alone, being clever, and sometimes getting in over your head by trying to carry too much at once.

Lupin III is literally the perfect embodiment of this card. Here's a master thief mid-heist, gleefully making his escape with seven swords (five stuffed in his bag, two clutched in his hands), that signature grin on his face because he's pulled off another impossible score. The card traditionally shows someone sneaking away with stolen swords, unable to carry them all, and Lupin captures that exact energy of "I'm getting away with this!" mixed with "maybe this is too much to carry."

This design captures Lupin's essence: he's not fighting anyone, he's not using brute force, he's just too clever, too quick, and having way too much fun doing what he does best. The nighttime rooftop setting reinforces the stealth aspect, while his almost comical overconfidence in carrying seven swords perfectly represents the card's warning about overreaching or acting without thinking things through completely.`,


    meanings: {
      upright: {
        general: "Betrayal, deception, getting away with something, acting strategically",
        past: "Deception or betrayal affected you",
        present: "Be cautious of deception or hidden motives",
        future: "Strategy is needed, but beware of dishonesty",
        full: `In the Seven of Swords card, there is a man that is seen running away sneakily from a camp of some sort, while carrying five swords in his hands. Behind him, two other swords are on standing on the ground.`
      },
      reversed: {
        general: "Imposter syndrome, self-deceit, keeping secrets",
        past: "You came clean or were exposed",
        present: "Honesty is needed now",
        future: "The truth will come out",
        full: `reversed can have multiple meanings depending on the context of the other cards within the reading. It can suggest firstly a need to change your approach - the tactics you've been using are not working.`
      }
    }
  },
  {
    name: "Eight of Swords",
    cardName: "swords_eight",
    arcana: "minor",
    suit: "swords",
    classicDesign: `On the Eight of Swords is a woman who is tied up and blindfolded. There are eight swords placed strategically around her in a way that restricts her movement as though she is in some kind of trap or jail.`,

    retroDeckDesign: `The Eight of Swords represents feeling trapped, restricted, or imprisoned by circumstances, but often, these limitations are more mental than physical. The card typically shows a blindfolded figure surrounded by swords, bound but not actually restrained in a way they couldn't escape if they just *looked*.

I went straight to Luffy imprisoned in Wano's Udon Prison! The design shows him as a silhouette behind eight crossed swords forming a cage, with only his eyes piercing through the darkness. It's such a perfect moment because Luffy, the embodiment of freedom itself, finds himself literally imprisoned, collared with seastone, unable to use his powers. He's trapped, but we all know it's temporary. The swords form this geometric pattern that feels both confining and almost decorative, which mirrors how the Eight of Swords is about *perceived* imprisonment.

The cool thing is Luffy doesn't stay trapped, he uses this time to train, to grow stronger, to prepare for what's coming. That's what the Eight of Swords is trying to tell you: yes, you feel stuck, but you have more agency than you think. The eyes glowing in the darkness represent that inner determination that no cage can truly contain. The liberation is coming, you just need to see past the swords blocking your vision!`,


    meanings: {
      upright: {
        general: "Negative thoughts, self-imposed restriction, imprisonment, victim mentality",
        past: "You felt trapped by circumstances",
        present: "You're limiting yourself with negative thinking",
        future: "Recognize your power to free yourself",
        full: `On the Eight of Swords is a woman who is tied up and blindfolded. There are eight swords placed strategically around her in a way that restricts her movement as though she is in some kind of trap or jail.`
      },
      reversed: {
        general: "Self-limiting beliefs, inner critic, releasing negative thoughts, open to new perspectives",
        past: "You freed yourself from mental prison",
        present: "You're breaking free from limitations",
        future: "Freedom from self-imposed restrictions ahead",
        full: `the presence of the reversed Eight of Swords, it reveals a sense of liberation and newfound clarity. This person is beginning to break free from their own mental constraints, allowing them to see your relationship in a more positive light.`
      }
    }
  },
  {
    name: "Nine of Swords",
    cardName: "swords_nine",
    arcana: "minor",
    suit: "swords",
    classicDesign: `The Nine of Swords depicts a woman that is sitting on her bed while she holds her head in her hands. It appears as though the woman has just awakened from a very bad nightmare.`,

    retroDeckDesign: `The Nine of Swords represents nightmares, anxiety, mental anguish, and overwhelming despair, those moments when your mind becomes your own prison, torturing you with thoughts you can't escape.

Ken Kaneki's transformation during his torture by Jason is perhaps the most visceral depiction of this card's meaning in modern anime. Here we see him in that brief, horrifying moment of pause during endless torture, his hair turning white from the sheer psychological trauma. Above him, nine swords hang like the bars of a cage, or the centipedes Jason forced him to count. The hands reaching upward capture that desperate, futile attempt to escape mental torment, while his exposed eye reflects the breaking point between sanity and survival.

What makes this scene perfect for the Nine of Swords is that it's about Kaneki's mind breaking under the weight of his own fears, doubts, and the impossible choice between his human and ghoul nature. The swords aren't just weapons; they're the intrusive thoughts, the nightmares, the psychological warfare that cuts deeper than any blade. This is the card of 3 AM anxiety attacks made pixel art, the moment when your mind becomes the cruelest torturer of all.`,


    meanings: {
      upright: {
        general: "Anxiety, worry, fear, depression, nightmares",
        past: "Anxiety and worry plagued you",
        present: "Your fears are overwhelming you",
        future: "Address anxieties now to prevent future suffering",
        full: `The Nine of Swords depicts a woman that is sitting on her bed while she holds her head in her hands. It appears as though the woman has just awakened from a very bad nightmare.`
      },
      reversed: {
        general: "Inner turmoil, deep-seated fears, secrets, releasing worry",
        past: "You overcame anxiety and fear",
        present: "You're beginning to release your worries",
        future: "Peace of mind is returning",
        full: `The arrival of the reversed Nine of Swords suggests that this person is beginning to release their anxieties and fears surrounding your connection. They may have previously been overwhelmed by doubts or insecurities, but now they are finding a sense of relief and clarity.`
      }
    }
  },
  {
    name: "Ten of Swords",
    cardName: "swords_ten",
    arcana: "minor",
    suit: "swords",
    classicDesign: `Another one of the most striking and ominous cards in the deck, the Ten of Swords shows a man lying flat on the ground with his face facing the dirt. He is covered with a red cloth from the chest down to his legs.`,

    retroDeckDesign: `The Ten of Swords represents rock bottom, painful endings, betrayal, and the darkest moment before dawn. It's about complete defeat, but also the promise that things literally cannot get worse, so the only way forward is up. This card shows a fallen warrior, their body pierced by ten swords under a starlit sky, the final moment of a battle lost.

What makes this design click for me is the connection to the court cards: these are the same swords we see with the Queen and King of Swords. This could be the very ground where their throne will be built. The fallen warrior's sacrifice becomes the foundation for what comes next, which perfectly captures that bittersweet transformation the Ten of Swords represents. The defeat is total, yes, but it's not meaningless.

The scattered swords standing upright in the broken ground suggest both the violence of the ending and the seeds of something new. Even in pixel art, I wanted to capture that haunting stillness, the moment where everything stops and you have to accept what's happened before you can move forward. Sometimes you need to hit the ground this hard to finally let go and start rebuilding.`,


    meanings: {
      upright: {
        general: "Painful endings, deep wounds, betrayal, loss, crisis",
        past: "A painful ending marked a low point",
        present: "You're experiencing a difficult ending",
        future: "The only way is up from here",
        full: `Another one of the most striking and ominous cards in the deck, the Ten of Swords shows a man lying flat on the ground with his face facing the dirt. He is covered with a red cloth from the chest down to his legs.`
      },
      reversed: {
        general: "Recovery, regeneration, resisting an inevitable end",
        past: "You recovered from rock bottom",
        present: "You're healing from past wounds",
        future: "Recovery and new beginnings ahead",
        full: `the reversed Ten of Swords, it suggests that this person is beginning to release their pain and disappointment. They may have felt betrayed or hurt in the past, but now they are working towards healing and moving on.`
      }
    }
  },
  {
    name: "Page of Swords",
    cardName: "swords_page",
    arcana: "minor",
    suit: "swords",
    classicDesign: `The Page of Swords card is representative of a person in one's life who shows an abundance of energy. With wind-blown trees, turbulent clouds and the their tossed hair, a youth stands proudly on a rocky precipice.`,

    retroDeckDesign: `The Page of Swords represents a curious, perceptive mind, someone eager to learn, quick-witted, and ready to test new ideas. Pages in tarot are messengers and students, and when paired with Swords (the suit of intellect and communication), you get this energetic seeker of truth who's all about mental agility and sharp observation.

For this card, I went with Tanjiro from Demon Slayer, captured mid-training on a hillside. The scene shows him practicing with his katana, dedicated and focused, embodying that student energy perfectly. Tanjiro's whole journey is about learning, adapting, and growing stronger through practice and perseverance, he's constantly absorbing new techniques, analyzing his opponents, and communicating his ideals with unwavering sincerity.

I palette-swapped the colors to better fit the tarot aesthetic while keeping that recognizable silhouette and pose. The grassy hill and open sky create this sense of freedom and possibility, like the Page is just starting their journey with endless potential ahead. Plus, there's something about a lone figure training against the elements that just screams "eager student honing their craft," which is exactly what this card is all about!`,


    meanings: {
      upright: {
        general: "New ideas, curiosity, thirst for knowledge, new ways of communicating",
        past: "Curiosity and new ideas energized you",
        present: "Explore ideas and communicate clearly",
        future: "News or new information is coming",
        full: `The Page of Swords card is representative of a person in one's life who shows an abundance of energy. With wind-blown trees, turbulent clouds and the their tossed hair, a youth stands proudly on a rocky precipice.`
      },
      reversed: {
        general: "Self-expression, all talk and no action, haphazard action, haste",
        past: "Hasty communication caused problems",
        present: "Think before you speak or act",
        future: "Develop ideas fully before sharing",
        full: `The arrival of the reversed Page of Swords suggests that this person is grappling with confusion and uncertainty. They may feel overwhelmed by their thoughts or hesitant to express themselves clearly, leading to mixed signals or misunderstandings.`
      }
    }
  },
  {
    name: "Knight of Swords",
    cardName: "swords_knight",
    arcana: "minor",
    suit: "swords",
    classicDesign: `The Knight of Swords card depicts a young man who is dressed in his armor and rides a strong white horse into the midst of a battle. The white color of his horse is a reference to the overall purity and intellectual energy which motivates this young rider.`,

    retroDeckDesign: `The Knight of Swords represents swift action, ambition, charging forward with determination and mental clarity, someone who acts decisively, sometimes recklessly, driven by intellect and conviction. They're the warrior who doesn't hesitate, who sees a goal and races toward it with unwavering focus.

This design captures that energy perfectly: a knight in full armor atop a rearing horse, sword thrust high toward the sky in a moment of pure triumphant momentum. The horse itself is mid-rear on a hilltop, frozen in that dramatic instant before the charge begins, and that flowing red cape? *Chef's kiss.* It screams speed, action, and dramatic flair. The composition places our knight at the peak of the hill, literally taking the high ground, ready to rush down into whatever battle or challenge awaits with absolute confidence.

I kept the horse design consistent with the other court cards (all four horses share similar pixel art styling), because I wanted the deck to feel cohesive while still giving each knight their own personality through pose and color. This knight's pose is the most dynamic of the bunch, that rearing stance and skyward sword capture the Knight of Swords' signature "charge first, ask questions later" energy better than any calm trot ever could!`,


    meanings: {
      upright: {
        general: "Ambitious, action-oriented, driven to succeed, fast thinking",
        past: "Ambitious action drove rapid progress",
        present: "Act quickly and decisively",
        future: "Swift action will bring results",
        full: `The Knight of Swords card depicts a young man who is dressed in his armor and rides a strong white horse into the midst of a battle. The white color of his horse is a reference to the overall purity and intellectual energy which motivates this young rider.`
      },
      reversed: {
        general: "Restless, unfocused, impulsive, burn-out",
        past: "Impulsive actions led to mistakes",
        present: "You're scattered and unfocused",
        future: "Slow down to avoid costly errors",
        full: `reversed Knight of Swords in a tarot love reading, as this person may be aggressive, controlling and perhaps even a bully. Convinced that they are right, they strong-arm others to do things their way regardless of how much it hurts the other person.`
      }
    }
  },
  {
    name: "Queen of Swords",
    cardName: "swords_queen",
    arcana: "minor",
    suit: "swords",
    classicDesign: `The Queen of Swords wears a stern look as she sits high on the throne - looking off into the distance. A queen of the air element that the swords represents, her place in the clouds shows that no one can trick or fool her.`,

    retroDeckDesign: `The Queen of Swords sits regally on her throne, hand raised in commanding gesture, crowned and resolute. Behind her, a massive circular halo frames two crossed swords – the same blades we've seen throughout this suit, from the Ten of Swords to the King's card. But here's the interesting bit: these swords are far less rusted than their counterparts on the King card. While the King bears the weight of weathered, tarnished blades (symbols of harsh lessons and brutal experience), the Queen's swords shine brighter, suggesting clarity of thought over battle-worn cynicism.

The Queen of Swords represents sharp intellect, direct communication, and the ability to cut through deception with pure logic. She's independent, perceptive, and unafraid to speak difficult truths. Where the King might have been hardened by conflict, the Queen maintains her mental acuity – her swords haven't dulled from overuse or bitterness. The throne design intentionally mirrors the King's (as do all four Queens with their respective Kings), establishing their connection while highlighting their differences. She rules from the same seat of power, but wields her authority through wit and wisdom rather than force.

I wanted the circular halo to feel almost like a giant proclamation bubble – because if there's one thing the Queen of Swords does, it's speak her mind! The pixel crown flames upward with confident energy, and her blue form suggests both the element of air (associated with Swords) and a certain cool, collected detachment necessary for objective judgment.`,


    meanings: {
      upright: {
        general: "Independent, unbiased judgment, clear boundaries, direct communication",
        past: "Clear thinking and boundaries served you",
        present: "Think clearly and communicate directly",
        future: "Intellectual clarity will guide you",
        full: `The Queen of Swords wears a stern look as she sits high on the throne - looking off into the distance. A queen of the air element that the swords represents, her place in the clouds shows that no one can trick or fool her.`
      },
      reversed: {
        general: "Overly-emotional, easily influenced, bitchy, cold-hearted",
        past: "Harsh judgment or coldness caused hurt",
        present: "Balance intellect with compassion",
        future: "Soften your approach while staying clear",
        full: `the reversed Queen of Swords, it reveals a complex emotional landscape. If you are asking how this person feels about you, they may be experiencing confusion or mistrust.`
      }
    }
  },
  {
    name: "King of Swords",
    cardName: "swords_king",
    arcana: "minor",
    suit: "swords",
    classicDesign: `The King of Swords tarot card shows a king who sits on his throne while holding a double-edged sword that points upwards in his right hand. The King of Swords radiates intellectual power, clear thinking, truth, and authority.`,

    retroDeckDesign: `The King of Swords represents intellectual mastery, clear judgment, authority through wisdom, and the ability to cut through confusion with sharp mental clarity. He's the ultimate strategist, the one who sees truth through complexity.

For this design, I drew inspiration from two incredibly fitting sources: the silhouetted figure comes from Kami's predecessor in Dragon Ball, while the throne itself mirrors One Piece's Empty Throne. Actually, all four King cards in this deck share this same basic composition, which creates a nice visual cohesion across the court cards!

What really sells the symbolism here are those ten swords planted in the ground around the throne, just like the legendary weapons surrounding the Empty Throne in One Piece. The Empty Throne represents absolute authority that theoretically belongs to no one, a symbol of equality among rulers - but we know that's not quite the truth, don't we? Those swords aren't just decoration; they're a statement of power, of battles won, of authority earned through decisive action. The King of Swords doesn't just think clearly - he acts on that clarity with precision and finality.`,


    meanings: {
      upright: {
        general: "Mental clarity, intellectual power, authority, truth",
        past: "Intellectual mastery brought success",
        present: "Use your mind and communicate with authority",
        future: "Intellectual leadership will be required",
        full: `The King of Swords tarot card shows a king who sits on his throne while holding a double-edged sword that points upwards in his right hand. The King of Swords radiates intellectual power, clear thinking, truth, and authority.`
      },
      reversed: {
        general: "Quiet power, inner truth, misuse of power, manipulation",
        past: "Manipulation or abuse of power occurred",
        present: "You're using intellect destructively",
        future: "Use your mental power ethically",
        full: `Reversed, the King of Swords can use their sharp intellect for selfishness. The wisdom and morality that guided his actions in the upright position is gone, and they can instead be frightfully selfish, and even abusive.


================================================================================
SUIT OF PENTACLES (14 Cards)
================================================================================`
      }
    }
  },

  // MINOR ARCANA - PENTACLES (14 cards)
  {
    name: "Ace of Pentacles",
    cardName: "pentacles_ace",
    arcana: "minor",
    suit: "pentacles",
    classicDesign: `In this card, there is a single mysterious hand that comes out of the clouds. In the hand is what looks like a gold coin with a pentagram engraved on its surface.`,
    retroDeckDesign: `The Ace of Pentacles represents new beginnings in the material world: prosperity, opportunity, manifestation, and the seeds of abundance taking root in physical reality.

For the aces, I wanted to strip away complexity and let the core symbolism breathe. Here we have a lush red rose blooming directly from a golden pentacle, with grass and roots sprawling beneath it, visible and grounded. The rose represents beauty and growth emerging from material foundation, while the roots symbolize how prosperity needs to be deeply planted to truly flourish. The pentacle itself glows golden, promising the wealth and opportunity that this card embodies.

I thought about making this more elaborate, but honestly? Sometimes the most powerful statement is the simplest one. A single perfect rose growing from gold, rooted in earth, tells you everything you need to know about new material beginnings. The background features organic, natural textures that feel alive and growing, because that's exactly what this card is about: potential becoming real, opportunities taking physical form, abundance beginning to manifest.

The design stays true to the "aces as simple, focused symbols" approach, letting the central image do all the talking without unnecessary flourish!`,

    meanings: {
      upright: {
        general: "A new financial or career opportunity, manifestation, abundance",
        past: "A material opportunity set you on this path",
        present: "New prosperity is taking root",
        future: "Financial opportunity is coming",

        full: `In this card, there is a single mysterious hand that comes out of the clouds. In the hand is what looks like a gold coin with a pentagram engraved on its surface.`
      },
      reversed: {
        general: "Lost opportunity, lack of planning, scarcity mindset",
        past: "Missed opportunities or poor planning occurred",
        present: "You're not seeing the opportunities available",
        future: "Plan carefully to manifest abundance",

        full: `reversed can mean that this might be a poor investment, requiring much more resources than you had initially reserved - or alternatively, you might be missing your chance. At this time, you are being advised against taking large financial risks and to think all your choices through when you are given a deal.`
      }
    }
  },
  {
    name: "Two of Pentacles",
    cardName: "pentacles_two",
    arcana: "minor",
    suit: "pentacles",
    classicDesign: `The Two of Pentacles card depicts a man who is dancing as he is juggling two large coins. The pentacles are surrounded by the infinity sign that denotes that the person can handle all the issues the come his way and he can manage his life with grace.`,

    retroDeckDesign: `The Two of Pentacles represents balance, juggling priorities, adaptability and multitasking. It's about managing multiple responsibilities with grace, staying flexible when life throws challenges your way, and finding harmony between opposing forces.

Itachi Uchiha embodies this duality perfectly. He's simultaneously a loving brother and a clan annihilator, a rogue ninja and a hidden Leaf Village protector, constantly balancing impossible choices between duty and emotion. In this design, I went with one of his iconic poses: Sharingan activated but partially concealed by his hair, mouth hidden behind the Akatsuki jacket's high collar. The concealment itself represents the card's theme, hiding his true intentions while maintaining perfect balance between two identities, two loyalties, two truths.

The Sharingan peeking through is particularly fitting: it's a constant reminder that he's always watching, always calculating, always managing multiple layers of deception and truth simultaneously. Just like the traditional Two of Pentacles shows a figure juggling two coins in an infinity loop, Itachi juggles his dual roles in an endless dance of sacrifice and protection. The dude literally lived his entire adult life as a double agent while battling terminal illness, if that's not peak multitasking energy, I don't know what is.`,


    meanings: {
      upright: {
        general: "Multiple priorities, time management, prioritization, adaptability",
        past: "You juggled multiple responsibilities",
        present: "Balance is needed in your life",
        future: "Flexibility will be required",
        full: `The Two of Pentacles card depicts a man who is dancing as he is juggling two large coins. The pentacles are surrounded by the infinity sign that denotes that the person can handle all the issues the come his way and he can manage his life with grace.`
      },
      reversed: {
        general: "Over-committed, disorganization, reprioritization",
        past: "Poor balance led to problems",
        present: "You're overwhelmed by competing demands",
        future: "Simplify and prioritize",
        full: `when the reversed 2 of Pentacles appears in a love tarot reading. With so many conflicts and demands on you, you may not even know that your partner is feeling neglected.`
      }
    }
  },
  {
    name: "Three of Pentacles",
    cardName: "pentacles_three",
    arcana: "minor",
    suit: "pentacles",
    classicDesign: `The Three of Pentacles displays a young apprentice who works in a cathedral. In front of him, there are two others, a priest and a nobleman of some sort, that are holding plans of the cathedral on a piece of parchment.`,

    retroDeckDesign: `The Three of Pentacles represents teamwork, collaboration, skill development, and the power of combining expertise to achieve something greater than what individuals could accomplish alone. It's about mastery through partnership and shared goals.

This iconic image of Goku and Vegeta bumping fists was created by an artist named Jamie Loughran in 2009, while crashing for a week on their friend's futon. The scene isn't canon, not even from the actual movie, but it perfectly captures the essence of two masters combining their strengths against overwhelming odds. Here they stand before an army of Metal Coolers, and those three suns in the sky? They're your pentacles, watching over this moment of perfect collaboration.

The fist bump itself is pure Three of Pentacles energy: two warriors who've pushed each other to greater heights throughout their rivalry, now acknowledging they need each other's mastery to succeed. Goku's raw talent meets Vegeta's disciplined technique, and together they form something unstoppable. That's what this card is about, recognizing that sometimes the best work comes from combining different skills and perspectives, even if your collaborator drives you absolutely crazy.`,


    meanings: {
      upright: {
        general: "Teamwork, collaboration, learning, implementation",
        past: "Collaboration brought success",
        present: "Work with others to achieve goals",
        future: "Teamwork will lead to success",
        full: `The Three of Pentacles displays a young apprentice who works in a cathedral. In front of him, there are two others, a priest and a nobleman of some sort, that are holding plans of the cathedral on a piece of parchment.`
      },
      reversed: {
        general: "Disharmony, misalignment, working alone",
        past: "Poor collaboration caused setbacks",
        present: "You're not working well with others",
        future: "Improve communication and cooperation",
        full: `reversed 3 of Pentacles tarot love meaning can point to a couple that is struggling to work together practically. While the emotions may be there, they have not translated into effort or action.`
      }
    }
  },
  {
    name: "Four of Pentacles",
    cardName: "pentacles_four",
    arcana: "minor",
    suit: "pentacles",
    classicDesign: `This card depicts a man who is sitting on a stool, who is holding onto two pentacles in a very defensive and tight posture. It’s almost as if he is hoarding them out of fear of loss.`,

    retroDeckDesign: `The Four of Pentacles represents security, control, possession, and sometimes hoarding or clinging too tightly to material wealth. It's about stability and conservation, but also the potential trap of greed or fear of loss.

A dragon sleeping atop its hoard is perhaps *the* most iconic image of possessive security in all of fantasy. This magnificent creature has accumulated four golden coins (among other treasures), and now rests vigilantly upon them, unwilling to part with a single piece. The dawn breaking in the background suggests this has been a long vigil, dragons are known for their eternal watch over their treasures, some say they never truly sleep with both eyes closed!

The composition captures that duality perfectly: there's something both admirable and tragic about this level of dedication to preservation. The dragon has achieved material success and security, yes, but at what cost? Is it truly enjoying its wealth, or is it trapped by its own possessiveness? The Four of Pentacles asks us to examine our own relationship with material security, when does healthy saving become unhealthy hoarding?`,


    meanings: {
      upright: {
        general: "Saving money, security, conservatism, scarcity, control",
        past: "Holding tight to security shaped your path",
        present: "You're being overly conservative or controlling",
        future: "Balance security with generosity",
        full: `This card depicts a man who is sitting on a stool, who is holding onto two pentacles in a very defensive and tight posture. It’s almost as if he is hoarding them out of fear of loss.`
      },
      reversed: {
        general: "Over-spending, greed, self-protection",
        past: "Greed or overspending caused issues",
        present: "You're releasing your grip on material things",
        future: "Generosity will bring abundance",
        full: `Instead of being protective you become greedy, and you succumb to stinginess. You are haunted by certain fears of poverty which compels you to be nothing but materialistic.`
      }
    }
  },
  {
    name: "Five of Pentacles",
    cardName: "pentacles_five",
    arcana: "minor",
    suit: "pentacles",
    classicDesign: `Just like the fives of the other suits in the tarot, the Five of Pentacles symbolizes adversity. It shows two individuals walking outside while it is snowing.`,

    retroDeckDesign: `The Five of Pentacles represents hardship, poverty, isolation, and feeling left out in the cold, both literally and metaphorically. It's about financial struggle, yes, but more deeply about feeling abandoned and unable to see the help that might be available.

I chose the heartbreaking train station scene from Grave of the Fireflies: a barefoot boy begging for money while life passes by indifferently. The stained glass window in the background, warm oranges and reds, represents the warmth and abundance that exists in the world, yet remains just out of reach. The yellow sparkles (coins, perhaps? or just the harsh glitter of hope?) emphasize both the scarcity and the desperate need. 

This scene captures the devastating isolation of poverty perfectly. The boy sits alone on the cold ground while society moves past him, unable or unwilling to see his suffering. It's one of the most powerful depictions of the Five of Pentacles' core theme: being on the outside looking in, experiencing hardship while warmth and community exist just beyond reach. The film shows the brutal reality of being forgotten, which this card is about.`,


    meanings: {
      upright: {
        general: "Financial loss, poverty, lack mindset, isolation, worry",
        past: "Financial hardship or loss affected you",
        present: "You're experiencing material or spiritual poverty",
        future: "Seek help and support during difficult times",
        full: `Just like the fives of the other suits in the tarot, the Five of Pentacles symbolizes adversity. It shows two individuals walking outside while it is snowing.`
      },
      reversed: {
        general: "Recovery from financial loss, spiritual poverty",
        past: "You recovered from hardship",
        present: "Things are improving financially",
        future: "Recovery and improvement ahead",
        full: `reversed Five of Pentacles means change is coming. It will take some time before you can recover, and find strength once again.`
      }
    }
  },
  {
    name: "Six of Pentacles",
    cardName: "pentacles_six",
    arcana: "minor",
    suit: "pentacles",
    classicDesign: `In the image on the Six of Pentacles, there is a man who is dressed in purple robes. The color purple symbolizes is the status and wealth of this man.`,

    retroDeckDesign: `The Six of Pentacles represents generosity, charity, and the balance of giving and receiving. It's about sharing wealth and resources, but also about the power dynamics inherent in such exchanges, who gives, who receives, and what that means for both parties.

In BioShock, the Little Sisters present you with one of gaming's most memorable moral choices: harvest them for maximum ADAM (power, wealth, resources) or rescue them and receive less. It's literally a decision about generosity versus greed, about whether you'll exploit the vulnerable for personal gain or show compassion. The six butterflies surrounding her represent the potential for six acts of mercy, or six opportunities squandered. Each butterfly is a soul saved, a choice made to give rather than take.

What makes this fitting is how it captures both sides of the card's meaning. The Little Sister is simultaneously the recipient of charity (if you choose rescue) and the giver of rewards (she still provides ADAM, just less). She embodies that delicate balance between giving and receiving, between power and vulnerability, that defines the Six of Pentacles. Plus, those glowing yellow eyes in the darkness? *Chef's kiss* for the aesthetic.`,


    meanings: {
      upright: {
        general: "Giving, receiving, sharing wealth, generosity, charity",
        past: "Generosity or receiving help blessed you",
        present: "Share your abundance with others",
        future: "You'll be in a position to give or receive help",
        full: `In the image on the Six of Pentacles, there is a man who is dressed in purple robes. The color purple symbolizes is the status and wealth of this man.`
      },
      reversed: {
        general: "Self-care, unpaid debts, one-sided charity",
        past: "Imbalanced giving caused resentment",
        present: "Giving or receiving is out of balance",
        future: "Ensure reciprocity in exchanges",
        full: `reversed can suggest that charity can be one-way. If you have loaned someone money, you should not be expecting your money to be paid back, or your favor to be returned in the future.`
      }
    }
  },
  {
    name: "Seven of Pentacles",
    cardName: "pentacles_seven",
    arcana: "minor",
    suit: "pentacles",
    classicDesign: `The Seven of Pentacles shows a young man who seems to be taking a break from his hard labor to admire the fruit and blossoms in his garden. He rests on his shovel as he is admiring the seven pentacles hanging from the lush green vegetation.`,

    retroDeckDesign: `The Seven of Pentacles represents hard work, perseverance, long-term goals, and reflection on whether your efforts will truly pay off. It's about pausing to assess if you're investing your energy in something worthwhile, or if you're just spinning your wheels chasing the wrong dream.

Jesse Pinkman and his wooden box capture this perfectly. Throughout Breaking Bad, he talks about this beautifully crafted wooden box he made in shop class, the one thing he's genuinely proud of creating with his own hands. It represents the life he could have had, the simple honest work that would have made him happy, the person he might have been if he'd stayed on a different path. Instead, he's trapped in Walter's world, pouring endless effort into something that only brings destruction and misery.

The card asks: "Are you working toward something that will actually fulfill you?" Jesse's box is the symbol of that question, the ghost of roads not taken. In this design, we see him hunched over his work, alone with his thoughts, in that moment of reflection where you realize what really matters. It's the Seven of Pentacles embodied: the painful awareness that sometimes the crops you've been tending will never give you what you truly need.`,


    meanings: {
      upright: {
        general: "Long-term view, sustainable results, perseverance, investment",
        past: "Patient investment is paying off",
        present: "Assess your progress and long-term goals",
        future: "Your efforts will bear fruit with patience",
        full: `The Seven of Pentacles shows a young man who seems to be taking a break from his hard labor to admire the fruit and blossoms in his garden. He rests on his shovel as he is admiring the seven pentacles hanging from the lush green vegetation.`
      },
      reversed: {
        general: "Lack of long-term vision, limited success, impatience",
        past: "Impatience undermined your efforts",
        present: "You're frustrated with slow progress",
        future: "Patience is required for success",
        full: `when the reversed 7 of Pentacles appears in a love tarot reading. You may have toiled for love and romance, putting in so much effort, only to see little come from it.`
      }
    }
  },
  {
    name: "Eight of Pentacles",
    cardName: "pentacles_eight",
    arcana: "minor",
    suit: "pentacles",
    classicDesign: `The Eight of Pentacles card depicts a young man who is etching a pentacle shape into the eight golden coins. The card symbolizes someone who is completely focused and absorbed in what they are doing.`,

    retroDeckDesign: `The Eight of Pentacles represents diligent work, skill development, mastery through repetition, and dedication to craft. It's about putting in the hours, grinding away at your technique, pushing past your limits to achieve true mastery.

Vegeta training under 400x gravity is THE perfect embodiment of this. Here's a Saiyan Prince who refuses to accept second place, who spends every waking moment in the gravity chamber, pushing his body beyond what should be possible, all in pursuit of perfection. The eight floating spheres around him aren't just random pentacles, they represent his transformations: base form, Oozaru, Super Saiyan, Super Saiyan 2, Super Saiyan Blue, Super Saiyan Blue Evolution, and Ultra Ego. Each sphere is a milestone achieved through countless hours of brutal, solitary training.

Vegeta earns every single transformation through sheer stubbornness and dedication to his craft. That's the Eight of Pentacles energy right there: no shortcuts, no destiny, just work. The gravity chamber is his workshop, his body is his material, and perfection is the goal he'll never stop chasing.`,


    meanings: {
      upright: {
        general: "Apprenticeship, repetitive tasks, mastery, skill development",
        past: "Dedication to craft brought expertise",
        present: "Focus on developing your skills",
        future: "Mastery comes through practice",
        full: `The Eight of Pentacles card depicts a young man who is etching a pentacle shape into the eight golden coins. The card symbolizes someone who is completely focused and absorbed in what they are doing.`
      },
      reversed: {
        general: "Self-development, perfectionism, misdirected activity",
        past: "Perfectionism or lack of focus held you back",
        present: "You're lacking focus in your work",
        future: "Refocus on quality and purpose",
        full: `reversed 8 of Pentacles tarot love meaning is a reminder that the effort we put into our relationships and our love life matters. We can either devote ourselves to them, and patiently watch it flourish under our care, or we can take it for granted, and let it eventually die.`
      }
    }
  },
  {
    name: "Nine of Pentacles",
    cardName: "pentacles_nine",
    arcana: "minor",
    suit: "pentacles",
    classicDesign: `The Nine of Pentacles depicts a woman in the middle of a vineyard. The woman wears what appears to be a long, luxurious dress adorned with sunflowers.`,

    retroDeckDesign: `The Nine of Pentacles represents self-sufficiency, financial independence, luxury earned through discipline, and enjoying the fruits of your labor in solitude. It's about having built something valuable through your own efforts and now being able to relax in the security you've created.

Integra Hellsing works perfectly. She's the head of the Hellsing Organization, sitting on her throne with a cigar in hand, sword at her side, completely in control. Everything she has, she earned through iron discipline and unwavering determination. The crossed legs, the cigar, the relaxed posture, this is someone who's mastered their domain and can finally enjoy it. She built this empire herself, no shortcuts, no compromises.

Behind her throne, nine red eyes watch from the shadows, Alucard's presence. It's a beautiful touch because while the Nine of Pentacles is about independence, it also acknowledges the resources you've cultivated. Alucard isn't controlling her; he's *her* power, a tool she commands. Those nine eyes represent both her greatest weapon and the fruits of her labor: absolute authority over something that could destroy anyone else. She's not afraid, not straining. She's simply won.`,


    meanings: {
      upright: {
        general: "Abundance, luxury, self-sufficiency, financial independence",
        past: "Your efforts created prosperity",
        present: "Enjoy the fruits of your labor",
        future: "Financial independence is assured",
        full: `The Nine of Pentacles depicts a woman in the middle of a vineyard. The woman wears what appears to be a long, luxurious dress adorned with sunflowers.`
      },
      reversed: {
        general: "Self-worth, over-investment in work, hustling",
        past: "Work-life imbalance affected wellbeing",
        present: "Your self-worth is tied to achievement",
        future: "Find balance between work and pleasure",
        full: `The arrival of the reversed Nine of Pentacles suggests that this person may be feeling insecure or inadequate. They might perceive a lack of independence or self-sufficiency in themselves, leading them to question their worthiness in your eyes.`
      }
    }
  },
  {
    name: "Ten of Pentacles",
    cardName: "pentacles_ten",
    arcana: "minor",
    suit: "pentacles",
    classicDesign: `In the Ten of Pentacles card, there is an old man seated in an archway leading into a great estate. It seems he is the head of the family, for he is surrounded by younger loved ones.`,

    retroDeckDesign: `The Ten of Pentacles represents wealth, legacy, family stability, and multi-generational prosperity. It's about the culmination of material success that extends beyond just you, it's what you build and pass down, the fruits of labor enjoyed by those who come after.

This design shows an elderly couple seated on a bench, watching their grandchildren play near the family winery. Ten golden pentacles are engraved into the bench itself (because why not make your furniture fancy when you're living the dream?), and a peaceful dog naps underneath. It's a quiet, intimate moment that captures everything this card means: the satisfaction of a life well-lived, family bonds strengthened across generations, and the security that comes from building something lasting.

I love how this scene isn't about flashy displays of wealth or grand estates, it's about that simple, profound moment where you realize your legacy is alive and well, literally running around in front of you. The winery in the background represents generational work and tradition, the bench symbolizes rest after years of labor, and those ten pentacles carved into the wood? That's permanent prosperity, literally built into the foundation of family life. Even the sleeping dog gets it, when everything's this stable and secure, you can truly rest easy.`,


    meanings: {
      upright: {
        general: "Wealth, financial security, family, long-term success, contribution",
        past: "Family or legacy shaped your foundation",
        present: "You're building lasting security",
        future: "Long-term prosperity and legacy ahead",
        full: `In the Ten of Pentacles card, there is an old man seated in an archway leading into a great estate. It seems he is the head of the family, for he is surrounded by younger loved ones.`
      },
      reversed: {
        general: "The dark side of wealth, financial failure, loneliness",
        past: "Financial problems or family issues occurred",
        present: "Material success isn't bringing fulfillment",
        future: "Redefine what wealth means to you",
        full: `They might perceive a lack of security or commitment in your relationship, leading to feelings of instability and doubt. Their emotions could be influenced by past experiences that have left them wary, making them question whether investing further is worthwhile.This card surfaces when it’s time to examine your own feelings; the reversed Ten of Pentacles indicates a sense of discontent regarding your current situation.`
      }
    }
  },
  {
    name: "Page of Pentacles",
    cardName: "pentacles_page",
    arcana: "minor",
    suit: "pentacles",
    classicDesign: `The Page of Pentacles card depicts a youth standing all by himself in a wide field surrounded by flowers. In the background, you will also notice several lush trees and a furrowed field.`,

    retroDeckDesign: `The Page of Pentacles represents studiousness, dedication to craft, and the beginning stages of manifesting something tangible in the physical world. It's about focused learning, patience in skill development, and laying groundwork for future mastery through disciplined practice.

Naruto's toad-sage training at Mount Myōboku captures this! Here he is, balanced precariously on a rock pillar above a sea of stone spikes, sitting in meditation as he learns to harness natural energy. This isn't flashy combat or heroic victory, it's the grueling, focused work that comes before greatness. The stakes are literal (fall and you're impaled) but the real challenge is internal: learning to sense and balance the natural energy flowing through everything, a skill that requires patience, dedication, and absolute concentration.

The composition emphasizes that classic Page of Pentacles vibe: youth, potential, and someone willing to put in the work despite the danger. Naruto's sitting there in meditation, not because it's easy or fun, but because mastery demands it. Just like the traditional Page studies their pentacle with intense focus, Naruto studies the flow of natural energy, building the foundation for his eventual Sage Mode. It's all about that student energy, humble, determined, and committed to the craft.`,


    meanings: {
      upright: {
        general: "Manifestation, financial opportunity, skill development, new job",
        past: "A new opportunity or study began",
        present: "Be open to learning and new opportunities",
        future: "Good news about money or career coming",
        full: `The Page of Pentacles card depicts a youth standing all by himself in a wide field surrounded by flowers. In the background, you will also notice several lush trees and a furrowed field.`
      },
      reversed: {
        general: "Lack of progress, procrastination, learn from failure",
        past: "Procrastination delayed success",
        present: "You're not following through on plans",
        future: "Commit to your goals with action",
        full: `reversed Page of Pentacles can bring bad financial news, or sometimes material insecurity. You may be anxious and worried when it comes to finances.`
      }
    }
  },
  {
    name: "Knight of Pentacles",
    cardName: "pentacles_knight",
    arcana: "minor",
    suit: "pentacles",
    classicDesign: `Much like the other court cards of this suit, the Knight of Pentacles revolves around work, effort, and a general responsibility. The Knight of Pentacles sits on a dark horse in a field.`,

    retroDeckDesign: `The Knight of Pentacles represents dedication, responsibility, methodical progress, and unwavering commitment to long-term goals. Unlike the other knights who charge forward with passion or intellectual pursuit, this knight is the steady worker, the reliable guardian, someone who puts in the hours and never wavers from their path.

In this design, a magician rides through the night, casting a glowing pentagram into the darkness. The scene captures that quiet, determined energy: working while others sleep, maintaining focus on the goal (the pentagram symbol of material mastery and earthly achievement), moving forward with purpose but without rushed chaos. The green mantel reinforces the earth element connection, while the nighttime setting emphasizes the solitary, dedicated nature of this knight's journey.

All four suit knights share similar design elements in this deck, maintaining visual consistency while the rider's actions and symbols differentiate their meanings. Here, the pentagram spell becomes the defining feature, showing how the Knight of Pentacles channels their energy into manifesting tangible results, one careful step at a time. The horse moves steadily forward through the dotted landscape, neither rushing nor hesitating, embodying that perfect balance of patience and persistent action that defines this card.`,


    meanings: {
      upright: {
        general: "Hard work, productivity, routine, conservatism, diligence",
        past: "Steady effort brought reliable results",
        present: "Work diligently toward your goals",
        future: "Persistence will pay off",
        full: `Much like the other court cards of this suit, the Knight of Pentacles revolves around work, effort, and a general responsibility. The Knight of Pentacles sits on a dark horse in a field.`
      },
      reversed: {
        general: "Self-discipline, boredom, feeling 'stuck', perfectionism",
        past: "Rigidity or boredom stalled progress",
        present: "You're stuck in a rut or being too perfectionist",
        future: "Add flexibility to your routine",
        full: `You may feel stuck in your own routine, and bored of everything that surrounds you. You may desire a change of scenery in order to avoid this tiring repetition.`
      }
    }
  },
  {
    name: "Queen of Pentacles",
    cardName: "pentacles_queen",
    arcana: "minor",
    suit: "pentacles",
    classicDesign: `The Queen of Pentacles card depicts a beautiful woman sitting on a decorated throne holding a golden coin. Surrounding her are beautiful blossoming trees and green floral gardens.`,

    retroDeckDesign: `The Queen of Pentacles sits on her wooden throne, arms outstretched in a gesture of abundance and welcome. Lush greenery surrounds her, roots intertwining with the throne itself, while a golden pentacle rests in the foreground, half-claimed by the vegetation. It's nature and wealth in perfect harmony, she doesn't hoard her riches, she lets them grow and flourish around her.

This queen represents nurturing prosperity, practical wisdom, and being deeply grounded in the physical world. She's the person who can make anything grow, whether it's a garden, a business, or a home. The vegetation absorbing the coin shows how she understands that wealth isn't static, it needs to be invested, nurtured, and allowed to take root to truly flourish.

All four queens in this deck share a similar design approach, each seated on the same throne as their respective king, but with their own distinct energy. For the Queen of Pentacles, that meant emphasizing the earth element: wood, roots, growth, and that beautiful tension between civilization (the throne, the coin) and nature (the greenery reclaiming everything). She works with nature instead of dominating it.`,


    meanings: {
      upright: {
        general: "Nurturing, practical, providing financially, a working parent",
        past: "Practical nurturing supported growth",
        present: "Balance work and home with grace",
        future: "Prosperity through practical care",
        full: `The Queen of Pentacles card depicts a beautiful woman sitting on a decorated throne holding a golden coin. Surrounding her are beautiful blossoming trees and green floral gardens.`
      },
      reversed: {
        general: "Financial independence, self-care, work-home conflict",
        past: "Work-life balance was lost",
        present: "You're neglecting self-care or family",
        future: "Prioritize what truly matters",
        full: `reversed Queen of Pentacles may be terrible with her finances, making it easy for her to mismanage her money. This card can suggest a time when you are being too materialistic or shallow.`
      }
    }
  },
  {
    name: "King of Pentacles",
    cardName: "pentacles_king",
    arcana: "minor",
    suit: "pentacles",
    classicDesign: `The King of Pentacles refers to a man of high ambition, materialistic satisfaction, and worldly success. The King of Pentacles is sitting on a throne that is adorned with vines and bull carvings, and the robe that he is wearing is embroidered with many images of grapevines.`,

    retroDeckDesign: `The King of Pentacles represents mastery of the material world: wealth, security, abundance, and the wisdom to maintain it all. He's the ultimate provider, someone who's built an empire through discipline and now sits comfortably atop his achievements, surrounded by the fruits of his labor.

For this design (and the other three Kings in the deck), I took inspiration from Kami's predecessor in Dragon Ball Z – that imposing figure seated on a divine throne. The King sits enthroned, crowned, holding dominion over his realm. But unlike the celestial detachment of his divine inspiration, this king is deeply rooted in the physical world: his throne is crafted from wood, lush greenery bursts forth around him, roots spread beneath his seat, and a golden scepter rests at his feet. Everything screams earthly abundance and natural prosperity.

The pentagram symbol looming behind him reinforces his mastery over the material suit, while the organic materials of his throne show he hasn't lost touch with the natural world despite his wealth. He doesn't just accumulate resources – he understands them, nurtures them, makes them grow. That's the difference between someone who's rich and someone who's truly mastered Pentacles energy!`,


    meanings: {
      upright: {
        general: "Wealth, business, leadership, security, discipline, abundance",
        past: "Material mastery brought success",
        present: "Lead with practical wisdom and abundance",
        future: "Financial success through leadership",
        full: `The King of Pentacles refers to a man of high ambition, materialistic satisfaction, and worldly success. The King of Pentacles is sitting on a throne that is adorned with vines and bull carvings, and the robe that he is wearing is embroidered with many images of grapevines.`
      },
      reversed: {
        general: "Financially inept, obsessed with wealth, stubborn, materialistic",
        past: "Greed or poor financial decisions caused problems",
        present: "You're too focused on material gain",
        future: "Balance material success with other values",
        full: `reversed may also signify that your definition of success and happiness is only determined by outer appearances, and not by the true value that security and stability can bring to you. It is a time for you to cultivate an more wholistic attitude to the material world to find an authentic happiness.`
      }
    }
  }
];

// All cards including jokers
const allCards = [
  ...tarotCards,
  {
    name: "Jolly Joker I",
    cardName: "jolly_joker_1",
    arcana: "joker",
    retroDeckDesign: `An omage to the Joker from Batman: The Animated Series.
    
    I draw 4 different Jolly Jokers so that the deck can be used for games such as Scala 40, which require two decks and 4 jokers to play.
    
    But, just for fun, I added the number 23 on each of the Jokers, so you can think of it as the 23rd Major Arcana, representing pure chaos`,
  },
  {
    name: "Jolly Joker II",
    cardName: "jolly_joker_2",
    arcana: "joker",
    retroDeckDesign: `An omage to Jack Nicholson's Joker.
    
    I draw 4 different Jolly Jokers so that the deck can be used for games such as Scala 40, which require two decks and 4 jokers to play.
    
    But, just for fun, I added the number 23 on each of the Jokers, so you can think of it as the 23rd Major Arcana, representing pure chaos`,
  },
  {
    name: "Jolly Joker III",
    cardName: "jolly_joker_3",
    arcana: "joker",
    retroDeckDesign: `An omage to Heath Ledger's Joker.
    
    I draw 4 different Jolly Jokers so that the deck can be used for games such as Scala 40, which require two decks and 4 jokers to play.
    
    But, just for fun, I added the number 23 on each of the Jokers, so you can think of it as the 23rd Major Arcana, representing pure chaos`,
  },
  {
    name: "Jolly Joker IV",
    cardName: "jolly_joker_4",
    arcana: "joker",
    retroDeckDesign: `An omage to Joaquin Phoenix's Joker.
    
    I draw 4 different Jolly Jokers so that the deck can be used for games such as Scala 40, which require two decks and 4 jokers to play.
    
    But, just for fun, I added the number 23 on each of the Jokers, so you can think of it as the 23rd Major Arcana, representing pure chaos`,
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = tarotCards;
}
