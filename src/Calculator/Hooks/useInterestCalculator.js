import { useState, useEffect } from "react";
import { calculateFutureValue, formatNumber } from "../Utils/Utils";
import { Catalogs } from "../models/catalog";

export const useInterestCalculator = () => {
  // Estado para los valores del formulario
  const [formValues, setFormValues] = useState({
    startingAmount: "",
    Term: "",
    PaymentType: "",
    NumberOfPayments: "",
  });

  // Estado para almacenar el resultado del cálculo
  const [result, setResult] = useState(null);

  // Función para manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Función para calcular los datos
  const calculateData = () => {
    const startingAmount = parseFloat(formValues.startingAmount) || 0;
    const numberOfPayments = parseFloat(formValues.NumberOfPayments) || 0;

    // Buscar el término seleccionado en el catálogo
    const term = Catalogs.catTerm.find(
      (t) => t.value === parseInt(formValues.Term, 10)
    );
    if (!term) {
      return { futureValue: "N/A", interestGenerated: "N/A" };
    }
    // Buscar el tipo de pago seleccionado en el catálogo
    const paymentType = Catalogs.catPaymentType.find(
      (p) => p.value === parseInt(formValues.PaymentType, 10)
    );
    if (!paymentType || paymentType.value === 3) {
      return { futureValue: "N/A", interestGenerated: "N/A" };
    }

    // Cálculos para el valor futuro
    const annualInterestRate = term.rate;
    const numberAplique = paymentType.paymentType;
    const numberYears = term.periodYear;
    const ratePerPeriod = annualInterestRate / 100 / numberAplique;
    const totalPeriods = numberAplique * numberYears;

    // **Cálculo Final del Valor Futuro y los Intereses Generados**
    const futureValue = Math.abs(
      calculateFutureValue(
        ratePerPeriod,
        totalPeriods,
        formValues.Term !== "1" ? -numberOfPayments : 0,
        -startingAmount,
        1
      )
    );


    const interestGenerated = Math.abs(
      futureValue -
        startingAmount -
        (formValues.Term !== "1" ? numberOfPayments * totalPeriods : 0)
    );

    return {
      futureValue: formatNumber(futureValue),
      interestGenerated: formatNumber(interestGenerated),
    };
  };

   // Efecto que recalcula los datos cuando cambian los valores del formulario
  useEffect(() => {
    if (
      formValues.startingAmount &&
      formValues.Term &&
      formValues.PaymentType
    ) {
      setResult(calculateData());
    } else {
      setResult(null);
    }
  }, [formValues]);
// Retornar los valores necesarios para el componente que use este hook
  return { formValues, handleChange, result };
};
