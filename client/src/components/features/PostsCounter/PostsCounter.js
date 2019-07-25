import React from 'react';

class PostsCounter extends React.Component {

    componentDidMount() {
        const { loadPosts } = this.props;
        loadPosts();
    }

    render() {
        const { numberOfPosts } = this.props;

        return (
            <div>
                <h2>
                    {numberOfPosts > 0 ? 'Posts amount: ' + numberOfPosts : 'No Posts'}
                </h2>
            </div>
        );
    }
};

export default PostsCounter;