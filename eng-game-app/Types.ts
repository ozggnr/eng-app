export type Document = {
  id: string;
  lines: String[];
  date: string;
};

export type Word = {
  id: string;
  word: string;
  cdefinition: string;
  ddefinition: string;
  synonyms: Word[];
  example: string;
};
