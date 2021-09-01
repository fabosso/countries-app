export interface SearchType {
  type: string;
  value: string;
  handleChange: (text: string) => void;
}

export interface useFieldType extends SearchType {
  resetSearchValue: () => void;
}
