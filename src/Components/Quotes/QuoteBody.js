import "./QuoteBody.css";
import "./Quote.css";
export default function QuoteBody({ data }) {
  return (
    <div className="quoteBody">
      <p>{data.content}</p>
      <p className="author">--{data.author.toUpperCase()}</p>
    </div>
  );
}
