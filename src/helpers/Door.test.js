import Door from './Door';

it ('Beams are created correctly', () => {
  const door = new Door(0, 0, 200, 300, 4, 2);
  const doorBeams = door.beams;
  expect(doorBeams.length).toBe(4);
  let beamX = 40;
  for (let beam of doorBeams ) {
    expect(beam.x).toBe(beamX);
    expect(beam.y).toBe(0);
    expect(beam.destinationX).toBe(200 + beamX);
    beamX += 40;
  }
})