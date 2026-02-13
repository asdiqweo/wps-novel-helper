/**
 * 虚拟国家名称数据
 * 风格：古代、现代、星际时代
 */

// 古代风格虚拟国家名
export const ancientCountries = [
  // 东方古代风格
  '云州', '凌霄国', '天元国', '玄月国', '星云帝国', '紫辰国',
  '青云国', '苍澜国', '幻月帝国', '流云国', '霜华国', '凤鸣国',
  '龙腾帝国', '麒麟国', '白虎国', '朱雀国', '玄武国', '玉华国',
  '琉璃国', '水晶国', '紫霞国', '碧落国', '黄泉国', '幽冥国',
  '大秦国', '大汉国', '大唐国', '大宋国', '大元国', '大明国',
  '楚国', '燕国', '赵国', '魏国', '韩国', '齐国',
  '蜀汉', '东吴', '曹魏', '西晋', '东晋', '北魏',
  '辽国', '金国', '西夏', '吐蕃', '高句丽', '百济',
  // 西方古代风格
  '艾尔瑞亚', '米斯兰迪尔', '洛赫兰', '瓦勒里亚', '阿卡迪亚',
  '艾瑟加德', '莫尔迪斯', '塞拉菲娜', '奥瑞利亚', '泰拉诺瓦',
  '罗马帝国', '雅典', '斯巴达', '马其顿', '波斯帝国', '巴比伦',
  '亚述', '迦太基', '色雷斯', '达契亚', '高卢', '不列颠',
  '瓦洛里亚', '铁峰王国', '银松国', '荆棘王国', '霜狼公国',
  '金狮王国', '黑石帝国', '霜堡公国', '风息王国', '雾谷国',
  '龙岩帝国', '翡翠王国', '赤焰公国', '寒霜王国', '烈阳帝国'
]

// 现代风格虚拟国家名
export const modernCountries = [
  // 东方现代风格
  '华夏国', '东瀛国', '高丽国', '南洋国', '中原国', '江南国',
  '塞北国', '西域国', '关东国', '关西国', '岭南国', '巴蜀国',
  '楚天国', '燕赵国', '齐鲁国', '秦陇国', '吴越国', '闽越国',
  // 西方现代风格
  '诺瓦共和国', '奥瑞亚合众国', '自由联邦', '民主联盟', '人民帝国',
  '普罗维斯共和国', '新联邦', '联合王国', '共和国联盟', '帝国联邦',
  '北方共和国', '南方联邦', '东方帝国', '西方联盟', '中央王国',
  '铁血帝国', '黄金共和国', '白银联邦', '青铜王国', '水晶联盟',
  '翡翠共和国', '蓝宝石王国', '红宝石帝国', '钻石联邦', '珍珠联盟'
]

// 星际时代风格虚拟国家名
export const scifiCountries = [
  '银河帝国', '星际联盟', '联邦共和国', '虚空帝国', '星云联邦',
  '泰坦联邦', '半人马座阿尔法星', '天狼星联邦', '仙女座共和国',
  '新地球', '火星殖民地', '木卫二联邦', '土卫六共和国', '海王星联邦',
  '金星联盟', '水星联邦', '天王星王国', '冥王星要塞', '冥卫共和国',
  '虚空帝国', '星云联邦', '光年共和国', '维度联盟', '量子帝国',
  '反物质共和国', '暗物质联邦', '超空间联盟', '黑洞帝国', '虫洞联邦',
  '星际联邦', '银河联邦', '宇宙联盟', '星系帝国', '恒星联邦',
  '光速帝国', '时空联盟', '超光速联邦', '跃迁共和国', '曲率王国',
  '赛博帝国', '机械联盟', '合成人联邦', '仿生人共和国', 'AI帝国',
  '戴森球联邦', '环世界联盟', '世代飞船共和国', '方舟王国', '星际殖民地'
]

/**
 * 生成随机国家名
 * @param {string} style - 风格：ancient, modern, scifi, all
 * @returns {string} 生成的国家名
 */
export function generateCountry(style = 'all') {
  let countries = []

  switch (style) {
    case 'ancient':
      countries = ancientCountries
      break
    case 'modern':
      countries = modernCountries
      break
    case 'scifi':
      countries = scifiCountries
      break
    case 'all':
    default:
      countries = [...ancientCountries, ...modernCountries, ...scifiCountries]
      break
  }

  return countries[Math.floor(Math.random() * countries.length)]
}

/**
 * 批量生成随机国家名
 * @param {number} count - 生成数量
 * @param {string} style - 风格
 * @returns {Array<string>} 国家名数组
 */
export function generateCountries(count = 5, style = 'all') {
  const countries = []
  for (let i = 0; i < count; i++) {
    countries.push(generateCountry(style))
  }
  return countries
}

// 导出国家类型
export const countryStyles = {
  ancient: { name: '古代风格', data: ancientCountries },
  modern: { name: '现代风格', data: modernCountries },
  scifi: { name: '星际时代', data: scifiCountries }
}
