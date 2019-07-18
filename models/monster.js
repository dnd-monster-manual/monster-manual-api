let mongoose = require('mongoose')
let monsterSchema = mongoose.Schema({
  name: String,
  url: String,
  size: String,
  monster_type: String,
  tags: [String],
  alignment: String,
  ac: Number,
  ac_note: String,
  hp: Number,
  hd: String,
  speeds: [{
    speed_type: String,
    speed: Number
  }],
  ability_scores: [Number],
  saving_throws: [Number],
  skills: [{
    skill: String,
    bonus: Number
  }],
  immunities: [String],
  resistances: [String],
  vulnerabilities: [String],
  condition_immunities: [String],
  senses: [{
    sense: String,
    distance: Number
  }],
  languages: [String],
  cr: Number,
  xp: Number,
  attacks: [{
    weapon: String,
    attack_type: String,
    to_hit: Number,
    reach: Number,
    range: String,
    num_targets: String,
    average_damage: Number,
    damage: String,
    damage_type: String,
    effect: String
  }],
  abilities: [{
    name: String,
    ability_type: String,
    effect: String
  }],
  legendary_actions: Number,
  climate: [String],
  terrain: [String],
  rarity: String,
  organization: String,
  activity_cycle: String,
  diet: String,
  physical_description: String,
  habitat_society: String,
  ecology: String,
  item_components: [{
    item: String,
    source: String
  }],
  monster_relationships: [{
    monster_id: String,
    relationship: String
  }]
}, { collection: 'monsters' })
let Monster = mongoose.model('Monster', monsterSchema)
module.exports = Monster
