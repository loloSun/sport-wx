//   
let Bmob = require("./hydrogen-js-sdk-master/hydrogen-js-sdk-master/dist/Bmob-1.6.1.min.js");
Bmob.initialize("b9dfe61c0b9bffe0584de74baa616d3b", "81cd7c9ba6c813a6d10e56950b6c2abc");

App({
  globalData:{
    userInfo:{
      image:"",
      name:""
    },
    active:[
      {
        index:0,
        title:"基本燃脂",
        topimg:"http://cdn.quncrm.com/ntc/assets/workouts_basic_burner_image_landscape_x3_44b26b8346d80a3ffc40c45c6fadfae8.jpg",
        time:"15",
        evel:"中",
        power:"中级",
        people:"锻炼，核心肌群力量，下半身耐力，上半身力量",
        info:"全力投入训练。准确、快速地完成这套经典的健身训练动作。",
        midimg:"http://cdn.quncrm.com/ntc/assets/workouts_basic_burner_image_trainer_tip_x3_ac957bea6c61142408407e27f97746a0.jpg",
        setman:"Kirsty Godso"
      },
      {
        index: 1,
        title: "核心缩腹 2.0",
        topimg: "http://cdn.quncrm.com/ntc/assets/workouts_core_crunch_image_landscape_x3_c909f0cc14dabf9297b446ec1f69207f.jpg",
        time: "15",
        evel: "中",
        power: "中级",
        people: "核心肌群锻炼，下半身耐力",
        info: "运用单腿和单臂完成的动作有效提升身体的力量和平衡力。保持动作平稳准确，尽力完成动作。",
        midimg: "http://cdn.quncrm.com/ntc/assets/workouts_core_crunch_image_trainer_tip_x3_b2797e129d245a47405b0075f5797aec.jpg",
        setman: "Nike"
      },
      {
        index: 2,
        title: "拓展空间",
        topimg: "http://cdn.quncrm.com/ntc/assets/workouts_extend_your_range_image_landscape_x3_5bbf81cddee55c4707e9ec1682251e4e.jpg",
        time: "15",
        evel: "中",
        power: "中级",
        people: "积极恢复,核心肌群稳定性,下半身灵活性,上半身灵活性",
        info: "这些训练动作能帮助你获得更出色的运动表现，练就更强体魄。 集中精神，平稳地掌控你的动作，并逐渐加大运动幅度。",
        midimg: "http://cdn.quncrm.com/ntc/assets/workouts_extend_your_range_image_trainer_tip_x3_94bdf500d34191ff4ba1aeb2c16b8eb3.jpg",
        setman: "Jason Brown"
      },
      {
        index: 3,
        title: "燃烧点",
        topimg: "http://cdn.quncrm.com/ntc/assets/workouts_ignition_points_image_landscape_x3_b8a19f10309309abaa5cc62c1ab7e7ea.jpg",
        time: "15",
        evel: "中",
        power: "中级",
        people: "核心肌群力量,全身耐力,功能性力量,整体健康",
        info: "难度较大时，每组动作后会给你留出一点休息时间。 利用这段空隙好好恢复，然后再次全力投入训练。",
        midimg: "http://cdn.quncrm.com/ntc/assets/workouts_ignition_points_image_trainer_tip_x3_46874a5253b986442f433c6f4234f008.jpg",
        setman: "Michol Dalcourt"
      },
      {
        index: 4,
        title: "循环刺激",
        topimg: "http://cdn.quncrm.com/ntc/assets/workouts_fresh_on_the_circuit_image_landscape_x3_5eea71be8e098e84be5464cf361ce3d9.jpg",
        time: "15",
        evel: "中",
        power: "中级",
        people: "积极恢复,全身柔韧性,运动质量",
        info: "只活动与各个动作相关的肌群。 让身体其他部分保持静止，每完成一轮动作，可稍稍推进一点。",
        midimg: "http://cdn.quncrm.com/ntc/assets/workouts_fresh_on_the_circuit_image_trainer_tip_x3_c1fd622c9fbe20b09b9c7b5b77cb739f.jpg",
        setman: "Frank Dolan"
      },
      {
        index: 5,
        title: "开启时间",
        topimg: "http://cdn.quncrm.com/ntc/assets/workouts_opening_time_image_landscape_x3_8aea2a62a22cbbba5f97f329e013c7d5.jpg",
        time: "15",
        evel: "中",
        power: "中级",
        people: "积极恢复,下半身灵活性,跑步后放松,上半身灵活性",
        info: "注意确保正确地完成一些技巧性动作，这可以帮助你打开髋关节，提高运动幅度。",
        midimg: "http://cdn.quncrm.com/ntc/assets/workouts_opening_time_image_trainer_tip_x3_b2797e129d245a47405b0075f5797aec.jpg",
        setman: "Dewey Nielsen"
      }
    ],
    trainInfo:[
      {
        "bgimg":"http://cdn.quncrm.com/ntc/images/trainer/trainer-detail.jpg",
        "img":"http://cdn.quncrm.com/images/ntc/images/trainer/jessica.png",
        "name":"何耀辉",
        "easeInfo":"Nike签约教练，女子健康运动倡导者 ，擅长 NTC/瑜伽，坐标北京。",
        "moreInfo":"ACE-CPT美国运动委员会注册私人教练，印度著名Gurukul Kangri瑜伽学院证书，国家2级公共营养师，轻食·悦体·减法生活》《伸展平衡》作者。Jessica认为所有的坚持都源于爱，像运动，从来不用拘于形式。试着褪去是不是变瘦变美变更强大的想法，单纯的爱，我们会收获更多。瑜伽、舞蹈、训练，都是运动不一样的外衣。",
        "linian":"选自己喜欢的，呈现不一样风格的自己。运动和你都不该被定义，follow your heart, be yourself。",
        "gailan":[
          {
            "img":"http://cdn.quncrm.com/ntc/assets/assets_dynamic_chest_stretch_image_x3_cadcb9b12850c2d9286add1736922d4b.jpg",
            "title":"每日灵活伸展",
            "time":"06:00"
          },
          {
            "img": "http://cdn.quncrm.com/ntc/assets/assets_standing_quadriceps_stretch___left_leg_image_x3_680a17885b4d72328ce1085eb9baaac2.jpg",
            "title": "马拉松跑后伸展",
            "time": "05:00"
          }
        ]
      },
      {
        "bgimg":"http://cdn.quncrm.com/ntc/images/trainer/trainer-detail.jpg",
        "img": "http://cdn.quncrm.com/images/ntc/images/trainer/fred.png",
        "name": "周飞",
        "easeInfo": "NTC签约教练，擅长跑步/体能训练/减脂塑形/舞蹈有氧训练课，坐标广州。",
        "moreInfo": "7年私教职业生涯，超过5000节私教授课经验，ACE-CPT美国运动委员会注册私人教练, 儿童青少年体适能训练师及国家健身营养师。作为马拉松跑者，拥有5年国际马拉松跑步经验。周飞认为训练其实很简单，就是让自己有方法地“玩”身体，找回我们身体本该与生俱来的能力（灵活稳定、力量、耐力和自信）。只要用专业和热情与他一起训练，相信改变已经在路上。",
        "linian": "有目标、有计划，才是真正的训练！",
        "gailan": [
          {
            "img": "http://cdn.quncrm.com/ntc/assets/assets_high_knee_march_image_x3_1554f2c0223fa1bee31268ec1932781d.jpg",
            "title": "马拉松训练",
            "time": "30:00"
          },
          {
            "img": "http://cdn.quncrm.com/ntc/assets/assets_seated_deep_breathing_image_x3_6b6a147bb7da4f4d2833ad569f916bec.jpg",
            "title": "跑步后恢复性训练",
            "time": "23:40"
          }
        ]
      },
      {
        "bgimg":"http://cdn.quncrm.com/ntc/images/trainer/trainer-detail.jpg",
        "img": "http://cdn.quncrm.com/ntc/images/trainer/chenxi.png",
        "name": "陈曦",
        "easeInfo": "NTC签约教练，擅长NTC，减脂塑形、运动损伤康复、长跑专项体能训练，坐标北京。",
        "moreInfo": " 拥有NASM-CTP美国国家运动医学院私人教练专业认证，TRX专业教练认证，KettleBell专业教练认证。 运动这件事，从小时候的喜欢，变成了自己的事业，一不小心就这样走了十四年，如果说运动是一件让人快乐并且有成就感的事情，那能用自己的专业知识，帮助别人享受这份快乐和成就感，就是我最大的追求！",
        "linian": "付出就有回报，唯有运动不辜负。",
        "gailan": [
          {
            "img": "http://cdn.quncrm.com/ntc/assets/assets_ytw_image_x3_518f704d4d97d13370bca5274144672a.jpg",
            "title": "从稳定到爆发",
            "time": "07:40"
          },
          {
            "img": "http://cdn.quncrm.com/ntc/assets/assets_high_knee_march_image_x3_1554f2c0223fa1bee31268ec1932781d.jpg",
            "title": "马拉松肌肉耐力训练",
            "time": "09:10"
          }
        ]
      },
      {
        "bgimg":"http://cdn.quncrm.com/ntc/images/trainer/trainer-detail.jpg",
        "img": "http://cdn.quncrm.com/images/ntc/images/trainer/tony.png",
        "name": "王立鑫",
        "easeInfo": "NTC签约教练，擅长体能训练/瑜伽/营养搭配/体态调整，坐标上海。",
        "moreInfo": "10年工作累积，多次参加国际健身交流大会；2016年荣获美国加尼福尼亚州“健身杰出贡献奖”，美国ACE运动委员会国际私人教练认证；IPTA 运动营养进阶课程国际认证；美国瑜伽联盟500小时导师认证。身为理工男，在遇到健身训练这件事情之后，一发不可收拾。最大的改变是更加自信，更加坚韧。现在我想把健身训练传达给更多的人，让他们遇见更棒的自己。",
        "linian": "相比于雕刻自己的身体，我更喜悦于学员每一次小小的进步。",
        "gailan": [
          {
            "img": "http://cdn.quncrm.com/ntc/assets/assets_high_knee_march_image_x3_1554f2c0223fa1bee31268ec1932781d.jpg",
            "title": "马拉松训练",
            "time": "06:20"
          },
          {
            "img": "http://cdn.quncrm.com/ntc/assets/assets_bird_dogs_image_x3_9d6afac9d1615125db58ac5461440363.jpg",
            "title": "核心训练",
            "time": "08:30"
          }
        ]
      },
      {
        "bgimg":"http://cdn.quncrm.com/ntc/images/trainer/trainer-detail.jpg",
        "img": "http://cdn.quncrm.com/images/ntc/images/trainer/alex.png",
        "name": "王正军",
        "easeInfo": "NTC签约教练，擅长体能训练/团队训练，坐标上海。",
        "moreInfo": "太极FIT课程培训师，企业拓展课程培训师，NSCA教练认证。曾获2008全国健身先生冠军，2012全国十大健身榜样，2013全国健美操冠军。 生活中参与各种运动的ALEX建议大家保持每周3-4次的体能训练，可以帮助提升运动中的表现。",
        "linian": "我们有一个身体，双手可以去触摸万物、双耳去倾听天籁之音、双眼去观看五彩斑斓，双腿可以行走这个世界。但不管怎样，只要你动起来，整个世界都是你的！",
        "gailan": [
          {
            "img": "http://cdn.quncrm.com/ntc/assets/assets_dynamic_runner_lunges___alternating_image_x3_658a6e5aa7580537fef158badf0134da.jpg",
            "title": "马拉松训练",
            "time": "12:50"
          },
          {
            "img": "http://cdn.quncrm.com/ntc/assets/assets_hip_lifts___alternating_image_x3_8bb6c60198f72c56f9aa9ccf6dda6165.jpg",
            "title": "腿部耐力",
            "time": "08:50"
          }
        ]
      },
      {
        "bgimg":"http://cdn.quncrm.com/ntc/images/trainer/trainer-detail.jpg",
        "img": "http://cdn.quncrm.com/images/ntc/images/trainer/may.png",
        "name": "宋美美",
        "easeInfo": "NTC签约教练，擅长NTC/舞蹈/身心类课程/有氧训练课/马拉松，坐标广州。",
        "moreInfo": " 师范大学毕业的May自身扁平足，从小就不是运动高手。一次与健美操课程的遇见让她深爱并走上了健身之路，从而改变了她的一生，成为今天的Nike导师及健身明星教练。",
        "linian": "喜欢阳光与训练流汗的真实感，每天的成就感就是通过汗水去分享生活快乐。",
        "gailan": [
          {
            "img": "http://cdn.quncrm.com/ntc/assets/assets_run_in_place_image_x3_7e871f1fde41723f4ee024009c69fe8e.jpg",
            "title": "马拉松赛跑计划 ",
            "time": "05:10"
          },
          {
            "img": "http://cdn.quncrm.com/ntc/assets/assets_jog_in_place_image_x3_3b1eab1263e8c42a54eb54c982ffa15c.jpg",
            "title": "上肢激活训练 ",
            "time": "05:00"
          }
        ]
      },
      {
        "bgimg":"http://cdn.quncrm.com/ntc/images/trainer/trainer-detail.jpg",
        "img": "http://cdn.quncrm.com/images/ntc/images/trainer/qian.png",
        "name": "钱晟",
        "easeInfo": "NTC签约教练，艺人私教。专长于NTC/体能/自重训练，坐标北京。",
        "moreInfo": " 对于训练的专注让Happy每节课程都大汗淋漓，所以大家喜欢都喜欢叫他：钱老“湿”。在训练中，他一直相信能量可以通过汗水传递给学员，拥有愉悦的训练感受和氛围十分重要。 从前运动员的身份让他知道训练并非易事，各种啦啦操，健美操，健身相关比赛的冠军让他相信，只有坚持，专注去做，你才会有真的改变。",
        "linian": "健身在我看来，更像一种生活方式，一种有品味的生活方式。只有真正挥洒汗水换来的身体改变，才是真实的享受。",
        "gailan": [
          {
            "img": "http://cdn.quncrm.com/ntc/assets/assets_run_in_place_image_x3_7e871f1fde41723f4ee024009c69fe8e.jpg",
            "title": "马拉松123",
            "time": "16:20"
          },
          {
            "img": "http://cdn.quncrm.com/ntc/assets/assets_walkouts_image_x3_6cf52c821f37fcf60711d113b7d7df17.jpg",
            "title": "甩脂代谢",
            "time": "15:00"
          }
        ]
      },
      {
        "bgimg":"http://cdn.quncrm.com/ntc/images/trainer/trainer-detail.jpg",
        "img": "http://cdn.quncrm.com/images/ntc/images/trainer/claire.jpg",
        "name": "于洋",
        "easeInfo": "NTC签约教练，擅长NTC／核心／功能性训练／瑜伽，坐标上海。",
        "moreInfo": "从最初的舞蹈专业到教授几千人教练，Claire改变的理由说来很简单，她认为健身训练这事，一旦投入，就根本停不下来！她最享受的，是在训练中给自己设定目标。每一点进步，都激励她更加投入训练中。大汗淋漓的感觉，流汗、变化、目标和成就感会不断让她产生动力。",
        "linian": "享受训练的方法，就是变得更有目标，更有规律，把它当成一种生活习惯它就会在生活中改变你！",
        "gailan": [
          {
            "img": "http://cdn.quncrm.com/ntc/assets/assets_quad_rockers_image_x3_ecbdce785088654b50893dc716d1cda6.jpg",
            "title": "十分髋关节灵活性",
            "time": "10:00"
          },
          {
            "img": "http://cdn.quncrm.com/ntc/assets/assets_dynamic_chest_stretch_image_x3_cadcb9b12850c2d9286add1736922d4b.jpg",
            "title": "自由奔跑",
            "time": "09:00"
          }
        ]
      }
    ]
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    const query = Bmob.Query("_User");
    query.find().then(res => {
      console.log(res)
    });
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
