import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

export type Profile = {
  id?: string;
  name?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
};
