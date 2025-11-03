import { formatNumber } from "../utils/formatNumber";

interface Props {
  value: string;
  history?: string;
  message?: string | null;
}

const Display: React.FC<Props> = ({ value, history, message }) => {
  return (
    <div className="display">
      <div className="history">{history ?? ""}</div>
      <div className="value">{formatNumber(value)}</div>
      {message && (
        <div
          className="display-message"
          style={{
            color: "#ff8a00",
            fontSize: 14,
            marginTop: 6,
            minHeight: 18,
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Display;
