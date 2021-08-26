// Data access layer goes here
// Feel free to use any approach you'd like to connect to the database & query

type Dog = {
  url: String,
  caption: String,
};

export const getDogs = async () => {
  return [] as Dog[];
};
export interface DisplayableDog {
  url: String;
  caption: String;
  type: String;
}