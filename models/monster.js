let mongoose = require('mongoose')
let monsterSchema = mongoose.Schema({
  _id: false,
  name: String,
  url: String,
  size: String,
  monster_type: String,
  tags: [String],
  is_legendary: Boolean,
  alignment: String,
  ac: Number,
  ac_note: String,
  hp: Number,
  hd: String,
  speeds: [{
    _id: false,
    speed_type: String,
    speed: Number
  }],
  ability_scores: [Number],
  saving_throws: [Number],
  skills: [{
    _id: false,
    skill: String,
    bonus: Number
  }],
  immunities: [String],
  resistances: [String],
  vulnerabilities: [String],
  condition_immunities: [String],
  senses: [{
    _id: false,
    sense: String,
    distance: Number
  }],
  languages: [String],
  cr: Number,
  xp: Number,
  attacks: [{
    _id: false,
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
    _id: false,
    name: String,
    ability_type: String,
    effect: String
  }],
  legendary_actions: Number,
  lore: String,
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
    _id: false,
    item: String,
    source: String
  }],
  monster_relationships: [{
    _id: false,
    monster_name: String,
    relationship: String
  }],
  has_lair: Boolean,
  lair_description: String,
  lair_action_rules: String,
  lair_actions: [String],
  lair_effect_rules: String,
  lair_effects: [String]
}, { collection: 'monsters' })
let Monster = mongoose.model('Monster', monsterSchema)
module.exports = Monster
