import { requestSearch } from '../../redux/search-reducer';
import { connect } from "react-redux";
import { Input, Spin } from 'antd';
import SearchResult from "./SearchResult";
const { Search } = Input;


const SearchContainer = ({requestSearch, searchResponse, isFetching}) => {

  const onSearch = value =>{
  if (value) {
    requestSearch(value)
  } ;}

  return <div>
    <Search style={{ marginBottom: '50px' }}
      placeholder="search movie"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    {isFetching && <Spin size={"large"} />}
    {searchResponse ? <SearchResult movies={searchResponse} /> : null}
  </div>
}

const mapStateToProps = (state) => ({
  searchResponse: state.searchPage.searchResponse,
  isFetching: state.searchPage.isFetching
})

export default connect(mapStateToProps, {requestSearch })(SearchContainer)