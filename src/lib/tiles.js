module.exports = [{
  type: 'grass',
  prompt: 'You encounter a bear. What do you do?',
  live_option: 'Wave your hands over your head and growl in your most guttural voice',
  live_message: 'The bear runs away.',
  death_option: 'Run away',
  death_message: 'The bear outruns you. You are dead.'
}, {
  type: 'tree',
  prompt: 'A scruffy man with an axe approaches you. What do you do?',
  death_option: 'Walk on by and don\'t make eye contact',
  death_message: 'The scruffy man slices you in half.',
  live_option: 'Comment on the weather',
  live_message: 'The scruffy man agrees. You live.'
}, {
  type: 'grass',
  prompt: 'There is nothing. No one. You are all alone. Just you and nature. What do you do?',
  death_option: 'Stay put.',
  death_message: 'The universe implodes.',
  live_option: 'Move on.',
  live_message: 'Carry on.'
}, {
  type: 'tree',
  prompt: 'A bunny hops into your path. It stops and looks up at you with beady eyes. What do you do?',
  death_option: 'Try to catch it',
  death_message: 'The bunny pulls a machine gun out.',
  live_option: 'Let it run away',
  live_message: 'The bunny poops on your shoes. Move along.'
}, {
  type: 'grass',
  prompt: 'You come upon a strange mushroom. What do you do?',
  death_option: 'Leave it alone',
  death_message: 'The mushroom fires its spores at you.',
  live_option: 'Eat it',
  live_message: 'You grew 10 times your size that day.'
}, {
  type: 'tree',
  prompt: 'There are red colored berries on a bush in front of you? What do you do?',
  death_option: 'Eat them',
  death_message: 'Berries were BAD.',
  live_option: 'Smear them on your face like warpaint',
  live_message: 'You are now immune to bridge trolls.'
}, {
  type: 'grass',
  prompt: 'You come upon a stream of water. What do you do?',
  death_option: 'Drink some water',
  death_message: 'A shark jumps out of the water and bites your head off',
  live_option: 'Fill empty beer can with water',
  live_message: 'Cheers, bro.'
}, {
  type: 'tree',
  prompt: 'You find warm beer lying in the grass. What do you do?',
  death_option: 'Drink it',
  death_message: 'You are sucked into a wormhole inside of the beer can.',
  live_option: 'Leave it',
  live_message: 'Good on you. Warm beer sucks.'
}, {
  type: 'grass',
  prompt: 'You find cell phone coverage. What do you do?',
  death_option: 'Check Facebook',
  death_message: 'Did you not learn anything in the wilderness?',
  live_option: 'Turn your phone off and step back into the wilderness...',
  live_message: '🌲',
  win_state: true
}]
