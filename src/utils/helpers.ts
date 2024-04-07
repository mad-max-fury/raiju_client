import { ITransactions } from "../mocks/transactions";
import { SelectOption } from "../uiElements/select";

function generateRandomHex() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function lightenDarkenColor(col: string, amt: number) {
  var usePound = false;
  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }
  var num = parseInt(col, 16);
  var r = (num >> 16) + amt;
  if (r > 255) r = 255;
  else if (r < 0) r = 0;
  var b = ((num >> 8) & 0x00ff) + amt;
  if (b > 255) b = 255;
  else if (b < 0) b = 0;
  var g = (num & 0x0000ff) + amt;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;
  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

export function formatCurrency(
  amount: number,
  withTrailingZeros: boolean = false,
  currencySymbol: string = "₦",
  locale: string = "en-US"
): string {
  const formatted = `${currencySymbol}${amount.toLocaleString(locale, {
    style: "currency",
    currency: "NGN", // Using "NGN" as currency code
  })}`;
  return withTrailingZeros
    ? formatted.replace(/NGN/, "")
    : formatted.replace(/\.00$/, "").replace(/NGN/, "");
}

export function reduceToSelectOptions(
  transactions: ITransactions,
  propertyName: string
): SelectOption[] {
  const selectOptions: SelectOption[] = transactions.reduce(
    (options: SelectOption[], transaction) => {
      // @ts-expect-error
      const value = transaction[propertyName];
      if (!options.some((option) => option.value === value)) {
        options.push({ value, label: value });
      }
      return options;
    },
    []
  );

  return selectOptions;
}
export function generateColors() {
  const background = generateRandomHex();
  const color = lightenDarkenColor(background, 60); // Lighten background color for text
  return { background, color };
}

interface ObjectInterface {
  [key: string]: any;
}

export function purifyArray(arr: ObjectInterface[]): ObjectInterface[] {
  let dic: ObjectInterface = {};
  for (let i = 0; i < arr.length; i++) {
    const keys = Object.keys(arr[i]);
    const id = arr[i][keys[0]];
    if (dic[keys[0]] !== undefined) {
      dic[id] = arr[i];
    } else {
      dic = { ...dic, [id]: arr[i] };
    }
  }
  return Object.values(dic);
}
