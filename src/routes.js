import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Lists from '@/components/Lists'
import Users from '@/components/Users'
import News from '@/components/News'

let routes = {
	mode: 'history',
  	base: __dirname,
	routes:[
	    {
	      path: '/',
	      name: 'main',
	      component: Main,
	      children: [
	      	{path: '/users',name: 'users',component: Users},
	      	{path: '/news',name: 'news',component: News},
	      ]
	    },
	    {
	    	path: '/list',
	    	name: 'Lists',
	    	component: Lists
	    }
	]
};

export default routes;
