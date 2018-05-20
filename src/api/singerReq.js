import jsonp from 'common/js/jsonp';
import {commonParams, options} from './config';

export function getSingerListReq() {
  let url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg';

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    g_tk: 5381
  })

  return jsonp(url, data, options)
}

// todo
// export function getSongKeyReq(singerId) {
//   let url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg';
//
//   const data = Object.assign({}, commonParams, {
//     g_tk: 5381,
//     loginUin: 0,
//     hostUin: 0,
//     platform: 'yqq',
//     needNewCode: 0,
//     cid: 205361747,
//     uin: 0,
//     songmid: singerId,
//     filename: `C400${singerId}.m4a`,
//     guid: 918839284,
//     format: 'jsonp'
//   })
//
//   return jsonp(url, data, options)
// }

export function getSingerDetailReq(singerId) {
  let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg';

  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    format: 'jsonp',
    begin: 0,
    num: 100,
    songstatus: 1,
    g_tk: 5381,
    singermid: singerId
  })

  return jsonp(url, data, options)
}
