import orderByProps from '../order-by-props';

test('hw case', () => {
  const obj = { name: 'мечник', health: 10, level: 2, defence: 40, attack: 80, };
  const sortingArray = ["name", "level"];

  const result = orderByProps(obj, sortingArray);
  expect(result).toEqual([
    {key: "name", value: "мечник"}, // порядок взят из массива с ключами
    {key: "level", value: 2}, // порядок взят из массива с ключами
    {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
    {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
    {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
  ]);

});

test('hw case', () => {
  const obj = { name: 'мечник', attack: 80, level: 2, defence: 40, attack: 80, };
  const sortingArray = ["name", "level"];

  const result = orderByProps(obj, sortingArray);
  expect(result).toEqual([
    {key: "name", value: "мечник"},
    {key: "level", value: 2},    
    {key: "attack", value: 80}, 
    {key: "defence", value: 40},
    
  ]);

});