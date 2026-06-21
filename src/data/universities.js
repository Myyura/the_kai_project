// ============================================================
// 此文件由 scripts/generate-universities.js 自动生成
// 请勿手动编辑！如需更新请运行：npm run generate:universities
// 生成时间：2026-06-21T10:36:10.766Z
// ============================================================

/**
 * 大学、院系及项目目录信息（从 docs/ 目录结构自动扫描生成）
 *
 * 每所大学的 id 对应 docs/ 下的文件夹名，
 * 每个院系的 id 对应该大学文件夹下的子文件夹名，
 * 每个项目目录的 id 对应院系下、年度目录前的路径，
 * name 取自各级 _category_.json 的 label 字段。
 */
export const universities = [
  {
    "id": "tokyo-university",
    "name": "東京大学",
    "color": "#1e3a5f",
    "departments": [
      {
        "id": "science",
        "name": "理学系研究科",
        "programs": [
          {
            "id": "astron",
            "name": "天文学専攻"
          },
          {
            "id": "chem",
            "name": "化学専攻"
          },
          {
            "id": "phys",
            "name": "物理学専攻"
          }
        ],
        "websiteUrl": "https://www.s.u-tokyo.ac.jp/ja/admission/master/index.html"
      },
      {
        "id": "engineering",
        "name": "工学系研究科",
        "programs": [
          {
            "id": "kyotsu",
            "name": "共通"
          },
          {
            "id": "eeis",
            "name": "電気系工学専攻"
          },
          {
            "id": "tmi",
            "name": "技術経営戦略学専攻"
          },
          {
            "id": "ap",
            "name": "物理工学専攻"
          },
          {
            "id": "mech",
            "name": "機械工学専攻"
          }
        ],
        "websiteUrl": "https://www.t.u-tokyo.ac.jp/soe/admission/general"
      },
      {
        "id": "IST",
        "name": "情報理工学系研究科",
        "programs": [
          {
            "id": "kyotsu",
            "name": "共通科目"
          },
          {
            "id": "ci",
            "name": "創造情報学専攻"
          },
          {
            "id": "cs",
            "name": "コンピュータ科学専攻"
          },
          {
            "id": "denshi",
            "name": "電子情報学専攻"
          },
          {
            "id": "suuri",
            "name": "数理情報学"
          }
        ],
        "websiteUrl": "https://www.i.u-tokyo.ac.jp/edu/entra/"
      },
      {
        "id": "frontier_sciences",
        "name": "新領域創成科学研究科",
        "programs": [
          {
            "id": "cbms",
            "name": "メディカル情報生命専攻"
          },
          {
            "id": "cse",
            "name": "複雑理工学専攻"
          },
          {
            "id": "materials",
            "name": "物質系専攻"
          },
          {
            "id": "otpe",
            "name": "海洋技術環境学専攻"
          }
        ],
        "websiteUrl": "https://www.k.u-tokyo.ac.jp/exam/info/"
      },
      {
        "id": "art_and_sciences",
        "name": "総合文化研究科",
        "programs": [
          {
            "id": "system",
            "name": "広域科学専攻"
          }
        ],
        "websiteUrl": "https://www.c.u-tokyo.ac.jp/graduate/admission/master-doctor/index.html"
      },
      {
        "id": "III",
        "name": "学際情報学府",
        "programs": [
          {
            "id": "biostat_bioinfo",
            "name": "学際情報学専攻 生物統計情報学コース"
          }
        ],
        "websiteUrl": "https://www.iii.u-tokyo.ac.jp/admissions"
      },
      {
        "id": "mathematical_sciences",
        "name": "数理科学研究科",
        "programs": [
          {
            "id": "ms",
            "name": "数理科学専攻"
          }
        ],
        "websiteUrl": "https://www.ms.u-tokyo.ac.jp/kyoumu/examination.html"
      }
    ]
  },
  {
    "id": "kyoto-university",
    "name": "京都大学",
    "color": "#2e8555",
    "departments": [
      {
        "id": "informatics",
        "name": "情報学研究科",
        "programs": [
          {
            "id": "amp",
            "name": "数理工学専攻"
          },
          {
            "id": "ams",
            "name": "先端数理科学専攻"
          },
          {
            "id": "cce",
            "name": "通信情報システム専攻"
          },
          {
            "id": "ist",
            "name": "知能情報学専攻"
          },
          {
            "id": "sys",
            "name": "システム科学専攻"
          }
        ],
        "websiteUrl": "https://www.i.kyoto-u.ac.jp/admission/"
      },
      {
        "id": "management",
        "name": "経営管理大学院",
        "websiteUrl": "https://www.gsm.kyoto-u.ac.jp/admission/"
      },
      {
        "id": "science",
        "name": "理学研究科",
        "programs": [
          {
            "id": "chem",
            "name": "化学専攻"
          },
          {
            "id": "eps",
            "name": "地球惑星科学専攻"
          },
          {
            "id": "math",
            "name": "数学・数理解析専攻"
          },
          {
            "id": "phys",
            "name": "物理学・宇宙物理学専攻"
          }
        ],
        "websiteUrl": "https://sci.kyoto-u.ac.jp/ja/admissions/ms"
      }
    ]
  },
  {
    "id": "tohoku-university",
    "name": "東北大学",
    "color": "#6b5b95",
    "departments": [
      {
        "id": "biomedical_engineering",
        "name": "医工学研究科",
        "websiteUrl": "https://www.bme.tohoku.ac.jp/admission/"
      },
      {
        "id": "engineering",
        "name": "工学研究科",
        "programs": [
          {
            "id": "apph",
            "name": "応用物理学専攻"
          },
          {
            "id": "che",
            "name": "化学・バイオ系"
          },
          {
            "id": "civil",
            "name": "土木工学専攻"
          },
          {
            "id": "ecei",
            "name": "電気・情報系"
          },
          {
            "id": "material",
            "name": "マテリアル・開発系"
          },
          {
            "id": "mech",
            "name": "機械系"
          },
          {
            "id": "qse",
            "name": "量子エネルギー工学専攻"
          }
        ],
        "websiteUrl": "https://www.eng.tohoku.ac.jp/admission/grad/master.html"
      },
      {
        "id": "environmental_studies",
        "name": "環境科学研究科",
        "programs": [
          {
            "id": "ee",
            "name": "エネルギー環境群"
          }
        ],
        "websiteUrl": "https://www.kankyo.tohoku.ac.jp/newstudent/nittei-yoko.html"
      },
      {
        "id": "information_sciences",
        "name": "情報科学研究科",
        "programs": [
          {
            "id": "math",
            "name": "数学教室"
          },
          {
            "id": "social",
            "name": "社会科学群"
          }
        ],
        "websiteUrl": "https://www.is.tohoku.ac.jp/jp/entrance/"
      },
      {
        "id": "science",
        "name": "理学研究科",
        "programs": [
          {
            "id": "chem",
            "name": "化学専攻"
          },
          {
            "id": "gp",
            "name": "地球物理学専攻"
          },
          {
            "id": "math",
            "name": "数学専攻"
          },
          {
            "id": "phys",
            "name": "物理学専攻"
          }
        ],
        "websiteUrl": "https://www.sci.tohoku.ac.jp/juken/graduate-admission.html"
      }
    ]
  },
  {
    "id": "osaka-university",
    "name": "大阪大学",
    "color": "#2980b9",
    "departments": [
      {
        "id": "engineering",
        "name": "工学研究科",
        "programs": [
          {
            "id": "eei",
            "name": "電気電子情報工学専攻"
          },
          {
            "id": "see",
            "name": "環境・エネルギー工学科"
          }
        ],
        "websiteUrl": "https://www.eng.osaka-u.ac.jp/ja/entrance/g_admissions/"
      },
      {
        "id": "engineering_sciences",
        "name": "基礎工学研究科",
        "programs": [
          {
            "id": "bio",
            "name": "生体システム工学"
          },
          {
            "id": "ee",
            "name": "電子光科学 (システム創成専攻)"
          },
          {
            "id": "me",
            "name": "機械科学 (機能創成専攻)"
          },
          {
            "id": "sigmath",
            "name": "数理科学 (システム創成専攻)"
          },
          {
            "id": "sys",
            "name": "知能システム学"
          }
        ],
        "websiteUrl": "https://www.es.osaka-u.ac.jp/ja/examinee/graduate-school-of-engineering-science/entrance-exam/"
      },
      {
        "id": "IST",
        "name": "情報科学研究科",
        "programs": [
          {
            "id": "ie",
            "name": "情報工学"
          },
          {
            "id": "IPS",
            "name": "情報数理学専攻"
          },
          {
            "id": "math",
            "name": "情報基礎数学専攻"
          }
        ],
        "websiteUrl": "https://www.ist.osaka-u.ac.jp/japanese/examinees/admission/"
      },
      {
        "id": "science",
        "name": "理学研究科",
        "programs": [
          {
            "id": "phys",
            "name": "物理学専攻"
          }
        ],
        "websiteUrl": "https://www.sci.osaka-u.ac.jp/ja/admissions/admissions_d/"
      }
    ]
  },
  {
    "id": "nagoya-university",
    "name": "名古屋大学",
    "color": "#c87533",
    "departments": [
      {
        "id": "EES",
        "name": "環境学研究科",
        "programs": [
          {
            "id": "eps",
            "name": "地球環境科学専攻"
          }
        ],
        "websiteUrl": "https://www.env.nagoya-u.ac.jp/admission/index.html"
      },
      {
        "id": "engineering",
        "name": "工学研究科",
        "programs": [
          {
            "id": "mae",
            "name": "機械航空系"
          },
          {
            "id": "nuee",
            "name": "電気電子情報工学科"
          }
        ],
        "websiteUrl": "https://www.engg.nagoya-u.ac.jp/prospective/"
      },
      {
        "id": "informatics",
        "name": "情報学研究科",
        "programs": [
          {
            "id": "aisys",
            "name": "知能システム学専攻"
          },
          {
            "id": "complex",
            "name": "複雑系科学専攻"
          },
          {
            "id": "is",
            "name": "情報システム学専攻"
          },
          {
            "id": "mi",
            "name": "数理情報学専攻"
          }
        ],
        "websiteUrl": "https://www.i.nagoya-u.ac.jp/gs/entranceexamination/"
      },
      {
        "id": "mathematics",
        "name": "多元数理科学研究科",
        "websiteUrl": "https://www.math.nagoya-u.ac.jp/ja/admission/"
      },
      {
        "id": "science",
        "name": "理学研究科",
        "programs": [
          {
            "id": "phys",
            "name": "物理学教室 (理学専攻 物質科学領域)"
          },
          {
            "id": "chem",
            "name": "化学講座 (理学専攻 物質・生命化学領域)"
          }
        ],
        "websiteUrl": "https://www.sci.nagoya-u.ac.jp/graduate/index.html"
      }
    ]
  },
  {
    "id": "TITech",
    "name": "東京科學大學 旧・東京工業大学",
    "color": "#1a7f8e",
    "departments": [
      {
        "id": "engineering",
        "name": "工学院",
        "programs": [
          {
            "id": "ee",
            "name": "電気電子系"
          },
          {
            "id": "ict",
            "name": "情報通信系"
          },
          {
            "id": "iee",
            "name": "経営工学系"
          },
          {
            "id": "mech",
            "name": "機械系"
          },
          {
            "id": "sc",
            "name": "システム制御系"
          }
        ],
        "websiteUrl": "https://www.titech.ac.jp/admissions/prospective-students/admissions/guide"
      },
      {
        "id": "environment_and_society",
        "name": "環境・社会理工学院",
        "programs": [
          {
            "id": "cv",
            "name": "土木・環境工学系"
          },
          {
            "id": "tse",
            "name": "融合理工学系"
          }
        ],
        "websiteUrl": "https://www.titech.ac.jp/admissions/prospective-students/admissions/guide"
      },
      {
        "id": "MCS",
        "name": "情報理工学院",
        "programs": [
          {
            "id": "cs",
            "name": "情報工学系"
          },
          {
            "id": "is",
            "name": "数理・計算科学系"
          }
        ],
        "websiteUrl": "https://www.titech.ac.jp/admissions/prospective-students/admissions/guide"
      },
      {
        "id": "MCT",
        "name": "物質理工学院",
        "programs": [
          {
            "id": "mat",
            "name": "材料系"
          }
        ],
        "websiteUrl": "https://www.titech.ac.jp/admissions/prospective-students/admissions/guide"
      },
      {
        "id": "science",
        "name": "理学院",
        "programs": [
          {
            "id": "earth",
            "name": "地球惑星科学系"
          },
          {
            "id": "math",
            "name": "数学系"
          },
          {
            "id": "phys",
            "name": "物理学系"
          }
        ],
        "websiteUrl": "https://www.titech.ac.jp/admissions/prospective-students/admissions/guide"
      }
    ]
  },
  {
    "id": "hokkaido-university",
    "name": "北海道大学",
    "color": "#4a90a4",
    "departments": [
      {
        "id": "fisheries_sciences",
        "name": "水産科学院 海洋生物資源科学専攻",
        "websiteUrl": "https://www2.fish.hokudai.ac.jp/admission/mcdc.html"
      },
      {
        "id": "IST",
        "name": "情報科学院",
        "programs": [
          {
            "id": "csit",
            "name": "情報科学専攻 情報理工学コース"
          },
          {
            "id": "joele",
            "name": "情報科学専攻 情報エレクトロニクスコース"
          },
          {
            "id": "mn",
            "name": "情報科学専攻 メディアネットワークコース"
          },
          {
            "id": "seitai",
            "name": "情報科学専攻 生体情報工学コース"
          },
          {
            "id": "sys",
            "name": "情報科学専攻 システム情報科学コース"
          }
        ],
        "websiteUrl": "https://www.ist.hokudai.ac.jp/examinfo/"
      },
      {
        "id": "public_policy",
        "name": "公共政策大学院",
        "websiteUrl": "https://www.hops.hokudai.ac.jp/admission/"
      },
      {
        "id": "science",
        "name": "理学院",
        "programs": [
          {
            "id": "phys",
            "name": "物性物理学専攻・宇宙理学専攻"
          }
        ],
        "websiteUrl": "https://www2.sci.hokudai.ac.jp/gs/admission-guideline"
      }
    ]
  },
  {
    "id": "kyushu-university",
    "name": "九州大学",
    "color": "#8e4557",
    "departments": [
      {
        "id": "economics",
        "name": "経済学府 経済工学専攻",
        "websiteUrl": "https://www.econ.kyushu-u.ac.jp/nyushi/"
      },
      {
        "id": "engineering",
        "name": "工学府",
        "programs": [
          {
            "id": "ac",
            "name": "応用化学専攻"
          },
          {
            "id": "civil",
            "name": "土木工学専攻"
          },
          {
            "id": "mech",
            "name": "機械系専攻"
          },
          {
            "id": "nams",
            "name": "船舶海洋工学専攻"
          },
          {
            "id": "qpn",
            "name": "量子物理工学専攻"
          }
        ],
        "websiteUrl": "https://www.eng.kyushu-u.ac.jp/admissions.html"
      },
      {
        "id": "ISEE",
        "name": "システム情報科学府",
        "programs": [
          {
            "id": "ist",
            "name": "情報理工学専攻"
          },
          {
            "id": "kyotsu",
            "name": "共通"
          }
        ],
        "websiteUrl": "https://www.isee.kyushu-u.ac.jp/admissions_master.html"
      },
      {
        "id": "mathematics",
        "name": "数理学府",
        "programs": [
          {
            "id": "mma",
            "name": "MMAコース"
          },
          {
            "id": "suuri",
            "name": "数理学コース"
          }
        ],
        "websiteUrl": "https://www.math.kyushu-u.ac.jp/admission/graduateschool/"
      },
      {
        "id": "science",
        "name": "理学府",
        "programs": [
          {
            "id": "geo",
            "name": "地球惑星科学専攻"
          },
          {
            "id": "phys",
            "name": "物理学専攻"
          }
        ],
        "websiteUrl": "https://www.sci.kyushu-u.ac.jp/admission/daigakuin_master.html"
      }
    ]
  },
  {
    "id": "waseda-university",
    "name": "早稲田大学",
    "color": "#9e3a3a",
    "departments": [
      {
        "id": "ASE",
        "name": "先進理工学研究科",
        "programs": [
          {
            "id": "butsuri",
            "name": "物理学及応用物理学専攻"
          },
          {
            "id": "kyodogenshi",
            "name": "共同原子力専攻"
          }
        ],
        "websiteUrl": "https://www.waseda.jp/fsci/admissions_gs/"
      },
      {
        "id": "CSE",
        "name": "創造理工学研究科",
        "programs": [
          {
            "id": "keieisystem",
            "name": "経営システム工学専攻"
          }
        ],
        "websiteUrl": "https://www.waseda.jp/fsci/admissions_gs/"
      },
      {
        "id": "FSE",
        "name": "基幹理工学研究科",
        "programs": [
          {
            "id": "denshibutsuri",
            "name": "電子物理システム学専攻"
          },
          {
            "id": "kikaikagaku",
            "name": "機械科学・航空宇宙専攻"
          },
          {
            "id": "sugaku",
            "name": "数学応用数理専攻"
          },
          {
            "id": "zairyokagaku",
            "name": "材料科学専攻"
          }
        ],
        "websiteUrl": "https://www.waseda.jp/fsci/admissions_gs/"
      }
    ]
  },
  {
    "id": "keio-university",
    "name": "慶應義塾大学",
    "color": "#1e3264",
    "departments": [
      {
        "id": "business",
        "name": "経営管理研究科",
        "websiteUrl": "https://www.kbs.keio.ac.jp/graduate/mba/admission/"
      }
    ]
  },
  {
    "id": "kobe-university",
    "name": "神戸大学",
    "color": "#34495e",
    "departments": [
      {
        "id": "economics",
        "name": "経済学研究科",
        "websiteUrl": "https://www.econ.kobe-u.ac.jp/admission-master/"
      },
      {
        "id": "engineering",
        "name": "工学研究科",
        "programs": [
          {
            "id": "ee",
            "name": "電気電子工学専攻"
          },
          {
            "id": "shimin",
            "name": "市民工学専攻"
          }
        ],
        "websiteUrl": "http://www.eng.kobe-u.ac.jp/examinee.html"
      },
      {
        "id": "science",
        "name": "理学研究科",
        "programs": [
          {
            "id": "chem",
            "name": "化学専攻"
          },
          {
            "id": "math",
            "name": "数学専攻"
          },
          {
            "id": "phys",
            "name": "物理学専攻"
          }
        ],
        "websiteUrl": "http://www.sci.kobe-u.ac.jp/admissions/master.html"
      },
      {
        "id": "system_informatics",
        "name": "システム情報学研究科",
        "websiteUrl": "https://www.csi.kobe-u.ac.jp/exam/master_exam.html"
      }
    ]
  },
  {
    "id": "tsukuba-university",
    "name": "筑波大学",
    "color": "#3d8b6d",
    "departments": [
      {
        "id": "science_and_technology",
        "name": "理工情報生命学術院",
        "programs": [
          {
            "id": "pas",
            "name": "数理物質科学研究群"
          },
          {
            "id": "sie",
            "name": "システム情報工学研究群"
          }
        ],
        "websiteUrl": "https://www.ap-graduate.tsukuba.ac.jp/course/"
      }
    ]
  },
  {
    "id": "UEC",
    "name": "電気通信大学",
    "color": "#3a6ea5",
    "departments": [
      {
        "id": "informatics_and_engineering",
        "name": "情報理工学研究科",
        "programs": [
          {
            "id": "cne",
            "name": "情報・ネットワーク工学専攻"
          },
          {
            "id": "is",
            "name": "情報学専攻"
          },
          {
            "id": "mise",
            "name": "機械知能システム学専攻"
          }
        ],
        "websiteUrl": "https://www.uec.ac.jp/education/graduate/admission/request.html"
      }
    ]
  },
  {
    "id": "hiroshima-university",
    "name": "広島大学",
    "color": "#c0626f",
    "departments": [
      {
        "id": "ASE",
        "name": "先進理工系科学研究科",
        "programs": [
          {
            "id": "esce",
            "name": "電気システム制御プログラム"
          },
          {
            "id": "is",
            "name": "情報科学プログラム"
          },
          {
            "id": "math",
            "name": "数学プログラム"
          },
          {
            "id": "phys",
            "name": "物理学プログラム"
          }
        ],
        "websiteUrl": "https://www.hiroshima-u.ac.jp/adse/admission"
      }
    ]
  },
  {
    "id": "TUAT",
    "name": "東京農工大学",
    "color": "#5b8c5a",
    "departments": [
      {
        "id": "engineering",
        "name": "工学府",
        "programs": [
          {
            "id": "kyotsu",
            "name": "共通数学"
          }
        ],
        "websiteUrl": "https://www.tuat.ac.jp/admission/nyushi_daigakuin/"
      }
    ]
  },
  {
    "id": "kanazawa-university",
    "name": "金沢大学",
    "color": "#7b6b8d",
    "departments": [
      {
        "id": "nst",
        "name": "自然科学研究科",
        "programs": [
          {
            "id": "eice",
            "name": "電子情報通信学専攻"
          }
        ],
        "websiteUrl": "https://www.kanazawa-u.ac.jp/education/admission/graduate"
      }
    ]
  }
];

/**
 * docs 文件夹名 → 大学显示名 映射表
 * 供 progress.js 等模块直接使用，无需硬编码
 */
export const UNIV_MAP = {
  "tokyo-university": "東京大学",
  "kyoto-university": "京都大学",
  "tohoku-university": "東北大学",
  "osaka-university": "大阪大学",
  "nagoya-university": "名古屋大学",
  "TITech": "東京科學大學 旧・東京工業大学",
  "hokkaido-university": "北海道大学",
  "kyushu-university": "九州大学",
  "waseda-university": "早稲田大学",
  "keio-university": "慶應義塾大学",
  "kobe-university": "神戸大学",
  "tsukuba-university": "筑波大学",
  "UEC": "電気通信大学",
  "hiroshima-university": "広島大学",
  "TUAT": "東京農工大学",
  "kanazawa-university": "金沢大学",
};
