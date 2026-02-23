// ============================================================
// 此文件由 scripts/generate-universities.js 自动生成
// 请勿手动编辑！如需更新请运行：npm run generate:universities
// 生成时间：2026-02-23T14:07:37.174Z
// ============================================================

/**
 * 大学及院系信息（从 docs/ 目录结构自动扫描生成）
 *
 * 每所大学的 id 对应 docs/ 下的文件夹名，
 * 每个院系的 id 对应该大学文件夹下的子文件夹名，
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
        "websiteUrl": "https://www.s.u-tokyo.ac.jp/ja/admission/master/index.html"
      },
      {
        "id": "engineering",
        "name": "工学系研究科",
        "websiteUrl": "https://www.t.u-tokyo.ac.jp/soe/admission/general"
      },
      {
        "id": "IST",
        "name": "情報理工学系研究科",
        "websiteUrl": "https://www.i.u-tokyo.ac.jp/edu/entra/"
      },
      {
        "id": "frontier_sciences",
        "name": "新領域創成科学研究科",
        "websiteUrl": "https://www.k.u-tokyo.ac.jp/exam/info/"
      },
      {
        "id": "art_and_sciences",
        "name": "総合文化研究科",
        "websiteUrl": "https://www.c.u-tokyo.ac.jp/graduate/admission/master-doctor/index.html"
      },
      {
        "id": "III",
        "name": "学際情報学府",
        "websiteUrl": "https://www.iii.u-tokyo.ac.jp/admissions"
      },
      {
        "id": "mathematical_sciences",
        "name": "数理科学研究科",
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
        "websiteUrl": "https://www.eng.tohoku.ac.jp/admission/grad/master.html"
      },
      {
        "id": "environmental_studies",
        "name": "環境科学研究科",
        "websiteUrl": "https://www.kankyo.tohoku.ac.jp/newstudent/nittei-yoko.html"
      },
      {
        "id": "information_sciences",
        "name": "情報科学研究科",
        "websiteUrl": "https://www.is.tohoku.ac.jp/jp/entrance/"
      },
      {
        "id": "science",
        "name": "理学研究科",
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
        "websiteUrl": "https://www.eng.osaka-u.ac.jp/ja/entrance/g_admissions/"
      },
      {
        "id": "engineering_sciences",
        "name": "基礎工学研究科",
        "websiteUrl": "https://www.es.osaka-u.ac.jp/ja/examinee/graduate-school-of-engineering-science/entrance-exam/"
      },
      {
        "id": "IST",
        "name": "情報科学研究科",
        "websiteUrl": "https://www.ist.osaka-u.ac.jp/japanese/examinees/admission/"
      },
      {
        "id": "science",
        "name": "理学研究科",
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
        "websiteUrl": "https://www.env.nagoya-u.ac.jp/admission/index.html"
      },
      {
        "id": "engineering",
        "name": "工学研究科",
        "websiteUrl": "https://www.engg.nagoya-u.ac.jp/prospective/"
      },
      {
        "id": "informatics",
        "name": "情報学研究科",
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
        "websiteUrl": "https://www.titech.ac.jp/admissions/prospective-students/admissions/guide"
      },
      {
        "id": "environment_and_society",
        "name": "環境・社会理工学院",
        "websiteUrl": "https://www.titech.ac.jp/admissions/prospective-students/admissions/guide"
      },
      {
        "id": "MCS",
        "name": "情報理工学院",
        "websiteUrl": "https://www.titech.ac.jp/admissions/prospective-students/admissions/guide"
      },
      {
        "id": "MCT",
        "name": "物質理工学院",
        "websiteUrl": "https://www.titech.ac.jp/admissions/prospective-students/admissions/guide"
      },
      {
        "id": "science",
        "name": "理学院",
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
        "websiteUrl": "https://www.eng.kyushu-u.ac.jp/admissions.html"
      },
      {
        "id": "ISEE",
        "name": "システム情報科学府",
        "websiteUrl": "https://www.isee.kyushu-u.ac.jp/admissions_master.html"
      },
      {
        "id": "mathematics",
        "name": "数理学府",
        "websiteUrl": "https://www.math.kyushu-u.ac.jp/admission/graduateschool/"
      },
      {
        "id": "science",
        "name": "理学府",
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
        "websiteUrl": "https://www.waseda.jp/fsci/admissions_gs/"
      },
      {
        "id": "CSE",
        "name": "創造理工学研究科",
        "websiteUrl": "https://www.waseda.jp/fsci/admissions_gs/"
      },
      {
        "id": "FSE",
        "name": "基幹理工学研究科",
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
        "websiteUrl": "http://www.eng.kobe-u.ac.jp/examinee.html"
      },
      {
        "id": "science",
        "name": "理学研究科",
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
