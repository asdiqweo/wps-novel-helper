/**
 * 人名数据
 * 按风格分类：东方现代、东方古代、西方现代、西方古代、日式
 */

// 东方现代人名（中文）
export const easternModern = {
  surnames: [
    '王', '李', '张', '刘', '陈', '杨', '赵', '黄', '周', '吴', '徐',
    '孙', '胡', '朱', '高', '林', '何', '郭', '马', '罗', '梁',
    '宋', '郑', '谢', '韩', '唐', '冯', '于', '董', '萧', '程',
    '曹', '袁', '邓', '许', '傅', '沈', '曾', '彭', '吕', '苏',
    '卢', '蒋', '蔡', '贾', '丁', '魏', '薛', '叶', '阎'
  ],
  givenNames: [
    '伟', '芳', '娜', '秀英', '敏', '静', '丽', '强', '磊', '军',
    '洋', '勇', '艳', '杰', '娟', '涛', '明', '超', '秀兰', '霞',
    '平', '刚', '桂英', '玉兰', '萍', '毅', '浩', '宇', '轩', '然',
    '欣', '怡', '婷', '梓', '萱', '子', '墨', '涵', '雨', '晴',
    '博文', '皓', '俊杰', '雨泽', '子轩', '浩宇', '欣怡', '可馨'
  ],
  // 生成完整人名
  generateName() {
    const surname = this.surnames[Math.floor(Math.random() * this.surnames.length)]
    const givenName = this.givenNames[Math.floor(Math.random() * this.givenNames.length)]
    return `${surname}${givenName}`
  }
}

// 东方古人名（中国古代风格）
export const easternAncient = {
  // 单字姓氏（100个常见单字姓）
  singleSurnames: [
    '李', '王', '张', '刘', '陈', '杨', '赵', '黄', '周', '吴', '徐',
    '孙', '胡', '朱', '高', '林', '何', '郭', '马', '罗', '梁',
    '宋', '郑', '谢', '韩', '唐', '冯', '于', '董', '萧', '程',
    '曹', '袁', '邓', '许', '傅', '沈', '曾', '彭', '吕', '苏',
    '卢', '蒋', '蔡', '贾', '丁', '魏', '薛', '叶', '阎', '余',
    '潘', '杜', '戴', '夏', '钟', '汪', '田', '任', '姜', '范', '方',
    '石', '姚', '谭', '廖', '邹', '熊', '金', '陆', '郝', '孔', '白',
    '崔', '康', '毛', '邱', '秦', '江', '史', '顾', '侯', '邵', '孟',
    '龙', '万', '雷', '钱', '尹', '黎', '易', '常', '武', '乔', '贺',
    '龚', '文'
  ],
  // 复姓（15个）
  compoundSurnames: [
    '司马', '欧阳', '上官', '东方', '独孤', '南宫', '夏侯', '尉迟',
    '皇甫', '诸葛', '公孙', '慕容', '宇文', '赫连', '长孙', '令狐'
  ],
  givenNames: [
    '云', '风', '雪', '月', '霜', '寒', '清', '玉', '飞', '剑',
    '逍遥', '长风', '青云', '若雪', '轻尘', '子墨', '清玄', '云霄',
    '明月', '紫萱', '梦璃', '雪见', '景天', '徐长', '青', '玄霄',
    '慕容', '紫英', '云河', '怀朔', '璇玑', '菱纱', '天河', '梦璃',
    '无双', '伯约', '孔明', '玄德', '孟德', '奉先', '子龙', '翼德'
  ],
  courtesyNames: [
    '孔明', '玄德', '孟德', '奉先', '子龙', '翼德', '公瑾', '子敬',
    '士元', '仲谋', '伯温', '士季', '元直', '子建', '文若', '士衡'
  ],
  generateName() {
    // 10%概率使用复姓，90%概率使用单字姓
    const useCompoundSurname = Math.random() > 0.9
    const surname = useCompoundSurname
      ? this.compoundSurnames[Math.floor(Math.random() * this.compoundSurnames.length)]
      : this.singleSurnames[Math.floor(Math.random() * this.singleSurnames.length)]

    const givenName = this.givenNames[Math.floor(Math.random() * this.givenNames.length)]

    // 20%概率添加字（表字）
    if (Math.random() > 0.8) {
      const courtesyName = this.courtesyNames[Math.floor(Math.random() * this.courtesyNames.length)]
      return `${surname}${givenName}，字${courtesyName}`
    }

    return surname + givenName
  }
}

// 中文音译的人名映射
const nameTranslations = {
  // 男性名音译
  james: ['詹姆斯', '詹姆士'],
  john: ['约翰', '乔恩'],
  robert: ['罗伯特', '罗伯'],
  michael: ['迈克尔', '麦克'],
  william: ['威廉', '威廉'],
  david: ['大卫', '戴维'],
  richard: ['理查德', '理查'],
  joseph: ['约瑟夫', '乔瑟'],
  thomas: ['托马斯', '托马'],
  charles: ['查尔斯', '查理'],
  christopher: ['克里斯托弗', '克里斯'],
  daniel: ['丹尼尔', '丹尼'],
  matthew: ['马修', '马修'],
  anthony: ['安东尼', '安东'],
  donald: ['唐纳德', '唐纳'],
  mark: ['马克', '麦可'],
  paul: ['保罗', '保罗'],
  steven: ['史蒂文', '史迪'],
  andrew: ['安德鲁', '安德'],
  kenneth: ['肯尼斯', '肯尼'],
  joshua: ['乔舒亚', '乔舒'],
  kevin: ['凯文', '凯文'],
  brian: ['布莱恩', '布莱'],
  george: ['乔治', '乔治'],
  timothy: ['蒂莫西', '蒂莫'],
  ronald: ['罗纳德', '罗纳'],
  edward: ['爱德华', '艾德'],
  jason: ['杰森', '杰森'],
  jeffrey: ['杰弗里', '杰弗'],
  ryan: ['瑞恩', '瑞安'],
  jacob: ['雅各布', '雅各'],
  gary: ['加里', '加利'],
  nicholas: ['尼古拉斯', '尼克'],
  eric: ['埃里克', '艾瑞'],
  jonathan: ['乔纳森', '乔森'],
  stephen: ['斯蒂芬', '史蒂'],
  larry: ['拉里', '拉瑞'],
  justin: ['贾斯汀', '贾斯'],
  scott: ['斯科特', '史考'],
  brandon: ['布兰登', '布兰'],
  benjamin: ['本杰明', '本杰'],
  samuel: ['塞缪尔', '萨缪'],
  frank: ['弗兰克', '福兰'],
  gregory: ['格雷戈里', '格雷'],
  raymond: ['雷蒙德', '雷蒙'],
  alexander: ['亚历山大', '亚历'],
  patrick: ['帕特里克', '帕特'],

  // 女性名音译
  mary: ['玛丽', '玛莉'],
  patricia: ['帕特里夏', '帕莎'],
  jennifer: ['珍妮弗', '珍妮'],
  linda: ['琳达', '林妲'],
  elizabeth: ['伊丽莎白', '伊利莎'],
  barbara: ['芭芭拉', '芭芭'],
  susan: ['苏珊', '苏珊'],
  jessica: ['杰西卡', '洁西'],
  sarah: ['萨拉', '莎拉'],
  karen: ['卡伦', '凯伦'],
  lisa: ['丽莎', '莉萨'],
  nancy: ['南希', '南茜'],
  betty: ['贝蒂', '蓓蒂'],
  margaret: ['玛格丽特', '玛格'],
  sandra: ['桑德拉', '珊卓'],
  ashley: ['艾希莉', '艾希'],
  kimberly: ['金伯莉', '金伯'],
  emily: ['艾米莉', '艾米'],
  donna: ['唐娜', '丹娜'],
  michelle: ['米歇尔', '米雪'],
  dorothy: ['多萝西', '桃乐茜'],
  carol: ['卡罗尔', '卡萝'],
  amanda: ['阿曼达', '阿曼'],
  melissa: ['梅丽莎', '梅莉'],
  deborah: ['德博拉', '德博'],
  stephanie: ['斯蒂芬妮', '史蒂芬'],
  rebecca: ['丽贝卡', '丽贝'],
  sharon: ['莎伦', '莎伦'],
  laura: ['劳拉', '萝拉'],
  cynthia: ['辛西娅', '辛西'],
  kathleen: ['凯瑟琳', '凯瑟'],
  amy: ['艾米', '爱美'],
  shirley: ['雪莉', '雪莉'],
  angela: ['安吉拉', '安琪'],
  helen: ['海伦', '海伦'],
  anna: ['安娜', '安娜'],
  brenda: ['布伦达', '布蓝'],
  pamela: ['帕梅拉', '帕梅'],
  nicole: ['妮可', '妮科'],
  emma: ['艾玛', '爱玛'],
  samantha: ['萨曼莎', '莎曼'],
  katherine: ['凯瑟琳', '凯瑟'],
  christine: ['克里斯汀', '克里斯'],
  debra: ['德布拉', '德柏'],
  rachel: ['瑞秋', '瑞秋'],
  catherine: ['凯瑟琳', '凯瑟'],
  carolyn: ['卡罗琳', '卡罗']
}

// 中文音译的姓氏映射
const surnameTranslations = {
  smith: ['史密斯', '斯密'],
  johnson: ['约翰逊', '强森'],
  williams: ['威廉姆斯', '威廉姆'],
  brown: ['布朗', '布郎'],
  jones: ['琼斯', '琼斯'],
  garcia: ['加西亚', '贾西亚'],
  miller: ['米勒', '密勒'],
  davis: ['戴维斯', '戴维'],
  rodriguez: ['罗德里格兹', '罗德里'],
  martinez: ['马丁内斯', '马丁'],
  hernandez: ['埃尔南德斯', '南德'],
  lopez: ['洛佩斯', '洛佩'],
  gonzalez: ['冈萨雷斯', '冈萨'],
  wilson: ['威尔逊', '威尔'],
  anderson: ['安德森', '安德'],
  thomas: ['托马斯', '托马'],
  taylor: ['泰勒', '泰勒'],
  moore: ['穆尔', '摩尔'],
  jackson: ['杰克逊', '杰克'],
  martin: ['马丁', '马汀'],
  lee: ['李', '李'],
  perez: ['佩雷斯', '佩雷'],
  thompson: ['汤普森', '汤普'],
  white: ['怀特', '怀特'],
  harris: ['哈里斯', '哈里'],
  sanchez: ['桑切斯', '桑切'],
  clark: ['克拉克', '克拉'],
  ramirez: ['拉米雷斯', '拉米'],
  lewis: ['刘易斯', '刘易'],
  robinson: ['鲁滨逊', '鲁宾'],
  walker: ['沃克', '沃克'],
  young: ['扬', '杨'],
  allen: ['艾伦', '艾伦'],
  king: ['金', '金'],
  wright: ['赖特', '莱特'],
  scott: ['斯科特', '史考'],
  torres: ['托雷斯', '托雷'],
  nguyen: ['阮', '阮'],
  hill: ['希尔', '西尔'],
  flores: ['弗洛雷斯', '弗洛'],
  green: ['格林', '格林'],
  adams: ['亚当斯', '亚当'],
  nelson: ['纳尔逊', '纳尔'],
  baker: ['贝克', '贝克'],
  hall: ['霍尔', '霍'],
  rivera: ['里维拉', '里维'],
  campbell: ['坎贝尔', '坎贝']
}

// 西方现代人名
export const westernModern = {
  maleNames: [
    'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph',
    'Thomas', 'Charles', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Donald',
    'Mark', 'Paul', 'Steven', 'Andrew', 'Kenneth', 'Joshua', 'Kevin', 'Brian',
    'George', 'Timothy', 'Ronald', 'Edward', 'Jason', 'Jeffrey', 'Ryan', 'Jacob',
    'Gary', 'Nicholas', 'Eric', 'Jonathan', 'Stephen', 'Larry', 'Justin', 'Scott',
    'Brandon', 'Benjamin', 'Samuel', 'Frank', 'Gregory', 'Raymond', 'Alexander', 'Patrick'
  ],
  femaleNames: [
    'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica',
    'Sarah', 'Karen', 'Lisa', 'Nancy', 'Betty', 'Margaret', 'Sandra', 'Ashley',
    'Kimberly', 'Emily', 'Donna', 'Michelle', 'Dorothy', 'Carol', 'Amanda', 'Melissa',
    'Deborah', 'Stephanie', 'Rebecca', 'Sharon', 'Laura', 'Cynthia', 'Kathleen', 'Amy',
    'Shirley', 'Angela', 'Helen', 'Anna', 'Brenda', 'Pamela', 'Nicole', 'Emma',
    'Samantha', 'Katherine', 'Christine', 'Debra', 'Rachel', 'Catherine', 'Carolyn'
  ],
  surnames: [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
    'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson',
    'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson',
    'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker',
    'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill',
    'Flores', 'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell'
  ],
  generateName(gender = null) {
    const isMale = gender === null ? Math.random() > 0.5 : gender === 'male'
    const firstName = isMale
      ? this.maleNames[Math.floor(Math.random() * this.maleNames.length)]
      : this.femaleNames[Math.floor(Math.random() * this.femaleNames.length)]
    const lastNameKey = this.surnames[Math.floor(Math.random() * this.surnames.length)]

    // 获取中文音译
    const translatedFirst = nameTranslations[firstName.toLowerCase()]?.[0] || firstName
    const translatedLast = surnameTranslations[lastNameKey.toLowerCase()]?.[0] || lastNameKey

    return `${translatedFirst}·${translatedLast}`
  }
}

// 西方古人名（中世纪欧洲风格）
export const westernAncient = {
  maleNames: [
    'Arthur', 'Lancelot', 'Gawain', 'Percival', 'Galahad', 'Bors', 'Bedivere', 'Kay',
    'Tristan', 'Lamorak', 'Gareth', 'Agravain', 'Mordred', 'Roland', 'Oliver',
    'William', 'Richard', 'Henry', 'Robert', 'Geoffrey', 'Stephen', 'Baldwin',
    'Godfrey', 'Raymond', 'Bohemond', 'Tancred', 'Frederick', 'Conrad', 'Leopold'
  ],
  femaleNames: [
    'Guinevere', 'Isolde', 'Igraine', 'Morgana', 'Elaine', 'Nimue', 'Morgan',
    'Eleanor', 'Matilda', 'Adela', 'Alice', 'Constance', 'Isabella', 'Blanche',
    'Joan', 'Margaret', 'Helen', 'Mary', 'Anne', 'Catherine', 'Agnes', 'Beatrice'
  ],
  noblePrefixes: [
    '德', '冯', '凡', '迪', '奥'
  ],
  locations: [
    '卡米洛', '廷塔杰', '阿瓦隆', '不列颠', '高卢', '诺曼底', '阿基坦',
    '普罗旺斯', '弗兰德斯', '勃艮第', '洛林', '萨克森', '巴伐利亚', '施瓦本',
    '阿拉贡', '卡斯蒂利亚', '莱昂', '纳瓦拉', '葡萄牙', '西西里', '那不勒斯'
  ],
  generateName(gender = null) {
    const isMale = gender === null ? Math.random() > 0.5 : gender === 'male'
    const firstName = isMale
      ? this.maleNames[Math.floor(Math.random() * this.maleNames.length)]
      : this.femaleNames[Math.floor(Math.random() * this.femaleNames.length)]

    // 获取中文音译
    const translatedFirst = nameTranslations[firstName.toLowerCase()]?.[0] || firstName

    // 40%概率添加贵族前缀和地名
    if (Math.random() > 0.6) {
      const prefix = this.noblePrefixes[Math.floor(Math.random() * this.noblePrefixes.length)]
      const location = this.locations[Math.floor(Math.random() * this.locations.length)]
      return `${translatedFirst}${prefix}${location}`
    }

    return translatedFirst
  }
}

// 日式人名
export const japanese = {
  surnames: [
    '佐藤', '鈴木', '高橋', '田中', '伊藤', '渡辺', '山本', '中村',
    '小林', '加藤', '吉田', '山田', '佐々木', '山口', '松本', '井上',
    '木村', '林', '斎藤', '清水', '山崎', '阿部', '森', '池田',
    '橋本', '石川', '前田', '藤田', '小川', '岡田', '村上', '長谷川'
  ],
  maleNames: [
    '大翔', '蓮', '悠真', '陽翔', '湊', '朝陽', '樹', '陽太',
    '蒼', '悠人', '結翔', '颯太', '悠', '大和', '結人', '陽向'
  ],
  femaleNames: [
    '陽葵', '凛', '詩', '結愛', '杏', '紬', '結菜', '芽依',
    '花', '楓', '夢', '琴葉', '澪', '美月', '心春', '莉子'
  ],
  generateName(gender = null) {
    const surname = this.surnames[Math.floor(Math.random() * this.surnames.length)]
    const isMale = gender === null ? Math.random() > 0.5 : gender === 'male'
    const givenName = isMale
      ? this.maleNames[Math.floor(Math.random() * this.maleNames.length)]
      : this.femaleNames[Math.floor(Math.random() * this.femaleNames.length)]
    return surname + givenName
  }
}

// 导出所有风格
export const nameStyles = {
  easternModern: { name: '东方现代', data: easternModern },
  easternAncient: { name: '东方古代', data: easternAncient },
  westernModern: { name: '西方现代', data: westernModern },
  westernAncient: { name: '西方古代', data: westernAncient },
  japanese: { name: '日式', data: japanese }
}
