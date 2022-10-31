import QuoteBody from "./QuoteBody";
import QuoteCss from "./Quotess.css";

import QuoteScore from "./QuoteScore";

export default function Quote({ props, updateScr }) {
  return (
    <div className="quoteContainer">
      <QuoteScore data={props} setScr={updateScr} />
      <QuoteBody data={props} />
    </div>
  );
}
