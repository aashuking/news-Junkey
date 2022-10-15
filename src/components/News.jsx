import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      totalResults:0
    };
  }
  capital(String) {
    return String.charAt(0).toUpperCase() + String.slice(1);
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3d79d674ae1a4c8da8165d77842ab566&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);

    let parsedata = await data.json();
    this.setState({ articles: parsedata.articles, loading: false, totalResults: parsedata.totalResults });
  }
  async componentDidMount() {
    this.updateNews();
  }
  handlenext = async () => {
    console.log("next");
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  handleprev = async () => {
    // console.log("prev");
    // let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&apiKey=3d79d674ae1a4c8da8165d77842ab566&page=${
    //   this.state.page -1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);

    // let parsedata = await data.json();
    // this.setState({ page: this.state.page-1,articles: parsedata.articles,loading:false });
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  fetchMoreData= async()=>{
    this.setState({ page: this.state.page +1 });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3d79d674ae1a4c8da8165d77842ab566&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);

    let parsedata = await data.json();
    this.setState({ articles:this.state.articles.concat( parsedata.articles), loading: false, totalResults: parsedata.totalResults });

  }
  render() {
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-md-5 m-auto">
            <h2>NEWS JUNKEY-{this.capital(this.props.category)}</h2>
          </div>
        </div>
        {this.state.loading && <Spinner></Spinner>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!= this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
          {!this.state.loading && (
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4">
                    <Newsitem
                      title={element.title}
                      description={element.description}
                      url={element.url}
                      urlToImage={element.urlToImage}
                      author={element.author}
                      date={element.publishedAt}
                    ></Newsitem>
                  </div>
                );
              })}
            </div>
          )}
          </div>
        </InfiniteScroll>
        
      </div>
    );
  }
}
