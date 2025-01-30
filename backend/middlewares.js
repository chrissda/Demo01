import JWT from "jsonwebtoken";
import { connection } from "./connection.js";

export const validUser = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(403).json({
      message: 'Se necesita token.'
    });
  };
  const token = authorization.split(" ")[1];
  
  if(!token) {
    return res.status(403).json({
      message: 'Token no válido. Debe ser de la forma Bearer token.',
    });
  }
  const payload = JWT.verify(token, process.env.SECRET_KEY);
  const userFinded = await connection.usuario.findUniqueOrThrow({
    where: {
      id: payload.userId,
    },
  });
  req.user = userFinded;
  next();
};

export const validarAdmin = async (req, res, next) => {
  if (req.user.tipoUsuario === TipoUsuario.ADMIN) {
    next()
  } else {
    return res.json({
      message: `El usuario tiene que ser ${TipoUsuario.ADMIN} para realizar esta accion`
    });
  }
};

export const onlyAdmin = async (req, res, next) => {
   console.log(req.header.cookie)
};