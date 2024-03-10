import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = { ...budget };
  fullBudget.getIncomeInDollars = (income) => `$${income}`;
  fullBudget.getIncomeInEuros = (income) => `${income} euros`;

  return fullBudget;
}
