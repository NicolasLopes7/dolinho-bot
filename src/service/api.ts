import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wise.com',
});

export const getUSD = async () => {
  const {
    data: { paymentOptions },
  } = await api.post('/gateway/v3/quotes/', {
    sourceAmount: 1000,
    sourceCurrency: 'BRL',
    targetCurrency: 'USD',
    preferredPayIn: 'BANK_TRANSFER',
    guaranteedTargetAmount: false,
    type: 'REGULAR',
  });

  return 1000 / paymentOptions[0].targetAmount;
};
