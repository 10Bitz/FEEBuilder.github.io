// import {  characters} from "./characters.js";
// import {  classes} from "./classes.js";


//////////Use Modular code to reference other scripts in Main, doesn't work on VPN
const characters = [
  {name: "Alear", growths: [0.6,0.35,0.2,0.45,0.5,0.4,0.25,0.25,0.05],bases: ["Dragon Child",1,0,0,0,0,3,0,0,0,3,0,0],StatCap: [1,0,1,1,0,0,0], InateProf: ["Sword"] },
{name: "Vander", growths: [0.6,0.25,0.1,0.25,0.35,0.35,0.2,0.1,0.05],bases: ["Paladin",1,15,15,3,3,0,0,4,5,3,1,0],StatCap: [1,-1,1,-2,3,-2,0], InateProf: ["Axe"] },
{name: "Clanne", growths: [0.4,0.35,0.1,0.4,0.5,0.3,0.25,0.2,0.05],bases: ["Mage",1,0,1,0,1,5,3,3,0,2,0,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Tome"] },
{name: "Framme", growths: [0.55,0.3,0.25,0.35,0.55,0.25,0.3,0.25,0],bases: ["Martial Monk",1,0,0,0,0,2,2,1,0,2,0,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Arts"] },
{name: "Alfred", growths: [0.65,0.4,0.05,0.35,0.4,0.4,0.2,0.4,0.1],bases: ["Noble (Alfred)",5,4,3,2,0,4,1,2,1,4,0,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Lance"] },
{name: "Etie", growths: [0.45,0.4,0,0.25,0.35,0.25,0.3,0.25,0.05],bases: ["Archer",4,3,2,4,0,2,1,1,1,6,0,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Bow"] },
{name: "Boucheron", growths: [0.85,0.2,0,0.5,0.45,0.35,0.2,0.15,0.2],bases: ["Axe Fighter",4,3,3,1,0,3,2,3,2,4,2,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Axe"] },
{name: "Celine", growths: [0.5,0.35,0.25,0.3,0.45,0.3,0.4,0.5,0.05],bases: ["Noble (Celine)",5,4,2,2,1,4,2,2,2,7,0,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Tome"] },
{name: "Chloé", growths: [0.75,0.25,0.35,0.4,0.55,0.3,0.25,0.25,0.05],bases: ["Lance Flier",6,5,5,3,2,6,4,2,2,7,1,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Lance"] },
{name: "Louis", growths: [0.75,0.4,0,0.25,0.25,0.5,0.2,0.25,0.15],bases: ["Lance Armor",6,5,5,5,0,5,2,4,1,2,1,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Lance"] },
{name: "Yunaka", growths: [0.5,0.35,0.25,0.4,0.45,0.15,0.45,0.25,0.05],bases: ["Thief",6,5,3,3,5,4,2,3,5,6,1,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Knife"] },
{name: "Alcryst", growths: [0.65,0.3,0.1,0.4,0.45,0.3,0.2,0.15,0.1],bases: ["Lord (Alcryst)",10,9,7,4,1,7,5,4,2,6,1,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Bow"] },
{name: "Citrinne", growths: [0.45,0.1,0.4,0.25,0.3,0.2,0.4,0.25,0.05],bases: ["Mage",10,9,6,1,8,7,4,2,5,8,0,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Tome"] },
{name: "Lapis", growths: [0.55,0.25,0.2,0.35,0.55,0.35,0.3,0.25,0.05],bases: ["Sword Fighter",10,9,6,6,2,5,6,4,4,5,0,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Sword"] },
{name: "Diamant", growths: [0.75,0.3,0.15,0.2,0.4,0.4,0.25,0.2,0.15],bases: ["Lord (Diamant)",11,10,9,5,2,6,5,5,3,7,2,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Sword"] },
{name: "Amber", growths: [0.65,0.45,0,0.25,0.3,0.35,0.05,0.35,0.15],bases: ["Lance Cavalier",11,10,8,9,1,5,4,5,1,7,2,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Lance"] },
{name: "Jade", growths: [0.55,0.35,0.25,0.35,0.3,0.4,0.3,0.2,0.1],bases: ["Axe Armor",12,11,8,6,4,8,4,6,6,3,1,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Axe"] },
{name: "Ivy", growths: [0.55,0.25,0.3,0.25,0.4,0.3,0.35,0.15,0.1],bases: ["Wing Tamer (Ivy)",17,16,12,6,9,11,9,6,7,3,2,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Tome"] },
{name: "Kagetsu", growths: [0.6,0.3,0.15,0.5,0.5,0.4,0.25,0.4,0.1],bases: ["Swordmaster",1,15,14,11,4,13,11,10,7,13,3,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Sword"] },
{name: "Zelkov", growths: [0.65,0.35,0.15,0.4,0.35,0.35,0.15,0.25,0.1],bases: ["Thief",17,16,13,10,3,9,9,8,3,5,5,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Knife"] },
{name: "Fogado", growths: [0.6,0.3,0.25,0.3,0.55,0.3,0.35,0.25,0.1],bases: ["Sentinel (Fogado)",17,16,12,7,6,8,11,6,8,6,2,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Bow"] },
{name: "Pandreo", growths: [0.6,0.05,0.3,0.45,0.45,0.15,0.55,0.3,0.15],bases: ["High Priest",1,15,14,4,8,10,11,5,12,9,4,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Staff"] },
{name: "Bunet", growths: [0.65,0.3,0.1,0.4,0.35,0.45,0.25,0.4,0.1],bases: ["Great Knight",1,15,15,6,3,7,4,7,6,10,3,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Sword"] },
{name: "Timerra", growths: [0.55,0.25,0.25,0.45,0.45,0.3,0.3,0.3,0.1],bases: ["Sentinel (Timerra)",18,17,11,6,5,12,11,8,7,7,1,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Lance"] },
{name: "Panette", growths: [0.75,0.45,0.1,0.4,0.25,0.3,0.15,0.2,0.15],bases: ["Berserker",1,15,17,12,3,13,7,8,5,9,2,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Knife"] },
{name: "Merrin", growths: [0.55,0.25,0.25,0.4,0.5,0.3,0.3,0.25,0.1],bases: ["Wolf Knight",1,15,13,9,7,12,11,8,8,10,3,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Knife"] },
{name: "Hortensia", growths: [0.4,0.2,0.2,0.35,0.5,0.25,0.55,0.5,0],bases: ["Wing Tamer (Hort.)",19,18,9,5,7,12,11,5,12,11,1,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Staff"] },
{name: "Seadall", growths: [0.55,0.25,0.15,0.25,0.5,0.25,0.25,0.35,0.1],bases: ["Dancer",15,14,12,7,3,7,8,8,5,6,3,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Arts"] },
{name: "Rosado", growths: [0.75,0.45,0.25,0.4,0.45,0.3,0.3,0.2,0.05],bases: ["Wyvern Knight",3,19,19,7,6,11,12,9,6,5,2,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Axe"] },
{name: "Goldmary", growths: [0.65,0.3,0.05,0.25,0.25,0.55,0.25,0.25,0.05],bases: ["Hero",3,19,17,9,2,10,11,15,10,10,2,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Lance"] },
{name: "Lindon", growths: [0.65,0.25,0.25,0.25,0.4,0.25,0.4,0.15,0.1],bases: ["Sage",5,22,18,7,10,13,12,9,12,5,5,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Staff"] },
{name: "Saphir", growths: [0.8,0.35,0,0.25,0.3,0.3,0.05,0.2,0.1],bases: ["Warrior",7,25,24,12,1,16,12,15,6,13,7,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Axe"] },
{name: "Veyle", growths: [0.4,0.25,0.45,0.35,0.3,0.25,0.35,0.2,0],bases: ["Fell Child (Veyle)",35,34,15,17,19,20,18,15,22,15,3,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Tome"] },
{name: "Mauvier", growths: [0.7,0.35,0.4,0.4,0.35,0.5,0.45,0.15,0.15],bases: ["Royal Knight",12,31,28,14,18,16,14,21,20,11,6,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Staff"] },
{name: "Anna", growths: [0.55,0.15,0.5,0.5,0.5,0.2,0.35,0.45,0.05],bases: ["Axe Fighter",5,4,3,1,2,4,2,1,4,2,0,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Bow"] },
{name: "Jean", growths: [0.5,0.2,0.2,0.35,0.4,0.25,0.2,0.25,0.05],bases: ["Martial Monk",1,0,1,1,0,4,2,1,0,0,0,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Arts"] },
{name: "Nel (DLC)", growths: [0.55,0.3,0.25,0.4,0.45,0.3,0.35,0.3,0.1],bases: ["Fell Child (Nel)",20,19,15,9,7,12,14,9,10,11,3,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Lance"]},
{name: "Rafal (DLC)", growths: [0.7,0.4,0.1,0.4,0.35,0.45,0.2,0.1,0.1],bases: ["Fell Child (Rafal)",20,19,19,14,2,12,11,15,6,7,4,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Axe"] },
{name: "Zelestia (DLC)", growths: [0.6,0.35,0.35,0.35,0.5,0.3,0.35,0.2,0.05],bases: ["Melusine",20,19,16,10,10,10,12,9,10,5,3,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Sword"] },
{name: "Gregory (DLC)", growths: [0.55,0.3,0.5,0.2,0.25,0.35,0.5,0.25,0.05],bases: ["Sage",1,19,15,9,16,5,6,10,16,6,3,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Staff"] },
{name: "Madeline (DLC)", growths: [0.75,0.5,0.2,0.15,0.15,0.55,0.25,0.25,0.1],bases: ["General",1,19,18,13,5,5,5,13,8,6,3,0],StatCap: [1,-1,2,2,-2,-1,0], InateProf: ["Axe"] }
 
];

const personalSkills = [
{name: "Alear", PersonalSkillName: "Divinely Inspiring", PersonalSkillDescription: "Adjacent allies deal +3 damage and take 1 less damage."},
{name: "Vander", PersonalSkillName: "Alabaster Duty", PersonalSkillDescription: "If unit is adjacent to the Divine Dragon, grants Crit+5 during combat to both of them."},
{name: "Clanne", PersonalSkillName: "Verdant Faith", PersonalSkillDescription: "If unit is adjacent to the Divine Dragon, grants Hit+10 during combat to both of them."},
{name: "Framme", PersonalSkillName: "Crimson Cheer", PersonalSkillDescription: "If unit is adjacent to the Divine Dragon, grants Avo+10 during combat to both of them."},
{name: "Alfred", PersonalSkillName: "Self-Improver", PersonalSkillDescription: "If unit uses Wait without attacking or using items, grants Str+2 for 1 turn."},
{name: "Etie", PersonalSkillName: "Energized", PersonalSkillDescription: "When unit recovers HP using an item, grants Str+2 for 1 turn."},
{name: "Boucheron", PersonalSkillName: "Moved to Tears", PersonalSkillDescription: "When an ally joins a chain attack in this unit’s combat, unit deals +2 damage."},
{name: "Celine", PersonalSkillName: "Gentle Flower", PersonalSkillDescription: "Recovery items used by allies within 2 spaces heal +50% HP."},
{name: "Chloé", PersonalSkillName: "Fairy-Tale Folk", PersonalSkillDescription: "If a male and a female ally are adjacent within 2 spaces, unit deals +2 damage during combat."},
{name: "Louis", PersonalSkillName: "Admiration", PersonalSkillDescription: "If two female allies are adjacent within 2 spaces, this unit takes 2 less damage during combat."},
{name: "Yunaka", PersonalSkillName: "Trained to Kill", PersonalSkillDescription: "While unit occupies terrain that provides an Avo bonus, grants Crit+15."},
{name: "Alcryst", PersonalSkillName: "Get Behind Me!", PersonalSkillDescription: "When an ally within 2 spaces is attacked, grants Str+3 to unit for 1 turn."},
{name: "Citrinne", PersonalSkillName: "Generosity", PersonalSkillDescription: "When this unit uses a healing item, adjacent allies also recover the same amount of HP."},
{name: "Lapis", PersonalSkillName: "Share Spoils", PersonalSkillDescription: "If there is an ally within 1 space, grants Hit/Avo+10 at a cost of Crit-10 to unit."},
{name: "Diamant", PersonalSkillName: "Fair Fight", PersonalSkillDescription: "If unit initiates combat, grants Hit+15 to unit and foe if foe is able to counterattack."},
{name: "Amber", PersonalSkillName: "Aspiring Hero", PersonalSkillDescription: "If no other units are within 1 space of unit or foe, grants Hit+20 at a cost of Avo-10 during combat."},
{name: "Jade", PersonalSkillName: "Meditation", PersonalSkillDescription: "If unit uses Wait without attacking or using items, grants Res+2 for 1 turn."},
{name: "Ivy", PersonalSkillName: "Single-Minded", PersonalSkillDescription: "During combat with a foe who was also unit’s most recent opponent, grants Hit+20."},
{name: "Kagetsu", PersonalSkillName: "Blinding Flash", PersonalSkillDescription: "If unit initiates combat, inflicts Avo-10 on foe during combat."},
{name: "Zelkov", PersonalSkillName: "Not *Quite*", PersonalSkillDescription: "If foe initiates combat, inflicts Hit-10 on that foe during combat."},
{name: "Fogado", PersonalSkillName: "Charmer", PersonalSkillDescription: "During combat with a foe who was also unit’s most recent opponent, inflicts Crit-10 on that foe."},
{name: "Pandreo", PersonalSkillName: "Party Animal", PersonalSkillDescription: "Grants a bonus to Hit and Avo equal to 3× the number of allies and foes within 2 spaces."},
{name: "Bunet", PersonalSkillName: "Seconds?", PersonalSkillDescription: "On eating a packed lunch, unit may obtain another of the same item. Trigger %=Lck."},
{name: "Timerra", PersonalSkillName: "Racket of Solm", PersonalSkillDescription: "Inflicts Crit-5 on foes within 3 spaces."},
{name: "Panette", PersonalSkillName: "Blood Fury", PersonalSkillDescription: "If unit’s HP is not at max after combat, grants Crit+10 as long as unit’s HP stays below max."},
{name: "Merrin", PersonalSkillName: "Knightly Escort", PersonalSkillDescription: "When 2 or more female allies are within 2 spaces, grants Hit/Avo+5 to unit and those allies."},
{name: "Hortensia", PersonalSkillName: "Big Personality", PersonalSkillDescription: "When unit uses a healing staff, grants range +1."},
{name: "Seadall", PersonalSkillName: "Curious Dance", PersonalSkillDescription: "At start of turn, allies within 2 spaces of unit recover 10% of their max HP."},
{name: "Rosado", PersonalSkillName: "Stunning Smile", PersonalSkillDescription: "If foe is male, inflicts Avo-20 on that foe during combat."},
{name: "Goldmary", PersonalSkillName: "Disarming Sigh", PersonalSkillDescription: "If foe is male, inflicts Hit-20 on that foe during combat."},
{name: "Lindon", PersonalSkillName: "Weapon Insight", PersonalSkillDescription: "If unit is equipped with a weapon of lower level than foe’s, grants Crit+20 during combat."},
{name: "Saphir", PersonalSkillName: "Will to Win", PersonalSkillDescription: "If unit’s HP is 50% or less at start of combat, grants Hit/Avo+20 during combat."},
{name: "Veyle", PersonalSkillName: "Fell Protection", PersonalSkillDescription: "Adjacent allies deal +1 damage and take 3 less damage."},
{name: "Mauvier", PersonalSkillName: "Contemplative", PersonalSkillDescription: "If unit uses Wait without attacking or using items, grants Def+2 for 1 turn."},
{name: "Anna", PersonalSkillName: "Make a Killing", PersonalSkillDescription: "May obtain 500G when unit defeats a foe. Trigger %=Lck."},
{name: "Jean", PersonalSkillName: "Expertise", PersonalSkillDescription: "Grants unit enhanced stat growth when leveling up. [Doubles class growths.]"},
{name: "Nel", PersonalSkillName: "Protective", PersonalSkillDescription: "If foe initiates combat against Rafal, grants Crit+10 to unit for 1 turn."},
{name: "Rafal", PersonalSkillName: "Rivalry", PersonalSkillDescription: "When an ally within 2 spaces defeats a foe, grants Crit+10 to unit for 1 turn."},
{name: "Nil", PersonalSkillName: "Wounded Pride", PersonalSkillDescription: "When an ally within 2 spaces defeats a foe, grants Crit+10 to unit for 1 turn."},
{name: "Zelestia", PersonalSkillName: "Friendly Boost", PersonalSkillDescription: "When unit defeats a foe, grants Hit+20 to allies within 2 spaces for 1 turn."},
{name: "Gregory", PersonalSkillName: "Survival Plan", PersonalSkillDescription: "When there are more foes than allies within 3 spaces, grants Avo+20."},
{name: "Madeline", PersonalSkillName: "Knightly Code", PersonalSkillDescription: "If foe initiates combat and unit is adjacent to an ally, unit takes 2 less damage."},
{name: "Alfred (foe)", PersonalSkillName: "Self-Defense", PersonalSkillDescription: "If unit uses Wait without attacking or using items, grants Str+2 for 1 turn."},
{name: "Celine (foe)", PersonalSkillName: "Fierce Bloom", PersonalSkillDescription: "Recovery items used by allies within 2 spaces heal +50% HP."},
{name: "Diamant (foe)", PersonalSkillName: "This Ends Here", PersonalSkillDescription: "If unit initiates combat, grants Hit+15 to unit and foe if foe is able to counterattack."},
{name: "Alcryst (foe)", PersonalSkillName: "Show-Off", PersonalSkillDescription: "When an ally within 2 spaces is attacked, grants Str+3 to unit for 1 turn."},
{name: "Ivy (foe)", PersonalSkillName: "Final Say", PersonalSkillDescription: "During combat with a foe who was also unit’s most recent opponent, grants Hit+20."},
{name: "Hortensia (foe)", PersonalSkillName: "Stealth Assist", PersonalSkillDescription: "When unit uses a healing staff, grants range +1."},
{name: "Timerra (foe)", PersonalSkillName: "Dignity of Solm", PersonalSkillDescription: "Inflicts Crit-5 on foes within 3 spaces."},
{name: "Fogado (foe)", PersonalSkillName: "Wear Down", PersonalSkillDescription: "During combat with a foe who was also unit’s most recent opponent, inflicts Crit-10 on that foe."},
{name: "", PersonalSkillName: "", PersonalSkillDescription: ""}
];


const charactersClassPreviewLinks = [
  {name: "Alear", ClassPreviewLink: "https://www.youtube.com/watch?v=AKLTrCBmgZo", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I", ClassPreviewFemaleLink: "https://www.youtube.com/watch?v=jTWNgVKom8k"},
{name: "Lapis", ClassPreviewLink: "https://www.youtube.com/watch?v=zX3JyCGYzxw", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Anna", ClassPreviewLink: "https://www.youtube.com/watch?v=LCimmc1sL2Y", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Merrin", ClassPreviewLink: "https://www.youtube.com/watch?v=NwxHsZGVX-Q", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Rosado", ClassPreviewLink: "https://www.youtube.com/watch?v=pyXyWfSW7s8", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Kagetsu", ClassPreviewLink: "https://www.youtube.com/watch?v=z1WZesPqgoo", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Vander", ClassPreviewLink: "https://www.youtube.com/watch?v=9FLzJnxiEJw", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Panette", ClassPreviewLink: "https://www.youtube.com/watch?v=1vWDsHzEEZ4", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Clanne", ClassPreviewLink: "https://www.youtube.com/watch?v=_xhzo8zU-k8", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Framme", ClassPreviewLink: "https://www.youtube.com/watch?v=pVfO8vdcD1k", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Ivy", ClassPreviewLink: "https://www.youtube.com/watch?v=BbIzcHFFQqw", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Jean", ClassPreviewLink: "https://www.youtube.com/watch?v=d9jLMm2Q5Iw", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Goldmary", ClassPreviewLink: "https://www.youtube.com/watch?v=0fkgxDI_hJo", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Jade", ClassPreviewLink: "https://www.youtube.com/watch?v=GU4QdMD1-y4", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Etie", ClassPreviewLink: "https://www.youtube.com/watch?v=j4eULbGYN2k", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Zelkov", ClassPreviewLink: "https://www.youtube.com/watch?v=3oAZ63O1Bh4", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Timerra", ClassPreviewLink: "https://www.youtube.com/watch?v=mC67zGTF2KM", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Louis", ClassPreviewLink: "https://www.youtube.com/watch?v=E89rAyuJHZc", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Boucheron", ClassPreviewLink: "https://www.youtube.com/watch?v=ZnHIWAtZNOI", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Celine", ClassPreviewLink: "https://www.youtube.com/watch?v=AL7Y87YMgHQ", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Yunaka", ClassPreviewLink: "https://www.youtube.com/watch?v=XORHyuDZpzs", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Diamant", ClassPreviewLink: "https://www.youtube.com/watch?v=8HsBBArdgDA", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Alfred", ClassPreviewLink: "https://www.youtube.com/watch?v=PM7EYmOTtbg", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Chloe", ClassPreviewLink: "https://www.youtube.com/watch?v=8r6JtjfERRw", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Amber", ClassPreviewLink: "https://www.youtube.com/watch?v=0MPki2GD424", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Citrinne", ClassPreviewLink: "https://www.youtube.com/watch?v=CViZCR2KCsQ", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Hortensia", ClassPreviewLink: "https://www.youtube.com/watch?v=4R6sY4Lyu-k", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Fogado", ClassPreviewLink: "https://www.youtube.com/watch?v=qZPuoYJcWio", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Seadall", ClassPreviewLink: "https://www.youtube.com/watch?v=yfkJB6QtCB4", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Bunet", ClassPreviewLink: "https://www.youtube.com/watch?v=J4SHFTTqq0c", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Alear(F)", ClassPreviewLink: "https://www.youtube.com/watch?v=jTWNgVKom8k", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Veyle", ClassPreviewLink: "https://www.youtube.com/watch?v=_pvSvc2G7jw", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Saphir", ClassPreviewLink: "https://www.youtube.com/watch?v=mfRaaA6028g", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Gregory", ClassPreviewLink: "https://www.youtube.com/watch?v=F1AG4MYmjsc", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Lindon", ClassPreviewLink: "https://www.youtube.com/watch?v=re55NADXCaM", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Zelestia", ClassPreviewLink: "https://www.youtube.com/watch?v=GnU8pECWYAo", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Pandreo", ClassPreviewLink: "https://www.youtube.com/watch?v=KauSDrznTjo", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Mauvier", ClassPreviewLink: "https://www.youtube.com/watch?v=HFWWLc8NN24", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Madeline", ClassPreviewLink: "https://www.youtube.com/watch?v=Y6BP5hg96MU", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Nel", ClassPreviewLink: "https://www.youtube.com/watch?v=7YXDMx-GMGA", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Rafal", ClassPreviewLink: "https://www.youtube.com/watch?v=91XD0PSnVwk", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"},
{name: "Alcryst", ClassPreviewLink: "https://www.youtube.com/watch?v=7OoG766ZIY8", EnchanterPreviewLink: "https://www.youtube.com/watch?v=jl5PGcBu2yM", MageCannoneerPreviewLink: "https://www.youtube.com/watch?v=X9CpzdggB_I"}
]

const classes = [
  {name: "Dragon Child", growths: [0.1,0.1,0,0.1,0.15,0.1,0.1,0.05,0.05],UniqueClass: ["Alear"],bases: [22,6,0,2,7,5,3,2,4,4],statcaps: [68,41,25,36,43,35,25,35,13],AdvanceOrSpecial: [0], Proficiency1: ["Sword(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Divine Dragon", growths: [0.1,0.1,0,0.1,0.15,0.15,0.15,0.1,0.05],UniqueClass: ["Alear"],bases: [24,8,1,4,8,6,5,3,7,5],statcaps: [68,41,25,36,43,35,25,35,13],AdvanceOrSpecial: [1], Proficiency1: ["Sword(A)"], Proficiency2: ["Arts(B)"], Proficiency3: []},
  {name: "Fell Child (Veyle)", growths: [0.1,0.1,0.25,0.1,0.05,0.1,0.25,0,0],UniqueClass: ["Veyle"],bases: [20,3,7,4,5,2,7,3,4,5],statcaps: [48,35,48,36,33,25,41,30,11],AdvanceOrSpecial: [2], Proficiency1: ["Knife(B)","Tome(S)"], Proficiency2: [], Proficiency3: []},
  {name: "Noble (Alfred)", growths: [0.15,0.15,0,0.05,0.05,0.2,0.05,0.15,0],UniqueClass: ["Alfred"],bases: [24,7,2,6,5,6,4,4,6,5],statcaps: [71,45,20,33,35,37,21,45,16],AdvanceOrSpecial: [0], Proficiency1: ["Lance(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Avenir", growths: [0.15,0.15,0,0.05,0.1,0.25,0.05,0.2,0.05],UniqueClass: ["Alfred"],bases: [25,8,4,7,6,8,6,6,7,6],statcaps: [71,45,20,33,35,37,21,45,16],AdvanceOrSpecial: [1], Proficiency1: ["Sword(B)","Lance(A)"], Proficiency2: [], Proficiency3: []},
  {name: "Noble (Celine)", growths: [0,0.05,0.1,0.05,0.05,0.05,0.1,0.2,0],UniqueClass: ["Celine"],bases: [20,5,8,5,8,3,5,4,4,4],statcaps: [56,38,37,29,41,27,35,50,11],AdvanceOrSpecial: [0], Proficiency1: ["Sword(B)", "Tome(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Vidame", growths: [0.05,0.1,0.15,0.05,0.05,0.05,0.15,0.2,0],UniqueClass: ["Celine"],bases: [21,6,9,6,9,4,6,5,5,5],statcaps: [56,38,37,29,41,27,35,50,11],AdvanceOrSpecial: [1], Proficiency1: ["Sword(B)", "Tome(A)","Staff(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Lord (Diamant)", growths: [0.15,0.2,0,0.1,0.1,0.1,0,0.05,0],UniqueClass: ["Diamant"],bases: [23,8,1,7,8,5,3,3,7,4],statcaps: [77,43,23,23,38,38,20,25,20],AdvanceOrSpecial: [0], Proficiency1: ["Sword(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Successeur", growths: [0.15,0.2,0,0.1,0.15,0.15,0,0.1,0.05],UniqueClass: ["Diamant"],bases: [25,10,2,8,9,6,3,4,8,5],statcaps: [77,43,23,23,38,38,20,25,20],AdvanceOrSpecial: [1], Proficiency1: ["Sword(S)", "Axe(A)"], Proficiency2: [], Proficiency3: []},
  {name: "Lord (Alcryst)", growths: [0.1,0.1,0,0.25,0.1,0.1,0,0.05,0],UniqueClass: ["Alcryst"],bases: [21,7,1,10,7,4,3,2,5,4],statcaps: [68,41,20,41,40,29,19,30,15],AdvanceOrSpecial: [0], Proficiency1: ["Bow(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Tireur d'élite", growths: [0.1,0.1,0,0.3,0.1,0.15,0.05,0.05,0],UniqueClass: ["Alcryst"],bases: [22,8,1,12,8,6,4,4,6,5],statcaps: [68,41,20,41,40,29,19,30,15],AdvanceOrSpecial: [1], Proficiency1: ["Bow(S)"], Proficiency2: [], Proficiency3: []},
  {name: "Wing Tamer (Ivy)", growths: [0.05,0,0.2,0,0,0.1,0.2,0,0],UniqueClass: ["Ivy"],bases: [20,1,8,4,4,6,8,1,5,5],statcaps: [60,31,40,25,34,31,40,20,15],AdvanceOrSpecial: [0], Proficiency1: ["Tome(B)","Staff(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Lindwurm", growths: [0.05,0,0.25,0.05,0,0.15,0.25,0,0],UniqueClass: ["Ivy"],bases: [22,2,10,5,5,8,9,1,6,6],statcaps: [60,31,40,25,34,31,40,20,15],AdvanceOrSpecial: [1], Proficiency1: ["Tome(S)","Staff(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Wing Tamer (Hort.)", growths: [0,0,0.15,0.1,0.1,0,0.25,0.1,0],UniqueClass: ["Hortensia"],bases: [18,0,5,9,8,1,11,6,4,5],statcaps: [47,26,39,36,45,19,51,53,11],AdvanceOrSpecial: [0], Proficiency1: ["Tome(B)","Staff(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Sleipnir Rider", growths: [0,0,0.2,0.15,0.15,0,0.3,0.15,0],UniqueClass: ["Hortensia"],bases: [18,1,7,10,10,2,13,8,5,6],statcaps: [47,26,39,36,45,19,51,53,11],AdvanceOrSpecial: [1], Proficiency1: ["Tome(B)","Staff(S)"], Proficiency2: [], Proficiency3: []},
  {name: "Sentinel (Timerra)", growths: [0.1,0.1,0,0.1,0.05,0.2,0,0.05,0],UniqueClass: ["Timerra"],bases: [24,8,1,5,7,8,1,3,4,4],statcaps: [63,35,27,47,41,33,26,37,12],AdvanceOrSpecial: [0], Proficiency1: ["Lance(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Picket", growths: [0.1,0.15,0,0.1,0.1,0.2,0.05,0.05,0.05],UniqueClass: ["Timerra"],bases: [25,9,2,6,9,10,3,4,5,5],statcaps: [63,35,27,47,41,33,26,37,12],AdvanceOrSpecial: [1], Proficiency1: ["Lance(S)"], Proficiency2: [], Proficiency3: []},
  {name: "Sentinel (Fogado)", growths: [0.1,0.05,0,0.15,0.15,0.05,0.15,0,0],UniqueClass: ["Fogado"],bases: [21,5,1,9,7,4,3,2,6,5],statcaps: [67,35,28,33,49,28,31,33,16],AdvanceOrSpecial: [0], Proficiency1: ["Bow(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Cupido", growths: [0.1,0.05,0.05,0.2,0.2,0.05,0.2,0,0],UniqueClass: ["Cupido"],bases: [23,6,3,10,8,5,5,3,7,6],statcaps: [67,35,28,33,49,28,31,33,16],AdvanceOrSpecial: [1], Proficiency1: ["Sword(B)","Bow(A)"], Proficiency2: [], Proficiency3: []},
  {name: "Dancer", growths: [0.05,0.1,0,0.05,0.15,0.1,0.2,0.2,0],UniqueClass: ["Seadall"],bases: [21,5,1,8,8,2,5,5,5,5],statcaps: [64,36,31,29,43,24,26,39,15],AdvanceOrSpecial: [2], Proficiency1: ["Arts(A)"], Proficiency2: [], Proficiency3: []},
  {name: "Fell Child (Nel)", growths: [0.1,0.15,0.1,0.1,0.15,0.15,0.15,0,0.05],UniqueClass: ["Nel"],bases: [20,5,5,5,5,5,5,5,5,5],statcaps: [65,39,30,32,45,33,31,37,13],AdvanceOrSpecial: [2], Proficiency1: ["Lance(A)", "Breath(S)"], Proficiency2: [], Proficiency3: []},
  {name: "Fell Child (Rafal)", growths: [0.15,0.2,0,0.05,0.05,0.2,0.1,0,0.1],UniqueClass: ["Rafal"],bases: [22,7,8,6,8,6,9,2,6,6],statcaps: [76,46,13,30,33,42,20,19,13],AdvanceOrSpecial: [2], Proficiency1: ["Axe(A)", "Breath(S)"], Proficiency2: [], Proficiency3: []},
  {name: "Melusine", growths: [0.1,0.1,0.1,0.1,0.15,0.1,0.1,0,0.05],UniqueClass: ["Zelestia"],bases: [20,5,5,5,5,5,5,5,5,5],statcaps: [75,40,39,33,35,33,36,27,12],AdvanceOrSpecial: [2], Proficiency1: ["Sword(A)","Tome(S)"], Proficiency2: [], Proficiency3: []},
  {name: "Sword Fighter", growths: [0.1,0.1,0,0.15,0.2,0,0.15,0.1,0],UniqueClass: ["No"],bases: [20,5,0,7,8,3,2,2,5,4],statcaps: [67,40,20,37,41,27,22,33,12],AdvanceOrSpecial: [0], Proficiency1: ["Sword(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Swordmaster", growths: [0.1,0.1,0,0.15,0.2,0,0.15,0.15,0],UniqueClass: ["No"],bases: [21,6,1,9,11,4,3,4,6,5],statcaps: [67,40,25,44,49,27,26,37,12],AdvanceOrSpecial: [1], Proficiency1: ["Sword(S)"], Proficiency2: [], Proficiency3: []},
  {name: "Hero", growths: [0.15,0.15,0,0.1,0.15,0,0.1,0.15,0],UniqueClass: ["No"],bases: [23,8,0,8,9,5,2,3,7,5],statcaps: [75,45,20,37,41,34,22,33,16],AdvanceOrSpecial: [1], Proficiency1: ["Sword(A)","Lance(C^)"], Proficiency2: ["Sword(A)","Axe(C^)"], Proficiency3: []},
  {name: "Lance Fighter", growths: [0.1,0.1,0.05,0.2,0.05,0.1,0.05,0,0],UniqueClass: ["No"],bases: [23,7,2,8,6,4,2,2,5,4],statcaps: [69,43,29,47,36,28,25,25,12],AdvanceOrSpecial: [0], Proficiency1: ["Lance(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Halberdier", growths: [0.1,0.15,0.05,0.2,0.1,0.15,0.05,0.05,0],UniqueClass: ["No"],bases: [24,9,1,9,7,6,2,3,6,5],statcaps: [76,46,29,47,36,35,25,25,15],AdvanceOrSpecial: [1], Proficiency1: ["Lance(S)"], Proficiency2: [], Proficiency3: []},
  {name: "Royal Knight", growths: [0.05,0.1,0.15,0.15,0.15,0.05,0.2,0.1,0],UniqueClass: ["No"],bases: [23,7,5,9,8,5,4,5,6,6],statcaps: [69,43,39,47,40,28,36,32,12],AdvanceOrSpecial: [1], Proficiency1: ["Lance(A)","Staff(C^)"], Proficiency2: [], Proficiency3: []},
  {name: "Axe Fighter", growths: [0.25,0.2,0,0.05,0.1,0.05,0,0,0.05],UniqueClass: ["No"],bases: [26,9,0,5,5,3,1,1,7,4],statcaps: [94,46,17,23,29,20,11,23,20],AdvanceOrSpecial: [0], Proficiency1: ["Axe(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Berserker", growths: [0.3,0.3,0,0.05,0.1,0.05,0,0,0.1],UniqueClass: ["No"],bases: [29,13,0,6,6,3,2,2,9,5],statcaps: [96,49,17,23,29,20,11,23,24],AdvanceOrSpecial: [1], Proficiency1: ["Axe(S)"], Proficiency2: [], Proficiency3: []},
  {name: "Warrior", growths: [0.25,0.2,0,0.1,0.15,0.1,0.05,0,0.05],UniqueClass: ["No"],bases: [27,12,1,7,7,4,3,2,8,5],statcaps: [94,46,20,30,33,27,18,23,20],AdvanceOrSpecial: [1], Proficiency1: ["Axe(A)","Bow(C^)"], Proficiency2: [], Proficiency3: []},
  {name: "Archer", growths: [0.1,0.15,0,0.25,0.1,0.05,0,0.05,0],UniqueClass: ["No"],bases: [19,6,0,9,5,2,1,2,4,4],statcaps: [68,38,20,45,32,23,24,28,14],AdvanceOrSpecial: [0], Proficiency1: ["Bow(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Sniper", growths: [0.15,0.15,0,0.3,0.1,0.1,0,0.1,0],UniqueClass: ["No"],bases: [22,8,1,11,6,3,1,3,5,5],statcaps: [68,45,20,52,32,29,24,28,14],AdvanceOrSpecial: [1], Proficiency1: ["Bow(S)"], Proficiency2: [], Proficiency3: []},
  {name: "Bow Knight", growths: [0.1,0.1,0,0.2,0.2,0,0.15,0.15,0],UniqueClass: ["No"],bases: [22,7,2,10,8,3,3,3,5,6],statcaps: [68,38,23,45,37,23,29,30,14],AdvanceOrSpecial: [1], Proficiency1: ["Sword(C^)","Bow(A)"], Proficiency2: ["Lance(C^)","Bow(A)"], Proficiency3: ["Axe(C^)","Bow(A)"]},
  {name: "Sword Armor", growths: [0.2,0.15,0,0.1,0,0.3,0,0,0.05],UniqueClass: ["No"],bases: [25,8,0,6,1,12,0,2,7,4],statcaps: [75,42,16,39,17,51,16,25,20],AdvanceOrSpecial: [0], Proficiency1: ["Sword(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Lance Armor", growths: [0.2,0.15,0,0.1,0,0.3,0,0,0.05],UniqueClass: ["No"],bases: [25,8,0,6,1,12,0,2,7,4],statcaps: [75,42,16,39,17,51,16,25,20],AdvanceOrSpecial: [0], Proficiency1: ["Lance(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Axe Armor", growths: [0.2,0.15,0,0.1,0,0.3,0,0,0.05],UniqueClass: ["No"],bases: [25,8,0,6,1,12,0,2,7,4],statcaps: [75,42,16,39,17,51,16,25,20],AdvanceOrSpecial: [0], Proficiency1: ["Axe(B)"], Proficiency2: [], Proficiency3: []},
  {name: "General", growths: [0.25,0.2,0,0.1,0,0.3,0,0,0.1],UniqueClass: ["No"],bases: [28,11,1,7,2,14,1,3,10,4],statcaps: [86,47,16,39,17,55,16,25,25],AdvanceOrSpecial: [1], Proficiency1: ["Sword(A^)"], Proficiency2: ["Lance(A^)"], Proficiency3: ["Axe(A^)"]},
  {name: "Great Knight", growths: [0.2,0.15,0,0.15,0,0.25,0.1,0.05,0.05],UniqueClass: ["No"],bases: [26,9,2,8,5,13,2,3,8,6],statcaps: [75,42,19,43,25,51,22,30,20],AdvanceOrSpecial: [1], Proficiency1: ["Sword(B^)","Lance(B^)"], Proficiency2: ["Sword(B^)","Axe(B^)" ], Proficiency3: ["Lance(B^)","Axe(B^)"]},
  {name: "Sword Cavalier", growths: [0.1,0.1,0,0.1,0.1,0.1,0.1,0.1,0],UniqueClass: ["No"],bases: [23,6,1,8,7,4,2,2,6,5],statcaps: [69,40,21,41,37,27,29,30,12],AdvanceOrSpecial: [0], Proficiency1: ["Sword(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Lance Cavalier", growths: [0.1,0.1,0,0.1,0.1,0.1,0.1,0.1,0],UniqueClass: ["No"],bases: [23,6,1,8,7,4,2,2,6,5],statcaps: [69,40,21,41,37,27,29,30,12],AdvanceOrSpecial: [0], Proficiency1: ["Lance(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Axe Cavalier", growths: [0.1,0.1,0,0.1,0.1,0.1,0.1,0.1,0],UniqueClass: ["No"],bases: [23,6,1,8,7,4,2,2,6,5],statcaps: [69,40,21,41,37,27,29,30,12],AdvanceOrSpecial: [0], Proficiency1: ["Axe(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Paladin", growths: [0.15,0.15,0,0.1,0.15,0.15,0.15,0.1,0],UniqueClass: ["No"],bases: [25,8,2,10,8,6,3,3,7,6],statcaps: [77,45,21,45,37,35,29,30,16],AdvanceOrSpecial: [1], Proficiency1: ["Sword(A^)"], Proficiency2: ["Lance(A^)"], Proficiency3: ["Axe(A^)"]},
  {name: "Wolf Knight", growths: [0.1,0.05,0,0.15,0.2,0.05,0.2,0.2,0],UniqueClass: ["No"],bases: [23,6,3,9,10,4,4,4,6,6],statcaps: [69,40,26,41,45,27,33,34,12],AdvanceOrSpecial: [1], Proficiency1: ["Sword(B^)","Knife(A^)"], Proficiency2: ["Lance(B^)","Knife(A^)"], Proficiency3: ["Axe(B^)","Knife(A^)"]},
  {name: "Mage", growths: [0,0,0.25,0.05,0,0,0.25,0.05,0],UniqueClass: ["No"],bases: [18,1,7,6,6,1,7,2,4,4],statcaps: [43,26,40,28,30,20,40,24,11],AdvanceOrSpecial: [0], Proficiency1: ["Tome(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Sage", growths: [0,0,0.3,0.05,0,0,0.3,0.15,0],UniqueClass: ["No"],bases: [20,1,9,8,7,3,9,3,5,5],statcaps: [43,26,48,34,30,20,44,30,11],AdvanceOrSpecial: [1], Proficiency1: ["Tome(S)","Staff(B^)"], Proficiency2: [], Proficiency3: []},
  {name: "Mage Knight", growths: [0.05,0.05,0.25,0,0.05,0.1,0.25,0.05,0],UniqueClass: ["No"],bases: [21,5,7,8,9,3,8,2,6,6],statcaps: [47,35,40,28,32,26,40,24,12],AdvanceOrSpecial: [1], Proficiency1: ["Sword(B^)","Tome(A)"], Proficiency2: ["Lance(B^)","Tome(A)"], Proficiency3: ["Axe(B^)","Tome(A)"]},
  {name: "Martial Monk", growths: [0,0.1,0.25,0,0,0.1,0.2,0.1,0],UniqueClass: ["No"],bases: [18,3,5,6,5,3,8,3,3,4],statcaps: [55,28,41,26,28,20,39,29,13],AdvanceOrSpecial: [0], Proficiency1: ["Arts(C)","Staff(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Martial Master", growths: [0.05,0.1,0.2,0,0,0.15,0.25,0.1,0],UniqueClass: ["No"],bases: [22,6,5,6,5,4,7,4,6,5],statcaps: [66,38,41,26,28,27,39,29,15],AdvanceOrSpecial: [1], Proficiency1: ["Arts(S)","Staff(A)"], Proficiency2: [], Proficiency3: []},
  {name: "High Priest", growths: [0,0,0.25,0,0.05,0,0.3,0.3,0],UniqueClass: ["No"],bases: [20,3,8,8,6,3,10,5,4,5],statcaps: [55,28,45,31,32,20,48,38,13],AdvanceOrSpecial: [1], Proficiency1: ["Tome(B^)","Arts(C^)","Staff(S)"], Proficiency2: [], Proficiency3: []},
  {name: "Sword Flier", growths: [0.05,0.1,0.05,0.1,0.1,0,0.1,0.1,0],UniqueClass: ["No"],bases: [21,5,2,7,9,3,7,3,4,5],statcaps: [68,40,31,43,38,27,22,25,14],AdvanceOrSpecial: [0], Proficiency1: ["Sword(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Lance Flier", growths: [0.05,0.1,0.05,0.1,0.1,0,0.1,0.1,0],UniqueClass: ["No"],bases: [21,5,2,7,9,3,7,3,4,5],statcaps: [68,40,31,43,38,27,22,25,14],AdvanceOrSpecial: [0], Proficiency1: ["Lance(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Axe Flier", growths: [0.05,0.1,0.05,0.1,0.1,0,0.1,0.1,0],UniqueClass: ["No"],bases: [21,5,2,7,9,3,7,3,4,5],statcaps: [68,40,31,43,38,27,22,25,14],AdvanceOrSpecial: [0], Proficiency1: ["Axe(B)"], Proficiency2: [], Proficiency3: []},
  {name: "Griffin Knight", growths: [0,0.1,0.15,0.15,0.2,0,0.15,0.15,0],UniqueClass: ["No"],bases: [22,7,3,10,11,4,9,5,5,6],statcaps: [68,40,37,48,49,27,35,35,14],AdvanceOrSpecial: [1], Proficiency1: ["Sword(A^)","Staff(C^)"], Proficiency2: ["Lance(A^)","Staff(C^)"], Proficiency3: ["Axe(A^)","Staff(C^)"]},
  {name: "Wyvern Knight", growths: [0.2,0.2,0,0.1,0.05,0.2,0.05,0.05,0.05],UniqueClass: ["No"],bases: [25,9,1,8,9,6,5,3,6,6],statcaps: [83,46,31,43,38,35,22,25,18],AdvanceOrSpecial: [1], Proficiency1: ["Sword(B^)","Lance(B^)"], Proficiency2: ["Sword(B^)","Axe(B^)"], Proficiency3: ["Lance(B^)","Axe(B^)"]},
  {name: "Thief", growths: [0.05,0.1,0,0.2,0.15,0.15,0.05,0.15,0],UniqueClass: ["No"],bases: [22,5,0,10,10,6,2,2,4,5],statcaps: [60,43,22,51,42,33,23,30,13],AdvanceOrSpecial: [2], Proficiency1: ["Knife(S)"], Proficiency2: [], Proficiency3: []},  
  {name: "Enchanter (DLC)", growths: [0.05,0.15,0.15,0.15,0.1,0.05,0.05,0.15,0.05],UniqueClass: ["No"],bases: [20,5,5,5,5,5,5,5,5,5],statcaps: [53,25,25,43,39,20,22,42,11],AdvanceOrSpecial: [1], Proficiency1: ["Knife(B^)","Arts(B^)"], Proficiency2: [], Proficiency3: []},
  {name: "Mage Cannoneer (DLC)", growths: [0.15,0.1,0,0.15,0.05,0.2,0.05,0.1,0.1],UniqueClass: ["No"],statcaps: [73,45,23,43,23,49,24,31,18],AdvanceOrSpecial: [1], Proficiency1: ["Cannonball(S)"], Proficiency2: [], Proficiency3: []}  
];

const classProficiencyUp = [
  {name: "Sword", classes: ["Bow Knight", "General", "Great Knight", "Griffin Knight", "Mage Knight", "Paladin","Wolf Knight","Wyvern Knight"]},
  {name: "Lance", classes: ["Bow Knight", "General", "Great Knight", "Griffin Knight", "Hero", "Mage Knight", "Paladin",  "Wolf Knight","Wyvern Knight"]},
  {name: "Axe", classes: ["Bow Knight", "General", "Great Knight", "Griffin Knight",  "Hero", "Mage Knight", "Paladin","Wolf Knight","Wyvern Knight"]},
  {name: "Bow", classes: ["Warrior"]},
  {name: "Tome", classes: ["High Priest"]},
  {name: "Arts", classes: ["Enchanter(DLC)", "High Priest" ]},
  {name: "Staff", classes: ["Griffin Knight", "Royal Knight","Sage"]},
  {name: "Knife", classes: ["Enchanter(DLC)", "Wolf Knight"]}
]

const classSkills = [
  {ClassSkillName: "Divine Spirit", ClassSkillDescription: "Unit's engage meter is shortened one step."},
  {ClassSkillName: "Dark Spirit", ClassSkillDescription: "Inflicts -1 to the engage meters of foes within 2 spaces at the start of the turn."},
  {ClassSkillName: "Fell Spirit", ClassSkillDescription: "At the start of each turn, unit's engage meter is filled by 1."},
  {ClassSkillName: "Golden Lotus", ClassSkillDescription: "During combat, may prevent 50% of physical damage taken. Trigger %=Dex."},
  {ClassSkillName: "Ignis", ClassSkillDescription: "During combat, may add half of Str to magic damage or half of Mag to all other damage. Trigger %=Dex."},
  {ClassSkillName: "Sol", ClassSkillDescription: "Unit may recover HP=50% damage dealt. Trigger %=Dex."},
  {ClassSkillName: "Luna", ClassSkillDescription: "While making an attack, may ignore half of foe's Def/Res. Trigger %=Dex."},
  {ClassSkillName: "Grasping Void", ClassSkillDescription: "When attacking with a tome, unit may deal extra damage = half of foe's Mag. Trigger %=Dex."},
  {ClassSkillName: "World Tree", ClassSkillDescription: "When unit uses a staff, may not consume a use. Trigger %=Dex."},
  {ClassSkillName: "Sandstorm", ClassSkillDescription: "While making a physical attack, may calculate damage with 150% of Def instead of Str. Trigger %=Dex."},
  {ClassSkillName: "Back at You", ClassSkillDescription: "When countering, unit may deal extra damage = half of damage taken. Trigger %=Dex."},
  {ClassSkillName: "Soulblade", ClassSkillDescription: "When attacking with a sword, damage is calculated using average of foe's Def and Res."},
  {ClassSkillName: "Run Through", ClassSkillDescription: "Use to attack an adjacent foe, then move to the space opposite that foe."},
  {ClassSkillName: "Brave Assist", ClassSkillDescription: "If unit's HP is at max while unit makes a chain attack, unit attacks twice."},
  {ClassSkillName: "Pincer Attack", ClassSkillDescription: "If unit initiates combat while an ally is on the opposite side of the foe, always follow up (if weapon allows)."},
  {ClassSkillName: "Reforge", ClassSkillDescription: "If unit's HP is 11 or more and an adjacent ally is broken after combat, sacrifices 10 HP and removes the break status from that ally."},
  {ClassSkillName: "Smash+", ClassSkillDescription: "When making a smash attack, push the target 2 spaces instead of 1."},
  {ClassSkillName: "Merciless", ClassSkillDescription: "Unit deals +50% damage against broken foes."},
  {ClassSkillName: "No Distractions", ClassSkillDescription: "Grants Crit+10 during combat with a foe that can't counter."},
  {ClassSkillName: "Careful Aim", ClassSkillDescription: "If unit initiates combat without moving first, grants Hit+40 during combat."},
  {ClassSkillName: "Swap", ClassSkillDescription: "Use to switch places with an adjacent ally."},
  {ClassSkillName: "Allied Defense", ClassSkillDescription: "If unit is between an ally and a foe, reduces damage to unit by 3 during combat with that foe."},
  {ClassSkillName: "Pivot", ClassSkillDescription: "Use to move to the opposite side of an adjacent ally."},
  {ClassSkillName: "Hobble", ClassSkillDescription: "If unit initiates combat with a knife, inflicts Mov-2 on foe for 1 turn."},
  {ClassSkillName: "Spell Harmony", ClassSkillDescription: "If unit initiates combat with a tome, grants Atk equal to the number of adjacent allies with tomes."},
  {ClassSkillName: "Chaos Style", ClassSkillDescription: "If unit initiates combat with a physical attack against a foe armed with magic or vice versa, grants Spd+3 during combat."},
  {ClassSkillName: "Diffuse Healer", ClassSkillDescription: "When unit is healed by a staff, all adjacent allies also recover 50% of the HP that the unit recovered."},
  {ClassSkillName: "Self-Healing", ClassSkillDescription: "Unit can target itself with healing staves."},
  {ClassSkillName: "Clear the Way", ClassSkillDescription: "Unit's space and adjacent spaces have a movement cost of 1 for allies."},
  {ClassSkillName: "Air Raid", ClassSkillDescription: "If unit initiates combat from a space a foe cannot enter, grants Spd+5 during combat."},
  {ClassSkillName: "Pass", ClassSkillDescription: "Foes do not block this unit's movement."},
  {ClassSkillName: "Special Dance", ClassSkillDescription: "If unit uses Dance, grants Dex/Spd/Lck+3 to target for 1 turn."},
  {ClassSkillName: "Let Fly", ClassSkillDescription: "Use to perform a guaranteed-hit, area-of-effect attack at the start of the next player phase. Unit loses equipped weapon."},
  {ClassSkillName: "Convoy", ClassSkillDescription: "Use to deposit or retrieve weapons and items."},
  {ClassSkillName: "Miasma Domain", ClassSkillDescription: "At start of turn, applies miasma to terrain within 2 spaces of unit."},
  {ClassSkillName: "Frost Domain", ClassSkillDescription: "At start of turn, applies frost to terrain within 2 spaces of unit."},
  {ClassSkillName: "Pack Hunter", ClassSkillDescription: "Allies of the same class as unit within 3 spaces participate in chain attacks."},
  {ClassSkillName: "Resist Emblems", ClassSkillDescription: "When attacked with an engage attack, prevents 20% of damage."},
  {ClassSkillName: "Spur Emblems", ClassSkillDescription: "At start of player phase, fills adjacent allies' engage meters by 1."}  
]

const emblemStats = 
[
    {Emblem: "Marth", Stats: [
    { BondLevel: 1, HP:0, Str: 1, Mag: 0, Dex: 1, Spd: 1, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
    { BondLevel: 2, HP:0, Str: 1, Mag: 0, Dex: 2, Spd: 1, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
    { BondLevel: 3, HP:0, Str: 1, Mag: 0, Dex: 2, Spd: 1, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
    { BondLevel: 4, HP:0, Str: 1, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
    { BondLevel: 5, HP:0, Str: 1, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
    { BondLevel: 6, HP:0, Str: 2, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
    { BondLevel: 7, HP:0, Str: 2, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
    { BondLevel: 8, HP:0, Str: 2, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
    { BondLevel: 9, HP:0, Str: 2, Mag: 0, Dex: 3, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
    { BondLevel: 10, HP:0, Str: 2, Mag: 0, Dex: 3, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
    { BondLevel: 11, HP:0, Str: 2, Mag: 0, Dex: 3, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
    { BondLevel: 12, HP:0, Str: 2, Mag: 0, Dex: 3, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
    { BondLevel: 13, HP:0, Str: 2, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
    { BondLevel: 14, HP:0, Str: 3, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
    { BondLevel: 15, HP:0, Str: 3, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
    { BondLevel: 16, HP:0, Str: 3, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
    { BondLevel: 17, HP:0, Str: 3, Mag: 0, Dex: 4, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
    { BondLevel: 18, HP:0, Str: 3, Mag: 0, Dex: 4, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
    { BondLevel: 19, HP:0, Str: 3, Mag: 0, Dex: 4, Spd: 4, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
    { BondLevel: 20, HP:0, Str: 3, Mag: 0, Dex: 4, Spd: 4, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}
    ]},
    {Emblem: "Sigurd", Stats: [ 
      { BondLevel: 1, HP:0, Str: 0, Mag: 0, Dex: 1, Spd: 0, Def: 1, Res: 0, Lck: 0, Bld: 1, Mov: 1}, 
      { BondLevel: 2, HP:0, Str: 0, Mag: 0, Dex: 1, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 1, Mov: 1}, 
      { BondLevel: 3, HP:0, Str: 0, Mag: 0, Dex: 1, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 1, Mov: 1}, 
      { BondLevel: 4, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 1, Mov: 1}, 
      { BondLevel: 5, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 1, Mov: 1}, 
      { BondLevel: 6, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 1, Mov: 1}, 
      { BondLevel: 7, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 1, Mov: 1}, 
      { BondLevel: 8, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 2, Mov: 1}, 
      { BondLevel: 9, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 2, Mov: 1}, 
      { BondLevel: 10, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 2, Mov: 1}, 
      { BondLevel: 11, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 2, Mov: 1}, 
      { BondLevel: 12, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 2, Mov: 1}, 
      { BondLevel: 13, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 2, Mov: 1}, 
      { BondLevel: 14, HP:0, Str: 0, Mag: 0, Dex: 3, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 2, Mov: 1}, 
      { BondLevel: 15, HP:0, Str: 0, Mag: 0, Dex: 3, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 2, Mov: 1}, 
      { BondLevel: 16, HP:0, Str: 0, Mag: 0, Dex: 3, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 3, Mov: 1}, 
      { BondLevel: 17, HP:0, Str: 0, Mag: 0, Dex: 3, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 3, Mov: 1}, 
      { BondLevel: 18, HP:0, Str: 0, Mag: 0, Dex: 3, Spd: 0, Def: 4, Res: 0, Lck: 0, Bld: 3, Mov: 1}, 
      { BondLevel: 19, HP:0, Str: 0, Mag: 0, Dex: 4, Spd: 0, Def: 4, Res: 0, Lck: 0, Bld: 3, Mov: 1}, 
      { BondLevel: 20, HP:0, Str: 0, Mag: 0, Dex: 4, Spd: 0, Def: 4, Res: 0, Lck: 0, Bld: 3, Mov: 1}
      ]},
      {Emblem: "Celica", Stats: [ 
      { BondLevel: 1, HP:0, Str: 1, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 1, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 2, HP:0, Str: 1, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 1, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 3, HP:0, Str: 1, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 1, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 4, HP:0, Str: 1, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 5, HP:0, Str: 1, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 6, HP:0, Str: 1, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 7, HP:0, Str: 2, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 8, HP:0, Str: 2, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 9, HP:0, Str: 2, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 10, HP:0, Str: 2, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 11, HP:0, Str: 2, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 12, HP:0, Str: 2, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 13, HP:0, Str: 2, Mag: 4, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 14, HP:0, Str: 2, Mag: 4, Dex: 0, Spd: 0, Def: 0, Res: 4, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 15, HP:0, Str: 2, Mag: 4, Dex: 0, Spd: 0, Def: 0, Res: 4, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 16, HP:0, Str: 2, Mag: 4, Dex: 0, Spd: 0, Def: 0, Res: 4, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 17, HP:0, Str: 3, Mag: 4, Dex: 0, Spd: 0, Def: 0, Res: 4, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 18, HP:0, Str: 3, Mag: 4, Dex: 0, Spd: 0, Def: 0, Res: 4, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 19, HP:0, Str: 3, Mag: 5, Dex: 0, Spd: 0, Def: 0, Res: 4, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 20, HP:0, Str: 3, Mag: 5, Dex: 0, Spd: 0, Def: 0, Res: 4, Lck: 0, Bld: 0, Mov: 0}
      ]},
      {Emblem: "Micaiah", Stats: [ 
      { BondLevel: 1, HP:0, Str: 0, Mag: 1, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 2, Bld: 0, Mov: 0}, 
      { BondLevel: 2, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 2, Bld: 0, Mov: 0}, 
      { BondLevel: 3, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 2, Bld: 0, Mov: 0}, 
      { BondLevel: 4, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 2, Bld: 0, Mov: 0}, 
      { BondLevel: 5, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 2, Bld: 0, Mov: 0}, 
      { BondLevel: 6, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 2, Bld: 0, Mov: 0}, 
      { BondLevel: 7, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 2, Bld: 0, Mov: 0}, 
      { BondLevel: 8, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 9, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 10, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 11, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 12, HP:0, Str: 0, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 13, HP:0, Str: 0, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 14, HP:0, Str: 0, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 4, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 15, HP:0, Str: 0, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 4, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 16, HP:0, Str: 0, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 4, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 17, HP:0, Str: 0, Mag: 4, Dex: 0, Spd: 0, Def: 0, Res: 4, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 18, HP:0, Str: 0, Mag: 4, Dex: 0, Spd: 0, Def: 0, Res: 4, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 19, HP:0, Str: 0, Mag: 4, Dex: 0, Spd: 0, Def: 0, Res: 5, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 20, HP:0, Str: 0, Mag: 4, Dex: 0, Spd: 0, Def: 0, Res: 5, Lck: 6, Bld: 0, Mov: 0}
      ]},
      {Emblem: "Roy", Stats: [ 
      { BondLevel: 1, HP:5, Str: 1, Mag: 0, Dex: 0, Spd: 0, Def: 0, Res: 1, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 2, HP:5, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 0, Res: 1, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 3, HP:5, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 0, Res: 1, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 4, HP:7, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 0, Res: 1, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 5, HP:7, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 0, Res: 1, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 6, HP:7, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 0, Res: 1, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 7, HP:7, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 8, HP:7, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 9, HP:7, Str: 3, Mag: 0, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 10, HP:7, Str: 3, Mag: 0, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 11, HP:7, Str: 3, Mag: 0, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 12, HP:10, Str: 3, Mag: 0, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 13, HP:10, Str: 3, Mag: 0, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 14, HP:10, Str: 4, Mag: 0, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 15, HP:10, Str: 4, Mag: 0, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 16, HP:10, Str: 4, Mag: 0, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 17, HP:10, Str: 5, Mag: 0, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 18, HP:10, Str: 5, Mag: 0, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 19, HP:10, Str: 6, Mag: 0, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 20, HP:10, Str: 6, Mag: 0, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}
      ]},
      {Emblem: "Leif", Stats: [ 
      { BondLevel: 1, HP:3, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 1, Res: 0, Lck: 0, Bld: 3, Mov: 0}, 
      { BondLevel: 2, HP:3, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 1, Res: 0, Lck: 0, Bld: 3, Mov: 0}, 
      { BondLevel: 3, HP:3, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 1, Res: 0, Lck: 0, Bld: 3, Mov: 0}, 
      { BondLevel: 4, HP:3, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 1, Res: 0, Lck: 0, Bld: 3, Mov: 0}, 
      { BondLevel: 5, HP:3, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 1, Res: 0, Lck: 0, Bld: 3, Mov: 0}, 
      { BondLevel: 6, HP:3, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 1, Res: 0, Lck: 0, Bld: 4, Mov: 0}, 
      { BondLevel: 7, HP:3, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 1, Res: 0, Lck: 0, Bld: 4, Mov: 0}, 
      { BondLevel: 8, HP:3, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 1, Res: 0, Lck: 0, Bld: 4, Mov: 0}, 
      { BondLevel: 9, HP:5, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 1, Res: 0, Lck: 0, Bld: 4, Mov: 0}, 
      { BondLevel: 10, HP:5, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 1, Res: 0, Lck: 0, Bld: 4, Mov: 0}, 
      { BondLevel: 11, HP:5, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 1, Res: 0, Lck: 0, Bld: 4, Mov: 0}, 
      { BondLevel: 12, HP:5, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 1, Res: 0, Lck: 0, Bld: 4, Mov: 0}, 
      { BondLevel: 13, HP:5, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 4, Mov: 0}, 
      { BondLevel: 14, HP:5, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 5, Mov: 0}, 
      { BondLevel: 15, HP:5, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 5, Mov: 0}, 
      { BondLevel: 16, HP:5, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 5, Mov: 0}, 
      { BondLevel: 17, HP:7, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 5, Mov: 0}, 
      { BondLevel: 19, HP:7, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 5, Mov: 0}, 
      { BondLevel: 20, HP:7, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 5, Mov: 0}
      ]},
      {Emblem: "Lucina", Stats: [ 
        { BondLevel: 1, HP:0, Str: 0, Mag: 0, Dex: 1, Spd: 1, Def: 0, Res: 0, Lck: 2, Bld: 0, Mov: 0}, 
        { BondLevel: 2, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 1, Def: 0, Res: 0, Lck: 2, Bld: 0, Mov: 0}, 
        { BondLevel: 3, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 1, Def: 0, Res: 0, Lck: 2, Bld: 0, Mov: 0}, 
        { BondLevel: 4, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 2, Bld: 0, Mov: 0}, 
        { BondLevel: 5, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 2, Bld: 0, Mov: 0}, 
        { BondLevel: 6, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 2, Bld: 0, Mov: 0}, 
        { BondLevel: 7, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
        { BondLevel: 8, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
        { BondLevel: 9, HP:0, Str: 0, Mag: 0, Dex: 3, Spd: 2, Def: 0, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
        { BondLevel: 10, HP:0, Str: 0, Mag: 0, Dex: 3, Spd: 2, Def: 0, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
        { BondLevel: 11, HP:0, Str: 0, Mag: 0, Dex: 3, Spd: 2, Def: 0, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
        { BondLevel: 12, HP:0, Str: 0, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
        { BondLevel: 13, HP:0, Str: 0, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
        { BondLevel: 14, HP:0, Str: 0, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
        { BondLevel: 15, HP:0, Str: 0, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
        { BondLevel: 16, HP:0, Str: 0, Mag: 0, Dex: 4, Spd: 3, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
        { BondLevel: 17, HP:0, Str: 0, Mag: 0, Dex: 4, Spd: 4, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
        { BondLevel: 18, HP:0, Str: 0, Mag: 0, Dex: 4, Spd: 4, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
        { BondLevel: 19, HP:0, Str: 0, Mag: 0, Dex: 5, Spd: 4, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
        { BondLevel: 20, HP:0, Str: 0, Mag: 0, Dex: 5, Spd: 4, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}
        ]},
        
      {Emblem: "Lyn", Stats: [ 
      { BondLevel: 1, HP:0, Str: 0, Mag: 0, Dex: 1, Spd: 1, Def: 0, Res: 1, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 2, HP:0, Str: 0, Mag: 0, Dex: 1, Spd: 2, Def: 0, Res: 1, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 3, HP:0, Str: 0, Mag: 0, Dex: 1, Spd: 2, Def: 0, Res: 1, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 4, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 1, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 5, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 1, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 6, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 1, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 7, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 8, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 9, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 3, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 10, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 3, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 11, HP:0, Str: 0, Mag: 0, Dex: 2, Spd: 3, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 12, HP:0, Str: 0, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 13, HP:0, Str: 0, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 14, HP:0, Str: 0, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 15, HP:0, Str: 0, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 16, HP:0, Str: 0, Mag: 0, Dex: 3, Spd: 4, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 17, HP:0, Str: 0, Mag: 0, Dex: 4, Spd: 4, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 18, HP:0, Str: 0, Mag: 0, Dex: 4, Spd: 4, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 19, HP:0, Str: 0, Mag: 0, Dex: 4, Spd: 5, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 20, HP:0, Str: 0, Mag: 0, Dex: 4, Spd: 5, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}
      ]},
      {Emblem: "Ike", Stats: [ 
      { BondLevel: 1, HP:3, Str: 1, Mag: 0, Dex: 0, Spd: 0, Def: 1, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 2, HP:3, Str: 1, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 3, HP:3, Str: 1, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 4, HP:3, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 5, HP:3, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 6, HP:3, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 7, HP:5, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 8, HP:5, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 9, HP:5, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 10, HP:5, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 11, HP:5, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 12, HP:5, Str: 3, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 13, HP:5, Str: 3, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 14, HP:7, Str: 3, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 15, HP:7, Str: 3, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 16, HP:7, Str: 3, Mag: 0, Dex: 0, Spd: 0, Def: 4, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 17, HP:7, Str: 4, Mag: 0, Dex: 0, Spd: 0, Def: 4, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 18, HP:7, Str: 4, Mag: 0, Dex: 0, Spd: 0, Def: 4, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 19, HP:7, Str: 4, Mag: 0, Dex: 0, Spd: 0, Def: 5, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 20, HP:7, Str: 4, Mag: 0, Dex: 0, Spd: 0, Def: 5, Res: 0, Lck: 0, Bld: 0, Mov: 0}
      ]},
      {Emblem: "Byleth", Stats: [ 
      { BondLevel: 1, HP:0, Str: 0, Mag: 1, Dex: 0, Spd: 1, Def: 0, Res: 0, Lck: 2, Bld: 0, Mov: 0}, 
      { BondLevel: 2, HP:0, Str: 0, Mag: 1, Dex: 0, Spd: 1, Def: 0, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 3, HP:0, Str: 0, Mag: 1, Dex: 0, Spd: 1, Def: 0, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 4, HP:0, Str: 0, Mag: 1, Dex: 0, Spd: 1, Def: 0, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 5, HP:0, Str: 0, Mag: 1, Dex: 0, Spd: 1, Def: 0, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 6, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 1, Def: 0, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 7, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 2, Def: 0, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 8, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 2, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 9, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 2, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 10, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 2, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 11, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 2, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 12, HP:0, Str: 0, Mag: 3, Dex: 0, Spd: 2, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 13, HP:0, Str: 0, Mag: 3, Dex: 0, Spd: 2, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 14, HP:0, Str: 0, Mag: 3, Dex: 0, Spd: 3, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 15, HP:0, Str: 0, Mag: 3, Dex: 0, Spd: 3, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 16, HP:0, Str: 0, Mag: 3, Dex: 0, Spd: 3, Def: 0, Res: 0, Lck: 8, Bld: 0, Mov: 0}, 
      { BondLevel: 17, HP:0, Str: 0, Mag: 3, Dex: 0, Spd: 3, Def: 0, Res: 0, Lck: 10, Bld: 0, Mov: 0}, 
      { BondLevel: 18, HP:0, Str: 0, Mag: 3, Dex: 0, Spd: 3, Def: 0, Res: 0, Lck: 10, Bld: 0, Mov: 0}, 
      { BondLevel: 19, HP:0, Str: 0, Mag: 3, Dex: 0, Spd: 3, Def: 0, Res: 0, Lck: 12, Bld: 0, Mov: 0}, 
      { BondLevel: 20, HP:0, Str: 0, Mag: 3, Dex: 0, Spd: 3, Def: 0, Res: 0, Lck: 12, Bld: 0, Mov: 0}
      ]},
      {Emblem: "Corrin", Stats: [ 
      { BondLevel: 1, HP:5, Str: 0, Mag: 1, Dex: 0, Spd: 0, Def: 0, Res: 1, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 2, HP:7, Str: 0, Mag: 1, Dex: 0, Spd: 0, Def: 0, Res: 1, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 3, HP:7, Str: 0, Mag: 1, Dex: 0, Spd: 0, Def: 0, Res: 1, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 4, HP:7, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 1, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 5, HP:7, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 1, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 6, HP:7, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 1, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 7, HP:7, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 8, HP:7, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 9, HP:10, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 10, HP:10, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 11, HP:10, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 12, HP:10, Str: 0, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 13, HP:10, Str: 0, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 14, HP:10, Str: 0, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 15, HP:10, Str: 0, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 16, HP:12, Str: 0, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 17, HP:12, Str: 0, Mag: 4, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 18, HP:12, Str: 0, Mag: 4, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 19, HP:15, Str: 0, Mag: 4, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 20, HP:15, Str: 0, Mag: 4, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 0, Bld: 0, Mov: 0}
      ]},
      {Emblem: "Eirika", Stats: [ 
        { BondLevel: 1, HP:0, Str: 0, Mag: 1, Dex: 1, Spd: 0, Def: 0, Res: 0, Lck: 2, Bld: 0, Mov: 0}, 
        { BondLevel: 2, HP:0, Str: 0, Mag: 1, Dex: 1, Spd: 0, Def: 0, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
        { BondLevel: 3, HP:0, Str: 0, Mag: 1, Dex: 1, Spd: 0, Def: 0, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
        { BondLevel: 4, HP:0, Str: 0, Mag: 1, Dex: 2, Spd: 0, Def: 0, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
        { BondLevel: 5, HP:0, Str: 0, Mag: 1, Dex: 2, Spd: 0, Def: 0, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
        { BondLevel: 6, HP:0, Str: 0, Mag: 1, Dex: 2, Spd: 0, Def: 0, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
        { BondLevel: 7, HP:0, Str: 0, Mag: 2, Dex: 2, Spd: 0, Def: 0, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
        { BondLevel: 8, HP:0, Str: 0, Mag: 2, Dex: 2, Spd: 0, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
        { BondLevel: 9, HP:0, Str: 0, Mag: 2, Dex: 2, Spd: 0, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
        { BondLevel: 10, HP:0, Str: 0, Mag: 2, Dex: 2, Spd: 0, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
        { BondLevel: 11, HP:0, Str: 0, Mag: 2, Dex: 2, Spd: 0, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
        { BondLevel: 12, HP:0, Str: 0, Mag: 2, Dex: 3, Spd: 0, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
        { BondLevel: 13, HP:0, Str: 0, Mag: 2, Dex: 3, Spd: 0, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
        { BondLevel: 14, HP:0, Str: 0, Mag: 3, Dex: 3, Spd: 0, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
        { BondLevel: 15, HP:0, Str: 0, Mag: 3, Dex: 3, Spd: 0, Def: 0, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
        { BondLevel: 16, HP:0, Str: 0, Mag: 3, Dex: 3, Spd: 0, Def: 0, Res: 0, Lck: 8, Bld: 0, Mov: 0}, 
        { BondLevel: 17, HP:0, Str: 0, Mag: 3, Dex: 4, Spd: 0, Def: 0, Res: 0, Lck: 8, Bld: 0, Mov: 0}, 
        { BondLevel: 18, HP:0, Str: 0, Mag: 3, Dex: 4, Spd: 0, Def: 0, Res: 0, Lck: 8, Bld: 0, Mov: 0}, 
        { BondLevel: 19, HP:0, Str: 0, Mag: 3, Dex: 4, Spd: 0, Def: 0, Res: 0, Lck: 10, Bld: 0, Mov: 0}, 
        { BondLevel: 20, HP:0, Str: 0, Mag: 3, Dex: 4, Spd: 0, Def: 0, Res: 0, Lck: 10, Bld: 0, Mov: 0}
        ]},
        
      {Emblem: "Fire Emblem", Stats: [ 
      { BondLevel: 1, HP:5, Str: 0, Mag: 0, Dex: 0, Spd: 1, Def: 1, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 5, HP:7, Str: 0, Mag: 0, Dex: 0, Spd: 2, Def: 1, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 10, HP:10, Str: 0, Mag: 0, Dex: 0, Spd: 2, Def: 2, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 20, HP:15, Str: 0, Mag: 0, Dex: 0, Spd: 4, Def: 4, Res: 0, Lck: 0, Bld: 0, Mov: 0}
      ]},
      {Emblem: "Edelgard(DLC)", Stats: [ 
      { BondLevel: 1, HP:0, Str: 2, Mag: 0, Dex: 1, Spd: 0, Def: 1, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 2, HP:0, Str: 2, Mag: 0, Dex: 2, Spd: 0, Def: 1, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 3, HP:0, Str: 2, Mag: 0, Dex: 2, Spd: 0, Def: 1, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 4, HP:0, Str: 2, Mag: 0, Dex: 2, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 5, HP:0, Str: 2, Mag: 0, Dex: 2, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 6, HP:0, Str: 2, Mag: 0, Dex: 2, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 7, HP:0, Str: 3, Mag: 0, Dex: 2, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 8, HP:0, Str: 3, Mag: 0, Dex: 3, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 9, HP:0, Str: 3, Mag: 0, Dex: 3, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 10, HP:0, Str: 3, Mag: 0, Dex: 3, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 11, HP:0, Str: 3, Mag: 0, Dex: 3, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 12, HP:0, Str: 3, Mag: 0, Dex: 3, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 13, HP:0, Str: 3, Mag: 0, Dex: 3, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 14, HP:0, Str: 3, Mag: 0, Dex: 3, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 15, HP:0, Str: 3, Mag: 0, Dex: 3, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 16, HP:0, Str: 4, Mag: 0, Dex: 3, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 17, HP:0, Str: 4, Mag: 0, Dex: 3, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 18, HP:0, Str: 4, Mag: 0, Dex: 4, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 19, HP:0, Str: 5, Mag: 0, Dex: 4, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 20, HP:0, Str: 5, Mag: 0, Dex: 4, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 0, Mov: 0}
      ]},
      {Emblem: "Tiki(DLC)", Stats: [ 
      { BondLevel: 1, HP:5, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 1, Res: 0, Lck: 2, Bld: 0, Mov: 0}, 
      { BondLevel: 2, HP:5, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 1, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 3, HP:5, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 1, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 4, HP:5, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 5, HP:5, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 6, HP:5, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 7, HP:7, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 8, HP:7, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 9, HP:7, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 10, HP:7, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 11, HP:7, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 12, HP:7, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 13, HP:10, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 14, HP:10, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 15, HP:10, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 8, Bld: 0, Mov: 0}, 
      { BondLevel: 16, HP:10, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 8, Bld: 0, Mov: 0}, 
      { BondLevel: 17, HP:10, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 4, Res: 0, Lck: 8, Bld: 0, Mov: 0}, 
      { BondLevel: 18, HP:10, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 4, Res: 0, Lck: 10, Bld: 0, Mov: 0}, 
      { BondLevel: 19, HP:10, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 4, Res: 0, Lck: 10, Bld: 0, Mov: 0}, 
      { BondLevel: 20, HP:10, Str: 0, Mag: 0, Dex: 0, Spd: 0, Def: 4, Res: 0, Lck: 10, Bld: 0, Mov: 0}
      ]},
      {Emblem: "Hector(DLC)", Stats: [ 
      { BondLevel: 1, HP:0, Str: 1, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 1, Mov: 0}, 
      { BondLevel: 2, HP:0, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 1, Mov: 0}, 
      { BondLevel: 3, HP:0, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 2, Res: 0, Lck: 0, Bld: 1, Mov: 0}, 
      { BondLevel: 4, HP:0, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 1, Mov: 0}, 
      { BondLevel: 5, HP:0, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 1, Mov: 0}, 
      { BondLevel: 6, HP:0, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 1, Mov: 0}, 
      { BondLevel: 7, HP:0, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 2, Mov: 0}, 
      { BondLevel: 8, HP:0, Str: 2, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 2, Mov: 0}, 
      { BondLevel: 9, HP:0, Str: 3, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 2, Mov: 0}, 
      { BondLevel: 10, HP:0, Str: 3, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 2, Mov: 0}, 
      { BondLevel: 11, HP:0, Str: 3, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 2, Mov: 0}, 
      { BondLevel: 12, HP:0, Str: 3, Mag: 0, Dex: 0, Spd: 0, Def: 3, Res: 0, Lck: 0, Bld: 2, Mov: 0}, 
      { BondLevel: 13, HP:0, Str: 3, Mag: 0, Dex: 0, Spd: 0, Def: 4, Res: 0, Lck: 0, Bld: 2, Mov: 0}, 
      { BondLevel: 14, HP:0, Str: 4, Mag: 0, Dex: 0, Spd: 0, Def: 4, Res: 0, Lck: 0, Bld: 2, Mov: 0}, 
      { BondLevel: 15, HP:0, Str: 4, Mag: 0, Dex: 0, Spd: 0, Def: 4, Res: 0, Lck: 0, Bld: 2, Mov: 0}, 
      { BondLevel: 16, HP:0, Str: 4, Mag: 0, Dex: 0, Spd: 0, Def: 4, Res: 0, Lck: 0, Bld: 2, Mov: 0}, 
      { BondLevel: 17, HP:0, Str: 4, Mag: 0, Dex: 0, Spd: 0, Def: 4, Res: 0, Lck: 0, Bld: 3, Mov: 0}, 
      { BondLevel: 18, HP:0, Str: 4, Mag: 0, Dex: 0, Spd: 0, Def: 5, Res: 0, Lck: 0, Bld: 3, Mov: 0}, 
      { BondLevel: 19, HP:0, Str: 4, Mag: 0, Dex: 0, Spd: 0, Def: 5, Res: 0, Lck: 0, Bld: 3, Mov: 0}, 
      { BondLevel: 20, HP:0, Str: 4, Mag: 0, Dex: 0, Spd: 0, Def: 5, Res: 0, Lck: 0, Bld: 3, Mov: 0}
      ]},
      {Emblem: "Veronica(DLC)", Stats: [ 
      { BondLevel: 1, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 1, Lck: 2, Bld: 0, Mov: 0}, 
      { BondLevel: 2, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 2, Bld: 0, Mov: 0}, 
      { BondLevel: 3, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 2, Bld: 0, Mov: 0}, 
      { BondLevel: 4, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 5, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 6, HP:0, Str: 0, Mag: 2, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 7, HP:0, Str: 0, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 8, HP:0, Str: 0, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 2, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 9, HP:0, Str: 0, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 10, HP:0, Str: 0, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 11, HP:0, Str: 0, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 4, Bld: 0, Mov: 0}, 
      { BondLevel: 12, HP:0, Str: 0, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 13, HP:0, Str: 0, Mag: 3, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 14, HP:0, Str: 0, Mag: 4, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 15, HP:0, Str: 0, Mag: 4, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 16, HP:0, Str: 0, Mag: 4, Dex: 0, Spd: 0, Def: 0, Res: 3, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 17, HP:0, Str: 0, Mag: 4, Dex: 0, Spd: 0, Def: 0, Res: 4, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 18, HP:0, Str: 0, Mag: 4, Dex: 0, Spd: 0, Def: 0, Res: 4, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 19, HP:0, Str: 0, Mag: 5, Dex: 0, Spd: 0, Def: 0, Res: 4, Lck: 6, Bld: 0, Mov: 0}, 
      { BondLevel: 20, HP:0, Str: 0, Mag: 5, Dex: 0, Spd: 0, Def: 0, Res: 4, Lck: 6, Bld: 0, Mov: 0}
      ]},
      {Emblem: "Soren(DLC)", Stats: [ 
      { BondLevel: 1, HP:0, Str: 1, Mag: 0, Dex: 1, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 2, HP:0, Str: 2, Mag: 0, Dex: 1, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 3, HP:0, Str: 2, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 4, HP:0, Str: 2, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 5, HP:0, Str: 2, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 6, HP:0, Str: 2, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 7, HP:0, Str: 2, Mag: 0, Dex: 2, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 8, HP:0, Str: 3, Mag: 0, Dex: 2, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 9, HP:0, Str: 3, Mag: 0, Dex: 2, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 10, HP:0, Str: 3, Mag: 0, Dex: 2, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 11, HP:0, Str: 3, Mag: 0, Dex: 2, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 12, HP:0, Str: 3, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 13, HP:0, Str: 3, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 14, HP:0, Str: 3, Mag: 0, Dex: 3, Spd: 4, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 15, HP:0, Str: 3, Mag: 0, Dex: 3, Spd: 4, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 16, HP:0, Str: 3, Mag: 0, Dex: 3, Spd: 4, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 17, HP:0, Str: 4, Mag: 0, Dex: 3, Spd: 4, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 18, HP:0, Str: 4, Mag: 0, Dex: 3, Spd: 4, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 19, HP:0, Str: 4, Mag: 0, Dex: 3, Spd: 5, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 20, HP:0, Str: 4, Mag: 0, Dex: 3, Spd: 5, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}
      ]},
      {Emblem: "Camilla(DLC)", Stats: [ 
      { BondLevel: 1, HP:0, Str: 3, Mag: 0, Dex: 2, Spd: 1, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 2, HP:0, Str: 3, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 3, HP:0, Str: 5, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 4, HP:0, Str: 5, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 5, HP:0, Str: 5, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 6, HP:0, Str: 5, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 7, HP:0, Str: 5, Mag: 0, Dex: 3, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 8, HP:0, Str: 5, Mag: 0, Dex: 3, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 9, HP:0, Str: 5, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 10, HP:0, Str: 5, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 11, HP:0, Str: 5, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 12, HP:0, Str: 5, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 13, HP:0, Str: 7, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 14, HP:0, Str: 7, Mag: 0, Dex: 4, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 15, HP:0, Str: 7, Mag: 0, Dex: 4, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 16, HP:0, Str: 7, Mag: 0, Dex: 4, Spd: 4, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 17, HP:0, Str: 7, Mag: 0, Dex: 4, Spd: 4, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 18, HP:0, Str: 7, Mag: 0, Dex: 4, Spd: 4, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 19, HP:0, Str: 7, Mag: 0, Dex: 5, Spd: 4, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 20, HP:0, Str: 7, Mag: 0, Dex: 5, Spd: 4, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}
      ]},
      {Emblem: "Chrom(DLC)", Stats: [ 
      { BondLevel: 1, HP:0, Str: 1, Mag: 0, Dex: 2, Spd: 1, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 2, HP:0, Str: 1, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 3, HP:0, Str: 2, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 4, HP:0, Str: 2, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 5, HP:0, Str: 2, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 6, HP:0, Str: 2, Mag: 0, Dex: 2, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 7, HP:0, Str: 2, Mag: 0, Dex: 3, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 8, HP:0, Str: 2, Mag: 0, Dex: 3, Spd: 2, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 9, HP:0, Str: 2, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 10, HP:0, Str: 2, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 11, HP:0, Str: 2, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 12, HP:0, Str: 3, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 13, HP:0, Str: 3, Mag: 0, Dex: 3, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 14, HP:0, Str: 3, Mag: 0, Dex: 4, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 15, HP:0, Str: 3, Mag: 0, Dex: 4, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 16, HP:0, Str: 3, Mag: 0, Dex: 4, Spd: 3, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 17, HP:0, Str: 3, Mag: 0, Dex: 4, Spd: 4, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 18, HP:0, Str: 3, Mag: 0, Dex: 4, Spd: 4, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 19, HP:0, Str: 3, Mag: 0, Dex: 5, Spd: 4, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}, 
      { BondLevel: 20, HP:0, Str: 3, Mag: 0, Dex: 5, Spd: 4, Def: 0, Res: 0, Lck: 0, Bld: 0, Mov: 0}
    ]
  }
]

const inheritSkills = [
  {SkillName: "Adaptability", Description: "When hit by a foe's attack, grants Def+2 for a physical attack or Res+2 for a magical attack after combat. Lasts until end of battle, or until activated again.", SkillType: "Sync Skill (Can Inherit)", SP: 350, Emblem: "Hector(DLC)", BondLevel: 3},
{SkillName: "Adaptability+", Description: "When hit by a foe's attack, grants Def+3 for a physical attack or Res+3 for a magical attack after combat. Lasts until end of battle, or until activated again.", SkillType: "Sync Skill (Can Inherit)", SP: 700, Emblem: "Hector(DLC)", BondLevel: 19},
{SkillName: "Advance", Description: "Use to move 1 space toward a foe that is 2 spaces away and attack.", SkillType: "Sync Skill (Can Inherit)", SP: 500, Emblem: "Roy", BondLevel: 3},
{SkillName: "Alacrity", Description: "If unit initiates combat with a Spd advantage of 9 or more, unit's follow-up (if possible) occurs before foe can counterattack.", SkillType: "Sync Skill (Can Inherit)", SP: 1000, Emblem: "Lyn", BondLevel: 1},
{SkillName: "Alacrity+", Description: "If unit initiates combat with a Spd advantage of 7 or more, unit's follow-up (if possible) occurs before foe can counterattack.", SkillType: "Sync Skill (Can Inherit)", SP: 2000, Emblem: "Lyn", BondLevel: 13},
{SkillName: "Alacrity++", Description: "If unit initiates combat with a Spd advantage of 5 or more, unit's follow-up (if possible) occurs before foe can counterattack.", SkillType: "Sync Skill (Can Inherit)", SP: 3000, Emblem: "Lyn", BondLevel: 18},
{SkillName: "Anima Focus", Description: "When using tomes, unit inflicts Def-3 with fire, Hit-20 with thunder, or Mov-2 with wind magic for 1 turn.", SkillType: "Sync Skill (Can Inherit)", SP: 800, Emblem: "Soren(DLC)", BondLevel: 4},
{SkillName: "Arms Shield", Description: "When unit has weapon advantage, unit takes 3 less damage.", SkillType: "Sync Skill (Can Inherit)", SP: 200, Emblem: "Leif", BondLevel: 1},
{SkillName: "Arms Shield+", Description: "When unit has weapon advantage, unit takes 5 less damage.", SkillType: "Sync Skill (Can Inherit)", SP: 400, Emblem: "Leif", BondLevel: 7},
{SkillName: "Arms Shield++", Description: "When unit has weapon advantage, unit takes 7 less damage.", SkillType: "Sync Skill (Can Inherit)", SP: 600, Emblem: "Leif", BondLevel: 16},
{SkillName: "Art Focus 1", Description: "Grants Hit+10 at a cost of Ddg-10 when using an art.", SkillType: "Inheritable Skill", SP: 100, Emblem: "Byleth", BondLevel: 4},
{SkillName: "Art Focus 2", Description: "Grants Hit+15 at a cost of Ddg-10 when using an art.", SkillType: "Inheritable Skill", SP: 300, Emblem: "Byleth", BondLevel: 6},
{SkillName: "Art Focus 3", Description: "Grants Hit+20 at a cost of Ddg-10 when using an art.", SkillType: "Inheritable Skill", SP: 500, Emblem: "Byleth", BondLevel: 7},
{SkillName: "Art Focus 4", Description: "Grants Hit+25 at a cost of Ddg-10 when using an art.", SkillType: "Inheritable Skill", SP: 700, Emblem: "Byleth", BondLevel: 12},
{SkillName: "Art Focus 5", Description: "Grants Hit+30 at a cost of Ddg-10 when using an art.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Byleth", BondLevel: 14},
{SkillName: "Assembly Gambit", Description: "Use to attack an adjacent foe, then move 1 space away after combat. Target foe moves to unit's previous space.", SkillType: "Inheritable Skill", SP: 1500, Emblem: "Edelgard(DLC)", BondLevel: 2},
{SkillName: "Assign Decoy", Description: "Use to make one chosen ally more likely to be targeted by enemies for 1 turn. Effect is removed after ally is targeted by or otherwise damaged by foes 3 times.", SkillType: "Sync Skill (Can Inherit)", SP: 1500, Emblem: "Soren(DLC)", BondLevel: 1},
{SkillName: "Avoid +10", Description: "Grants Avo+10.", SkillType: "Inheritable Skill", SP: 500, Emblem: "Marth", BondLevel: 1},
{SkillName: "Avoid +15", Description: "Grants Avo+15.", SkillType: "Inheritable Skill", SP: 1500, Emblem: "Marth", BondLevel: 4},
{SkillName: "Avoid +20", Description: "Grants Avo+20.", SkillType: "Inheritable Skill", SP: 2500, Emblem: "Marth", BondLevel: 9},
{SkillName: "Avoid +25", Description: "Grants Avo+25.", SkillType: "Inheritable Skill", SP: 3500, Emblem: "Marth", BondLevel: 14},
{SkillName: "Avoid +30", Description: "Grants Avo+30.", SkillType: "Inheritable Skill", SP: 4500, Emblem: "Marth", BondLevel: 19},
{SkillName: "Axe Guard 1", Description: "If foe is equipped with an axe, unit takes 1 less damage during combat.", SkillType: "Inheritable Skill", SP: 200, Emblem: "Hector(DLC)", BondLevel: 4},
{SkillName: "Axe Guard 2", Description: "If foe is equipped with an axe, unit takes 2 less damage during combat.", SkillType: "Inheritable Skill", SP: 400, Emblem: "Hector(DLC)", BondLevel: 9},
{SkillName: "Axe Guard 3", Description: "If foe is equipped with an axe, unit takes 3 less damage during combat.", SkillType: "Inheritable Skill", SP: 600, Emblem: "Hector(DLC)", BondLevel: 13},
{SkillName: "Axe Guard 4", Description: "If foe is equipped with an axe, unit takes 4 less damage during combat.", SkillType: "Inheritable Skill", SP: 800, Emblem: "Hector(DLC)", BondLevel: 17},
{SkillName: "Axe Guard 5", Description: "If foe is equipped with an axe, unit takes 5 less damage during combat.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Hector(DLC)", BondLevel: 19},
{SkillName: "Axe Power 1", Description: "Grants Atk+2 at a cost of Avo-10 when using an axe.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Ike", BondLevel: 4},
{SkillName: "Axe Power 2", Description: "Grants Atk+4 at a cost of Avo-10 when using an axe.", SkillType: "Inheritable Skill", SP: 2000, Emblem: "Ike", BondLevel: 7},
{SkillName: "Axe Power 3", Description: "Grants Atk+6 at a cost of Avo-10 when using an axe.", SkillType: "Inheritable Skill", SP: 3000, Emblem: "Ike", BondLevel: 12},
{SkillName: "Axe Power 4", Description: "Grants Atk+8 at a cost of Avo-10 when using an axe.", SkillType: "Inheritable Skill", SP: 4000, Emblem: "Ike", BondLevel: 14},
{SkillName: "Axe Power 5", Description: "Grants Atk+10 at a cost of Avo-10 when using an axe.", SkillType: "Inheritable Skill", SP: 5000, Emblem: "Ike", BondLevel: 17},
{SkillName: "Block Recovery", Description: "When attacking a broken foe with a tome, grants a chance the foe will remain broken. Chance increases with high Spd. [Trigger% = (Spd - foe's Spd) x 5, max 50]", SkillType: "Sync Skill (Can Inherit)", SP: 1500, Emblem: "Soren(DLC)", BondLevel: 13},
{SkillName: "Book of Worlds", Description: "Book of Worlds advances 1 stage (to max 5) for each consecutive round that unit uses Wait. Reverts to base stage if unit triggers the effect.(Book I: Seal) If unit initiates combat, freezes foe after combat.(Book II: Flame) If unit initiates combat, freezes foe and sets foe's space on fire after combat.(Book III: Death) If unit initiates combat, deals 10 damage, freezes foe, and sets foe's space on fire after combat.(Book IV: Dream) If unit initiates combat, restores HP equal to damage dealt during combat, then deals 10 damage, freezes foe, and sets foe's space on fire after combat.(Book V: Science) If unit initiates combat, restores HP to self and adjacent allies equal to damage dealt during combat, then deals 10 damage, freezes foe, and sets foe's space on fire after combat.", SkillType: "Sync Skill (Can Inherit)", SP: 300, Emblem: "Veronica(DLC)", BondLevel: 3},
{SkillName: "Bow Agility 1", Description: "Grants Avo+10 at a cost of Crit-10 when using a bow.", SkillType: "Inheritable Skill", SP: 500, Emblem: "Lucina", BondLevel: 4},
{SkillName: "Bow Agility 2", Description: "Grants Avo+15 at a cost of Crit-10 when using a bow.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Lucina", BondLevel: 7},
{SkillName: "Bow Agility 3", Description: "Grants Avo+20 at a cost of Crit-10 when using a bow.", SkillType: "Inheritable Skill", SP: 2000, Emblem: "Lucina", BondLevel: 12},
{SkillName: "Bow Agility 4", Description: "Grants Avo+25 at a cost of Crit-10 when using a bow.", SkillType: "Inheritable Skill", SP: 3000, Emblem: "Lucina", BondLevel: 14},
{SkillName: "Bow Agility 5", Description: "Grants Avo+30 at a cost of Crit-10 when using a bow.", SkillType: "Inheritable Skill", SP: 4000, Emblem: "Lucina", BondLevel: 17},
{SkillName: "Bow Focus 1", Description: "Grants Hit+10 at a cost of Ddg-10 when using a bow.", SkillType: "Inheritable Skill", SP: 100, Emblem: "Lyn", BondLevel: 4},
{SkillName: "Bow Focus 2", Description: "Grants Hit+15 at a cost of Ddg-10 when using a bow.", SkillType: "Inheritable Skill", SP: 300, Emblem: "Lyn", BondLevel: 7},
{SkillName: "Bow Focus 3", Description: "Grants Hit+20 at a cost of Ddg-10 when using a bow.", SkillType: "Inheritable Skill", SP: 500, Emblem: "Lyn", BondLevel: 12},
{SkillName: "Bow Focus 4", Description: "Grants Hit+25 at a cost of Ddg-10 when using a bow.", SkillType: "Inheritable Skill", SP: 700, Emblem: "Lyn", BondLevel: 14},
{SkillName: "Bow Focus 5", Description: "Grants Hit+30 at a cost of Ddg-10 when using a bow.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Lyn", BondLevel: 17},
{SkillName: "Bow Guard 1", Description: "If foe is equipped with a bow, unit takes 1 less damage during combat.", SkillType: "Inheritable Skill", SP: 200, Emblem: "Edelgard(DLC)", BondLevel: 4},
{SkillName: "Bow Guard 2", Description: "If foe is equipped with a bow, unit takes 2 less damage during combat.", SkillType: "Inheritable Skill", SP: 400, Emblem: "Edelgard(DLC)", BondLevel: 8},
{SkillName: "Bow Guard 3", Description: "If foe is equipped with a bow, unit takes 3 less damage during combat.", SkillType: "Inheritable Skill", SP: 600, Emblem: "Edelgard(DLC)", BondLevel: 14},
{SkillName: "Bow Guard 4", Description: "If foe is equipped with a bow, unit takes 4 less damage during combat.", SkillType: "Inheritable Skill", SP: 800, Emblem: "Edelgard(DLC)", BondLevel: 17},
{SkillName: "Bow Guard 5", Description: "If foe is equipped with a bow, unit takes 5 less damage during combat.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Edelgard(DLC)", BondLevel: 19},
{SkillName: "Break Defenses", Description: "If unit's attack breaks foe, unit makes an extra attack at 50% damage.", SkillType: "Sync Skill (Can Inherit)", SP: 2000, Emblem: "Marth", BondLevel: 3},
{SkillName: "Brute Force", Description: "While making a physical attack, critical hits deal increased damage. [Damage increased by one third.]", SkillType: "Sync Skill (Can Inherit)", SP: 1500, Emblem: "Chrom(DLC)", BondLevel: 8},
{SkillName: "Build +3", Description: "Grants Bld+3.", SkillType: "Inheritable Skill", SP: 500, Emblem: "Leif", BondLevel: 1},
{SkillName: "Build +4", Description: "Grants Bld+4.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Leif", BondLevel: 6},
{SkillName: "Build +5", Description: "Grants Bld+5.", SkillType: "Inheritable Skill", SP: 2000, Emblem: "Leif", BondLevel: 14},
{SkillName: "Canter", Description: "Unit can move 2 spaces after acting.", SkillType: "Sync Skill (Can Inherit)", SP: 1000, Emblem: "Sigurd", BondLevel: 1},
{SkillName: "Canter+", Description: "Unit can move 3 spaces after acting.", SkillType: "Sync Skill (Can Inherit)", SP: 2000, Emblem: "Sigurd", BondLevel: 13},
{SkillName: "Charm", Description: "If unit's attack triggers a chain attack, increases chain attack accuracy to 90%.", SkillType: "Sync Skill (Can Inherit)", SP: 800, Emblem: "Chrom(DLC)", BondLevel: 13},
{SkillName: "Decisive Strike", Description: "If unit initiates combat and lands a critical, deals 5 damage to foe after combat.", SkillType: "Sync Skill (Can Inherit)", SP: 500, Emblem: "Camilla(DLC)", BondLevel: 4},
{SkillName: "Decisive Strike+", Description: "If unit initiates combat and lands a critical, deals 10 damage to foe after combat.", SkillType: "Sync Skill (Can Inherit)", SP: 1000, Emblem: "Camilla(DLC)", BondLevel: 18},
{SkillName: "Defense +1", Description: "Grants Def+1.", SkillType: "Inheritable Skill", SP: 100, Emblem: "Ike", BondLevel: 1},
{SkillName: "Defense +2", Description: "Grants Def+2.", SkillType: "Inheritable Skill", SP: 300, Emblem: "Ike", BondLevel: 2},
{SkillName: "Defense +3", Description: "Grants Def+3.", SkillType: "Inheritable Skill", SP: 500, Emblem: "Ike", BondLevel: 8},
{SkillName: "Defense +4", Description: "Grants Def+4.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Ike", BondLevel: 16},
{SkillName: "Defense +5", Description: "Grants Def+5.", SkillType: "Inheritable Skill", SP: 2000, Emblem: "Ike", BondLevel: 19},
{SkillName: "Demolish", Description: "Break destructible terrain in a single blow when using Destroy.", SkillType: "Sync Skill (Can Inherit)", SP: 200, Emblem: "Ike", BondLevel: 1},
{SkillName: "Detoxify", Description: "Cures poison at start of turn.", SkillType: "Sync Skill (Can Inherit)", SP: 250, Emblem: "Camilla(DLC)", BondLevel: 8},
{SkillName: "Dexterity +1", Description: "Grants Dex+1.", SkillType: "Inheritable Skill", SP: 100, Emblem: "Lucina", BondLevel: 1},
{SkillName: "Dexterity +2", Description: "Grants Dex+2.", SkillType: "Inheritable Skill", SP: 300, Emblem: "Lucina", BondLevel: 2},
{SkillName: "Dexterity +3", Description: "Grants Dex+3.", SkillType: "Inheritable Skill", SP: 500, Emblem: "Lucina", BondLevel: 9},
{SkillName: "Dexterity +4", Description: "Grants Dex+4.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Lucina", BondLevel: 16},
{SkillName: "Dexterity +5", Description: "Grants Dex+5.", SkillType: "Inheritable Skill", SP: 2000, Emblem: "Lucina", BondLevel: 19},
{SkillName: "Divine Pulse", Description: "May turn a missed attack into a hit. Trigger %=30. Chance increases with high Lck. [+1% for every 1 Luck.]", SkillType: "Sync Skill (Can Inherit)", SP: 250, Emblem: "Byleth", BondLevel: 1},
{SkillName: "Divine Pulse+", Description: "May turn a missed attack into a hit. Trigger %=50. Chance increases with high Lck. [+1% for every 1 Luck.]", SkillType: "Sync Skill (Can Inherit)", SP: 500, Emblem: "Byleth", BondLevel: 18},
{SkillName: "Dodge +10", Description: "Grants Ddg+10.", SkillType: "Inheritable Skill", SP: 500, Emblem: "Eirika", BondLevel: 1},
{SkillName: "Dodge +15", Description: "Grants Ddg+15.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Eirika", BondLevel: 4},
{SkillName: "Dodge +20", Description: "Grants Ddg+20.", SkillType: "Inheritable Skill", SP: 1500, Emblem: "Eirika", BondLevel: 8},
{SkillName: "Dodge +25", Description: "Grants Ddg+25.", SkillType: "Inheritable Skill", SP: 2000, Emblem: "Eirika", BondLevel: 14},
{SkillName: "Dodge +30", Description: "Grants Ddg+30.", SkillType: "Inheritable Skill", SP: 2500, Emblem: "Eirika", BondLevel: 19},
{SkillName: "Draconic Hex", Description: "If unit initiates combat, inflicts -4 to all of foe's basic stats after combat. (Penalties shrink by 1 each turn.)", SkillType: "Sync Skill (Can Inherit)", SP: 2000, Emblem: "Corrin", BondLevel: 8},
{SkillName: "Dual Assist", Description: "If unit is able to chain attack, unit will do so when allies attack foes unit could reach by moving. Trigger %=35.", SkillType: "Sync Skill (Can Inherit)", SP: 1000, Emblem: "Lucina", BondLevel: 3},
{SkillName: "Dual Assist+", Description: "If unit is able to chain attack, unit will do so when allies attack foes unit could reach by moving. Trigger %=70.", SkillType: "Sync Skill (Can Inherit)", SP: 2000, Emblem: "Lucina", BondLevel: 18},
{SkillName: "Dual Support", Description: "Grants a bonus to Avo that increases with unit's support level with adjacent allies. (Max +90) [+5 Avoid for each support level. None = 1, C = 2, B = 3, A = 4, S = 6.]", SkillType: "Sync Skill (Can Inherit)", SP: 2000, Emblem: "Lucina", BondLevel: 13},
{SkillName: "Favorite Food", Description: "When unit eats a packed lunch, its engage meter is maxed out.", SkillType: "Sync Skill (Can Inherit)", SP: 200, Emblem: "Celica", BondLevel: 8},
{SkillName: "Gentility", Description: "Unit takes 3 less damage.", SkillType: "Sync Skill (Can Inherit)", SP: 2000, Emblem: "Eirika", BondLevel: 3},
{SkillName: "Gentility+", Description: "Unit takes 5 less damage.", SkillType: "Sync Skill (Can Inherit)", SP: 3000, Emblem: "Eirika", BondLevel: 18},
{SkillName: "Geosphere", Description: "At start of player phase, if there are allies adjacent to unit, grants Def/Res+3 to unit and those allies for 1 turn.", SkillType: "Sync Skill (Can Inherit)", SP: 500, Emblem: "Tiki(DLC)", BondLevel: 3},
{SkillName: "Geosphere+", Description: "At start of player phase, if there are allies adjacent to unit, grants Def/Res+5 to unit and those allies for 1 turn.", SkillType: "Sync Skill (Can Inherit)", SP: 1000, Emblem: "Tiki(DLC)", BondLevel: 16},
{SkillName: "Groundswell", Description: "After unit acts or waits in flames, miasma, or similar terrain effect, unit clears effect and recovers 10 HP.", SkillType: "Sync Skill (Can Inherit)", SP: 500, Emblem: "Camilla(DLC)", BondLevel: 12},
{SkillName: "Headlong Rush", Description: "Grants immunity to freeze.", SkillType: "Sync Skill (Can Inherit)", SP: 200, Emblem: "Sigurd", BondLevel: 7},
{SkillName: "Healing Light", Description: "When unit heals an ally with a staff, unit also recovers HP=50% of the amount healed.", SkillType: "Sync Skill (Can Inherit)", SP: 200, Emblem: "Micaiah", BondLevel: 3},
{SkillName: "Heavy Attack", Description: "When making a physical attack, if an equipped weapon's Wt exceeds unit's Bld, adds excess as damage. (Max +5)", SkillType: "Sync Skill (Can Inherit)", SP: 3000, Emblem: "Hector(DLC)", BondLevel: 8},
{SkillName: "Hit +10", Description: "Grants Hit+10.", SkillType: "Inheritable Skill", SP: 500, Emblem: "Sigurd", BondLevel: 1},
{SkillName: "Hit +10", Description: "Grants Hit+10.", SkillType: "Inheritable Skill", SP: 500, Emblem: "Sigurd", BondLevel: 1},
{SkillName: "Hit +15", Description: "Grants Hit+15.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Sigurd", BondLevel: 4},
{SkillName: "Hit +20", Description: "Grants Hit+20.", SkillType: "Inheritable Skill", SP: 1500, Emblem: "Sigurd", BondLevel: 12},
{SkillName: "Hit +25", Description: "Grants Hit+25.", SkillType: "Inheritable Skill", SP: 2000, Emblem: "Sigurd", BondLevel: 16},
{SkillName: "Hit +30", Description: "Grants Hit+30.", SkillType: "Inheritable Skill", SP: 2500, Emblem: "Sigurd", BondLevel: 19},
{SkillName: "Hold Out", Description: "If unit had 30% HP or more at start of combat, unit always survives combat with at least 1 HP.", SkillType: "Sync Skill (Can Inherit)", SP: 2000, Emblem: "Roy", BondLevel: 1},
{SkillName: "Hold Out+", Description: "If unit had 20% HP or more at start of combat, unit always survives combat with at least 1 HP.", SkillType: "Sync Skill (Can Inherit)", SP: 3000, Emblem: "Roy", BondLevel: 8},
{SkillName: "Hold Out++", Description: "If unit had 10% HP or more at start of combat, unit always survives combat with at least 1 HP.", SkillType: "Sync Skill (Can Inherit)", SP: 4000, Emblem: "Roy", BondLevel: 13},
{SkillName: "Hold Out+++", Description: "If unit had 2 HP or more at start of combat, unit always survives combat with at least 1 HP.", SkillType: "Sync Skill (Can Inherit)", SP: 5000, Emblem: "Roy", BondLevel: 18},
{SkillName: "Holy Stance", Description: "If a Corrupted attacks unit, deals 10% of damage taken back to foe.", SkillType: "Sync Skill (Can Inherit)", SP: 100, Emblem: "Celica", BondLevel: 1},
{SkillName: "Holy Stance+", Description: "If a Corrupted attacks unit, deals 30% of damage taken back to foe.", SkillType: "Sync Skill (Can Inherit)", SP: 500, Emblem: "Celica", BondLevel: 12},
{SkillName: "Holy Stance++", Description: "If a Corrupted attacks unit, deals 50% of damage taken back to foe.", SkillType: "Sync Skill (Can Inherit)", SP: 1000, Emblem: "Celica", BondLevel: 18},
{SkillName: "HP +10", Description: "Grants max HP+10.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Corrin", BondLevel: 9},
{SkillName: "HP +12", Description: "Grants max HP+12.", SkillType: "Inheritable Skill", SP: 2000, Emblem: "Corrin", BondLevel: 16},
{SkillName: "HP +15", Description: "Grants max HP+15.", SkillType: "Inheritable Skill", SP: 3000, Emblem: "Corrin", BondLevel: 19},
{SkillName: "HP +5", Description: "Grants max HP+5.", SkillType: "Inheritable Skill", SP: 300, Emblem: "Corrin", BondLevel: 1},
{SkillName: "HP +7", Description: "Grants max HP+7.", SkillType: "Inheritable Skill", SP: 500, Emblem: "Corrin", BondLevel: 2},
{SkillName: "HP/Lck +10", Description: "Grants HP+10 and Lck+10.", SkillType: "Inheritable Skill", SP: 3600, Emblem: "Tiki(DLC)", BondLevel: 18},
{SkillName: "HP/Lck +2", Description: "Grants HP+2 and Lck+2.", SkillType: "Inheritable Skill", SP: 200, Emblem: "Tiki(DLC)", BondLevel: 2},
{SkillName: "HP/Lck +4", Description: "Grants HP+4 and Lck+4.", SkillType: "Inheritable Skill", SP: 600, Emblem: "Tiki(DLC)", BondLevel: 7},
{SkillName: "HP/Lck +6", Description: "Grants HP+6 and Lck+6.", SkillType: "Inheritable Skill", SP: 1100, Emblem: "Tiki(DLC)", BondLevel: 12},
{SkillName: "HP/Lck +8", Description: "Grants HP+8 and Lck+8.", SkillType: "Inheritable Skill", SP: 1900, Emblem: "Tiki(DLC)", BondLevel: 15},
{SkillName: "Keen Insight", Description: "When unit deals Effective damage, deal +5 damage.", SkillType: "Sync Skill (Can Inherit)", SP: 1500, Emblem: "Soren(DLC)", BondLevel: 9},
{SkillName: "Keen Insight+", Description: "When unit deals Effective damage, deal +7 damage.", SkillType: "Sync Skill (Can Inherit)", SP: 3000, Emblem: "Soren(DLC)", BondLevel: 18},
{SkillName: "Knife Guard 1", Description: "If foe is equipped with a knife, unit takes 1 less damage during combat.", SkillType: "Inheritable Skill", SP: 200, Emblem: "Veronica(DLC)", BondLevel: 4},
{SkillName: "Knife Guard 2", Description: "If foe is equipped with a knife, unit takes 2 less damage during combat.", SkillType: "Inheritable Skill", SP: 400, Emblem: "Veronica(DLC)", BondLevel: 9},
{SkillName: "Knife Guard 3", Description: "If foe is equipped with a knife, unit takes 3 less damage during combat.", SkillType: "Inheritable Skill", SP: 600, Emblem: "Veronica(DLC)", BondLevel: 13},
{SkillName: "Knife Guard 4", Description: "If foe is equipped with a knife, unit takes 4 less damage during combat.", SkillType: "Inheritable Skill", SP: 800, Emblem: "Veronica(DLC)", BondLevel: 17},
{SkillName: "Knife Guard 5", Description: "If foe is equipped with a knife, unit takes 5 less damage during combat.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Veronica(DLC)", BondLevel: 19},
{SkillName: "Knife Precision 1", Description: "Grants Hit/Avo+3 when using a knife.", SkillType: "Inheritable Skill", SP: 100, Emblem: "Leif", BondLevel: 4},
{SkillName: "Knife Precision 2", Description: "Grants Hit/Avo+5 when using a knife.", SkillType: "Inheritable Skill", SP: 300, Emblem: "Leif", BondLevel: 9},
{SkillName: "Knife Precision 3", Description: "Grants Hit/Avo+7 when using a knife.", SkillType: "Inheritable Skill", SP: 700, Emblem: "Leif", BondLevel: 13},
{SkillName: "Knife Precision 4", Description: "Grants Hit/Avo+10 when using a knife.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Leif", BondLevel: 17},
{SkillName: "Knife Precision 5", Description: "Grants Hit/Avo+15 when using a knife.", SkillType: "Inheritable Skill", SP: 2000, Emblem: "Leif", BondLevel: 19},
{SkillName: "Lance Agility 1", Description: "Grants Avo+10 at a cost of Crit-10 when using a lance.", SkillType: "Inheritable Skill", SP: 500, Emblem: "Eirika", BondLevel: 2},
{SkillName: "Lance Agility 2", Description: "Grants Avo+15 at a cost of Crit-10 when using a lance.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Eirika", BondLevel: 7},
{SkillName: "Lance Agility 3", Description: "Grants Avo+20 at a cost of Crit-10 when using a lance.", SkillType: "Inheritable Skill", SP: 2000, Emblem: "Eirika", BondLevel: 12},
{SkillName: "Lance Agility 4", Description: "Grants Avo+25 at a cost of Crit-10 when using a lance.", SkillType: "Inheritable Skill", SP: 3000, Emblem: "Eirika", BondLevel: 16},
{SkillName: "Lance Agility 5", Description: "Grants Avo+30 at a cost of Crit-10 when using a lance.", SkillType: "Inheritable Skill", SP: 4000, Emblem: "Eirika", BondLevel: 17},
{SkillName: "Lance Guard 1", Description: "If foe is equipped with a lance, unit takes 1 less damage during combat.", SkillType: "Inheritable Skill", SP: 200, Emblem: "Camilla(DLC)", BondLevel: 2},
{SkillName: "Lance Guard 2", Description: "If foe is equipped with a lance, unit takes 2 less damage during combat.", SkillType: "Inheritable Skill", SP: 400, Emblem: "Camilla(DLC)", BondLevel: 7},
{SkillName: "Lance Guard 3", Description: "If foe is equipped with a lance, unit takes 3 less damage during combat.", SkillType: "Inheritable Skill", SP: 600, Emblem: "Camilla(DLC)", BondLevel: 13},
{SkillName: "Lance Guard 4", Description: "If foe is equipped with a lance, unit takes 4 less damage during combat.", SkillType: "Inheritable Skill", SP: 800, Emblem: "Camilla(DLC)", BondLevel: 16},
{SkillName: "Lance Guard 5", Description: "If foe is equipped with a lance, unit takes 5 less damage during combat.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Camilla(DLC)", BondLevel: 19},
{SkillName: "Lance Power 1", Description: "Grants Atk+2 at a cost of Avo-10 when using a lance.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Sigurd", BondLevel: 2},
{SkillName: "Lance Power 2", Description: "Grants Atk+4 at a cost of Avo-10 when using a lance.", SkillType: "Inheritable Skill", SP: 2000, Emblem: "Sigurd", BondLevel: 6},
{SkillName: "Lance Power 3", Description: "Grants Atk+6 at a cost of Avo-10 when using a lance.", SkillType: "Inheritable Skill", SP: 3000, Emblem: "Sigurd", BondLevel: 8},
{SkillName: "Lance Power 4", Description: "Grants Atk+8 at a cost of Avo-10 when using a lance.", SkillType: "Inheritable Skill", SP: 4000, Emblem: "Sigurd", BondLevel: 14},
{SkillName: "Lance Power 5", Description: "Grants Atk+10 at a cost of Avo-10 when using a lance.", SkillType: "Inheritable Skill", SP: 5000, Emblem: "Sigurd", BondLevel: 18},
{SkillName: "Level Boost", Description: "When unit defeats a foe of a higher level, grants Lvl+1 until the end of battle. (Max +3)", SkillType: "Sync Skill (Can Inherit)", SP: 300, Emblem: "Veronica(DLC)", BondLevel: 8},
{SkillName: "Lifesphere", Description: "If unit uses Wait without attacking or using items, restores 20 HP and heals status effects.", SkillType: "Sync Skill (Can Inherit)", SP: 1000, Emblem: "Tiki(DLC)", BondLevel: 8},
{SkillName: "Lifesphere+", Description: "If unit uses Wait without attacking or using items, restores 30 HP and heals status effects.", SkillType: "Sync Skill (Can Inherit)", SP: 2000, Emblem: "Tiki(DLC)", BondLevel: 14},
{SkillName: "Lifesphere++", Description: "If unit uses Wait without attacking or using items, restores 40 HP and heals status effects.", SkillType: "Sync Skill (Can Inherit)", SP: 3000, Emblem: "Tiki(DLC)", BondLevel: 19},
{SkillName: "Lightsphere", Description: "If unit initiates combat, halves chance of receiving critical hit from foe.", SkillType: "Sync Skill (Can Inherit)", SP: 900, Emblem: "Tiki(DLC)", BondLevel: 10},
{SkillName: "Lineage", Description: "Increases unit's earned experience by 20%.", SkillType: "Sync Skill (Can Inherit)", SP: 150, Emblem: "Edelgard(DLC)", BondLevel: 3},
{SkillName: "Lost & Found", Description: "If unit finishes an action or waits next to an ally, may find an item and increase support with that ally. Trigger %=Lck.", SkillType: "Sync Skill (Can Inherit)", SP: 250, Emblem: "Byleth", BondLevel: 13},
{SkillName: "Luck +10", Description: "Grants Lck+10.", SkillType: "Inheritable Skill", SP: 2000, Emblem: "Byleth", BondLevel: 17},
{SkillName: "Luck +12", Description: "Grants Lck+12.", SkillType: "Inheritable Skill", SP: 3000, Emblem: "Byleth", BondLevel: 19},
{SkillName: "Luck +2", Description: "Grants Lck+2.", SkillType: "Inheritable Skill", SP: 100, Emblem: "Byleth", BondLevel: 1},
{SkillName: "Luck +4", Description: "Grants Lck+4.", SkillType: "Inheritable Skill", SP: 300, Emblem: "Byleth", BondLevel: 2},
{SkillName: "Luck +6", Description: "Grants Lck+6.", SkillType: "Inheritable Skill", SP: 500, Emblem: "Byleth", BondLevel: 8},
{SkillName: "Luck +8", Description: "Grants Lck+8.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Byleth", BondLevel: 16},
{SkillName: "Lunar Brace", Description: "If unit initiates combat with a physical attack, deals extra damage=20% of foe's Def.", SkillType: "Sync Skill (Can Inherit)", SP: 3000, Emblem: "Eirika", BondLevel: 1},
{SkillName: "Lunar Brace+", Description: "If unit initiates combat with a physical attack, deals extra damage=30% of foe's Def.", SkillType: "Sync Skill (Can Inherit)", SP: 5000, Emblem: "Eirika", BondLevel: 13},
{SkillName: "Mag/Dex +1", Description: "Grants Mag+1 and Dex+1.", SkillType: "Inheritable Skill", SP: 700, Emblem: "Veronica(DLC)", BondLevel: 2},
{SkillName: "Mag/Dex +2", Description: "Grants Mag+2 and Dex+2.", SkillType: "Inheritable Skill", SP: 1600, Emblem: "Veronica(DLC)", BondLevel: 7},
{SkillName: "Mag/Dex +3", Description: "Grants Mag+3 and Dex+3.", SkillType: "Inheritable Skill", SP: 4200, Emblem: "Veronica(DLC)", BondLevel: 12},
{SkillName: "Mag/Dex +4", Description: "Grants Mag+4 and Dex+4.", SkillType: "Inheritable Skill", SP: 6000, Emblem: "Veronica(DLC)", BondLevel: 14},
{SkillName: "Mag/Dex +5", Description: "Grants Mag+5 and Dex+5.", SkillType: "Inheritable Skill", SP: 8400, Emblem: "Veronica(DLC)", BondLevel: 18},
{SkillName: "Mag/Res +1", Description: "Grants Mag+1 and Res+1.", SkillType: "Inheritable Skill", SP: 700, Emblem: "Soren(DLC)", BondLevel: 2},
{SkillName: "Mag/Res +2", Description: "Grants Mag+2 and Res+2.", SkillType: "Inheritable Skill", SP: 1600, Emblem: "Soren(DLC)", BondLevel: 7},
{SkillName: "Mag/Res +3", Description: "Grants Mag+3 and Res+3.", SkillType: "Inheritable Skill", SP: 4200, Emblem: "Soren(DLC)", BondLevel: 12},
{SkillName: "Mag/Res +4", Description: "Grants Mag+4 and Res+4.", SkillType: "Inheritable Skill", SP: 6000, Emblem: "Soren(DLC)", BondLevel: 14},
{SkillName: "Mag/Res +5", Description: "Grants Mag+5 and Res+5.", SkillType: "Inheritable Skill", SP: 8400, Emblem: "Soren(DLC)", BondLevel: 18},
{SkillName: "Magic +2", Description: "Grants Mag+2.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Celica", BondLevel: 1},
{SkillName: "Magic +3", Description: "Grants Mag+3.", SkillType: "Inheritable Skill", SP: 3000, Emblem: "Celica", BondLevel: 2},
{SkillName: "Magic +4", Description: "Grants Mag+4.", SkillType: "Inheritable Skill", SP: 4000, Emblem: "Celica", BondLevel: 13},
{SkillName: "Magic +5", Description: "Grants Mag+5.", SkillType: "Inheritable Skill", SP: 5000, Emblem: "Celica", BondLevel: 19},
{SkillName: "Magic Guard 1", Description: "If foe is equipped with a tome, unit takes 1 less damage during combat.", SkillType: "Inheritable Skill", SP: 200, Emblem: "Soren(DLC)", BondLevel: 3},
{SkillName: "Magic Guard 2", Description: "If foe is equipped with a tome, unit takes 2 less damage during combat.", SkillType: "Inheritable Skill", SP: 400, Emblem: "Soren(DLC)", BondLevel: 8},
{SkillName: "Magic Guard 3", Description: "If foe is equipped with a tome, unit takes 3 less damage during combat.", SkillType: "Inheritable Skill", SP: 600, Emblem: "Soren(DLC)", BondLevel: 13},
{SkillName: "Magic Guard 4", Description: "If foe is equipped with a tome, unit takes 4 less damage during combat.", SkillType: "Inheritable Skill", SP: 800, Emblem: "Soren(DLC)", BondLevel: 17},
{SkillName: "Magic Guard 5", Description: "If foe is equipped with a tome, unit takes 5 less damage during combat.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Soren(DLC)", BondLevel: 19},
{SkillName: "Mentorship", Description: "Grants 1.2x EXP modifier to unit and adjacent allies.", SkillType: "Sync Skill (Can Inherit)", SP: 250, Emblem: "Byleth", BondLevel: 3},
{SkillName: "Momentum", Description: "Grants Atk+1 to first attack during combat for each space unit moved before attacking. (Max +10)", SkillType: "Sync Skill (Can Inherit)", SP: 1000, Emblem: "Sigurd", BondLevel: 3},
{SkillName: "Momentum+", Description: "Grants Atk+1 to first attack during combat for each space unit moved before attacking.", SkillType: "Sync Skill (Can Inherit)", SP: 2000, Emblem: "Sigurd", BondLevel: 17},
{SkillName: "Pair Up", Description: "Prevents damage from foes' chain attacks against unit.", SkillType: "Sync Skill (Can Inherit)", SP: 2000, Emblem: "Corrin", BondLevel: 13},
{SkillName: "Perceptive", Description: "If the unit initiates combat, grants Avo+15 during combat. Avo increases with high Spd. [+1 Avoid for every 4 Speed.]", SkillType: "", SP: 250, Emblem: "Marth", BondLevel: 1},
{SkillName: "Perceptive+", Description: "If the unit initiates combat, grants Avo+30 during combat. Avo increases with high Spd. [+1 Avoid for every 4 Speed.]", SkillType: "Sync Skill (Can Inherit)", SP: 500, Emblem: "Marth", BondLevel: 16},
{SkillName: "Quality Time", Description: "After unit acts or waits, restores 5 HP to adjacent allies and slightly increases support with them.", SkillType: "Sync Skill (Can Inherit)", SP: 250, Emblem: "Corrin", BondLevel: 3},
{SkillName: "Quality Time+", Description: "After unit acts or waits, restores 10 HP to adjacent allies and slightly increases support with them.", SkillType: "Sync Skill (Can Inherit)", SP: 500, Emblem: "Corrin", BondLevel: 18},
{SkillName: "Quick Riposte", Description: "If unit's HP is 80% or more and foe initiates combat, unit will always follow up (if weapon allows).", SkillType: "Sync Skill (Can Inherit)", SP: 2000, Emblem: "Hector(DLC)", BondLevel: 1},
{SkillName: "Quick Riposte+", Description: "If unit's HP is 60% or more and foe initiates combat, unit will always follow up (if weapon allows).", SkillType: "Sync Skill (Can Inherit)", SP: 3000, Emblem: "Hector(DLC)", BondLevel: 16},
{SkillName: "Rally Spectrum", Description: "Use to grant adjacent allies +3 to all seven basic stats for 1 turn.", SkillType: "Sync Skill (Can Inherit)", SP: 1500, Emblem: "Chrom(DLC)", BondLevel: 4},
{SkillName: "Rally Spectrum+", Description: "Use to grant allies within 2 spaces +3 to all seven basic stats for 1 turn.", SkillType: "Sync Skill (Can Inherit)", SP: 2000, Emblem: "Chrom(DLC)", BondLevel: 18},
{SkillName: "Reposition", Description: "Use to move an adjacent ally to the opposite side of unit.", SkillType: "Sync Skill (Can Inherit)", SP: 200, Emblem: "Ike", BondLevel: 3},
{SkillName: "Reprisal", Description: "If unit's HP is not full, adds 30% of lost HP to Atk.", SkillType: "Sync Skill (Can Inherit)", SP: 5000, Emblem: "Veronica(DLC)", BondLevel: 1},
{SkillName: "Reprisal+", Description: "If unit's HP is not full, adds 50% of lost HP to Atk.", SkillType: "Sync Skill (Can Inherit)", SP: 6000, Emblem: "Veronica(DLC)", BondLevel: 18},
{SkillName: "Resistance +2", Description: "Grants Res+2.", SkillType: "Inheritable Skill", SP: 300, Emblem: "Micaiah", BondLevel: 1},
{SkillName: "Resistance +3", Description: "Grants Res+3.", SkillType: "Inheritable Skill", SP: 500, Emblem: "Micaiah", BondLevel: 4},
{SkillName: "Resistance +4", Description: "Grants Res+4.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Micaiah", BondLevel: 14},
{SkillName: "Resistance +5", Description: "Grants Res+5.", SkillType: "Inheritable Skill", SP: 2000, Emblem: "Micaiah", BondLevel: 19},
{SkillName: "Resolve", Description: "If unit's HP is 75% or less after combat, grants Def/Res+5 as long as unit's HP stays below 75%.", SkillType: "Sync Skill (Can Inherit)", SP: 1000, Emblem: "Ike", BondLevel: 1},
{SkillName: "Resolve+", Description: "If unit's HP is 75% or less after combat, grants Def/Res+7 as long as unit's HP stays below 75%.", SkillType: "Sync Skill (Can Inherit)", SP: 2000, Emblem: "Ike", BondLevel: 18},
{SkillName: "Resonance", Description: "When equipped with a tome, if unit's HP is 2 or more, unit loses 1 HP at start of combat and deals +2 damage during combat.", SkillType: "Sync Skill (Can Inherit)", SP: 2000, Emblem: "Celica", BondLevel: 3},
{SkillName: "Resonance+", Description: "When equipped with a tome, if unit's HP is 2 or more, unit loses 1 HP at start of combat and deals +3 damage during combat.", SkillType: "Sync Skill (Can Inherit)", SP: 3000, Emblem: "Celica", BondLevel: 16},
{SkillName: "Silence Ward", Description: "Grants immunity to silence.", SkillType: "Sync Skill (Can Inherit)", SP: 200, Emblem: "Micaiah", BondLevel: 7},
{SkillName: "SP Conversion", Description: "Grants +20 SP for each defeated foe. Triggers even without a ring or bracelet equipped.", SkillType: "Sync Skill (Can Inherit)", SP: 300, Emblem: "Veronica(DLC)", BondLevel: 13},
{SkillName: "Spd/Dex +1", Description: "Grants Spd+1 and Dex+1.", SkillType: "Inheritable Skill", SP: 250, Emblem: "Chrom(DLC)", BondLevel: 2},
{SkillName: "Spd/Dex +2", Description: "Grants Spd+2 and Dex+2.", SkillType: "Inheritable Skill", SP: 700, Emblem: "Chrom(DLC)", BondLevel: 7},
{SkillName: "Spd/Dex +3", Description: "Grants Spd+3 and Dex+3.", SkillType: "Inheritable Skill", SP: 1200, Emblem: "Chrom(DLC)", BondLevel: 12},
{SkillName: "Spd/Dex +4", Description: "Grants Spd+4 and Dex+4.", SkillType: "Inheritable Skill", SP: 2400, Emblem: "Chrom(DLC)", BondLevel: 14},
{SkillName: "Spd/Dex +5", Description: "Grants Spd+5 and Dex+5.", SkillType: "Inheritable Skill", SP: 4800, Emblem: "Chrom(DLC)", BondLevel: 18},
{SkillName: "Spd/Res +1", Description: "Grants Spd+1 and Res+1.", SkillType: "Inheritable Skill", SP: 250, Emblem: "Camilla(DLC)", BondLevel: 1},
{SkillName: "Spd/Res +2", Description: "Grants Spd+2 and Res+2.", SkillType: "Inheritable Skill", SP: 700, Emblem: "Camilla(DLC)", BondLevel: 3},
{SkillName: "Spd/Res +3", Description: "Grants Spd+3 and Res+3.", SkillType: "Inheritable Skill", SP: 1200, Emblem: "Camilla(DLC)", BondLevel: 9},
{SkillName: "Spd/Res +4", Description: "Grants Spd+4 and Res+4.", SkillType: "Inheritable Skill", SP: 2400, Emblem: "Camilla(DLC)", BondLevel: 14},
{SkillName: "Spd/Res +5", Description: "Grants Spd+5 and Res+5.", SkillType: "Inheritable Skill", SP: 4800, Emblem: "Camilla(DLC)", BondLevel: 18},
{SkillName: "Special Guard 1", Description: "If foe is equipped with a special attack, unit takes 1 less damage during combat.", SkillType: "Inheritable Skill", SP: 200, Emblem: "Tiki(DLC)", BondLevel: 4},
{SkillName: "Special Guard 2", Description: "If foe is equipped with a special attack, unit takes 2 less damage during combat.", SkillType: "Inheritable Skill", SP: 400, Emblem: "Tiki(DLC)", BondLevel: 9},
{SkillName: "Special Guard 3", Description: "If foe is equipped with a special attack, unit takes 3 less damage during combat.", SkillType: "Inheritable Skill", SP: 600, Emblem: "Tiki(DLC)", BondLevel: 13},
{SkillName: "Special Guard 4", Description: "If foe is equipped with a special attack, unit takes 4 less damage during combat.", SkillType: "Inheritable Skill", SP: 800, Emblem: "Tiki(DLC)", BondLevel: 17},
{SkillName: "Special Guard 5", Description: "If foe is equipped with a special attack, unit takes 5 less damage during combat.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Tiki(DLC)", BondLevel: 19},
{SkillName: "Speed +1", Description: "Grants Spd+1.", SkillType: "Inheritable Skill", SP: 100, Emblem: "Lyn", BondLevel: 1},
{SkillName: "Speed +2", Description: "Grants Spd+2.", SkillType: "Inheritable Skill", SP: 300, Emblem: "Lyn", BondLevel: 2},
{SkillName: "Speed +3", Description: "Grants Spd+3.", SkillType: "Inheritable Skill", SP: 500, Emblem: "Lyn", BondLevel: 9},
{SkillName: "Speed +4", Description: "Grants Spd+4.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Lyn", BondLevel: 16},
{SkillName: "Speed +5", Description: "Grants Spd+5.", SkillType: "Inheritable Skill", SP: 2000, Emblem: "Lyn", BondLevel: 19},
{SkillName: "Speedtaker", Description: "Grants a stacking Spd+2 each time unit initiates combat and defeats a foe. Bonus lasts for the rest of the battle. (Max +10)", SkillType: "Sync Skill (Can Inherit)", SP: 2000, Emblem: "Lyn", BondLevel: 3},
{SkillName: "Staff Mastery 1", Description: "Grants Hit+10 when using a staff. Staves also heal an additional 3 HP.", SkillType: "Inheritable Skill", SP: 100, Emblem: "Micaiah", BondLevel: 2},
{SkillName: "Staff Mastery 2", Description: "Grants Hit+15 when using a staff. Staves also heal an additional 5 HP.", SkillType: "Inheritable Skill", SP: 300, Emblem: "Micaiah", BondLevel: 8},
{SkillName: "Staff Mastery 3", Description: "Grants Hit+20 when using a staff. Staves also heal an additional 7 HP.", SkillType: "Inheritable Skill", SP: 500, Emblem: "Micaiah", BondLevel: 12},
{SkillName: "Staff Mastery 4", Description: "Grants Hit+25 when using a staff. Staves also heal an additional 10 HP.", SkillType: "Inheritable Skill", SP: 700, Emblem: "Micaiah", BondLevel: 16},
{SkillName: "Staff Mastery 5", Description: "Grants Hit+30 when using a staff. Staves also heal an additional 15 HP.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Micaiah", BondLevel: 17},
{SkillName: "Starsphere", Description: "Grants unit enhanced stat growth when leveling up. [Adds +15% to final growth rates.]", SkillType: "Sync Skill (Can Inherit)", SP: 1500, Emblem: "Tiki(DLC)", BondLevel: 1},
{SkillName: "Str/Def +1", Description: "Grants Str+1 and Def+1.", SkillType: "Inheritable Skill", SP: 700, Emblem: "Hector(DLC)", BondLevel: 2},
{SkillName: "Str/Def +2", Description: "Grants Str+2 and Def+2.", SkillType: "Inheritable Skill", SP: 1600, Emblem: "Hector(DLC)", BondLevel: 7},
{SkillName: "Str/Def +3", Description: "Grants Str+3 and Def+3.", SkillType: "Inheritable Skill", SP: 4200, Emblem: "Hector(DLC)", BondLevel: 12},
{SkillName: "Str/Def +4", Description: "Grants Str+4 and Def+4.", SkillType: "Inheritable Skill", SP: 6000, Emblem: "Hector(DLC)", BondLevel: 14},
{SkillName: "Str/Def +5", Description: "Grants Str+5 and Def+5.", SkillType: "Inheritable Skill", SP: 8400, Emblem: "Hector(DLC)", BondLevel: 18},
{SkillName: "Str/Dex +1", Description: "Grants Str+1 and Dex+1.", SkillType: "Inheritable Skill", SP: 700, Emblem: "Edelgard(DLC)", BondLevel: 3},
{SkillName: "Str/Dex +2", Description: "Grants Str+2 and Dex+2.", SkillType: "Inheritable Skill", SP: 1600, Emblem: "Edelgard(DLC)", BondLevel: 7},
{SkillName: "Str/Dex +3", Description: "Grants Str+3 and Dex+3.", SkillType: "Inheritable Skill", SP: 4200, Emblem: "Edelgard(DLC)", BondLevel: 12},
{SkillName: "Str/Dex +4", Description: "Grants Str+4 and Dex+4.", SkillType: "Inheritable Skill", SP: 6000, Emblem: "Edelgard(DLC)", BondLevel: 16},
{SkillName: "Str/Dex +5", Description: "Grants Str+5 and Dex+5.", SkillType: "Inheritable Skill", SP: 8400, Emblem: "Edelgard(DLC)", BondLevel: 18},
{SkillName: "Strength +1", Description: "Grants Str+1.", SkillType: "Inheritable Skill", SP: 500, Emblem: "Roy", BondLevel: 1},
{SkillName: "Strength +2", Description: "Grants Str+2.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Roy", BondLevel: 2},
{SkillName: "Strength +3", Description: "Grants Str+3.", SkillType: "Inheritable Skill", SP: 3000, Emblem: "Roy", BondLevel: 9},
{SkillName: "Strength +4", Description: "Grants Str+4.", SkillType: "Inheritable Skill", SP: 4000, Emblem: "Roy", BondLevel: 14},
{SkillName: "Strength +5", Description: "Grants Str+5.", SkillType: "Inheritable Skill", SP: 5000, Emblem: "Roy", BondLevel: 17},
{SkillName: "Strength +6", Description: "Grants Str+6.", SkillType: "Inheritable Skill", SP: 6000, Emblem: "Roy", BondLevel: 19},
{SkillName: "Surprise Attack", Description: "If unit initiates combat from terrain that provides an Avo bonus, foe cannot counterattack.", SkillType: "Sync Skill (Can Inherit)", SP: 3000, Emblem: "Chrom(DLC)", BondLevel: 1},
{SkillName: "Sword Agility 1", Description: "Grants Avo+10 at a cost of Crit-10 when using a sword.", SkillType: "Inheritable Skill", SP: 500, Emblem: "Marth", BondLevel: 2},
{SkillName: "Sword Agility 2", Description: "Grants Avo+15 at a cost of Crit-10 when using a sword.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Marth", BondLevel: 6},
{SkillName: "Sword Agility 3", Description: "Grants Avo+20 at a cost of Crit-10 when using a sword.", SkillType: "Inheritable Skill", SP: 2000, Emblem: "Marth", BondLevel: 8},
{SkillName: "Sword Agility 4", Description: "Grants Avo+25 at a cost of Crit-10 when using a sword.", SkillType: "Inheritable Skill", SP: 3000, Emblem: "Marth", BondLevel: 13},
{SkillName: "Sword Agility 5", Description: "Grants Avo+30 at a cost of Crit-10 when using a sword.", SkillType: "Inheritable Skill", SP: 4000, Emblem: "Marth", BondLevel: 17},
{SkillName: "Sword Focus 1", Description: "Grants Hit+10 at a cost of Ddg-10 when using a sword.", SkillType: "Inheritable Skill", SP: 100, Emblem: "Corrin", BondLevel: 4},
{SkillName: "Sword Focus 2", Description: "Grants Hit+15 at a cost of Ddg-10 when using a sword.", SkillType: "Inheritable Skill", SP: 300, Emblem: "Corrin", BondLevel: 7},
{SkillName: "Sword Focus 3", Description: "Grants Hit+20 at a cost of Ddg-10 when using a sword.", SkillType: "Inheritable Skill", SP: 500, Emblem: "Corrin", BondLevel: 12},
{SkillName: "Sword Focus 4", Description: "Grants Hit+25 at a cost of Ddg-10 when using a sword.", SkillType: "Inheritable Skill", SP: 700, Emblem: "Corrin", BondLevel: 14},
{SkillName: "Sword Focus 5", Description: "Grants Hit+30 at a cost of Ddg-10 when using a sword.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Corrin", BondLevel: 17},
{SkillName: "Sword Guard 1", Description: "If foe is equipped with a sword, unit takes 1 less damage during combat.", SkillType: "Inheritable Skill", SP: 200, Emblem: "Chrom(DLC)", BondLevel: 3},
{SkillName: "Sword Guard 2", Description: "If foe is equipped with a sword, unit takes 2 less damage during combat.", SkillType: "Inheritable Skill", SP: 400, Emblem: "Chrom(DLC)", BondLevel: 9},
{SkillName: "Sword Guard 3", Description: "If foe is equipped with a sword, unit takes 3 less damage during combat.", SkillType: "Inheritable Skill", SP: 600, Emblem: "Chrom(DLC)", BondLevel: 13},
{SkillName: "Sword Guard 4", Description: "If foe is equipped with a sword, unit takes 4 less damage during combat.", SkillType: "Inheritable Skill", SP: 800, Emblem: "Chrom(DLC)", BondLevel: 17},
{SkillName: "Sword Guard 5", Description: "If foe is equipped with a sword, unit takes 5 less damage during combat.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Chrom(DLC)", BondLevel: 19},
{SkillName: "Sword Power 1", Description: "Grants Atk+2 at a cost of Avo-10 when using a sword.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Roy", BondLevel: 4},
{SkillName: "Sword Power 2", Description: "Grants Atk+4 at a cost of Avo-10 when using a sword.", SkillType: "Inheritable Skill", SP: 2000, Emblem: "Roy", BondLevel: 7},
{SkillName: "Sword Power 3", Description: "Grants Atk+6 at a cost of Avo-10 when using a sword.", SkillType: "Inheritable Skill", SP: 3000, Emblem: "Roy", BondLevel: 9},
{SkillName: "Sword Power 4", Description: "Grants Atk+8 at a cost of Avo-10 when using a sword.", SkillType: "Inheritable Skill", SP: 4000, Emblem: "Roy", BondLevel: 12},
{SkillName: "Sword Power 5", Description: "Grants Atk+10 at a cost of Avo-10 when using a sword.", SkillType: "Inheritable Skill", SP: 5000, Emblem: "Roy", BondLevel: 16},
{SkillName: "Tome Precision 1", Description: "Grants Hit/Avo+3 when using a tome.", SkillType: "Inheritable Skill", SP: 100, Emblem: "Celica", BondLevel: 4},
{SkillName: "Tome Precision 2", Description: "Grants Hit/Avo+5 when using a tome.", SkillType: "Inheritable Skill", SP: 300, Emblem: "Celica", BondLevel: 7},
{SkillName: "Tome Precision 3", Description: "Grants Hit/Avo+7 when using a tome.", SkillType: "Inheritable Skill", SP: 700, Emblem: "Celica", BondLevel: 9},
{SkillName: "Tome Precision 4", Description: "Grants Hit/Avo+10 when using a tome.", SkillType: "Inheritable Skill", SP: 1000, Emblem: "Celica", BondLevel: 14},
{SkillName: "Tome Precision 5", Description: "Grants Hit/Avo+15 when using a tome.", SkillType: "Inheritable Skill", SP: 2000, Emblem: "Celica", BondLevel: 17},
{SkillName: "Unyielding", Description: "At start of player phase, if HP is 20% or less, restores 20% of unit's max HP.", SkillType: "Sync Skill (Can Inherit)", SP: 100, Emblem: "Marth", BondLevel: 7},
{SkillName: "Unyielding+", Description: "At start of player phase, if HP is 30% or less, restores 30% of unit's max HP.", SkillType: "Sync Skill (Can Inherit)", SP: 200, Emblem: "Marth", BondLevel: 12},
{SkillName: "Unyielding++", Description: "At start of player phase, if HP is 40% or less, restores 40% of unit's max HP.", SkillType: "Sync Skill (Can Inherit)", SP: 300, Emblem: "Marth", BondLevel: 18},
{SkillName: "Vantage", Description: "If unit's HP is 25% or less and foe initiates combat, unit can counter before foe's first attack.", SkillType: "Sync Skill (Can Inherit)", SP: 500, Emblem: "Leif", BondLevel: 3},
{SkillName: "Vantage+", Description: "If unit's HP is 50% or less and foe initiates combat, unit can counter before foe's first attack.", SkillType: "Sync Skill (Can Inherit)", SP: 1000, Emblem: "Leif", BondLevel: 12},
{SkillName: "Vantage++", Description: "If unit's HP is 75% or less and foe initiates combat, unit can counter before foe's first attack.", SkillType: "Sync Skill (Can Inherit)", SP: 2000, Emblem: "Leif", BondLevel: 18},
{SkillName: "Weapon Sync", Description: "If unit initiates combat using same weapon type as the synced Emblem, grants Atk+5. If engaged, grants Atk+5 regardless of weapon type. [See note above.]", SkillType: "Sync Skill (Can Inherit)", SP: 3000, Emblem: "Edelgard(DLC)", BondLevel: 12},
{SkillName: "Weapon Sync+", Description: "If unit initiates combat using same weapon type as the synced Emblem, grants Atk+7. If engaged, grants Atk+7 regardless of weapon type. [See note above.]", SkillType: "Sync Skill (Can Inherit)", SP: 5000, Emblem: "Edelgard(DLC)", BondLevel: 17},
{SkillName: "Wrath", Description: "At start of combat, for each HP the unit has lost, grants Crit+1 during combat. (Max +30)", SkillType: "Sync Skill (Can Inherit)", SP: 2000, Emblem: "Ike", BondLevel: 13}
  ]


const EmblemSkills = [
{Emblem: "Marth", Skills: [ 
  {SkillName: "Perceptive", BondLevel: "1", SkillDescription: "If the unit initiates combat, grants Avo+15 during combat. Avo increases with high Spd. [+1 Avoid for every 4 Speed.]", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Divine Speed", BondLevel: "1", SkillDescription: "Unit performs an extra attack at 50% damage in combat. [Dragon] Unit recovers HP equal to damage dealt by extra attack. [Covert] If extra attack hits, poisons foe. ", Type: "Engage Skill"},
  {SkillName: "Lodestar Rush", BondLevel: "1", SkillDescription: "Use to launch 7 consecutive sword attacks at 30% damage. Adjacent foe only. [Dragon] +2 attacks. [Backup] +1 attack.[Mystical] Damage based on Mag.", Type: "Engage Attack"},
  {SkillName: "Break Defenses", BondLevel: "3", SkillDescription: "If unit's attack breaks foe, unit makes an extra attack at 50% damage.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Unyielding", BondLevel: "7", SkillDescription: "At start of player phase, if HP is 20% or less, restores 20% of unit's max HP.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Unyielding+", BondLevel: "12", SkillDescription: "At start of player phase, if HP is 30% or less, restores 30% of unit's max HP.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Perceptive+", BondLevel: "16", SkillDescription: "If the unit initiates combat, grants Avo+30 during combat. Avo increases with high Spd. [+1 Avoid for every 4 Speed.]", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Unyielding++", BondLevel: "18", SkillDescription: "At start of player phase, if HP is 40% or less, restores 40% of unit's max HP.", Type: "Sync Skill (Can Inherit)"}
]},
  
  {Emblem: "Sigurd", Skills: [ 
  {SkillName: "Canter", BondLevel: "1", SkillDescription: "Unit can move 2 spaces after acting.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Gallop", BondLevel: "1", SkillDescription: "Grants Mov+5.[Dragon] Grants another Mov+1.[Cavalry] Grants another Mov+2.[Covert] Unit does not pay extra movement cost on any terrain.", Type: "Engage Skill"},
  {SkillName: "Override", BondLevel: "1", SkillDescription: "Use to attack and move through a line of adjacent foes. Sword/lance only.[Dragon] +20% damage.[Armored] 10% chance of breaking target.[Mystical] Deals extra damage=25% of Mag.[Qi Adept] 20% chance of breaking target.", Type: "Engage Attack"},
  {SkillName: "Momentum", BondLevel: "3", SkillDescription: "Grants Atk+1 to first attack during combat for each space unit moved before attacking. (Max +10)", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Headlong Rush", BondLevel: "7", SkillDescription: "Grants immunity to freeze.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Canter+", BondLevel: "13", SkillDescription: "Unit can move 3 spaces after acting.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Momentum+", BondLevel: "17", SkillDescription: "Grants Atk+1 to first attack during combat for each space unit moved before attacking.", Type: "Sync Skill (Can Inherit)"}]},
  
  
  {Emblem: "Celica", Skills: [ 
  {SkillName: "Holy Stance", BondLevel: "1", SkillDescription: "If a Corrupted attacks unit, deals 10% of damage taken back to foe.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Echo", BondLevel: "1", SkillDescription: "Use to attack with magic at 50% damage. Use a second time to launch another 50% attack.[Dragon] Range +1.[Mystical] +10% damage.", Type: "Engage Skill"},
  {SkillName: "Warp Ragnarok", BondLevel: "1", SkillDescription: "Use to warp up to 10 spaces and make a powerful magic attack.[Dragon] Attack range +1.[Cavalry] Warp distance +2.[Flying] Warp distance +5.[Mystical] +20% damage.", Type: "Engage Attack"},
  {SkillName: "Resonance", BondLevel: "3", SkillDescription: "When equipped with a tome, if unit's HP is 2 or more, unit loses 1 HP at start of combat and deals +2 damage during combat.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Favorite Food", BondLevel: "8", SkillDescription: "When unit eats a packed lunch, its engage meter is maxed out.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Holy Stance+", BondLevel: "12", SkillDescription: "If a Corrupted attacks unit, deals 30% of damage taken back to foe.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Resonance+", BondLevel: "16", SkillDescription: "When equipped with a tome, if unit's HP is 2 or more, unit loses 1 HP at start of combat and deals +3 damage during combat.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Holy Stance++", BondLevel: "18", SkillDescription: "If a Corrupted attacks unit, deals 50% of damage taken back to foe.", Type: "Sync Skill (Can Inherit)"}]},
  
  {Emblem: "Micaiah", Skills: [ 
  {SkillName: "Cleric", BondLevel: "1", SkillDescription: "Unit can equip staves up to level C.", Type: "Sync Skill (Cannot Inherit)"},
  {SkillName: "Augment", BondLevel: "1", SkillDescription: "Grants staff range +5 and area of effect +1.[Dragon] Additional staff range +1.[Qi Adept] +20% to HP healed by staves.", Type: "Engage Skill"},
  {SkillName: "Great Sacrifice", BondLevel: "1", SkillDescription: "Use to restore full HP to all allies, even those not under the player's control. After use, unit's HP=1.[Dragon] Unit's HP=30% current.[Armored] Grants Def+1 to all healed during their next combat.[Qi Adept] Also cures status.", Type: "Engage Attack"},
  {SkillName: "Healing Light", BondLevel: "3", SkillDescription: "When unit heals an ally with a staff, unit also recovers HP=50% of the amount healed.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Silence Ward", BondLevel: "7", SkillDescription: "Grants immunity to silence.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Cleric+", BondLevel: "13", SkillDescription: "Unit can equip staves up to level B.", Type: "Sync Skill (Cannot Inherit)"},
  {SkillName: "Cleric++", BondLevel: "18", SkillDescription: "Unit can equip staves up to level A.", Type: "Sync Skill (Cannot Inherit)"}]},
  
  {Emblem: "Roy", Skills: [ 
  {SkillName: "Hold Out", BondLevel: "1", SkillDescription: "If unit had 30% HP or more at start of combat, unit always survives combat with at least 1 HP.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Rise Above", BondLevel: "1", SkillDescription: "Grants Lvl+5.[Dragon] Additional Lvl+1.[Cavalry] Mov+1.[Armored] Max HP+5.", Type: "Engage Skill"},
  {SkillName: "Blazing Lion", BondLevel: "1", SkillDescription: "Use to attack adjacent foe and an area 3 spaces wide. Target area and the 2 rows beyond it are set on fire. Sword only.[Dragon] Expands attack area.[Mystical] Expands flame area.", Type: "Engage Attack"},
  {SkillName: "Advance", BondLevel: "3", SkillDescription: "Use to move 1 space toward a foe that is 2 spaces away and attack.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Hold Out+", BondLevel: "8", SkillDescription: "If unit had 20% HP or more at start of combat, unit always survives combat with at least 1 HP.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Hold Out++", BondLevel: "13", SkillDescription: "If unit had 10% HP or more at start of combat, unit always survives combat with at least 1 HP.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Hold Out+++", BondLevel: "18", SkillDescription: "If unit had 2 HP or more at start of combat, unit always survives combat with at least 1 HP.", Type: "Sync Skill (Can Inherit)"}]},
  
  {Emblem: "Leif", Skills: [ 
  {SkillName: "Arms Shield", BondLevel: "1", SkillDescription: "When unit has weapon advantage, unit takes 3 less damage.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Adaptable", BondLevel: "1", SkillDescription: "If foe initiates combat, unit counters with the best weapon available (in terms of range, weapon advantage, effective bonus, etc.).[Dragon] Hit+30 during combat.[Backup] Crit+10 during combat.[Covert] Avo+20 during combat.[Armored] Def+5 during combat.[Flying] Res+5 during combat.", Type: "Engage Skill"},
  {SkillName: "Quadruple Hit", BondLevel: "1", SkillDescription: "Use to attack once each with sword, lance, axe, and bow.[Dragon] +20% damage.[Covert] Foes may drop 1,000G. Trigger %=Lck.[Qi Adept] Breaks foe.", Type: "Engage Attack"},
  {SkillName: "Vantage", BondLevel: "3", SkillDescription: "If unit's HP is 25% or less and foe initiates combat, unit can counter before foe's first attack.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Arms Shield+", BondLevel: "7", SkillDescription: "When unit has weapon advantage, unit takes 5 less damage.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Vantage+", BondLevel: "12", SkillDescription: "If unit's HP is 50% or less and foe initiates combat, unit can counter before foe's first attack.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Arms Shield++", BondLevel: "16", SkillDescription: "When unit has weapon advantage, unit takes 7 less damage.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Vantage++", BondLevel: "18", SkillDescription: "If unit's HP is 75% or less and foe initiates combat, unit can counter before foe's first attack.", Type: "Sync Skill (Can Inherit)"}]},
  
  {Emblem: "Lucina", Skills: [ 
  {SkillName: "Dual Strike", BondLevel: "1", SkillDescription: "Unit participates in chain attacks as if it were a backup unit.", Type: "Sync Skill (Cannot Inherit)"},
  {SkillName: "Bonded Shield", BondLevel: "1", SkillDescription: "Use to prevent first attacks on adjacent allies until your next turn. Trigger %=80.[Dragon] +10% to trigger rate.[Cavalry] Trigger %=100 for cavalry allies.[Armored] Trigger %=100 for armored allies.[Flying] Trigger %=100 for flying allies.[Qi Adept] Trigger %=100.", Type: "Engage Skill"},
  {SkillName: "All For One", BondLevel: "1", SkillDescription: "Use to make a sword attack against an adjacent foe. All allies within 2 spaces chain attack.[Dragon] Ally chain attacks are guaranteed to hit.[Backup] Range +1.", Type: "Engage Attack"},
  {SkillName: "Dual Assist", BondLevel: "3", SkillDescription: "If unit is able to chain attack, unit will do so when allies attack foes unit could reach by moving. Trigger %=35.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Dual Support", BondLevel: "13", SkillDescription: "Grants a bonus to Avo that increases with unit's support level with adjacent allies. (Max +90) [+5 Avoid for each support level. None = 1, C = 2, B = 3, A = 4, S = 6.]", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Dual Assist+", BondLevel: "18", SkillDescription: "If unit is able to chain attack, unit will do so when allies attack foes unit could reach by moving. Trigger %=70.", Type: "Sync Skill (Can Inherit)"}]},
  
  {Emblem: "Lyn", Skills: [ 
  {SkillName: "Alacrity", BondLevel: "1", SkillDescription: "If unit initiates combat with a Spd advantage of 9 or more, unit's follow-up (if possible) occurs before foe can counterattack.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Call Doubles", BondLevel: "1", SkillDescription: "Creates four illusory doubles that can make chain attacks with unit.[Dragon] +1 double created.[Flying] Doubles have +10 Avo", Type: "Engage Skill"},
  {SkillName: "Astra Storm", BondLevel: "1", SkillDescription: "Use to launch 5 bow attacks at 30% damage, up to range 10.[Dragon] Range +5.[Covert] Range +10.[Qi Adept] Breaks the target.", Type: "Engage Attack"},
  {SkillName: "Speedtaker", BondLevel: "3", SkillDescription: "Grants a stacking Spd+2 each time unit initiates combat and defeats a foe. Bonus lasts for the rest of the battle. (Max +10)", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Alacrity+", BondLevel: "13", SkillDescription: "If unit initiates combat with a Spd advantage of 7 or more, unit's follow-up (if possible) occurs before foe can counterattack.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Alacrity++", BondLevel: "18", SkillDescription: "If unit initiates combat with a Spd advantage of 5 or more, unit's follow-up (if possible) occurs before foe can counterattack.", Type: "Sync Skill (Can Inherit)"}]},
  
  {Emblem: "Ike", Skills: [ 
  {SkillName: "Demolish", BondLevel: "1", SkillDescription: "Break destructible terrain in a single blow when using Destroy.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Resolve", BondLevel: "1", SkillDescription: "If unit's HP is 75% or less after combat, grants Def/Res+5 as long as unit's HP stays below 75%.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Laguz Friend", BondLevel: "1", SkillDescription: "Unit takes 50% less damage, but sets unit's Avo to 0.[Dragon] Extra -10% to damage.", Type: "Engage Skill"},
  {SkillName: "Great Aether", BondLevel: "1", SkillDescription: "Use to grant Def/Res+5, but unit can't counter for 1 turn. Next turn, attack a 2-space area, heal HP=30% of damage dealt. Sword/axe only.[Dragon] +1 damage per hit taken.[Armored] Grants an extra Def+5.[Flying] Grants an extra Res+5.", Type: "Engage Attack"},
  {SkillName: "Reposition", BondLevel: "3", SkillDescription: "Use to move an adjacent ally to the opposite side of unit.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Wrath", BondLevel: "13", SkillDescription: "At start of combat, for each HP the unit has lost, grants Crit+1 during combat. (Max +30)", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Resolve+", BondLevel: "18", SkillDescription: "If unit's HP is 75% or less after combat, grants Def/Res+7 as long as unit's HP stays below 75%.", Type: "Sync Skill (Can Inherit)"}]},
  
  {Emblem: "Byleth", Skills: [ 
  {SkillName: "Divine Pulse", BondLevel: "1", SkillDescription: "May turn a missed attack into a hit. Trigger %=30. Chance increases with high Lck. [+1% for every 1 Luck.]", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Instruct", BondLevel: "1", SkillDescription: "Use to grant allies within 2 spaces a stat bonus based on user's type. Bonus lasts for 1 turn.[Dragon] All seven basic stats +3.[Backup] Str+4.[Cavalry] Dex+10.[Covert] Spd+5.[Armored] Def+5.[Flying] Res+5.[Mystical] Mag+4.[Qi Adept] Lck+10.", Type: "Engage Skill"},
  {SkillName: "Goddess Dance", BondLevel: "1", SkillDescription: "Use to grant another action to all adjacent allies.[Dragon] Grants +3 to all targets' basic stats for 1 turn.[Backup] Grants Str+4 to targets for 1 turn.[Cavalry] Grants Dex+10 to targets for 1 turn.[Covert] Grants Spd+5 to targets for 1 turn.[Armored] Grants Def+5 to targets for 1 turn.[Flying] Grants Res+5 to targets for 1 turn.[Mystical] Grants Mag+4 to targets for 1 turn.[Qi Adept] Grants Lck+10 to targets for 1 turn.", Type: "Engage Attack"},
  {SkillName: "Mentorship", BondLevel: "3", SkillDescription: "Grants 1.2× EXP modifier to unit and adjacent allies.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Lost & Found", BondLevel: "13", SkillDescription: "If unit finishes an action or waits next to an ally, may find an item and increase support with that ally. Trigger %=Lck.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Divine Pulse+", BondLevel: "18", SkillDescription: "May turn a missed attack into a hit. Trigger %=50. Chance increases with high Lck. [+1% for every 1 Luck.]", Type: "Sync Skill (Can Inherit)"}]},
  
  {Emblem: "Corrin", Skills: [ 
  {SkillName: "Dragon Vein", BondLevel: "1", SkillDescription: "Use to add a special effect to certain spaces.[Dragon] Choose any Vein effect.[Backup] Creates stone pillars that increase Def/Res.[Cavalry] Creates water that decreases Avo.[Covert] Creates fog that increases Avo.[Armored] Creates vines that grant immunity to break.[Flying] Creates healing glow that restores HP.[Mystical] Creates flames that inflict damage.[Qi Adept] Creates ice pillars that hinder movement.", Type: "Sync Skill (Cannot Inherit)"},
  {SkillName: "Dreadful Aura", BondLevel: "1", SkillDescription: "If unit initiates combat, target foe and all foes within 1 space of it cannot move for 1 turn after combat.[Covert] Also Avo-20 on target.", Type: "Engage Skill"},
  {SkillName: "Torrential Roar", BondLevel: "1", SkillDescription: "Use to attack 3 spaces in a line, turning those spaces into water terrain.", Type: "Engage Attack"},
  {SkillName: "", BondLevel: "", SkillDescription: "[Dragon] Range +1.", Type: ""},
  {SkillName: "Quality Time", BondLevel: "3", SkillDescription: "After unit acts or waits, restores 5 HP to adjacent allies and slightly increases support with them.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Draconic Hex", BondLevel: "8", SkillDescription: "If unit initiates combat, inflicts -4 to all of foe's basic stats after combat. (Penalties shrink by 1 each turn.)", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Pair Up", BondLevel: "13", SkillDescription: "Prevents damage from foes' chain attacks against unit.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Quality Time+", BondLevel: "18", SkillDescription: "After unit acts or waits, restores 10 HP to adjacent allies and slightly increases support with them.", Type: "Sync Skill (Can Inherit)"}]},
  
  {Emblem: "Eirika", Skills: [ 
  {SkillName: "Lunar Brace", BondLevel: "1", SkillDescription: "If unit initiates combat with a physical attack, deals extra damage=20% of foe's Def.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Solar Brace", BondLevel: "1", SkillDescription: "If unit initiates combat, unit recovers HP=30% of damage dealt.", Type: "Sync Skill (Ephraim)"},
  {SkillName: "Eclipse Brace", BondLevel: "1", SkillDescription: "If unit initiates combat, unit deals extra damage=20% of foe's Def with physical attacks and recovers HP=30% of damage dealt.", Type: "Sync Skill (Engaged)"},
  {SkillName: "Night and Day", BondLevel: "1", SkillDescription: "Use to switch Emblems and swap between Lunar Brace/Gentility and Solar Brace/Bravery for all allies.", Type: "Sync Skill (Cannot Inherit)"},
  {SkillName: "Sacred Twins", BondLevel: "1", SkillDescription: "While engaged with Eirika, changes Lunar Brace to Eclipse Brace and Gentility to Blue Skies for all allies.", Type: "Engage Skill"},
  {SkillName: "Twin Strike", BondLevel: "1", SkillDescription: "Use to make a sword attack followed by a lance attack from Ephraim on adjacent foe. Effective: Corrupted.[Dragon] +20% damage.[Cavalry] Ephraim deals +50% damage.", Type: "Engage Attack"},
  {SkillName: "Gentility", BondLevel: "3", SkillDescription: "Unit takes 3 less damage.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Bravery", BondLevel: "3", SkillDescription: "Unit deals +3 damage.", Type: "Sync Skill (Ephraim)"},
  {SkillName: "Blue Skies", BondLevel: "3", SkillDescription: "Unit takes 3 less damage and deals +3 damage.", Type: "Sync Skill (Engaged)"},
  {SkillName: "Lunar Brace+", BondLevel: "13", SkillDescription: "If unit initiates combat with a physical attack, deals extra damage=30% of foe's Def.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Solar Brace+", BondLevel: "13", SkillDescription: "If unit initiates combat, unit recovers HP=50% of damage dealt.", Type: "Sync Skill (Ephraim)"},
  {SkillName: "Eclipse Brace+", BondLevel: "13", SkillDescription: "If unit initiates combat, unit deals extra damage=30% of foe's Def with physical attacks and recovers HP=50% of damage dealt.", Type: "Sync Skill (Engaged)"},
  {SkillName: "Gentility+", BondLevel: "18", SkillDescription: "Unit takes 5 less damage.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Bravery+", BondLevel: "18", SkillDescription: "Unit deals +5 damage.", Type: "Sync Skill (Ephraim)"},
  {SkillName: "Blue Skies+", BondLevel: "18", SkillDescription: "Unit takes 5 less damage and deals +5 damage.", Type: "Sync Skill (Engaged)"}]},
  
  {Emblem: "Fire Emblem", Skills: [ 
  {SkillName: "Holy Aura", BondLevel: "1", SkillDescription: "Unit is Effective: Fell Dragon. Allies within 2 spaces with Effective: Dragon gain Effective: Fell Dragon. [Might multiplier of 2.]", Type: "Sync Skill (Cannot Inherit)"},
  {SkillName: "Attuned", BondLevel: "1", SkillDescription: "If unit initiates combat and defeats foe, grants engage partner +4 to all seven basic stats while engaged.[Dragon] Extra +1 to all stats.[Backup] Extra +2 to Str.[Cavalry] Extra +2 to Dex.[Covert] Extra +2 to Spd.[Armored] Extra +2 to Def.[Flying] Extra +2 to Res.[Mystical] Extra +2 to Mag.[Qi Adept] Extra +2 to Lck.", Type: "Engage Skill"},
  {SkillName: "Dragon Blast", BondLevel: "1", SkillDescription: "Use to make two attacks against an adjacent foe with a sword and powerful magic beam.[Dragon] +20% damage.[Backup] Adds 20% of Str to sword attack.[Mystical] Adds 20% of Mag to beam attack.[Qi Adept] Breaks foe.", Type: "Engage Attack"},
  {SkillName: "Bond Blast", BondLevel: "1", SkillDescription: "Use to make a sword attack from the unit and engage partner followed by a magic beam attack against an adjacent foe.[Dragon] +20% damage.[Backup] +20% of Str to sword.[Mystical] +20% of Mag to beam.[Qi Adept] Breaks foe.", Type: "Engage Attack (Emblem Alear is adjacent to Engage partner or vice versa)"},
  {SkillName: "Bond Forger", BondLevel: "5", SkillDescription: "Grants Hit/Avo+20 to unit and allies within 2 spaces that are synced or engaged with an Emblem.", Type: "Sync Skill (Cannot Inherit)"},
  {SkillName: "Bond Forger+", BondLevel: "20", SkillDescription: "Grants Hit/Avo+30 to unit and allies within 2 spaces that are synced or engaged with an Emblem.", Type: "Sync Skill (Cannot Inherit)"},
  {SkillName: "Holy Shield", BondLevel: "20", SkillDescription: "Neutralizes Effective against this unit.", Type: "Sync Skill (Cannot Inherit)"},
  {SkillName: "Boon of Elyos", BondLevel: "21", SkillDescription: "If unit initiates combat, grants bonus to Crit and Ddg equal to 2x the number of allies who have acted this turn.", Type: "Sync Skill (Cannot Inherit)"}]},
  
  {Emblem: "Edelgard(DLC)", Skills: [ 
  {SkillName: "Gambit", BondLevel: "1", SkillDescription: "Effects change based on synced Emblem.", Type: "Sync Skill (Cannot Inherit)"},
  {SkillName: "Flame Gambit", BondLevel: "1", SkillDescription: "Use when synced with Edelgard to attack a foe, then set the target foe's space and nearby spaces on fire.", Type: "Command Skill"},
  {SkillName: "Shield Gambit", BondLevel: "1", SkillDescription: "Use when synced with Dimitri to negate damage from first attacks of ranged foes targeting unit in next enemy phase.", Type: "Command Skill"},
  {SkillName: "Poison Gambit", BondLevel: "1", SkillDescription: "Use when synced with Claude to attack a foe, then poison target and all foes adjacent to it after combat.", Type: "Command Skill"},
  {SkillName: "Friendly Rivalry", BondLevel: "1", SkillDescription: "At start of player phase, the Emblem will randomly switch to Edelgard, Dimitri, or Claude.", Type: "Sync Skill (Cannot Inherit)"},
  {SkillName: "Combat Arts", BondLevel: "1", SkillDescription: "Enables use of Edelgard, Dimitri, or Claude's Combat Art. Spends some remaining engage turns.[Dragon] +10% damage.[Covert] Avo+20.", Type: "Engage Skill"},
  {SkillName: "Raging Storm", BondLevel: "1", SkillDescription: "After combat, take another action. (Spend 3 turns.)", Type: "Command Skill"},
  {SkillName: "Atrocity", BondLevel: "1", SkillDescription: "Attack at double weapon's Mt. (Spend 1 turn.)", Type: "Command Skill"},
  {SkillName: "Fallen Star", BondLevel: "1", SkillDescription: "Avoid foe's attacks during next combat. (Spend 1 turn.)", Type: "Command Skill"},
  {SkillName: "Houses Unite", BondLevel: "1", SkillDescription: "Use to attack with Aymr, Areadbhar, and Failnaught at 50% damage.[Dragon] +10% damage.[Cavalry] +10% damage with Areadbhar.[Covert] +10% damage with Failnaught.[Armored] +10% damage with Aymr.[Qi Adept] Breaks foe.", Type: "Engage Attack"},
  {SkillName: "Houses Unite+", BondLevel: "1", SkillDescription: "Use to attack with Aymr, Areadbhar, and Failnaught at 50% damage. After combat, take another action.[Dragon] +10% damage.[Cavalry] +10% damage with Areadbhar.[Covert] +10% damage with Failnaught.[Armored] +10% damage with Aymr.[Qi Adept] Breaks foe.", Type: "Engage Attack (Requires adjacent Byleth)"},
  {SkillName: "Lineage", BondLevel: "3", SkillDescription: "Increases unit's earned experience by 20%.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Weapon Sync", BondLevel: "12", SkillDescription: "If unit initiates combat using same weapon type as the synced Emblem, grants Atk+5. If engaged, grants Atk+5 regardless of weapon type. [See note above.]", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Weapon Sync+", BondLevel: "17", SkillDescription: "If unit initiates combat using same weapon type as the synced Emblem, grants Atk+7. If engaged, grants Atk+7 regardless of weapon type. [See note above.]", Type: "Sync Skill (Can Inherit)"}]},
  
  {Emblem: "Tiki(DLC)", Skills: [ 
  {SkillName: "Starsphere", BondLevel: "1", SkillDescription: "Grants unit enhanced stat growth when leveling up. [Adds +15% to final growth rates.]", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Draconic Form", BondLevel: "1", SkillDescription: "Unit transforms into and fights as a dragon while engaged. Grants +10 to max HP and +5 to Bld and all basic stats.[Armored] Negates terrain damage.[Mystical] Grants an extra Res+5.", Type: "Engage Skill"},
  {SkillName: "Divine Blessing", BondLevel: "1", SkillDescription: "Use to grant 1 ally a Revival Stone.[Dragon] Restore 20 HP to ally.[Qi Adept] Heal their status effects.", Type: "Engage Attack"},
  {SkillName: "Divine Blessing+", BondLevel: "1", SkillDescription: "Use to grant 1 ally a Revival Stone. If ally is not synced, fully restore HP. If ally is synced, +3 to engage meter. If ally is engaged, restore engage turns.[Dragon] Restore 20 HP to ally.[Qi Adept] Heal their status effects.", Type: "Engage Attack (Requires adjacent Marth)"},
  {SkillName: "Geosphere", BondLevel: "3", SkillDescription: "At start of player phase, if there are allies adjacent to unit, grants Def/Res+3 to unit and those allies for 1 turn.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Lifesphere", BondLevel: "8", SkillDescription: "If unit uses Wait without attacking or using items, restores 20 HP and heals status effects.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Lightsphere", BondLevel: "10", SkillDescription: "If unit initiates combat, halves chance of receiving critical hit from foe.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Lifesphere+", BondLevel: "14", SkillDescription: "If unit uses Wait without attacking or using items, restores 30 HP and heals status effects.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Geosphere+", BondLevel: "16", SkillDescription: "At start of player phase, if there are allies adjacent to unit, grants Def/Res+5 to unit and those allies for 1 turn.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Lifesphere++", BondLevel: "19", SkillDescription: "If unit uses Wait without attacking or using items, restores 40 HP and heals status effects.", Type: "Sync Skill (Can Inherit)"}]},
  
  {Emblem: "Hector(DLC)", Skills: [ 
  {SkillName: "Quick Riposte", BondLevel: "1", SkillDescription: "If unit's HP is 80% or more and foe initiates combat, unit will always follow up (if weapon allows).", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Impenetrable", BondLevel: "1", SkillDescription: "If foe initiates combat, grants Def/Res+30% during combat.[Dragon] Ddg+50%.[Cavalry] Grants immunity to freeze.[Armored] Grants Def+50% instead of +30%.[Flying] Grants Res+50% instead of +30%.[Dragon] Ddg+50%.[Cavalry] Grants immunity to freeze.[Armored] Grants Def+50% instead of +30%.[Flying] Grants Res+50% instead of +30%.", Type: "Engage Skill"},
  {SkillName: "Storm's Eye", BondLevel: "1", SkillDescription: "Grants immunity to break. Foe cannot follow up. Unit follows up. Lasts 1 turn. Sword/axe only.[Dragon] Prevent one critical hit.[Backup] Crit+20.[Covert] Avo+30.", Type: "Engage Attack"},
  {SkillName: "Storm's Eye+", BondLevel: "1", SkillDescription: "Grants immunity to break. Foe cannot follow up. Unit counters before foe's first attack and follows up. Lasts 1 turn. Sword/axe only.[Dragon] Prevent one critical hit.[Backup] Crit+20.[Covert] Avo+30.", Type: "Engage Attack (Requires adjacent Lyn)"},
  {SkillName: "Adaptability", BondLevel: "3", SkillDescription: "When hit by a foe's attack, grants Def+2 for a physical attack or Res+2 for a magical attack after combat. Lasts until end of battle, or until activated again.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Heavy Attack", BondLevel: "8", SkillDescription: "When making a physical attack, if an equipped weapon's Wt exceeds unit's Bld, adds excess as damage. (Max +5)", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Piercing Glare", BondLevel: "12", SkillDescription: "Use when HP is full to consume 20% of max HP and prevent foes from entering the 4 spaces diagonally adjacent to unit for 1 turn.", Type: "Sync Skill (Cannot Inherit)"},
  {SkillName: "Quick Riposte+", BondLevel: "16", SkillDescription: "If unit's HP is 60% or more and foe initiates combat, unit will always follow up (if weapon allows).", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Adaptability+", BondLevel: "19", SkillDescription: "When hit by a foe's attack, grants Def+3 for a physical attack or Res+3 for a magical attack after combat. Lasts until end of battle, or until activated again.", Type: "Sync Skill (Can Inherit)"}]},
  
  {Emblem: "Veronica(DLC)", Skills: [ 
  {SkillName: "Reprisal", BondLevel: "1", SkillDescription: "If unit's HP is not full, adds 30% of lost HP to Atk.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Contract", BondLevel: "1", SkillDescription: "Use to grant another action to an adjacent ally who has already acted. (Ally cannot move.)[Dragon] Grants Str/Mag/Def/Res+2 to ally during action.[Backup] Unit participates in chain attack during ally action.[Covert] Grants Hit/Avo+30 to ally during action.", Type: "Engage Skill"},
  {SkillName: "Summon Hero", BondLevel: "1", SkillDescription: "Use to summon a random unit.[Dragon] Summons a powerful unit. [Removes 3-stars from pool. The 3-star rate is added to 4-star rate.][Backup] Summoned unit has the “Dual Strike” skill.[Cavalry] Summoned unit gets Mov+1.", Type: "Engage Attack"},
  {SkillName: "Book of Worlds", BondLevel: "3", SkillDescription: "Book of Worlds advances 1 stage (to max 5) for each consecutive round that unit uses Wait. Reverts to base stage if unit triggers the effect.[Book I: Seal] If unit initiates combat, freezes foe after combat.[Book II: Flame] If unit initiates combat, freezes foe and sets foe's space on fire after combat.[Book III: Death] If unit initiates combat, deals 10 damage, freezes foe, and sets foe's space on fire after combat.[Book IV: Dream] If unit initiates combat, restores HP equal to damage dealt during combat, then deals 10 damage, freezes foe, and sets foe's space on fire after combat.[Book V: Science] If unit initiates combat, restores HP to self and adjacent allies equal to damage dealt during combat, then deals 10 damage, freezes foe, and sets foe's space on fire after combat.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Level Boost", BondLevel: "8", SkillDescription: "When unit defeats a foe of a higher level, grants Lvl+1 until the end of battle. (Max +3)", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "SP Conversion", BondLevel: "13", SkillDescription: "Grants +20 SP for each defeated foe. Triggers even without a ring or bracelet equipped.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Reprisal+", BondLevel: "18", SkillDescription: "If unit's HP is not full, adds 50% of lost HP to Atk.", Type: "Sync Skill (Can Inherit)"}]},
  
  {Emblem: "Soren(DLC)", Skills: [ 
  {SkillName: "Assign Decoy", BondLevel: "1", SkillDescription: "Use to make one chosen ally more likely to be targeted by enemies for 1 turn. Effect is removed after ally is targeted by or otherwise damaged by foes 3 times.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Flare", BondLevel: "1", SkillDescription: "When attacking with tomes, inflicts Res-20% on foe, and unit recovers 50% of damage dealt.[Dragon] Critical rate is doubled.[Mystical] Extra -10% to foe's Res.[Qi Adept] Unit recovers 100% of damage dealt instead.", Type: "Engage Skill"},
  {SkillName: "Cataclysm", BondLevel: "1", SkillDescription: "Use to attack foes in an area with fire, thunder and wind magic at 40% damage. Wind is effective: Flying.[Dragon] Sets terrain on fire.[Mystical] +10% damage.[Qi Adept] 20% chance of breaking target.", Type: "Engage Attack"},
  {SkillName: "Cataclysm+", BondLevel: "1", SkillDescription: "Use to attack foes in an area with fire, thunder and wind magic at 40% damage. Wind is effective: Flying.[Dragon] Sets terrain on fire.[Mystical] +10% damage.[Qi Adept] 20% chance of breaking target.", Type: "Engage Attack (Requires adjacent Ike)"},
  {SkillName: "Anima Focus", BondLevel: "4", SkillDescription: "When using tomes, unit inflicts Def-3 with fire, Hit-20 with thunder, or Mov-2 with wind magic for 1 turn.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Keen Insight", BondLevel: "9", SkillDescription: "When unit deals Effective damage, deal +5 damage.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Block Recovery", BondLevel: "13", SkillDescription: "When attacking a broken foe with a tome, grants a chance the foe will remain broken. Chance increases with high Spd. [Trigger% = (Spd – foe's Spd) x 5, max 50]", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Keen Insight+", BondLevel: "18", SkillDescription: "When unit deals Effective damage, deal +7 damage.", Type: "Sync Skill (Can Inherit)"}]},
  
  {Emblem: "Camilla(DLC)", Skills: [ 
  {SkillName: "Dragon Vein", BondLevel: "1", SkillDescription: "Use to add a special effect to certain spaces.[Dragon] Choose any Vein effect.[Backup] Creates stone pillars that increase Def/Res.[Cavalry] Creates water that decreases Avo.[Covert] Creates smoke that decreases Def/Avo.[Armored] Creates vines that grant immunity to break.[Flying] Creates healing glow that restores HP.[Mystical] Creates flames that inflict damage.[Qi Adept] Creates ice floor that increases movement.", Type: "Sync Skill (Cannot Inherit)"},
  {SkillName: "Soar", BondLevel: "1", SkillDescription: "Grants Mov+2. Unit can cross terrain as if flying.[Dragon] If unit initiates combat, deals damage to foes within 2 spaces equal to 10% of their max HP after combat.[Cavalry] Grants an extra Mov+2.[Flying] Grants an extra Mov+1.", Type: "Engage Skill"},
  {SkillName: "Dark Inferno", BondLevel: "1", SkillDescription: "Use to deal damage to foes on certain spaces near unit and set those spaces on fire.[Dragon] Increases area of effect.[Mystical] +20% damage.[Qi Adept] Adds Glow to adjacent spaces.", Type: "Engage Attack"},
  {SkillName: "Dark Inferno+", BondLevel: "1", SkillDescription: "Use to deal damage to foes on certain spaces near unit and set those spaces on fire.[Dragon] Increases area of effect.[Mystical] +20% damage.[Qi Adept] Adds Glow to adjacent spaces.", Type: "Engage Attack (Requires adjacent Corrin)"},
  {SkillName: "Decisive Strike", BondLevel: "4", SkillDescription: "If unit initiates combat and lands a critical, deals 5 damage to foe after combat.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Detoxify", BondLevel: "8", SkillDescription: "Cures poison at start of turn.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Groundswell", BondLevel: "12", SkillDescription: "After unit acts or waits in flames, miasma, or similar terrain effect, unit clears effect and recovers 10 HP.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Decisive Strike+", BondLevel: "18", SkillDescription: "If unit initiates combat and lands a critical, deals 10 damage to foe after combat.", Type: "Sync Skill (Can Inherit)"}]},
  
  {Emblem: "Chrom(DLC)", Skills: [ 
  {SkillName: "Surprise Attack", BondLevel: "1", SkillDescription: "If unit initiates combat from terrain that provides an Avo bonus, foe cannot counterattack.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Other Half", BondLevel: "1", SkillDescription: "If unit initiates combat, Robin chain attacks. Grants Mag+10 while engaged.[Dragon] Robin chain attacks 2 times.[Backup] Guaranteed hit with chain attack.[Covert] Grants Mov+1 while engaged.", Type: "Engage Skill"},
  {SkillName: "Giga Levin Sword", BondLevel: "1", SkillDescription: "Use to attack with a magic sword. Magic attack that uses physical attack power. Swords only.[Dragon] Deals extra damage = half of Str.[Flying] Deals extra damage = Bld.[Mystical] Deals extra damage = half of Mag.", Type: "Engage Attack"},
  {SkillName: "Giga Levin Sword+", BondLevel: "1", SkillDescription: "Use to attack with a magic sword. Magic attack that uses physical attack power. Swords only. Adjacent allies chain attack.[Dragon] Deals extra damage = half of Str.[Flying] Deals extra damage = Bld.[Mystical] Deals extra damage = half of Mag.", Type: "Engage Attack (requires adjacent Lucina)"},
  {SkillName: "Rally Spectrum", BondLevel: "4", SkillDescription: "Use to grant adjacent allies +3 to all seven basic stats for 1 turn.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Brute Force", BondLevel: "8", SkillDescription: "While making a physical attack, critical hits deal increased damage. [Damage increased by one third.]", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Charm", BondLevel: "13", SkillDescription: "If unit's attack triggers a chain attack, increases chain attack accuracy to 90%.", Type: "Sync Skill (Can Inherit)"},
  {SkillName: "Rally Spectrum+", BondLevel: "18", SkillDescription: "Use to grant allies within 2 spaces +3 to all seven basic stats for 1 turn.", Type: "Sync Skill (Can Inherit)"}]},
  
]

      




// DOM elements
const characterSelect = document.getElementById("characterSelect");
const tableBody = document.getElementById("tableBody");
let intExpertise = 1;
let intNumExtraColumns = 2;

let prevClassDDValue = "";
let clickCount = 0;
//const chkStar = document.getElementById('cbStar');

//Used to hold a copy of the table values
//let tableValues = [];

//Used to set starsphere
//let star = 0.00;

// window.addEventListener('load', function() {
  
  // if (chkStar.checked) {
  //   star = 0.15;
  // } else {
  //   star = 0.00;
  // }
//});

// Hide the div with id "classLinkDiv"
// document.getElementById("classLinkDiv").classList.add("hidden");
// document.getElementById("enchanterClassLinkDiv").classList.add("hidden");
// document.getElementById("CannoneerClassLinkDiv").classList.add("hidden");


//Get the index of the 'Mov' header
var mainTable = document.getElementById('tableStats');
var headers = mainTable.getElementsByTagName('th');
var movIndex = -1;

for (var i = 0; i < headers.length; i++) {
  if (headers[i].textContent === 'Mov') {
    movIndex = i;
    break;
  }
}

// Populate character dropdown list
characters.forEach((character) => {
  const option = document.createElement("option");
  option.text = character.name;
  characterSelect.add(option);
});

// // Get the select element
const skill1SelectElement = document.getElementById('skill1Select');
const skill2SelectElement = document.getElementById('skill2Select');
//const skill1DescriptionPreviewElement = document.getElementById('skill1DescriptionPreview');
//const skill2DescriptionPreviewElement = document.getElementById('skill2DescriptionPreview');
// const skill1DescriptionFullElement = document.getElementById('skill1DescriptionFull');
// const skill2DescriptionFullElement = document.getElementById('skill2DescriptionFull');
let skill1DescriptionElement = document.getElementById('skill1Description');
let skill2DescriptionElement = document.getElementById('skill2Description');

// const skill1ExpandButton = document.getElementById('skill1ExpandButton');
// const skill2ExpandButton = document.getElementById('skill2ExpandButton');

// // Initialize the state variables for each description
// let isSkill1Expanded = false;
// let isSkill2Expanded = false;


// // Iterate over classSkills and create option elements
 inheritSkills.forEach(skill => {
//   // Create a new option element
   const optionElement = document.createElement('option');
   const optionElement2 = document.createElement('option');
  
//   // Set the value and text content of the option element
  optionElement.value = skill.SkillName;
  optionElement.textContent = skill.SkillName;
  optionElement2.value = skill.SkillName;
  optionElement2.textContent = skill.SkillName;
  
//   // Append the option element to the select element
  skill1SelectElement.appendChild(optionElement);
  skill2SelectElement.appendChild(optionElement2);

//   // Set the truncated description
//   const truncatedDescription = skill.Description.substring(0, 15) + '...';
//   skill1DescriptionPreviewElement.textContent = truncatedDescription;
//   skill2DescriptionPreviewElement.textContent = truncatedDescription;

//   // Set the full description
//   skill1DescriptionFullElement.textContent = skill.Description;
//   skill2DescriptionFullElement.textContent = skill.Description;

//   // Set the skill description

  // skill1DescriptionElement.textContent = skill.Description;
  // skill2DescriptionElement.textContent = skill.Description;

//   // Add event listener to toggle the description visibility
//   skill1DescriptionPreviewElement.addEventListener('click', () => {
//     toggleDescriptionVisibility(skill1DescriptionPreviewElement, skill1DescriptionFullElement, skill1ToggleButton, 'skill1');
//   });

//   skill1DescriptionFullElement.addEventListener('click', () => {
//     toggleDescriptionVisibility(skill1DescriptionPreviewElement, skill1DescriptionFullElement, skill1ToggleButton, 'skill1');
//   });

//   skill1ToggleButton.addEventListener('click', () => {
//     toggleDescriptionVisibility(skill1DescriptionPreviewElement, skill1DescriptionFullElement, skill1ToggleButton, 'skill1');
//   });

//   skill2DescriptionPreviewElement.addEventListener('click', () => {
//     toggleDescriptionVisibility(skill2DescriptionPreviewElement, skill2DescriptionFullElement, skill2ToggleButton, 'skill2');
//   });

//   skill2DescriptionFullElement.addEventListener('click', () => {
//     toggleDescriptionVisibility(skill2DescriptionPreviewElement, skill2DescriptionFullElement, skill2ToggleButton, 'skill2');
//   });

//   skill2ToggleButton.addEventListener('click', () => {
//     toggleDescriptionVisibility(skill2DescriptionPreviewElement, skill2DescriptionFullElement, skill2ToggleButton, 'skill2');
//   });
});

// Get the selected option
const selectedOptionInitial = skill1SelectElement.value;
const selectedOptionInitial2 = skill2SelectElement.value;

// Find the matching skill in inheritSkills array
const selectedSkillInitial = inheritSkills.find(skill => skill.SkillName === selectedOptionInitial);
const selectedSkillInitial2 = inheritSkills.find(skill => skill.SkillName === selectedOptionInitial);

// Populate the skill1Description span with the description
if (selectedSkillInitial) {
  const { Description, Emblem, SP, BondLevel } = selectedSkillInitial;
  //const descriptionText = `Description: ${Description}<br>Emblem: ${Emblem}<br>SP: ${SP}<br>Bond Level: ${BondLevel}`;
  const descriptionTextInitial = `<strong>Description:</strong> ${Description}<br><strong>SP Cost:</strong> ${SP}<br><strong>Emblem:</strong> ${Emblem}<br><strong>Bond:</strong> ${BondLevel}`;
 
  skill1DescriptionElement.innerHTML = descriptionTextInitial;
} else {
  skill1DescriptionElement.innerHTML = ""; // Clear the description if no matching skill found
}

// Populate the skill2Description span with the description
if (selectedSkillInitial2) {
  const { Description, Emblem, SP, BondLevel } = selectedSkillInitial2;
  //const descriptionText = `Description: ${Description}<br>Emblem: ${Emblem}<br>SP: ${SP}<br>Bond Level: ${BondLevel}`;
  const descriptionTextInitial2 = `<strong>Description:</strong> ${Description}<br><strong>SP Cost:</strong> ${SP}<br><strong>Emblem:</strong> ${Emblem}<br><strong>Bond:</strong> ${BondLevel}`;
 
  skill2DescriptionElement.innerHTML = descriptionTextInitial2;
} else {
  skill2DescriptionElement.innerHTML = ""; // Clear the description if no matching skill found
}


// Add mouseenter event listener to each option within skill1Select dropdown
Array.from(skill1SelectElement.options).forEach(option => {
  const selectedOption = option.value;
  const selectedSkill = inheritSkills.find(skill => skill.SkillName === selectedOption);

  if (selectedSkill) {
    const { Description, Emblem, SP, BondLevel } = selectedSkill;
    const descriptionTextTT = `${Description} - SP: ${SP}`;
    option.setAttribute('title', descriptionTextTT);
  } else {
    option.removeAttribute('title');
  }
});

// Add mouseenter event listener to each option within skill1Select dropdown
Array.from(skill2SelectElement.options).forEach(option2 => {
  const selectedOption2 = option2.value;
  const selectedSkill2 = inheritSkills.find(skill => skill.SkillName === selectedOption2);

  if (selectedSkill2) {
    const { Description, Emblem, SP, BondLevel } = selectedSkill2;
    const descriptionTextTT2 = `${Description} - SP: ${SP}`;
    option2.setAttribute('title', descriptionTextTT2);
  } else {
    option2.removeAttribute('title');
  }
});



// // Get the selected option
// const selectedOptionInitial2 = skill2SelectElement.value;

// // Find the matching skill in inheritSkills array
// const selectedSkillInitial2 = inheritSkills.find(skill => skill.SkillName === selectedOptionInitial2);

// // Populate the skill1Description span with the description
// if (selectedSkillInitial2) {
//   const { Description, Emblem, SP, BondLevel } = selectedSkillInitial2;
//   //const descriptionText = `Description: ${Description}<br>Emblem: ${Emblem}<br>SP: ${SP}<br>Bond Level: ${BondLevel}`;
//   const descriptionTextInitial2 = `<strong>Description:</strong> ${Description}<br><strong>SP Cost:</strong> ${SP}<br><strong>Emblem:</strong> ${Emblem}<br><strong>Bond:</strong> ${BondLevel}`;
 
//   skill2DescriptionElement.innerHTML = descriptionTextInitial2;
// } else {
//   skill2DescriptionElement.innerHTML = ""; // Clear the description if no matching skill found
// }


// // Add mouseenter event listener to each option within skill1Select dropdown
// Array.from(skill2SelectElement.options).forEach(option => {
//   const selectedOption = option.value;
//   const selectedSkill = inheritSkills.find(skill => skill.SkillName === selectedOption);

//   if (selectedSkill) {
//     const { Description, Emblem, SP, BondLevel } = selectedSkill;
//     const descriptionTextTT = `${Description} - SP: ${SP}`;
//     option.setAttribute('title', descriptionTextTT);
//   } else {
//     option.removeAttribute('title');
//   }
// });


// let descriptionTxt = `<strong>Description:</strong> ${skill.Description}<br><strong>SP Cost:</strong> ${skill.SP}<br><strong>Emblem:</strong> ${skill.Emblem}<br><strong>Bond:</strong> ${skill.BondLevel}`;

// skill1DescriptionElement.innerHTML = descriptionTxt;
// skill2DescriptionElement.innerHTML = descriptionTxt;


// function toggleDescriptionVisibility(previewElement, fullElement, toggleButton, skillId) {
//   if (skillId === 'skill1') {
//     if (isSkill1Expanded) {
//       // Contract the description
//       previewElement.style.display = 'block';
//       fullElement.style.display = 'none';
//       toggleButton.textContent = '+';
//       isSkill1Expanded = false;
//     } else {
//       // Expand the description
//       previewElement.style.display = 'none';
//       fullElement.style.display = 'block';
//       toggleButton.textContent = '-';
//       isSkill1Expanded = true;
//     }
//   } else if (skillId === 'skill2') {
//     if (isSkill2Expanded) {
//       // Contract the description
//       previewElement.style.display = 'block';
//       fullElement.style.display = 'none';
//       toggleButton.textContent = '+';
//       isSkill2Expanded = false;
//     } else {
//       // Expand the description
//       previewElement.style.display = 'none';
//       fullElement.style.display = 'block';
//       toggleButton.textContent = '-';
//       isSkill2Expanded = true;
//     }
//   }
// }

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// Add click event listener to skill1Select dropdown
skill1SelectElement.addEventListener('click', function() {
  // Get the selected option
  const selectedOption = skill1SelectElement.value;

  // Find the matching skill in inheritSkills array
  const selectedSkill = inheritSkills.find(skill => skill.SkillName === selectedOption);

  // Populate the skill1Description span with the description
  if (selectedSkill) {
    const { Description, Emblem, SP, BondLevel } = selectedSkill;
    //const descriptionText = `Description: ${Description}<br>Emblem: ${Emblem}<br>SP: ${SP}<br>Bond Level: ${BondLevel}`;
    const descriptionText = `<strong>Description:</strong> ${Description}<br><strong>SP Cost:</strong> ${SP}<br><strong>Emblem:</strong> ${Emblem}<br><strong>Bond:</strong> ${BondLevel}`;
   
    skill1DescriptionElement.innerHTML = descriptionText;
  } else {
    skill1DescriptionElement.innerHTML = ""; // Clear the description if no matching skill found
  }
});

// Add click event listener to skill1Select dropdown
skill2SelectElement.addEventListener('click', function() {
  // Get the selected option
  const selectedOption = skill2SelectElement.value;

  // Find the matching skill in inheritSkills array
  const selectedSkill = inheritSkills.find(skill => skill.SkillName === selectedOption);

  // Populate the skill1Description span with the description
  if (selectedSkill) {
    const { Description, Emblem, SP, BondLevel } = selectedSkill;
    //const descriptionText = `Description: ${Description}<br>Emblem: ${Emblem}<br>SP: ${SP}<br>Bond Level: ${BondLevel}`;
    const descriptionText = `<strong>Description:</strong> ${Description}<br><strong>SP Cost:</strong> ${SP}<br><strong>Emblem:</strong> ${Emblem}<br><strong>Bond:</strong> ${BondLevel}`;
   
    skill2DescriptionElement.innerHTML = descriptionText;
  } else {
    skill2DescriptionElement.innerHTML = ""; // Clear the description if no matching skill found
  }
});


//--only expands
// function toggleDescriptionVisibility(previewElement, fullElement, toggleButton) {
//   if (fullElement.style.display === 'none') {
//     previewElement.style.display = 'none';
//     fullElement.style.display = 'block';
//     toggleButton.textContent = '-';
//   } else {
//     previewElement.style.display = 'block';
//     fullElement.style.display = 'none';
//     toggleButton.textContent = '+';
//   }
// }

// function toggleDescriptionVisibility(previewElement, fullElement, toggleButton) {
//   if (fullElement.style.display === 'none') {
//     previewElement.style.display = 'none';
//     fullElement.style.display = 'block';
//     toggleButton.textContent = '-';
//   } else {
//     previewElement.style.display = 'block';
//     fullElement.style.display = 'none';
//     toggleButton.textContent = '+';
//   }
// }



characterSelect.addEventListener("change", () => {
  const selectedCharacter = characters.find(
      (character) => character.name === characterSelect.value 
  );


  function updateClassPreviewLink() {
  const characterSelect = document.getElementById("characterSelect");
  const selectedCharacter = characterSelect.value;
  const selectedCharacterData = charactersClassPreviewLinks.find(character => character.name === selectedCharacter);

  if (selectedCharacterData) {
    const classLinkDiv = document.getElementById("classLinkDiv");
    const enchanterClassLinkDiv = document.getElementById("enchanterClassLinkDiv");
    const cannoneerClassLinkDiv = document.getElementById("cannoneerClassLinkDiv");
    const lblClassPreview = document.getElementById("lblClassPreview");
    const lblEnchanterClassPreview = document.getElementById("lblEnchanterClassPreview");
    const lblCannoneerClassPreview = document.getElementById("lblCannoneerClassPreview");

    if (selectedCharacterData.ClassPreviewLink) {
      lblClassPreview.href = selectedCharacterData.ClassPreviewLink;
      lblClassPreview.textContent = "Link";
      classLinkDiv.classList.remove("hidden");
    } else {
      classLinkDiv.classList.add("hidden");
    }
	
	if (selectedCharacterData.ClassPreviewFemaleLink) {
      lblClassFemalePreview.href = selectedCharacterData.ClassPreviewFemaleLink;
      lblClassFemalePreview.textContent = "Link";
      classLinkFemaleDiv.classList.remove("hidden");
    } else {
      classLinkFemaleDiv.classList.add("hidden");
    }

    if (selectedCharacterData.EnchanterPreviewLink) {
      lblEnchanterClassPreview.href = selectedCharacterData.EnchanterPreviewLink;
      lblEnchanterClassPreview.textContent = "Link";
      enchanterClassLinkDiv.classList.remove("hidden");
    } else {
      enchanterClassLinkDiv.classList.add("hidden");
    }

    if (selectedCharacterData.MageCannoneerPreviewLink) {
      lblCannoneerClassPreview.href = selectedCharacterData.MageCannoneerPreviewLink;
      lblCannoneerClassPreview.textContent = "Link";
      cannoneerClassLinkDiv.classList.remove("hidden");
    } else {
      cannoneerClassLinkDiv.classList.add("hidden");
    }
  } else {
    // If no character is selected or selected character does not have data
    const classLinkDiv = document.getElementById("classLinkDiv");
    const enchanterClassLinkDiv = document.getElementById("enchanterClassLinkDiv");
    const cannoneerClassLinkDiv = document.getElementById("cannoneerClassLinkDiv");

    classLinkDiv.classList.add("hidden");
    enchanterClassLinkDiv.classList.add("hidden");
    cannoneerClassLinkDiv.classList.add("hidden");
  }
}


  var lblInatePro = document.getElementById("lblInatePro");
  lblInatePro.textContent = selectedCharacter.InateProf[0];

  const lblClassProUp = document.getElementById("lblClassProUp");
  const proficiency = classProficiencyUp.find(item => item.name === selectedCharacter.InateProf[0]);

  // if (proficiency) {
  //   lblClassProUp.textContent = proficiency.classes.join(", ");
  // } else {
  //   lblClassProUp.textContent = "No classes found";
  // }

if (proficiency) {
  const classNames = proficiency.classes.join(", "); // Join class names with a comma
  const classSpans = classNames.split(", ").map(className => `<span class=\"keep-together\">${className}</span>`).join(", ");
  lblClassProUp.innerHTML = classSpans;
}
else {
    lblClassProUp.textContent = "No classes found";
}


  if(selectedCharacter.name === "Jean"){
    intExpertise = 2;
  }
  else{
    intExpertise = 1;
  }

  const startingClass = selectedCharacter.bases[0]
  const startingLevel = selectedCharacter.bases[1]
  const selectedClass = classes.find((classObj) => classObj.name === startingClass);
  

  // Remove all rows except for the last one
  while (tableBody.rows.length > 0) {
      tableBody.deleteRow(0);
  }

  // Create a new row
  const row = tableBody.insertRow(0);  

  // -------------------

  prevClassDDValue = selectedClass.name;

  // for (let i = 0; i < 40; i++) {
  //   tableValues[i] = [null, null, null, null, null, null, null, null, null, null, null, null, null];
  // }

  const rowIndex = 0

  // Add the bases from the class to the bases from the selected character
  selectedCharacter.bases.forEach((base, index) => {
      const cell = row.insertCell(index);
      let result;

      if (index < 3) {
          cell.textContent = base;
          //tableValues[rowIndex][index] = base;
      } else {
          const classGrowth = selectedClass.growths[index - 3];
          const classBase = selectedClass.bases[index - 3];
          const growth = selectedCharacter.growths[index - 3];


          const baseValue = base !== null && base !== undefined ? base : 0;
          const growthValue = growth !== null && growth !== undefined ? growth : 0;
          //const classGrowthValue = classGrowth !== null && classGrowth !== undefined ? classGrowth : 0;
          const classBaseValue = classBase !== null && classBase !== undefined ? classBase : 0;


          //Use Math.round to get rid of floating point math, otherwise it ignores format and adds random tiny numbers to results
          let result          
          
          result = Math.round((baseValue + growthValue + classBaseValue) * 100) / 100;          

          cell.textContent = result.toFixed(2);
          //tableValues[rowIndex][index] = result.toFixed(2);
      }      
      
  });

  // Add the class dropdown near the end   
  addClassDropdown(row, classes);

  //Add Starsphere checkbox
  addCheckboxCell(row);

  //addStartingTableRows(tableBody, tableValues, startingLevel, selectedClass, selectedCharacter);
  addStartingTableRows(tableBody,  startingLevel, selectedClass, selectedCharacter);

  //setReclassDropdownsClickEvents(tableBody, tableValues, selectedCharacter);
  setReclassDropdownsClickEvents(tableBody, selectedCharacter);

  updateClassPreviewLink()

  updatePersonalSkill()

});

function updatePersonalSkill() {
  const characterSelect = document.getElementById("characterSelect");
  const selectedCharacter = characterSelect.value;
  const selectedCharacterData = personalSkills.find(character => character.name === selectedCharacter);

  if (selectedCharacterData) {
    const personalSkillDiv = document.getElementById("personalSkillDiv");   
    const lblPersonalSkillName = document.getElementById("lblPersonalSkillName");
    const lblPersonalSkillDescription = document.getElementById("lblPersonalSkillDescription");

    if (selectedCharacterData.PersonalSkillName) {
      lblPersonalSkillName.innerHTML = selectedCharacterData.PersonalSkillName;
      lblPersonalSkillDescription.innerHTML = selectedCharacterData.PersonalSkillDescription;
      personalSkillDiv.classList.remove("hidden");
    } else {
      personalSkillDiv.classList.add("hidden");
    }
		
  } else {
    // If no character is selected or selected character does not have data
    const personalSkillDiv = document.getElementById("personalSkillDiv");

    personalSkillDiv.classList.add("hidden");
    
  }
}

function updateClassPreviewLink() {
  const characterSelect = document.getElementById("characterSelect");
  const selectedCharacter = characterSelect.value;
  const selectedCharacterData = charactersClassPreviewLinks.find(character => character.name === selectedCharacter);

  if (selectedCharacterData) {
    const classLinkDiv = document.getElementById("classLinkDiv");
    const enchanterClassLinkDiv = document.getElementById("enchanterClassLinkDiv");
    const cannoneerClassLinkDiv = document.getElementById("cannoneerClassLinkDiv");
    const lblClassPreview = document.getElementById("lblClassPreview");
    const lblEnchanterClassPreview = document.getElementById("lblEnchanterClassPreview");
    const lblCannoneerClassPreview = document.getElementById("lblCannoneerClassPreview");

    if (selectedCharacterData.ClassPreviewLink) {
      lblClassPreview.href = selectedCharacterData.ClassPreviewLink;
      lblClassPreview.textContent = "Link";
      classLinkDiv.classList.remove("hidden");
    } else {
      classLinkDiv.classList.add("hidden");
    }

    if (selectedCharacterData.ClassPreviewFemaleLink) {
      lblClassFemalePreview.href = selectedCharacterData.ClassPreviewFemaleLink;
      lblClassFemalePreview.textContent = "Link";
      classLinkFemaleDiv.classList.remove("hidden");
    } else {
      classLinkFemaleDiv.classList.add("hidden");
    }

    if (selectedCharacterData.EnchanterPreviewLink) {
      lblEnchanterClassPreview.href = selectedCharacterData.EnchanterPreviewLink;
      lblEnchanterClassPreview.textContent = "Link";
      enchanterClassLinkDiv.classList.remove("hidden");
    } else {
      enchanterClassLinkDiv.classList.add("hidden");
    }

    if (selectedCharacterData.MageCannoneerPreviewLink) {
      lblCannoneerClassPreview.href = selectedCharacterData.MageCannoneerPreviewLink;
      lblCannoneerClassPreview.textContent = "Link";
      cannoneerClassLinkDiv.classList.remove("hidden");
    } else {
      cannoneerClassLinkDiv.classList.add("hidden");
    }
  } else {
    // If no character is selected or selected character does not have data
    const classLinkDiv = document.getElementById("classLinkDiv");
    const enchanterClassLinkDiv = document.getElementById("enchanterClassLinkDiv");
    const cannoneerClassLinkDiv = document.getElementById("cannoneerClassLinkDiv");

    classLinkDiv.classList.add("hidden");
    enchanterClassLinkDiv.classList.add("hidden");
    cannoneerClassLinkDiv.classList.add("hidden");
  }
}



//function addStartingTableRows(tableBody, tableValues, level, selectedClass, selectedCharacter) {
  function addStartingTableRows(tableBody, level, selectedClass, selectedCharacter) {
  
  let levelCapRow = 21;

  if (selectedClass.AdvanceOrSpecial == 2)
  {
    levelCapRow = 41;
  }
  
  const rowCount = levelCapRow - level;

  let newRow;

  let tableValues = convertTableTo2DArray(tableBody, levelCapRow);

  for (let i = 1; i < rowCount; i++) {
    newRow = tableBody.insertRow();
    let prevRowValues = tableValues[i - 1];

    //var rowCount1 = tableBody.rows.length;

    //let prevRowValues = tableBody.rows[i - 1];
    
    // //Get the number of columns from the header
    // var table = document.getElementById('tableStats'); //12345
    // var headerRow = table.rows[0]; // Assuming the header is the first row
    // var columnCount = headerRow.cells.length;

    //for (let j = 0; j < prevRowValues.length; j++) {
    for (let j = 0; j < prevRowValues.length- intNumExtraColumns; j++) {
      const cell = newRow.insertCell(j);

      if (j === 0) {

        cell.textContent = selectedClass.name;
        tableValues[i][j] = selectedClass.name;

      } else if (j === 1 || j === 2) {
        const newLevel = parseInt(prevRowValues[j]) + 1;
        cell.textContent = newLevel;
        tableValues[i][j] = newLevel;

      } else {

        let charGrowth = 0.00;
        let classGrowth = 0.00;

        // Get character Growths
        if (j - 3 >= 0 && j - 3 < selectedCharacter.growths.length) {
          charGrowth = selectedCharacter.growths[j - 3];
        }

        // Get class Growths
        if (j - 3 >= 0 && j - 3 < selectedClass.growths.length) {
          classGrowth = selectedClass.growths[j - 3];
        }

        let resultTotal;

        if(j != movIndex)
        {
          resultTotal = parseFloat(prevRowValues[j]) + charGrowth + (classGrowth * intExpertise);
        }
        else
        {
          resultTotal = parseFloat(prevRowValues[j]) + charGrowth + (classGrowth * intExpertise);
        }

        cell.textContent = resultTotal.toFixed(2);
        tableValues[i][j] = resultTotal.toFixed(2);

      }
    }  
    
    // Add the class dropdown to the end   
    addClassDropdown(newRow, classes);

    //Add Starsphere checkbox
    addCheckboxCell(newRow);

  }
  updateFinalClassProficency();
  
}


//function addTableRows(tableBody, tableValues, level, selectedClass, selectedCharacter) {
function addTableRows(tableBody, level, selectedClass, selectedCharacter) {
  //const rowCount = 21 - level;

  let newRow;
  let levelCapRow = 20;

  

  if (selectedClass.AdvanceOrSpecial == 2)
  {
    levelCapRow = 40;
  }

  // let newMaxNumRows = tableValues.length + levelCapRow;
  let newMaxNumRows = tableBody.rows.length + levelCapRow;

    //Copy table into a array
    let tableValues = convertTableTo2DArray(tableBody, newMaxNumRows);

  //let indexOfPreviousClass = tableValues.length -1;
  let indexOfPreviousClass = tableBody.rows.length -1;

   const previousClass = classes.find((classObj) => classObj.name === tableValues[indexOfPreviousClass][0]);
  //const previousClass = classes.find((classObj) => classObj.name === tableBody[indexOfPreviousClass][0]);



  //Add a row to show difference between class change
  newRow = tableBody.insertRow();


  //let prevRowVal = tableValues[tableValues.length-1]; 
  //let prevRowVal = tableBody.rows[tableBody.rows.length-2]; 
  let prevRowVal = tableValues[tableBody.rows.length-2]; 

  for (let j = 0; j < prevRowVal.length - intNumExtraColumns; j++) {
    const cell = newRow.insertCell(j);

    //Set first cell as new class
    if(j===0)
    {
      cell.textContent = selectedClass.name;
    }

    //Set level and internal level as previous cell
    else if(j===1 || j===2)
    {
      cell.textContent = prevRowVal[j];
    }
    else
    {

    //Calculate differences between the two classes
      let difference =  selectedClass.bases[j-3] - previousClass.bases[j-3]

      

    //Insert the new class into the tableValues array  
      let newTotal = parseFloat(prevRowVal[j]) + difference;
      cell.textContent = newTotal.toFixed(2);

      if(difference < 0){
        cell.textContent = cell.textContent + " (" + difference + ")";
        cell.style.color = "red";
      }
      else if(difference > 0)
      {
        cell.textContent = cell.textContent + " (+" + difference + ")";
        cell.style.color = "green";
      }
      else
      {
        cell.textContent = cell.textContent + " (" + difference + ")";
        cell.style.color = "black";
      }

    }
  }

  //Add a number of rows to tableValues to match the number of levels the new class has
  // for (let i = tableValues.length; i < newMaxNumRows; i++) {
  //   tableValues[i] = [null, null, null, null, null, null, null, null, null, null, null, null, null];
  // }
 

  for (let i = 1 + indexOfPreviousClass; i < tableValues.length; i++) 
  //for (let i = 1 + indexOfPreviousClass; i < tableBody.length; i++) 
  {  

     newRow = tableBody.insertRow();

    let prevRowValues = tableValues[i-1]; 
    //let prevRowValues = tableBody[i-1]; 
    //let starCur = 0;    

    // Check if the previous row's checkbox is checked
    var prevRowValueStarCell = i > 0 ? tableBody.rows[i - 1].cells[14] : null;
    var prevCheckboxChecked = prevRowValueStarCell && prevRowValueStarCell.querySelector('input[type="checkbox"]')?.checked;

    // Set the variable based on the checkbox status or if the checkbox or column 14 doesn't exist
    var starCur = prevCheckboxChecked ? 0.15 : 0.00;

    // alert(indexOfPreviousClass)

     //alert(prevRowValues[0]);

     //If i = 0, subtract previous base clas bonus and add new base class bonus

     //Loop through each cell

     for (let j = 0; j < prevRowValues.length-intNumExtraColumns; j++) {
       const cell = newRow.insertCell(j);

      if (j === 0) 
      {
        cell.textContent = selectedClass.name;   
        tableValues[i][j] = selectedClass.name;     

      } else if (j === 1 ) {
        const newLevel = parseInt(prevRowValues[j]) +1;
        cell.textContent = newLevel;
        tableValues[i][j] = newLevel;
        
      } else if (j === 2) {
        const newLevel = parseInt(prevRowValues[j]) +1;
        cell.textContent = newLevel;
        tableValues[i][j] = newLevel;

      } else {

        let charGrowth = 0.00;
        let classGrowth = 0.00;

        // Get character Growths
        if (j - 3 >= 0 && j - 3 < selectedCharacter.growths.length) {
          charGrowth = selectedCharacter.growths[j - 3];
        }

        // Get class Growths
        if (j - 3 >= 0 && j - 3 < selectedClass.growths.length) {
          classGrowth = selectedClass.growths[j - 3];
        }

        let difference = 0;

        //Calculate new base if there is a difference between classes if first row after change
        if (i == (1 + indexOfPreviousClass))
        {         
          if(previousClass.name != selectedClass.name && j - 3 >= 0 && j - 3 < selectedClass.bases.length)
          {
            difference = selectedClass.bases[j-3] - previousClass.bases[j-3];
          }
        }

        let resultTotal;
        
        if(j != movIndex)
        {
          resultTotal = parseFloat(prevRowValues[j]) + charGrowth + (classGrowth * intExpertise) + difference + starCur; //+ difference;
        }
        else
        {
          resultTotal = parseFloat(prevRowValues[j]) + charGrowth + (classGrowth * intExpertise) + difference; //+ difference;
        }

        cell.textContent = resultTotal.toFixed(2);
        tableValues[i][j] = resultTotal.toFixed(2);
      }
    }   
    // Add the class dropdown to the end   
    addClassDropdown(newRow, classes, previousClass.name);

    //Add Starsphere checkbox
    addCheckboxCell(newRow);

  }

  updateFinalClassProficency();
}




function addClassDropdown(row, classes, prevRowClassName = '') {
// row.cells[0].innerText

  // Create a new cell at the end of the row
  const dropdownCell = row.insertCell();

  // Create a new select element for the dropdown
  const dropdown = document.createElement("select");

  // Add a class to the select element
  dropdown.classList.add("class-dropdown");

  // //const currentClassTest = classes.find((classObj) => classObj.name === row.cells[0].textContent);
  // let currentClass;

  // //Get a row count on number of rows/levels a row has
  // //var rowIndex = event.target.parentNode.parentNode.rowIndex; // Get the row index of the changed dropdown
  // //Need the row index here ???
  // var rowIndex = ???


  // var className = tableBody.rows[rowIndex].cells[0].innerText; // Get the class name of the current row
  // var currentClassLevels = 0;
  // for (var i = rowIndex - 1; i >= 0; i--) {
  //   var currentClassName = tableBody.rows[i].cells[0].innerText;
  //   if (currentClassName !== className) {
  //     break;
  //   }
  //   currentClassLevels++;
  // }

  var classChangesCount = -1;

  // for (var i = 0; i < tableBody.rows.length; i++) {
  //   var cells = tableBody.rows[i].getElementsByTagName("td");
  //   var cell13 = cells[13]; 
  
  //   // Check if the cell is blank or null
  //   if (!cell13 || (cell13 && !cell13.textContent.trim())) {
  //     classChangesCount++;
  //   }
  // }
  
  //Count the number of levels in a class based on number of rows
  var prevClassLevels = 0;
  for (var i = row.rowIndex -1; i >= 0; i--) {
    var cells = tableBody.rows[i].getElementsByTagName("td");
    var cell13 = cells[13]; 

    // Check if the cell is blank or null
    if (!cell13 || (cell13 && !cell13.textContent.trim())) {
      classChangesCount++;
    }

    var ClassName = tableBody.rows[i].cells[0].innerText;
    if (ClassName == prevRowClassName) {
      break;
    }
    prevClassLevels++;


       
    //If the character does not start at level 1 we need to add the level that thy started at
    if(i==0) {
      // Extract the value from the cell.
      var value = tableBody.rows[i].cells[1].innerText || tableBody.rows[i].cells[1].textContent;

      // Check if the value is not blank and numeric.
      if (value !== "" && !isNaN(Number(value))) {       
        prevClassLevels += Number(value) -1;  
      }
    }

  }

  //subtract class transaction rows
  prevClassLevels = prevClassLevels - classChangesCount;

  //Add a blank option
  const optionBlank = document.createElement("option");
  optionBlank .text = ''
  optionBlank .value = 0;      
  dropdown.add(optionBlank);

  // Create an option for each class and append it to the select element
  classes.forEach((classObj) => {
 
    //Check if unique Class
    if(classObj.UniqueClass == "No" || classObj.UniqueClass == characterSelect.value)
    {
      currentClass = classes.find((classObj) => classObj.name === row.cells[0].textContent);

      //Show class option if new class is base class(0), if new class is special(2), if currecnt class is advance(1), if level > 20, or if in base and level > 9 and newClass is advance(1)
      // if(classObj.AdvanceOrSpecial == 0 || classObj.AdvanceOrSpecial == 2 || currentClass.AdvanceOrSpecial == 1 || parseInt(row.cells[1].textContent) > 20 ||
      //   (parseInt(row.cells[1].textContent) > 9 && classObj.AdvanceOrSpecial == 1 && currentClass.AdvanceOrSpecial == 0 ) )
      if(classObj.AdvanceOrSpecial == 0 || classObj.AdvanceOrSpecial == 2 || currentClass.AdvanceOrSpecial == 1 || parseInt(prevClassLevels) > 20 ||
        (parseInt(prevClassLevels) > 9 && classObj.AdvanceOrSpecial == 1 && currentClass.AdvanceOrSpecial == 0 ) )
      {      
        const option = document.createElement("option");
        option.text = classObj.name;
        option.value = classObj.id;        
        dropdown.add(option);
      }

    }
  });


  //Set Default to current class
  // const defaultValue = row.cells[0].textContent;
  // for(var i, j = 0; i = dropdown.options[j]; j++) {
  //   if(i.text == defaultValue) {
  //     dropdown.selectedIndex = j;
  //       break;
  //   }
  // }

    //Set default value to first option, which should be blank
    dropdown.selectedIndex = 0;

  // Append the select element to the cell
  dropdownCell.appendChild(dropdown);
}



//let testSwitchClassFlag = 0;

//function setReclassDropdownsClickEvents(tableBody, tableValues, selectedCharacter) {
  function setReclassDropdownsClickEvents(tableBody, selectedCharacter) {
  // Get all of the class dropdowns in the table
  const classDropdowns = document.querySelectorAll(".class-dropdown");

  // Loop through each class dropdown and add a click event listener
  classDropdowns.forEach((dropdown) => {
    dropdown.addEventListener("change", () => {
      // Get the row of the clicked dropdown
      const row = dropdown.closest("tr");

      

      //alert(dropdown.options[dropdown.selectedIndex].text);

      // Get the index of the clicked row
      const rowIndex = row.rowIndex;

      // Get the table body
      const tableBody = row.parentNode;

      // Delete all rows after the clicked row
      while (tableBody.rows.length > rowIndex) {
        tableBody.deleteRow(rowIndex);          
      }

      // Delete all rows in tableValues after the clicked row
      //tableValues.splice(rowIndex);      

    
    const selectedClass = classes.find((classObj) => classObj.name === dropdown.options[dropdown.selectedIndex].text);

    // prevClassDDValue = selectedClass.name;
    // clickCount = 0;
    //testSwitchClassFlag = 1;

    //alert(dropdown.options[dropdown.selectedIndex].value);

    const level = row.cells[1].textContent;


    // Repopulate the table with new rows
    //addTableRows(tableBody, tableValues, level, selectedClass, selectedCharacter);
    addTableRows(tableBody,  level, selectedClass, selectedCharacter);

    // Set click events for new dropdowns
    //setReclassDropdownsClickEvents(tableBody, tableValues, selectedCharacter);
    setReclassDropdownsClickEvents(tableBody,  selectedCharacter);

    updateFinalClassProficency();

    //testSwitchClassFlag = 0;
     
    });  

    //let previousValue = dropdown.value;
    //let isInitialClick = true;


    ////123456
  //   dropdown.addEventListener("click", () => {
  //     //var currIndex = document.getElementById("ddList").selectedIndex;
  //     //Get current value
  //     var currValue = dropdown.options[dropdown.selectedIndex].text;

  //   if( currValue != null )
  //   {
  //       if( prevClassDDValue == currValue && clickCount > 0)
  //       {
  //           alert("Selected Value = " + currValue + "  | Previous value = " + prevClassDDValue);
  //           prevClassDDValue = currValue;

  //           clickCount = 0;
  //       }
  //       else
  //       {
  //          //prevClassDDValue = "";
  //          clickCount += 1;
  //       }
  //   }
  // });

  // dropdown.addEventListener("blur", () => {
  //    clickCount = 0;
  //    //testSwitchClassFlag == 0;
  // });

    // dropdown.addEventListener("mousedown", () => {
    //   isInitialClick = true;
    // });

    // dropdown.addEventListener("click", () => {
    //   if (!isInitialClick) {
    //     //const currentValue = dropdown.value;
    //     console.log("Test");
    //     // Perform the desired actions here
    //     // ...

    //     //previousValue = currentValue;
        
    //    }

    //   isInitialClick = false;
    // });


  });
}

function addCheckboxCell(row) {

  //let prevRowValues = tableValues[i-1]; 

  let defaultCheck = 0;


  //Fix this!!!!  Need to set the default check based on previous row with checkbox // 123456
  // if(prevRowValues !== null)  {  
  //   defaultCheck = getCheckboxFlag(prevRowValues, tableBody);
  // }


  // var prevRowValueStarCell = tableBody.rows[i - 1].cells[14];
  // var prevCheckboxChecked = prevRowValueStarCell && prevRowValueStarCell.querySelector('input[type="checkbox"]')?.checked;


  // Create a new cell and checkbox element
  var cell = row.insertCell();
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  if(defaultCheck == 1){
    checkbox.checked = true;
  }
  else{
    checkbox.checked = false;
  }

  // Add the checkbox to the cell
  cell.appendChild(checkbox);

  // Attach onclick event to the checkbox
  checkbox.onclick = function() {
    // Determine the row index
    var rowIndex = row.rowIndex;
    
    // Check if the checkbox is checked
    if (checkbox.checked) {

      //let tableValuesIndex = findRowIndexInArray(row);

      reCalculateStarSphereValues(tableBody, rowIndex, 1);
      

      //console.log('Checkbox in row table ' + rowIndex + ' is checked.');
      //console.log('Checkbox in row array ' + tableValuesIndex + ' is checked.');
    } else {

      //let tableValuesIndex = findRowIndexInArray(row);

      reCalculateStarSphereValues(tableBody, rowIndex, 0); 

      //console.log('Checkbox in row ' + rowIndex + ' is unchecked.');
    }
  };
}


function getCheckboxFlag(previousRow, tableBody) {
 // Check if the 14th column exists in the previous row
 if (previousRow.length > 12) {
  // Check if the cell in the 14th column contains a checkbox
  var cellValue = previousRow[13];
  if (cellValue === true) {
    // Set the flag to 1 if the checkbox is checked, else set it to 0
    return cellValue.checked ? 1 : 0;
  } else {
    // The 14th column exists but does not contain a checkbox
    // Set the flag to a default value
    return 0;
  }
} else {
  // The 14th column does not exist in the previous row
  // Check the row before the previous row
  if (
    tableBody.rows.length > 1 &&
    tableBody[tableBody.indexOf(previousRow) - 1].length > 12
  ) {
    // Check if the cell in the 14th column of the row before the previous row contains a checkbox
    var cellValue = tableBody[tableBody.indexOf(previousRow) - 1][13];
    if (cellValue === true) {
      // Set the flag to 1 if the checkbox is checked, else set it to 0
      return cellValue.checked ? 1 : 0;
    } else {
      // The 14th column exists but does not contain a checkbox
      // Set the flag to a default value
      return 0;
    }
  } else {
    // The column or checkbox does not exist in the previous or row before previous row
    // Set the flag to a default value
    return 0;
  }
}
}


// function findRowIndexInArray(row) {
//   // Get the cells from the table row, excluding the last two cells
//   var cells = Array.from(row.cells).slice(0, -2);

//   // Iterate over the tableValues array
//   for (var i = 0; i < tableValues.length; i++) {
//     var rowData = tableValues[i];

//     // Exclude the last two cells from the comparison
//     //var rowDataToCompare = rowData.slice(0, -2);

//     // Check if the cells in the row match the current rowData
//     //if (compareArrays(cells, rowDataToCompare)) {
//     if (compareArrays(cells,  rowData)) {
//       return i; // Return the index if there's a match
//     }
//   }

//   return -1; // Return -1 if no match is found
// }


// // Helper function to compare two arrays
// function compareArrays(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   for (var i = 0; i < array1.length; i++) {
//     if (array1[i].innerText !== String(array2[i])) {
//       return false;
//     }
//   }

//   return true;
// }


function reCalculateStarSphereValues(table, startIndex, checkedOrUnchecked) {
  var counter = 0;

  let starSphereValue = 0.15
  if (checkedOrUnchecked == 0) {
      starSphereValue = -0.15;
  }

  //Find the index in the array for the row that was changed
  var initalRow = table.rows[startIndex];
  // let dtRowIndex = findRowIndexInArray(initalRow);

  // //Update the table array
  // let counterArray = 0;  
  // for (let x = dtRowIndex; x < tableValues.length; x++) {
  //     let row = tableValues[x];

  //     for (let y = 3; y < row.length - 3; y++) {
  //         let cell = row[y];
  //         if (!isNaN(cell)) {
  //             row[y] = parseFloat(cell) + parseFloat((starSphereValue * counterArray));
  //         }
  //     }

  //     counterArray++;
  // }

  // Start the loop from the specified row index to update the HTML Table
  for (var i = startIndex; i < table.rows.length; i++) {
      var currentRow = table.rows[i];

      var previousRow;

      if (i > 0) {
          previousRow = table.rows[i - 1];
      } else {
          previousRow = currentRow;
      }

      // Get the value of the previous row in cell 2
      var previousValue = previousRow.cells[2].innerText;

      // Compare the value with the current row
      if (previousValue !== currentRow.cells[2].innerText) {
          counter++;

          //Need to check the checkboxes
          // Check if the checkbox exists in cell 14 or 15
          var checkboxCellIndex = 14;

          // Check off the checkbox if it exists
          var checkbox = currentRow.cells[checkboxCellIndex]?.querySelector('input[type="checkbox"]');
          if (checkbox && checkedOrUnchecked == 1) {
              checkbox.checked = true;
          } else {
              checkbox.checked = false;
          }

          // Calculate and update the values in each cell in the HTML
          for (var j = 3; j < currentRow.cells.length - 3; j++) {
              var cell = currentRow.cells[j];

              // Check if the cell contains a numeric value
              if (!isNaN(cell.innerText)) {
                  var newValue = parseFloat(cell.innerText) + (starSphereValue * counter);
                  cell.innerText = newValue.toFixed(2);                  
              }
          }          
        
          

      }
  }

  updateClassChangeRows(tableBody, startIndex);

  
}


function convertTableTo2DArray(table, numBlankRows = 0) {
  // Get the table element
  //var table = document.getElementById(tableId);

  // Get the number of rows and columns in the table
  var numTableRows = table.rows.length;
  var numCols = table.rows[0].cells.length;

  var numRows = numTableRows; 
  if(numBlankRows > 0){
    numRows = numBlankRows;
  }

  // Create the 2-dimensional array
  var arr = new Array(numRows);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(numCols);
  }

  // Copy the values from the table to the array
  for (var i = 0; i < numRows; i++) {
    for (var j = 0; j < numCols; j++) {
      if(table.rows[i] !== undefined){
        if(table.rows[i].cells[j] !== undefined){
            arr[i][j] = table.rows[i].cells[j].innerHTML;
        }
      }
    }
  }
  

  return arr;
}

function updateClassChangeRows(table, rowNumber) {
  //var table = document.getElementById('tableBody');
  var rows = table.getElementsByTagName('tr');

  // Start checking from the specified row number
  for (var i = rowNumber; i < rows.length; i++) {
    var currentRow = rows[i];
    var previousRow = rows[i - 1];

    // Check if the current row has fewer columns than the previous row
    if (currentRow.cells.length < previousRow.cells.length) {
      // Exclude rows with three or fewer cells
      if (currentRow.cells.length > 3) {
        // Update the values of the current row based on the previous row's values
        for (var j = 0; j < currentRow.cells.length; j++) {
          var previousValue = previousRow.cells[j].innerHTML;
          var currentValue = currentRow.cells[j].innerHTML;

          // Check if the previous value is numeric
          if (!isNaN(parseFloat(previousValue))) {
            // Split the current cell's value by '('
            var parts = currentValue.split('(');

            var difference = parseFloat(parts[1]);
            var newValue1 = parseFloat(previousValue) + parseFloat(difference);
            
            if (parts.length > 1) {
              var newValue = newValue1.toFixed(2) + ' (' + parts[1];

              // Set the current cell's value to the new concatenated value
              currentRow.cells[j].innerHTML = newValue;
            }
          }
        }
      }
    }
  }
}


function updateFinalClassProficency() {
  // Get the class name from the first row in the last cell of the table
  const table = document.getElementById('tableBody');
  const rows = table.getElementsByTagName('tr');
  const lastRow = rows[rows.length - 1];
  const firstCell = lastRow.cells[0];
  const className = firstCell.textContent.trim();

  if (className.trim() !== '') {
    // Find the class using the class name in the 'classes' variable
    const targetClass = classes.find(cls => cls.name === className);

    // Populate the label if Proficiency1, Proficiency2, or Proficiency3 is not empty
    const lblFinalClassPro = document.getElementById('lblFinalClassPro');
    if (targetClass.Proficiency1.length > 0 || targetClass.Proficiency2.length > 0 || targetClass.Proficiency3.length > 0) {
      let or1 = ''
      let or2 = ''

      if (targetClass.Proficiency2.length > 0)
        or1 = ' or '
      if (targetClass.Proficiency3.length > 0)
        or2 = ' or '

      // lblFinalClassPro.textContent = `${targetClass.Proficiency1.join(', ')} or ${targetClass.Proficiency2.join(', ')} or ${targetClass.Proficiency3.join(', ')}`;
    
      lblFinalClassPro.textContent = `${targetClass.Proficiency1.join(', ')}${or1}${targetClass.Proficiency2.join(', ')}${or2}${targetClass.Proficiency3.join(', ')}`;
      
    }
  }
}

const emblemSelect = document.getElementById("EmblemSelect");
const bondSelect = document.getElementById("BondSelect");

// Add a blank option at the top
const blankOption = document.createElement("option");
blankOption.text = "";
blankOption.value = "";
emblemSelect.appendChild(blankOption);

  emblemStats.forEach(emblem => {
    const option = document.createElement("option");
    option.text = emblem.Emblem;
    option.value = emblem.Emblem;
    emblemSelect.appendChild(option);
  });

// Function to update BondSelect options based on the selected emblem
function updateBondOptions() {
  // Clear previous options
  while (bondSelect.firstChild) {
    bondSelect.removeChild(bondSelect.firstChild);
  }

  const selectedEmblem = emblemSelect.value;
  if (selectedEmblem === "") {
    // If blank emblem is selected, clear and disable BondSelect
    bondSelect.disabled = true;
    return;
  }

  const emblem = emblemStats.find(e => e.Emblem === selectedEmblem);
  if (emblem) {
    // Populate BondSelect with bond levels from the selected emblem
    emblem.Stats.forEach(stat => {
      const option = document.createElement("option");
      option.text = `${stat.BondLevel}`;
      option.value = stat.BondLevel;
      bondSelect.appendChild(option);
    });
  }

  bondSelect.disabled = false;
  bondSelect.value = bondSelect.lastChild.value;

  populateEmblemTables();
}

// Listen for changes in EmblemSelect and update BondSelect accordingly
emblemSelect.addEventListener("change", updateBondOptions);

// Initialize BondSelect options
updateBondOptions();



// Get references to the select elements
// const emblemSelect = document.getElementById('EmblemSelect');
// const bondSelect = document.getElementById('BondSelect');

// Add event listener to the bondSelect dropdown
bondSelect.addEventListener('change', populateEmblemTables);

function populateEmblemTables(){
  populateEmblemStatsTable();
  populateSyncSkillsTable();
  populateEngageSkillsTable();

}

// Function to populate the table based on the selected values
function populateEmblemStatsTable() {
  // Clear the table body
  document.getElementById('tableBodyEmblem').innerHTML = '';

  // Get the selected values from the dropdowns
  const selectedEmblem = emblemSelect.value;
  const selectedBond = parseInt(bondSelect.value);

  // Find the corresponding stats based on the selected emblem
  const selectedEmblemStats = emblemStats.find(emblem => emblem.Emblem === selectedEmblem);

  // Find the stats for the selected bond level
  const selectedStats = selectedEmblemStats.Stats.find(stats => stats.BondLevel === selectedBond);

  // Create a new row in the table
  const newRow = document.createElement('tr');

  // Populate the row with the stats
  for (const key in selectedStats) {
    if (key !== 'BondLevel') {
      const newCell = document.createElement('td');
      newCell.textContent = selectedStats[key];
      newRow.appendChild(newCell);
    }
  }

  // Append the new row to the table body
  document.getElementById('tableBodyEmblem').appendChild(newRow);
}
  

// Function to populate the SyncSkills-table
function populateSyncSkillsTable() {
  // Clear the table body
  document.getElementById('tableBodySyncSkills').innerHTML = '';

  // Get the selected values from the dropdowns
  const selectedEmblem = emblemSelect.value;
  const selectedBond = parseInt(bondSelect.value);

  // Find the corresponding skills based on the selected emblem
  const selectedEmblemSkills = EmblemSkills.find(emblem => emblem.Emblem === selectedEmblem);

  // Filter the skills based on the bond level and type
  if (selectedEmblemSkills) {
    const filteredSyncSkills = selectedEmblemSkills.Skills.filter(
      skill => skill.BondLevel <= selectedBond && skill.Type.includes('Sync')
    );

    // Populate the SyncSkills-table
    populateSkillsTable(filteredSyncSkills, 'tableBodySyncSkills');
  }
}

// Function to populate the EngageSkills-table
function populateEngageSkillsTable() {
  // Clear the table body
  document.getElementById('tableBodyEngageSkills').innerHTML = '';

  // Get the selected values from the dropdowns
  const selectedEmblem = emblemSelect.value;
  const selectedBond = parseInt(bondSelect.value);

  // Find the corresponding skills based on the selected emblem
  const selectedEmblemSkills = EmblemSkills.find(emblem => emblem.Emblem === selectedEmblem);

  // Filter the skills based on the bond level and type
  if (selectedEmblemSkills) {
    const filteredEngageSkills = selectedEmblemSkills.Skills.filter(
      skill => skill.BondLevel <= selectedBond && skill.Type.includes('Engage')
    );

    // Populate the EngageSkills-table
    populateSkillsTable(filteredEngageSkills, 'tableBodyEngageSkills');
  }
}

// Function to populate the skills table based on the provided skills and table body ID
function populateSkillsTable(skills, tableBodyId) {
  const tableBody = document.getElementById(tableBodyId);

  // Populate the table body with the skills
  skills.forEach(skill => {
    const newRow = document.createElement('tr');
    const skillNameCell = document.createElement('td');
    const descriptionCell = document.createElement('td');
    const bondCell = document.createElement('td');

    skillNameCell.textContent = skill.SkillName;

     // Add line breaks before '[' in the skill description
     if (skill.SkillDescription) {
      // const descriptionText = skill.SkillDescription.replace(/\[/g, '<br>[');
      const descriptionText = skill.SkillDescription.replace(/\[(Dragon|Backup|Cavalry|Covert|Armored|Mystical|Qi Adept|Flying|Book I: Seal|Book II: Flame|Book III: Death|Book IV: Dream|Book V: Science)\]/g, '<br>[$1]');
      descriptionCell.innerHTML = descriptionText;
    }

    // descriptionCell.textContent = skill.SkillDescription;
    bondCell.textContent = skill.BondLevel;

    newRow.appendChild(skillNameCell);
    newRow.appendChild(descriptionCell);
    newRow.appendChild(bondCell);

    tableBody.appendChild(newRow);
  });
}


// function updateClassChangeRows(table, rowNumber) {
//   //var table = document.getElementById('tableBody');
//   var rows = table.getElementsByTagName('tr');

//   // Start checking from the specified row number
//   for (var i = rowNumber; i < rows.length; i++) {
//     var currentRow = rows[i];
//     var previousRow = rows[i - 1];

//     // Check if the current row has fewer columns than the previous row
//     if (currentRow.cells.length < previousRow.cells.length) {
//       // Exclude rows with three or fewer cells
//       if (currentRow.cells.length > 3) {
//         // Update the values of the current row to match the previous row
//         for (var j = 0; j < currentRow.cells.length; j++) {


//           currentRow.cells[j].innerHTML = previousRow.cells[j].innerHTML;
//         }
//       }
//     }
//   }
// }

// function convertTableTo2DArray(table) {
//   var tableValues = [];

//   // Iterate over each row in the table
//   for (var i = 0; i < table.rows.length; i++) {
//     var row = table.rows[i];
//     var rowData = [];

//     // Iterate over each cell in the row
//     for (var j = 0; j < row.cells.length; j++) {
//       var cell = row.cells[j];
//       var cellText = cell.innerText.trim(); // Get the text content of the cell

//       rowData.push(cellText); // Add the cell text to the row data array
//     }

//     tableValues.push(rowData); // Add the row data array to the table values array
//   }

//   // Create and return the result object with tableValues, a setter function, and an appendRow function
//   return {
//     data: tableValues,
//     setValue: function(row, column, value) {
//       if (tableValues[row] && tableValues[row][column]) {
//         tableValues[row][column] = value;
//       }
//     },
//     appendRow: function(newRowData) {
//       tableValues.push(newRowData);
//     }
//   };
// }




// chkStar.addEventListener('change', function() {
//   // Loop through the table rows
//   for (let i = 0; i < tableBody.rows.length; i++) {
//     const row = tableBody.rows[i];

//     // Loop through the row cells
//     for (let j = 0; j < row.cells.length; j++) {

//       if(j > 2 && j < row.cells.length -2){
//         const cell = row.cells[j];

//         // Check if the cell content is numerical
//         if (!isNaN(cell.innerHTML)) {
//           // Add or subtract 0.15 multiplied by row number + 1 based on checkbox state
//           const newValue = parseFloat(cell.innerHTML) + (this.checked ? 0.15 * (i + 1) : -0.15 * (i + 1));
//           cell.innerHTML = newValue.toFixed(2);
//         }
//       }
//     }

//     if (this.checked) {
//       star = 0.15;
//     } 
//     else {
//       star = 0.0;
//     }

//   }

//   // Loop through the table values array
//   for (let i = 1; i < tableValues.length; i++) {
//     for (let j = 0; j < tableValues[i].length; j++) {
      
//     if(j > 2){
//       const value = tableValues[i][j];

//       // Check if the value is numerical
//       if (!isNaN(value)) {
//         // Add or subtract 0.15 multiplied by row number + 1 based on checkbox state
//         const newValue = parseFloat(value) + (this.checked ? 0.15 * (i) : -0.15 * (i));
//         tableValues[i][j] = newValue.toFixed(2);
//       }
//     }
//   }
//   }

//   console.log(`Table values have been updated: ${tableValues}`);
// });




