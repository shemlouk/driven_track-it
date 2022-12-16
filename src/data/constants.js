export const apiURL = {
  signup:
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
  login:
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
  today:
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
  record:
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily",
  habit: (id) =>
    `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
  check: (id) =>
    `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
  uncheck: (id) =>
    `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
};
