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
 let newMonster = new Monster({
   name: req.body.name,
   size: req.body.size,
   monster_type: req.body.monster_type,
   tags: req.body.tags,
   alignment: req.body.alignment,
   ac: req.body.ac,
   ac_note: req.body.ac_note,
   hp: req.body.hp,
   hd: req.body.hd,
   ability_scores: req.body.ability_scores,
   saving_throws: req.body.saving_throws,
   passive_perception: req.body.passive_perception,
   cr: req.body.cr,
   xp: req.body.xp,
   languages: req.body.languages,
   vulnerabilities: req.body.vulnerabilities,
   immunities: req.body.immunities,
   resistances: req.body.resistances,
   condition_immunities: req.body.condition_immunities,
   climate: req.body.climate,
   terrain: req.body.terrain,
   rarity: req.body.rarity,
   organization: req.body.organization,
   activity_cycle: req.body.activity_cycle,
   diet: req.body.diet,
   habitat_society: req.body.habitat_society,
   ecology: req.body.ecology,
   skills: req.body.skills,
   senses: req.body.senses,
   speeds: req.body.speeds,
   attacks: req.body.attacks,
   abilities: req.body.abilities
 })
 //save new monster to db
 // newMonster.save((err, result) => {
 //   if (err) { console.log(err) }
 //   else { res.json(result) }
 // })

 console.log('monster created: ', newMonster);
})
