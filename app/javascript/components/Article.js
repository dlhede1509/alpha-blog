import React from "react"
import PropTypes from "prop-types"
class Article extends React.Component {
  render () {
    return (
      <React.Fragment>
      <div class="article-path">
        <a href={this.props.title}>{this.props.title}</a>
      </div>
     <div class="article-body">
         {this.props.description}
     </div>
      </React.Fragment>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
  description: PropTypes.string 
};
export default Article
