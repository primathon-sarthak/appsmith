export const deformatValue = (format: string, value: string) => {
  if (value) {
    let VALUE = value;
    switch (format) {
      case "0%":
        VALUE = "" + +VALUE.replace(/[^0-9\.]+/g, "") / 100;
        break;
      case "0.00%":
        VALUE = "" + +VALUE.replace(/[^0-9\.]+/g, "") / 100;
        break;
      default:
        VALUE = value.replace(/,/g, "");
        if (isNaN(parseFloat(VALUE))) {
          VALUE = "-" + VALUE.replace(/[^0-9\.]+/g, "");
        }
        break;
    }
    return "" + parseFloat(VALUE);
  }
  return value;
};

export const getFormatedValue = (formatType: string, value: string) => {
  if (value) {
    const IntegerValue = Math.trunc(+value);
    const twoDecimalValue = +parseFloat(value);
    switch (formatType) {
      case "0":
        return `${IntegerValue}`;
      case "0.00":
        return `${twoDecimalValue
          .toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
          .replace(/,/g, "")}`;
      case "#,##0":
        return `${IntegerValue.toLocaleString("en-US")}`;
      case "#,##0.00":
        return `${twoDecimalValue.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`;
      case "0%":
        return `${IntegerValue * 100}%`;
      case "0.00%":
        return `${(twoDecimalValue * 100).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}%`;
      case "#,##0_);(#,##0)":
        if (+value < 0) {
          return `(${(0 - IntegerValue).toLocaleString("en-US")})`;
        }
        return `${IntegerValue.toLocaleString("en-US")}`;
      case "#,##0.00_);(#,##0.00)":
        if (+value < 0) {
          return `(${(0 - twoDecimalValue).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })})`;
        }
        return `${twoDecimalValue.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`;
      case "$#,##0_);($#,##0)":
        if (+value < 0) {
          return `($${(0 - twoDecimalValue).toLocaleString("en-US")})`;
        }
        return `$${twoDecimalValue.toLocaleString("en-US")}`;
      default:
        break;
    }
  }
  return value;
};
