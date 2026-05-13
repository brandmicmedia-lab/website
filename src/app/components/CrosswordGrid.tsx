import { useEffect, useRef } from 'react';

interface Clue {
  number: number;
  clue: string;
  answer: string;
  row: number;
  col: number;
}

interface CrosswordGridProps {
  grid: string[][];
  numbers: (number | null)[][];
  userAnswers: { [key: string]: string };
  selectedCell: { row: number; col: number } | null;
  direction: 'across' | 'down';
  onCellClick: (row: number, col: number) => void;
  onCellInput: (row: number, col: number, value: string) => void;
  clues: {
    across: Clue[];
    down: Clue[];
  };
}

export function CrosswordGrid({
  grid,
  numbers,
  userAnswers,
  selectedCell,
  direction,
  onCellClick,
  onCellInput,
  clues
}: CrosswordGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  const getHighlightedCells = () => {
    if (!selectedCell) return new Set<string>();

    const highlighted = new Set<string>();
    const { row, col } = selectedCell;

    // Find which word the selected cell belongs to
    const relevantClues = direction === 'across' ? clues.across : clues.down;

    for (const clue of relevantClues) {
      if (direction === 'across') {
        if (row === clue.row && col >= clue.col && col < clue.col + clue.answer.length) {
          // Highlight all cells in this across word
          for (let c = clue.col; c < clue.col + clue.answer.length; c++) {
            highlighted.add(`${row}-${c}`);
          }
          break;
        }
      } else {
        if (col === clue.col && row >= clue.row && row < clue.row + clue.answer.length) {
          // Highlight all cells in this down word
          for (let r = clue.row; r < clue.row + clue.answer.length; r++) {
            highlighted.add(`${r}-${col}`);
          }
          break;
        }
      }
    }

    return highlighted;
  };

  const highlightedCells = getHighlightedCells();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedCell) return;

      const { row, col } = selectedCell;

      if (e.key === 'Backspace') {
        e.preventDefault();
        onCellInput(row, col, '');
        return;
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        let newCol = col - 1;
        while (newCol >= 0 && grid[row][newCol] === '#') {
          newCol--;
        }
        if (newCol >= 0) {
          onCellClick(row, newCol);
        }
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        let newCol = col + 1;
        while (newCol < grid[0].length && grid[row][newCol] === '#') {
          newCol++;
        }
        if (newCol < grid[0].length) {
          onCellClick(row, newCol);
        }
        return;
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        let newRow = row - 1;
        while (newRow >= 0 && grid[newRow][col] === '#') {
          newRow--;
        }
        if (newRow >= 0) {
          onCellClick(newRow, col);
        }
        return;
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        let newRow = row + 1;
        while (newRow < grid.length && grid[newRow][col] === '#') {
          newRow++;
        }
        if (newRow < grid.length) {
          onCellClick(newRow, col);
        }
        return;
      }

      if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
        e.preventDefault();
        onCellInput(row, col, e.key.toUpperCase());

        // Auto-advance to next cell in current direction
        if (direction === 'across') {
          let newCol = col + 1;
          while (newCol < grid[0].length && grid[row][newCol] === '#') {
            newCol++;
          }
          if (newCol < grid[0].length) {
            onCellClick(row, newCol);
          }
        } else {
          let newRow = row + 1;
          while (newRow < grid.length && grid[newRow][col] === '#') {
            newRow++;
          }
          if (newRow < grid.length) {
            onCellClick(newRow, col);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCell, direction, grid, onCellClick, onCellInput]);

  const cellSize = 'w-10 h-10 sm:w-12 sm:h-12';

  return (
    <div ref={gridRef} className="inline-block mx-auto">
      <div className="grid gap-0 border-2 border-gray-900" style={{ gridTemplateColumns: `repeat(${grid[0].length}, minmax(0, 1fr))` }}>
        {grid.map((row, rowIdx) =>
          row.map((cell, colIdx) => {
            const key = `${rowIdx}-${colIdx}`;
            const isBlack = cell === '#';
            const isSelected = selectedCell?.row === rowIdx && selectedCell?.col === colIdx;
            const isHighlighted = highlightedCells.has(key);
            const number = numbers[rowIdx][colIdx];
            const userValue = userAnswers[key] || '';

            if (isBlack) {
              return (
                <div
                  key={key}
                  className={`${cellSize} bg-gray-900 border border-gray-900`}
                />
              );
            }

            return (
              <div
                key={key}
                className={`${cellSize} border border-gray-400 relative cursor-pointer transition-colors ${
                  isSelected
                    ? 'bg-yellow-300'
                    : isHighlighted
                    ? 'bg-yellow-100'
                    : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => onCellClick(rowIdx, colIdx)}
              >
                {number && (
                  <span className="absolute top-0 left-0.5 text-[10px] font-bold leading-none">
                    {number}
                  </span>
                )}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-xl font-semibold">
                    {userValue}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
