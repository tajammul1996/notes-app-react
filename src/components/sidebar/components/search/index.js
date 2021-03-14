import { Input } from "antd";

const Search = ({onChange}) => {
  return (
    <Input
      placeholder="search title"
      onChange={onChange}
    />
  );
};

export default Search;
