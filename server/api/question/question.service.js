const pool = require("../../config/database");

module.exports = {
  //data comes form the user controller
  askQuestion: (data, callback) => {
    //inserting data to registration table
    pool.query(
      `INSERT INTO question(user_id, title, question,time )VALUES(?,?,?,?)`,
      // ? it is hold  it help sql injections
      [data.user_id, data.title, data.question, data.time],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  getQuestions: (callback) => {
    //getting the question list by user_id
    pool.query(
      `SELECT question.question_id, registration.user_id, registration.user_name, question.title, question.question, question.time  FROM question LEFT OUTER JOIN registration ON question.user_id = registration.user_id`,
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  getquestionbyid: (question_id, callback) => {
    //getting the question list by user_id
    pool.query(
      `SELECT question.question_id, registration.user_id, registration.user_name, question.title, question.question, question.time  FROM question LEFT OUTER JOIN registration ON question.user_id = registration.user_id where question_id = ?`,
      [question_id],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
};
