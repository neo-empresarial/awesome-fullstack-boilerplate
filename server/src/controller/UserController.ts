import { getConnection, getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";


export function all(request: Request, response: Response, next: NextFunction) {
  return getConnection().getRepository(User).find();
}

export function one(request: Request, response: Response, next: NextFunction) {
  return getConnection().getRepository(User).findOne(request.params.id);
}

export function save(request: Request, response: Response, next: NextFunction) {
  return getConnection().getRepository(User).save(request.body);
}

export function remove(request: Request, response: Response, next: NextFunction) {
  // let userToRemove =  getConnection().getRepository(User).findOne(request.params.id);
  // return getConnection().getRepository(User).remove(userToRemove);
  }

