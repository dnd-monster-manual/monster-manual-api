let express = require('express')
let bodyParser = require('body-parser')
let path = require('path')
let mongoose = require('mongoose')
let cors = require('cors')
let Monster = require('./models/monster.js')

let app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
mongoose.connect('mongodb://localhost:27017/monster_manual', { useNewUrlParser: true})

app.listen(5000, () => {
 console.log('Server listening on port 5000')
})

app.get('/monsters', (req, res, next) => {
  //use find() method to return all monsters
  Monster.find((err, result) => {
    if(err) { console.log(err) }
    else { res.json(result) }
  })
})

// app.get('/monsters/:id', (req, res, next) => {
//   // find monster by name
//   let id = req.params.id
//   Monster.findOne({_id: id}, (err, monster) => {
//     if(err) { console.log(err) }
//     else {
//       res.json(monster)
//     }
//   })
// })

app.get('/monsters/:url', (req, res, next) => {
  // find monster by name
  let url = req.params.url
  Monster.findOne({url: url}, (err, monster) => {
    if(err) { console.log(err) }
    else {
      res.json(monster)
    }
  })
})

//save new monster
app.post('/monsters', (req, res, next) => {
 let newMonster = monsterFromRequest(req)
 //save new monster to db
 // newMonster.save((err, result) => {
 //   if (err) { console.log(err) }
 //   else { res.json(result) }
 // })
})

app.put('/monsters/:url', (req, res, next) => {
  // find monster by name
  let url = req.params.url
  let updatedMonster = monsterFromRequest(req)
  Monster.findOneAndUpdate({url: url}, updatedMonster, {new: true}, (err, monster) => {
    if(err) { console.log(err) }
    else {
      res.json(updatedMonster)
    }
  })
})

function monsterFromRequest(req) {
  let monster = new Monster({
    name: req.body.name,
    url: req.body.url,
    size: req.body.size,
    monster_type: req.body.monster_type,
    is_legendary: req.body.is_legendary,
    tags: req.body.tags,
    alignment: req.body.alignment,
    ac: req.body.ac,
    ac_note: req.body.ac_note,
    hp: req.body.hp,
    hd: req.body.hd,
    speeds: req.body.speeds,
    ability_scores: req.body.ability_scores,
    saving_throws: req.body.saving_throws,
    skills: req.body.skills,
    immunities: req.body.immunities,
    resistances: req.body.resistances,
    vulnerabilities: req.body.vulnerabilities,
    condition_immunities: req.body.condition_immunities,
    senses: req.body.senses,
    languages: req.body.languages,
    cr: req.body.cr,
    xp: req.body.xp,
    attacks: req.body.attacks,
    abilities: req.body.abilities,
    legendary_actions: req.body.legendary_actions,
    climate: req.body.climate,
    terrain: req.body.terrain,
    rarity: req.body.rarity,
    organization: req.body.organization,
    activity_cycle: req.body.activity_cycle,
    diet: req.body.diet,
    habitat_society: req.body.habitat_society,
    ecology: req.body.ecology,
    item_components: req.body.item_components,
    monster_relationships: req.body.monster_relationships,
    has_lair: req.body.has_lair,
    lair_description: req.body.lair_description,
    lair_action_rules: req.body.lair_action_rules,
    lair_actions: req.body.lair_actions,
    lair_effect_rules: req.body.lair_effect_rules,
    lair_effects: req.body.lair_effects
  })
  return monster
}
