export interface Puzzle {
  title: string;
  grid: string[][];
  numbers: (number | null)[][];
  clues: {
    across: Array<{
      number: number;
      clue: string;
      answer: string;
      row: number;
      col: number;
    }>;
    down: Array<{
      number: number;
      clue: string;
      answer: string;
      row: number;
      col: number;
    }>;
  };
}

export const puzzles: Puzzle[] = [
  {
    title: "Easy Puzzle",
    grid: [
      ['C', 'A', 'T', '#', 'D', 'O', 'G'],
      ['O', '#', 'O', '#', 'A', '#', 'O'],
      ['W', 'I', 'N', 'D', 'Y', '#', 'A'],
      ['#', '#', 'E', '#', '#', '#', 'T'],
      ['S', 'U', 'N', 'N', 'Y', '#', '#'],
      ['T', '#', '#', '#', 'E', '#', 'F'],
      ['A', 'P', 'P', 'L', 'E', '#', 'I'],
      ['R', '#', '#', '#', '#', '#', 'S'],
      ['S', 'N', 'O', 'W', 'Y', '#', 'H']
    ],
    numbers: [
      [1, null, null, null, 2, null, null],
      [null, null, 3, null, null, null, null],
      [4, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [5, null, null, null, null, null, null],
      [6, null, null, null, null, null, 7],
      [8, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [9, null, null, null, null, null, null]
    ],
    clues: {
      across: [
        { number: 1, clue: "Feline pet", answer: "CAT", row: 0, col: 0 },
        { number: 2, clue: "Man's best friend", answer: "DOG", row: 0, col: 4 },
        { number: 4, clue: "Breezy weather", answer: "WINDY", row: 2, col: 0 },
        { number: 5, clue: "Bright and warm weather", answer: "SUNNY", row: 4, col: 0 },
        { number: 8, clue: "Red fruit", answer: "APPLE", row: 6, col: 0 },
        { number: 9, clue: "Covered with snow", answer: "SNOWY", row: 8, col: 0 }
      ],
      down: [
        { number: 1, clue: "Bovine animal", answer: "COW", row: 0, col: 0 },
        { number: 2, clue: "Opposite of night", answer: "DAY", row: 0, col: 4 },
        { number: 3, clue: "Digit on foot", answer: "TOE", row: 0, col: 2 },
        { number: 6, clue: "Celestial body", answer: "STARS", row: 5, col: 0 },
        { number: 7, clue: "Aquatic animal", answer: "FISH", row: 5, col: 6 }
      ]
    }
  },
  {
    title: "Medium Puzzle",
    grid: [
      ['P', 'I', 'A', 'N', 'O', '#', 'B', 'O', 'A', 'T'],
      ['L', '#', '#', '#', 'C', '#', '#', '#', '#', 'I'],
      ['A', 'R', 'T', 'I', 'S', 'T', '#', 'C', 'A', 'R'],
      ['N', '#', '#', '#', 'T', '#', '#', '#', '#', 'N'],
      ['E', 'A', 'G', 'L', 'E', '#', 'R', 'A', 'I', 'N'],
      ['T', '#', '#', '#', 'A', '#', '#', '#', '#', '#'],
      ['#', 'M', 'O', 'O', 'N', '#', 'S', 'T', 'A', 'R'],
      ['#', '#', '#', '#', '#', '#', 'U', '#', '#', '#'],
      ['B', 'R', 'I', 'D', 'G', 'E', 'N', '#', 'F', 'O'],
      ['#', '#', '#', '#', '#', '#', '#', '#', '#', 'X']
    ],
    numbers: [
      [1, null, null, null, null, null, 2, null, null, null],
      [3, null, null, null, 4, null, null, null, null, null],
      [5, null, null, null, null, null, null, 6, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [7, null, null, null, null, null, 8, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, 9, null, null, null, null, 10, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [11, null, null, null, null, null, null, null, 12, null],
      [null, null, null, null, null, null, null, null, null, null]
    ],
    clues: {
      across: [
        { number: 1, clue: "Musical instrument with keys", answer: "PIANO", row: 0, col: 0 },
        { number: 2, clue: "Water vessel", answer: "BOAT", row: 0, col: 6 },
        { number: 5, clue: "Creative person", answer: "ARTIST", row: 2, col: 0 },
        { number: 6, clue: "Automobile", answer: "CAR", row: 2, col: 7 },
        { number: 7, clue: "Large bird of prey", answer: "EAGLE", row: 4, col: 0 },
        { number: 8, clue: "Precipitation", answer: "RAIN", row: 4, col: 6 },
        { number: 9, clue: "Celestial body at night", answer: "MOON", row: 6, col: 1 },
        { number: 10, clue: "Twinkling in the sky", answer: "STAR", row: 6, col: 6 },
        { number: 11, clue: "Structure over water", answer: "BRIDGE", row: 8, col: 0 }
      ],
      down: [
        { number: 1, clue: "Earth", answer: "PLANET", row: 0, col: 0 },
        { number: 2, clue: "Water vessel", answer: "BOAT", row: 0, col: 6 },
        { number: 3, clue: "Heavenly body", answer: "STAR", row: 2, col: 7 },
        { number: 4, clue: "Sea or lake", answer: "OCEAN", row: 0, col: 4 },
        { number: 10, clue: "Bright light in sky", answer: "SUN", row: 6, col: 6 },
        { number: 12, clue: "Animal", answer: "FOX", row: 8, col: 8 }
      ]
    }
  },
  {
    title: "Hard Puzzle",
    grid: [
      ['G', 'U', 'I', 'T', 'A', 'R', '#', 'M', 'U', 'S', 'I', 'C'],
      ['R', '#', '#', '#', '#', '#', '#', 'O', '#', '#', '#', 'H'],
      ['A', 'N', 'I', 'M', 'A', 'L', '#', 'U', '#', 'J', 'A', 'I'],
      ['P', '#', '#', '#', '#', '#', '#', 'S', '#', 'U', '#', 'L'],
      ['E', 'A', 'R', 'T', 'H', '#', 'B', 'E', 'A', 'C', 'H', 'D'],
      ['S', '#', '#', '#', '#', '#', '#', '#', '#', 'I', '#', '#'],
      ['#', 'O', 'C', 'E', 'A', 'N', '#', 'F', 'L', 'O', 'W', 'E'],
      ['#', '#', '#', '#', '#', '#', '#', 'I', '#', 'R', '#', 'R'],
      ['P', 'I', 'L', 'O', 'T', '#', 'C', 'S', 'H', '#', 'T', 'I'],
      ['#', '#', '#', '#', '#', '#', 'A', '#', '#', '#', '#', 'C'],
      ['T', 'I', 'G', 'E', 'R', '#', 'K', 'I', 'N', 'G', '#', 'A'],
      ['#', '#', '#', '#', '#', '#', 'E', '#', '#', '#', '#', '#']
    ],
    numbers: [
      [1, null, null, null, null, null, null, 2, null, null, null, null],
      [3, null, null, null, null, null, null, null, null, null, null, null],
      [4, null, null, null, null, null, null, null, null, 5, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null],
      [6, null, null, null, null, null, 7, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null],
      [null, 8, null, null, null, null, null, 9, null, null, null, 10],
      [null, null, null, null, null, null, null, null, null, null, null, null],
      [11, null, null, null, null, null, 12, null, null, null, 13, null],
      [null, null, null, null, null, null, null, null, null, null, null, null],
      [14, null, null, null, null, null, 15, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null]
    ],
    clues: {
      across: [
        { number: 1, clue: "Six-stringed instrument", answer: "GUITAR", row: 0, col: 0 },
        { number: 2, clue: "Melodies and rhythms", answer: "MUSIC", row: 0, col: 7 },
        { number: 4, clue: "Living creature", answer: "ANIMAL", row: 2, col: 0 },
        { number: 5, clue: "Prison", answer: "JAIL", row: 2, col: 9 },
        { number: 6, clue: "Our planet", answer: "EARTH", row: 4, col: 0 },
        { number: 7, clue: "Sandy shore", answer: "BEACH", row: 4, col: 6 },
        { number: 8, clue: "Large body of water", answer: "OCEAN", row: 6, col: 1 },
        { number: 9, clue: "Garden plant", answer: "FLOWER", row: 6, col: 7 },
        { number: 11, clue: "Aircraft operator", answer: "PILOT", row: 8, col: 0 },
        { number: 12, clue: "Baked dessert", answer: "CAKE", row: 8, col: 6 },
        { number: 14, clue: "Large striped cat", answer: "TIGER", row: 10, col: 0 },
        { number: 15, clue: "Monarch", answer: "KING", row: 10, col: 6 }
      ],
      down: [
        { number: 1, clue: "Fruit with seeds", answer: "GRAPES", row: 0, col: 0 },
        { number: 2, clue: "Rodent", answer: "MOUSE", row: 0, col: 7 },
        { number: 3, clue: "Opposite of adult", answer: "CHILD", row: 0, col: 11 },
        { number: 5, clue: "Fruit drink", answer: "JUICE", row: 2, col: 9 },
        { number: 10, clue: "Author of novels", answer: "ERICA", row: 6, col: 11 },
        { number: 13, clue: "Opposite of left", answer: "RIGHT", row: 8, col: 10 }
      ]
    }
  }
];
