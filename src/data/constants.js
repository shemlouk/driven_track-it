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

export const messages = {
  habits: {
    default:
      "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!",
  },
  today: {
    default: "Nenhum hábito concluído ainda",
    progress: (num) => `${num}% dos hábitos concluídos`,
  },
  record: {
    default: "Em breve você poderá ver o histórico dos seus hábitos aqui!",
  },
};

export const weekdays = {
  0: "Domingo",
  1: "Segunda",
  2: "Terça",
  3: "Quarta",
  4: "Quinta",
  5: "Sexta",
  6: "Sábado",
};
