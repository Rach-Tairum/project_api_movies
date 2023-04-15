import { body } from "express-validator";

export const movieCreateValidation = () => {
  return [
    body("title")
      .isString()
      .withMessage('O titulo é obrigatório')
      .isLength({ min: 5})
      .withMessage('O titulo deve ter no minimo 5 caractéries'),
    body("rating")
      .isNumeric()
      .withMessage('A nota precisa ser um número')
      .custom((value: number) => {
        if (value < 0 || value > 10) {
          throw new Error("A nota precisa ser de 0 a 10")
        }
        return true
      }),
      body("description")
        .isString()
        .withMessage('A descrição é obrigatória')
        .isLength({ min: 5})
        .withMessage('A descrição deve ter no minimo 5 caractéries'),
      body("director")
        .isString()
        .withMessage('O nome do diretor é obrigatório'),
      body("poster")
        .isURL()
        .withMessage('A imagem precisa ser uma URL'),
  ]
}