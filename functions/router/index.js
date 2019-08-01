// 云函数入口文件
const cloud = require('wx-server-sdk');

const TcbRouter = require('tcb-router');

const util = require('utils.js')

cloud.init()

const db = cloud.database();

const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {

  const app = new TcbRouter({ event });

  const wxContext = cloud.getWXContext()

  app.router('test', async (ctx, next) => {

    await next();

  }, async (ctx, next) => {

    await next();

  }, async (ctx) => {

    const test = require('test/index.js');

    ctx.body = test.main(event, context, db, _, util);

  });



  /**

     * 登录日志

     */



  app.router('logList', async (ctx, next) => {
    await next();
  }, async (ctx, next) => {
    await next();
  }, async (ctx) => {
    const logList = require('logList/index.js');
    ctx.body = logList.main(event, context, db, _, util);
  });


  /**

     * 登录

     */

  app.router('login', async (ctx, next) => {
    await next();
  }, async (ctx, next) => {
    await next();
  }, async (ctx) => {
    const login = require('login/index.js');
    ctx.body = login.main(event, context, db, _, util);
  });


  /**

     * 用户列表

     */

  app.router('userList', async (ctx, next) => {
    await next();
  }, async (ctx, next) => {
    await next();
  }, async (ctx) => {
    const userList = require('userList/index.js');
    ctx.body = userList.main(event, context, db, _, util);
  });
  return app.serve();
}
