/*
Извлекает токен из заголовка и:
1. Проверяет валидность токена (то есть что мы его выдали и он не истек)
2. Извлекает из токена id, находит пользователя в базе по id и прикрепляет его к запросу (req.user) 
*/

/*
1. Извлечь из заголовков запроса содержимое заголовка Autorization
2. Разделить на 2 части: bearer и токен
3. Проверить равно ли первое слово "Bearer"
4. Проверить второе слово на валидность (токен)
5. Если токен валиден - извлечь из него id пользователя и найти пользователя с таким id.
6. Если пользователя с таким d мы нашли в базе - его нужно прикрепить к запросу (обьект req)
*/

const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const { User } = require("../models");

const authMiddleware = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    throw new Unauthorized("Not authorized");
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user) {
      throw new Unauthorized("Not authorized");
    }
    req.user = user;
    next();
  } catch (error) {
    if ((error.message = "Invalid sugnature")) {
      error.status = 401;
    }
    next(error);
  }
};

module.exports = authMiddleware;
