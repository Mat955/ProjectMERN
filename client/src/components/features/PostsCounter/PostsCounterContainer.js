import { connect } from 'react-redux';
import { getPosts, getNumberOfPosts, loadPostsRequest } from '../../../redux/postsRedux';
import PostsCounter from './PostsCounter';

const mapStateToProps = state => ({
    posts: getPosts(state),
    numberOfPosts: getNumberOfPosts(state),
})

const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch(loadPostsRequest()),

});

export default connect(mapStateToProps, mapDispatchToProps)(PostsCounter);
