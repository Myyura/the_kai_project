---
sidebar_label: "2018年8月実施 生産工学・制御工学 問題1"
tags:
  - Kobe-University
  - Engineering.Manufacturing.Machining-and-Cutting-Tools
  - Engineering.Manufacturing.Grinding-and-Self-Sharpening
  - Engineering.Manufacturing.Machine-Tool-Accuracy
---

# 神戸大学 工学研究科 機械工学専攻 2018年8月実施 生産工学・制御工学 問題1

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

以下の(1)〜(4)に答えよ。図は原題の条件を保った模式図である。

(1) 図1-1の二次元切削モデルについて、(a)角度 $\alpha,\phi$ の名称を示せ。(b)$\phi=20^\circ,30^\circ$ のどちらで切削力が大きいかを示し、その理由を簡潔に説明せよ。(c)工具材料に要求される特性を二つ挙げ、必要な理由を説明せよ。$d$ は切込み、$t$ は切りくず厚さである。

![図1-1 二次元切削モデル](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kobe-university/engineering/mech/2019/kobe201808_cutting.svg)

(2) 図1-2の砥石の状態について、(a)正常な状態①に対し、切れ味が劣化する②、③、④の名称を示せ。(b)②、③で切れ味が劣化する理由を説明せよ。(c)砥石の自生作用を説明せよ。

![図1-2 砥石の状態：灰色は結合剤、黒は砥粒、白い空隙は気孔](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kobe-university/engineering/mech/2019/kobe201808_grinding.svg)

(3) 図1-3の部品①について、(a)「M12」と「3-M12」の意味を説明せよ。(b)$102\times102\times22\,\mathrm{mm}$ のS45C鋼板からこの部品を加工するために必要な切削工具を列挙せよ。完成寸法は $100\times100\,\mathrm{mm}$、厚さ $20\,\mathrm{mm}$、中央穴 $\phi40$、$\mathrm{P.C.D.}\,70$ 上に $120^\circ$ 間隔で3個のM12ねじ穴がある。

![図1-3 部品図、寸法単位mm](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kobe-university/engineering/mech/2019/kobe201808_part.svg)

(4) 工作機械における「母性の原理」を簡潔に説明せよ。

#### 题目描述

(1) 对图1-1的二维切削模型：(a)写出 $\alpha,\phi$ 的名称；(b)比较 $\phi=20^\circ$ 与 $30^\circ$ 时切削力的大小，并解释原因；(c)列举刀具材料应具备的两项性能并说明理由。$d$ 为切入厚度，$t$ 为切屑厚度。

(2) 对图1-2的砂轮状态：(a)相对于正常状态①，写出②③④的名称；(b)说明②③切削能力降低的原因；(c)解释砂轮自锐作用。

(3) 对图1-3的零件：(a)解释“M12”和“3-M12”；(b)列出从 $102\times102\times22\,\mathrm{mm}$ 的S45C钢板加工该零件所需的切削工具。成品为 $100\times100\,\mathrm{mm}$、厚 $20\,\mathrm{mm}$，中央为直径 $40\,\mathrm{mm}$ 的通孔，直径 $70\,\mathrm{mm}$ 的分布圆上有3个相隔 $120^\circ$ 的M12螺纹孔。

(4) 简述机床的“母性原理”。

## **Kai**

### (1)

**(a)** $\boxed{\alpha:\text{すくい角},\quad\phi:\text{せん断角}}$。

**(b)** $\boxed{\phi=20^\circ}$ の方が大きい。切削幅を $b$ とすればせん断面積は $bd/\sin\phi$ であり、$\phi$ が小さいほど大きい。同じ被削材・切込みでせん断降伏応力を一定とみなすモデルでは、必要なせん断力が増えるためである。

**(c)** 例えば次の二つである。

- **高温硬さ・耐熱性**：切削熱が生じても刃先が軟化・塑性変形しないこと。
- **じん性・耐欠損性**：切削抵抗の変動や衝撃によるチッピング・破損に耐えること。

### (2)

**(a)** $\boxed{\text{\textcircled{2}}:\text{目づまり},\quad\text{\textcircled{3}}:\text{目つぶれ},\quad\text{\textcircled{4}}:\text{目こぼれ}}$。

**(b)** ②では切りくずが気孔を塞ぐ、または切れ刃に付着して覆うため、切りくずの排出と砥粒の切込みが妨げられる。③では砥粒の切れ刃が摩耗して平坦になり、鋭い刃として切削せず工作物をこするため、研削抵抗・発熱が増える。

**(c)** 砥粒の切れ刃が鈍化すると研削抵抗が増し、砥粒の適度な微小破砕や脱落が起きて新しい切れ刃が現れる。こうして砥石が切れ味を更新する働きが**自生作用**である。過度な脱落による目こぼれとは区別する。

### (3)

**(a)** Mはメートルねじ、12は呼び径 $12\,\mathrm{mm}$ を示す。ピッチを省略したM12は並目ねじで、ピッチは $1.75\,\mathrm{mm}$。「3-M12」はこのねじ穴が3箇所あることを表す。

**(b)** 必要な加工と工具の一例は次のとおり。

| 加工 | 工具 |
| --- | --- |
| 上下面を削り厚さ20 mmにする | 正面フライス |
| 外周4面を削り100 mm角にする | エンドミル |
| 穴位置の位置決め | スポットドリル／センタドリル |
| M12の下穴を加工する | 下穴用ドリル（径約10.2〜10.25 mm、使用タップの指定による） |
| M12のめねじを加工する | M12タップ |
| 中央の直径40 mm穴を加工する | 下穴ドリルと中ぐり工具、または輪郭加工用エンドミル |
| 穴入口・外周のかえりを除く | 面取り工具 |

### (4)

工作機械の運動誤差が工作物の形状・寸法に転写され、通常の創成加工では加工精度が機械自身の運動精度に支配されるという原理である。機械の精度を超える加工には、誤差平均化や計測に基づく補正などの工夫が必要となる。

## **Reference**

- [神戸大学 2019年度原問題（公式公開ファイルの保存版）](https://web.archive.org/web/20220524073517id_/http://www.mech.kobe-u.ac.jp/wp-content/uploads/2017/06/6_H31_Manufacture.pdf)
- [ノリタケ：研削加工の基礎](https://www.noritake.co.jp/products/support/detail/16)
- [OSG：ねじ下穴径表](https://www.osg.co.jp/media_dl/flier/file/n_117.pdf)
