import { ContentWrapper } from '../utils/types';

const Container = (props: ContentWrapper) => {
	return <div className='bg-violet-400 px-40'>{props.children}</div>;
};

export default Container;
