//Remove trailig and leading slash, ussually included in nodes
//returnred by BigCommerceApi

const getSlug = (path: string) => path.replace(/^\/|\/$/g, '');
export default getSlug;
