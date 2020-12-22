export const parseResponses = (responses) => {
  console.log({ responses });
  return responses.map((response) => response.split('')).reduce((allAnswers, answers) => ({
    ...allAnswers,
    ...answers.reduce((questions, question) => ({
      ...questions,
      [question]: 1 + (allAnswers[question] || 0),
    }), {}),
  }), {});
};

export const parseAllResponses = (responses) => {
  // return responses.map(parseResponses).reduce((allResponses, responses) => {
  //   return Object.entries(responses).reduce((theseResponses, [key, count]) => ({
  //     ...theseResponses,
  //     [key]: count + (theseResponses[key] || 0),
  //   }), allResponses);
  // }, {});

  return responses.map(parseResponses);
};

export default parseAllResponses;