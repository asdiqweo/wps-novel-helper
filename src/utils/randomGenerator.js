/**
 * 随机生成工具
 * 用于生成随机人名和国家名
 */

import { nameStyles } from '../data/names.js'
import { generateCountry, countryStyles } from '../data/countries.js'

/**
 * 生成随机人名
 * @param {string} style - 风格：easternModern, easternAncient, westernModern, westernAncient, japanese
 * @param {string} gender - 性别：male, female, null（随机）
 * @returns {string} 生成的人名
 */
export function generateRandomName(style = 'easternModern', gender = null) {
  const styleData = nameStyles[style]
  if (!styleData) {
    console.warn(`未找到风格 ${style}，使用默认风格 easternModern`)
    return nameStyles.easternModern.data.generateName()
  }

  return styleData.data.generateName(gender)
}

/**
 * 批量生成随机人名
 * @param {number} count - 生成数量
 * @param {string} style - 风格
 * @param {string} gender - 性别
 * @returns {Array<string>} 人名数组
 */
export function generateRandomNames(count = 5, style = 'easternModern', gender = null) {
  const names = []
  for (let i = 0; i < count; i++) {
    names.push(generateRandomName(style, gender))
  }
  return names
}

/**
 * 生成随机国家名
 * @param {string} style - 风格：ancient, modern, scifi, all
 * @returns {string} 生成的国家名
 */
export function generateRandomCountry(style = 'all') {
  return generateCountry(style)
}

/**
 * 批量生成随机国家名
 * @param {number} count - 生成数量
 * @param {string} style - 风格
 * @returns {Array<string>} 国家名数组
 */
export function generateRandomCountries(count = 5, style = 'all') {
  const countries = []
  for (let i = 0; i < count; i++) {
    countries.push(generateRandomCountry(style))
  }
  return countries
}

/**
 * 根据文章背景风格生成推荐配置
 * @param {string} theme - 文章主题：fantasy, ancient, modern, westernFantasy, westernModern, scifi
 * @returns {Object} 推荐的人名和国家风格配置
 */
export function getRecommendationByTheme(theme) {
  const recommendations = {
    fantasy: {
      nameStyle: 'easternAncient',
      countryStyle: 'ancient',
      description: '玄幻修仙风格，适合修炼、宗门、秘境等设定'
    },
    ancient: {
      nameStyle: 'easternAncient',
      countryStyle: 'ancient',
      description: '历史架空风格，适合宫廷、战争、权谋等题材'
    },
    modern: {
      nameStyle: 'easternModern',
      countryStyle: 'modern',
      description: '现代都市风格，适合都市情感、职场等题材'
    },
    westernFantasy: {
      nameStyle: 'westernAncient',
      countryStyle: 'ancient',
      description: '西方奇幻风格，适合龙、骑士、魔法等设定'
    },
    westernModern: {
      nameStyle: 'westernModern',
      countryStyle: 'modern',
      description: '西方现代风格，适合特工、犯罪等题材'
    },
    scifi: {
      nameStyle: 'westernModern',
      countryStyle: 'scifi',
      description: '科幻未来风格，适合星际、机器人等设定'
    }
  }

  return recommendations[theme] || recommendations.modern
}

// 导出数据供界面使用
export { nameStyles, countryStyles }
