export const Catalogs = {
  catTerm: [
    {
      value: 1,
      label: "7 días",
      rate: 10.06,
      periodYear: 1,
      catView: [1, 3],
      contributions: 0,
    },
    {
      value: 2,
      label: "1 mes",
      rate: 11.09,
      periodYear: 1,
      catView: [3],
      contributions: 1,
    },
    {
      value: 3,
      label: "3 meses",
      rate: 12.09,
      periodYear: 1,
      catView: [2, 3],
      contributions: 3,
    },
    {
      value: 4,
      label: "6 meses",
      rate: 12.29,
      periodYear: 1,
      catView: [2, 3],
      contributions: 6,
    },
    {
      value: 5,
      label: "12 meses",
      rate: 14.09,
      periodYear: 1,
      catView: [2, 3],
      contributions: 12,
    },
    {
      value: 6,
      label: "2 años",
      rate: 14.55,
      periodYear: 2,
      catView: [2, 3],
      contributions: 24,
    },
    {
      value: 7,
      label: "3 años",
      rate: 15.01,
      periodYear: 3,
      catView: [2, 3],
      contributions: 36,
    },
    {
      value: 8,
      label: "4 años",
      rate: 13.25,
      periodYear: 4,
      catView: [2, 3],
      contributions: 48,
    },
    {
      value: 9,
      label: "5 años",
      rate: 12.75,
      periodYear: 5,
      catView: [2, 3],
      contributions: 60,
    },
  ],
  catPaymentType: [
    {
      keyOptionCat: 1,
      value: 1,
      label: "Semanal",
      alertLabel: "El interés semanal solo aplica para inversiones a 7 días",
      paymentType: 52,
    },
    {
      keyOptionCat: 2,
      value: 2,
      label: "Mensual",
      alertLabel:
        "Si consideras sólo los intereses del monto inicial, no podrías realizar interés compuesto debido a que el monto mínimo de inversión es de $100, sin embargo si realizas inversiones recurrentes por $100 o más, estarías generando interés compuesto por un monto mayor al calculado inicialmente",
      paymentType: 12,
    },
    {
      keyOptionCat: 3,
      value: 3,
      label: "Al vencimiento",
      alertLabel:
        "Con pago de intereses al vencimiento no es posible calcular interés compuesto",
      paymentType: 1,
    },
  ],
  catCompositeLegend: [
    {
      value: 1,
      key: "Si aplica",
      label:
        "Considerando sólo los rendimientos mensuales de tu inversión, podrías generar nuevas inversiones para realizar interés compuesto",
    },
    {
      value: 2,
      key: "No aplica",
      label:
        "Si consideras sólo los intereses del monto inicial, no podrías realizar interés compuesto debido a que el monto mínimo de inversión es de $100, sin embargo si realizas inversiones recurrentes por $100 o más, estarías generando interés compuesto por un monto mayor al calculado inicialmente",
    },
  ],
};
