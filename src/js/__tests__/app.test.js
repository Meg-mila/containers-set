import Team from '../app';
import Character from '../character';

const team = new Team();
const set = new Set();
const player1 = new Character({ name: 'Alex' });
const player2 = new Character({ name: 'Bob' });
const player3 = new Character({ name: 'Kate' });

test('add player in team', () => {
  set.add(player1);
  team.add(player1);
  expect(team.members).toEqual(set);
});

test('re-adding player in team', () => {
  expect(() => {
    team.add(player1);
  }).toThrow();
});

test('add multiple players', () => {
  set.add(player1);
  set.add(player2);
  set.add(player3);
  team.addAll(player1, player2, player3);

  expect(team.members).toEqual(set);
});

test('konvertierung in Array', () => {
  team.addAll(player1, player2, player3);

  team.toArray();

  const result = [
    { name: 'Alex' },
    { name: 'Bob' },
    { name: 'Kate' },
  ];
  expect(team.members).toEqual(result);
});
