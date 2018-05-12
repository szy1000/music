import jsonp from 'common/js/jsonp';
import {commonParams, options} from './config';

export function getRecommendReq() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscReq() {
  // const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg';
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg';
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'jsonp'
  })
  console.log(data);
  return jsonp(url, data, options)
}
