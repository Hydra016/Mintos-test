import { useEffect, useState } from "react";
import { currencies } from "../constants";
import { Currency } from "../types";
import CurrencyItem from "./CurrencyItem";

const CurrencySelector = () => {
  const initialSelected = () => {
    const storedCurrencies = sessionStorage.getItem("currencies");
    return storedCurrencies ? JSON.parse(storedCurrencies) : [];
  };

  const [selected, setSelected] = useState<Currency[]>(initialSelected);

  const handleCurrencyToggle = (currency: Currency) => {
    const isSelected = selected.some(
      (selectedCurrency) => selectedCurrency.name === currency.name
    );

    if (isSelected) {
      setSelected((prevSelected) =>
        prevSelected.filter(
          (selectedCurrency) => selectedCurrency.name !== currency.name
        )
      );
    } else {
      setSelected((prevSelected) => [...prevSelected, currency]);
    }
  };

  useEffect(() => {
    sessionStorage.setItem("currencies", JSON.stringify(selected));
  }, [selected]);

  return (
    <div className="currency-selector">
      <div className="selected-currencies currency-items">
        {selected.length > 0 ? (
          selected.map((currency: Currency, index: number) => (
            <div
              data-testid="selected-currency"
              key={index}
              className="selected-currency currency"
            >
              <span>{currency.name}</span>
              <button
                className="unselect-currency"
                onClick={() => handleCurrencyToggle(currency)}
              >
                x
              </button>
            </div>
          ))
        ) : (
          <div data-testid="no-selected-currencies" className="no-currencies">
            No selected currencies
          </div>
        )}
      </div>
      <div className="currency-items">
        {currencies.map((currency: Currency, index: number) => (
          <CurrencyItem
            data-testid={`currency-item-${index}`}
            key={index}
            currency={currency}
            onClick={() => handleCurrencyToggle(currency)}
            isSelected={selected.some(
              (selectedCurrency) => selectedCurrency.name === currency.name
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrencySelector;
