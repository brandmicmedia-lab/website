interface Clue {
  number: number;
  clue: string;
  answer: string;
  row: number;
  col: number;
}

interface ClueListProps {
  clues: Clue[];
  direction: 'across' | 'down';
  selectedCell: { row: number; col: number } | null;
  onClueClick: (row: number, col: number) => void;
}

export function ClueList({ clues, direction, selectedCell, onClueClick }: ClueListProps) {
  const isClueSelected = (clue: Clue) => {
    if (!selectedCell) return false;

    if (direction === 'across') {
      return (
        selectedCell.row === clue.row &&
        selectedCell.col >= clue.col &&
        selectedCell.col < clue.col + clue.answer.length
      );
    } else {
      return (
        selectedCell.col === clue.col &&
        selectedCell.row >= clue.row &&
        selectedCell.row < clue.row + clue.answer.length
      );
    }
  };

  return (
    <div className="space-y-2 max-h-[500px] overflow-y-auto">
      {clues.map((clue) => (
        <div
          key={clue.number}
          className={`p-3 rounded-lg cursor-pointer transition-colors ${
            isClueSelected(clue)
              ? 'bg-yellow-200 border-2 border-yellow-400'
              : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
          }`}
          onClick={() => onClueClick(clue.row, clue.col)}
        >
          <div className="flex gap-2">
            <span className="font-bold text-gray-700 min-w-[2rem]">{clue.number}.</span>
            <span className="text-gray-900">{clue.clue}</span>
          </div>
          <div className="ml-8 text-xs text-gray-500 mt-1">
            ({clue.answer.length} letters)
          </div>
        </div>
      ))}
    </div>
  );
}
