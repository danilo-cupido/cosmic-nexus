import { ContentWrapper } from '../utils/types';

const Container = (props: ContentWrapper) => {
	return <div className='lg:px-40 md:px-24 px-20'>{props.children}</div>;
};

export default Container;
