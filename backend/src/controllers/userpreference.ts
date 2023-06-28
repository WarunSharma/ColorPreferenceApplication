import { Request, Response } from 'express';
import UserPreference, { IUserPreference } from '../models/userPpreference';

const createOrUpdateUserPreference = async (req: Request, res: Response): Promise<void> => {
  try {
    const userPreference: IUserPreference | null = await UserPreference.findOneAndUpdate(
      { username: req.body.username },
      req.body,
      { new: true, upsert: true }
    );
    res.status(201).json(userPreference);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getUserPreference = async (req: Request, res: Response): Promise<void> => {
  try {
    const userPreference: IUserPreference | null = await UserPreference.findOne({ username: req.params.username });
    res.status(200).json(userPreference);
  } catch (err) {
    res.status(500).json(err);
  }
};

export { createOrUpdateUserPreference, getUserPreference };