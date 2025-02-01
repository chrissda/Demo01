import {
  regUserSerializer,
  loginUserSerializer,
  updateUserSerializer } from './serializers/user_serializer.js';
import { genSalt, hash, compare } from 'bcrypt';
import { connection } from '../connection.js';
import JWT from "jsonwebtoken";

export const regUser = async (req, res) => {
  const data = req.body;
  const dataValidada = regUserSerializer.parse(data); // Validando datos
  console.log(dataValidada);  
  const salt = await genSalt();
  const password = await hash(dataValidada.password, salt);
  const newUser = await connection.usuario.create({
    data: {
      nombre: dataValidada.nombre,
      apellido: dataValidada.apellido,
      email: dataValidada.email,
      password: password,
      typeUser: dataValidada.typeUser,
    },
    select: {
      id: true,
      nombre: true,
      apellido: true,
      email: true,
      typeUser: true,
    },
  });
  return res.json({
    message: 'Usuario registrado exitosamente',
    data: newUser,
  });
};

export const regUserClient = async (req, res) => { // Para solo registrar CLIENTE
  console.log("Datos recibidos:", req.body);
  const data = req.body;
  const dataUser = regUserSerializer.parse({
    ...data,
    typeUser: "CLIENTE", // Forzar que ingrese como CLIENTE
  });
  console.log(dataUser)
  const salt = await genSalt();
  const password = await hash(dataUser.password, salt);
  const newClient = await connection.usuario.create({
    data: {
      nombre: dataUser.nombre,
      apellido: dataUser.apellido,
      email: dataUser.email,
      password: password,
      typeUser: "CLIENTE",
    },
    select: {
      id: true,
      nombre: true,
      apellido: true,
      email: true,
      typeUser: true,
    },
  });
  return res.json({
    message: 'Usuario registrado exitosamente',
    data: newClient,
  });
};

export const loginUser = async (req, res) => {
  const dataValidada = loginUserSerializer.parse(req.body);
  const userFinded = await connection.usuario.findUniqueOrThrow({
    where: {
      email: dataValidada.email,
    },
  });
  const validPassword = await compare(dataValidada.password, userFinded.password);
  console.log(validPassword)
  if (validPassword) {
    const token = JWT.sign(
      { userId: userFinded.id },
      process.env.SECRET_KEY,
      { expiresIn: '1h' }
    );
    
    return res.json({
      // Mensaje de bienvenida nombre y apellido
      message: `Bienvenido ${userFinded.nombre} ${userFinded.apellido}.`,
      message1: userFinded.email,
      content: token,
      typeUser: userFinded.typeUser,

    });
  } else {
    return res.status(403).json({
      message: 'Contraseña incorrecta.'
    });
  };
};

export const updateUser = async (req, res) => {
  console.log(req.user);
  const dataValidada = updateUserSerializer.parse(req.body);
  const userUpdated = await connection.usuario.update({
    data : dataValidada,
    select: {
      id: true,
      nombre: true,
      apellido: true,
      email: true,
      typeUser: true,
    },
    where: {
      id: req.user.id,
    },
  });
  return res.json({
    message: 'Usuario actualizado.',
    content: userUpdated,
  });
};

export const viewUsers = async (req, res) => {
  try {
    const allUsers = await connection.usuario.findMany({
      select: {
        id: true,
        nombre: true,
        apellido: true,
        email: true,
        typeUser: true,
      }
    });
    return res.json({
      message: "Mostrando todos los usuarios de la BD.",
      content: allUsers,
    })
  } catch {
    console.error(error);
    return res.status(500).json({
      message: "No se puedo mostrar los usuarios."
    });
  }
};