import CurrencyItem from "../components/CurrencyItem";
import CurrencySelector from "../components/CurrencySelector";
import { currencies } from "../constants";
import { fireEvent, getByTestId, render } from "@testing-library/react";

describe(CurrencyItem, () => {
  it("all currencies are displayed", () => {
    const { getByTestId } = render(
      <CurrencyItem
        key={1}
        currency={currencies[0]}
        onClick={() => () => {
          console.log("test");
        }}
        isSelected={true}
      />
    );
    const currencyItem = getByTestId("currency-item").textContent;
    expect(currencyItem).toBe("EUR");
  });
  it("check if there are no selected currencies", () => {
    const { getByTestId: getByTestId2 } = render(
        <CurrencySelector />
      );
    
    const selectItem = getByTestId2("no-selected-currencies").textContent
    expect(selectItem).toBe("No selected currencies");
  });

//   it("adds currency to select list", () => {
//     const handleCurrencyToggle = jest.fn()
//     const { getByTestId: getByTestId2 } = render(
//         <CurrencySelector />
//       );
//     const { getByTestId } = render(
//       <CurrencyItem
//         key={1}
//         currency={currencies[0]}
//         onClick={() => () => {
//           handleCurrencyToggle();
//         }}
//         isSelected={true}
//       />
//     );
    
//     const currencyItem = getByTestId("currency-item");
//     fireEvent.click(currencyItem);

//     const selectItem = getByTestId2("selected-currency").textContent
//     expect(selectItem).toBe("No selected currencies");
//   });
});
