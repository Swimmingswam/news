import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Lan from './components/Lan.vue'
import Userinfo from './components/Userinfo.vue'
import Userlogin from './components/Userlogin.vue'
import Userreg from './components/Userreg.vue'
import Article from './components/Article.vue'

export default[
{
	path:'/home',
	component:Home
},
{
	path:'/follow',
	component:Follow
},
{
	path:'/lan',
	component:Lan
},
{
    path:'/user-info',
	component:Userinfo
},
{
    path:'/user-login',
	component:Userlogin
},
{
    path:'/user-reg',
	component:Userreg
},
{
	path:'*',
	redirect:"/home"
},
{
    path:'/article/:id',
	component:Article,
}
]
