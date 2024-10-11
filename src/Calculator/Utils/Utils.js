//Propósito: Formatear un número como una moneda en pesos mexicanos (MXN).
export const formatNumber = (num) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(num);
  };

//rate: La tasa de interés por periodo.
// nper: El número total de periodos.
// pmt: El pago periódico realizado en cada periodo (puede ser positivo o negativo).
// pv: El valor presente (o inicial) de la inversión.
// type: Define cuándo se realiza el pago:
// 0: Al final del periodo.
// 1: Al principio del periodo.

//Propósito: Calcular el valor futuro de una serie de pagos o una inversión.
  export const calculateFutureValue = (rate, nper, pmt, pv, type) => {
    if (rate === 0) return -(pv + pmt * nper);
    const pow = Math.pow(1 + rate, nper);
    return pv * pow + (pmt * (1 + rate * type) * (pow - 1)) / rate;
  };

