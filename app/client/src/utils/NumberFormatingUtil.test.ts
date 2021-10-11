import { getFormatedValue, deformatValue } from "./NumberFormatingUtil";

describe("Formating Number Test", () => {
  it("formating '0'", () => {
    const format = "0";
    const number = "1256";
    expect(getFormatedValue(format, number)).toEqual("1256");
  });
  it("formating '0.00'", () => {
    const format = "0.00";
    const number = "1256";
    expect(getFormatedValue(format, number)).toEqual("1256.00");
  });
  it("formating '#,##0'", () => {
    const format = "#,##0";
    const number = "1256";
    expect(getFormatedValue(format, number)).toEqual("1,256");
  });
  it("formating '#,##0.00'", () => {
    const format = "#,##0.00";
    const number = "1256";
    expect(getFormatedValue(format, number)).toEqual("1,256.00");
  });
  it("formating '0%'", () => {
    const format = "0%";
    const number = "1";
    expect(getFormatedValue(format, number)).toEqual("100%");
  });
  it("formating '0.00%'", () => {
    const format = "0.00%";
    const number = "1";
    expect(getFormatedValue(format, number)).toEqual("100.00%");
  });
  it("formating '#,##0_);(#,##0)' Positive", () => {
    const format = "#,##0_);(#,##0)";
    const number = "1256";
    expect(getFormatedValue(format, number)).toEqual("1,256");
  });
  it("formating '#,##0_);(#,##0)' Negative", () => {
    const format = "#,##0_);(#,##0)";
    const number = "-1256";
    expect(getFormatedValue(format, number)).toEqual("(1,256)");
  });
  it("formating '#,##0.00_);(#,##0.00)' Negative", () => {
    const format = "#,##0.00_);(#,##0.00)";
    const number = "-1256";
    expect(getFormatedValue(format, number)).toEqual("(1,256.00)");
  });
  it("formating '$#,##0_);($#,##0)'", () => {
    const format = "$#,##0_);($#,##0)";
    const number = "1256";
    expect(getFormatedValue(format, number)).toEqual("$1,256");
  });
});

describe("DeFormating number Test", () => {
  it("Deformating '0'", () => {
    const format = "0";
    const number = "1256";
    expect(deformatValue(format, number)).toEqual("1256");
  });
  it("Deformating '0.00'", () => {
    const format = "0.00";
    const number = "1256.00";
    expect(deformatValue(format, number)).toEqual("1256");
  });
  it("Deformating '#,##0'", () => {
    const format = "#,##0";
    const number = "1,256";
    expect(deformatValue(format, number)).toEqual("1256");
  });
  it("Deformating '#,##0.00'", () => {
    const format = "#,##0.00";
    const number = "1,256.00";
    expect(deformatValue(format, number)).toEqual("1256");
  });
  it("Deformating '0%'", () => {
    const format = "0%";
    const number = "100%";
    expect(deformatValue(format, number)).toEqual("1");
  });
  it("Deformating '0.00%'", () => {
    const format = "0.00%";
    const number = "100.00%";
    expect(deformatValue(format, number)).toEqual("1");
  });
  it("Deformating '#,##0_);(#,##0)' Positive", () => {
    const format = "#,##0_);(#,##0)";
    const number = "1,256";
    expect(deformatValue(format, number)).toEqual("1256");
  });
  it("Deformating '#,##0_);(#,##0)' Negative", () => {
    const format = "#,##0_);(#,##0)";
    const number = "(1,256)";
    expect(deformatValue(format, number)).toEqual("-1256");
  });
  it("Deformating '#,##0.00_);(#,##0.00)' Negative", () => {
    const format = "#,##0.00_);(#,##0.00)";
    const number = "(1,256.00)";
    expect(deformatValue(format, number)).toEqual("-1256");
  });
  it("Deformating '$#,##0_);($#,##0)'", () => {
    const format = "$#,##0_);($#,##0)";
    const number = "$1,256";
    expect(deformatValue(format, number)).toEqual("1256");
  });
});
