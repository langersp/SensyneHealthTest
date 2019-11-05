import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class NHSArticles extends Component {
    render() {
        const data = this.props.articles;
        return (
           <div>                  
            { data }            
           </div>
        );
    }
}

NHSArticles.propTypes = {
    articles: PropTypes.object   
};

export default NHSArticles;