const tarotCards = [
  // MAJOR ARCANA (22 cards)
  {
    name: "The Fool",
    cardName: "the_fool",
    arcana: "major",
    number: 0,
    meanings: {
      upright: {
        general: "New beginnings, innocence, spontaneity, free spirit",
        past: "A leap of faith you took led to where you are now",
        present: "You're at the beginning of a new journey with unlimited potential",
        future: "An exciting new adventure awaits you"
      },
      reversed: {
        general: "Recklessness, taken advantage of, inconsideration",
        past: "A rash decision without proper planning affected your path",
        present: "You may be acting foolishly or taking unnecessary risks",
        future: "Proceed with caution to avoid costly mistakes"
      }
    }
  },
  {
    name: "The Magician",
    cardName: "the_magician",
    arcana: "major",
    number: 1,
    meanings: {
      upright: {
        general: "Manifestation, resourcefulness, power, inspired action",
        past: "You successfully manifested your desires through willpower",
        present: "You have all the tools you need to succeed",
        future: "Your skills and talents will bring success"
      },
      reversed: {
        general: "Manipulation, poor planning, untapped talents",
        past: "Manipulation or deception clouded your judgment",
        present: "You're not using your full potential",
        future: "Beware of trickery or self-sabotage"
      }
    }
  },
  {
    name: "The High Priestess",
    cardName: "the_high_priestess",
    arcana: "major",
    number: 2,
    meanings: {
      upright: {
        general: "Intuition, sacred knowledge, divine feminine, subconscious",
        past: "Your intuition guided you through uncertain times",
        present: "Trust your inner voice and instincts",
        future: "Hidden knowledge will be revealed to you"
      },
      reversed: {
        general: "Secrets, disconnected from intuition, withdrawal",
        past: "You ignored your intuition to your detriment",
        present: "You're out of touch with your inner wisdom",
        future: "Secrets may be revealed or kept to your disadvantage"
      }
    }
  },
  {
    name: "The Empress",
    cardName: "the_empress",
    arcana: "major",
    number: 3,
    meanings: {
      upright: {
        general: "Femininity, beauty, nature, nurturing, abundance",
        past: "A period of growth and abundance blessed you",
        present: "You're in a creative and nurturing phase",
        future: "Prosperity and fertility await you"
      },
      reversed: {
        general: "Creative block, dependence on others, emptiness",
        past: "Lack of self-care or creative stagnation held you back",
        present: "You're feeling creatively blocked or dependent",
        future: "Address self-worth issues to move forward"
      }
    }
  },
  {
    name: "The Emperor",
    cardName: "the_emperor",
    arcana: "major",
    number: 4,
    meanings: {
      upright: {
        general: "Authority, establishment, structure, father figure",
        past: "Strong leadership or structure provided stability",
        present: "Take control and establish order in your life",
        future: "You will step into a position of authority"
      },
      reversed: {
        general: "Domination, excessive control, lack of discipline",
        past: "Rigid thinking or tyranny caused problems",
        present: "You're being too controlling or lacking discipline",
        future: "Power struggles or authority issues may arise"
      }
    }
  },
  {
    name: "The Hierophant",
    cardName: "the_hierophant",
    arcana: "major",
    number: 5,
    meanings: {
      upright: {
        general: "Spiritual wisdom, religious beliefs, conformity, tradition",
        past: "Traditional values or spiritual guidance shaped your path",
        present: "Seek wisdom from established institutions or mentors",
        future: "Traditional approaches will serve you well"
      },
      reversed: {
        general: "Personal beliefs, freedom, challenging the status quo",
        past: "Rebelling against tradition brought consequences",
        present: "You're questioning established norms and beliefs",
        future: "Break free from restrictive traditions"
      }
    }
  },
  {
    name: "The Lovers",
    cardName: "the_lovers",
    arcana: "major",
    number: 6,
    meanings: {
      upright: {
        general: "Love, harmony, relationships, values alignment, choices",
        past: "An important relationship or choice shaped your journey",
        present: "You face an important decision about values or relationships",
        future: "A significant partnership or choice approaches"
      },
      reversed: {
        general: "Self-love, disharmony, imbalance, misalignment",
        past: "A relationship ended or values were compromised",
        present: "Your relationships or values are out of balance",
        future: "Relationship challenges or difficult choices ahead"
      }
    }
  },
  {
    name: "The Chariot",
    cardName: "the_chariot",
    arcana: "major",
    number: 7,
    meanings: {
      upright: {
        general: "Control, willpower, success, action, determination",
        past: "Your determination and focus brought victory",
        present: "Channel your energy and take decisive action",
        future: "Success through willpower and determination"
      },
      reversed: {
        general: "Self-discipline, opposition, lack of direction",
        past: "Lack of control or direction led to setbacks",
        present: "You're feeling scattered or lacking focus",
        future: "Obstacles may slow your progress without discipline"
      }
    }
  },
  {
    name: "Strength",
    cardName: "strength",
    arcana: "major",
    number: 8,
    meanings: {
      upright: {
        general: "Strength, courage, persuasion, influence, compassion",
        past: "Inner strength helped you overcome challenges",
        present: "Face challenges with courage and compassion",
        future: "Your inner strength will see you through"
      },
      reversed: {
        general: "Inner strength, self-doubt, low energy, raw emotion",
        past: "Self-doubt or weakness undermined your efforts",
        present: "You're experiencing self-doubt or lack of confidence",
        future: "Build your confidence to overcome future challenges"
      }
    }
  },
  {
    name: "The Hermit",
    cardName: "the_hermit",
    arcana: "major",
    number: 9,
    meanings: {
      upright: {
        general: "Soul-searching, introspection, being alone, inner guidance",
        past: "A period of solitude brought important insights",
        present: "Take time for introspection and inner reflection",
        future: "Wisdom will come through solitude and reflection"
      },
      reversed: {
        general: "Isolation, loneliness, withdrawal",
        past: "Excessive isolation held you back",
        present: "You're isolating yourself too much from others",
        future: "Beware of becoming too withdrawn"
      }
    }
  },
  {
    name: "Wheel of Fortune",
    cardName: "wheel_of_fortune",
    arcana: "major",
    number: 10,
    meanings: {
      upright: {
        general: "Good luck, karma, life cycles, destiny, turning point",
        past: "Fate intervened to change your course",
        present: "A turning point is occurring in your life",
        future: "Positive change and good fortune are coming"
      },
      reversed: {
        general: "Bad luck, resistance to change, breaking cycles",
        past: "Bad luck or resistance to change caused difficulties",
        present: "You're experiencing a downturn or resisting change",
        future: "Prepare for unexpected changes or setbacks"
      }
    }
  },
  {
    name: "Justice",
    cardName: "justice",
    arcana: "major",
    number: 11,
    meanings: {
      upright: {
        general: "Justice, fairness, truth, cause and effect, law",
        past: "Justice was served and balance restored",
        present: "Seek truth and fairness in your decisions",
        future: "You will receive what you deserve"
      },
      reversed: {
        general: "Unfairness, lack of accountability, dishonesty",
        past: "Injustice or unfair treatment affected your path",
        present: "You're avoiding accountability or acting unfairly",
        future: "Unfair situations or lack of accountability ahead"
      }
    }
  },
  {
    name: "The Hanged Man",
    cardName: "the_hanged_man",
    arcana: "major",
    number: 12,
    meanings: {
      upright: {
        general: "Pause, surrender, letting go, new perspectives",
        past: "A period of waiting brought new understanding",
        present: "Surrender to the moment and see things differently",
        future: "A necessary pause will bring enlightenment"
      },
      reversed: {
        general: "Delays, resistance, stalling, indecision",
        past: "Resistance to change prolonged difficulties",
        present: "You're resisting necessary changes or stuck in limbo",
        future: "Stop delaying and take action"
      }
    }
  },
  {
    name: "Death",
    cardName: "death",
    arcana: "major",
    number: 13,
    meanings: {
      upright: {
        general: "Endings, change, transformation, transition",
        past: "A major ending allowed for new beginnings",
        present: "You're in the midst of significant transformation",
        future: "Major changes and new beginnings approach"
      },
      reversed: {
        general: "Resistance to change, personal transformation, inner purging",
        past: "Fear of change held you back from growth",
        present: "You're resisting necessary endings",
        future: "Embrace change or face stagnation"
      }
    }
  },
  {
    name: "Temperance",
    cardName: "temperance",
    arcana: "major",
    number: 14,
    meanings: {
      upright: {
        general: "Balance, moderation, patience, purpose",
        past: "Balance and patience led to harmony",
        present: "Find the middle path and practice moderation",
        future: "Patience and balance will bring success"
      },
      reversed: {
        general: "Imbalance, excess, self-healing, re-alignment",
        past: "Excess or imbalance caused problems",
        present: "Your life is out of balance",
        future: "Restore balance to avoid negative consequences"
      }
    }
  },
  {
    name: "The Devil",
    cardName: "the_devil",
    arcana: "major",
    number: 15,
    meanings: {
      upright: {
        general: "Shadow self, attachment, addiction, restriction, sexuality",
        past: "Unhealthy attachments or addictions bound you",
        present: "You're trapped by materialism or unhealthy patterns",
        future: "Beware of becoming enslaved to desires"
      },
      reversed: {
        general: "Releasing limiting beliefs, exploring dark thoughts, detachment",
        past: "You broke free from limiting beliefs or addictions",
        present: "You're releasing yourself from bondage",
        future: "Freedom from restrictions is coming"
      }
    }
  },
  {
    name: "The Tower",
    cardName: "the_tower",
    arcana: "major",
    number: 16,
    meanings: {
      upright: {
        general: "Sudden change, upheaval, chaos, revelation, awakening",
        past: "A sudden disruption shattered false foundations",
        present: "Unexpected change is dismantling your reality",
        future: "Sudden upheaval will destroy false structures"
      },
      reversed: {
        general: "Personal transformation, fear of change, averting disaster",
        past: "You narrowly avoided disaster or resisted change",
        present: "You're resisting necessary destruction of old ways",
        future: "You may avoid the worst if you adapt now"
      }
    }
  },
  {
    name: "The Star",
    cardName: "the_star",
    arcana: "major",
    number: 17,
    meanings: {
      upright: {
        general: "Hope, faith, purpose, renewal, spirituality",
        past: "Hope and faith guided you through darkness",
        present: "Renewed hope and inspiration fill your life",
        future: "Your wishes and dreams will be fulfilled"
      },
      reversed: {
        general: "Lack of faith, despair, self-trust, disconnection",
        past: "Loss of faith or hope dimmed your path",
        present: "You're feeling hopeless or disconnected from purpose",
        future: "Reconnect with your faith to find your way"
      }
    }
  },
  {
    name: "The Moon",
    cardName: "the_moon",
    arcana: "major",
    number: 18,
    meanings: {
      upright: {
        general: "Illusion, fear, anxiety, subconscious, intuition",
        past: "Illusions or fears clouded your judgment",
        present: "Things are not as they seem; trust your intuition",
        future: "Navigate through uncertainty with inner wisdom"
      },
      reversed: {
        general: "Release of fear, repressed emotion, inner confusion",
        past: "You overcame fears and illusions",
        present: "Clarity is emerging from confusion",
        future: "Hidden truths will be revealed"
      }
    }
  },
  {
    name: "The Sun",
    cardName: "the_sun",
    arcana: "major",
    number: 19,
    meanings: {
      upright: {
        general: "Positivity, fun, warmth, success, vitality",
        past: "Joy and success illuminated your path",
        present: "Everything is going well; enjoy this positive time",
        future: "Success and happiness are assured"
      },
      reversed: {
        general: "Inner child, feeling down, overly optimistic",
        past: "Excessive optimism or temporary setbacks occurred",
        present: "You're feeling less enthusiastic than usual",
        future: "Delays in happiness, but it will still come"
      }
    }
  },
  {
    name: "Judgement",
    cardName: "judgement",
    arcana: "major",
    number: 20,
    meanings: {
      upright: {
        general: "Judgement, rebirth, inner calling, absolution",
        past: "A moment of reckoning brought transformation",
        present: "You're being called to a higher purpose",
        future: "A time of judgement and renewal approaches"
      },
      reversed: {
        general: "Self-doubt, inner critic, ignoring the call",
        past: "You ignored your calling or judged yourself harshly",
        present: "You're doubting yourself or avoiding your purpose",
        future: "Answer your calling or face regret"
      }
    }
  },
  {
    name: "The World",
    cardName: "the_world",
    arcana: "major",
    number: 21,
    meanings: {
      upright: {
        general: "Completion, integration, accomplishment, travel",
        past: "You successfully completed a major life cycle",
        present: "You're reaching completion and fulfillment",
        future: "Success and accomplishment await you"
      },
      reversed: {
        general: "Seeking personal closure, short-cuts, delays",
        past: "Incomplete goals or unfinished business lingered",
        present: "You're close to completion but not quite there",
        future: "Tie up loose ends to move forward"
      }
    }
  },

  // MINOR ARCANA - WANDS (14 cards)
  {
    name: "Ace of Wands",
    cardName: "wands_ace",
    arcana: "minor",
    suit: "wands",
    meanings: {
      upright: {
        general: "Inspiration, new opportunities, growth, potential",
        past: "A spark of inspiration set things in motion",
        present: "New creative opportunities are emerging",
        future: "Exciting new ventures are on the horizon"
      },
      reversed: {
        general: "Emerging creativity, lack of direction, distractions",
        past: "Missed opportunities or lack of direction held you back",
        present: "You're struggling to find your creative spark",
        future: "Delays in new projects may occur"
      }
    }
  },
  {
    name: "Two of Wands",
    cardName: "wands_two",
    arcana: "minor",
    suit: "wands",
    meanings: {
      upright: {
        general: "Future planning, progress, decisions, discovery",
        past: "Planning and vision set your current path",
        present: "You're planning your next move",
        future: "Your plans will lead to expansion"
      },
      reversed: {
        general: "Personal goals, inner alignment, fear of unknown",
        past: "Fear prevented you from expanding",
        present: "You're feeling stuck in planning phase",
        future: "Overcome fear to move forward"
      }
    }
  },
  {
    name: "Three of Wands",
    cardName: "wands_three",
    arcana: "minor",
    suit: "wands",
    meanings: {
      upright: {
        general: "Progress, expansion, foresight, overseas opportunities",
        past: "Your foresight led to expansion",
        present: "Your plans are beginning to bear fruit",
        future: "Growth and expansion are coming"
      },
      reversed: {
        general: "Playing small, lack of foresight, unexpected delays",
        past: "Lack of planning caused setbacks",
        present: "Your expansion is delayed or blocked",
        future: "Reassess your plans before proceeding"
      }
    }
  },
  {
    name: "Four of Wands",
    cardName: "wands_four",
    arcana: "minor",
    suit: "wands",
    meanings: {
      upright: {
        general: "Celebration, joy, harmony, relaxation, homecoming",
        past: "A celebration marked an important milestone",
        present: "Enjoy this time of happiness and stability",
        future: "A joyous celebration approaches"
      },
      reversed: {
        general: "Personal celebration, inner harmony, conflict with others",
        past: "Conflicts marred celebrations",
        present: "You're finding it hard to celebrate or relax",
        future: "Address conflicts before celebrating"
      }
    }
  },
  {
    name: "Five of Wands",
    cardName: "wands_five",
    arcana: "minor",
    suit: "wands",
    meanings: {
      upright: {
        general: "Conflict, disagreements, competition, tension",
        past: "Competition or conflict challenged you",
        present: "You're facing rivalry or internal conflict",
        future: "Prepare for competition or disagreements"
      },
      reversed: {
        general: "Inner conflict, conflict avoidance, tension release",
        past: "Avoiding conflict created more problems",
        present: "Conflicts are resolving or being internalized",
        future: "Release of tension is coming"
      }
    }
  },
  {
    name: "Six of Wands",
    cardName: "wands_six",
    arcana: "minor",
    suit: "wands",
    meanings: {
      upright: {
        general: "Success, public recognition, progress, self-confidence",
        past: "Victory and recognition came your way",
        present: "You're experiencing success and acclaim",
        future: "Public recognition and success await"
      },
      reversed: {
        general: "Private achievement, personal definition of success, fall from grace",
        past: "Success was short-lived or went unrecognized",
        present: "You're doubting your abilities despite success",
        future: "Define success on your own terms"
      }
    }
  },
  {
    name: "Seven of Wands",
    cardName: "wands_seven",
    arcana: "minor",
    suit: "wands",
    meanings: {
      upright: {
        general: "Challenge, competition, protection, perseverance",
        past: "You defended your position against opposition",
        present: "Stand your ground against challenges",
        future: "You'll need to defend your position"
      },
      reversed: {
        general: "Exhaustion, giving up, overwhelmed",
        past: "You gave up when challenged",
        present: "You're feeling overwhelmed by opposition",
        future: "Choose your battles wisely"
      }
    }
  },
  {
    name: "Eight of Wands",
    cardName: "wands_eight",
    arcana: "minor",
    suit: "wands",
    meanings: {
      upright: {
        general: "Movement, fast paced change, action, alignment",
        past: "Rapid developments changed your situation",
        present: "Things are moving quickly now",
        future: "Swift progress and movement ahead"
      },
      reversed: {
        general: "Delays, frustration, resisting change, internal alignment",
        past: "Delays frustrated your progress",
        present: "Things are moving slower than expected",
        future: "Patience is needed as delays occur"
      }
    }
  },
  {
    name: "Nine of Wands",
    cardName: "wands_nine",
    arcana: "minor",
    suit: "wands",
    meanings: {
      upright: {
        general: "Resilience, courage, persistence, test of faith",
        past: "You persevered through difficult tests",
        present: "You're battle-weary but must persist",
        future: "One final challenge before success"
      },
      reversed: {
        general: "Inner resources, struggle, overwhelm, defensive",
        past: "You struggled to maintain boundaries",
        present: "You're feeling exhausted and defensive",
        future: "Rest and recover before the next challenge"
      }
    }
  },
  {
    name: "Ten of Wands",
    cardName: "wands_ten",
    arcana: "minor",
    suit: "wands",
    meanings: {
      upright: {
        general: "Burden, extra responsibility, hard work, completion",
        past: "Heavy responsibilities weighed you down",
        present: "You're carrying too much on your shoulders",
        future: "Increased responsibilities are coming"
      },
      reversed: {
        general: "Doing it all, carrying the burden, delegation, release",
        past: "You released burdens that weren't yours",
        present: "It's time to delegate and lighten your load",
        future: "Relief from burdens is near"
      }
    }
  },
  {
    name: "Page of Wands",
    cardName: "wands_page",
    arcana: "minor",
    suit: "wands",
    meanings: {
      upright: {
        general: "Inspiration, ideas, discovery, limitless potential, free spirit",
        past: "Youthful enthusiasm sparked new interests",
        present: "Explore new ideas with enthusiasm",
        future: "Good news or exciting opportunities approach"
      },
      reversed: {
        general: "Newly formed ideas, redirecting energy, self-limiting beliefs",
        past: "Lack of direction scattered your energy",
        present: "You're struggling to focus your enthusiasm",
        future: "Develop your ideas before sharing them"
      }
    }
  },
  {
    name: "Knight of Wands",
    cardName: "wands_knight",
    arcana: "minor",
    suit: "wands",
    meanings: {
      upright: {
        general: "Energy, passion, inspired action, adventure, impulsiveness",
        past: "Passionate pursuit drove your actions",
        present: "Take bold action toward your goals",
        future: "An adventurous journey awaits"
      },
      reversed: {
        general: "Passion project, haste, scattered energy, delays",
        past: "Impulsiveness led to hasty mistakes",
        present: "Your energy is scattered and unfocused",
        future: "Slow down to avoid burnout"
      }
    }
  },
  {
    name: "Queen of Wands",
    cardName: "wands_queen",
    arcana: "minor",
    suit: "wands",
    meanings: {
      upright: {
        general: "Courage, confidence, independence, social butterfly, determination",
        past: "Confidence and charisma served you well",
        present: "Embrace your power and authenticity",
        future: "Your confidence will attract success"
      },
      reversed: {
        general: "Self-respect, self-confidence, introverted, re-establish sense of self",
        past: "Insecurity undermined your efforts",
        present: "Rebuild your confidence and self-worth",
        future: "Focus on self-development"
      }
    }
  },
  {
    name: "King of Wands",
    cardName: "wands_king",
    arcana: "minor",
    suit: "wands",
    meanings: {
      upright: {
        general: "Natural-born leader, vision, entrepreneur, honour",
        past: "Strong leadership brought success",
        present: "Lead with vision and integrity",
        future: "Step into a leadership role"
      },
      reversed: {
        general: "Impulsiveness, haste, ruthless, high expectations",
        past: "Aggressive leadership caused problems",
        present: "You're being too forceful or impulsive",
        future: "Temper your ambition with wisdom"
      }
    }
  },

  // MINOR ARCANA - CUPS (14 cards)
  {
    name: "Ace of Cups",
    cardName: "cups_ace",
    arcana: "minor",
    suit: "cups",
    meanings: {
      upright: {
        general: "Love, new relationships, compassion, creativity",
        past: "New love or emotional connection blessed you",
        present: "Your heart is open to new emotional experiences",
        future: "New love or deep emotional fulfillment approaches"
      },
      reversed: {
        general: "Self-love, intuition, repressed emotions",
        past: "Emotional blockages prevented connection",
        present: "Focus on self-love and healing",
        future: "Release emotional baggage to receive love"
      }
    }
  },
  {
    name: "Two of Cups",
    cardName: "cups_two",
    arcana: "minor",
    suit: "cups",
    meanings: {
      upright: {
        general: "Unified love, partnership, mutual attraction",
        past: "A meaningful partnership formed",
        present: "You're experiencing harmonious connection",
        future: "A significant partnership is forming"
      },
      reversed: {
        general: "Self-love, break-ups, disharmony, distrust",
        past: "A relationship ended or became imbalanced",
        present: "There's tension in your partnerships",
        future: "Address relationship issues or risk separation"
      }
    }
  },
  {
    name: "Three of Cups",
    cardName: "cups_three",
    arcana: "minor",
    suit: "cups",
    meanings: {
      upright: {
        general: "Celebration, friendship, creativity, collaborations",
        past: "Joy and friendship enriched your life",
        present: "Celebrate with friends and loved ones",
        future: "Social gatherings and celebrations ahead"
      },
      reversed: {
        general: "Independence, alone time, hardcore partying, 'three's a crowd'",
        past: "Social conflicts or overindulgence occurred",
        present: "You need time alone or are feeling excluded",
        future: "Balance social time with solitude"
      }
    }
  },
  {
    name: "Four of Cups",
    cardName: "cups_four",
    arcana: "minor",
    suit: "cups",
    meanings: {
      upright: {
        general: "Meditation, contemplation, apathy, reevaluation",
        past: "Discontent led to introspection",
        present: "You're feeling apathetic or uninspired",
        future: "Look beyond current options for new opportunities"
      },
      reversed: {
        general: "Retreat, withdrawal, checking in for alignment",
        past: "You withdrew to find clarity",
        present: "You're emerging from a period of introspection",
        future: "New perspectives will revitalize you"
      }
    }
  },
  {
    name: "Five of Cups",
    cardName: "cups_five",
    arcana: "minor",
    suit: "cups",
    meanings: {
      upright: {
        general: "Regret, failure, disappointment, pessimism",
        past: "Loss or disappointment affected you deeply",
        present: "You're focused on what went wrong",
        future: "Accept loss and look toward what remains"
      },
      reversed: {
        general: "Personal setbacks, self-forgiveness, moving on",
        past: "You overcame grief and moved forward",
        present: "You're beginning to heal and find acceptance",
        future: "Emotional healing and recovery ahead"
      }
    }
  },
  {
    name: "Six of Cups",
    cardName: "cups_six",
    arcana: "minor",
    suit: "cups",
    meanings: {
      upright: {
        general: "Revisiting the past, childhood memories, innocence, joy",
        past: "Nostalgia or past connections influenced you",
        present: "The past is calling to you",
        future: "A reunion or nostalgic experience awaits"
      },
      reversed: {
        general: "Living in the past, forgiveness, lacking playfulness",
        past: "You were stuck in the past",
        present: "Release the past and embrace the present",
        future: "Let go of old patterns to move forward"
      }
    }
  },
  {
    name: "Seven of Cups",
    cardName: "cups_seven",
    arcana: "minor",
    suit: "cups",
    meanings: {
      upright: {
        general: "Opportunities, choices, wishful thinking, illusion",
        past: "Many options led to confusion",
        present: "You have many choices but lack clarity",
        future: "Discernment is needed among many options"
      },
      reversed: {
        general: "Alignment, personal values, overwhelmed by choices",
        past: "Illusions were shattered, revealing truth",
        present: "Clarity is emerging from confusion",
        future: "Make grounded, realistic choices"
      }
    }
  },
  {
    name: "Eight of Cups",
    cardName: "cups_eight",
    arcana: "minor",
    suit: "cups",
    meanings: {
      upright: {
        general: "Disappointment, abandonment, withdrawal, escapism",
        past: "You walked away from an unfulfilling situation",
        present: "It's time to leave something behind",
        future: "A journey of self-discovery awaits"
      },
      reversed: {
        general: "Trying one more time, indecision, aimless drifting",
        past: "Fear prevented necessary change",
        present: "You're hesitating to move on",
        future: "Commit to change or accept stagnation"
      }
    }
  },
  {
    name: "Nine of Cups",
    cardName: "cups_nine",
    arcana: "minor",
    suit: "cups",
    meanings: {
      upright: {
        general: "Contentment, satisfaction, gratitude, wish come true",
        past: "Your wishes were fulfilled",
        present: "You're experiencing emotional satisfaction",
        future: "Your dreams will come true"
      },
      reversed: {
        general: "Inner happiness, materialism, dissatisfaction, indulgence",
        past: "Material success didn't bring happiness",
        present: "You're seeking fulfillment in the wrong places",
        future: "True happiness comes from within"
      }
    }
  },
  {
    name: "Ten of Cups",
    cardName: "cups_ten",
    arcana: "minor",
    suit: "cups",
    meanings: {
      upright: {
        general: "Divine love, blissful relationships, harmony, alignment",
        past: "Harmonious relationships blessed your life",
        present: "You're experiencing emotional fulfillment",
        future: "Lasting happiness and harmony ahead"
      },
      reversed: {
        general: "Disconnection, misaligned values, struggling relationships",
        past: "Family or relationship discord occurred",
        present: "Your relationships feel out of alignment",
        future: "Work on relationships or accept their nature"
      }
    }
  },
  {
    name: "Page of Cups",
    cardName: "cups_page",
    arcana: "minor",
    suit: "cups",
    meanings: {
      upright: {
        general: "Creative opportunities, curiosity, possibility, new ideas",
        past: "Emotional curiosity opened new doors",
        present: "Be open to creative and emotional messages",
        future: "Good news about love or creativity coming"
      },
      reversed: {
        general: "New ideas, doubting intuition, emotional immaturity",
        past: "Emotional immaturity caused issues",
        present: "You're doubting your creative instincts",
        future: "Develop emotional intelligence"
      }
    }
  },
  {
    name: "Knight of Cups",
    cardName: "cups_knight",
    arcana: "minor",
    suit: "cups",
    meanings: {
      upright: {
        general: "Creativity, romance, charm, imagination, beauty",
        past: "Romance or creative pursuit inspired you",
        present: "Follow your heart and creative vision",
        future: "A romantic or creative opportunity approaches"
      },
      reversed: {
        general: "Overactive imagination, unrealistic, jealous, moody",
        past: "Unrealistic expectations led to disappointment",
        present: "You're being overly idealistic",
        future: "Ground your dreams in reality"
      }
    }
  },
  {
    name: "Queen of Cups",
    cardName: "cups_queen",
    arcana: "minor",
    suit: "cups",
    meanings: {
      upright: {
        general: "Compassion, warmth, kindness, intuition, healer",
        past: "Emotional intelligence guided you well",
        present: "Trust your intuition and show compassion",
        future: "Emotional maturity will serve you"
      },
      reversed: {
        general: "Inner feelings, self-care, self-love, co-dependency",
        past: "Emotional overwhelm or co-dependency occurred",
        present: "You're giving too much to others",
        future: "Prioritize self-care and boundaries"
      }
    }
  },
  {
    name: "King of Cups",
    cardName: "cups_king",
    arcana: "minor",
    suit: "cups",
    meanings: {
      upright: {
        general: "Emotional balance, control, generosity, diplomatic",
        past: "Emotional maturity brought stability",
        present: "Balance your emotions with wisdom",
        future: "Emotional mastery will guide you"
      },
      reversed: {
        general: "Self-compassion, inner feelings, moodiness, emotionally manipulative",
        past: "Emotional manipulation or moodiness caused problems",
        present: "You're struggling with emotional control",
        future: "Develop emotional self-awareness"
      }
    }
  },

  // MINOR ARCANA - SWORDS (14 cards)
  {
    name: "Ace of Swords",
    cardName: "swords_ace",
    arcana: "minor",
    suit: "swords",
    meanings: {
      upright: {
        general: "Breakthroughs, new ideas, mental clarity, success",
        past: "A moment of clarity changed everything",
        present: "New ideas and mental breakthroughs are occurring",
        future: "A flash of insight will show the way"
      },
      reversed: {
        general: "Inner clarity, re-thinking an idea, clouded judgment",
        past: "Confusion or poor judgment led astray",
        present: "Your thinking is clouded or confused",
        future: "Seek clarity before making decisions"
      }
    }
  },
  {
    name: "Two of Swords",
    cardName: "swords_two",
    arcana: "minor",
    suit: "swords",
    meanings: {
      upright: {
        general: "Difficult decisions, weighing options, an impasse, avoidance",
        past: "Indecision or avoidance delayed progress",
        present: "You're at a crossroads and must choose",
        future: "A difficult choice awaits"
      },
      reversed: {
        general: "Indecision, confusion, information overload, stalemate",
        past: "You broke through a stalemate",
        present: "Clarity is emerging from confusion",
        future: "The answer will reveal itself"
      }
    }
  },
  {
    name: "Three of Swords",
    cardName: "swords_three",
    arcana: "minor",
    suit: "swords",
    meanings: {
      upright: {
        general: "Heartbreak, emotional pain, sorrow, grief, hurt",
        past: "Painful experiences wounded you",
        present: "You're experiencing heartbreak or sorrow",
        future: "Emotional pain is coming but will lead to healing"
      },
      reversed: {
        general: "Negative self-talk, releasing pain, optimism, forgiveness",
        past: "You began healing from past wounds",
        present: "You're recovering from heartbreak",
        future: "Healing and forgiveness are near"
      }
    }
  },
  {
    name: "Four of Swords",
    cardName: "swords_four",
    arcana: "minor",
    suit: "swords",
    meanings: {
      upright: {
        general: "Rest, relaxation, meditation, contemplation, recuperation",
        past: "Rest and recovery restored you",
        present: "Take time to rest and recharge",
        future: "A period of rest is needed"
      },
      reversed: {
        general: "Exhaustion, burn-out, deep contemplation, stagnation",
        past: "Burnout forced you to stop",
        present: "You're emerging from rest, ready to act",
        future: "Avoid burnout by resting now"
      }
    }
  },
  {
    name: "Five of Swords",
    cardName: "swords_five",
    arcana: "minor",
    suit: "swords",
    meanings: {
      upright: {
        general: "Conflict, disagreements, competition, defeat, winning at all costs",
        past: "A conflict left wounds on all sides",
        present: "You're in or approaching a conflict",
        future: "Choose battles wisely; not all are worth winning"
      },
      reversed: {
        general: "Reconciliation, making amends, past resentment",
        past: "You made peace after conflict",
        present: "Resolution and reconciliation are possible",
        future: "Let go of resentment to move forward"
      }
    }
  },
  {
    name: "Six of Swords",
    cardName: "swords_six",
    arcana: "minor",
    suit: "swords",
    meanings: {
      upright: {
        general: "Transition, change, rite of passage, releasing baggage",
        past: "You moved on from difficult times",
        present: "You're in transition to calmer waters",
        future: "A journey toward better times awaits"
      },
      reversed: {
        general: "Personal transition, resistance to change, unfinished business",
        past: "Resistance prolonged difficult times",
        present: "You're struggling to let go and move on",
        future: "Release the past to move forward"
      }
    }
  },
  {
    name: "Seven of Swords",
    cardName: "swords_seven",
    arcana: "minor",
    suit: "swords",
    meanings: {
      upright: {
        general: "Betrayal, deception, getting away with something, acting strategically",
        past: "Deception or betrayal affected you",
        present: "Be cautious of deception or hidden motives",
        future: "Strategy is needed, but beware of dishonesty"
      },
      reversed: {
        general: "Imposter syndrome, self-deceit, keeping secrets",
        past: "You came clean or were exposed",
        present: "Honesty is needed now",
        future: "The truth will come out"
      }
    }
  },
  {
    name: "Eight of Swords",
    cardName: "swords_eight",
    arcana: "minor",
    suit: "swords",
    meanings: {
      upright: {
        general: "Negative thoughts, self-imposed restriction, imprisonment, victim mentality",
        past: "You felt trapped by circumstances",
        present: "You're limiting yourself with negative thinking",
        future: "Recognize your power to free yourself"
      },
      reversed: {
        general: "Self-limiting beliefs, inner critic, releasing negative thoughts, open to new perspectives",
        past: "You freed yourself from mental prison",
        present: "You're breaking free from limitations",
        future: "Freedom from self-imposed restrictions ahead"
      }
    }
  },
  {
    name: "Nine of Swords",
    cardName: "swords_nine",
    arcana: "minor",
    suit: "swords",
    meanings: {
      upright: {
        general: "Anxiety, worry, fear, depression, nightmares",
        past: "Anxiety and worry plagued you",
        present: "Your fears are overwhelming you",
        future: "Address anxieties now to prevent future suffering"
      },
      reversed: {
        general: "Inner turmoil, deep-seated fears, secrets, releasing worry",
        past: "You overcame anxiety and fear",
        present: "You're beginning to release your worries",
        future: "Peace of mind is returning"
      }
    }
  },
  {
    name: "Ten of Swords",
    cardName: "swords_ten",
    arcana: "minor",
    suit: "swords",
    meanings: {
      upright: {
        general: "Painful endings, deep wounds, betrayal, loss, crisis",
        past: "A painful ending marked a low point",
        present: "You're experiencing a difficult ending",
        future: "The only way is up from here"
      },
      reversed: {
        general: "Recovery, regeneration, resisting an inevitable end",
        past: "You recovered from rock bottom",
        present: "You're healing from past wounds",
        future: "Recovery and new beginnings ahead"
      }
    }
  },
  {
    name: "Page of Swords",
    cardName: "swords_page",
    arcana: "minor",
    suit: "swords",
    meanings: {
      upright: {
        general: "New ideas, curiosity, thirst for knowledge, new ways of communicating",
        past: "Curiosity and new ideas energized you",
        present: "Explore ideas and communicate clearly",
        future: "News or new information is coming"
      },
      reversed: {
        general: "Self-expression, all talk and no action, haphazard action, haste",
        past: "Hasty communication caused problems",
        present: "Think before you speak or act",
        future: "Develop ideas fully before sharing"
      }
    }
  },
  {
    name: "Knight of Swords",
    cardName: "swords_knight",
    arcana: "minor",
    suit: "swords",
    meanings: {
      upright: {
        general: "Ambitious, action-oriented, driven to succeed, fast thinking",
        past: "Ambitious action drove rapid progress",
        present: "Act quickly and decisively",
        future: "Swift action will bring results"
      },
      reversed: {
        general: "Restless, unfocused, impulsive, burn-out",
        past: "Impulsive actions led to mistakes",
        present: "You're scattered and unfocused",
        future: "Slow down to avoid costly errors"
      }
    }
  },
  {
    name: "Queen of Swords",
    cardName: "swords_queen",
    arcana: "minor",
    suit: "swords",
    meanings: {
      upright: {
        general: "Independent, unbiased judgment, clear boundaries, direct communication",
        past: "Clear thinking and boundaries served you",
        present: "Think clearly and communicate directly",
        future: "Intellectual clarity will guide you"
      },
      reversed: {
        general: "Overly-emotional, easily influenced, bitchy, cold-hearted",
        past: "Harsh judgment or coldness caused hurt",
        present: "Balance intellect with compassion",
        future: "Soften your approach while staying clear"
      }
    }
  },
  {
    name: "King of Swords",
    cardName: "swords_king",
    arcana: "minor",
    suit: "swords",
    meanings: {
      upright: {
        general: "Mental clarity, intellectual power, authority, truth",
        past: "Intellectual mastery brought success",
        present: "Use your mind and communicate with authority",
        future: "Intellectual leadership will be required"
      },
      reversed: {
        general: "Quiet power, inner truth, misuse of power, manipulation",
        past: "Manipulation or abuse of power occurred",
        present: "You're using intellect destructively",
        future: "Use your mental power ethically"
      }
    }
  },

  // MINOR ARCANA - PENTACLES (14 cards)
  {
    name: "Ace of Pentacles",
    cardName: "pentacles_ace",
    arcana: "minor",
    suit: "pentacles",
    meanings: {
      upright: {
        general: "A new financial or career opportunity, manifestation, abundance",
        past: "A material opportunity set you on this path",
        present: "New prosperity is taking root",
        future: "Financial opportunity is coming"
      },
      reversed: {
        general: "Lost opportunity, lack of planning, scarcity mindset",
        past: "Missed opportunities or poor planning occurred",
        present: "You're not seeing the opportunities available",
        future: "Plan carefully to manifest abundance"
      }
    }
  },
  {
    name: "Two of Pentacles",
    cardName: "pentacles_two",
    arcana: "minor",
    suit: "pentacles",
    meanings: {
      upright: {
        general: "Multiple priorities, time management, prioritization, adaptability",
        past: "You juggled multiple responsibilities",
        present: "Balance is needed in your life",
        future: "Flexibility will be required"
      },
      reversed: {
        general: "Over-committed, disorganization, reprioritization",
        past: "Poor balance led to problems",
        present: "You're overwhelmed by competing demands",
        future: "Simplify and prioritize"
      }
    }
  },
  {
    name: "Three of Pentacles",
    cardName: "pentacles_three",
    arcana: "minor",
    suit: "pentacles",
    meanings: {
      upright: {
        general: "Teamwork, collaboration, learning, implementation",
        past: "Collaboration brought success",
        present: "Work with others to achieve goals",
        future: "Teamwork will lead to success"
      },
      reversed: {
        general: "Disharmony, misalignment, working alone",
        past: "Poor collaboration caused setbacks",
        present: "You're not working well with others",
        future: "Improve communication and cooperation"
      }
    }
  },
  {
    name: "Four of Pentacles",
    cardName: "pentacles_four",
    arcana: "minor",
    suit: "pentacles",
    meanings: {
      upright: {
        general: "Saving money, security, conservatism, scarcity, control",
        past: "Holding tight to security shaped your path",
        present: "You're being overly conservative or controlling",
        future: "Balance security with generosity"
      },
      reversed: {
        general: "Over-spending, greed, self-protection",
        past: "Greed or overspending caused issues",
        present: "You're releasing your grip on material things",
        future: "Generosity will bring abundance"
      }
    }
  },
  {
    name: "Five of Pentacles",
    cardName: "pentacles_five",
    arcana: "minor",
    suit: "pentacles",
    meanings: {
      upright: {
        general: "Financial loss, poverty, lack mindset, isolation, worry",
        past: "Financial hardship or loss affected you",
        present: "You're experiencing material or spiritual poverty",
        future: "Seek help and support during difficult times"
      },
      reversed: {
        general: "Recovery from financial loss, spiritual poverty",
        past: "You recovered from hardship",
        present: "Things are improving financially",
        future: "Recovery and improvement ahead"
      }
    }
  },
  {
    name: "Six of Pentacles",
    cardName: "pentacles_six",
    arcana: "minor",
    suit: "pentacles",
    meanings: {
      upright: {
        general: "Giving, receiving, sharing wealth, generosity, charity",
        past: "Generosity or receiving help blessed you",
        present: "Share your abundance with others",
        future: "You'll be in a position to give or receive help"
      },
      reversed: {
        general: "Self-care, unpaid debts, one-sided charity",
        past: "Imbalanced giving caused resentment",
        present: "Giving or receiving is out of balance",
        future: "Ensure reciprocity in exchanges"
      }
    }
  },
  {
    name: "Seven of Pentacles",
    cardName: "pentacles_seven",
    arcana: "minor",
    suit: "pentacles",
    meanings: {
      upright: {
        general: "Long-term view, sustainable results, perseverance, investment",
        past: "Patient investment is paying off",
        present: "Assess your progress and long-term goals",
        future: "Your efforts will bear fruit with patience"
      },
      reversed: {
        general: "Lack of long-term vision, limited success, impatience",
        past: "Impatience undermined your efforts",
        present: "You're frustrated with slow progress",
        future: "Patience is required for success"
      }
    }
  },
  {
    name: "Eight of Pentacles",
    cardName: "pentacles_eight",
    arcana: "minor",
    suit: "pentacles",
    meanings: {
      upright: {
        general: "Apprenticeship, repetitive tasks, mastery, skill development",
        past: "Dedication to craft brought expertise",
        present: "Focus on developing your skills",
        future: "Mastery comes through practice"
      },
      reversed: {
        general: "Self-development, perfectionism, misdirected activity",
        past: "Perfectionism or lack of focus held you back",
        present: "You're lacking focus in your work",
        future: "Refocus on quality and purpose"
      }
    }
  },
  {
    name: "Nine of Pentacles",
    cardName: "pentacles_nine",
    arcana: "minor",
    suit: "pentacles",
    meanings: {
      upright: {
        general: "Abundance, luxury, self-sufficiency, financial independence",
        past: "Your efforts created prosperity",
        present: "Enjoy the fruits of your labor",
        future: "Financial independence is assured"
      },
      reversed: {
        general: "Self-worth, over-investment in work, hustling",
        past: "Work-life imbalance affected wellbeing",
        present: "Your self-worth is tied to achievement",
        future: "Find balance between work and pleasure"
      }
    }
  },
  {
    name: "Ten of Pentacles",
    cardName: "pentacles_ten",
    arcana: "minor",
    suit: "pentacles",
    meanings: {
      upright: {
        general: "Wealth, financial security, family, long-term success, contribution",
        past: "Family or legacy shaped your foundation",
        present: "You're building lasting security",
        future: "Long-term prosperity and legacy ahead"
      },
      reversed: {
        general: "The dark side of wealth, financial failure, loneliness",
        past: "Financial problems or family issues occurred",
        present: "Material success isn't bringing fulfillment",
        future: "Redefine what wealth means to you"
      }
    }
  },
  {
    name: "Page of Pentacles",
    cardName: "pentacles_page",
    arcana: "minor",
    suit: "pentacles",
    meanings: {
      upright: {
        general: "Manifestation, financial opportunity, skill development, new job",
        past: "A new opportunity or study began",
        present: "Be open to learning and new opportunities",
        future: "Good news about money or career coming"
      },
      reversed: {
        general: "Lack of progress, procrastination, learn from failure",
        past: "Procrastination delayed success",
        present: "You're not following through on plans",
        future: "Commit to your goals with action"
      }
    }
  },
  {
    name: "Knight of Pentacles",
    cardName: "pentacles_knight",
    arcana: "minor",
    suit: "pentacles",
    meanings: {
      upright: {
        general: "Hard work, productivity, routine, conservatism, diligence",
        past: "Steady effort brought reliable results",
        present: "Work diligently toward your goals",
        future: "Persistence will pay off"
      },
      reversed: {
        general: "Self-discipline, boredom, feeling 'stuck', perfectionism",
        past: "Rigidity or boredom stalled progress",
        present: "You're stuck in a rut or being too perfectionist",
        future: "Add flexibility to your routine"
      }
    }
  },
  {
    name: "Queen of Pentacles",
    cardName: "pentacles_queen",
    arcana: "minor",
    suit: "pentacles",
    meanings: {
      upright: {
        general: "Nurturing, practical, providing financially, a working parent",
        past: "Practical nurturing supported growth",
        present: "Balance work and home with grace",
        future: "Prosperity through practical care"
      },
      reversed: {
        general: "Financial independence, self-care, work-home conflict",
        past: "Work-life balance was lost",
        present: "You're neglecting self-care or family",
        future: "Prioritize what truly matters"
      }
    }
  },
  {
    name: "King of Pentacles",
    cardName: "pentacles_king",
    arcana: "minor",
    suit: "pentacles",
    meanings: {
      upright: {
        general: "Wealth, business, leadership, security, discipline, abundance",
        past: "Material mastery brought success",
        present: "Lead with practical wisdom and abundance",
        future: "Financial success through leadership"
      },
      reversed: {
        general: "Financially inept, obsessed with wealth, stubborn, materialistic",
        past: "Greed or poor financial decisions caused problems",
        present: "You're too focused on material gain",
        future: "Balance material success with other values"
      }
    }
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = tarotCards;
}
