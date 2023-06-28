import { Request, Response } from 'express';
import UserPreference from '../models/userPpreference';
import { AnyArray } from 'mongoose';

const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    let users: any = await UserPreference.find({});
    users = users.map((user: any)=> user.username);
    users.unshift("");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

export { getUsers };