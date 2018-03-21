import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Lists from '@/components/Lists'
import Users from '@/components/Users'
import News from '@/components/News'
import Menus from '@/components/Menu'
// import NotFound from '@/components/NotFound'

const NotFound = {
	props: ['msg'],
	template: '<h1>{{msg}}</h1>'
}

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
	      	{path: '/menus',name: 'menus',component: Menus},
	      ]
	    },
	    {
	    	path: '/list',
	    	name: 'Lists',
	    	component: Lists
	    },
	    { 
	    	path: '*',
	    	component: NotFound,
	    	props: {msg:'Not Found!'}
	    }
	]
};

export default routes;
