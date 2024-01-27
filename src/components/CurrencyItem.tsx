import { Currency } from "../types";

const CurrencyItem = ({
  currency,
  onClick,
  isSelected,
}: {
  currency: Currency;
  onClick: () => void;
  isSelected: boolean;
}) => {
  const handleCheckboxChange = () => {
    onClick();
  };

  return (
    <div data-testid="currency-item" onClick={onClick} className="currency">
      <label>
        <input onChange={handleCheckboxChange} checked={isSelected} type="checkbox" />
        <span className="checkbox-container"></span>
      </label>
      <span>{currency.name}</span>
    </div>
  );
};

export default CurrencyItem;
