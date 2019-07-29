import { connect } from 'react-redux';
import { getPosts, loadPostsRequest, getNumberOfPosts, getRequest } from '../../../redux/postsRedux';
import Posts from './Posts';

const mapStateToProps = state => ({
    posts: getPosts(state),
    request: getRequest(state),
    numberOfPosts: getNumberOfPosts(state)
})

const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch(loadPostsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);