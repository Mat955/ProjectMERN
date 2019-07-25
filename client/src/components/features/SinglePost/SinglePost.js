import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';

class SinglePost extends React.Component {

    componentDidMount() {
        const { loadPost } = this.props;
        loadPost();
    }

    render() {
        const { request, post } = this.props;

        if (request.pending === false && request.success === true && post !== undefined) {
            return (
                <div>
                    <article className="post-summary">
                        <HtmlBox>{post.content}</HtmlBox>
                    </article>
                </div>
            );
        } else if (request.pending === true && request.success === null) {
            return (
                <div>
                    <Spinner />
                </div>
            );
        } else if (request.pending === false && request.error != null) {
            return (
                <div>
                    <Alert variant="error">{request.error}</Alert>
                </div>
            );
        } else if (request.pending === false && request.success === true) {
            return (
                <div>
                    <Alert variant="info">No posts</Alert>
                </div>
            );
        } else if (request.pending === false && request.success === true && post === undefined) {
            return (
                <div>
                    <Spinner />
                </div>
            );
        } else {
            return (
                <div>
                    <Alert variant="info">Something went wrong...</Alert>
                </div>
            );
        }
    }
};

SinglePost.propTypes = {
    post: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ),
    loadPost: PropTypes.func.isRequired,
};

export default SinglePost;