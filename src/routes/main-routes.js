import KoaRouter from 'koa-router'
import controllers from '../controllers/index.js'

const router = new KoaRouter()

router
  .get('/public/get', function (ctx, next) {
    ctx.body = '禁止访问！'
  }) // 以/public开头则不用经过权限认证
  .all('/upload', controllers.upload.default)
  .post('/user/update', controllers.user.update)
  .post('/user/login', controllers.user.login)
  .post('/user/register', controllers.user.register)
  .get('/user/find', controllers.user.findUserById)
  .get('/oauth/code', controllers.validateCode.getValidateCode)
  .get('/qiniu/token', controllers.qiniu.getQiniuToken)
  .get('/mood/findAll', controllers.mood.getMoods)
  .get('/mood/find', controllers.mood.findMoodById)
  .get('/tag/find', controllers.tag.getTags)
  .post('/my/post', controllers.myPost.createDiary)
  .get('/my/find', controllers.myPost.findMyDiary)
  .post('/future/post', controllers.future.createFuture)
  .get('/future/find', controllers.future.findFuture)
  .get('/team/find', controllers.team.findTeam)
  .post('/team/create', controllers.team.createTeam)
  .get('/team/search', controllers.team.searchTeam)
  .post('/team/join', controllers.team.joinTeam)
  .get('/team/find', controllers.team.findTeam) // 用户加入的所有团队
  .get('/team/members', controllers.team.findTeamMember) // 团队的成员信息
  .get('/team/info', controllers.team.findTeamInfo)// 团队详细信息
  .get('/teamPost/find', controllers.ourPost.findTeamPosts) // 团队日记
  .post('/teamPost/post', controllers.ourPost.createDiary) // 发表团队日记
  .post('/todo/create', controllers.todo.addTodo)
  .get('/todo/find', controllers.todo.findTodoById)
  .get('/todo/delete', controllers.todo.deleteTodo)
  .post('/toto/update', controllers.todo.updateTodo)

module.exports = router
