// A thin sheet border with corner registration marks, fixed to the
// viewport — the whole page reads as one drafting sheet, not a
// per-section decoration.
export default function BlueprintFrame() {
  return (
    <div className="sheet-frame hidden sm:block" aria-hidden="true">
      <span className="sheet-corner sheet-corner--tl" />
      <span className="sheet-corner sheet-corner--tr" />
      <span className="sheet-corner sheet-corner--bl" />
      <span className="sheet-corner sheet-corner--br" />
    </div>
  )
}
